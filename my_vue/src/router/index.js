import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import CZL from '@/components/CZL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
		{
		  path: '/czl/',
		  name: 'CZL',
		  component: CZL
		}
  ]
})
