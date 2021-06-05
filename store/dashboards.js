export const state = () => ({
  dashboards: {
    0: { index: 0, name: 'main', tabs: { xd: { name: 'xd', layout: [] } } },
    1: { index: 1, name: 'onboards', tabs: { xd: { name: 'xd', layout: [] } } },
  },
})

export const actions = {
  addDashboard(context, data) {
    context.commit('ADD_DASHBOARD', data)
  },
  saveLayout(context, data) {
    context.commit('SAVE_LAYOUT', data)
  },
  addTab(context, data) {
    context.commit('ADD_TAB', data)
  },
}

export const mutations = {
  ADD_DASHBOARD(state, data) {
    state.dashboards.push(data)
  },
  SAVE_LAYOUT(state, data) {
    state.dashboards[data.index].tabs[data.tab].layout = data.layout
  },
  ADD_TAB(state, data) {
    console.log(data)
    console.log(state)
    state.dashboards[data.dashName].tabs[data.tab] = {
      name: data.name,
      layout: [],
    }
  },
}

export const getters = {
  getAll: (state) => {
    return state.dashboards
  },
  getDashboardByName: (state) => (name) => {
    return state.dashboards.find((val) => val.name === name)
  },
}
