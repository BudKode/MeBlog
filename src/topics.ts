/**
 * The main areas of the blog. Posts show up in Featured/Recent as usual AND on
 * the matching topic page. A post belongs to a topic if it has ANY of the
 * topic's tags. Other tags keep working as regular tag pages.
 */
export type Topic = {
  /** URL segment: /topics/<slug>/ */
  slug: string;
  title: string;
  blurb: string;
  /** Tag slugs (kebab-case) that map to this topic. */
  tags: string[];
  /** Optional outside link shown on the topic page. */
  link?: { label: string; url: string };
};

export const topics: Topic[] = [
  {
    slug: "data-engineering",
    title: "Data Engineering",
    blurb: "Python, SQL, and Databricks: pipelines, patterns, and lessons from production.",
    tags: ["data-engineering", "databricks", "sql", "python"],
  },
  {
    slug: "cad-3d-printing",
    title: "CAD & 3D Printing",
    blurb: "Designs, tolerances, and what the failed prints taught me.",
    tags: ["cad", "3d-printing"],
    link: {
      label: "Browse my designs on MakerWorld",
      url: "https://makerworld.com/en/@user_3428406922",
    },
  },
];
