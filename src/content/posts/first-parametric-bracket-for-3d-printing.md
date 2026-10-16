---
title: Designing a parametric bracket for 3D printing
pubDatetime: 2026-10-08T18:30:00Z
description: Lessons from designing a simple mounting bracket with parameters, tolerances, and print orientation in mind.
tags:
  - cad
  - 3d-printing
---

A bracket is the "hello world" of functional 3D printing: simple enough to finish in an evening, with enough gotchas to teach you real lessons.

## Start with parameters, not geometry

Before drawing anything, I define named parameters: wall thickness, hole diameter, screw head diameter, and clearance. When a measurement changes (and it always does), I edit one number instead of rebuilding sketches.

## Design for the printer

1. **Orient for strength.** Layers are weakest between each other, so make sure the main load doesn't try to peel layers apart.
2. **Add clearance to mating parts.** I start around 0.2 mm per side and tune from there with a test print.
3. **Avoid steep overhangs.** Keep them under roughly 45 degrees or use a chamfer instead of a flat ceiling.
4. **Fillet stress corners.** Sharp inside corners are where prints crack.

## Print, measure, adjust

My first version fit badly, which is the point. Print a small test piece, measure it with calipers, then feed the real numbers back into your parameters.

## Next time

I want to try adding heat-set inserts for threads that survive repeated assembly.

*Files for this design will be posted here once I tidy them up.*
