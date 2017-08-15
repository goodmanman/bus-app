<template>
	<div class="complete">
		<div class="line line1">
			<span>订单详情</span>
			<span class="red">已完成</span>
		</div>
		<div class="line">
			<span>服务商家：</span>
			<span>武汉启路汽车美容店</span>
		</div>
		<div class="line line3">
			<span>商品名称：</span>
		</div>
		<div class="line line2">
			<span>汽车</span>
			<span>￥25.00 x1</span>
		</div>
		<div class="line line2">
			<span>打蜡</span>
			<span>￥88.00 x1</span>
		</div>
		<div class="line line2">
			<span>抛光</span>
			<span>￥180.00 x1</span>
		</div>
		<div class="line">
			<span>实付金额</span>
			<span>288 （节省8元）</span>
		</div>
		<div class="line line4">
			<span>支付方式：</span>
			<span>微信支付</span>
		</div>
		<div class="line">
			<span>订单编号：</span>
			<span>20170215454465</span>
		</div>
		<div class="line">
			<span>订单时间：</span>
			<span>2017-04-20 21:14:14</span>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
	.complete{
		height: calc(100% - 3rem);
		background: #F5F5F5;
	}
	.line{
		background: #fff;
		height:1rem;
		padding:1rem 1em;
		display: flex;
		justify-content: space-between;
		border:1px solid #F5F5F5;
		font-size: 0.8rem;
	}
	.line1{
		background: #F5F5F5;
	}
	.line2{
		border:none;
		color:#8C8C8C;
		padding:0.5rem 1rem;
	}
	.line3{
		border: none;
	}
	.line4{
		margin-top: 1rem;
	}
	.red{
		color:#ed5461;
	}
</style>