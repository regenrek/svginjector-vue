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
   'svginjector/nuxt'
   
   // or 
   ['svginjector/nuxt', {ssr: false}]
 ]
```


## Usage

````vue
 <svg-injector :class-name="'js-svg-injector'" :src="require('~/assets/svg/image.svg')"></svg-injector>
````


### Known Issues

* This is only tested with nuxt 2

### Changelog

* 0.0.1 First Commit 
