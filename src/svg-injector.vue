<template>
  <div>
    <img ref="img" :class="className" :src="src">
  </div>
</template>
<script>
import SVGInjector from 'svg-injector'

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
        SVGInjector(this.$refs.img, this.options, this.callback);
    }
}
</script>