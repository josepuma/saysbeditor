<template lang="pug">
  div
    h1 Create a new project
    form(uk-grid).uk-grid-small

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
</template>

<script>
export default {
  middleware: 'authenticated',
  layout: 'authenticated',
  data() {
    return {
      project: {
        name: '',
        artist: '',
        title: '',
        tags: []
      }
    }
  }
}
</script>