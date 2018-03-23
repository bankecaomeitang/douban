<template>
	<div>
		<h4>书影音</h4>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">电影</mt-tab-item>
		  <mt-tab-item id="2">电视</mt-tab-item>
		  <mt-tab-item id="3">综艺</mt-tab-item>
		  <mt-tab-item id="4">读书</mt-tab-item>
		  <mt-tab-item id="5">同城</mt-tab-item>
		  <mt-tab-item id="6">音乐</mt-tab-item>
		</mt-navbar>
		<img class="pic" src="./images/pic03.jpg" />
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <ul>
				<li>
					<!--<mt-cell title="今日推荐" value="全部12" is-link></mt-cell>-->
					<mt-cell title="今日推荐" is-link><span>全部12</span></mt-cell>
				</li>
			</ul>
			<mt-swipe :show-indicators="false" style="width: 100%;height: 100px;">
			  <mt-swipe-item style="width: 90%;background: red;">1</mt-swipe-item>
			  <mt-swipe-item style="width: 90%;background: blue;">2</mt-swipe-item>
			  <mt-swipe-item style="width: 90%;background: green;">3</mt-swipe-item>
			</mt-swipe>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		  	
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		  	
		  </mt-tab-container-item>
		  <mt-tab-container-item id="4">
		    
		  </mt-tab-container-item>
		  <mt-tab-container-item id="5">
		  	
		  </mt-tab-container-item>
		  <mt-tab-container-item id="6">
		  	
		  </mt-tab-container-item>
		  
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
	name: 'Video',
	  data(){
	  	return{selected:''}
	  },
		watch:{
			selected:function(){
				
			}
		}
	}
</script>

<style>
	ul,li{list-style: none;padding: 0;margin: 0;}
	.pic{display: block;width: 100%;margin-top: 2px;}
</style>