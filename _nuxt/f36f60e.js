(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(o,e,n){"use strict";var t=n(0),r=n(232),m=n.n(r);t.default.use(m.a)},163:function(o,e,n){"use strict";var t=n(0),r=n(353),m=n(354),d=n(355);t.default.component("LMap",r.a),t.default.component("LTileLayer",m.a),t.default.component("LMarker",d.a)},164:function(o,e,n){"use strict";var t=n(233);e.a=function(o){var e=o.store;new t.a({storage:window.localStorage,reducer:function(o){return{dashboards:o.dashboards}}}).plugin(e)}},212:function(o,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(26).default)("158bc806",content,!0,{sourceMap:!1})},235:function(o,e,n){"use strict";n(7),n(5),n(8),n(13),n(6),n(14);var t=n(1),r=n(79);function m(object,o){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(object,o).enumerable}))),e.push.apply(e,n)}return e}function d(o){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(t.a)(o,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(source,e))}))}return o}var c={computed:d(d({},Object(r.b)({allDashboards:"dashboards/getAll"})),{},{dashboard:function(){return this.$route.params.dashboard},dashes:function(){return this.$store.state.dashboards.dashboards}})},l=n(65),v=n(82),h=n.n(v),f=n(362),y=n(363),w=n(364),C=n(365),P=n(366),component=Object(l.a)(c,(function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-main",[n("v-toolbar",{attrs:{height:"35px",dark:"",flat:""}},[n("v-tabs",{attrs:{"center-active":"",dark:"",grow:"",height:"35px"}},o._l(o.dashes[o.dashboard].tabs,(function(e,t){return n("v-tab",{key:e.index,attrs:{nuxt:"",to:"/dashboard/"+o.dashboard+"/"+t}},[o._v(o._s(e.name))])})),1)],1),o._v(" "),n("nuxt")],1)],1)}),[],!1,null,"4bcf7282",null);e.a=component.exports;h()(component,{VApp:f.a,VMain:y.a,VTab:w.a,VTabs:C.a,VToolbar:P.a})},236:function(o,e,n){"use strict";var t={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},r=n(65),m=n(82),d=n.n(m),c=n(362),l=n(367),v=n(363),component=Object(r.a)(t,(function(){var o=this.$createElement,e=this._self._c||o;return e("v-app",{attrs:{dark:""}},[e("v-main",[e("v-container",[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VApp:c.a,VContainer:l.a,VMain:v.a})},247:function(o,e,n){n(248),o.exports=n(249)},273:function(o,e,n){"use strict";n(212)},274:function(o,e,n){var t=n(25)(!1);t.push([o.i,"h1[data-v-033921d2]{font-size:20px}",""]),o.exports=t},320:function(o,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return t})),n.d(e,"getters",(function(){return r}));n(75),n(18);var t=function(){return{presets:[{name:"timing screen",component:"CommonIFrame",props:{style:"background-color: white;",url:"https://livetiming.azurewebsites.net/event=50?config=w3"}},{name:"weather radar",component:"CommonIFrame",props:{url:"https://www.rainviewer.com/map.html?loc=50.3341,6.9427,10&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=2&c=1&o=83&lm=0&th=0&sm=1&sn=1"}},{name:"main stream",component:"CommonYoutubePlayer",props:{videoId:"MXlRJ0-ETyI",muted:!1}},{name:"trackweather",component:"CommonIFrame",props:{url:"https://trackweather.live/"}},{name:"onboard #6",component:"CommonYoutubePlayer",props:{videoId:"YnBAkHpxPk4",muted:!0}},{name:"onboard #7",component:"CommonYoutubePlayer",props:{videoId:"Kch6NbE8L60",muted:!0}},{name:"onboard #33",component:"CommonYoutubePlayer",props:{videoId:"Ef52HmwTeUQ",muted:!0}},{name:"onboard #44",component:"CommonYoutubePlayer",props:{videoId:"f5SwyfqTUiM",muted:!0}},{name:"onboard #2",component:"CommonYoutubePlayer",props:{videoId:"Yn5Gyc5s7GE",muted:!0}},{name:"onboard #15",component:"CommonYoutubePlayer",props:{videoId:"ZhFk9VZT9_Q",muted:!0}},{name:"onboard #31",component:"CommonYoutubePlayer",props:{videoId:"hXLN3LEpLTw",muted:!0}},{name:"onboard #911",component:"CommonYoutubePlayer",props:{videoId:"BRYmUk8b0MU",muted:!0}},{name:"onboard #1",component:"CommonYoutubePlayer",props:{videoId:"GbZRNOkVeaQ",muted:!0}},{name:"onboard #77",component:"CommonYoutubePlayer",props:{videoId:"p5qKjfx3Coo",muted:!0}},{name:"onboard #831",component:"CommonYoutubePlayer",props:{videoId:"9L6457LBcjM",muted:!0}},{name:"onboard #101",component:"CommonYoutubePlayer",props:{videoId:"dy1glQX50hA",muted:!0}},{name:"onboard #110",component:"CommonYoutubePlayer",props:{videoId:"k0kgvIjNgMc",muted:!0}},{name:"onboard #5",component:"CommonYoutubePlayer",props:{videoId:"VPjGOot_Mfc",muted:!0}},{name:"pitlane",component:"CommonYoutubePlayer",props:{videoId:"UHa-kz6AC9g",muted:!0}},{name:"main stream mirror",component:"CommonIFrame",props:{url:"https://player.twitch.tv/?channel=el_bowgrease&parent=localhost"}}]}},r={getAll:function(o){return o.presets},getDashboardByName:function(o){return function(e){return o.dashboards.find((function(o){return o.name===e}))}}}},352:function(o,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"actions",(function(){return m})),n.d(e,"mutations",(function(){return d})),n.d(e,"getters",(function(){return c}));n(18),n(75);var t={dashboards:{0:{index:0,name:"main",tabs:{main:{name:"main",layout:[]}}},1:{index:1,name:"onboards",tabs:{main:{name:"main",layout:[]},onboards:{name:"All onboards",layout:[{x:27,y:0,w:9,h:5,i:"0",name:"onboard #6",component:"CommonYoutubePlayer",props:{videoId:"YnBAkHpxPk4",muted:!0},moved:!1},{x:9,y:0,w:9,h:5,i:"1",name:"onboard #7",component:"CommonYoutubePlayer",props:{videoId:"Kch6NbE8L60",muted:!0},moved:!1},{x:0,y:15,w:9,h:5,i:"2",name:"onboard #33",component:"CommonYoutubePlayer",props:{videoId:"Ef52HmwTeUQ",muted:!0},moved:!1},{x:0,y:0,w:9,h:5,i:"3",name:"onboard #44",component:"CommonYoutubePlayer",props:{videoId:"f5SwyfqTUiM",muted:!0},moved:!1},{x:18,y:0,w:9,h:5,i:"4",name:"onboard #2",component:"CommonYoutubePlayer",props:{videoId:"Yn5Gyc5s7GE",muted:!0},moved:!1},{x:9,y:15,w:9,h:5,i:"5",name:"onboard #44",component:"CommonYoutubePlayer",props:{videoId:"f5SwyfqTUiM",muted:!0},moved:!1},{x:0,y:5,w:9,h:5,i:"6",name:"onboard #2",component:"CommonYoutubePlayer",props:{videoId:"Yn5Gyc5s7GE",muted:!0},moved:!1},{x:36,y:0,w:4,h:3,i:"7",name:"onboard #15",component:"CommonYoutubePlayer",props:{videoId:"ZhFk9VZT9_Q",muted:!0},moved:!1},{x:27,y:5,w:9,h:5,i:"8",name:"onboard #31",component:"CommonYoutubePlayer",props:{videoId:"hXLN3LEpLTw",muted:!0},moved:!1},{x:9,y:10,w:9,h:5,i:"9",name:"onboard #911",component:"CommonYoutubePlayer",props:{videoId:"BRYmUk8b0MU",muted:!0},moved:!1},{x:0,y:10,w:9,h:5,i:"10",name:"onboard #1",component:"CommonYoutubePlayer",props:{videoId:"GbZRNOkVeaQ",muted:!0},moved:!1},{x:18,y:10,w:9,h:5,i:"11",name:"onboard #77",component:"CommonYoutubePlayer",props:{videoId:"p5qKjfx3Coo",muted:!0},moved:!1},{x:27,y:10,w:9,h:5,i:"12",name:"onboard #831",component:"CommonYoutubePlayer",props:{videoId:"9L6457LBcjM",muted:!0},moved:!1},{x:18,y:5,w:9,h:5,i:"13",name:"onboard #101",component:"CommonYoutubePlayer",props:{videoId:"dy1glQX50hA",muted:!0},moved:!1},{x:18,y:15,w:9,h:5,i:"14",name:"onboard #110",component:"CommonYoutubePlayer",props:{videoId:"k0kgvIjNgMc",muted:!0},moved:!1},{x:9,y:5,w:9,h:5,i:"15",name:"onboard #5",component:"CommonYoutubePlayer",props:{videoId:"VPjGOot_Mfc",muted:!0},moved:!1},{x:27,y:15,w:9,h:5,i:"16",name:"pitlane",component:"CommonYoutubePlayer",props:{videoId:"UHa-kz6AC9g",muted:!0},moved:!1}]}}}}},r=function(){return t},m={addDashboard:function(o,data){o.commit("ADD_DASHBOARD",data)},saveLayout:function(o,data){o.commit("SAVE_LAYOUT",data)},addTab:function(o,data){o.commit("ADD_TAB",data)}},d={ADD_DASHBOARD:function(o,data){o.dashboards.push(data)},SAVE_LAYOUT:function(o,data){o.dashboards[data.index].tabs[data.tab].layout=data.layout},ADD_TAB:function(o,data){o.dashboards[data.dashName].tabs[data.tab]={name:data.name,layout:[]}}},c={getAll:function(o){return o.dashboards},getDashboardByName:function(o){return function(e){return o.dashboards.find((function(o){return o.name===e}))}}}},72:function(o,e,n){"use strict";var t={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(273),n(65)),m=n(82),d=n.n(m),c=n(362),component=Object(r.a)(t,(function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("v-app",{attrs:{dark:""}},[404===o.error.statusCode?n("h1",[o._v("\n    "+o._s(o.pageNotFound)+"\n  ")]):n("h1",[o._v("\n    "+o._s(o.otherError)+"\n  ")]),o._v(" "),n("NuxtLink",{attrs:{to:"/"}},[o._v(" Home ")])],1)}),[],!1,null,"033921d2",null);e.a=component.exports;d()(component,{VApp:c.a})}},[[247,17,5,18]]]);