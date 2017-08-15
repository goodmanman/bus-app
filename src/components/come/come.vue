<template>
  <div class="hello">
  	<div class="block">
	    <el-carousel height="150px">
	      <el-carousel-item v-for="item in 4" :key="item">
	        <h3>{{ item }}</h3>
	      </el-carousel-item>
	    </el-carousel>
	  </div>
	  <div class='someText'>
	  	<p class="p1"><span class="">武汉汉街加油站</span><span class="colorF8">4.35km</span></p>
	  	<p class="p2"><span class="colorF8">湖北省武汉市江岸区新村37号</span><span class='daoHang'>导航</span></p>
	  	<p class='pClick'>
	  		<router-link to="/comePay">点击下拉获取更多的加油站</router-link>
	  		<!--<router-link  :to="{path:'/comePay',query: {name: 123}}">点击下拉获取更多的加油站</router-link>-->
	  	</p>
	  </div>
  </div>
</template>

<script>

export default {
  name: 'come',
  data () {
    return {
      
    }
  }
  
}
</script>

<style scoped>
.hello{
	bottom: 0;
	width: 100%;
	margin-bottom: 0.1rem;
	border-top: 1px solid #ccc;
	background: #f5f5f5;
	height: calc(100% - 3rem);
}
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
.someText {
	width: 100%;
	padding:0.5rem 0;
	height:7rem;
	background: #fff;
	font-size: 0.7rem;;
}
.someText .p1,.someText .p2{
	width:80%;
	padding:0 10%;
	display: flex;
	justify-content: space-between;
}
.daoHang{
	color:#ef6672;
}
.pClick{
	font-size: 0.9rem;
	color:#111;
	text-align: center;
}
.p2{
	border-bottom: 1px solid #f8f8f8;
	padding-bottom: 0.5rem!important;
}
.colorF8{
	color:#cacaca;
}
</style>
