<template>
  <img :class="imgClass" :src="imgSrc">
</template>
<script>
const isBrowser = typeof window !== 'undefined'
const SVGInjector = isBrowser ? require("svg-injector") : undefined;

export default {
    name: 'SvgInjector',
    props: {
        imgClass: {
            type: String,
            default: ''
        },
        imgSrc: {
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
        SVGInjector(this.$children, this.options, this.callback);
    }
}
</script>