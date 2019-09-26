const path = require('path')
module.exports = {
	// 将 examples 目录添加为新的页面
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html',
			// 输出文件名
			filename: 'index.html',
			output: {
				path: path.resolve(__dirname, '../lib'),
				filename: '[name].js'
			}
		}
	},
	productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
}
