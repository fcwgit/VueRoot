<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <p>
      导航：
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi</router-link>|
      <router-link :to="{name:'hi1',params:{username:'zhangsan',id:24}}">Hi1</router-link>|
      <router-link to="/hi/hi2">Hi2</router-link>|
      <router-link to="/params/1234/jspang website is good">params</router-link>|

      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/goHomeParams/1234/jspang website is good">goHomeParams</router-link>|
      <router-link to="/fcw/1234/jspang website is good">alias</router-link>|
    </p>
    <!-- <p>========{{$route.name}}</p> -->
    <transition  name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc;"></router-view>
    <router-view name="left" style="float:right;width:50%;height:300px;background-color:#c0c;"></router-view>
    
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
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 0.5s;
}
</style>
