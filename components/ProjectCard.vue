<template lang="pug">
    div
        div(@click="$emit('click', $event, id)"  :style="`--photo_url: url('${photoUrl}');`").project-card.uk-card.uk-flex.uk-flex-bottom
            div.project-card-bottom.uk-card-footer.uk-flex.uk-flex-row.uk-flex-top.uk-padding-small.uk-flex-around.uk-width-1-1
                div.uk-flex.uk-flex-column
                    b {{ title }}
                    span {{ artist }}
                div.uk-flex.uk-flex-column
                    span Last updated
                    span {{ _updatedAt }}
        div.tags.uk-flex.uk-flex-row.uk-padding-small
            a(v-for="tag in _tags" :key="tag" href="#") {{ `#${tag}` }}

                
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        photoUrl: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        updatedAt: {
            type: String,
            required: true
        },
        tags: {
            type: String,
            required: false
        }
    },
    computed: {
        _updatedAt: function () {
            return new Date(this.updatedAt).toLocaleDateString()
        },
        _tags: function() {
            return this.tags !== undefined ? this.tags.split(',') : []
        }
    }
}
</script>

<style lang="scss" scoped>
.project-card {
    $slide-color: transparentize($color: black, $amount: 0.5);

    height: 200px;

    overflow: hidden; /** Preserves parent border-radius (if any) */

    background-image: var(--photo_url);
    background-size: cover;
    background-position: center;

    &:hover {
        cursor: pointer;
    }

    .project-card-bottom {
        background: $slide-color;
    }
}

.tags {
    max-width: 100%;
    overflow-x: hidden;

    a {
        font-size: .85em;
        color: white;
        white-space: nowrap;
        padding-right: .5em;
    }
}
</style>    
