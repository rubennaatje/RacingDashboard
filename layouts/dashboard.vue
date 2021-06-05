<template>
  <v-app dark>
    <v-main>
      <v-toolbar height="35px" dark flat>
        <v-tabs center-active dark grow height="35px">
          <v-tab
            v-for="(item, index) in dashes[dashboard].tabs"
            :key="item.index"
            nuxt
            :to="`/dashboard/${dashboard}/${index}`"
            >{{ item.name }}</v-tab
          >
        </v-tabs>
      </v-toolbar>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      allDashboards: 'dashboards/getAll',
    }),
    dashboard() {
      return this.$route.params.dashboard
    },
    dashes() {
      return this.$store.state.dashboards.dashboards
    },
  },
}
</script>

<style scoped></style>
