<!--推广页-->
<template>
	<div class="promote">
		<p class="p1">截止目前为止，您加油累计节省<span class="red">99</span>元</p>
		<div class="canvas"></div>
		<p class="p2">今日加油200元</p>
		<p class="p2">使用加油赞，节省<span class="red">100</span>元</p>
		<div class="showFriend">发送我的链接，向好友炫耀一下</div>
		<p class="p3">
			<span>附件商户（特惠商品）</span>
			<span>更多<img src="../../assets/fanhui.png" alt="" /></span>
		</p>
		<allMerchant></allMerchant>
	</div>
</template>

<script>
import allMerchant from '@/components/come/allMerchant'	
export default{
  name:'promote',
  components:{
	allMerchant,
  },
}
</script>

<style scoped>
	.promote{
		font-family: "微软雅黑";
	}
	.promote img{
		width:0.5rem;
	}
	.red{
		color:#ef6672;
	}
	.p1{
		font-size: 0.5rem;
	}
	.p2{
		font-size: 0.8rem;
	}
	.p3{
		width:calc(100% - 2rem);
		margin:2rem 1rem 0 1rem;
		font-size: 0.8rem;
		display: flex;
		justify-content: space-between;
	}
	.canvas{
		height:8rem;
		width:calc(100% - 2rem);
		margin: 0 1rem;
		background: #e2e2e2;
	}
	.showFriend{
		width:60%;
		margin:0.5rem 20%;
		color:#fff;
		background:#eb4452 ;
		height:2rem;
		line-height:2rem;
		border-radius: 2rem;
		font-size: 0.8rem;
	}
</style>