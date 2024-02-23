---
title: How to write a new post
description: Learn how to write a new post
date: 2024-01-25 00:20:37 -0300
category: tutorial
tags:
  - markdown
  - jekyll
---

## Creating a new post

To create a new post you need to create a new file within the `_posts` folder.

The file needs to be named as follows: `YYYY-MM-DD-title-of-post.md`. The extension can be `md` or `markdown`.

The date defined in the file name will automatically be used as the post's publication date and the title defined will be used as the post's title and url, therefore, do not use accents in the file name.

To change this default information, use Front Matter.

## FrontMatter

In all new posts it is necessary to add Front Matter at the beginning of the file. It will override any previously set default value.

```yaml
---
title: Post Title
description: Description of the post
date: YYYY-MM-DD HH:MM:SS +/-TTTT
category: category
tags: tag
---
```

### Standard Layout

In this theme, the post layout was set to `post` by default, so there is no need to add the _layout_ variable in the Front Matter block.

### Date and Time Zone

To precisely define the time at which a post was published, it is recommended to define the _date_ variable with date, time and time zone.

### Categories and Tags

Categories and tags serve to separate subjects by specific topics. They have specific pages.

The categories and tags page can be accessed through the following urls, respectively:

https://yourdomain/categories

https://yourdomain/tags

## Post banner

If you want a banner to be displayed at the beginning of the post, simply add the variable _image_ and its attributes _path_, _alt_ and _caption_.

### Example of Front Matter with Image

```yaml
---
title: Post Title
description: Description of the post
date: YYYY-MM-DD HH:MM:SS +/-TTTT
image:
   path: "path/to/banner/post"
   alt: "Alt text for post banner"
   caption: "Caption for the post banner"
category: category
tags: tag
---
```