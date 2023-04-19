import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'


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
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: () => import( /* webpackChunkName: "databindinginputtext" */ '../views/DataBindingInputText.vue')
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: () => import( /* webpackChunkName: "databindinginputnumber" */ '../views/DataBindingInputNumber.vue')
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: () => import( /* webpackChunkName: "databindingtextarea" */ '../views/DataBindingTextarea.vue')
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: () => import( /* webpackChunkName: "databindingselect" */ '../views/DataBindingSelect.vue')
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: () => import( /* webpackChunkName: "databindingcheckbox" */ '../views/DataBindingCheckbox.vue')
  },
  {
    path: '/databindingcheckbox2',
    name: 'DataBindingCheckbox2',
    component: () => import( /* webpackChunkName: "databindingcheckbox2" */ '../views/DataBindingCheckbox2.vue')
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: () => import( /* webpackChunkName: "databindingradio" */ '../views/DataBindingRadio.vue')
  },
  {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: () => import( /* webpackChunkName: "databindingattribue" */ '../views/DataBindingAttribute.vue')
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: () => import( /* webpackChunkName: "databindingbutton" */ '../views/DataBindingButton.vue')
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: () => import( /* webpackChunkName: "databindingclass" */ '../views/DataBindingClass.vue')
  },
  {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: () => import( /* webpackChunkName: "databindingclass2" */ '../views/DataBindingClass2.vue')
  },
  {
    path: '/databindingstyle',
    name: 'DataBindingStyle',
    component: () => import( /* webpackChunkName: "databindingstyle" */ '../views/DataBindingStyle.vue')
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: () => import( /* webpackChunkName: "databindinglist" */ '../views/DataBindingList.vue')
  }
  ,
  {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: () => import( /* webpackChunkName: "renderingvif" */ '../views/RenderingVIf.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
