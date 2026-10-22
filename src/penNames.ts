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
    tagline: "Atmospheric sci-fi and fantasy fiction.",
    bio: "Cody McReanor writes atmospheric sci-fi and fantasy fiction. Short stories, novel excerpts, and progress updates live here.",
    showOnMainSite: true,
    linkBackToMain: true,
  },
  {
    id: "jackie",
    name: "Jackie McReanor",
    tagline: "Notes from the writing desk.",
    bio: "Jackie McReanor is a pen name on this site. Writing and updates will be shared here.",
    // Flip these to true to link this section to/from the main site.
    showOnMainSite: false,
    linkBackToMain: false,
  },
];

export const getPen = (id: string) => penNames.find(p => p.id === id);
