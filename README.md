# Portfolio site built using react

This project is one of my current side projects. To see my portfolio site, please visit [nikhilvijayan.com](http://nikhilvijayan.com).

## Why another portfolio site?

The current site is a static site built with HTML and SASS (using gulp to run a simple build), which means I'm unable to extend it, or add more pages without having to copy/paste code for pages. This is less than ideal.

Currently the site's hosted on a digital ocean droplet. The deploy process currently is me physically dropping the necessary files onto the server over secure FTP. Again, less than ideal. I'm planning on deploying this over Netlify, which would allow a deploy pipeline.

Currently none of the code is tested. A deploy pipeline would allow me to run tests before going live.

## Details

### ESlint and Prettier

I'm using Wes Bos' [No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos).

