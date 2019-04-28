# Mondo Theme

A simple Hugo theme without warranties. 

Live at https://uzluisf.gitlab.io/

## Features

- Minimalist
- Supports tags and categories

## Quasi-features

- A tiny bit of JavaScript for tagging `<code>` elements with the language's 
  name if provided, wrapping `<pre>` elements with `div`s and 
  toggling the light/dark theme. It couldn't be helped ;(!

## Customization

Not much of it! However, in the `[params]` section of your `config.toml`
you can:

- Set a portrait image for the about section. Place image in `static/image`.
    - Example: `authorPortrait = "avatar.png"`
- Add website's description for the homepage.
    - Example: `description = "Welcome to my personal website."`
- Enable the next/previous page.
    - Example: `showNextPrevPage = true`

At a per page level, you can:

- Enable Mathjax support with `include_math = true`
- Indicate when page was last updated with `updated = DATE`

