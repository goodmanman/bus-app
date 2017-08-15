<template>
  <div class="comepay">
  	<div class="itemBox">
  		<div class='correct'><img  src="../../assets/correct.png"/></div>
  		<p>验证码</p>
  		<h1>6588</h1>
  	</div>
  	<div class="line">
  		<span class='span1'>加油站名称：</span>
  		<span class='span2'>武汉测试加油站</span>
  	</div>
  	<div class="line">
  		<span class='span1'>商品名称：</span>
  		<span class='span2'>1号抢-92#,挂牌价:6.4元</span>
  	</div>
  	<div class="line">
  		<span class='span1'>实付金额：</span>
  		<span class='span2'>200元(节省20元)</span>
  	</div>
  	<div class="line">
  		<span class='span1'>发票抬头：</span>
  		<span class='span2'>众油科技服务有限公司</span>
  	</div>
  	<div class="line ">
  		<span class='span1'>税号：</span>
  		<span class='span2'>3948571038XFK95384</span>
  	</div>
  	<div class="line line2">
  		<span class='span1'>支付方式：</span>
  		<span class='span2'>微信支付</span>
  	</div>
  	<div class="line">
  		<span class='span1'>订单编号：</span>
  		<span class='span2'>20170215489654</span>
  	</div>
  	<div class="line">
  		<span class='span1'>订单时间：</span>
  		<span class='span2'>2017-04-20 21:14:14</span>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'comepay',
  data () {
    return {
     
    }
  },
  
}
</script>

<style scoped>
.comepay{
	height: 100%;
	background: #F5F5F5;
	padding-top: 1rem;
	
}
.itemBox{
	height: 12rem;
	margin:0rem 5%;
	border-radius: 8px;
	background: #fff;
	-webkit-box-shadow:0 0 10px rgba(51,51,51, .5);  
  -moz-box-shadow:0 0 10px rgba(51,51,51, .5);  
  box-shadow:0 0 10px rgba(51,51,51, .5);  
  margin-bottom: 1rem;
}
.correct{
	padding-top:1.5rem;
}
.itemBox img{
	height: 2rem;
}
.itemBox p{
	text-align: center;
	
}
.line{
	padding:0.5rem 5%;
	border-top:1px solid #F5F5F5;
	background: #fff;
	height:1.8rem;
	line-height: 1.8rem;
	font-size: 0.8rem;
	display: flex;
	justify-content: space-between;
}
.line2{
	margin-top: 0.7rem;
}
.span2{
	color:#8c8c8c;
}
</style>
