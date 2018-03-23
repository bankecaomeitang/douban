<template>
	<div>
		<mt-header title="" style="background: none;padding: 0;">
		  <router-link to="/" slot="left" style="color: #42BB54;"><mt-button icon="back"></mt-button></router-link>
		</mt-header>
		<h1>{{msg}}</h1>
		<mt-field class="box" placeholder="手机号/邮箱" type="tel" v-model="phone"></mt-field>
		<mt-field class="box" placeholder="密码（最少6位）" type="password" v-model="password"></mt-field>
		<mt-field class="box" placeholder="昵称" v-model="username"></mt-field>
		<button @click="next()">下一步</button>
		<p>点击[下一步]代表你已阅读并同意<a href="#">用户使用协议</a></p>
	</div>	
</template>

<script>
export default {
  name: 'Reginster',
  data(){
    return {
    	msg:'欢迎加入豆瓣',
    	phone: '',
    	password:'',
     	username:'',
     	apikey:'2cdf3fd2b6df949d78b4926f4bee4417'
    }
  },
  methods:{
  	next:function(){  
//		var reg = /^((13|14|15|17|18)\d{9})$/;
//		if(this.phone==''){
//			alert("请输入手机号码");
//		}else if(!reg.test(this.phone)){
//			alert("手机格式不正确");
//		}else{
//			console.log(this.phone)
//		}
		this.$http.get('/joke/content/list.php?key='+this.apikey+'&page=2&pagesize=10&sort=asc&time=1418745237').then(data =>{
			console.log(data);
			console.log(data.data.result.data);
		})
  	}
  }
}
</script>

<style>
	h1{color: #46BA55;}
	button{width: 100%;color: #fff;line-height: 3em;border: none;background: #42BB54;margin: 2em auto 0;}
	p,p a{color: #D4D4D4;}
	.mint-header-button{flex: 0.1;-webkit-box-flex: 0.1;}
</style>