export const state = () => ({
  presets: [
    {
      name: 'timing screen',
      component: 'CommonIFrame',
      props: {
        style: 'background-color: white;',
        url: 'https://livetiming.azurewebsites.net/event=50?config=w3',
      },
    },
    {
      name: 'weather radar',
      component: 'CommonIFrame',
      props: {
        url: 'https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1',
      },
    },
    {
      name: 'main stream',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'MXlRJ0-ETyI',
        muted: false,
      },
    },
    {
      name: 'trackweather',
      component: 'CommonIFrame',
      props: {
        url: 'https://trackweather.live/',
      },
    },
    {
      name: 'onboard #6',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'YnBAkHpxPk4',
        muted: true,
      },
    },
    {
      name: 'onboard #7',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'Kch6NbE8L60',
        muted: true,
      },
    },
    {
      name: 'onboard #33',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'Ef52HmwTeUQ',
        muted: true,
      },
    },
    {
      name: 'onboard #44',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'f5SwyfqTUiM',
        muted: true,
      },
    },
    {
      name: 'onboard #2',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'Yn5Gyc5s7GE',
        muted: true,
      },
    },
    {
      name: 'onboard #15',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'ZhFk9VZT9_Q',
        muted: true,
      },
    },
    {
      name: 'onboard #31',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'hXLN3LEpLTw',
        muted: true,
      },
    },
    {
      name: 'onboard #911',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'BRYmUk8b0MU',
        muted: true,
      },
    },
    {
      name: 'onboard #1',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'GbZRNOkVeaQ',
        muted: true,
      },
    },
    {
      name: 'onboard #77',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'p5qKjfx3Coo',
        muted: true,
      },
    },
    {
      name: 'onboard #831',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: '9L6457LBcjM',
        muted: true,
      },
    },
    {
      name: 'onboard #101',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'dy1glQX50hA',
        muted: true,
      },
    },
    {
      name: 'onboard #110',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'k0kgvIjNgMc',
        muted: true,
      },
    },
    {
      name: 'onboard #5',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'VPjGOot_Mfc',
        muted: true,
      },
    },
    {
      name: 'pitlane',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'UHa-kz6AC9g',
        muted: true,
      },
    },
    {
      name: 'main stream mirror',
      component: 'CommonIFrame',
      props: {
        url: 'https://player.twitch.tv/?channel=el_bowgrease&parent=www.example.com',
      },
    },
  ],
})

export const getters = {
  getAll: (state) => {
    return state.presets
  },
  getDashboardByName: (state) => (name) => {
    return state.dashboards.find((val) => val.name === name)
  },
}
