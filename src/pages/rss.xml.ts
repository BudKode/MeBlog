import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import { penFilter, penOf, penPostUrl } from "@/utils/pen";
import { getPen } from "@/penNames";
import config from "@/config";

export async function GET() {
  const posts = getSortedPosts(await getCollection("posts"));

  // Pen-name posts, only for pens that are linked from the main site.
  const penEntries = (await getCollection("pen")).filter(
    entry => penFilter(entry) && getPen(penOf(entry))?.showOnMainSite
  );

  const items = [
    ...posts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, config.site.lang),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
    ...penEntries.map(entry => ({
      link: penPostUrl(entry),
      title: `${getPen(penOf(entry))?.name}: ${entry.data.title}`,
      description: entry.data.description,
      pubDate: new Date(entry.data.modDatetime ?? entry.data.pubDatetime),
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: config.site.title,
    description: config.site.description,
    // Include the base path (/MeBlog/) so the channel link points at the site.
    site: new URL(import.meta.env.BASE_URL, config.site.url).href,
    items,
    customData: `<copyright>Copyright © ${new Date().getFullYear()} ${config.site.author}. All rights reserved.</copyright>`,
  });
}
