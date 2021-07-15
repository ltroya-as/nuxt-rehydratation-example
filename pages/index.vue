<template>
  <div class="p-10">
    <p>Please click log in and reload the page to see the problem</p>
    <button class="mb-10 px-4 py-2 bg-green-500" @click="login">Log in</button>

    <div v-if="!authenticated" class="text-2xl">No authenticated content</div>

    <div v-if="authenticated" class="text-2xl">Authenticated content</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false,
    }
  },

  mounted() {
    this.authenticated = !!this.$cookies.get('LOGIN_COOKIE')
  },

  methods: {
    login() {
      const duration = 60 * 60 * 24 * 365
      this.$cookies.set('LOGIN_COOKIE', 'COOKIE_CONTENT', {
        maxAge: duration,
        path: '/',
      })
    },
  },
}
</script>
