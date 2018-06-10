import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Left,
        right:Right
      }
    },{
      path:'/hi',
      // name:'hi',
      component:Hi,
      children:[
        {
          path:'/',
          name:'hi',
          component:Hi
        },{
          path:'hi1',
          name:'hi1',
          component:Hi1
        },{
          path:'hi2',
          name:'hi2',
          component:Hi2
        }
      ]
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      name:'params',
      component:Params,
      // beforeEnter:(to,from,next)=>{
      //   console.log(to);
      //   console.log(from);
      //   // next(false);
      //   next({
      //     path:'/'
      //   })
      // }
    },{
      path:'/goHome',
      redirect:'/'
    },{
      path:'/goHomeParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle',
      alias:'/fcw'
    },{
      path:'*',
      component:Error
    }
  ]
})
