import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'
import { useStoreAuth } from "@/stores/storeAuth";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats
    },
    {
      path: '/editNote/:id',
      name: 'edit-note',
      component: ViewEditNote
    },
    {
      path: '/auth',
      name: 'auth',
      component: ViewAuth
    }
  ]
})

// navigation guards
router.beforeEach((to, from, next) => {
  const storeAuth = useStoreAuth();
  /* if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // если пользователь не авторизован, то `next` будет вызываться дважды
  next() */
  if (!storeAuth.user.id && to.name !== 'auth') next ({ name: 'auth' });
  if (storeAuth.user.id && to.name === 'auth') next (false);
  next();
})

export default router