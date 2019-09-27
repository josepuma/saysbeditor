<template lang="pug">
  div(
    uk-height-viewport
    class="uk-flex uk-flex-column uk-flex-center uk-flex-middle"
    class="uk-width-1-1 uk-height-1-1"
    class="uk-padding-large"
  )
    h2.placeholder Retrieving your token and checking validity...
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

<style lang="scss" scoped>
.placeholder {
  word-break: normal;
}
</style>