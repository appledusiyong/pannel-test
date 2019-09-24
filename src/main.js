import Vue from 'vue'
import App from './App.vue'
import expPannel from '../packages/index.js'

Vue.config.productionTip = false
Vue.use(expPannel)

new Vue({
	render: h => h(App)
}).$mount('#app')
