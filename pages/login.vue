<template lang="pug">
    .uk-grid(uk-height-viewport="expand")
        .hero.uk-width-2-3
            // TODO: Add pretty svg
            | Pretty SVG Here
        .login.uk-width-1-3.uk-padding.uk-flex.uk-flex-column.uk-flex-center
            .uk-section
                h1.uk-margin-small Better Name Pending
                h2.uk-margin-remove Create, Innovate & Share
            .uk-section.uk-flex.uk-flex-column
                span.uk-margin-small-bottom.uk-text-right Are you new around here? 
                    a.uk-link sign up
                input.secondary(type="text" placeholder="Username")
                input.uk-margin-top.secondary(type="text" placeholder="Password")
                button.uk-button.uk-button-secondary.uk-width-1-4.uk-margin-small-top Log in
                span.uk-margin-small-top.uk-text-right.uk-text-small Forgot password?

</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.login {
    background-color: $background-alt;
}
</style>

