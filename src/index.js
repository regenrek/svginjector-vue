import SvgInjector from './svg-injector.vue'

export default {
    install(Vue, options = {}) {
        Vue.component(SvgInjector.name, SvgInjector)
    }
}