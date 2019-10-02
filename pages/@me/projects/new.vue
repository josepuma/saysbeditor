<template lang="pug">
  div
    h1 Create a new project
    form(uk-grid @submit.prevent="handleSubmit").uk-grid-small

      .uk-width-1-1
        label(for="name").uk-form-label Name
        .uk-form-controls
          input(
            name="name"
            type="text"
            placeholder="Something easy to remember"
            :class="{ 'uk-form-danger': errors.includes('name') }"
            v-model="project.name"
          ).uk-input

      div(class="uk-width-1-2@m uk-width-1-1@s")
        label(for="title").uk-form-label Song title
        .uk-form-controls
          input(
            name="title"
            type="text"
            placeholder="Ra ri ru re ro"
            :class="{ 'uk-form-danger': errors.includes('title') }"
            v-model="project.title"
          ).uk-input

      div(class="uk-width-1-2@m uk-width-1-1@s")
        label(for="name").uk-form-label Song artist
        .uk-form-controls
          input(
            name="artist"
            type="text"
            placeholder="John Doe"
            :class="{ 'uk-form-danger': errors.includes('artist') }"
            v-model="project.artist"
          ).uk-input

      .uk-width-1-1
        label(for="tags").uk-form-label Tags
        .uk-form-controls
          input(name="tags" :value="formTags").uk-hidden
          tags(v-model="project.tags")
      
      .uk-width-1-1
        label(for="cover").uk-form-label Cover photo
        .uk-form-controls
          div(
            class="uk-input preview"
            class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle"
            :class="{ 'uk-form-danger': errors.includes('cover') }"
            @click="$refs.file.click()"
            @drop.prevent="handleFileDrop"
            @dragover.prevent
            @dragenter.prevent
          )
            img(v-if="project.cover" :src="coverUrl")
            font-awesome-icon(v-else prefix="far" icon="file-image").icon
          input(
            type="file"
            name="cover"
            accept="image/x-png,image/jpeg,image/png"
            ref="file"
            @change="handleCoverChange"
          ).uk-hidden

      .uk-width-1-1.uk-flex.uk-flex-right
        button(type="submit").uk-button.uk-button-secondary Start
      
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
      },
      errors: []
    }
  },
  computed: {
    coverUrl: function() {
      return this.project.cover && URL.createObjectURL(this.project.cover) || ''
    },
    formTags: function() {
      return this.project.tags.join(',')
    }
  },
  methods: {
    handleSubmit() {
      if (this.validateForm() === true) {
        const formData = new FormData()

        formData.append('data', JSON.stringify({
          name: this.project.name,
          artist: this.project.artist,
          title: this.project.title,
          tags: this.formTags
        }))

        formData.append('files.cover', this.project.cover, this.project.cover.name)

        this.$axios
          .post('/api/projects', formData)
          .then(() => {
            this.$router.push("/") // -> TODO: PUSH TO THE EDITOR
          })
          .catch((error) => {
            alert('error') // -> TODO: INFORM ABOUT THE ERROR IN A MORE ELEGANT WAY
          })
      }
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
    },
    validateForm() {
      this.errors = []
      const { name, artist, title, cover } = this.project
      
      if (!name) {
        this.errors.push('name')
      }
      
      if (!artist) {
        this.errors.push('artist')
      }

      if (!title) {
        this.errors.push('title')
      }

      if (!cover) {
        this.errors.push('cover')
      }

      return this.errors.length === 0
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