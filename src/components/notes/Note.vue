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
        @click.prevent="storeNotes.deleteNote(props.note.id)"
        class="card-footer-item"
        href="#"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>

  import { computed } from 'vue';
  import  { useStoreNotes } from '@/stores/storeNotes'

  const storeNotes = useStoreNotes();

  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  });

  const charactersLength = computed(() => props.note.content.length);


</script>