<template lang="pug">
  ul.tags.uk-input.uk-flex.uk-flex-center.uk-flex-middle
    li(v-for="(tag, index) in tags" :key="tag" :class="{ 'uk-margin-small-left': index !== 0 }").tag.uk-flex.uk-flex-center.uk-flex-middle
      span {{ tag }}
        font-awesome-icon(@click="remove(tag)" prefix="far" icon="times").tag-remove.uk-margin-small-left
    li(:class="{ 'uk-margin-small-left': tags.length !== 0 }").uk-width-expand
      input(
        v-model="text"
        maxLength="25"
        placeholder="Add some sweet tags here"
        @keyup.enter="add"
      ).tag-input.uk-width-expand
</template>

<script>
export default {
  methods: {
    add() {
      this.text = this.text.trim()
      if (this.text && this.tags.findIndex((v) => v === this.text) === -1) {
        this.tags.push(this.text)
        this.text = ""
      }
    },
    remove(text) {
      const index = this.tags.findIndex((v) => v === text)
      if (index >= 0) {
        this.tags.splice(index, 1)
      }
    }
  },
  data() {
    return {
      text: '',
      tags: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

.tags {
  list-style: none;

  .tag {
    $local-tag-padding: 10px;
    border-radius: 3px;
    background-color: $primary;

    padding-left: $local-tag-padding;
    padding-right: $local-tag-padding;
    height: 60%;
    line-height: 10pt;  
    .tag-remove {
      cursor: pointer;
    }
  }

  .tag-input {
    border: none;
    background: transparent;
    height: 100%;

    color: $white;
    font-size: 14px;

    outline: none;
  }
}
</style>