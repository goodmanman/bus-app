<template>
	<div class="car">
		<div class="item1">
			<div class="pic">洗车</div>
			<div class="pic">美容</div>
			<div class="pic">保养</div>
			<div class="pic">维修</div>
		</div>
		<div class="item2">
			<select name="" >
				<option value="">武汉市</option>
			</select>
			<select name="">
				<option value="">全国门店</option>
			</select>
			<select name="">
				<option value="">默认排序</option>
			</select>
		</div>
		<div class="item3">
			<div class="line">
				<div class="img"></div>
				<div class="text">
					<div class="text1">启路汽车美容店</div>
					<div class="text2">
						<span>中北路汉街国际总部A座</span>
						<span>4.35km</span>
					</div>
				</div>
			</div>
			<div class="line">
				<div class="img"></div>
				<div class="text">
					<div class="text1">启路汽车美容店</div>
					<div class="text2">
						<span>中北路汉街国际总部A座</span>
						<span>4.35km</span>
					</div>
				</div>
			</div>
			<div class="line">
				<div class="img"></div>
				<div class="text">
					<div class="text1">启路汽车美容店</div>
					<div class="text2">
						<span>中北路汉街国际总部A座</span>
						<span>4.35km</span>
					</div>
				</div>
			</div>
			<div class="line">
				<div class="img"></div>
				<div class="text">
					<div class="text1">启路汽车美容店</div>
					<div class="text2">
						<span>中北路汉街国际总部A座</span>
						<span>4.35km</span>
					</div>
				</div>
			</div>
			<div class="line">
				<div class="img"></div>
				<div class="text">
					<div class="text1">启路汽车美容店</div>
					<div class="text2">
						<span>中北路汉街国际总部A座</span>
						<span>4.35km</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.car{
		background: #F5F5F5;
		height:calc(100% - 3.3rem);
	}
	.item1{
		padding: 0.5rem;
		padding-top:1rem;
		justify-content: space-around;
		display: flex;
		background: #fff;
	}
	.pic{
		width:5rem;
		height:3.5rem;
		background: #111111;
		border-radius: 4px;
		color: #fff;
		opacity: 0.5;
		font-size: 0.5rem;
		line-height: 3.5rem;
		text-align: center;
	}
	.item2{
		background: #fff;
		height: 2rem;
		padding-top:1rem;
		display: flex;
		justify-content: space-between;
	}
	.item2 select{
		border: 1px solid #f3f3f3;
		height: 1.3rem;
		color:#CACACA;
		width:25%;
	}
	.item2 select:nth-child(1){
		margin-left:0.9rem;
	}
	.item2 select:nth-child(3){
		margin-right: 0.9rem;
	}
	.item3{
		margin-top:1rem;
	}
	.line{
		height:3rem;
		padding:0.6rem 0.9rem;
		display: flex;
		justify-content: flex-start;
		margin-bottom: 0.5rem;
		background: #fff;
	}
	.img{
		background: #f5f5f5;
		height: 3rem;
		width: 3rem;
	}
	.text{
		width:calc(100% - 3rem);
		
	}
	.text div{
		padding: 0;
	}
	.text1{
		font-size: 0.8rem;
		display: flex;
		justify-content: space-between;
		margin-left: 0.5rem;
	}
	.text2{
		font-size: 0.5rem;
		color:#CACACA;
		display: flex;
		justify-content: space-between;
		margin-top: 0.8rem;
	}
	.text2 span:nth-child(1){
		margin-left: 0.5rem;
	}
</style>