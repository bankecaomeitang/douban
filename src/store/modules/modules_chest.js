import * as TypesChest from '../types/types_chest';
import Vue from 'vue';

export default{
	state:{
		apikey:'2cdf3fd2b6df949d78b4926f4bee4417',
		newslist: [],
		piclist:[],
		joke_page: 1,
		pic_page:1
	},
	mutations:{
		[TypesChest.SET_JOKE](state,query){
			state.newslist=[...query.newslist,...state.newslist];
			state.joke_page++
		},
		[TypesChest.SET_PIC](state,query){
			state.piclist=[...state.piclist,...query.piclist];
			state.pic_page++
        }
	},
	actions:{
		[TypesChest.GET_JOKE](ctx){ 		
			Vue.prototype.$http.get('/joke/content/list.php?key='+ctx.state.apikey+'&page='+ctx.state.joke_page+'&pagesize=10&sort=asc&time=1418745237').then(data=>{
				ctx.commit(TypesChest.SET_JOKE,{newslist:data.data.result.data})
			})			
		},
		[TypesChest.GET_PIC](ctx){ 		
			Vue.prototype.$http.get('/joke/img/list.php?key='+ctx.state.apikey+'&page='+ctx.state.pic_page+'&pagesize=10&sort=asc&time=1418745237').then(data=>{
				ctx.commit(TypesChest.SET_PIC,{piclist:data.data.result.data})
			})			
		}
	},
	getters:{
		
	}
}
