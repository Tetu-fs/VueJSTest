//参考: https://jsfiddle.net/mani04/4kyzkgLu/
window.addEventListener('DOMContentLoaded', () => {
  window.todo = new ToDO();
});
class ToDO {
  constructor() {
    const _this = this;
    //子要素にするコンポーネントを定義
    //グローバルではないので特定の要素として扱える
    const taskCard = {
      props: ['task'], //渡される値（今回はオブジェクト）
      template:
      '<div v-bind:id="task.id" class="taskCard">' + // v-bindにて渡された値で動的に書き換えができる
      '<input type="checkbox"></input>' +
      '<span>{{ task.description }}</span>' + // {{ 変数 }}で値を入れられる（idやclassには"変数"）
      `<div v-on:click='$emit("removeCard")' class="delete"></div>` +　//v-on:clickでクリックイベントを追加 下部で定義されているカスタムイベントremoveCardイベントを発火
      '</div>'
    }
    this.app = new Vue({
      el: '#app',
      template:
      '<div>' +
        '<div id="addTask">' +
          '<h1>Add Task</h1>' +
          '<input class="todoInput"' +
          'placeholder="タスクを入れる"' +
          'v-model="newTask"' + //自身が持つnewTaskの値と同期する（フォームに入力されれば変数を上書き、変数上書きされたら合わせる）
          'v-on:keyup.enter="addTask">' +　//enterがkeyupされたら自身が持つmethods内のaddTaskをよぶ
        '</div>' +
        '<div id="taskList">' +
          //宣言しておいたtask-cardコンポーネントを呼び出し
          //v-forで下部data内に存在するtaskListを回し、要素数だけ生成する
          //task="task"で生成したコンポーネントのpropsのtaskに値が入る（はず）
          //v-on:removeCardでカスタムイベントを発行し、自身が持つmethods内のremove関数を呼ぶ
          //key="task.id"にて配列のキーを設定（？）
          '<task-card v-for="(task, index) => in taskList" :task="task" v-on:removeCard="remove(index)" key = "task.id">{{ task.description }}>' +
        '</task-card> ' +
      '</div>' +
      '</div>',
      components: {
        'task-card': taskCard
      },
      data: {
        taskList: [],
        newTask: ''
      },
      methods: {
        addTask: function() {
          if (!this.newTask || this.newTask === '') {
            return;
          }
          const obj = {
            id: _this._getTaskID(),
            description: this.newTask,
          };
          this.taskList.push(obj);
          this.newTask = '';
        },
        remove: function(index) {
          this.taskList.splice(index, 1);
        }
      }
    });
  }

  //参考:
  _getTaskID() {
    const strong = 10;
    return '#' + new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  }
}
