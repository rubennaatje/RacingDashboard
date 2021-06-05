<template>
  <v-dialog :value="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">New tab</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="form.name"
                label="name*"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['currIndex', 'dialog', 'dashName'],
  data: () => ({
    form: {
      name: '',
    },
  }),
  methods: {
    save() {
      this.$store.dispatch('dashboards/addTab', {
        tab: this.currIndex,
        dashName: this.dashName,
        name: this.form.name,
      })
      this.form.name = ''
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 40px 20px;
}
</style>
