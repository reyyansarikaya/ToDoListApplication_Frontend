<template>
  <div>
    <div class="todo-container">
      <span id="list-to-do">{{todo.todo}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListToDo",
  props: {
    todo: Object
  }
}
</script>

<style scoped>

</style>