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
    const user = response.data.user

    this.$store.commit('setAuth', token, user)
    Cookie.set('auth', token, { expires: 7 })
    Cookie.set('user', user, { expires: 7 })

    this.$router.push('/')
  }
}
</script>