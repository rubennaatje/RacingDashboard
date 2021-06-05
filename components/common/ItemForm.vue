<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        bottom
        left
        v-bind="attrs"
        fab
        absolute
        class="v-btn--example"
        v-on="on"
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">New item</span>
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
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="form.youtube"
                label="youtube"
              ></v-text-field>
            </v-col>

            <!-- <v-col cols="12" sm="6">
              <v-select
                :items="['YouTube', 'image', 'normal iframe', 'text']"
                label="type"
                required
              ></v-select> 
            </v-col>  -->

            <v-col cols="12" sm="6">
              <v-select
                v-model="form.preset"
                :items="allPresets"
                label="Add preset component"
                item-text="name"
                return-object
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['currIndex'],
  data: () => ({
    dialog: false,
    form: {
      name: '',
      youtube: '',
      preset: null,
    },
  }),
  computed: {
    ...mapGetters({
      allPresets: 'presets/getAll',
    }),
  },
  methods: {
    save() {
      if (this.form.preset) {
        this.$emit('add', {
          x: 6 * this.currIndex,
          y: 6 * this.currIndex,
          w: 6,
          h: 6,
          i: `${this.currIndex}`,
          ...this.form.preset,
        })
      } else {
        this.$emit('add', {
          x: 6 * this.currIndex,
          y: 6 * this.currIndex,
          w: 6,
          h: 6,
          i: `${this.currIndex}`,
          name: this.form.name,
          component: 'CommonYoutubePlayer',
          props: {
            videoId: this.form.youtube,
          },
        })
      }
      this.form.name = ''
      this.form.preset = null
      this.form.youtube = ''
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
