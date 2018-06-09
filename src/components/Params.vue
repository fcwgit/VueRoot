<template>
  <div class="hello">
    <h1>{{ msg }} --  {{$route.params.newsId}}  --  {{$route.params.newsTitle}}</h1>
    <h2>通过URL传递params</h2>
  </div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
