import type { CollectionEntry } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import config from "@/config";

export type PenEntry = CollectionEntry<"pen">;

/** Entry ids look like "cody/hello-world": first segment is the pen name id. */
export const penOf = (entry: PenEntry) => entry.id.split("/")[0] ?? "";
export const penSlug = (entry: PenEntry) => entry.id.split("/").slice(1).join("/");

/** Excludes drafts, and (in production) posts scheduled for the future. */
export function penFilter({ data }: PenEntry) {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - config.posts.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
}

/** One pen name's visible posts, newest first. */
export function getPenPosts(entries: PenEntry[], penId: string) {
  return entries
    .filter(entry => penOf(entry) === penId && penFilter(entry))
    .sort(
      (a, b) =>
        new Date(b.data.pubDatetime).getTime() -
        new Date(a.data.pubDatetime).getTime()
    );
}

export const penUrl = (penId: string, path = "") =>
  getRelativeLocaleUrl(config.site.lang, `${penId}/${path}`);

export const penPostUrl = (entry: PenEntry) =>
  penUrl(penOf(entry), `posts/${penSlug(entry)}`);
