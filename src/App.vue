<template>
  <div id="app">
    <TabBar></TabBar>
    <router-view/>
  </div>
</template>

<script>
  import TabBar from "./components/BottomBar/index";
  export default {
    name: 'App',
    components:{
      TabBar
    }
  }
</script>

<style scoped>

</style>>
