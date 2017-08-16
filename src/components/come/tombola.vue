<template>
	<div class="tombola">
		<div class="item">
			<p class="p">武夷山矿泉水一瓶</p>
			<div class="text">请向加油工出示刮奖信息，领取商品</div>
			<div class="my"><div class="btn">领取</div></div>
		</div>
		<div class="item1">
			<div class="box">
				<div class="l">
					<p class="pNumb">
						<span class="num">9</span>
						<span>
							<div class="zhe">折</div>
							<div class="quan">加油劵</div>
						</span>
						
					</p>
					<p class="myP">满100元可用</p>
					<p class="myP">2017-06-30到期</p>
				</div>
				<div class="r">
					<div class="rBtn">领取</div>
				</div>
			</div>
		</div>
		<div class="item1">
			<div class="box">
				<div class="l">
					<p class="pNumb">
						<span class="num">9</span>
						<span>
							<div class="zhe">折</div>
							<div class="quan">加油劵</div>
						</span>
						
					</p>
					<p class="myP">满100元可用</p>
					<p class="myP">2017-06-30到期</p>
				</div>
				<div class="r">
					<div class="rBtn">领取</div>
				</div>
			</div>
		</div>
		<div class="item1">
			<div class="box">
				<div class="l">
					<p class="pNumb">
						<span class="num">9</span>
						<span>
							<div class="zhe">折</div>
							<div class="quan">加油劵</div>
						</span>
						
					</p>
					<p class="myP">满100元可用</p>
					<p class="myP">2017-06-30到期</p>
				</div>
				<div class="r">
					<div class="rBtn">领取</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.tombola{
		padding:1rem;
	}
	.item{
		height:8rem;
		border:5px solid #ffcc9f;
		margin-bottom: 1rem;
	}
	.item1{
		height:8rem;
		border:5px solid #ffcc9f;
		margin-bottom: 1rem;
		padding: 1rem;
	}
	.l{
		width:70%;
		color: #fff;
		
	}
	.l p{
		margin: 0;
		width:50%;
		margin-left:30%;
		text-align: left;
		
	}
	.r{
		width:30%;
	    flex-flow: column;
		display: flex;
	    justify-content: center;
	}
	.rBtn{
		height:1.5rem;
		line-height: 1.5rem;
		border-radius: 1.5rem;
		width:4rem;
		
		color:#eb4452;
		background: #fff;
		font-size: 0.5rem;
		text-align: center;
	}
	.box{
		width: 100%;
		height: 100%;
		background: #ff5c6a;
		display: flex;
		justify-content: space-between;
	}
	.p{
		font-size: 1rem;
		font-weight: bolder;
		margin:1.5rem 0 0.5rem;
	}
	.text{
		color:#8C8C8C;
		font-size: 0.5rem;
	}
	.btn{
		height:1.5rem;
		line-height: 1.5rem;
		border-radius: 1.5rem;
		width:20%;
		color:#fff;
		background: #eb4452;
		font-size: 0.5rem;
		text-align: center;
	}
	.my{
		display: flex;
		justify-content: center;
		margin-top:0.5rem
	}
	.num{
		font-size: 3rem;
	}
	.myP{
		font-size: 0.5rem;
		margin-top:0.3rem!important;
	}
	.pNumb{
		margin-top:0.5rem!important;
		display: flex;
		justify-content: flex-start;
	}
	.zhe{
		font-size: 0.8rem;
		margin-top: 0.5rem;
		margin-left: 0.5rem;
	}
	.quan{
		font-size: 0.5rem;
		margin-top: 0.3rem;
		margin-left: 0.5rem;
		
	}
</style>