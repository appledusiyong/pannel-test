<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="touchImg">
    <!-- <index></index> -->
    <test-panel></test-panel>
    <test-toast ref="toast"></test-toast>
  </div>
</template>

<script>
// import index from './components/index.vue'

export default {
  name: 'app',
  data(){
    return {
      teatArr:[1,2,3]
    }
  },
  methods:{
    touchImg(){
      this.$refs.toast.toastPlugin('toast起作用了',1000)
    }

  },
  components: {
    
  },
  created(){
    this.$myMethod(this.teatArr)
  }
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
</style>
