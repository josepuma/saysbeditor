<template lang="pug">
    div(class="uk-grid")
      div(class="uk-width-2-3@l")#projects
        div.uk-width-1-1
          h1 Welcome Back {{ this.$store.state.user.username }}!
          h2 Your latest projects
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
          nuxt-link(
            to="/@me/projects"
            class="uk-button uk-button-secondary uk-button-hollow"
            class="uk-align-center"
          ) More
      div(class="uk-width-1-3@l")
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
      this.$router.push(`@me/projects/${id}`);
    }
  },
  async asyncData(ctx) {
    const response = await ctx.$axios.post(`/api/graphql`, {
      query: `
        query {
          projects(sort: "updated_at:desc", limit: 6, where: { owner: { id: ${ctx.store.state.user.id} } }) {
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
