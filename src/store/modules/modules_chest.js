import * as TypesChest from '../types/types_chest';
import Vue from 'vue';

export default{
	state:{
		apikey:'2cdf3fd2b6df949d78b4926f4bee4417',
  		newslist: [],
		page: 1
	},
	mutations:{
		[TypesChest.GET_JOKE](ctx){
			ctx.commit(TypesChest,SET_JOKE,{newslist:[...ctx.state.newslist,...data.data.result.data],page:ctx.commit.page++})
        }
	},
	actions:{
		[TypesChest.SET_JOKE](ctx){ 			
			Vue.prototype.$http.get('/joke/content/list.php?key='+ctx.commit.apikey+'&page='+ctx.commit.page+'&pagesize=10&sort=asc&time=1418745237');
			ctx.commit(TypesChest,SET_JOKE,{newslist:[...ctx.state.newslist,...data.data.result.data],page:ctx.commit.page++})
		}
	},
	getters:{
		
	}
}
