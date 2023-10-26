<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active' : !register }">
          <a @click.prevent="register = false">Login</a>
        </li>
        <li :class="{ 'is-active' : register }">
          <a @click.prevent="register = true">Register</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>

        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                placeholder="e.g. alexsmith@gmail.com"
                type="email"
              >
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                placeholder="Enter a password"
                type="password"
              >
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button @click="storeAuth.loginUser(credentials)" class="button is-warning">
                {{ formTitle }}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { computed, ref, reactive } from 'vue';
  import { useStoreAuth } from '@/stores/storeAuth';

  const storeAuth = useStoreAuth();
  const register = ref(false);

  const formTitle = computed(() => register.value ? 'Register' : 'Login')

  const onSubmit = () => {
    if (!credentials.email || !credentials.password){
      alert('Please enter an email and password')
    } 
    else {
      if (register.value) {
        storeAuth.registerUser(credentials);
      } 
      else {
        storeAuth.logoutUser(credentials);
      }
    }
  }

  const credentials = reactive({
    email: '',
    password: ''
  })
</script>

<style>

.auth-form{
  max-width: 400px;
  margin: 0 auto;
}

</style>