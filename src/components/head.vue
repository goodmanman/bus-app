<template>
	<div class='head'><img onclick="window.history.go(-1)" src="../assets/back.png" />{{title}}</div>
</template>

<script>
	export default {
		name: 'head',
		data() {
			return {
				title: "加油站111"
			}
		},
		methods: {
			goBack() {
				//window.history.go(-1);
				console.log(1)
			}
		}
	}
</script>

<style scoped>
	.head {
		background: #36353a;
		height: 3rem;
		line-height: 3rem;
		color: #fff;
		font-size: 1rem;
		text-align: center;
	}
	
	.head img {
		height: 1rem;
		float: left;
		margin-left: 0.5rem;
		margin-top: 1rem
	}
</style>