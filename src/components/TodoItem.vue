<script setup lang="ts">

const props = defineProps(['todo', 'index']);
const emit = defineEmits(['delete-todo']);
</script>

<template>
    <li class="todo-item" :key="todo.id">
      <article class="box">
        <div class="is-flex is-justify-content-space-between">
          <!-- Checkbox -->
          <b-field>
            <b-checkbox
                v-model="todo.completed"
            >
              {{ todo.title }}
            </b-checkbox>
          </b-field>

          <!-- Delete Button   -->
          <b-button type="delete is-large" @click="emit('delete-todo', todo.id)"></b-button>
        </div>

        <div class="is-flex is-justify-content-space-between">
          <!--  Edit Input with same name as title  -->
          <b-field label="Edit" horizontal>
            <b-input size="is-small" v-model.trim="todo.title"></b-input>
          </b-field>
        </div>
      </article>
    </li>
</template>