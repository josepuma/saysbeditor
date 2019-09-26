<template lang="pug">
  div
    h1 Retrieving your token and checking validity
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  async created() {
    // Extract all query parameter strings
    const search = this.$route.fullPath.replace('/connect/discord?', '')
    // Let the API retrieve the token for us and receive the auth JWT
    const response = await this.$axios.get(`/api/auth/discord/callback?${search}`)
    const auth = `Bearer ${response.data.jwt}`
    const user = response.data.user

    await this.$store.dispatch('setAuth', { auth, user })

    // Set cookies for further visits / reload
    Cookie.set('auth', auth, { expires: 30 })
    Cookie.set('user', user, { expires: 30 })

    this.$router.push('/')
  }
}
</script>