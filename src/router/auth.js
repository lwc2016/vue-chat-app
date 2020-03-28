// 白名单
const whiteList = ['/login', '/register']

export default async (router, store) => {
  router.beforeEach((to, from, next) => {
    next()
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 判断是否登录
      if (store.state.user.isLogined) {
        next()
      } else {
        store.dispatch('user/fetchDetail')
        next('/login')
      }
    }
  })
}
