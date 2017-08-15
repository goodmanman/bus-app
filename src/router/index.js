import Vue from 'vue'
import Router from 'vue-router'
import come from '@/components/come/come'
import comePay from '@/components/come/comePay'
import carServeice from '@/components/carServeice/carServeice'
import activity from '@/components/activity/activity'
/*我*/
import personCenter from '@/components/personCenter/personCenter'
import personOrder from '@/components/personCenter/personOrder'
import personOrderCancel from '@/components/personCenter/personOrderCancel'
import personOrderComplete from '@/components/personCenter/personOrderComplete'
import personOrderIn from '@/components/personCenter/personOrderIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'come',
      component: come,
      meta: { navShow: true,name:'加油'}
    },
    {
      path: '/come',
      name: 'come',
      component: come,
      meta: { navShow: true,name:'加油'}
    },
    {
      path: '/comePay',
      name: 'comePay',
      component: comePay,
      meta: { navShow: false,name:'支付'}
    },
    {
      path: '/carServeice',
      name: 'carServeice',
      component: carServeice,
      meta: { navShow: true,name:'汽车服务'}
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity,
      meta: { navShow: true,name:'活动'}
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter,
      meta: { navShow: false,name:'个人中心'}
    },
    {
      path: '/personOrder',
      name: 'personOrder',
      component: personOrder,
      meta: { navShow: false}
    },
    {
      path: '/personOrderCancel',
      name: 'personOrderCancel',
      component: personOrderCancel,
      meta: { navShow: false}
    },
    {
      path: '/personOrderComplete',
      name: 'personOrderComplete',
      component: personOrderComplete,
      meta: { navShow: false}
    },
    {
      path: '/personOrderIn',
      name: 'personOrderIn',
      component: personOrderIn,
      meta: { navShow: false}
    }
  ]
})
