<template>
  <div class="hello">
    <h1>{{ msg }} -- {{$route.params.username}} -- {{$route.params.id}}</h1>
    <h2>使用 :to 传值</h2>
    <h2>:to="{name:'hi1',params:{username:'zhangsan',id:24}}"</h2>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'Hi1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
