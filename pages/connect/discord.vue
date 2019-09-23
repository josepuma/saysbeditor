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
    const token = `Bearer ${response.data.jwt}`

    this.$store.commit('setAuth', { token, user: response.data.user })
    Cookie.set('auth', token, { expires: 7 })
    Cookie.set('user', response.data.user, { expires: 7 })
  }
}
</script>