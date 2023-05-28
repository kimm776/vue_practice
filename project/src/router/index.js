import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/datebinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/datebinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/datebinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/datebinding/select',
    name: 'DataBindingSelectView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/datebinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingCheckboxView.vue')
  },
  {
    path: '/datebinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/datebinding/attr',
    name: 'DataBindingAttributeView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/datebinding/list',
    name: 'DataBindingListView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/datebinding/class',
    name: 'DataBindingClassView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/datebinding/style',
    name: 'DataBindingStyleView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/1_databinding/DataBindingStyleView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/2_event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/2_event/EventKeyView.vue')
  },
  {
    path: '/extra/computed',
    name: 'ComputedView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/3_extra/ComputedView.vue')
  },
  {
    path: '/extra/watch',
    name: 'WatchView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/3_extra/WatchView.vue')
  },
  {
    path: '/extra/lifecycle',
    name: 'LifecycleHockView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/3_extra/LifecycleHockView.vue')
  },
  {
    path: '/reuse/pagetitle',
    name: 'PageView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/4_reuse/PageView.vue')
  },
  {
    path: '/reuse/parent',
    name: 'ParentView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/4_reuse/ParentView.vue')
  },
  {
    path: '/reuse/list',
    name: 'ListView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/4_reuse/ListView.vue')
  },
  {
    path: '/reuse/slot',
    name: 'SlotView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/4_reuse/SlotView.vue')
  },
  {
    path: '/advanced/provide',
    name: 'ProvideView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/5_advanced/ProvideView.vue')
  },
  {
    path: '/advanced/directive',
    name: 'CustomDirectiveView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/5_advanced/CustomDirectiveView.vue')
  },
  {
    path: '/advanced/mixin',
    name: 'MixinView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/5_advanced/MixinView.vue')
  },
  {
    path: '/advanced/plugin',
    name: 'PluginView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/5_advanced/PluginView.vue')
  },
  {
    path: '/vuex/todo',
    name: 'TodoView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/6_vuex/TodoView.vue')
  },
  {
    path: '/vuex/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/6_vuex/LoginView.vue')
  },
  {
    path: '/composition/setup',
    name: 'SetupView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/7_composition/SetupView.vue')
  },
  {
    path: '/composition/ref',
    name: 'RefView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/7_composition/RefView.vue')
  },
  {
    path: '/composition/func',
    name: 'FuncView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/7_composition/FuncView.vue')
  },
  {
    path: '/login/kakao',
    name: 'KakaoLoginView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/8_login/KakaoLoginView.vue')
  },
  {
    path: '/login/main',
    name: 'MainView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch: true */ '../views/8_login/MainView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
