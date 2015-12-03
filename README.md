
# Dev Setup

```
Fork this repo, then run these commands:

$ npm install	// install bower tasks
$ bower install	// install components
$ grunt build   // build the dependencies

From there the demo should be up-to-date, just open it in a browser.

```

# User Guide

## HTML Markup

Simply include the X-Tag library build and the Bing Map component's source includes (JS, CSS), and use the following HTML tag anywhere in your app you want to display a Bing Map:

```HTML
<x-bing-map type="road" zoom="7" center="47.5952, 122.3316"></x-bing-map>
```

## HTML Attributes & JavaScript Getter/Setters

- `type` - can be set to the string name of any of the following supported map type names: [MapTypeId reference](https://msdn.microsoft.com/en-us/library/gg427625.aspx)

- `zoom` - a zoom level number from 1 to 10

- `center` - a latitude and longitude coordinate pair separated by commas, ex: '47.5952, 122.3316'
