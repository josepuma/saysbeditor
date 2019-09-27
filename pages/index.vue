<template lang="pug">
    div(class="uk-grid uk-grid-collapse")
      div(class="uk-width-2-3@l")
        div.uk-width-1-1
          h1 Welcome Back {{ this.$store.state.user.username }}!
          h2 Your projects
          div(uk-grid)
            div(v-for="project in projects" class="uk-width-1-1@xs uk-width-1-2@s uk-width-1-3@m")
              project-card(
                :id="Number(project.id)"
                :title="project.title"
                :name="project.name"
                :artist="project.artist"
                :updated-at="project.updated_at"
                :photo-url="`/api${project.cover.url}`"
                :tags="project.tags"
                @click="handleCardClick"
                )
      div(class="uk-container uk-width-1-3@l uk-padding-remove")
        .uk-card.uk-height-1-1
          .uk-card-header
            h3.uk-card-title Recent Activity
          .uk-card-body
            p Nice job 
</template>

<script>
import ProjectCard from "~/components/ProjectCard";

export default {
  components: {
    "project-card": ProjectCard
  },
  layout: "authenticated",
  middleware: "authenticated",
  methods: {
    handleCardClick(evt, id) {
      this.$router.push(`/projects/${id}`);
    }
  },
  async asyncData(ctx) {
    const response = await ctx.$axios.post(`/api/graphql`, {
      query: `
        query {
          projects(limit: 10, where: { owner: { id: ${ctx.store.state.user.id} } }) {
            id
            name
            title
            artist
            updated_at
            cover {
              url
            }
            tags
          }
        }
      `
    });
    return { projects: response.data.data.projects };

    return { projects };
  }
};
</script>
