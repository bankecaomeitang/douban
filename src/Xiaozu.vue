<template>
	<div>
		<h1>小组</h1>
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="false" ref="loadmore">
			<ul class="ul01">
				<li v-for='(pic,index) in piclist' :key='index'>
					<p>{{pic.content}}</p>
					<img :src="pic.url"/>
				</li>
			</ul>
		</mt-loadmore>		
	</div>
</template>

<script>
export default{
	data(){
		return{
			piclist:[],
			key:'2cdf3fd2b6df949d78b4926f4bee4417',
			page:1
		}
	},
	beforeMount(){
		this.getdata();
	},
	methods:{
		getdata(){
			this.$http.get('/joke/img/list.php?key=+'+this.key+'&page='+this.page+'&pagesize=10&sort=asc&time=1418745237').then(data=>{this.piclist = [...data.data.result.data,...this.piclist];this.page++}		
		)},
		loadBottom(){
			this.getdata();
			this.allLoaded = true;
			this.$refs.loadmore.onBottomLoaded();
		}
	}
}
</script>

<style>
ul,li{list-style: none;padding: 0;margin: 0}
.ul01{width: 100%;}
.ul01 li{display: block;margin: 0 auto;}
</style>