<template>
	<div>
		<mt-header title="我的">
	  		<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="top">
			<div class="left">
				<!--<img />-->
			</div>
			<div class="right">
				<p><a href="#">登录</a>/<a href="#">注册</a></p>
			</div>
		</div>
		<ul>
			<li>
				<mt-cell title="提醒" label="暂无提醒" is-link></mt-cell>
			</li>
			<li>
				<mt-cell title="喜欢" is-link></mt-cell>
				<mt-cell title="日记" is-link></mt-cell>
				<mt-cell title="相册" is-link></mt-cell>
			</li>
			<li>
				<mt-cell title="电影-电视-综艺" is-link></mt-cell>
				<mt-cell title="读书" is-link></mt-cell>
				<mt-cell title="音乐" is-link></mt-cell>
			</li>
			<li>
				<mt-cell title="钱包" is-link></mt-cell>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  name: 'App',
	  data(){
	  	return{
	  		
	  	}
	  }
	}
</script>

<style>
	body{background: #F3F3F3;}
	.mint-header{background: #fff;color: #000;}
	.top{background: #5EC66F;height: 6em;width: 100%;display: flex;}
	.left{flex: 1;}
	.left img{display: block;background: #fff;border-radius: 50%;width: 60px;height:60px;margin: 1em 0 0 1em;}
	.right{flex: 6;color: #fff;font-weight: bold;}
	.right p{padding: 0.5em;width: 50%;border: 1px solid #fff;margin: 2em auto;}
	.right a{color: #fff;text-decoration: none;padding: 0 0.5em;}
	ul,li{list-style: none;padding: 0;text-align: left;}
	ul li{background: #fff;margin-top: 1em;}
	ul li .mt-cell{border: none;}
</style>