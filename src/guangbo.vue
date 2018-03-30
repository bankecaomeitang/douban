<template>
	<div>
		<h1>广播</h1>
		<ul class="ul01">
			<li v-for='(pic,index) in pics' :key='index'>
				<p>{{pic.content}}</p>
				<img :src="pic.url"/><button @click="DEL_PIC(index)">删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapMutations,mapActions } from 'vuex';

export default{
	data(){
		return{
			
		}
	},
	computed:{
		...mapState({
				pics: state => state.chest.pics
			})
	},
	methods:{
		...mapMutations(['DEL_PIC']),
	}
}
</script>

<style>
</style>