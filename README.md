# 📦 SVGInjector Module

 A dynamic inline SVG injection component for vue using [SVGInjector](https://github.com/iconic/SVGInjector)
 

## Install

```
#with npm
npm install svginjector-vue

# or ...

# with yarn
yarn add svginjector-vue

```


## Setup

### vue only

Then, register SVGInjector plugin in your app entry point:

```js
import Vue from 'vue'
import SvgInjector from 'svginjector-vue'

Vue.use(SvgInjector);
```



### Nuxt Plugin

If you're using nuxt you can include it as plugin or module. We recommend
the module approach (below)


nuxt.config.js (nuxt.js)
```json
plugins: [
  {src: '~/plugins/svginjector', ssr:false}
]
```

plugins/svginjector.js
```js
import Vue from 'vue'
import SVGInjectorVue from 'svginjector-vue'

Vue.use(SVGInjectorVue)
```


### Nuxt Module


__Recommend:__ You can add it as module to your nuxt.config.js/nuxt.js


```json
modules: [
   'svginjector-vue'
 ]
```


## Usage


````vue
    <svg-injector :class-name="'js-svg-injector'" :src="require('~/assets/svg/reports.svg')"></svg-injector>
````

### Nuxt Universal (SSR)
````vue
 <no-ssr>
   <svg-injector :class-name="'js-svg-injector'" :src="require('~/assets/svg/reports.svg')"></svg-injector>
 </no-ssr>
````

### Open Tasks

* Possible to make it usable for ssr? svginjector use window object

### Changelog

* 1.0.0 Working version 
