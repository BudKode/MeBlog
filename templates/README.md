# Post templates (never published: this folder is outside `src/content`)

1. Copy `cody-story.md` to `src/content/pen/cody/<slug>.md` (or `main-post.md` to `src/content/posts/<slug>.md`); the file name becomes the URL.
2. Fill in every field between the `---` lines; set `draft: false` to publish and use a `pubDatetime` that isn't in the future.
3. Always put the title in double quotes; a title with a colon (`Stories from the Road: ...`) breaks the build otherwise.
4. Indent with 2 spaces, never tabs; `kind` must be one of `post`, `news`, `excerpt`, `book-update` (stories use `post`).
5. In poems, end each line inside a stanza with a trailing backslash `\` to keep the line break, and leave a blank line between stanzas.
