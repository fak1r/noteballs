import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { 
  createUserWithEmailAndPassword, signOut, 
  signInWithEmailAndPassword, onAuthStateChanged 
} from "firebase/auth";
import { useStoreNotes } from "@/stores/storeNotes"

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {}
  }),
  actions: {
    init(){
      const storeNotes = useStoreNotes();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push({ name: 'notes' });
          storeNotes.init();
        } else {
          this.user = {};
          this.router.replace({ name: 'auth' });
          storeNotes.clearNotes();
        }
      });
    },
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    },
    loginUser(credentials){
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    },
    logoutUser(){
      signOut(auth).then(() => {
        
      }).catch((error) => {
        
      });
    }
  }
})