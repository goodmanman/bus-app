<template>
	<div class="orderIn">
		<div class="box">
			<div class="item">
				<span>启路汽车美容店（武汉汽车市场店）</span>
				<span>已取消</span>
			</div>
			<div class="item1">
				<div class="line">
					<span>套餐：</span>
					<span>小保养套餐A</span>
				</div>
				<div class="line">
					<span>预约时间：</span>
					<span>2017-06-08 13:00</span>
				</div>
				<div class="line">
					<span>联系人：</span>
					<span>张志凤</span>
				</div>
				<div class="line">
					<span>联系电话：</span>
					<span>13145295385</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.orderIn{
		height:calc( 100% - 4rem);
		background: #F5F5F5;
		padding-top:1rem
	}
	.box{
		height: auto;
		background: #FFFFFF;
	}
	.item,.item2{
		height:3rem;
		line-height: 3rem;
		border-bottom: 1px solid #F5F5F5;
		width:calc( 100% - 1.8rem);
		padding:0 0.9rem ;
		font-size: 0.8rem;
		display: flex;
		justify-content: space-between;
	}
	.item span:nth-child(2){
		color:#ed5461;
	}
	.line{
		display: flex;
		justify-content: space-between;
		height: 2rem;
		line-height: 2rem;
		color: #8c8c8c;
	}
	.item1{
		
		width:calc( 100% - 1.8rem);
		padding:0 0.9rem ;
		font-size: 0.5rem;
	}
	.item2 span{
		width: 50%;
		text-align: center;
	}
	.item2 span:nth-child(2){
		border-left: 1px solid #F5F5F5;
		color:#ed5461;
	}
	.item2{
		border-top:1px solid #F5F5F5;
	}
</style>