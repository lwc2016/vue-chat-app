// 白名单
const whiteList = ['/login', '/register']

export default (router, store) => {
  router.beforeEach(async (to, from, next) => {
    next()
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 判断是否登录
      if (store.state.user.isLogined) {
        console.log('-----已经登录了------')
        next()
      } else {
        if (store.state.user.isFetched) {
          console.log('-----需要重新登录-------')
          next('/login')
        } else {
          console.log('-----获取用户信息-----')
          try {
            await store.dispatch('user/fetchDetail')
            next()
          } catch (error) {
            next('/login')
          }
        }
      }
    }
  })
}
