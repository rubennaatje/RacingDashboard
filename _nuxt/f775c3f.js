(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,7,8],{411:function(t,e,o){var content=o(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("08673ca1",content,!0,{sourceMap:!1})},412:function(t,e,o){var content=o(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("4bf31d02",content,!0,{sourceMap:!1})},413:function(t,e,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("257d2dcf",content,!0,{sourceMap:!1})},414:function(t,e,o){"use strict";o(411)},415:function(t,e,o){var n=o(13)(!1);n.push([t.i,".v-btn--example{bottom:0;position:absolute;margin:0 0 40px 20px}",""]),t.exports=n},416:function(t,e,o){"use strict";o(412)},417:function(t,e,o){var n=o(13)(!1);n.push([t.i,".fieldset[data-v-076a6449]{position:relative;border:1px solid #ddd;padding:10px;width:100%;height:100%}.fieldset .fieldset-title[data-v-076a6449]{position:absolute;top:0;font-size:var(--global-font-size);line-height:var(--global-line-height);margin:-9px 0 0;background:#121212;padding:0 3px}",""]),t.exports=n},418:function(t,e,o){"use strict";o.r(e);o(7),o(4),o(8),o(10),o(6),o(11);var n=o(2),r=(o(21),o(86));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:["currIndex"],data:function(){return{dialog:!1,form:{name:"",youtube:"",preset:null}}},computed:d({},Object(r.b)({allPresets:"presets/getAll"})),methods:{save:function(){this.form.preset?this.$emit("add",d({x:6*this.currIndex,y:6*this.currIndex,w:6,h:6,i:"".concat(this.currIndex)},this.form.preset)):this.$emit("add",{x:6*this.currIndex,y:6*this.currIndex,w:6,h:6,i:"".concat(this.currIndex),name:this.form.name,component:"CommonYoutubePlayer",props:{videoId:this.form.youtube}}),this.form.name="",this.form.preset=null,this.form.youtube=""}}},v=(o(414),o(74)),f=o(90),m=o.n(f),h=o(113),x=o(442),_=o(409),y=o(499),k=o(408),w=o(500),O=o(176),C=o(502),j=o(503),S=o(405),V=o(497),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"v-btn--example",attrs:{color:"primary",dark:"",bottom:"",left:"",fab:"",absolute:""}},"v-btn",r,!1),n),[o("v-icon",[t._v(" mdi-plus ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("New item")])]),t._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"name*",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"youtube"},model:{value:t.form.youtube,callback:function(e){t.$set(t.form,"youtube",e)},expression:"form.youtube"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-select",{attrs:{items:["YouTube","image","normal iframe","text"],label:"type",required:""}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-select",{attrs:{items:t.allPresets,label:"Add preset component","item-text":"name","return-object":"",required:""},model:{value:t.form.preset,callback:function(e){t.$set(t.form,"preset",e)},expression:"form.preset"}})],1)],1)],1),t._v(" "),o("small",[t._v("*indicates required field")])],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:h.a,VCard:x.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:y.a,VContainer:k.a,VDialog:w.a,VIcon:O.a,VRow:C.a,VSelect:j.a,VSpacer:S.a,VTextField:V.a})},419:function(t,e,o){"use strict";o.r(e);var n={name:"Container",props:["title","hideOutline"]},r=(o(416),o(74)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[t.hideOutline?t._t("default"):o("section",{staticClass:"fieldset"},[o("h1",{staticClass:"fieldset-title"},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)],2)}),[],!1,null,"076a6449",null);e.default=component.exports},420:function(t,e,o){"use strict";o(413)},421:function(t,e,o){var n=o(13)(!1);n.push([t.i,".vue-grid-item .resizing[data-v-35fc2118]{opacity:.9}.vue-grid-layout[data-v-35fc2118]{height:100%}.vue-grid-item .text[data-v-35fc2118]{font-size:24px;text-align:center;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.vue-grid-item .no-drag[data-v-35fc2118],.vue-grid-item .text[data-v-35fc2118]{height:100%;width:100%}.vue-grid-item .minMax[data-v-35fc2118]{font-size:12px}.vue-grid-item .add[data-v-35fc2118]{cursor:pointer}.vue-draggable-handle[data-v-35fc2118]{position:absolute;width:20px;height:20px;top:0;left:0;background:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>\") no-repeat;background-position:100% 100%;padding:0 8px 8px 0;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;cursor:pointer}",""]),t.exports=n},440:function(t,e,o){var content=o(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("78bb35e0",content,!0,{sourceMap:!1})},451:function(t,e,o){"use strict";o.r(e);o(25),o(21);var n=o(441),r={components:{GridLayout:n.GridLayout,GridItem:n.GridItem},props:["edit"],data:function(){return{editing:!0,currentTabComponent:"CommonOutlinedContainer",layout:[],draggable:!0,resizable:!0,index:0}},methods:{itemTitle:function(t){return"".concat(t.i," - ").concat(t.name)},save:function(){console.log("sabe"),this.$store.dispatch("dashboards/saveLayout",{layout:this.layout,index:0,tab:"xd"})}}},l=(o(420),o(74)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.edit?o("CommonItemForm",{attrs:{"curr-index":t.layout.length},on:{add:function(e){return t.layout.push(e)}}}):t._e(),t._v(" "),o("grid-layout",{attrs:{layout:t.layout,"col-num":22,"row-height":22,"is-draggable":t.draggable,"is-resizable":t.resizable,"vertical-compact":!0,"use-css-transforms":!0}},t._l(t.layout,(function(e){return o("grid-item",{key:e.i,attrs:{static:!t.edit,x:e.x,y:e.y,w:e.w,h:e.h,i:e.i}},[o("CommonOutlinedContainer",{staticClass:"h-full w-full",attrs:{title:t.itemTitle(e),"hide-outline":!t.edit}},[o(e.component,t._b({tag:"component",staticStyle:{height:"100",width:"100%"}},"component",e.props,!1))],1)],1)})),1)],1)}),[],!1,null,"35fc2118",null);e.default=component.exports;installComponents(component,{CommonItemForm:o(418).default,CommonOutlinedContainer:o(419).default})},456:function(t,e,o){"use strict";o(440)},457:function(t,e,o){var n=o(13)(!1);n.push([t.i,".v-speed-dial{position:absolute}.v-btn--floating{position:relative}",""]),t.exports=n},491:function(t,e,o){var content=o(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("e6b013ca",content,!0,{sourceMap:!1})},492:function(t,e,o){var n=o(13)(!1);n.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),t.exports=n},504:function(t,e,o){"use strict";o.r(e);var n={layout:"dashboard",data:function(){return{fab:!1,edit:!1}},methods:{save:function(){console.log("save"),this.$refs.dash.save()}}},r=(o(456),o(74)),l=o(90),d=o.n(l),c=o(113),v=o(176),f=o(2),m=(o(44),o(119),o(64),o(21),o(491),o(59)),h=o(121),x=o(1).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),_=o(188),y=o(5),k=Object(y.a)(h.a,m.a,x).extend({name:"v-speed-dial",directives:{ClickOutside:_.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(f.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(f.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,o=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var n=0;o=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(n++,t("div",{style:{transitionDelay:.05*n+"s"},key:i},[b]))}))}var r=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},o);return t("div",data,[this.$slots.activator,r])}}),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("CommonRaceDashboard",{ref:"dash",staticStyle:{height:"100%"},attrs:{edit:t.edit}}),t._v(" "),o("v-speed-dial",{attrs:{bottom:!0,right:!0,direction:"top",transition:"slide-y-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?o("v-icon",[t._v(" mdi-close ")]):o("v-icon",[t._v(" mdi-account-circle ")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"green",nuxt:"",to:"/"}},[o("v-icon",[t._v("mdi-home")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo",nuxt:""},on:{click:t.save}},[o("v-icon",[t._v("mdi-gear")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:function(e){t.edit=!t.edit}}},[o("v-icon",[t._v("mdi-pencil")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"red"}},[o("v-icon",[t._v("mdi-expand-all-outline")])],1),t._v(" "),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"gray",href:"http://www.github.com/rubennaatje",target:"_blank"}},[o("v-icon",[t._v("mdi-github")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{CommonRaceDashboard:o(451).default}),d()(component,{VBtn:c.a,VIcon:v.a,VSpeedDial:k})}}]);