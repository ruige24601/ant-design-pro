(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{EdlB:function(e,t,a){e.exports={area_code:"antd-pro-pages-account-settings-components-phone-view-area_code",phone_number:"antd-pro-pages-account-settings-components-phone-view-phone_number"}},KWSo:function(e,t,a){e.exports={main:"antd-pro-pages-account-settings-style-main",leftMenu:"antd-pro-pages-account-settings-style-leftMenu",right:"antd-pro-pages-account-settings-style-right",title:"antd-pro-pages-account-settings-style-title"}},O4pj:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),i=a("vuIU"),c=a("Ji7U"),s=a("LK+K"),r=(a("lUTK"),a("BvKs")),o=a("q1tI"),d=a.n(o),l=a("9kvl"),u=a("Hx5s"),m=(a("y8nQ"),a("Vl3Y")),g=(a("5NDa"),a("5rEg")),p=(a("miYZ"),a("tsqr")),v=(a("DZo9"),a("8z0m")),b=(a("+L6B"),a("2/Rp")),f=(a("OaEy"),a("2fM7")),y=a("z7Xi"),h=(a("T2oS"),a("W9HT")),E=a("zPRt"),O=a.n(E),j=f["a"].Option,w={label:"",value:"",key:""},k=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return e=t.call.apply(t,[this].concat(c)),e.componentDidMount=function(){var t=e.props.dispatch;t&&t({type:"accountAndsettings/fetchProvince"})},e.getCityOption=function(){var t=e.props.city;return t?e.getOption(t):[]},e.getOption=function(e){return!e||e.length<1?d.a.createElement(j,{key:0,value:0},"\u6ca1\u6709\u627e\u5230\u9009\u9879"):e.map((function(e){return d.a.createElement(j,{key:e.id,value:e.id},e.name)}))},e.selectProvinceItem=function(t){var a=e.props,n=a.dispatch,i=a.onChange;n&&n({type:"accountAndsettings/fetchCity",payload:t.key}),i&&i({province:t,city:w})},e.selectCityItem=function(t){var a=e.props,n=a.value,i=a.onChange;n&&i&&i({province:n.province,city:t})},e}return Object(i["a"])(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.dispatch,n=t.value;!e.value&&n&&n.province&&a&&a({type:"accountAndsettings/fetchCity",payload:n.province.key})}},{key:"getProvinceOption",value:function(){var e=this.props.province;return e?this.getOption(e):[]}},{key:"conversionObject",value:function(){var e=this.props.value;if(!e)return{province:w,city:w};var t=e.province,a=e.city;return{province:t||w,city:a||w}}},{key:"render",value:function(){var e=this.conversionObject(),t=e.province,a=e.city,n=this.props.loading;return d.a.createElement(h["a"],{spinning:n,wrapperClassName:O.a.row},d.a.createElement(f["a"],{className:O.a.item,value:t,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),d.a.createElement(f["a"],{className:O.a.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),a}(o["Component"]),M=Object(l["c"])((function(e){var t=e.accountAndsettings,a=e.loading,n=t.province,i=t.city;return{province:n,city:i,loading:a.models.accountAndsettings}}))(k),C=a("EdlB"),I=a.n(C),N=function(e){var t=e.value,a=e.onChange,n=["",""];return t&&(n=t.split("-")),d.a.createElement(d.a.Fragment,null,d.a.createElement(g["a"],{className:I.a.area_code,value:n[0],onChange:function(e){a&&a("".concat(e.target.value,"-").concat(n[1]))}}),d.a.createElement(g["a"],{className:I.a.phone_number,onChange:function(e){a&&a("".concat(n[0],"-").concat(e.target.value))},value:n[1]}))},S=N,A=a("YHME"),z=a.n(A),B=f["a"].Option,U=function(e){var t=e.avatar;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:z.a.avatar_title},d.a.createElement(l["a"],{id:"accountandsettings.basic.avatar",defaultMessage:"Avatar"})),d.a.createElement("div",{className:z.a.avatar},d.a.createElement("img",{src:t,alt:"avatar"})),d.a.createElement(v["a"],{showUploadList:!1},d.a.createElement("div",{className:z.a.button_view},d.a.createElement(b["a"],null,d.a.createElement(y["a"],null),d.a.createElement(l["a"],{id:"accountandsettings.basic.change-avatar",defaultMessage:"Change avatar"})))))},K=function(e,t,a){var n=t.province,i=t.city;n.key||a("Please input your province!"),i.key||a("Please input your city!"),a()},q=function(e,t,a){var n=t.split("-");n[0]||a("Please input your area code!"),n[1]||a("Please input your phone number!"),a()},D=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return e=t.call.apply(t,[this].concat(c)),e.view=void 0,e.getViewDom=function(t){e.view=t},e.handleFinish=function(){p["a"].success(Object(l["d"])({id:"accountandsettings.basic.update.success"}))},e}return Object(i["a"])(a,[{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e){if(e.avatar)return e.avatar;var t="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";return t}return""}},{key:"render",value:function(){var e=this.props.currentUser;return d.a.createElement("div",{className:z.a.baseView,ref:this.getViewDom},d.a.createElement("div",{className:z.a.left},d.a.createElement(m["a"],{layout:"vertical",onFinish:this.handleFinish,initialValues:e,hideRequiredMark:!0},d.a.createElement(m["a"].Item,{name:"email",label:Object(l["d"])({id:"accountandsettings.basic.email"}),rules:[{required:!0,message:Object(l["d"])({id:"accountandsettings.basic.email-message"},{})}]},d.a.createElement(g["a"],null)),d.a.createElement(m["a"].Item,{name:"name",label:Object(l["d"])({id:"accountandsettings.basic.nickname"}),rules:[{required:!0,message:Object(l["d"])({id:"accountandsettings.basic.nickname-message"},{})}]},d.a.createElement(g["a"],null)),d.a.createElement(m["a"].Item,{name:"profile",label:Object(l["d"])({id:"accountandsettings.basic.profile"}),rules:[{required:!0,message:Object(l["d"])({id:"accountandsettings.basic.profile-message"},{})}]},d.a.createElement(g["a"].TextArea,{placeholder:Object(l["d"])({id:"accountandsettings.basic.profile-placeholder"}),rows:4})),d.a.createElement(m["a"].Item,{name:"country",label:Object(l["d"])({id:"accountandsettings.basic.country"}),rules:[{required:!0,message:Object(l["d"])({id:"accountandsettings.basic.country-message"},{})}]},d.a.createElement(f["a"],{style:{maxWidth:220}},d.a.createElement(B,{value:"China"},"\u4e2d\u56fd"))),d.a.createElement(m["a"].Item,{name:"geographic",label:Object(l["d"])({id:"accountandsettings.basic.geographic"}),rules:[{required:!0,message:Object(l["d"])({id:"accountandsettings.basic.geographic-message"},{})},{validator:K}]},d.a.createElement(M,null)),d.a.createElement(m["a"].Item,{name:"address",label:Object(l["d"])({id:"accountandsettings.basic.address"}),rules:[{required:!0,message:Object(l["d"])({id:"accountandsettings.basic.address-message"},{})}]},d.a.createElement(g["a"],null)),d.a.createElement(m["a"].Item,{name:"phone",label:Object(l["d"])({id:"accountandsettings.basic.phone"}),rules:[{required:!0,message:Object(l["d"])({id:"accountandsettings.basic.phone-message"},{})},{validator:q}]},d.a.createElement(S,null)),d.a.createElement(m["a"].Item,null,d.a.createElement(b["a"],{htmlType:"submit",type:"primary"},d.a.createElement(l["a"],{id:"accountandsettings.basic.update",defaultMessage:"Update Information"}))))),d.a.createElement("div",{className:z.a.right},d.a.createElement(U,{avatar:this.getAvatarURL()})))}}]),a}(o["Component"]),_=Object(l["c"])((function(e){var t=e.accountAndsettings;return{currentUser:t.currentUser}}))(D),x=(a("Mwp2"),a("VXEj")),P=a("/wp/"),V=a("a1tJ"),F=a("UBYk"),L=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){return[{title:Object(l["d"])({id:"accountandsettings.binding.taobao"},{}),description:Object(l["d"])({id:"accountandsettings.binding.taobao-description"},{}),actions:[d.a.createElement("a",{key:"Bind"},d.a.createElement(l["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:d.a.createElement(P["a"],{className:"taobao"})},{title:Object(l["d"])({id:"accountandsettings.binding.alipay"},{}),description:Object(l["d"])({id:"accountandsettings.binding.alipay-description"},{}),actions:[d.a.createElement("a",{key:"Bind"},d.a.createElement(l["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:d.a.createElement(V["a"],{className:"alipay"})},{title:Object(l["d"])({id:"accountandsettings.binding.dingding"},{}),description:Object(l["d"])({id:"accountandsettings.binding.dingding-description"},{}),actions:[d.a.createElement("a",{key:"Bind"},d.a.createElement(l["a"],{id:"accountandsettings.binding.bind",defaultMessage:"Bind"}))],avatar:d.a.createElement(F["a"],{className:"dingding"})}]},e}return Object(i["a"])(a,[{key:"render",value:function(){return d.a.createElement(o["Fragment"],null,d.a.createElement(x["b"],{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return d.a.createElement(x["b"].Item,{actions:e.actions},d.a.createElement(x["b"].Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),W=L,R=(a("BoS7"),a("Sdc0")),T=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){var e=d.a.createElement(R["a"],{checkedChildren:Object(l["d"])({id:"accountandsettings.settings.open"}),unCheckedChildren:Object(l["d"])({id:"accountandsettings.settings.close"}),defaultChecked:!0});return[{title:Object(l["d"])({id:"accountandsettings.notification.password"},{}),description:Object(l["d"])({id:"accountandsettings.notification.password-description"},{}),actions:[e]},{title:Object(l["d"])({id:"accountandsettings.notification.messages"},{}),description:Object(l["d"])({id:"accountandsettings.notification.messages-description"},{}),actions:[e]},{title:Object(l["d"])({id:"accountandsettings.notification.todo"},{}),description:Object(l["d"])({id:"accountandsettings.notification.todo-description"},{}),actions:[e]}]},e}return Object(i["a"])(a,[{key:"render",value:function(){var e=this.getData();return d.a.createElement(o["Fragment"],null,d.a.createElement(x["b"],{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return d.a.createElement(x["b"].Item,{actions:e.actions},d.a.createElement(x["b"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),Y=T,H={strong:d.a.createElement("span",{className:"strong"},d.a.createElement(l["a"],{id:"accountandsettings.security.strong",defaultMessage:"Strong"})),medium:d.a.createElement("span",{className:"medium"},d.a.createElement(l["a"],{id:"accountandsettings.security.medium",defaultMessage:"Medium"})),weak:d.a.createElement("span",{className:"weak"},d.a.createElement(l["a"],{id:"accountandsettings.security.weak",defaultMessage:"Weak"}),"Weak")},J=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(n["a"])(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return e=t.call.apply(t,[this].concat(c)),e.getData=function(){return[{title:Object(l["d"])({id:"accountandsettings.security.password"},{}),description:d.a.createElement(d.a.Fragment,null,Object(l["d"])({id:"accountandsettings.security.password-description"}),"\uff1a",H.strong),actions:[d.a.createElement("a",{key:"Modify"},d.a.createElement(l["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(l["d"])({id:"accountandsettings.security.phone"},{}),description:"".concat(Object(l["d"])({id:"accountandsettings.security.phone-description"},{}),"\uff1a138****8293"),actions:[d.a.createElement("a",{key:"Modify"},d.a.createElement(l["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(l["d"])({id:"accountandsettings.security.question"},{}),description:Object(l["d"])({id:"accountandsettings.security.question-description"},{}),actions:[d.a.createElement("a",{key:"Set"},d.a.createElement(l["a"],{id:"accountandsettings.security.set",defaultMessage:"Set"}))]},{title:Object(l["d"])({id:"accountandsettings.security.email"},{}),description:"".concat(Object(l["d"])({id:"accountandsettings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[d.a.createElement("a",{key:"Modify"},d.a.createElement(l["a"],{id:"accountandsettings.security.modify",defaultMessage:"Modify"}))]},{title:Object(l["d"])({id:"accountandsettings.security.mfa"},{}),description:Object(l["d"])({id:"accountandsettings.security.mfa-description"},{}),actions:[d.a.createElement("a",{key:"bind"},d.a.createElement(l["a"],{id:"accountandsettings.security.bind",defaultMessage:"Bind"}))]}]},e}return Object(i["a"])(a,[{key:"render",value:function(){var e=this.getData();return d.a.createElement(d.a.Fragment,null,d.a.createElement(x["b"],{itemLayout:"horizontal",dataSource:e,renderItem:function(e){return d.a.createElement(x["b"].Item,{actions:e.actions},d.a.createElement(x["b"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(o["Component"]),X=J,Z=a("KWSo"),Q=a.n(Z),G=r["a"].Item,$=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(e){var i;Object(n["a"])(this,a),i=t.call(this,e),i.main=void 0,i.getMenu=function(){var e=i.state.menuMap;return Object.keys(e).map((function(t){return d.a.createElement(G,{key:t},e[t])}))},i.getRightTitle=function(){var e=i.state,t=e.selectKey,a=e.menuMap;return a[t]},i.selectKey=function(e){i.setState({selectKey:e})},i.resize=function(){i.main&&requestAnimationFrame((function(){if(i.main){var e="inline",t=i.main.offsetWidth;i.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),i.setState({mode:e})}}))},i.renderChildren=function(){var e=i.state.selectKey;switch(e){case"base":return d.a.createElement(_,null);case"security":return d.a.createElement(X,null);case"binding":return d.a.createElement(W,null);case"notification":return d.a.createElement(Y,null);default:break}return null};var c={base:d.a.createElement(l["a"],{id:"accountandsettings.menuMap.basic",defaultMessage:"Basic Settings"}),security:d.a.createElement(l["a"],{id:"accountandsettings.menuMap.security",defaultMessage:"Security Settings"}),binding:d.a.createElement(l["a"],{id:"accountandsettings.menuMap.binding",defaultMessage:"Account Binding"}),notification:d.a.createElement(l["a"],{id:"accountandsettings.menuMap.notification",defaultMessage:"New Message Notification"})};return i.state={mode:"inline",menuMap:c,selectKey:"base"},i}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"accountAndsettings/fetchCurrent"}),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props.currentUser;if(!t.userid)return"";var a=this.state,n=a.mode,i=a.selectKey;return d.a.createElement(u["b"],null,d.a.createElement("div",{className:Q.a.main,ref:function(t){t&&(e.main=t)}},d.a.createElement("div",{className:Q.a.leftMenu},d.a.createElement(r["a"],{mode:n,selectedKeys:[i],onClick:function(t){var a=t.key;return e.selectKey(a)}},this.getMenu())),d.a.createElement("div",{className:Q.a.right},d.a.createElement("div",{className:Q.a.title},this.getRightTitle()),this.renderChildren())))}}]),a}(o["Component"]);t["default"]=Object(l["c"])((function(e){var t=e.accountAndsettings;return{currentUser:t.currentUser}}))($)},YHME:function(e,t,a){e.exports={baseView:"antd-pro-pages-account-settings-components-base-view-baseView",left:"antd-pro-pages-account-settings-components-base-view-left",right:"antd-pro-pages-account-settings-components-base-view-right",avatar_title:"antd-pro-pages-account-settings-components-base-view-avatar_title",avatar:"antd-pro-pages-account-settings-components-base-view-avatar",button_view:"antd-pro-pages-account-settings-components-base-view-button_view"}},zPRt:function(e,t,a){e.exports={row:"antd-pro-pages-account-settings-components-geographic-view-row",item:"antd-pro-pages-account-settings-components-geographic-view-item"}}}]);