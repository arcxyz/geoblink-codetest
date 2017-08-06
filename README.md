# GeoBlink Code Test
## Introduction
For this test I use this technology stack:

 * AngularJS (With angular 4+ patterns)
 * D3.js (and a modified version of radar-chart-d3)
 * Sass
 * Webpack
 * Babel with preset-env,
 * node v6.11.2 and npm v3.10.10
 * yarn
 * Mocha
    
Directories:

 * `src/components`: All components on this folder are fully reusable. They take some data, do some magic, and run actions when something change. They also are inmutable so the data passed trough these components is never changed nor modified.
 * `src/dashboard`: This is a simple functional component that makes requests to an API and uses reusable components
    
## Develop
```bash
$ npm run start
```
## Build for production
```bash
$ npm run build
```
## Test
```bash
$ npm test
```
## Todo

 - [ ] Write more unit tests
 - [ ] Make it Responsive
 - [ ] Serve code in multiple chunks of code
 - [ ] Prepare radar-chart to d3 v4
 - [ ] Separate styles from the main bundle
 - [ ] Handle errors
