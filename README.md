# Hugo - Letterpad Theme

This is the official default theme of Letterpad.

-   Written in React
-   Uses Styled Components
-   Light/Dark Mode
-   Optimised for performance
-   SEO ready
-   Integration with disqus for comments

## Screenshots

Full Width Layout in dark mode
![Dark](public/images/screenshots/dark-full-width.jpg)

Layout in light mode (iPad)
![Dark](public/images/screenshots/light-home.jpg)

Article Page
![Dark](public/images/screenshots/dark-single-post.jpg)

## How to install ?

You will have to install the letterpad engine first. If you have not installed this yet, [visit this repository](https://github.com/letterpad/letterpad) for instructions to install.

After installing letterpad, navigate to folder `client/themes`.

```
git clone git@github.com:letterpad/theme-hugo.git hugo
yarn install
```

Now you have to build the theme to create optimized bundles. Navigate to the root folder of letterpad and run

```
theme=hugo yarn build
```

Once thats done, run the server.

```sh
# development
yarn dev

# production
yarn prod
```
