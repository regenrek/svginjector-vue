<template>
  <div>
    <img ref="img" :class="className" :src="src">
  </div>
</template>
<script>
import SVGInjector from 'svg-injector'
//const isBrowser = typeof window !== 'undefined'
//const SVGInjector = isBrowser ? require("svg-injector") : undefined;

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
        options: {
            type: Object,
            default: undefined
        }
    },
    mounted() {
        console.debug(this.$refs.img)
        console.debug(this.$children)
        console.debug(SVGInjector)
        SVGInjector(this.$refs.img, this.options, this.callback);
    }
}
</script>