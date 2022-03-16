# Mellow CSS
The Mellow Design System is the design language used for Sippy starting with the 2022 design refresh. For an (early) implementation of the design system, see [Sippy.cloud](http://sippy.cloud).

## Development
### Initial setup
1. Clone this repository.
2. Run `npm install` to install de npm dependencies.

### Starting development server
1. Run `php run hugo` to run the documentation, which will be available on localhost:1313.
2. Run `npm start` to start up the watch script that is responsible for linting and compiling Mellow.

### Scripts
Mellow CSS contains a number of npm scripts. We'll list their function below:

| Script | Purpose |
| ------ | ------- |
| `bundlewatch` | Checks if the CSS size is below a given threshold configured in `package.json`. |
| `clean` | Removes the `/dist` folder. |
| `docs:build` | Builds the documentation into the `/build` folder. |
| `docs` | Runs the documentation server on localhost:1313. |
| `js:compile` | Compiles the JS as configured in `build/rollup.config.js` into the `/dist` folder. |
| `js:minify` | Compresses the javascript in the `/dist` folder with Terser. |
| `js` | Runs `js:compile`, then `js:minify`. |
| `lint` | Runs `js:lint` and `scss:lint`. |
| `prepare` | Script that runs automatically by npm, will run `prod`. |
| `prod` | Runs `clean`, then `scss`, then `js`. |
| `scss` | Runs `scss:lint`, then `scss:compile`, then `scss:prefix`, then `scss:copy`. |
| `scss:compile` | Compiles the SCSS to the `/dist` folder. |
| `scss:copy` | Merges all SCSS files and provides it as `dist/mellow.scss`. |
| `scss:lint` | Runs `scss:lint:style` and `scss:lint:vars`. |
| `scss:lint:style` | Runs stylelint. |
| `scss:lint:vars` | Runs a check for unused vars in the SCSS. |
| `scss:prefix` | Runs PostCSS to properly prefix all CSS features that need it. |
| `start` | Runs `docs` and `watch`. |
| `watch` | Runs `watch:js:core`, `watch:js:docs`, `watch:css:core`, and `watch:css:docs`. |
| `watch:js:core` | Runs `js` while watching `js/src`. |
| `watch:js:docs` | Runs `js:lint` while watching `hugo/assets/js/`. |
| `watch:scss:core` | Runs `scss` while watching `scss/`. |
| `watch:scss:docs` | Runs `scss:lint` while watching `hugo/assets/scss/`. |

# License
AGPL v3
