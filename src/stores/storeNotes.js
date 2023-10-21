import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: 'id1',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quas sed atque iure, amet deserunt aspernatur necessitatibus officia rerum facilis minima, ullam nisi excepturi, temporibus beatae deleniti veniam porro maxime.'
      },
      {
        id: 'id2',
        content: 'Short note'
      }
    ]
  }),
  actions: {
    addNote(newNoteContent){
      let id = new Date().getTime().toString().slice(-5);
      let note = {
        id,
        content: newNoteContent
      }

      this.notes.unshift(note); 
    },
    deleteNote(id){ 
      this.notes = this.notes.filter(el => el.id !== id);
    }
  }
})