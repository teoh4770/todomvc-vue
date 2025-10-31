<script setup lang="ts">

const props = defineProps(['todo', 'index']);
const emit = defineEmits(['delete-todo', 'toggle-todo', 'edit-todo']);
</script>

<template>
    <li class="todo-item" :key="todo.id">
      <article class="box">
        <div class="is-flex is-justify-content-space-between">
          <!-- Checkbox -->
          <b-field>
            <b-checkbox
                :model-value="todo.completed"
                @update:model-value="emit('toggle-todo', todo.id, $event)"
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
            <b-input
                size="is-small"
                :model-value="todo.title"
                @update:model-value="emit('edit-todo', todo.id, $event.trim())"
            ></b-input>
          </b-field>
        </div>
      </article>
    </li>
</template>
