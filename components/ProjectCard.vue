<template lang="pug">
    div.uk-card
        div.uk-card-footer.uk-flex.uk-flex-row
            div.uk-flex.uk-flex-column
                h3 {{ title }}
                span {{ artist }}
            div.uk-flex.uk-flex-column
                span Last updated
                span {{ lastUpdatedDate }}
                
</template>

<script>
export default {
    props: {
        id: String,
        photo_url: {
            type: String,
            required: true
        },
        title: String,
        artist: String,
        last_updated: Number,
    },
    computed: {
        lastUpdatedDate: function () {
            return new Date(this.lastUpdated).toLocaleString()
        }
    }
}
</script>
