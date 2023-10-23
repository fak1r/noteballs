<template>
  <div
    class="card mt-4"
  >
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ charactersLength }} character{{ charactersLength == 1 ? '' : "s" }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="{ name: 'edit-note', params: { id: note.id } }"
        class="card-footer-item"
        href="#"
      >Edit</RouterLink>
      <a
        @click.prevent="modals.deleteNote = true"
        class="card-footer-item"
        href="#"
      >
        Delete
      </a>
    </footer>
    <ModalDeleteNote
      v-model="modals.deleteNote"
      v-if="modals.deleteNote"
      :noteId="note.id"
    >
    </ModalDeleteNote>
  </div>
</template> 

<script setup>

  import { computed, reactive } from 'vue';
  import  { useStoreNotes } from '@/stores/storeNotes'
  import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue'

  const storeNotes = useStoreNotes();

  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  });

  const charactersLength = computed(() => props.note.content.length);

  const modals = reactive({
    deleteNote: false
  })

</script>