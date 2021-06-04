<template>
  <div>
    <CommonItemForm
      :curr-index="layout.length"
      v-if="edit"
      @add="layout.push($event)"
    />
    <grid-layout
      :layout="layout"
      :col-num="22"
      :row-height="22"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :static="!edit"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <CommonOutlinedContainer
          class="h-full w-full"
          :title="itemTitle(item)"
          :hide-outline="!edit"
        >
          <component
            :is="item.component"
            style="height: 100; width: 100%"
            v-bind="item.props"
          />
        </CommonOutlinedContainer>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  components: {
    GridLayout,
    GridItem,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['edit'],
  data() {
    return {
      editing: true,
      currentTabComponent: 'CommonOutlinedContainer',
      layout: [],
      draggable: true,
      resizable: true,
      index: 0,
    }
  },

  methods: {
    itemTitle(item) {
      return `${item.i} - ${item.name}`
    },
    save() {
      console.log('sabe')
      this.$store.dispatch('dashboards/saveLayout', {
        layout: this.layout,
        index: 0,
        tab: 'xd',
      })
    },
  },
}
</script>

<style scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
  /* border: 1px solid black; */
}

.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-layout {
  height: 100%;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
