<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      ref="addEditNoteRef"
      label="Edit note"
      placeholder="Edit note"
    >
      <template #buttons>
        <button
          @click="$router.push({ name: 'notes' })"
          class="button is-link is-light"
        >
          Cancel
        </button>
        <button
          @click="handleSaveNoteClicked"
          :disabled="!noteContent"
          class="button is-link"
        >
          Save note
        </button>
        <button
          @click="clearNoteText"
          class="button is-link is-light"
        >
          Clear
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>

  import { ref } from 'vue';
  import AddEditNote from '@/components/notes/AddEditNote.vue'
  import { useStoreNotes } from '@/stores/storeNotes'
  import { useRoute, useRouter } from 'vue-router';

  const noteContent = ref('');
  const storeNotes = useStoreNotes();
  const route = useRoute();
  const router = useRouter();

  const clearNoteText = () => {
    noteContent.value = '';
  }

  noteContent.value = storeNotes.getNoteContent(route.params.id);

  const handleSaveNoteClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value);
    router.push({ name: 'notes' })
  }

</script>