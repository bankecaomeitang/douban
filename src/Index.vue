<template>
	<div>
		<mt-search v-model="value" cancel-text="取消" placeholder="影视 图书 唱片 小组 舞台剧等"></mt-search>
		<div class="box">
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
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'App',
	  data(){
	  	return{
	  		value:'',
	  		apikey:'2cdf3fd2b6df949d78b4926f4bee4417',
	  		newslist: [
			{
				id: 1,
				title: '今日热点',
				header:'兔女郎趣史',
				content: '兔子加持的智慧力量，人类绝不可小觑兔子加持的智慧力量，',
				from:'雾港',
			  },
			  {
				id: 2,
				name: '今日热点',
				header: '第二第二第二第二',
				content: '兔子加持的智慧力量，人类绝不可小觑兔子加持的智慧力量，',
				from:'豆瓣',
			  },
			  {
				id: 3,
				name: '今日热点',
				header: '第三第三第三第三',
				content: '兔子加持的智慧力量，人类绝不可小觑兔子加持的智慧力量，',
				from:'雾港',
			  }
			]	
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
	.left p{line-height: 1.7em;max-height: 3.4em;overflow: hidden;}
	.left span{display: block;line-height: 2em;position: absolute;bottom: 0;}
</style>