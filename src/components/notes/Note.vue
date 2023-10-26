<template>
  <div
    class="card mt-4"
  >
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column has-text-left">
          {{ dateFormated }}
        </small>
        <small class="column has-text-right">
          {{ charactersLength }} character{{ charactersLength == 1 ? '' : "s" }}
        </small>
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
  import { useDateFormat } from '@vueuse/core'

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

  const dateFormated = computed(() => {
    let date = new Date(parseInt(props.note.date));
    let formattedDate = useDateFormat(date, 'DD-MM-YYYY @ HH:mm:ss');
    return formattedDate.value;
  })

</script>