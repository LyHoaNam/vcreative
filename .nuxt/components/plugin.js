import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  EleIcon: () => import('../../components/ele/Icon.vue' /* webpackChunkName: "components/ele-icon" */).then(c => wrapFunctional(c.default || c)),
  EleNav: () => import('../../components/ele/Nav.vue' /* webpackChunkName: "components/ele-nav" */).then(c => wrapFunctional(c.default || c)),
  MenuUnlogin: () => import('../../components/menu/Unlogin.vue' /* webpackChunkName: "components/menu-unlogin" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
