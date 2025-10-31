<script setup lang="ts">

</script>

<template>
  <article class="box">
    <!--  Todo Input  -->
    <b-field label="Todo">
      <b-input
          type="text"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          @keyup.enter="
            $emit('add-todo', $event.target.value);
            $event.target.value = '';
          "
      />
    </b-field>
  </article>
</template>

<style scoped>

</style>