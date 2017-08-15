import Vue from 'vue'
import Router from 'vue-router'
import come from '@/components/come/come'
import comePay from '@/components/come/comePay'
import carServeice from '@/components/carServeice/carServeice'
import activity from '@/components/activity/activity'
import personCenter from '@/components/personCenter/personCenter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'come',
      component: come,
      meta: { navShow: true}
    },
    {
      path: '/come',
      name: 'come',
      component: come,
      meta: { navShow: true}
    },
    {
      path: '/comePay',
      name: 'comePay',
      component: comePay,
      meta: { navShow: false}
    },
    {
      path: '/carServeice',
      name: 'carServeice',
      component: carServeice,
      meta: { navShow: true}
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity,
      meta: { navShow: true}
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter,
      meta: { navShow: false}
    }
  ]
})
