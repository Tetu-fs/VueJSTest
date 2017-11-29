<template>
  <div id="wrap">
    <p>input.vue</p>
    <h1>{{ msg }}</h1>
    <input type="textarea" 
    placeholder="あたらしいにんむ"
    v-model="newTask.text" 
    @keydown.enter="addTask">

   <TaskCard v-for="task in taskList" :key="task.id" :task="task"></TaskCard>
  </div>
</template>

<script>
import TaskCard from './taskcard.vue';
const getInitTask = id => {return {id: id, text: ''} };
export default {
name: 'input',
  data () {
    return {
      msg: 'タスクを入力',
      id: 0,
      newTask: getInitTask(0),
      taskList:[]
    }
  },
  methods:{
    addTask(e) {
      this.taskList.push(this.newTask);

      this.id = this.id + 1;
      this.newTask = getInitTask(this.id);
    }
  },
  
  template: '<TaskCard/>',
  components: { TaskCard }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#wrap {
  width: 35vw;
  margin: 10px auto;
  padding: 20px 10px;
  box-sizing: border-box;
  border: 4px solid #373;
}
h1 {
  font-weight: normal;
}
input {
  font-family: 'PixelMplus10';
  font-size:1.5em;
  text-align: center;
  border: 5px solid #353;
  background:#373;
  color: #7a5;
  box-sizing: border-box;

  width: 20vw;
  height: 40px;
  margin-bottom: 20px;

}
input::-webkit-input-placeholder {
  color: #353;
}
</style>
