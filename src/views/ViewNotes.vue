<template>
  <div class="notes">

    <div class="card has-background-warning-light mt-4 p-4 mb-5">
      <div class="field mt-4">
        <div class="control">
          <textarea class="textarea" placeholder="New note"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link">Add New Note</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
    
    <div
      v-for="note in notes"
      class="card mt-4"
      :key="note.id"
    >
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue';

  const notes = ref([
    {
      id: 'id1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quas sed atque iure, amet deserunt aspernatur necessitatibus officia rerum facilis minima, ullam nisi excepturi, temporibus beatae deleniti veniam porro maxime.'
    },
    {
      id: 'id2',
      content: 'Short note'
    }
  ])
</script>