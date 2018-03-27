<template>
  <div id="app">
    <router-view style="padding-bottom: 50px;"></router-view>
    <footer>
			<mt-tabbar v-model="selected">
			  <mt-tab-item id="Index" @click="clickFn()">
			    <img slot="icon" src="./images/icon01.jpg">
			    首页
			  </mt-tab-item>
			  <mt-tab-item id="Video">
			    <img slot="icon" src="./images/icon01.jpg">
			    书影音
			  </mt-tab-item>
			  <mt-tab-item id="Guangbo">
			    <img slot="icon" src="./images/icon01.jpg">
			    广播
			  </mt-tab-item>
			  <mt-tab-item id="Xiaozu">
			    <img slot="icon" src="./images/icon01.jpg">
			    小组
			  </mt-tab-item>
			  <mt-tab-item id="My">
			    <img slot="icon" src="./images/icon01.jpg">
			    我的
			  </mt-tab-item>
			</mt-tabbar>   
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{selected:''}
  },
	watch:{
		selected:function(val,oldVal){
//			if(val=='首页'){
//				this.$router.push({path:'/Index'})
//			}else if(val=='书影单'){
//				this.$router.push({path:'/Video'})
//			}else if(val=='广播'){
//				this.$router.push({path:'/Guangbo'})
//			}else if(val=='小组'){
//				this.$router.push({path:'/Xiaozu'})
//			}else if(val=='我的'){
//				this.$router.push({path:'/My'})
//			}
			this.$router.push({path: val});
		}
	}
//	methods:{
//		clickFn:function(){
//			console.log('111');
//			this.$router.push({path:'/Index'})
//		}
//	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
	height: 100%;
}
.mint-tabbar{position: fixed;}
</style>
