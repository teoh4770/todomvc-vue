<script setup lang="ts">

const todoCompleted = defineModel('todo-completed');
const todoTitle = defineModel('todo-title');
const emit = defineEmits(['delete-todo']);
</script>

<template>
  <li class="todo-item">
    <article class="box">
      <div class="is-flex is-justify-content-space-between">
        <!-- Checkbox -->
        <b-field>
          <b-checkbox v-model="todoCompleted">
            {{ todoTitle.trim() }}
          </b-checkbox>
        </b-field>

        <!-- Delete Button   -->
        <b-button type="delete is-large" @click="emit('delete-todo', todo.id)"></b-button>
      </div>

      <div class="is-flex is-justify-content-space-between">
        <!--  Edit Input with same name as title  -->
        <b-field label="Edit" horizontal>
          <b-input size="is-small" v-model="todoTitle"></b-input>
        </b-field>
      </div>
    </article>
  </li>
</template>