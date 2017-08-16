<template>
  <div class="hello">
  	<div class="block">
	    <el-carousel height="150px">
	      <el-carousel-item v-for="item in 4" :key="item">
	        <h3>{{ item }}</h3>
	      </el-carousel-item>
	    </el-carousel>
	  </div>
	  <div class='someText'>
	  	<p class="p1"><span class="">武汉汉街加油站</span><span class="colorF8">4.35km</span></p>
	  	<p class="p2"><span class="colorF8">湖北省武汉市江岸区新村37号</span><span class='daoHang'>导航</span></p>
	  	<div class='pClick'>
	  		<router-link to="/comePay">支付页</router-link>
	  		<router-link to="/promote">推广页</router-link>
	  		<router-link to="/allMerchant">所有商户</router-link>
	  	</div>
	  	<div class='pClick'>
	  		<router-link to="/tombola">刮奖</router-link>
	  		<router-link to="/merchant">商户详情页</router-link>
	  		<router-link to="/allMerchant">XXXX</router-link>
	  	</div>
	  </div>
  </div>
</template>

<script>

export default {
  name: 'come',
  data () {
    return {
      
    }
  }
  
}
</script>

<style scoped>
	.hello{
		bottom: 0;
		width: 100%;
		margin-bottom: 0.1rem;
		border-top: 1px solid #ccc;
		background: #f5f5f5;
		height: calc(100% - 3.3rem);
	}
	h1, h2 {
	  font-weight: normal;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	a {
	  color: #42b983;
	}
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 14px;
	  opacity: 0.75;
	  line-height: 150px;
	  margin: 0;
	}
	.el-carousel__item:nth-child(2n) {
	  background-color: #99a9bf;
	}
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #d3dce6;
	}
	.someText {
		width: 100%;
		padding:0.5rem 0;
		height:auto;
		background: #fff;
		font-size: 0.7rem;;
	}
	.someText .p1,.someText .p2{
		width:80%;
		padding:0 10%;
		display: flex;
		justify-content: space-between;
	}
	.daoHang{
		color:#ef6672;
	}
	.pClick{
		font-size: 0.9rem;
		color:#111;
		text-align: center;
		background: #fff;
		display: flex;
		margin:0.5rem  0;
		justify-content: space-around;
	}
	.p2{
		border-bottom: 1px solid #f8f8f8;
		padding-bottom: 0.5rem!important;
	}
	.colorF8{
		color:#8c8c8c;
	}
</style>
