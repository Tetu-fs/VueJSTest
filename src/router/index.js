import Vue from 'vue'
import Router from 'vue-router'
import TaskInput from '@/components/input'
import TaskCard from '@/components/taskcard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'input',
      component: TaskInput
    }
  ]
})
