window.addEventListener('DOMContentLoaded', () => {

  window.todo = new ToDO();
});
class ToDO {
  constructor() {
    this.input = new Vue({
      el: '#addTask',
      data: {
        taskDescription: ''
      },
      methods: {
        addTask: function() {
          const taskCard = '<task-card></task-card>';
          document.getElementById('taskList').insertAdjacentHTML('beforeend', taskCard);

          const task = new Task(this.taskDescription)
          this.taskDescription = '';
        }
      }
    });
  }
}

class Task {
  constructor(description) {
    return this._generateTaskCard(description, this._getTaskID());
  }

  _generateTaskCard(description, id) {
    Vue.component('task-card', {
      template: `<div v-bind:id="id" class="taskcard"><input type="checkbox"></input><span>{{ description }}</span></div>`,
      data: function () {
        return {
          id: id,
          description: description
        }
      }  
    });
    return new Vue({
      el: '#taskList'
    });
  }
  //参考:
  _getTaskID() {
    const strong = 10;
    return '#' + new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
  };
}
