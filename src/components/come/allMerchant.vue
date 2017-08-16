<!--推广页-->
<template>
	<div class="box">
		<div class="item">
			<div class="line1">
				<div class="lineDiv">
					<div class="img"></div>
					<div class="spanText">武汉启路汽车美容</div>
				</div>
				<img src="../../assets/fanhui.png"/>
			</div>
			<div class="line2">
				<p class="p4">
					<span class="span1">标准洗车</span>
					<span class="span2">
						<span class="span3">￥28</span>
						<span class="span4">￥30</span>
					</span>
				</p>
				<p class="p5">整车泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘</p>
			</div>
			<div class="line2">
				<p class="p4">
					<span class="span1">标准洗车</span>
					<span class="span2">
						<span class="span3">￥28</span>
						<span class="span4">￥30</span>
					</span>
				</p>
				<p class="p5">整车泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘</p>
			</div>
		</div>
		
		<div class="item">
			<div class="line1">
				<div class="lineDiv">
					<div class="img"></div>
					<div class="spanText">武汉启路汽车美容</div>
				</div>
				<img src="../../assets/fanhui.png"/>
			</div>
			<div class="line2">
				<p class="p4">
					<span class="span1">标准洗车</span>
					<span class="span2">
						<span class="span3">￥28</span>
						<span class="span4">￥30</span>
					</span>
				</p>
				<p class="p5">整车泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘</p>
			</div>
			<div class="line2">
				<p class="p4">
					<span class="span1">标准洗车</span>
					<span class="span2">
						<span class="span3">￥28</span>
						<span class="span4">￥30</span>
					</span>
				</p>
				<p class="p5">整车泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘</p>
			</div>
		</div>
	</div>
</template>

<script>

export default{
	name:'allMerchant',
	data(){
		return {
			
		}
	},
}
</script>

<style scoped>
	.box{
		font-family: "微软雅黑";
	}
	.box img{
		width:0.5rem;
	}
	.red{
		color:#ef6672;
	}
	.box .p1{
		font-size: 0.5rem;
	}
	.box .p2{
		font-size: 0.8rem;
	}
	.box .p3{
		width:calc(100% - 2rem);
		margin:2rem 1rem 0 1rem;
		font-size: 0.8rem;
		display: flex;
		justify-content: space-between;
	}
	.box .p4{
		height:1rem;
		margin: 0.5rem 0;
		width:calc(100% - 1rem);
		padding:0 0.5rem;
		display: flex;
		justify-content: space-between;
	}
	.box .p4 .span1,.box .p4 .span2{
		font-size: 0.8rem;
	}
	.span1,.span3{
		font-weight: bolder;
	}
	.span3{
		margin-right: 0.5rem;
	}
	.box .p4 .span4{
		font-size: 0.5rem;
		color:#8C8C8C;
		text-decoration:line-through;
	}
	.box .p5{
		color:#8C8C8C;
		font-size: 0.5rem;
		margin:0.5rem 0;
		margin-left: 0.5rem;
		text-align: left;
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
	.box{
		height: auto;
		margin-top:0.5rem;
		border-top:1px solid #f6f6f6;
	}
	.item{
		height:auto;
		width:calc(100% - 2rem -10px);
		margin:1rem 1rem;
		border:5px solid #f2f2f2;
	}
	.line1{
		padding:0.5rem;
		justify-content: space-between;
		font-size: 0.8rem;
		display: flex;
		border-bottom: 1px solid #f4f4f4;
	}
	.line1 .spanText{
		display: block;
		height:2rem;
		line-height: 2rem;
		margin-left: 1em;
		color:#8C8C8C;
	}
	.line1 img{
		height: 1rem;
		width:1rem;
		margin-top: 0.5rem;
	}
	.line1 .img{
		height: 2rem;
		display:inline-block;
		width:2rem;
		background: #111111;
		opacity: 0.3;
	}
	.lineDiv{
		display: flex;
		justify-content: flex-start;
	}
</style>