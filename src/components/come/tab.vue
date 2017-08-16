<template>
	<div class="tab">
		<div class="tab_l">
			<div class="li">汽车</div>
			<div class="li">美容</div>
			<div class="li">保养</div>
			<div class="li">维修</div>
		</div>
		<div class="tab_r">
			<div class="rLi">
				<div class="item">
					<div class="div1">标准洗车</div>
					<div class="div2">政策泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘，车外保养</div>
					<div class="div3">
						<span>
							<span class="span1">￥999.00</span>
							<span class="span2">￥1000.00</span> 
						</span>
						
						<span class="btn">预约</span>
					</div>
				</div>
				<div class="item">
					<div class="div1">标准洗车</div>
					<div class="div2">政策泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘，车外保养</div>
					<div class="div3">
						<span>
							<span class="span1">￥999.00</span>
							<span class="span2">￥1000.00</span> 
						</span>
						
						<span class="btn">预约</span>
					</div>
				</div>
				<div class="item">
					<div class="div1">标准洗车</div>
					<div class="div2">政策泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘，车外保养</div>
					<div class="div3">
						<span>
							<span class="span1">￥999.00</span>
							<span class="span2">￥1000.00</span> 
						</span>
						
						<span class="btn">预约</span>
					</div>
				</div>
				<div class="item">
					<div class="div1">标准洗车</div>
					<div class="div2">政策泡沫冲洗擦干，轮胎冲洗清洁，车内吸尘，车外保养</div>
					<div class="div3">
						<span>
							<span class="span1">￥999.00</span>
							<span class="span2">￥1000.00</span> 
						</span>
						
						<span class="btn">预约</span>
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'tab',
		data(){
			return{
				
			}
		},
	}
</script>

<style scoped>
	.tab{
		width: 100%;
		height: calc(100% - 13.7rem);
		display: flex;
		justify-content: flex-start;
		background: #F5F5F5;
	}
	.tab_l{
		width: 20%;
		background: #fff;
	}
	.tab_r{
		width:calc(80% -1.6rem);
		overflow: scroll;
		padding:0.8rem;
	}
	.red{
		color:#eb4452;
	}
	.li{
		width:100%;
		height:3rem;
		line-height: 3rem;
		text-align: center;
		font-size: 0.8rem;
		border-top:1px solid #F5F5F5;
	}
	.li:nth-child(4){
		border-bottom:1px solid #F5F5F5;
	}
	.div1{
		font-size: 0.8rem;
		font-weight: bolder;
		text-align: left;
		padding: 0.5rem;
	}
	.div2{
		font-size: 0.5rem;
		color: #8C8C8C;
		text-align: left;
		padding: 0.5rem;
		padding-top: 0;
	}
	.div3{
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
	.item{
		height: auto;
		background: #fff;
		
	}
	.span1{
		font-size: 0.8rem;
		color: #eb4452;
		margin-left: 0.5rem;
	}
	.span2{
		color:#8C8C8C;
		text-decoration:line-through;
		font-size: 0.8rem;
	}
	.btn{
		width:3rem;
		height: 1.5rem;
		line-height: 1.5rem;
		text-align: center;
		color: #fff;
		background:#eb4452;
		border-radius: 4px;
		font-size: 0.5rem;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>