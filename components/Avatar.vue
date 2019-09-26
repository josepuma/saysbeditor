<template lang="pug">
    img.avatar(v-if="url" :class="[size, status]" :data-src="url" uk-img)
    font-awesome-icon(v-else prefix="far" icon="question" :class="[size, status]").avatar
</template>

<script>
export default {
    props: {
        url: String,
        size: {
            type: String,
            default: "small"
        },
        status: {
            type: String,
            default: "offline"
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/styles/_variables.scss";

    $size-small: 60px;
    $size-medium: 120px;
    $size-big: 250px;

    svg.avatar {
        padding: 2em;
    }

    .avatar {
        $padding-size: 6px;
        $border-size: 4px;

        background-color: $foreground;

        padding: $padding-size;
        margin: $border-size;

        @mixin size($size) {
            height: $size;
            width: $size;
            border-radius: 50%;
        }

        @mixin status($color) {
            margin: 0;
            border: $border-size solid $color;
        }

        &.small {
            @include size($size-small);
        }

        &.medium {
            @include size($size-medium);
        }

        &.big {
            @include size($size-big);
        }

        &.online {
            @include status($success);
        }

        &.busy {
            @include status($error);
        }

        &.afk {
            @include status($warning);
        }

        &.offline {
            @include status($white-dimmed);
        }
    }
</style>