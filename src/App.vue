<template>
  <div id="app">
  	<myhead></myhead>
    <router-view ></router-view>
    <meu v-show="$route.meta.navShow"></meu>
  </div>
</template>

<script>
import meu from '@/components/Meu';
import myhead from "@/components/head";	
export default {
  name: 'app',
  /*data:{
  	meuShow:true,
  },*/
  components:{
  	meu,
  	myhead
  }
}
</script>

<style>
html,body{
	margin: 0;
	padding: 0;
	width: 100%;
  height: 100%;
}	

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  margin-bottom: 0;
  width: 100%;
  height: 100%;
}
myhead{
	position: absolute;
	top: 0;
}
meu{
	position: absolute;
	bottom: 0;
}
</style>
