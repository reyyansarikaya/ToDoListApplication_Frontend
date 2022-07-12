<template>
  <div class="main">
    <h1 id="title">Modanisa ToDo List Application</h1>
    <input v-model="todo" type="text" name="add-input" id="todo-input" placeholder="write todo">
    <button id="add-button" @click="addTodo">Add</button>
    <div class="to-do-container">
      <ListToDo
          v-for="todo in todolist"
          :key="todo.id"
          :todo="todo"
      ></ListToDo>
    </div>

  </div>
</template>

<script>
import ListToDo from "../components/ListToDo";
import API from "../api";

export default {
  name: "MainPage",
  components: {
    ListToDo
  },

  data() {
    return {
      todolist: [],
      todo: ''
    }
  },
  methods:{
    async addTodo() {
      if (this.todo === '')
        return
      try {
        const {data} = await API.addToDo(this.todo)
        this.todolist.push(data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created() {
    try {
      this.todolist = await API.getToDo()
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
</style>