<template lang="pug">
    div(class="uk-grid uk-grid-collapse uk-padding-large" uk-height-viewport)
        div(class="uk-container uk-width-2-3@l uk-grid")
            div(class="")
                h1 Welcome Back {{ this.$auth.user.username }}!
                h2.uk-margin-remove Your projects
                
        div(class="uk-container uk-width-1-3@l uk-padding-remove")
            .uk-card.uk-height-1-1
                .uk-card-header
                    h3.uk-card-title Recent Activity
                .uk-card-body
                    p Nice job 
</template>

<script>


export default {
    middleware: 'auth',
}
</script>
