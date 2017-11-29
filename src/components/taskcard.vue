<template>
<div id="cardWrap">
  <p>taskcard.vue</p>
  <h2>{{ task.text }}</h2>
</div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      task:{
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
div#cardWrap {
  box-sizing: border-box;
  width: 30vw;
  background: #353;
  margin: 10px auto;
  padding: 10px;
  color: #7a5;

}
h2 {
  font-weight: normal;
}
</style>
