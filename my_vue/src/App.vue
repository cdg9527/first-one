<template>
  <div id="app">
    <h1>共享单车</h1>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
	height: 100%;
	display: flex;
	flex-direction: column;
}
h1{
	height: 45px;
	line-height: 45px;
}
.content{
	flex: 1;
}
#app h1{
	color: #26A2FF;
	border-bottom: #4CAF50 solid 1px;
}
</style>
