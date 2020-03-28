import { userInfo } from '../../services/user'

export default {
  namespaced: true,
  state: {
    isLogined: false,
    info: {}
  },
  mutations: {},
  actions: {
    fetchDetail () {
      userInfo().then(resp => {
        console.log(resp)
      })
    }
  }
}
