export default {
  dashboards: {
    0: {
      index: 0,
      name: 'Nurburgring 24 - 21:9 1440x3440',
      tabs: {
        1: {
          name: 'onboards',
          layout: [
            {
              x: 0,
              y: 0,
              w: 10,
              h: 10,
              i: '0',
              name: 'onboard #6',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'YnBAkHpxPk4', muted: true },
              moved: false,
            },
            {
              x: 8,
              y: 20,
              w: 8,
              h: 8,
              i: '1',
              name: 'onboard #7',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'Kch6NbE8L60', muted: true },
              moved: false,
            },
            {
              x: 10,
              y: 0,
              w: 10,
              h: 10,
              i: '2',
              name: 'onboard #33',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'Ef52HmwTeUQ', muted: true },
              moved: false,
            },
            {
              x: 10,
              y: 10,
              w: 10,
              h: 10,
              i: '3',
              name: 'onboard #44',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'f5SwyfqTUiM', muted: true },
              moved: false,
            },
            {
              x: 20,
              y: 0,
              w: 10,
              h: 10,
              i: '4',
              name: 'onboard #2',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'Yn5Gyc5s7GE', muted: true },
              moved: false,
            },
            {
              x: 30,
              y: 10,
              w: 10,
              h: 10,
              i: '6',
              name: 'onboard #31',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'hXLN3LEpLTw', muted: true },
              moved: false,
            },
            {
              x: 24,
              y: 20,
              w: 8,
              h: 8,
              i: '7',
              name: 'onboard #911',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'BRYmUk8b0MU', muted: true },
              moved: false,
            },
            {
              x: 32,
              y: 20,
              w: 8,
              h: 8,
              i: '8',
              name: 'onboard #1',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'GbZRNOkVeaQ', muted: true },
              moved: false,
            },
            {
              x: 20,
              y: 10,
              w: 10,
              h: 10,
              i: '10',
              name: 'onboard #831',
              component: 'CommonYoutubePlayer',
              props: { videoId: '9L6457LBcjM', muted: true },
              moved: false,
            },
            {
              x: 16,
              y: 20,
              w: 8,
              h: 8,
              i: '11',
              name: 'onboard #101',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'dy1glQX50hA', muted: true },
              moved: false,
            },
            {
              x: 0,
              y: 20,
              w: 8,
              h: 8,
              i: '12',
              name: 'onboard #110',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'k0kgvIjNgMc', muted: true },
              moved: false,
            },
            {
              x: 0,
              y: 10,
              w: 10,
              h: 10,
              i: '14',
              name: 'pitlane',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'UHa-kz6AC9g', muted: true },
              moved: false,
            },
            {
              x: 30,
              y: 0,
              w: 10,
              h: 10,
              i: '13',
              name: 'onboard #5',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'VPjGOot_Mfc', muted: true },
              moved: false,
            },
          ],
        },
        2: {
          name: 'weather',
          layout: [
            {
              x: 0,
              y: 0,
              w: 40,
              h: 28,
              i: '0',
              name: 'weather radar',
              component: 'CommonIFrame',
              props: {
                url: 'https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1',
              },
              moved: false,
            },
          ],
        },
        3: {
          name: 'timing',
          layout: [
            {
              x: 0,
              y: 0,
              w: 28,
              h: 28,
              i: '0',
              name: 'timing screen',
              component: 'CommonIFrame',
              props: {
                style: 'background-color: white;',
                url: 'https://livetiming.azurewebsites.net/event=50?config=w3',
              },
              moved: false,
            },
            {
              x: 28,
              y: 0,
              w: 12,
              h: 12,
              i: '1',
              name: 'main stream mirror',
              component: 'CommonIFrame',
              props: {
                url: 'https://player.twitch.tv/?channel=el_bowgrease&parent=http://localhost:3000',
              },
              moved: false,
            },
            {
              x: 28,
              y: 12,
              w: 12,
              h: 12,
              i: '2',
              name: 'pitlane',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'UHa-kz6AC9g', muted: true },
              moved: false,
            },
          ],
        },
        main: {
          name: 'main',
          layout: [
            {
              x: 0,
              y: 0,
              w: 21,
              h: 21,
              i: '0',
              name: 'main stream mirror',
              component: 'CommonIFrame',
              props: {
                url: 'https://player.twitch.tv/?channel=el_bowgrease&parent=http://localhost:3000',
              },
              moved: false,
            },
            {
              x: 32,
              y: 0,
              w: 1,
              h: 1,
              i: '1',
              name: 'N24 logo',
              component: 'img',
              props: {
                src: 'https://www.24h-rennen.de/wp-content/themes/zvhnbr/assets/images/24h-logo_mono.png',
              },
              moved: false,
            },
            {
              x: 21,
              y: 17,
              w: 10,
              h: 11,
              i: '2',
              name: 'pitlane',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'UHa-kz6AC9g', muted: true },
              moved: false,
            },
            {
              x: 21,
              y: 0,
              w: 11,
              h: 17,
              i: '3',
              name: 'timing screen',
              component: 'CommonIFrame',
              props: {
                style: 'background-color: white;',
                url: 'https://livetiming.azurewebsites.net/event=50?config=w3',
              },
              moved: false,
            },
            {
              x: 31,
              y: 17,
              w: 9,
              h: 11,
              i: '4',
              name: 'onboard #1',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'GbZRNOkVeaQ', muted: true },
              moved: false,
            },
            {
              x: 0,
              y: 21,
              w: 21,
              h: 7,
              i: '5',
              name: 'weather radar',
              component: 'CommonIFrame',
              props: {
                url: 'https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1',
              },
              moved: false,
            },
            {
              x: 32,
              y: 1,
              w: 8,
              h: 8,
              i: '6',
              name: 'onboard #31',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'hXLN3LEpLTw', muted: true },
              moved: false,
            },
            {
              x: 32,
              y: 9,
              w: 8,
              h: 8,
              i: '7',
              name: 'onboard #831',
              component: 'CommonYoutubePlayer',
              props: { videoId: '9L6457LBcjM', muted: true },
              moved: false,
            },
          ],
        },
      },
    },
    1: {
      index: 1,
      name: 'nurburging 24 - 16:9 1080x1920',
      tabs: {
        2: {
          name: 'WEATHER',
          layout: [
            {
              x: 0,
              y: 0,
              w: 24,
              h: 12,
              i: '0',
              name: 'weather radar',
              component: 'CommonIFrame',
              props: {
                url: 'https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1',
              },
              moved: false,
            },
          ],
        },
        3: {
          name: 'TIMING',
          layout: [
            {
              x: 0,
              y: 0,
              w: 25,
              h: 21,
              i: '0',
              name: 'timing screen',
              component: 'CommonIFrame',
              props: {
                style: 'background-color: white;',
                url: 'https://livetiming.azurewebsites.net/event=50?config=w3',
              },
              moved: false,
            },
            {
              x: 25,
              y: 0,
              w: 15,
              h: 8,
              i: '1',
              name: 'pitlane',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'UHa-kz6AC9g', muted: true },
              moved: false,
            },
            {
              x: 25,
              y: 8,
              w: 15,
              h: 7,
              i: '2',
              name: 'main stream',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'MXlRJ0-ETyI', muted: false },
              moved: false,
            },
          ],
        },
        main: {
          name: 'main',
          layout: [
            {
              x: 0,
              y: 0,
              w: 25,
              h: 16,
              i: '0',
              name: 'main stream',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'MXlRJ0-ETyI', muted: false },
              moved: false,
            },
            {
              x: 0,
              y: 16,
              w: 16,
              h: 5,
              i: '1',
              name: 'weather radar',
              component: 'CommonIFrame',
              props: {
                url: 'https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1',
              },
              moved: false,
            },
            {
              x: 32,
              y: 0,
              w: 8,
              h: 4,
              i: '2',
              name: 'onboard #1',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'GbZRNOkVeaQ', muted: true },
              moved: false,
            },
            {
              x: 16,
              y: 16,
              w: 9,
              h: 5,
              i: '3',
              name: 'onboard #831',
              component: 'CommonYoutubePlayer',
              props: { videoId: '9L6457LBcjM', muted: true },
              moved: false,
            },
            {
              x: 25,
              y: 0,
              w: 7,
              h: 4,
              i: '4',
              name: 'onboard #110',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'k0kgvIjNgMc', muted: true },
              moved: false,
            },
            {
              x: 25,
              y: 4,
              w: 15,
              h: 8,
              i: '5',
              name: 'pitlane',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'UHa-kz6AC9g', muted: true },
              moved: false,
            },
            {
              x: 25,
              y: 12,
              w: 15,
              h: 9,
              i: '6',
              name: 'timing screen',
              component: 'CommonIFrame',
              props: {
                style: 'background-color: white;',
                url: 'https://livetiming.azurewebsites.net/event=50?config=w3',
              },
              moved: false,
            },
          ],
        },
        onboards: {
          name: 'All onboards',
          layout: [
            {
              x: 0,
              y: 6,
              w: 8,
              h: 5,
              i: '0',
              name: 'onboard #6',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'YnBAkHpxPk4', muted: true },
              moved: false,
            },
            {
              x: 8,
              y: 6,
              w: 8,
              h: 5,
              i: '1',
              name: 'onboard #7',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'Kch6NbE8L60', muted: true },
              moved: false,
            },
            {
              x: 10,
              y: 0,
              w: 10,
              h: 6,
              i: '2',
              name: 'onboard #33',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'Ef52HmwTeUQ', muted: true },
              moved: false,
            },
            {
              x: 30,
              y: 0,
              w: 10,
              h: 6,
              i: '3',
              name: 'onboard #44',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'f5SwyfqTUiM', muted: true },
              moved: false,
            },
            {
              x: 20,
              y: 0,
              w: 10,
              h: 6,
              i: '4',
              name: 'onboard #2',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'Yn5Gyc5s7GE', muted: true },
              moved: false,
            },
            {
              x: 0,
              y: 11,
              w: 11,
              h: 6,
              i: '6',
              name: 'onboard #31',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'hXLN3LEpLTw', muted: true },
              moved: false,
            },
            {
              x: 0,
              y: 0,
              w: 10,
              h: 6,
              i: '7',
              name: 'onboard #911',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'BRYmUk8b0MU', muted: true },
              moved: false,
            },
            {
              x: 24,
              y: 6,
              w: 8,
              h: 5,
              i: '8',
              name: 'onboard #1',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'GbZRNOkVeaQ', muted: true },
              moved: false,
            },
            {
              x: 11,
              y: 11,
              w: 11,
              h: 6,
              i: '9',
              name: 'onboard #77',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'p5qKjfx3Coo', muted: true },
              moved: false,
            },
            {
              x: 32,
              y: 11,
              w: 8,
              h: 6,
              i: '10',
              name: 'onboard #831',
              component: 'CommonYoutubePlayer',
              props: { videoId: '9L6457LBcjM', muted: true },
              moved: false,
            },
            {
              x: 32,
              y: 6,
              w: 8,
              h: 5,
              i: '11',
              name: 'onboard #101',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'dy1glQX50hA', muted: true },
              moved: false,
            },
            {
              x: 16,
              y: 6,
              w: 8,
              h: 5,
              i: '12',
              name: 'onboard #110',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'k0kgvIjNgMc', muted: true },
              moved: false,
            },
            {
              x: 22,
              y: 11,
              w: 10,
              h: 6,
              i: '13',
              name: 'onboard #5',
              component: 'CommonYoutubePlayer',
              props: { videoId: 'VPjGOot_Mfc', muted: true },
              moved: false,
            },
          ],
        },
      },
    },
  },
}
