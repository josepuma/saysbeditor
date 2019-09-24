<template lang="pug">
  div
    div THIS PAGE IS A STUB FOR DEV TESTING
    button(type="button" @click="handleDelete").uk-button.uk-button-danger DELETE
</template>

<script>
export default {
  middleware: 'authenticated',
  methods: {
    handleDelete() {
      const answer = confirm('Are you sure you want me to die? :(')
      if (answer === true) {
        this.$axios
          .delete(`/api/projects/${this.project.id}`)
          .then(() => {
            alert('It is done...')
          })
      }
    }
  },
  async asyncData(ctx) {
    const { id } = ctx.params
    const { data } = await ctx.$axios.get(`/api/projects/${id}`)

    return { project: data }
  }
}
</script>
