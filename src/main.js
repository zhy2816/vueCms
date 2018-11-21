// 入口文件
import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入时间格式
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

//导入 vue-resource
import VueResource from 'vue-resource'
//安装 vue-resource
Vue.use(VueResource)

Vue.http.options.root = 'http://www.lovegf.cn:8899/'
Vue.config.productionTip = false


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import './css/common.less'


// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


// 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})