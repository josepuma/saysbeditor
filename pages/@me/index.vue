<template lang="pug">
    .uk-grid
        div(class="profile uk-width-1-3@m uk-flex-center uk-flex-middle uk-flex-column uk-flex uk-margin-large-bottom")
            Avatar(:url="user_avatar_url" size="big" status="online")
            h2.uk-margin-small-top {{ this.$store.state.user.username }}
        div(class="projects uk-width-2-3@m")
            h1 Recent Projects
</template>

<script>
import Avatar from "~/components/Avatar"

export default {
    middleware: 'authenticated',
    layout: 'authenticated',
    computed: {
        user_avatar_url: function () {
            return this.$store.state.user.avatar_url
        }
    },
    components: {
        Avatar
    },
}
</script>


<style lang="scss">
@import "@/assets/styles/_variables.scss";

.profile {
    color: $white;
}
</style>