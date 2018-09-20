# SLUGSoc Website The Second

## Installation

### Prerequisites

Ensure Docker is configured, and navigate to the directory this repository has cloned into.

```
docker build -t slugs-site:latest .
# Only the below should need to be run from then on, unless the Dockerfile has changed.
docker run -v $(pwd):/usr/src/app --rm slugs-site:latest
```

This installs all dependencies using `yarn` (JS) and `bundler` (Jekyll/Ruby), then builds the site after moving the `yarn` packages to a `vendor` folder.

From there, the site is static and can be hosted from `_site`. To see this in action quickly, try running `python -m http.server` in the `_site` directory once you've built the site using the above commands. Use a web server such as nginx or Apache to host the site's contents in production.

Due to the use of the `yarn` pipeline for ease of updating JS dependencies, it can't be hosted on GitHub Pages, to my knowledge.

--@boardfish
