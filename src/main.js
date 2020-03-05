import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mui from 'mint-ui'
import axios from 'axios'
import vueAxios from 'vue-axios'

import '../node_modules/mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入格式化时间的插件
import moment from 'moment'

Vue.use(Mui);
Vue.use(vueAxios, axios);

//全局配置axios默认值
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// //绑定组件
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);



//过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
});
Vue.filter("dataFormat", data=>{
  var dt = new Date(data);
  var year = dt.getFullYear();
  var month = dt.getMonth()+1;
  var day = dt.getDate();
  return `${year}-${month}-${day}`;
});

//创建Vue实例
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app');
