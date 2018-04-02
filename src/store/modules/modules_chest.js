import * as TypesChest from '../types/types_chest';
import Vue from 'vue';

export default{
	state:{
		apikey:'2cdf3fd2b6df949d78b4926f4bee4417',
		newslist: [],
		piclist:[],
		joke_page: 1,
		pic_page:1,
		pics:[],
		isShouCang:[]
	},
	mutations:{
		[TypesChest.SET_JOKE](state,query){
			state.newslist=[...query.newslist,...state.newslist];
			state.joke_page++
		},
		[TypesChest.SET_PIC](state,query){
			state.piclist=[...state.piclist,...query.piclist];
			state.pic_page++
		},
		[TypesChest.STROE_PIC](state,index){
			

			if(state.isShouCang[index]){
				const i = state.pics.indexOf(state.piclist[index]);
				state.pics.splice(i,1);
				state.isShouCang[index] = false	;
				// for(let i=0;i<state.pics.length;i++){
				// 	if(state.pics[i].url==state.piclist[index].url){
				// 		state.pics.splice(i,1);
				// 		state.isShouCang[index] = false	;
				// 	}					
				// }						
			}else{
				state.pics=[...state.pics,state.piclist[index]];
				state.isShouCang[index] = true;
			}			
		},
		[TypesChest.DEL_PIC](state,index){
			state.pics.splice(index,1);
			state.isShouCang[index] = false	;
		}
	},
	actions:{
		[TypesChest.GET_JOKE](ctx){ 		
			return Vue.prototype.$http.get('/joke/content/list.php?key='+ctx.state.apikey+'&page='+ctx.state.joke_page+'&pagesize=10&sort=asc&time=1418745237').then(data=>{
				if(data.data.error_code==0){
					ctx.commit(TypesChest.SET_JOKE,{newslist:data.data.result.data});
				}				
			})			
		},
		[TypesChest.GET_PIC](ctx){ 		
			return Vue.prototype.$http.get('/joke/img/list.php?key='+ctx.state.apikey+'&page='+ctx.state.pic_page+'&pagesize=10&sort=asc&time=1418745237').then(data=>{
				if(data.data.error_code==0){
					ctx.commit(TypesChest.SET_PIC,{piclist:data.data.result.data});
				}				
			})			
		}
	},
	getters:{
		
	}
}
