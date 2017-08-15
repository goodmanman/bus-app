<template>
	<div class="center">
		<div class="bac">
			<div class="img"><img src="../../assets/person.jpg"/></div>
			<div class="name">
				<div class="name1">闫先生</div>
				<div class="name2">18810994501</div>
			</div>
		</div>
		<div class="mes">
			<div class="item">
				<div class="div1">100L</div>
				<div class="div2">累计加油量</div>
			</div>
			<div class="item">
				<div class="div1">￥999.00</div>
				<div class="div2">累计消费金额</div>
			</div>
			<div class="item">
				<div class="div1">￥100.00</div>
				<div class="div2">累计节省金额</div>
			</div>
		</div>
		<div class="lineBox">
			<router-link to="/personOrder">
				<div class="line">
					<div class="lineItem"><img src="../../assets/p1.png"/><div class="itMes">我的订单</div></div>
					<img src="../../assets/fanhui.png"/>
				</div>
			</router-link>
			<div class="line">
				<div class="lineItem"><img src="../../assets/p2.png"/><div class="itMes">我的红包</div></div>
				<img src="../../assets/fanhui.png"/>
			</div>
			<div class="line">
				<div class="lineItem"><img src="../../assets/p3.png"/><div class="itMes">我的邀请</div></div>
				<img src="../../assets/fanhui.png"/>
			</div>
			<div class="line">
				<div class="lineItem"><img src="../../assets/p4.png"/><div class="itMes">我的收藏</div></div>
				<img src="../../assets/fanhui.png"/>
			</div>
			<div class="line line1">
				<div class="lineItem"><img src="../../assets/p5.png"/><div class="itMes">绑定手机号</div></div>
				<img src="../../assets/fanhui.png"/>
			</div>
		</div>
		<p class="p">
			<img src="../../assets/p6.png"/>
			<span>APP努力开发中，敬请期待...</span>
		</p>
	</div>
</template>

<script>
</script>

<style scoped="">
	
	.center{
		height:calc(100% - 3rem);
		background: #F5F5F5;
		font-family: "微软雅黑";
	}
	.bac{
		height:3rem;
		padding:2rem 2rem 4rem 2rem;
		/*background-color:rgba(0,0,0,0.5);*/
		background: no-repeat url(../../assets/person.jpg) center ;
		background-size: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.img{
		height: 3rem;
		width: 3rem;
		border-radius: 3rem;
		border:2px solid #fff;
		background: cadetblue;
		overflow: hidden;
	}
	.img img{
		height: 3rem;
	}
	.mes{
		z-index: 999;
		background: #fff;
		height:3.3rem;
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		position: absolute;
		top:10rem;
		border-radius: 4px;
		display: flex;
		justify-content: space-around;
		padding-top:2.3rem
	}
	.div1{
		font-size: 1.1rem;
		color:#111;
		margin-top:-0.8rem;
	}
	.div2{
		color:#8c8c8c;
		font-size: 0.3rem;
		margin-top:0.1rem;
	}
	.item{
		border-right: 1px solid #8c8c8c;
		width: 30%;
		height: 1rem;
	}
	.item:nth-child(3){
		border-right: none;
	}
	.name {
		color:#FFFFFF;
		text-align: left;
		margin-left: 0.8rem;
	}
	.name1{
		font-size: 1rem;
		margin-top: 0.2rem;
	}
	.name2{
		font-size: 0.5rem;
		margin-top: 0.4rem;
	}
	.lineBox{
		margin-top:4.5rem
	}
	.lineItem{
		display: flex;
		justify-content: space-between;
	}
	.line{
		height:1rem;
		line-height: 1rem;
		padding:1rem 1.3rem;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #F5F5F5;
	}
	.line img{
		height: 1rem;
	}
	.itMes{
		margin-left: 1rem;
		font-size: 0.8rem;
	}
	.line1{
		margin-top: 1rem;
	}
	.p{
		color:#8c8c8c;
		font-size: 0.5rem;
		margin-top: 1.5rem;
	}
	.p img{
		width:1.5rem;
		opacity: 0.5;
	}
	.lineBox a{
		text-decoration: none;
		color:initial;
	}
</style>