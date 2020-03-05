import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import ShopcartContainer from '../components/tabbar/ShopcartContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotoList from '../components/photo/PhotoList'
import PhotoInfo from '../components/photo/PhotoInfo'
import GoodsList from '../components/goods/GoodsList'
import GoodsInfo from '../components/goods/GoodsInfo'
import GoodsDesc from '../components/goods/GoodsDesc'
import GoodsComment from '../components/goods/GoodsComment'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root_path',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeContainer
  },
  {
    path: '/search',
    name: 'search',
    component: SearchContainer
  },
  {
    path: '/member',
    name: 'member',
    component: MemberContainer
  },
  {
    path: '/shop_cart',
    name: 'shop_cart',
    component: ShopcartContainer
  },
  {
    path: '/home/news_list',
    name: 'news_list',
    component: NewsList
  },
  {
    path: '/home/news_info/:id',
    name: 'news_info',
    component: NewsInfo
  },
  {
    path: '/home/photo_list',
    name: 'photo_list',
    component: PhotoList
  },
  {
    path: '/home/photo_info/:id',
    name: 'photo_info',
    component: PhotoInfo
  },
  {
    path: '/home/goods_list',
    name: 'goods_list',
    component: GoodsList
  },
  {
    path: '/home/goods_info/:id',
    name: 'goods_info',
    component: GoodsInfo
  },
  {
    path: '/home/goods_desc/:id',
    name: 'goods_desc',
    component: GoodsDesc
  },
  {
    path: '/home/goods_comment/:id',
    name: 'goods_comment',
    component: GoodsComment
  }
];

const router = new VueRouter({
  routes:routes,
  linkActiveClass: 'mui-active', //覆盖默认路由
});

export default router
