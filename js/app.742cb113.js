(function(e){function t(t){for(var n,s,l=t[0],i=t[1],o=t[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},c=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/quality-management-client/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"32f6":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center pl-10"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FarmDyn Logo",contain:"",src:e.publicPath+"farmdyn.png",transition:"scale-transition",width:"20"}}),e._v(" FarmDyn QM - Results ")],1),a("v-spacer")],1),a("v-main",[a("Table",{staticClass:"ma-10",attrs:{data:e.data}})],1)],1)},c=[],s=a("1da1"),l=(a("96cf"),a("d3b7"),a("d81d"),a("b64b"),a("4de4"),a("caad"),a("2532"),a("159b"),a("ac1f"),a("1276"),a("35b3"),a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.filteredData,"items-per-page":15,search:e.search},scopedSlots:e._u([{key:"header.batch_name",fn:function(t){var n=t.header;return[e._v(" "+e._s(n.text)+" "),a("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",{attrs:{small:"",color:e.selectedBatchNames.length===e.batchNames.length?"":"primary"}},[e._v(" mdi-filter ")])],1)]}}],null,!0)},[a("div",{staticStyle:{"background-color":"white",width:"280px"}},[a("v-select",{staticClass:"pa-4",staticStyle:{"max-height":"200px",overflow:"scroll"},attrs:{multiple:"","deletable-chips":"",chips:"","menu-props":{maxHeight:"400"},items:e.batchNames,type:"text",label:"Filter by"},model:{value:e.selectedBatchNames,callback:function(t){e.selectedBatchNames=t},expression:"selectedBatchNames"}}),a("v-btn",{staticClass:"ml-2 mb-2",attrs:{small:"",text:"",color:"primary"},on:{click:function(t){e.selectedBatchNames=e.batchNames}}},[e._v("Select All")]),a("v-btn",{staticClass:"ml-2 mb-2",attrs:{small:"",text:"",color:"secondary"},on:{click:function(t){e.selectedBatchNames=[]}}},[e._v("Clear")])],1)])]}},{key:"header.scenario",fn:function(t){var n=t.header;return[e._v(" "+e._s(n.text)+" "),a("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",{attrs:{small:"",color:e.selectedScenarios.length===e.scenarios.length?"":"primary"}},[e._v(" mdi-filter ")])],1)]}}],null,!0)},[a("div",{staticStyle:{"background-color":"white",width:"280px"}},[a("v-select",{staticClass:"pa-4",staticStyle:{"max-height":"200px",overflow:"scroll"},attrs:{multiple:"","deletable-chips":"",chips:"","menu-props":{maxHeight:"400"},items:e.scenarios,type:"text",label:"Filter by"},model:{value:e.selectedScenarios,callback:function(t){e.selectedScenarios=t},expression:"selectedScenarios"}}),a("v-btn",{staticClass:"ml-2 mb-2",attrs:{small:"",text:"",color:"primary"},on:{click:function(t){e.selectedScenarios=e.scenarios}}},[e._v("Select All")]),a("v-btn",{staticClass:"ml-2 mb-2",attrs:{small:"",text:"",color:"secondary"},on:{click:function(t){e.selectedScenarios=[]}}},[e._v("Clear")])],1)])]}},{key:"header.variable",fn:function(t){var n=t.header;return[e._v(" "+e._s(n.text)+" "),a("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",{attrs:{small:"",color:e.selectedVariables.length===e.variables.length?"":"primary"}},[e._v(" mdi-filter ")])],1)]}}],null,!0)},[a("div",{staticStyle:{"background-color":"white",width:"280px"}},[a("v-select",{staticClass:"pa-4",staticStyle:{"max-height":"200px",overflow:"scroll"},attrs:{multiple:"","deletable-chips":"",chips:"","menu-props":{maxHeight:"400"},items:e.variables,type:"text",label:"Filter by"},model:{value:e.selectedVariables,callback:function(t){e.selectedVariables=t},expression:"selectedVariables"}}),a("v-btn",{staticClass:"ml-2 mb-2",attrs:{small:"",text:"",color:"primary"},on:{click:function(t){e.selectedVariables=e.variables}}},[e._v("Select All")]),a("v-btn",{staticClass:"ml-2 mb-2",attrs:{small:"",text:"",color:"secondary"},on:{click:function(t){e.selectedVariables=[]}}},[e._v("Clear")])],1)])]}}])})],1)}),i=[],o=a("2909"),u=(a("4e827"),a("99af"),a("6062"),a("3ca3"),a("ddb0"),{computed:{filteredData:function(){var e=this;return this.data.filter((function(t){return e.selectedBatchNames.includes(t.batch_name)&&e.selectedScenarios.includes(t.scenario)&&e.selectedVariables.includes(t.variable)}))},headers:function(){if(!this.data||!this.data.length)return[];var e=Object.keys(this.data[0]).filter((function(e){return!isNaN(+e)})).sort((function(e,t){return t-e}));return[{text:"Batch Name",value:"batch_name",align:"start"},{text:"Scenario",value:"scenario"},{text:"Variable",value:"variable"}].concat(Object(o["a"])(e.map((function(e){return{text:e,value:e,sortable:!1}}))))},batchNames:function(){var e=Object(o["a"])(new Set(this.data.map((function(e){return e.batch_name})).filter((function(e){return e}))));return e},scenarios:function(){return Object(o["a"])(new Set(this.data.map((function(e){return e.scenario})).filter((function(e){return e}))))},variables:function(){return Object(o["a"])(new Set(this.data.map((function(e){return e.variable})).filter((function(e){return e}))))}},watch:{batchNames:function(){this.selectedBatchNames=this.batchNames},scenarios:function(){this.selectedScenarios=this.scenarios},variables:function(){this.selectedVariables=this.variables}},data:function(){return{search:"",selectedBatchNames:[],selectedScenarios:[],selectedVariables:[]}},props:{data:{type:Array,required:!0}}}),d=u,f=(a("ec00"),a("2877")),p=a("6544"),b=a.n(p),m=a("8336"),h=a("b0af"),v=a("99d9"),y=a("8fea"),g=a("132d"),_=a("e449"),x=a("b974"),S=a("8654"),w=Object(f["a"])(d,l,i,!1,null,null,null),k=w.exports;b()(w,{VBtn:m["a"],VCard:h["a"],VCardTitle:v["a"],VDataTable:y["a"],VIcon:g["a"],VMenu:_["a"],VSelect:x["a"],VTextField:S["a"]});var O=a("9a93"),V={name:"App",components:{Table:k},data:function(){return{data:[],toIgnore:["_id","_rev","scenario","revision","batch_name"],publicPath:"/quality-management-client/"}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fruchtfolge.agp.uni-bonn.de/db/farmdyn_qm/_all_docs?include_docs=true").then((function(e){return e.json()}));case 2:a=t.sent,n=a.rows,r=n.map((function(e){return e.doc})).reduce((function(t,a){var n=Object.keys(a),r=n.filter((function(t){return!e.toIgnore.includes(t)}));return r.forEach((function(n){t.push({revision:+a._id.split("::")[0],batch_name:a["batch_name"],scenario:a.scenario,variable:n,value:e.round(a[n])})})),t}),[]),console.log(r),e.data=Object(O["b"])(r,Object(O["a"])({namesFrom:"revision",valuesFrom:"value"}));case 7:case"end":return t.stop()}}),t)})))()},methods:{round:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round((e+Number.EPSILON)*Math.pow(10,t))/Math.pow(10,t)}}},j=V,N=a("7496"),C=a("40dc"),B=a("adda"),M=a("f6c4"),P=a("2fa4"),F=Object(f["a"])(j,r,c,!1,null,null,null),T=F.exports;b()(F,{VApp:N["a"],VAppBar:C["a"],VImg:B["a"],VMain:M["a"],VSpacer:P["a"]});var A=a("f309");n["a"].use(A["a"]);var D=new A["a"]({theme:{themes:{light:{primary:"#5fb16c",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:D,render:function(e){return e(T)}}).$mount("#app")},ec00:function(e,t,a){"use strict";a("32f6")}});
//# sourceMappingURL=app.742cb113.js.map