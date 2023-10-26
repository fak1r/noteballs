import { defineStore } from 'pinia'
import { 
  collection, onSnapshot, 
  doc, deleteDoc, updateDoc, addDoc,
  query, orderBy
} from "firebase/firestore";
import { db } from '@/js/firebase'
import { useStoreAuth } from '@/stores/storeAuth';

let notesCollectionRef;
let notesCollectionQuery;
let getNotesSnapshot = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      /* local storage
      {
        id: 'id1',
        content: 'Lorem ipsum'
      },
      {
        id: 'id2',
        content: 'Short note'
      } */
    ],
    notesLoaded: false
  }),
  actions: {
    init(){
      const storeAuth = useStoreAuth();

      notesCollectionRef = collection(db, "users", storeAuth.user.id, "notes");
      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
      this.getNotes();
    },
    async getNotes(){
      this.notesLoaded = false;

      if (getNotesSnapshot) getNotesSnapshot(); // unsubscribe from any active listener

      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        });
        this.notes = notes;
        this.notesLoaded = true;
      }, error => {
        console.log('error.message: ', error.message);
      });
    },
    clearNotes(){
      this.notes = [];
      if (getNotesSnapshot) getNotesSnapshot(); // unsubscribe from any active listener
    },
    async addNote(newNoteContent){
      let date = new Date().getTime().toString();
      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(id){  
      await deleteDoc(doc(notesCollectionRef, id));
    },
    async updateNote(id, content){
      await updateDoc(doc(notesCollectionRef, id), {
        content
      });
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.find(el => el.id === id).content;
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      return state.notes.reduce((total, el) => total + el.content.length, 0)
    }
  }
})