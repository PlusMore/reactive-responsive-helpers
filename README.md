Reactive Responsive Helpers
=======================================

A collection of reactive responsive helpers based on bootstrap-3 responsive helpers.

## Reactive render template based on screen size

Available helpers are ```hiddenXs, visibleXs, hiddenSm, visibleSm, hiddenMd, visibleMd, hiddenLg, visibleLg```

```html 
<template name="example">
  {{#hiddenXs}}
    {{> hiddenXSVersion}}
  {{/hiddenXs}}
</template>
```

## Javascript Helpers

```javascript
ResponsiveHelpers.screenSize(); // "xs", "sm", "md", "lg"
ResponsiveHelpers.isXs();
ResponsiveHelpers.isSm();
ResponsiveHelpers.isMd();
ResponsiveHelpers.isLg();
ResponsiveHelpers.deviceWidth(); // width of current device's viewport
ResponsiveHelpers.deviceHeight(); // width of current device's viewport
```

