## What this is

this shows how to use netlify with just plain html js and css, together with netlify functions.

## How to use (1 click)

Click this to fork and deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-labs/vanilla-html-example)

## How to use (manual)

Clone or fork this repo, link to a git host (like GitHub or GitLab), and deploy to Netlify at https://app.netlify.com

## How to use (Netlify Dev)

Make sure you have the latest CLI version:

```bash
npm i -g netlify-cli
```

then:

```
git clone https://github.com/netlify-labs/vanilla-html-example # or clone your own fork of this repo
cd vanilla-html-example
netlify dev
```

and develop away! use `netlify functions:create` to scaffold new functions as needed

To deploy:

```
netlify init
# optionally do a preview deploy: netlify deploy
# or straight to prod: netlify deploy --prod
```
