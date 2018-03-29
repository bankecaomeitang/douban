<template>
	<div>
		<mt-search v-model="value" cancel-text="取消" placeholder="影视 图书 唱片 小组 舞台剧等"></mt-search>
		<div class="box">
			<mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
			    <div class="news" v-for='(news,index) in newslist' :key='index'>
					<div class="left">
						<h4>{{news.title}}</h4>
						<h2>{{news.header}}</h2>
						<p>{{news.content}}</p>
						<span>{{news.from}}</span>
					</div>
					<div class="right">
						<img src="./images/pic01.jpg" />
					</div>
				</div>
			</mt-loadmore>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations,mapActions } from 'vuex';
	
	export default {
	  name: 'App',
	  data(){
	  	return{
	  		value:''
	  	}
	  },
	  	computed: {
			...mapState({
				newslist: state => state.chest.newslist
			}),
		},
		beforeMount(){
			this.GET_JOKE();
		},
		methods:{
			...mapActions(['GET_JOKE']),
			loadTop() {
		  		this.GET_JOKE();
			  	this.$refs.loadmore.onTopLoaded();
			}
		}
	}
</script>

<style>
	body{background: #F3F3F3;}
	h2,h4,p{padding: 0;margin: 0;font-family: "微软雅黑";}
	.mint-searchbar{background-color: #42BB54;}
	.mint-searchbar-cancel{color: #fff;}
	.mint-search{height: auto;}	
	.news{text-align: left;overflow: hidden;display: flex;background: #fff;margin-top: 1em;}
	.news .left{flex: 3;padding: 1em;font-size: 14px;position: relative;}
	.news .right{width: 245px;overflow: hidden;flex: 1;}
	.right img{display: block;width: 90%;padding: 2.8em 0 2em;}
	.left h4{font-size: 14px;color: #2C3E50;font-weight: normal;padding-bottom: 0.5em;}
	.left h2{font-weight: normal;font-size: 18px;line-height: 1.5em;padding-bottom: 0.3em;}
	.left p{line-height: 1.7em;overflow: hidden;}
	.left span{display: block;line-height: 2em;position: absolute;bottom: 0;}
</style>