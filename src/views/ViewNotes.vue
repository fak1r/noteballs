<template>
  <div class="notes">


    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link"
        >
          Add New Note
        </button>
        <button
          @click="clearTextArea"
          class="button is-link is-light"
        >Clear
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    >
    </Note>
    
  </div>
</template>

<script setup>

  import { ref } from 'vue';
  import Note from '@/components/notes/Note.vue'
  import AddEditNote from '@/components/notes/AddEditNote.vue'
  import { useStoreNotes } from '@/stores/storeNotes'

  const storeNotes = useStoreNotes();

  const newNote = ref('');
  const newNoteRef = ref(null);
  const addEditNoteRef = ref(null);

  const addNote = () => {
    storeNotes.addNote(newNote.value);

    newNote.value = '';

    addEditNoteRef.value.focusTextarea();
  }

  const clearTextArea = () => {
    newNote.value = '';
  }
  
</script>