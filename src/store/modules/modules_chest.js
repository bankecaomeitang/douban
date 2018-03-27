import * as TypesChest from '../types/types_chest';
import Vue from 'vue';

export default{
	state:{
		apikey:'2cdf3fd2b6df949d78b4926f4bee4417',
  		newslist: [],
		page: 1
	},
	mutations:{
		[TypesChest.SET_JOKE](state,query){
			state.newslist=[...query.newslist,...state.newslist];
			state.page++;
        }
	},
	actions:{
		[TypesChest.GET_JOKE](ctx){ 		
			return Vue.prototype.$http.get('/joke/content/list.php?key='+ctx.state.apikey+'&page='+ctx.state.page+'&pagesize=10&sort=asc&time=1418745237').then(data=>{
				console.log(2);
				ctx.commit(TypesChest.SET_JOKE,{newslist:data.data.result.data});
				return data;
			});			
		}
	},
	getters:{
		
	}
}
