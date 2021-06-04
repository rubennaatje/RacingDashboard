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
        videoId: '0gtNvIPE4Dc',
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
        videoId: 'VoFjIejgD_I',
      },
    },
    {
      name: 'onboard #7',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'z5of2dqS_nU',
      },
    },
    {
      name: 'onboard #33',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'iKQXe52Bs4E',
      },
    },
    {
      name: 'onboard #44',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'DQTfZ6CEOEg',
      },
    },
    {
      name: 'onboard #2',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'Yn5Gyc5s7GE',
      },
    },
    {
      name: 'onboard #15',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: '3CDxxy4nSm4',
      },
    },
    {
      name: 'onboard #31',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'dUJvukXh0zM',
      },
    },
    {
      name: 'onboard #911',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'CzI7lJFfGhQ',
      },
    },
    {
      name: 'onboard #1',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'GbZRNOkVeaQ',
      },
    },
    {
      name: 'onboard #77',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'p5qKjfx3Coo',
      },
    },
    {
      name: 'onboard #831',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: '9L6457LBcjM',
      },
    },
    {
      name: 'onboard #101',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'jYkS_ehhNw4',
      },
    },
    {
      name: 'onboard #110',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'yNAZQGHsaJ4',
      },
    },
    {
      name: 'onboard #5',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'VPjGOot_Mfc',
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
