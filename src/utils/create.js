import Vue from 'vue'

export default (Comp, props) => {
  const Contructor = Vue.extend(Comp)
  // 1. 获取组件的实例
  const comp = new Contructor({ propsData: props })
  // 2. 挂载组件
  comp.$mount()
  // 3. body节点挂载到组件dom
  document.body.appendChild(comp.$el)
  // 4. 定义销毁方法
  comp.remove = function () {
    comp.$destroy()
    document.body.removeChild(comp.$el)
  }

  return comp
}
