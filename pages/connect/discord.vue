<template lang="pug">
  div
    h1 Retrieving your token and checking validity
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  async created() {
    const search = this.$route.fullPath.replace('/connect/discord?', '')
    const response = await this.$axios.get(`/api/auth/discord/callback?${search}`) // Let the API retrieve the token
    const auth = `Bearer ${response.data.jwt}`
    const user = response.data.user

    await this.$store.dispatch('setAuth', { auth, user })
    Cookie.set('auth', auth, { expires: 30 })
    Cookie.set('user', user, { expires: 30 })

    this.$router.push('/')
  }
}
</script>