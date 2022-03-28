<template>
  <div class="app">
<p>App</p>
<hr>
<Main></Main>
<!--   <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->


  </div>
</template>

<script>
import Main from './views/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  font-size: 12px;
  max-width: 960px;
  background-color: #e4e7f1;
  margin: auto;
}
</style>
