<template>
	<div class="activity">
		<div class="item item1">
			<div class="text">半价加油</div>
		</div>
		<div class="item item2">
			<div class="text">7.5加油</div>
		</div>
		<div class="item item3">
			<div class="text">新人礼包</div>
		</div>
		<div class="item item4">
			<div class="text">分享红包</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.activity{
		height:calc(100% - :;.3rem);
		background: #FFFFFF;
		padding: 1rem 1.5rem;
		
	}
	.item{
		height:7.4rem;
		line-height: 7.4rem;
		border-radius: 8px;
		margin-bottom: 1rem;
	}
	.item1{
		background-image: radial-gradient(circle at left, rgb(137, 229, 255), rgb(129, 189, 255));
	}
	.item2{
		background-image: radial-gradient(circle at left, rgb(137, 203, 255), rgb(129, 173, 255));
	}
	.item3{
		background-image: radial-gradient(circle at left, rgb(255, 195, 149), rgb(255, 164, 137));
	}
	.item4{
		background-image: radial-gradient(circle at left, rgb(255, 166, 166), rgb(255, 139, 159));
	}
	.text{
		color: #fff;
	}
</style>