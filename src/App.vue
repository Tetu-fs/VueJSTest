<template>
  <div id="app">
    <p>App.Vue</p>
    <img src="./assets/taskLogo.png">
    <task-input/>
  </div>
</template>

<script>
import taskInput from './components/input.vue'
export default {
  name: 'app',
  template: '<task-input/>',
  components: {taskInput}
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>
