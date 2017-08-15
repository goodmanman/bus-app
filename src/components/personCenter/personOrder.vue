<template>
	<div class="personOrder">
		<div class="line">
			<div class="line1">
				<div>
					<span>武汉测试加油站</span>
					<span class="mycolor"></span>
				</div>
				<div>
					<span>2017-07-09</span>
					<span>11:38</span>
				</div>
			</div>
			<div class="line2">
				<div>￥0.01</div>
				<div>12号油抢-95#</div>
			</div>
			<div class="line3">
				<div>查看详情<img src="../../assets/fanhui.png" alt="" /></div>
			</div>
		</div>
		<div class="line">
			<div class="line1">
				<div>
					<span>武汉测试加油站</span>
					<span class="mycolor">(预约中)</span>
				</div>
				<div>
					<span>2017-07-09</span>
					<span>11:38</span>
				</div>
			</div>
			<div class="line2">
				<div>￥0.01</div>
				<div>12号油抢-95#</div>
			</div>
			<div class="line3">
				<router-link to='/personOrderIn'><div>查看详情<img src="../../assets/fanhui.png" alt="" /></div></router-link>
			</div>
		</div>
		<div class="line">
			<div class="line1">
				<div>
					<span>武汉测试加油站</span>
					<span class="mycolor">(已取消)</span>
				</div>
				<div>
					<span>2017-07-09</span>
					<span>11:38</span>
				</div>
			</div>
			<div class="line2">
				<div>￥0.01</div>
				<div>12号油抢-95#</div>
			</div>
			<div class="line3">
				<router-link to='/personOrderCancel'><div>查看详情<img src="../../assets/fanhui.png" alt="" /></div></router-link>
			</div>
		</div>
		<div class="line">
			<div class="line1">
				<div>
					<span>武汉测试加油站</span>
					<span class="mycolor">(已完成)</span>
				</div>
				<div>
					<span>2017-07-09</span>
					<span>11:38</span>
				</div>
			</div>
			<div class="line2">
				<div>￥0.01</div>
				<div>12号油抢-95#</div>
			</div>
			<div class="line3">
				<router-link to='/personOrderComplete'><div>查看详情<img src="../../assets/fanhui.png" alt="" /></div></router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
	.personOrder{
		background: #F5F5F5;
		height: calc(100% - 4rem);
		padding-top: 1rem;
		font-family: "微软雅黑";
	}
	
	.line{
		height:8rem;
		background: #FFFFFF;
		margin-top:1rem;
		
	}
	.line a{
		text-decoration: none;
		color:#ed5461;
	}
	.line:nth-child(1){
		margin-top: 0;
	}
	.line1{
		width: calc(100%-1.8rem);
		padding: 0 0.9rem;
		height:2rem;
		line-height: 2rem;
		border-bottom: 1px solid #F5F5F5;
		display: flex;
		justify-content: space-between;
		font-size: 0.8rem;
	}
	.line2{
		width: calc(100%-1.8rem);
		padding: 0 0.9rem;
		height:4rem;
		border-bottom: 1px solid #F5F5F5;
		text-align: left;
		font-size: 0.8rem;
		color:#8c8c8c;
	}
	.line2 div{
		height:2rem;
		line-height: 2rem;
	}
	.line3{
		width: calc(100%-1.8rem);
		padding: 0 0.9rem;
		height: 2rem;
		line-height: 2rem;
		text-align: right;
		font-size: 0.5rem;
		color:#ed5461;
	}
	.personOrder img{
		width:0.5rem;
		margin-left:0.5rem
	}
	.mycolor{
		color:#ed5461;
		margin-left: 0.5rem;
	}
</style>