<template>
  <img ref="img" :class="class" :src="src">
</template>
<script>
const isBrowser = typeof window !== 'undefined'
const SVGInjector = isBrowser ? require("svg-injector") : undefined;

export default {
    name: 'SvgInjector',
    props: {
        class: {
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
        SVGInjector(this.$refs.img, this.options, this.callback);
    }
}
</script>