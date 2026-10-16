import type { CollectionEntry } from "astro:content";
import type { Topic } from "@/topics";
import { getSortedPosts } from "./getSortedPosts";
import { slugifyAll } from "./slugify";

/** Published posts (newest first) that carry any of the topic's tags. */
export function getPostsForTopic(
  posts: CollectionEntry<"posts">[],
  topic: Topic
) {
  return getSortedPosts(posts).filter(({ data }) =>
    slugifyAll(data.tags).some(tag => topic.tags.includes(tag))
  );
}
