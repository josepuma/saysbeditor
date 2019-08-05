<template lang="pug">
    .uk-grid(uk-height-viewport="expand")
        .side.uk-width-2-3
            img.logo(src="@/assets/Background.svg" uk-svg)
        .login.uk-width-1-3.uk-padding.uk-flex.uk-flex-column.uk-flex-center
            .uk-section.headers
                h1.uk-margin-small Better Name Pending
                h2.uk-margin-remove Create, Innovate & Share
            .uk-section.uk-flex.uk-flex-column
                span.uk-margin-small-bottom.uk-text-right Are you new around here? 
                    a.uk-link sign up
                input.secondary(type="text" placeholder="Username")
                input.uk-margin-top.secondary(type="text" placeholder="Password")
                div.uk-width-1-1.uk-margin-small-top
                    button.uk-button.uk-button-secondary.uk-width-1-4.uk-align-right.uk-margin-remove Log in
                span.uk-margin-small-top.uk-text-right.uk-text-small Forgot password?

</template>

<script>
export default {
    
}
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

