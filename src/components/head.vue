<template>
	<div class='head'><img onclick="window.history.go(-1)" src="../assets/back.png" /><span>{{title}}</span></div>
</template>

<script>
	export default {
		name: 'head',
		data() {
			return {
				title:this.$route.meta.name
			}
		},
		methods: {
			goBack() {
				console.log(1)
			}
		},
		
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
	.head span{
		margin-left: -2rem;
	}
	.head img {
		height: 1rem;
		float: left;
		margin-left: 0.5rem;
		margin-top: 1rem
	}
</style>