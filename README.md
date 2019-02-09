# 📦 SVGInjector Module

 A dynamic inline SVG injection component for vue using [SVGInjector](https://github.com/iconic/SVGInjector)
 

## Install

```
# with npm
npm install svginjector-vue

# or ...

# with yarn
yarn add svginjector-vue
```


## Setup

### Vue Plugin

You can easily register SVGInjector plugin in your app entry point:
```js
import Vue from 'vue'
import SVGInjectorVue from 'svginjector-vue'

Vue.use(SVGInjectorVue)
```


### Nuxt Module

If you're using nuxt you can include it as module.

```json
modules: [
   'svginjector-vue/nuxt',
   
   // or without ssr
   ['svginjector-vue/nuxt', { ssr:false }]
 ]
```

## Usage

````vue
    <svg-injector :class-name="'js-svg-injector'" :src="require('~/assets/svg/reports.svg')"></svg-injector>
````


### Additional Notes


#### Nuxt Plugin

You can also use SVGInjector as plugin instead of a module

```json
// nuxt.config.js (nuxt.js)

plugins: [
  '~/plugins/svginjector.js'
]
```

```js
// plugins/svginjector.js

import Vue from 'vue'
import SVGInjectorVue from 'svginjector-vue'

Vue.use(SVGInjectorVue)
```

#### Usage without SSR

You can use this plugin also without Server side rendering. But it's not recommend.
Just put <no-ssr> tag around it
````vue
 <no-ssr>
   <svg-injector :class-name="'js-svg-injector'" :src="require('~/assets/svg/reports.svg')"></svg-injector>
 </no-ssr>
````

### Open Tasks

* Make this plugin more flexible with additional props (if necessary)

### Changelog

* 1.0.1 SSR is working 
* 1.0.0 Working version 
