(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73ab3b28"],{"2ced":function(t,e,n){var r=n("76d7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("01fddf04",r,!0,{sourceMap:!1,shadowMode:!1})},"76d7":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".add-or-edit-network[data-v-7d8d5c78]{max-width:400px;width:calc(100% - 80px);margin:0 auto}.add-or-edit-network .custom-token-text[data-v-7d8d5c78]{font-size:13px;text-align:left}.add-or-edit-network .sub-title[data-v-7d8d5c78]{margin-top:-20px;font-size:14px}.add-or-edit-network .scroller[data-v-7d8d5c78]{margin:0 -40px -40px;padding:20px 40px;max-height:280px;overflow-y:auto}.add-or-edit-network .switcher[data-v-7d8d5c78]{margin:-20px -40px 0;width:calc(100% + 80px)}",""])},"910e":function(t,e,n){"use strict";var r=n("2ced"),o=n.n(r);o.a},ec1e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"add-or-edit-network"},[n("section",{staticClass:"popup-content"},[t.editing?n("figure",{staticClass:"title"},[t._v("Editing "),n("span",[t._v("network settings")])]):t._e(),t.editing?t._e():n("figure",{staticClass:"title"},[t._v("Adding "),n("span",[t._v("custom network")])]),n("section",{staticClass:"switcher"},[n("figure",{staticClass:"type",class:{active:t.state===t.STATES.NETWORK},on:{click:function(e){t.state=t.STATES.NETWORK}}},[t._v("Details")]),n("figure",{staticClass:"type",class:{active:t.state===t.STATES.TOKEN},on:{click:function(e){t.state=t.STATES.TOKEN}}},[t._v("System Token")])]),t.state===t.STATES.NETWORK?n("section",{staticClass:"scroller"},[n("Input",{attrs:{label:"Name",placeholder:"My Custom Network",text:t.network.name},on:{changed:function(e){return t.network.name=e}}}),n("Select",{staticStyle:{margin:"0 0 20px 0"},attrs:{bordered:"1",label:"Blockchain",selected:t.network.blockchain,options:t.blockchains,parser:function(e){return t.blockchainName(e)}},on:{selected:function(e){return t.network.blockchain=e}}}),n("section",{staticClass:"flex"},[n("Input",{staticStyle:{flex:"1"},attrs:{label:"Host (domain only)",placeholder:"example.com",text:t.network.host},on:{changed:function(e){return t.network.host=e}}}),n("Input",{staticStyle:{flex:"0.3"},attrs:{label:"Port",placeholder:"443",type:"number",text:t.network.port},on:{changed:function(e){return t.network.port=e}}})],1),n("Select",{staticStyle:{margin:"0 0 20px 0"},attrs:{bordered:"1",label:"Protocol",selected:t.network.protocol,options:["http","https"]},on:{selected:function(e){return t.network.protocol=e}}}),n("section",{staticClass:"flex"},[n("Input",{attrs:{disabled:!!t.editing,label:"Chain ID",placeholder:"aca...",text:t.network.chainId},on:{changed:function(e){return t.network.chainId=e}}}),t.editing?t._e():n("Button",{staticStyle:{"margin-top":"21px"},attrs:{loading:t.gettingChainId,icon:"fas fa-link"},nativeOn:{click:function(e){return t.fetchChainId(e)}}})],1),n("Input",{attrs:{label:"Path (leave blank for no path)",placeholder:"/example",text:t.network.path},on:{changed:function(e){return t.network.path=e}}})],1):t._e(),t.state===t.STATES.TOKEN?n("section",{staticClass:"scroller"},[n("section",{staticClass:"flex",staticStyle:{"align-items":"center"}},[n("figure",{staticClass:"custom-token-text"},[t._v("If this network uses a custom token as its system token, enable this option and configure the details.")]),n("Switcher",{staticStyle:{flex:"0 0 auto"},attrs:{state:t.network.token},on:{switched:t.useCustomToken}})],1),n("br"),n("br"),t.network.token?n("section",{staticClass:"flex"},[n("Input",{staticStyle:{flex:"1","margin-bottom":"0"},attrs:{placeholder:t.contractPlaceholder,text:t.network.token.contract,disabled:t.editing,label:"Contract account"},on:{changed:function(e){return t.network.token.contract=e}}}),n("Input",{staticStyle:{flex:"0.5","margin-bottom":"0"},attrs:{placeholder:"XXX",label:"Symbol",text:t.network.token.symbol,disabled:t.editing},on:{changed:function(e){return t.network.token.symbol=e}}}),n("Input",{staticStyle:{flex:"0.5","margin-bottom":"0"},attrs:{placeholder:"4",type:"number",label:"Decimals",disabled:t.editing,text:t.network.token.decimals},on:{changed:function(e){return t.network.token.decimals=e}}})],1):t._e()]):t._e()]),n("section",{staticClass:"popup-buttons"},[n("Button",{attrs:{text:"Cancel"},nativeOn:{click:function(e){return function(){return t.closer(null)}()}}}),n("Button",{attrs:{primary:"1",text:"Save"},nativeOn:{click:function(e){return t.save(e)}}})],1)])},o=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("28a5"),n("96cf"),n("3b8d")),i=n("bd86"),c=n("2f62"),s=n("efcb"),l=n.n(s),u=n("1b0c"),d=n.n(u),h=n("07d1"),p=n.n(h),k=n("21f8"),f=n("4b59"),w=n("20cb"),b=n.n(w),g=n("17e3");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach(function(e){Object(i["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var v={NETWORK:"network",TOKEN:"token"},y={props:["popin","closer"],data:function(){return{state:v.NETWORK,STATES:v,network:l.a.placeholder(),gettingChainId:!1}},computed:x({},Object(c["d"])(["scatter"]),{editing:function(){return this.popin.data.props.network},contractPlaceholder:function(){if(this.network.token&&this.network.token.blockchain)return b.a.plugin(this.network.token.blockchain).contractPlaceholder()},blockchains:function(){return g["BlockchainsArray"].map(function(t){return t.value})}}),mounted:function(){this.editing?this.network=this.editing.clone():this.network.blockchain=g["Blockchains"].EOSIO},methods:{blockchainName:g["blockchainName"],save:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.editing){t.next=5;break}return t.next=3,p.a.updateNetwork(this.network);case 3:t.next=10;break;case 5:return t.next=7,p.a.addNetwork(this.network);case 7:if(e=t.sent,!e.hasOwnProperty("error")){t.next=10;break}return t.abrupt("return",k["a"].push(f["a"].snackbar(e.error)));case 10:this.closer(this.network);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),useCustomToken:function(){if(this.network.token)return this.network.token=null;var t=d.a.placeholder();t.blockchain=this.network.blockchain,this.network.token=t},fetchChainId:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.gettingChainId=!0,t.next=3,b.a.plugin(this.network.blockchain).getChainId(this.network);case 3:this.network.chainId=t.sent,this.gettingChainId=!1;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},watch:Object(i["a"])({},"network.host",function(){this.network.host&&this.network.host.indexOf("//")>-1&&(this.network.host=this.network.host.split("//")[1])})},O=y,S=(n("910e"),n("2877")),C=Object(S["a"])(O,r,o,!1,null,"7d8d5c78",null);e["default"]=C.exports}}]);