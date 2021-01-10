import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWorld.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'HelloWord',
        component: HelloWord,
        beforeEnter: (to, from, next) => {
            console.log('路由-前置-钩子')
            next()
        }
    },]
})

router.beforeEach((to, from, next) => { /* 全局前置钩子 */
    console.log('全局-前置-钩子')
    next()
})
router.beforeResolve((to, from, next) => { /* 全局解析守卫 */
    console.log('全局-解析-守卫')
    next()
})
// router.afterEach((to, from, next) => { /* 全局后置钩子 */
//     console.log('全局-后置-钩子')
// })

export default router