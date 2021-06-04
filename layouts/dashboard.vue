<template>
  <v-app dark>
    <v-main>
      <v-toolbar dark flat>
        <v-tabs background-color="deep-purple accent-4" center-active dark grow>
          <v-tab
            v-for="(item, index) in allDashboards"
            :key="item.index"
            nuxt
            :to="`/dashboard/test/${index}`"
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
  },
}
</script>

<style scoped></style>
