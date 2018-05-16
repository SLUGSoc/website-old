# SLUGSoc Website The Second

This is a work in progress. `master` is not suitable for deployment, but it employs some concepts that are probably useful if you're making a static site.

## Installation

```
make build
```

This installs all dependencies using `yarn` (JS) and `bundler` (Jekyll/Ruby), then builds the site after moving the `yarn` packages to a `vendor` folder.

From there, the site is static and can be hosted from `_site`.

If you'd like to host locally and port forward, `make serve` will build the site and host it on port 4000 by default. Use a service such as `ngrok` to expose the port and allow others to view the site.

Due to the use of the `yarn` pipeline for ease of updating JS dependencies, it can't be hosted on GitHub Pages, to my knowledge.

--@boardfish
