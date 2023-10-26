<template>
  <div class="notes">


    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add new note"
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
        >
          Clear
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-warning"
      max="100"
    >
    </progress>

    <template v-else>
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      >
      </Note>

      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yet...
      </div>
    </template>
    
  </div>
</template>

<script setup>

  import { ref, onMounted, onUnmounted } from 'vue';
  import Note from '@/components/notes/Note.vue'
  import AddEditNote from '@/components/notes/AddEditNote.vue'
  import { useStoreNotes } from '@/stores/storeNotes.js'
  import { useWatchCharacters } from '@/use/useWatchCharacters.js'

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

  useWatchCharacters(newNote, 100);

  /* const handleKeyboard = e => {
    if (e.key === 'Enter' || newNote.value !== ''){
      console.log('Enter');
    } 
  }

  onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
  })

  onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
  }) */
  
</script>