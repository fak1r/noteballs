<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="newReview"
      v-autofocus
      class="input"
      placeholder="Review"
      type="text"
      maxlength="50"
    >
  </div>
</template>

<script setup>

  import { useStoreNotes } from '@/stores/storeNotes';
  import { vAutofocus } from '@/directives/vAutofocus.js'
  import { useWatchCharacters } from '@/use/useWatchCharacters.js'
  import { ref } from 'vue';


  const storeNotes = useStoreNotes();
  const newReview = ref('')

  useWatchCharacters(newReview, 50);
</script>