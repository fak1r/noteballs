<template>
    <nav
    class="navbar is-warning"
    aria-label="main navigation"
    role="navigation"
    >
      <div class="container is-max-desktop">
        <div class="navbar-brand">
          <img src="@/assets/logo.png" width="50" height="50">

          <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>
            <a
              @click.prevent="showMobileNav = !showMobileNav"
              :class="{ 'is-active' : showMobileNav }"
              class="navbar-burger"
              aria-expanded="false"
              aria-label="menu"
              data-target="navbarBasicExample"
              role="button"
              ref="navbarBurgerRef"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>
        <div
          :class="{ 'is-active' : showMobileNav }"
          id="navbarBasicExample"
          class="navbar-menu"
          ref="navbarMenuRef"
        >
          <div class="navbar-end has-background-warning">
            <router-link
              @click="onCLickToLink"
              :to="{ name: 'notes'}"
              class="navbar-item"
              active-class="is-active">Notes</router-link
            >
            <router-link
              @click="onCLickToLink"
              :to="{ name: 'stats'}"
              class="navbar-item"
              active-class="is-active">Stats</router-link
            >
            <router-link
              @click="onClickAutorization"
              :to="{ name: 'auth'}"
              class="navbar-item"
              active-class="is-active">Autorization</router-link
            >
            <button
              v-if="storeAuth.user.id"
              @click="logout"
              class="button is-small is-info mt-3 mb-3"
            >
              Log out {{ storeAuth.user.email }}
            </button>
          </div>
        </div>
      </div>
  </nav>
</template>

<script setup>

  import { ref } from 'vue';
  import { onClickOutside } from '@vueuse/core'
  import { useStoreAuth } from '@/stores/storeAuth';

  const storeAuth = useStoreAuth();
  const showMobileNav = ref(false);
  const navbarMenuRef = ref(null);
  const navbarBurgerRef = ref(null);

  onClickOutside(navbarMenuRef, () => {
    showMobileNav.value = false;
  }, { ignore: [navbarBurgerRef] });

  const logout = () => {
    showMobileNav.value = false;
    storeAuth.logoutUser();
  }

  const onClickAutorization = () => {
    showMobileNav.value = false;
    if (storeAuth.user.id) alert('You are already logged in');
  }

  const onCLickToLink = () => {
    showMobileNav.value = false;
    if (!storeAuth.user.id) alert('Please login or register')
  }
</script>

<style>
.navbar-menu{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
}

a.navbar-item.is-active{
  background-color: #ffd970 !important;
}
a.navbar-item:hover{
  background-color: #ffd970 !important;
}
</style>