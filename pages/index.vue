<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list dense>
      <v-subheader>dashboards</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in dashboards" :key="i">
          <nuxt-link :to="`/dashboard/${item.index}/xd`">
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    dashboards() {
      return this.$store.state.dashboards.dashboards
    },
  },
}
</script>
