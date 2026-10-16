---
title: Making Delta Lake merges idempotent
pubDatetime: 2026-10-05T14:00:00Z
description: A simple dedupe-then-MERGE pattern that lets you safely re-run a Databricks pipeline without creating duplicates.
featured: true
tags:
  - data-engineering
  - databricks
  - sql
  - python
---

A pipeline you can't safely re-run is a pipeline that will eventually page you at 2 a.m. The most reliable fix I know is to make every write idempotent: running it twice should leave the table in the same state as running it once.

## The problem

Source batches often contain several versions of the same key. If you `MERGE` straight from that batch, Delta will raise an error because multiple source rows match one target row.

## Step 1: dedupe the source

Keep only the latest record per key before merging.

```python
from pyspark.sql import functions as F, Window

w = Window.partitionBy("order_id").orderBy(F.col("updated_at").desc())

latest = (
    spark.table("staging.orders_batch")
    .withColumn("rn", F.row_number().over(w))
    .filter("rn = 1")
    .drop("rn")
)

latest.createOrReplaceTempView("orders_latest")
```

## Step 2: merge with a freshness guard

```sql
MERGE INTO silver.orders AS t
USING orders_latest AS s
  ON t.order_id = s.order_id
WHEN MATCHED AND s.updated_at > t.updated_at THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *
```

The `s.updated_at > t.updated_at` guard means replaying an old batch can never overwrite newer data.

## Why this works

- Dedupe removes ambiguity inside a batch.
- The freshness guard removes ambiguity across batches.
- Re-running the same batch is a no-op.

I'll cover handling deletes and late-arriving data in a follow-up post.
