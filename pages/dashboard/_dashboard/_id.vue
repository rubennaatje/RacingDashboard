<template>
  <div>
    <CommonRaceDashboard
      ref="dash"
      style="height: 100%"
      :edit="edit"
      :dashboard="dashboard"
      :tab="id"
    />
    <CommonTabForm
      :curr-index="tabIndex"
      :dialog="dialog"
      :dash-name="dashboard"
      @close="dialog = false"
    />
    <v-speed-dial
      v-model="fab"
      :bottom="true"
      :right="true"
      direction="top"
      transition="slide-y-reverse-transition"
    >
      <template #activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green" nuxt to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" nuxt @click="save">
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" @click="edit = !edit">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" @click="dialog = true">
        <v-icon>mdi-expand-all-outline</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="gray"
        href="http://www.github.com/rubennaatje/RacingDashboard"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data: () => ({
    fab: false,
    edit: false,
    dialog: false,
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    dashboard() {
      return this.$route.params.dashboard
    },
    tabIndex() {
      return Object.values(
        this.$store.state.dashboards.dashboards[this.dashboard].tabs
      ).length
    },
  },
  methods: {
    save() {
      this.$refs.dash.save()
    },
  },
}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
.v-speed-dial {
  position: absolute !important;
}

.v-btn--floating {
  position: relative;
}
</style>
