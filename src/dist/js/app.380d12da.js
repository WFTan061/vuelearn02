(function(e){function t(t){for(var i,o,a=t[0],d=t[1],s=t[2],u=0,f=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&f.push(l[o][0]),l[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var d=n[a];0!==l[d]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},l={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var c=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1d50")},"1d50":function(e,t,n){"use strict";n.r(t);n("9902"),n("7859"),n("9651"),n("03a4");var i=n("e832"),l=n("7e05"),r=n("aa2f"),o=(n("5b3d"),n("7db1"),n("82a3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{addLink:e.addLink}}),n("Table",{attrs:{links:e.links},on:{editLink:e.editLink,deleteLink:e.deleteLink}})],1)}),a=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-add",expression:"'modal-add'"}]},[e._v("Add")]),n("b-modal",{ref:"modal-add",attrs:{id:"modal-add",title:"Add link"},on:{ok:e.handleOk,hidden:e.resetModal,show:e.resetModal}},[n("b-form",{on:{submit:function(e){e.preventDefault()}}},[n("b-form-group",{attrs:{id:"name",label:"Link Name","label-for":"linkname"}},[n("b-form-input",{attrs:{id:"linkname",type:"text",required:"",placeholder:"Enter link name"},model:{value:e.form.linkName,callback:function(t){e.$set(e.form,"linkName",t)},expression:"form.linkName"}})],1),n("b-form-group",{attrs:{id:"address",label:"Link address","label-for":"linkaddress"}},[n("b-form-input",{attrs:{id:"linkaddress",type:"text",required:"",placeholder:"Enter link address"},model:{value:e.form.linkAddress,callback:function(t){e.$set(e.form,"linkAddress",t)},expression:"form.linkAddress"}})],1),n("b-form-group",{attrs:{id:"name",label:"Link Icon","label-for":"linkicon"}},[n("b-form-input",{attrs:{id:"linkicon",type:"text",required:"",placeholder:"Enter link icon path"},model:{value:e.form.linkIcon,callback:function(t){e.$set(e.form,"linkIcon",t)},expression:"form.linkIcon"}})],1)],1)],1)],1)},s=[],c={data:function(){return{form:{linkName:"",linkAddress:"",linkIcon:""}}},methods:{handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){this.$emit("addLink",this.form),this.$nextTick((function(){this.$bvModal.hide("modal-add")}))},resetModal:function(){this.form={linkName:"",linkAddress:"",linkIcon:""}}}},u=c,f=n("ebc1"),m=Object(f["a"])(u,d,s,!1,null,null,null),k=m.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("b-table",{attrs:{fields:e.tableFields,items:e.links,responsive:"lg"},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v(" "+e._s(t.index)+" ")]}},{key:"cell(name)",fn:function(t){return[e._v(" "+e._s(t.item.linkName)+" ")]}},{key:"cell(icon)",fn:function(e){return[n("a",{attrs:{href:e.item.linkAddress}},[n("b-img",{attrs:{"thumbnail-fluid":"",src:e.item.linkIcon}})],1)]}},{key:"cell(date)",fn:function(t){return[e._v(" "+e._s(t.item.dateCreated)+" ")]}},{key:"cell(actions)",fn:function(t){return[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"linkModalEdit"+t.index,expression:"'linkModalEdit' + data.index"}],on:{click:function(n){return e.toEdit(t.item,t.index)}}},[n("b-icon",{attrs:{icon:"pencil"}})],1),n("b-button",{on:{click:function(n){return e.$emit("deleteLink",t.index)}}},[n("b-icon",{attrs:{icon:"trash"}})],1),n("b-modal",{attrs:{id:"linkModalEdit"+t.index},on:{ok:e.handleOk,hidden:e.resetModal}},[n("b-form",{on:{submit:function(e){e.preventDefault()}}},[n("b-form-group",{attrs:{id:"name",label:"index","label-for":"linkIndex"}},[n("b-form-input",{attrs:{id:"linkIndex",type:"text",readOnly:""},model:{value:e.editItem.index,callback:function(t){e.$set(e.editItem,"index",t)},expression:"editItem.index"}})],1),n("b-form-group",{attrs:{id:"name",label:"Link Name","label-for":"linkname"}},[n("b-form-input",{attrs:{id:"linkname",type:"text",required:"",placeholder:"Enter link name"},model:{value:e.editItem.linkName,callback:function(t){e.$set(e.editItem,"linkName",t)},expression:"editItem.linkName"}})],1),n("b-form-group",{attrs:{id:"address",label:"Link address","label-for":"linkAddress"}},[n("b-form-input",{attrs:{id:"linkAddress",type:"text",required:"",placeholder:"Enter link address"},model:{value:e.editItem.linkAddress,callback:function(t){e.$set(e.editItem,"linkAddress",t)},expression:"editItem.linkAddress"}})],1),n("b-form-group",{attrs:{id:"icon",label:"Link Icon","label-for":"linkicon"}},[n("b-form-input",{attrs:{id:"linkicon",type:"text",required:"",placeholder:"Enter link icon path"},model:{value:e.editItem.linkIcon,callback:function(t){e.$set(e.editItem,"linkIcon",t)},expression:"editItem.linkIcon"}})],1),n("b-form-group",{attrs:{id:"creation",label:"dateCreated","label-for":"creation"}},[n("b-form-input",{attrs:{id:"creation",type:"text",readOnly:""},model:{value:e.editItem.dateCreated,callback:function(t){e.$set(e.editItem,"dateCreated",t)},expression:"editItem.dateCreated"}})],1)],1)],1)]}}])})],1)},b=[],h=(n("924a"),{data:function(){return{tableFields:["index",{key:"name",label:"Name of Link"},{key:"icon",label:"Link"},{key:"date",label:"Date Created"},{key:"actions",label:"actions"}],editItem:{index:-1,linkName:"",linkAddress:"",linkIcon:"",dateCreated:""}}},props:["links"],methods:{toEdit:function(e,t){var n,i=Object.keys(e);for(n in i)this.editItem[i[n]]=e[i[n]];this.editItem.index=t},handleOk:function(e){e.preventDefault(),this.handleSubmit()},resetModal:function(){this.editItem={index:-1,linkName:"",linkAddress:"",linkIcon:"",dateCreated:""}},handleSubmit:function(){this.$emit("editLink",this.editItem),this.$nextTick((function(){this.$bvModal.hide("linkModalEdit"+this.editItem.index)}))}}}),v=h,x=Object(f["a"])(v,p,b,!1,null,null,null),g=x.exports;n("babb"),n("0f47");function y(e,t){var n=e;n.dateCreated=(new Date).toString(),t.push(n)}n("ce5e");function I(e,t){t.splice(e,1)}function _(e,t){var n,i=Object.keys(e);for(n in i)"index"!==i[n]&&(t[e.index][i[n]]=e[i[n]])}var L={name:"App",data:function(){return{links:[{linkName:"Google",linkAddress:"http://localhost:8080",linkIcon:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",dateCreated:"10/10/2009"},{linkName:"Google",linkAddress:"http://localhost:8080",linkIcon:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",dateCreated:"10/10/2009"}]}},components:{Header:k,Table:g},methods:{addLinkHelper:y,editLinkHelper:_,deleteLinkHelper:I,addLink:function(e){y(e,this.links)},deleteLink:function(e){I(e,this.links)},editLink:function(e){_(e,this.links)}}},O=L,w=(n("e5cd"),Object(f["a"])(O,o,a,!1,null,null,null)),$=w.exports;i["default"].use(l["a"]),i["default"].use(r["a"]),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e($)}}).$mount("#app")},e5cd:function(e,t,n){"use strict";var i=n("e8b1"),l=n.n(i);l.a},e8b1:function(e,t,n){}});
//# sourceMappingURL=app.380d12da.js.map