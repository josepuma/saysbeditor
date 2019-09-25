<template lang="pug">
  div(class=" uk-grid uk-grid-collapse" uk-height-viewport)
    div(class="side uk-width-2-3@l uk-width-1-1@s uk-flex" uk-height-match=".login")
    div(class="login uk-width-1-3@l u@k-width-1-1@s uk-padding")
      div(class="uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-width-1-1 uk-height-1-1")
        h1.uk-margin-small Better Name Pending
        h2 Create, Innovate & Share
        a(href="/api/connect/discord").uk-width-1-1
          button(type="button").uk-button.uk-button-primary.uk-width-1-1 Log in with Discord!
</template>

<script>
export default {
  middleware: 'notAuthenticated'
}
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.login {
  z-index: 1;
  background-color: $background-alt;
}

.side {
  background: url("~assets/Background.svg") transparent center center no-repeat;
  background-size: 150%;
}
</style>

