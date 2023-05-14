<template>
    <div class="min-h-screen bg-gray-100 flex justify-center items-center">
      <div class="w-full max-w-md">
        <div class="bg-white shadow-lg rounded-lg px-8 py-10">
          <h2 class="text-2xl font-semibold mb-6">Login</h2>
          <form @submit.prevent="login">
            <div class="mb-4 text-left">
              <label class="block text-gray-700 font-semibold mb-2" for="email">
                Email
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Email" v-model="email" required>
            </div>
            <div class="mb-4 text-left">
              <label class="block text-gray-700 font-semibold mb-2" for="password">
                Password
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Password" v-model="password" required>
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { reactive } from 'vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Login',
    setup() {
      const state = reactive({
        email: '',
        password: ''
      });
  
      const login = () => {
        // Do something with email and password
      };
  
      return {
        email: state.email,
        password: state.password,
        login
      };
    }
  })
  </script>
  
  <style>
  /* Custom styles for login form */
  </style>