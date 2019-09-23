<template lang="pug">
    div(class="uk-grid uk-grid-collapse uk-padding-large" uk-height-viewport)
        div(class="uk-container uk-width-2-3@l")
            div.uk-width-1-1
                h1 Welcome Back {{ this.$store.state.user.username }}!
                h2 Your projects
                div(class="uk-grid uk-child-width-expand@s uk-text-center")
                    div(v-for="project in projects")
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
        div(class="uk-container uk-width-1-3@l uk-padding-remove")
            .uk-card.uk-height-1-1
                .uk-card-header
                    h3.uk-card-title Recent Activity
                .uk-card-body
                    p Nice job 
</template>

<script>
import ProjectCard from '~/components/ProjectCard'

export default {
    components: {
        'project-card': ProjectCard
    },
    middleware: 'authenticated',
    methods: {
        handleCardClick(evt, id) {
            this.$router.push(`/projects/${id}`)
        }
    },
    async asyncData(context) {
        const projects = await context.$axios
            .get('/api/projects')
            .then(({ data }) => data)
        
        return { projects }
    }
}
</script>
