import CForm from './c-form'
import CFormItem from './c-formItem'
import CInput from './c-input'
import CButton from './c-button'
import CTabBar from './c-tabBar'

const install = function (Vue) {
  Vue.component('c-form', CForm)
  Vue.component('c-form-item', CFormItem)
  Vue.component('c-input', CInput)
  Vue.component('c-button', CButton)
  Vue.component('c-tabBar', CTabBar)
}

export default {
  install
}
