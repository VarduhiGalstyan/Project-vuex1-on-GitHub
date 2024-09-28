<template>
  <h1>Counter</h1>
  <h2>{{$store.state.count}}</h2>
  <div> 
    <button @click="increase" class="btn btn-success">Increase</button>
    <button @click="reduce" class="btn btn-success">Reduce</button>
  </div>
</template>

<script>
export default{
  methods: {
    increase(){
       this.$store.state.count++
    },
    reduce(){
        this.$store.state.count--
    }
  }
}
</script>
<style>
.btn{
    color: red;
}
</style>