import Vue from 'vue'
import Router from 'vue-router'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'

import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'


import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'
Vue.use(Router)

export default new Router({
  routes: [
	{path:'/categories/create',component:CategoryEdit},
	{path:'/categories/edit/:id',component:CategoryEdit,props:true},
	{path:'/categories/list',component:CategoryList},



	{path:'/items/create',component:ItemEdit},
	{path:'/items/edit/:id',component:ItemEdit,props:true},
	{path:'/items/list',component:ItemList},

	
	{path:'/admin_users/create',component:AdminUserEdit},
	{path:'/admin_users/edit/:id',component:AdminUserEdit,props:true},
	{path:'/admin_users/list',component:AdminUserList},
  ]
})
