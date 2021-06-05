<template>
  <div>
    <CommonRaceDashboard
      ref="dash"
      style="height: 100%"
      :edit="edit"
      dashboard="0"
      tab="xd"
    />
    <CommonTabForm
      curr-index="3"
      :dialog="dialog"
      dash-name="0"
      @click="dialog = false"
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
      <v-btn fab dark small color="green" @click="dialog = true">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" nuxt @click="save">
        <v-icon>mdi-gear</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" @click="edit = !edit">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn fab dark small color="red">
        <v-icon>mdi-expand-all-outline</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="gray"
        href="http://www.github.com/rubennaatje"
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
  computed: {},
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
