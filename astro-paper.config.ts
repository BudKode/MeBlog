import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://BudKode.github.io",
    title: "Tanner Cranor",
    description: "Data engineering, 3D printing, and writing: notes from a curious builder.",
    author: "Tanner Cranor",
    profile: "https://github.com/BudKode",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Denver",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/BudKode/MeBlog/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/BudKode" },
    {
      name: "makerworld",
      // Check this opens your profile; fix the handle/URL here if not.
      url: "https://makerworld.com/en/@user_3428406922",
      linkTitle: "BudKodeDesigns on MakerWorld",
    },
    // TODO: add your real profiles, then uncomment:
    // { name: "linkedin", url: "https://www.linkedin.com/in/YOUR-HANDLE/" },
    // { name: "mail", url: "mailto:you@example.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});