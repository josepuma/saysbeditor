<template lang="pug">
    img.avatar(:class="[size, status]" :data-src="url" uk-img)
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

    .avatar {
        $padding-size: 6px;
        $border-size: 4px;

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