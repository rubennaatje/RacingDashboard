export const state = () => ({
  presets: [
    {
      name: 'timing screen',
      component: 'CommonIFrame',
      props: {
        style: 'background-color: white;',
        url: 'https://livetiming24.azurewebsites.net/events/50/results',
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
      name: 'Main stream',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'FVjTSBefDjU',
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
      name: 'onboard #1',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'xsF3QBpvIvE',
        muted: true,
      },
    },
    {
      name: 'onboard #22',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'ESvxRkJ9TqQ',
        muted: true,
      },
    },
    {
      name: 'onboard #33',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'sydhn5DZh4c',
        muted: true,
      },
    },
    {
      name: 'onboard #44',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'Leq41aBGhAE',
        muted: true,
      },
    },
    {
      name: 'onboard #831',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'nUWd6IIJ0F8',
        muted: true,
      },
    },
    {
      name: 'onboard #162',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'EmCbafg0tZE',
        muted: true,
      },
    },
    {
      name: 'onboard #160',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'IqruW4FW0rM',
        muted: true,
      },
    },
    {
      name: 'onboard #98',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'FoYaUBPYZow',
        muted: true,
      },
    },
    {
      name: 'onboard #72',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'cgs3tF-dN78',
        muted: true,
      },
    },
    {
      name: 'onboard #27',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'pPb7QaVWTrM',
        muted: true,
      },
    },
    {
      name: 'onboard #15',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'Sn00OFqkX8k',
        muted: true,
      },
    },
    {
      name: 'onboard #5',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'cemGzGeo4Hs',
        muted: true,
      },
    },
    {
      name: 'onboard #3',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'ZWvFkdjh_ko',
        muted: true,
      },
    },
    {
      name: 'onboard #12',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'eC2xP2B8Bn8',
        muted: true,
      },
    },
    {
      name: 'pitlane',
      component: 'CommonYoutubePlayer',
      props: {
        videoId: 'JaZBWqAmgfQ',
        muted: true,
      },
    },
    {
      name: 'main stream mirror',
      component: 'CommonIFrame',
      props: {
        url: `https://player.twitch.tv/?channel=el_bowgrease&parent=${window.location.origin}`,
      },
    },
    {
      name: 'N24 logo',
      component: 'img',
      props: {
        src: `https://www.24h-rennen.de/wp-content/themes/zvhnbr/assets/images/24h-logo_mono.png`,
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
