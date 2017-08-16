<template>
	<div class="merchant">
		<div class="block">
		    <el-carousel height="150px">
		      <el-carousel-item v-for="item in 4" :key="item">
		        <h3>{{ item }}</h3>
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<div class="detail">
			<div class="line"> 
				<span>
					<span class="span">地址</span>
					<span class="span">湖北省武汉光广场XXXXX店</span>
				</span>
				<span>
					<img  class="poistion" src="../../assets/position.png" alt="" />
					<span class="span">35km</span>
				</span>
			</div>
			<div class="line"> 
				<span>
					<span class="span">营业时间</span>
					<span class="span">9：30 - 17：30</span>
				</span>
				<span>
					<img class="phone" src="../../assets/phone.png" alt="" @click="open2"/>
				</span>
			</div>
		</div>
		<tab></tab>
	</div>
</template>

<script>
	import tab from '@/components/come/tab'
	export default {
		name:'merchant',
		components:{
			tab,
		},
		methods: {
	      open2() {
	      	var a = document.getElementsByClassName('el-message-box').style;
	        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          
	        }).catch(() => {
	                
	        });
	      }
	    }
	}
</script>

<style scoped>
	/*录播图*/
	h1, h2 {
	  font-weight: normal;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	a {
	  color: #42b983;
	}
	.el-carousel__item h3 {
	  color: #475669;
	  font-size: 14px;
	  opacity: 0.75;
	  line-height: 150px;
	  margin: 0;
	}
	.el-carousel__item:nth-child(2n) {
	  background-color: #99a9bf;
	}
	.el-carousel__item:nth-child(2n+1) {
	  background-color: #d3dce6;
	}
	/**/
	.merchant{
		background: #F5F5F5;
		height: calc(100% - 3rem);
	}
	.detail{
		height: auto;
		background: #fff;
	}
	.line{
		display: flex;
		justify-content: space-between;
		
	}
	.line:nth-child(1){
		padding: 0.6rem 1rem 0.3rem  ;
	}
	.line:nth-child(2){
		padding: 0.3rem 1rem ;
	}
	.span{
		font-size: 0.8rem!important;
		color:#8C8C8C!important;
	}
	.poistion{
		width:1rem
	}
	.phone{
		width:1.3rem;
	}
	.el-message-box{
		width:initial!important;
	}
	
	
</style>