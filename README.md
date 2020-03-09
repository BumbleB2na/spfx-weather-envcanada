## spfx-weather-envcanada

SharePoint Online Web Part that displays an Environment Canada weather forecast for one or more locations.

### About the project

Reads weather forecast from xml files that are made public [here](https://dd.weather.gc.ca/citypage_weather/xml/) by Environment Canada. Does not require an API. May require whitelisting of https://dd.weather.gc.ca/. Code to read weather from xml is contained in an npm package maintainted in a separate github project: [weather-envcanada](https://github.com/BumbleB2na/weather-envcanada).

SPFx ReactJS Web Part project was initially scaffolded with Yeoman generator using: yo @microsoft/sharepoint. Then ran: npm shrinkwrap.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
