<template lang="pug">
  .uk-grid(uk-height-viewport="expand")
    .side.uk-width-2-3
      img.logo(src="@/assets/Background.svg" uk-svg)
    .login.uk-width-1-3.uk-padding.uk-flex.uk-flex-column.uk-flex-center
      .uk-section.headers
        h1.uk-margin-small Better Name Pending
        h2.uk-margin-remove Create, Innovate & Share
        button(type="button" v-on:click="handleOsuLogin").uk-button.uk-button-primary.uk-width-1-1.uk-margin-medium Log in with Osu!
</template>

<script>
export default {
  methods: {
    handleOsuLogin: function () {
      this.$auth.loginWith('osu')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.login {
  z-index: 1;
  background-color: $background-alt;
}

.headers {
  > * {
    font-weight: bold;
  }
}

.side {
  overflow: hidden;
  max-height: 100vh;
  .logo {
    min-width: 100%;
    transform: scale(1.5);
  }
}
</style>

