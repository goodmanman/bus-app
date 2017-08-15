<template>
	<div class="meu">
		<div class="item"><router-link to="/come"><img src="../assets/comOn.png" alt="" /><div class="item">加油</div></router-link></div>
		<div class="item"><router-link to="/carServeice"><img src="../assets/car.png" alt="" /><div class="item">汽车服务</div></router-link></div>
		<div class="item"><router-link to="/activity"><img src="../assets/active.png" alt="" /><div class="item">活动</div></router-link></div>
		<div class="item"><router-link to="/personCenter"><img src="../assets/me.png" alt="" /><div class="item">我</div></router-link></div>
	</div>
</template>

<script>

</script>

<style scoped>
.meu{
	height: 3rem;
	display: flex;
	justify-content: space-around;
	color:#444444;
	font-size: 0.8rem;
	border-top:1px solid #ccc ;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding-top:0.3rem;
	background: #F5F5F5;
}
.meu img{
	width:1.5rem;
}
.meu .item{
	width: 4.5rem;
}
.meu a{
	text-decoration: none;
	color:#111;
}	
</style>