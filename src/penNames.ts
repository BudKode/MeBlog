/**
 * Pen-name "faces" of the site. Each one gets its own section at /<id>/,
 * its own colors (see src/styles/pen-themes.css) and its own content folder:
 *   src/content/pen/<id>/*.md
 * Bio pages live in src/content/pages/<id>.md
 */
export type PenName = {
  /** URL segment AND content folder name. Lowercase, no spaces. */
  id: string;
  /** Name shown in the header and page titles. */
  name: string;
  /** One-line tagline under the name. */
  tagline: string;
  /** Short bio shown on the section's home page. */
  bio: string;
  /** Show a small, muted link to this section in the main site's footer. */
  showOnMainSite: boolean;
  /** Show a small, muted link back to the main site in this section's footer. */
  linkBackToMain: boolean;
};

export const penNames: PenName[] = [
  {
    id: "cody",
    name: "Cody McReanor",
    tagline: "Stories where ordinary places hide strange histories.",
    bio: "Cody McReanor writes atmospheric fiction and slow-burning mysteries. Excerpts, news, and updates on works in progress live here.",
    showOnMainSite: true,
    linkBackToMain: true,
  },
  {
    id: "jackie",
    name: "Jackie McReanor",
    tagline: "Book updates and notes from the writing desk.",
    bio: "Jackie McReanor is working on her first book. Follow along for progress updates, excerpts, and announcements.",
    // Lauren's call: flip these to true if she wants links to/from the main site.
    showOnMainSite: false,
    linkBackToMain: false,
  },
];

export const getPen = (id: string) => penNames.find(p => p.id === id);
