# SLUGSoc Website The Second

## Installation

### Prerequisites

Ensure Docker is configured.

```
docker build -t slugs-site:latest .
# Only the below should need to be run from then on, unless the Dockerfile has changed.
docker run -v $HOME/Code/website:/usr/src/app --rm slugs-site:latest
```

This installs all dependencies using `yarn` (JS) and `bundler` (Jekyll/Ruby), then builds the site after moving the `yarn` packages to a `vendor` folder.

From there, the site is static and can be hosted from `_site`.

Due to the use of the `yarn` pipeline for ease of updating JS dependencies, it can't be hosted on GitHub Pages, to my knowledge.

--@boardfish
