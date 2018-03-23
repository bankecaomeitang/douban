<template>
	<div>
		<mt-header title="" style="background: none;padding: 0;">
		  <router-link to="/" slot="left" style="color: #42BB54;"><mt-button icon="back"></mt-button></router-link>
		</mt-header>
		<h1>欢迎来到豆瓣</h1>
		<mt-field class="box" placeholder="手机号/邮箱" type="tel" v-model="phone"></mt-field>
		<mt-field class="box" placeholder="密码（最少6位）" type="password" v-model="password"></mt-field>
		<button>下一步</button>
		<p><a href="#">注册豆瓣</a>|<a href="#">忘记密码</a></p>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      phone: '',
      password:'',
    }
  }
}
</script>

<style>
	h1{color: #46BA55;}
	button{width: 100%;color: #fff;line-height: 3em;border: none;background: #42BB54;margin: 2em auto 0;}
	p,p a{color: #D4D4D4;}
	p a{text-decoration: none;padding: 0 1.5em;}
	.mint-header-button{flex: 0.1;-webkit-box-flex: 0.1;}
</style>