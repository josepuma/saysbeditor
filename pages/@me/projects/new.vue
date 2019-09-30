<template lang="pug">
  div
    h1 Create a new project
    form(uk-grid @submit.prevent).uk-grid-small

      .uk-width-1-1
        label(for="form-project-name").uk-form-label Name
        .uk-form-controls
          input(
            name="form-project-name"
            type="text"
            placeholder="Something easy to remember"
            v-model="project.name"
          ).uk-input

      div(class="uk-width-1-2@m uk-width-1-1@s")
        label(for="form-project-song-title").uk-form-label Song title
        .uk-form-controls
          input(
            name="form-project-song-title"
            type="text"
            placeholder="Ra ri ru re ro"
            v-model="project.title"
          ).uk-input

      div(class="uk-width-1-2@m uk-width-1-1@s")
        label(for="form-project-name").uk-form-label Song artist
        .uk-form-controls
          input(
            name="form-project-song-artist"
            type="text"
            placeholder="John Doe"
            v-model="project.artist"
          ).uk-input

      .uk-width-1-1
        label(for="form-project-name").uk-form-label Tags
        .uk-form-controls
          tags(v-model="project.tags")
      
      .uk-width-1-1
        label(for="form-project-cover").uk-form-label Cover photo
        .uk-form-controls
          div(
            class="uk-input preview"
            class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"
            @click="$refs.file.click()"
            @drop.prevent="handleFileDrop"
            @dragover.prevent
            @dragenter.prevent
          )
            img(v-if="project.cover" :src="coverUrl")
            font-awesome-icon(v-else prefix="far" icon="file-image").icon
          input(
            type="file"
            name="form-project-cover"
            accept="image/x-png,image/jpeg,image/png"
            ref="file"
            @change="handleCoverChange"
          ).uk-hidden

      .uk-width-1-1.uk-flex.uk-flex-right
        button(type="button" @click="handleSubmit").uk-button.uk-button-secondary Submit?
      
</template>

<script>
import Tags from "~/components/Tags"

export default {
  components: {
    'tags': Tags
  },
  middleware: 'authenticated',
  layout: 'authenticated',
  data() {
    return {
      project: {
        name: '',
        artist: '',
        title: '',
        cover: null,
        tags: []
      }
    }
  },
  computed: {
    coverUrl: function() {
      return this.project.cover && URL.createObjectURL(this.project.cover) || ''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.project)
    },
    handleCoverChange(event) {
      if (event.target.files && event.target.files[0]) {
        this.project.cover = event.target.files[0]
      }
    },
    handleFileDrop(event) {
      const files = event.dataTransfer.files

      if (!files) {
        return
      }
      const cover = files[0]
      const accept = this.$refs.file.accept && this.$refs.file.accept.split(',')  || []

      if (!accept.includes(cover.type)) {
        return
      }

      this.project.cover = files[0]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_variables.scss";

$local-preview-size: 12.5em;

.preview {
  
  height: $local-preview-size;

  img {
    max-height: $local-preview-size;
    object-fit: contain;
  }

  .icon {
    height: $local-preview-size / 3;
    width: $local-preview-size / 3;
  }
}
</style>