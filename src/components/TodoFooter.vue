<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps(['todoAmount']);
const filter = defineModel('filter');
const emit = defineEmits(['clear-completed']);

const todoAmountText = computed(() => {
  if (props.todoAmount <= 1) {
    return `${props.todoAmount} item left`;
  }

  return `${props.todoAmount} items left`;
});

</script>

<template>
  <article class="box">
    <div class="columns is-align-items-center">
      <!-- Todo Count   -->
      <div class="column">{{ todoAmountText }}</div>

      <!--  Radio Button Group  -->
      <b-field class="column buttons marginless">
        <b-radio-button
            v-model="filter"
            native-value="all"
            type="is-primary is-light is-outlined"
        >
          All
        </b-radio-button>
        <b-radio-button
            v-model="filter"
            native-value="active"
            type="is-primary is-light is-outlined"
        >
          active
        </b-radio-button>
        <b-radio-button
            v-model="filter"
            native-value="completed"
            type="is-primary is-light is-outlined"
        >
          completed
        </b-radio-button>
      </b-field>

      <b-button class="column" @click="emit('clear-completed')" size="is-small">Clear Completed</b-button>
    </div>
  </article>
</template>

<style scoped>

</style>