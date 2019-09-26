import Toast from './src/toast'

Toast.install = function(Vue) {
	Vue.component(Toast.name, Toast)
}
export default Toast
