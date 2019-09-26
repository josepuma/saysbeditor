<template lang="pug">
  div(uk-grid)
    div(v-for="project in projects" class="uk-width-1-1@xs uk-width-1-2@s uk-width-1-3@m")
      project-card(
        :id="project.id"
        :title="project.title"
        :name="project.name"
        :artist="project.artist"
        :updated-at="project.updated_at"
        :photo-url="`/api${project.cover.url}`"
        :tags="project.tags"
        @click="handleCardClick"
      )
</template>

<script>
import ProjectCard from "~/components/ProjectCard";

export default {
  components: {
    "project-card": ProjectCard
  },
  middleware: "authenticated",
  layout: "authenticated",
  methods: {
    handleCardClick(evt, id) {
      this.$router.push(`/projects/${id}`);
    }
  },
  async asyncData(ctx) {
    const { data } = await ctx.$axios.get(`/api/projects`);

    return { projects: data };
  }
};
</script>
