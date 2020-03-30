import CForm from './c-form'
import CFormItem from './c-formItem'
import CInput from './c-input'
import CButton from './c-button'
import CTabBar from './c-tabBar'
import CSession from './c-session'
import CSessionItem from './c-session-item'
import CProfile from './c-profile'
import CFriend from './c-friend'
import CTitle from './c-title'
import create from '../utils/create'
import message from './message'
import modal from './modal'
import CTextarea from './c-textarea'
import CListItem from './c-list-item'

const install = function (Vue) {
  Vue.component('c-form', CForm)
  Vue.component('c-form-item', CFormItem)
  Vue.component('c-input', CInput)
  Vue.component('c-button', CButton)
  Vue.component('c-tabBar', CTabBar)
  Vue.component('c-session', CSession)
  Vue.component('c-session-item', CSessionItem)
  Vue.component('c-profile', CProfile)
  Vue.component('c-friend', CFriend)
  Vue.component('c-title', CTitle)
  Vue.component('c-textarea', CTextarea)
  Vue.component('c-list-item', CListItem)

  Vue.prototype.$message = {
    success: (text) => create(message, { type: 'success', text }).show(),
    error: (text) => create(message, { type: 'error', text }).show()
  }
  Vue.prototype.$modal = {
    confirm: props => create(modal, props).show()
  }
}

export default {
  install
}
