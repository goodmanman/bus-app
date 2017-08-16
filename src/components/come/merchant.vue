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
	        this.$confirm('400-8888-8888', '提示', {
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

<style>
	/*录播图*/
	.merchant h1, h2 {
	  font-weight: normal;
	}
	.merchant ul {
	  list-style-type: none;
	  padding: 0;
	}
	
	.merchant a {
	  color: #42b983;
	}
	.merchant .el-carousel__item h3 {
	  color: #475669;
	  font-size: 14px;
	  opacity: 0.75;
	  line-height: 150px;
	  margin: 0;
	}
	.merchant .el-carousel__item:nth-child(2n) {
	  background-color: #99a9bf;
	}
	.merchant .el-carousel__item:nth-child(2n+1) {
	  background-color: #d3dce6;
	}
	/**/
	.merchant{
		background: #F5F5F5;
		height: calc(100% - 3rem);
	}
	.merchant .detail{
		height: auto;
		background: #fff;
	}
	.merchant .line{
		display: flex;
		justify-content: space-between;
		
	}
	.merchant .line:nth-child(1){
		padding: 0.6rem 1rem 0.3rem  ;
	}
	.merchant .line:nth-child(2){
		padding: 0.3rem 1rem ;
	}
	.merchant .span{
		font-size: 0.8rem!important;
		color:#8C8C8C!important;
	}
	.merchant .poistion{
		width:1rem
	}
	.merchant .phone{
		width:1.3rem;
	}
	.el-message-box__header{
		display: none;
	}
	.el-icon-warning{
		display: none;
	}
	.el-message-box{
		width:80%!important;
	}
	.el-message-box__message{
		margin-left: 0!important;
		text-align: center;
	}
	.el-button--primary{
		background: #eb4452!important;
		border-color: #eb4452!important;
	}
</style>