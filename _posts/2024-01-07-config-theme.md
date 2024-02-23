---
title: How to configure and use this theme
description: Understand what it takes to start using this theme.
date: 2024-01-07 19:48:47 -0300
category: tutorial
tags:
  - jekyll
  - github
---

## Prerequisites

This is a theme built using the Jekyll static site generator, which is developed using Ruby, so you will need to have Ruby and some other dependencies installed. Visit the [official Jekyll website](https://jekyllrb.com/docs/installation/) and install the necessary dependencies.

## Theme installation

There are three ways to obtain this theme:

1. Repository template (most recommended)
2. Uploading files to a new repository (more work)
3. Fork the repository (least recommended)

### 1. Using the template repository available on GitHub

Log in to your GitHub account, go to this [theme's repository](https://github.com/elainefs/jekyll-theme-case) and click `Use this template`. A new page will open to create a new repository. Set the name of this repository to `USERNAME.github.io`, where `USERNAME` is your GitHub username.

After saving the new repository, GitHub will automatically try to publish the site and you will receive a build error. This happens because by default GitHub will try to publish the site using the standard _pages-build-deployment_ workflow with a branch as the source.

To resolve this problem, follow these steps:

1. Go to your repository and, in the top bar, click on Settings
2. Then in the sidebar, click on Pages
3. In **Source** select _GitHub Actions_
4. In the top bar, click on Actions
5. In the sidebar click on _Deploy jekyll site to Pages_
6. Click the gray _Run workflow_ button
7. Make sure the branch you select is `gh-pages`
8. Click the green _Run workflow_ button to run

After that, your website will be live at the url `https://USERNAME.github.io`

You may continue to see an `Initial commit` with a red X as if there was still an error, but when you try to access your site it will be working normally. This should be resolved after the next commit.
{: .bubble-note}

### 2. Uploading files to a new repository

Log in to your GitHub account, go to this [theme's repository](https://github.com/elainefs/jekyll-theme-case), click `Releases` in the sidebar, and download the files for this theme in the last version to have the theme with the most up-to-date features possible. Create a new empty repository with the name `USERNAME.github.io`, just select the "Public" option.

There are several ways to upload theme files to your new repository, the simplest is:

1. Extract the files from the compressed archive you downloaded
2. On the repository's home screen, under "Quick setup..." click on the "uploading an existing file" option
3. On the next screen, drag the extracted files to the indicated location or click on "Choose your files"
4. After all files have been uploaded, click the Commit Changes button
5. After that, in the top bar, click on Settings
6. In _Default branch_, in the General tab, change the branch name from `main` to `gh-pages`
7. In the Settings sidebar, click Pages
8. Under _Sources_ select _GitHub Actions_
9. In the top bar, click on Actions
10. In the sidebar click on the "New workflow" button
11. Search for Jekyll
12. Click Configure, do not change anything in the file, click Commit changes

After that, your website will be live at the url `https://USERNAME.github.io`

Jekyll using Docker image and GitHub Pages Jekyll should not be used, use workflow named as Jekyll only.
{: .bubble-note}

### 3. Creating a fork of the repository

Log in to your GitHub account, go to this [theme's repository](https://github.com/elainefs/jekyll-theme-case) and click `Fork`. A new page will open to create a new fork. Set the name of this repository to `USERNAME.github.io`. Check the option "Copy the `gh-pages` branch only" and click Create fork.

1. After that, in the top bar, click on Settings
2. In General, just below Repository Name, uncheck the Template repository option
3. In the sidebar, click Pages
4. In _Sources_ select _GitHub Actions_
5. In the top bar, click on Actions
6. A warning message will appear that the workflows are disabled, click on the green button to enable them
7. In the sidebar click on _Deploy jekyll site to Pages_
8. Click the gray _Run workflow_ button
9. Make sure the branch you select is `gh-pages`
10. Click the green _Run workflow_ button to run

After that, your website will be live at the url `https://USERNAME.github.io`

Forking the repository is most recommended when you want to make contributions to the theme.
{: .bubble-note}

## Setting up your new website

Although it is possible to manipulate all files from the GitHub repository itself, it is more interesting to do this from your local machine.

To do this, clone your repository to your local machine.

### Installing dependencies

After cloning your repository, run the following command to install the dependencies:

```bash
bundle install
```

### Customizing your new site

After installing the dependencies, change the variables present in the `_config.yml` file, some examples:

- url
- lang
- timezone
- title
- tagline
- description
- avatar

There are other variables that can and should be changed.

Whenever changes to the `_config.yml` file are made, the server needs to be restarted.
{: .bubble-note}

### Changing Favicon

To change the theme's favicon, add the favicon files inside the `assets/img/favicon` folder.

The favicons for this theme were created through the website [Favicon Generator](https://www.favicon-generator.org/).

### Translating Template

Although this template was developed by a Brazilian, it is in English, and does not yet have the template's automatic translation feature. You can translate page names and permalinks yourself, but be careful to do this everywhere equally so as not to break the theme.

_Do not change the name of the files_, for example, if you want to translate the title of the page `about.html`, do not change the file name to `sobre.html`, or another language, change the Front Matter of that page.
{: .bubble-warning}

When changing the `permalink` of a page, it is necessary to change this value in other parts of the site.

On your local machine, use an IDE that has the search/replace feature for words in every document to avoid forgetting to change the values somewhere.
{: .bubble-tip}

### Running local server

Before sending your changes to the repository, it is important to check that everything is working. To do this, run the local server with the following command:

```bash
bundle exec jekyll serve
```

## Hosting on GitHub

Before uploading the files to GitHub, make sure you have changed the `url` variable present in the `_config.yml` file to the url of your repository (`https://USERNAME.github.io`).

If you are installing this theme in a repository other than `https://USERNAME.github.io`, change the `baseurl` variable to the name of the repository in question preceded by a slash. Eg: `/blog`.
{: .bubble-note}

This theme only works with the default `gh-pages` branch.
{: .bubble-warning}

To change your repository's default branch:

1. Go to your repository and click on Settings
2. In General, Default branch change to `gh-pages`

To change the default branch via the command line:

`git branch -m main gh-pages`

`git fetch origin`

`git branch -u origin/gh-pages gh-pages`

`git remote set-head origin -a`