import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);
/*
const state = {
	userInf : '', //用户信息
	login : null, //是否登录
}
*/
export default new Vuex.Store({
	state : {
		nowPage : 1,
		user : {
			name : 'BlackHead',
			ID : 'BlackHead887',
			follow : 3,
			like : 2,
			fans : 0,
			headImg: require('../assets/user/head.png'),
			backImg: require('../assets/user/myImg.jpg')
		},
		page : {
			bodyHeight: null
		},
		discovery : {
			nowPage : 0
		},
		home : {
			nowPage : 0,
			openPage : false
		},
		news : {
			nowPage : 0
		},
		arr : [{
		    content : "首页",
		    src : 'home',
		    imgSrc : require('../assets/home.png'),
		    unChoose : require('../assets/home.png'),
		    chooseSrc : require('../assets/home0.png')
		  },{ 
		    content : "发现",  
		    src : 'discovery',
		    imgSrc : require('../assets/scan2.png'),
		    unChoose : require('../assets/scan2.png'),
		    chooseSrc : require('../assets/scan0.png')
		  },{
		    content : "发表",
		    src : 'publish',
		    imgSrc : ''
		  },{
		    content : "消息",
		    src : 'news',
		    imgSrc :  require('../assets/notification.png'),
		    unChoose : require('../assets/notification.png'),
		    chooseSrc : require('../assets/notification0.png')
		  },{
		    content : "我的",
		    src : 'mine',
		    imgSrc :  require('../assets/person2.png'),
		    unChoose : require('../assets/person2.png'),
		    chooseSrc : require('../assets/person0.png')
		  }]
	},
	getters,
	mutations,
	actions 
})
