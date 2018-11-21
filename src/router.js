import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './pages/home/index.vue'
import MemberContainer from './pages/member/index.vue'
import ShopcarContainer from './pages/search/index.vue'
import SearchContainer from './pages/shopcar/index.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router