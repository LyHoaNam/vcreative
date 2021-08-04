import { wrapFunctional } from './utils'

export { default as Header } from '../../components/Header.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as MenuUnlogin } from '../../components/menu/Unlogin.vue'
export { default as EleIcon } from '../../components/ele/Icon.vue'
export { default as EleNav } from '../../components/ele/Nav.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuUnlogin = import('../../components/menu/Unlogin.vue' /* webpackChunkName: "components/menu-unlogin" */).then(c => wrapFunctional(c.default || c))
export const LazyEleIcon = import('../../components/ele/Icon.vue' /* webpackChunkName: "components/ele-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyEleNav = import('../../components/ele/Nav.vue' /* webpackChunkName: "components/ele-nav" */).then(c => wrapFunctional(c.default || c))
