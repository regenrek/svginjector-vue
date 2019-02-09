<template>
  <div>
    <img ref="img" :class="className" :src="src" :alt="alt">
  </div>
</template>
<script>
let SVGInjector;
if(process.browser)
    SVGInjector = require('svg-injector')

export default {
    name: 'SvgInjector',
    props: {
        className: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            default: ''
        },
        callback: {
            type: Function,
            default: () => true
        },
        alt: {
            type: String,
            default: ''
        },
        options: {
            type: Object,
            default: undefined
        }
    },
    mounted() {
        if(typeof SVGInjector !== undefined) {
            SVGInjector(this.$refs.img, this.options, this.callback);
        }
    }
}
</script>