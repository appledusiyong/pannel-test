import testPanel from './pannel/index.js'
import testToast from './toast/index.js'
const components = [testPanel, testToast]

const install = function(Vue) {
	Vue.prototype.$msg = 'Hello I am test.js'
	Vue.prototype.$myMethod = function(arr) {
		if (arr.length < 0) {
			return false
		} else {
			arr = arr.join('连接你我')
			return arr
		}
	}
	components.map(component => {
		Vue.component(component.name, component)
	})
}
if (typeof window !== 'undefined' && window.Vue) {
	// eslint-disable-next-line no-undef
	install(Vue)
}
export default {
	install,
	...components
}
