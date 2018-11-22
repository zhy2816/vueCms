import VueRouter from 'vue-router'

// 导入对应的路由组件
import homeContainer from './pages/home/index.vue'
import memberContainer from './pages/member/index.vue'
import shopcarContainer from './pages/search/index.vue'
import searchContainer from './pages/shopcar/index.vue'

import newsList from './pages/newsList/index.vue'
import newsInfo from './pages/newsInfo/index.vue'

import photoList from './pages/photoList/index.vue'
import photoInfo from './pages/photoInfo/index.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeContainer },
    { path: '/member', component: memberContainer },
    { path: '/shopcar', component: shopcarContainer },
    { path: '/search', component: searchContainer },
    { path: '/home/newsList', component: newsList },
    { path: '/home/newsInfo/:id', component: newsInfo },
    { path: '/home/photoList', component: photoList},
    { path: '/home/photoInfo/:id', component: photoInfo}
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router