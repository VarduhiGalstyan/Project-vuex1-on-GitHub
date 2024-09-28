<template>
  <h1>Counter</h1>
  <h2>{{$store.state.count}}</h2>
  <button @click="increase" class="btn btn-success">Increase</button>
</template>

<script>
export default{
  methods: {
    increase(){
       this.$store.state.count++
    }
  }
}
</script>
<style>
.btn{
    color: red;
}
</style>