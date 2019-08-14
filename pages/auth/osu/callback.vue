<template lang="pug">
    .uk-grid(uk-height-viewport="expand")
        div Wait please
</template>

<script>
export default {
    data: () => ({
        errored: false
    }),
    created: function () {
        if (this.$route.query.code) {
            this.errored = true
        }

        this.$axios.$post(
            `/auth/osu?code=${this.$route.query.code}`
        ).then(
            (response) => {
                this.$auth.setUserToken(
                    `Bearer ${response.access_token}`
                ).then(() => {
                    this.$router.push('/')
                })
            }
        ).catch(
            (error) => {
                this.errored = true
            }
        )
    }   
}
</script>