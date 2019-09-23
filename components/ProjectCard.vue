<template lang="pug">
    div(:style="`background-image: url(${photoUrl});`").uk-card
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
        id: Number,
        photoUrl: {
            type: String,
            required: true
        },
        title: String,
        artist: String,
        updatedAt: String,
    },
    computed: {
        lastUpdatedDate: function () {
            return new Date(this.updatedAt).toLocaleString()
        }
    }
}
</script>
