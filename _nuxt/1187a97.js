(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(o,e,n){"use strict";var t=n(0),r=n(233),m=n.n(r);t.default.use(m.a)},163:function(o,e,n){"use strict";var t=n(0),r=n(376),m=n(377),d=n(378);t.default.component("LMap",r.a),t.default.component("LTileLayer",m.a),t.default.component("LMarker",d.a)},164:function(o,e,n){"use strict";var t=n(234);e.a=function(o){var e=o.store;new t.a({storage:window.localStorage,reducer:function(o){return{dashboards:o.dashboards}}}).plugin(e)}},165:function(o,e,n){"use strict";var t=n(0),r=n(358);t.default.use(r)},214:function(o,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(22).default)("158bc806",content,!0,{sourceMap:!1})},236:function(o,e,n){"use strict";n(7),n(5),n(8),n(13),n(6),n(14);var t=n(1),r=n(79);function m(object,o){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(object,o).enumerable}))),e.push.apply(e,n)}return e}function d(o){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(t.a)(o,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(source,e))}))}return o}var c={computed:d(d({},Object(r.b)({allDashboards:"dashboards/getAll"})),{},{dashboard:function(){return this.$route.params.dashboard},dashes:function(){return this.$store.state.dashboards.dashboards[this.dashboard].tabs}})},l=n(65),v=n(82),h=n.n(v),f=n(385),y=n(386),w=n(387),I=n(388),C=n(389),component=Object(l.a)(c,(function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-main",[n("v-toolbar",{attrs:{height:"35px",dark:"",flat:""}},[n("v-tabs",{attrs:{"center-active":"",dark:"",grow:"",height:"35px"}},o._l(o.dashes,(function(e,t){return n("v-tab",{key:e.index,attrs:{nuxt:"",to:"/dashboard/"+o.dashboard+"/"+t}},[o._v(o._s(e.name))])})),1)],1),o._v(" "),n("nuxt")],1)],1)}),[],!1,null,"486ef307",null);e.a=component.exports;h()(component,{VApp:f.a,VMain:y.a,VTab:w.a,VTabs:I.a,VToolbar:C.a})},237:function(o,e,n){"use strict";var t={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},r=n(65),m=n(82),d=n.n(m),c=n(385),l=n(390),v=n(386),component=Object(r.a)(t,(function(){var o=this.$createElement,e=this._self._c||o;return e("v-app",{attrs:{dark:""}},[e("v-main",[e("v-container",[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:c.a,VContainer:l.a,VMain:v.a})},249:function(o,e,n){n(250),o.exports=n(251)},275:function(o,e,n){"use strict";n(214)},276:function(o,e,n){var t=n(21)(!1);t.push([o.i,"h1[data-v-033921d2]{font-size:20px}",""]),o.exports=t},326:function(o,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return t})),n.d(e,"getters",(function(){return r}));n(75),n(18);var t=function(){return{presets:[{name:"timing screen",component:"CommonIFrame",props:{style:"background-color: white;",url:"https://livetiming24.azurewebsites.net/events/50/results"}},{name:"weather radar",component:"CommonIFrame",props:{url:"https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1"}},{name:"Main stream",component:"CommonYoutubePlayer",props:{videoId:"FVjTSBefDjU",muted:!1}},{name:"trackweather",component:"CommonIFrame",props:{url:"https://trackweather.live/"}},{name:"onboard #1",component:"CommonYoutubePlayer",props:{videoId:"xsF3QBpvIvE",muted:!0}},{name:"onboard #22",component:"CommonYoutubePlayer",props:{videoId:"ESvxRkJ9TqQ",muted:!0}},{name:"onboard #33",component:"CommonYoutubePlayer",props:{videoId:"sydhn5DZh4c",muted:!0}},{name:"onboard #44",component:"CommonYoutubePlayer",props:{videoId:"Leq41aBGhAE",muted:!0}},{name:"onboard #831",component:"CommonYoutubePlayer",props:{videoId:"nUWd6IIJ0F8",muted:!0}},{name:"onboard #162",component:"CommonYoutubePlayer",props:{videoId:"EmCbafg0tZE",muted:!0}},{name:"onboard #160",component:"CommonYoutubePlayer",props:{videoId:"IqruW4FW0rM",muted:!0}},{name:"onboard #98",component:"CommonYoutubePlayer",props:{videoId:"FoYaUBPYZow",muted:!0}},{name:"onboard #72",component:"CommonYoutubePlayer",props:{videoId:"cgs3tF-dN78",muted:!0}},{name:"onboard #27",component:"CommonYoutubePlayer",props:{videoId:"pPb7QaVWTrM",muted:!0}},{name:"onboard #15",component:"CommonYoutubePlayer",props:{videoId:"Sn00OFqkX8k",muted:!0}},{name:"onboard #5",component:"CommonYoutubePlayer",props:{videoId:"cemGzGeo4Hs",muted:!0}},{name:"onboard #3",component:"CommonYoutubePlayer",props:{videoId:"ZWvFkdjh_ko",muted:!0}},{name:"onboard #12",component:"CommonYoutubePlayer",props:{videoId:"eC2xP2B8Bn8",muted:!0}},{name:"pitlane",component:"CommonYoutubePlayer",props:{videoId:"JaZBWqAmgfQ",muted:!0}},{name:"main stream mirror",component:"CommonIFrame",props:{url:"https://player.twitch.tv/?channel=el_bowgrease&parent=".concat(window.location.origin)}},{name:"N24 logo",component:"img",props:{src:"https://www.24h-rennen.de/wp-content/themes/zvhnbr/assets/images/24h-logo_mono.png"}}]}},r={getAll:function(o){return o.presets},getDashboardByName:function(o){return function(e){return o.dashboards.find((function(o){return o.name===e}))}}}},361:function(o,e){},375:function(o,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"actions",(function(){return m})),n.d(e,"mutations",(function(){return d})),n.d(e,"getters",(function(){return c}));n(18),n(75);var t={dashboards:{0:{index:0,name:"Nurburgring 24 - 21:9 1440x3440",tabs:{1:{name:"onboards",layout:[]},2:{name:"weather",layout:[{x:0,y:0,w:40,h:28,i:"0",name:"weather radar",component:"CommonIFrame",props:{url:"https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1"},moved:!1}]},3:{name:"timing",layout:[{x:0,y:0,w:16,h:16,i:"0",name:"timing screen",component:"CommonIFrame",props:{style:"background-color: white;",url:"https://livetiming24.azurewebsites.net/events/50/results"},moved:!1},{x:16,y:0,w:16,h:12,i:"1",name:"Main stream",component:"CommonYoutubePlayer",props:{videoId:"FVjTSBefDjU",muted:!1},moved:!1},{x:16,y:12,w:5,h:4,i:"2",name:"pitlane",component:"CommonYoutubePlayer",props:{videoId:"JaZBWqAmgfQ",muted:!0},moved:!1},{x:21,y:12,w:5,h:4,i:"3",name:"onboard #1",component:"CommonYoutubePlayer",props:{videoId:"xsF3QBpvIvE",muted:!0},moved:!1},{x:26,y:12,w:6,h:4,i:"4",name:"onboard #44",component:"CommonYoutubePlayer",props:{videoId:"Leq41aBGhAE",muted:!0},moved:!1}]},main:{name:"main",layout:[{x:0,y:0,w:9,h:6,i:"xsF3QBpvIvE",name:"onboard #1",component:"CommonYoutubePlayer",props:{videoId:"xsF3QBpvIvE",muted:!0},moved:!1},{x:27,y:8,w:5,h:4,i:"FoYaUBPYZow",name:"onboard #98",component:"CommonYoutubePlayer",props:{videoId:"FoYaUBPYZow",muted:!0},moved:!1},{x:27,y:12,w:5,h:3,i:"ESvxRkJ9TqQ",name:"onboard #22",component:"CommonYoutubePlayer",props:{videoId:"ESvxRkJ9TqQ",muted:!0},moved:!1},{x:6,y:12,w:6,h:4,i:"nUWd6IIJ0F8",name:"onboard #33",component:"CommonYoutubePlayer",props:{videoId:"nUWd6IIJ0F8",muted:!0},moved:!1},{x:0,y:12,w:6,h:4,i:"Leq41aBGhAE",name:"onboard #44",component:"CommonYoutubePlayer",props:{videoId:"Leq41aBGhAE",muted:!0},moved:!1},{x:0,y:6,w:9,h:6,i:"cemGzGeo4Hs",name:"onboard #5",component:"CommonYoutubePlayer",props:{videoId:"cemGzGeo4Hs",muted:!0},moved:!1},{x:18,y:0,w:9,h:6,i:"sydhn5DZh4c",name:"onboard #3",component:"CommonYoutubePlayer",props:{videoId:"sydhn5DZh4c",muted:!0},moved:!1},{x:9,y:0,w:9,h:6,i:"Sn00OFqkX8k",name:"onboard #15",component:"CommonYoutubePlayer",props:{videoId:"Sn00OFqkX8k",muted:!0},moved:!1},{x:27,y:4,w:5,h:4,i:"nUWd6IIJ0F8",name:"onboard #831",component:"CommonYoutubePlayer",props:{videoId:"nUWd6IIJ0F8",muted:!0},moved:!1},{x:9,y:6,w:9,h:6,i:"nUWd6IIJ0F8",name:"onboard #831",component:"CommonYoutubePlayer",props:{videoId:"nUWd6IIJ0F8",muted:!0},moved:!1},{x:18,y:6,w:9,h:6,i:"EmCbafg0tZE",name:"onboard #11",component:"CommonYoutubePlayer",props:{videoId:"EmCbafg0tZE",muted:!0},moved:!1},{x:27,y:0,w:5,h:4,i:"JaZBWqAmgfQ",name:"pitlane",component:"CommonYoutubePlayer",props:{videoId:"JaZBWqAmgfQ",muted:!0},moved:!1}]}}},1:{index:1,name:"Monza WEC",tabs:{main:{name:"main",layout:[]}}}}},r=function(){return t},m={addDashboard:function(o,data){o.commit("ADD_DASHBOARD",data)},saveLayout:function(o,data){o.commit("SAVE_LAYOUT",data)},addTab:function(o,data){o.commit("ADD_TAB",data)}},d={ADD_DASHBOARD:function(o,data){o.dashboards.push(data)},SAVE_LAYOUT:function(o,data){o.dashboards[data.index].tabs[data.tab].layout=data.layout},ADD_TAB:function(o,data){o.dashboards[data.dashName].tabs[data.tab]={name:data.name,layout:[]}}},c={getAll:function(o){return o.dashboards},getDashboardByName:function(o){return function(e){return o.dashboards.find((function(o){return o.name===e}))}}}},72:function(o,e,n){"use strict";var t={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(275),n(65)),m=n(82),d=n.n(m),c=n(385),component=Object(r.a)(t,(function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("v-app",{attrs:{dark:""}},[404===o.error.statusCode?n("h1",[o._v("\n    "+o._s(o.pageNotFound)+"\n  ")]):n("h1",[o._v("\n    "+o._s(o.otherError)+"\n  ")]),o._v(" "),n("NuxtLink",{attrs:{to:"/"}},[o._v(" Home ")])],1)}),[],!1,null,"033921d2",null);e.a=component.exports;d()(component,{VApp:c.a})}},[[249,18,5,19]]]);