<template>
	<div>
		<h1>小组</h1>
		<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
			<ul class="ul01">
				<li v-for='(pic,index) in piclist' :key='index'>
					<p>{{pic.content}}</p>
					<img :src="pic.url"/>
				</li>
			</ul>
		</mt-loadmore>		
	</div>
</template>

<script scoped>
import { mapState, mapMutations,mapActions } from 'vuex';

export default{
	data(){
		return{
			allLoaded: false,
		}
	},
	beforeMount(){
		this.GET_PIC();
	},
	computed:{
		...mapState({
				piclist: state => state.chest.piclist
			})
	},
	methods:{
		...mapActions(['GET_PIC']),
		loadBottom(){
			this.GET_PIC();
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