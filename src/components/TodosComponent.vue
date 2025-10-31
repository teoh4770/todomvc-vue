<script setup lang="ts">

import TodoHeader from "./TodoHeader.vue";
import TodoFooter from "./TodoFooter.vue";
import TodoList from "./TodoList.vue";
import {computed, ref} from "vue";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

const todos = ref<Todo[]>([]);
const filter = ref<Filter>(Filter.All);

const todoAmount = computed(() => todos.value.length);
const filteredTodos = computed(() => {
  switch (filter.value) {
    case Filter.Active:
      return todos.value.filter((todo: Todo) => !todo.completed);
    case Filter.Completed:
      return todos.value.filter((todo: Todo) => todo.completed);
    default:
      return todos.value;
  }
})


function addTodo(todoTitle: string) {
  todos.value = [
    ...todos.value,
    {
      id: todos.value.length + 1,
      title: todoTitle,
      completed: false,
    }
  ]
}

function toggleTodo(id: number, completed: boolean) {
  todos.value = todos.value.map((todo: Todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: completed
      }
    }

    return todo;
  });
}

function editTodo(id: number, newTitle: string) {
  todos.value = todos.value.map((todo: Todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        title: newTitle
      }
    }

    return todo;
  });
}

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo: Todo) => todo.id !== id);
}

function clearCompletedTodos() {
  todos.value = todos.value.filter(todo => !todo.completed);
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered mb-6">TodoMVC</h1>

      <TodoHeader @add-todo="addTodo"/>
      <TodoList
          :todos="filteredTodos"
          @toggle-todo="toggleTodo"
          @edit-todo="editTodo"
          @delete-todo="deleteTodo"
      />
      <TodoFooter
          v-if="todoAmount > 0"
          :todo-amount="todoAmount"
          v-model:filter="filter"
          @clear-completed="clearCompletedTodos"
      />
    </div>
  </section>
</template>