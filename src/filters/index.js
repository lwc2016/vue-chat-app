import moment from 'moment'
const formatDateTime = (timestamp) => {
  return moment(timestamp).format('YYYY-MM-DD HH:mm')
}

const install = (Vue) => {
  Vue.filter('formatDateTime', formatDateTime)
}

export default {
  install
}
