(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"23Sy":function(e,t,a){e.exports={radar:"antd-pro-pages-dashboard-workplace-components-radar-index-radar",legend:"antd-pro-pages-dashboard-workplace-components-radar-index-legend",legendItem:"antd-pro-pages-dashboard-workplace-components-radar-index-legendItem",dot:"antd-pro-pages-dashboard-workplace-components-radar-index-dot"}},VuCS:function(e,t,a){"use strict";a.r(t);a("14J3");var n=a("BMrR"),r=(a("jCWc"),a("kPKH")),o=(a("IzEo"),a("bx4M")),c=(a("Mwp2"),a("VXEj")),l=a("1OyB"),i=a("vuIU"),d=a("Ji7U"),s=a("LK+K"),m=(a("aHsQ"),a("sGsY")),p=(a("Telt"),a("Tckk")),u=(a("cWXX"),a("/ezw")),h=a("q1tI"),g=a.n(h),v=a("55Ip"),f=a("9kvl"),E=a("Hx5s"),b=a("wd/R"),k=a.n(b),y=a("yP6+"),w=a("wx14");function C(e){var t=e.style;t.height="100%";var a=parseInt("".concat(getComputedStyle(e).height),10),n=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return a-n}function j(e){if(!e)return 0;var t=e,a=C(t),n=t.parentNode;return n&&(a=C(n)),a}function N(){return function(e){var t=function(t){Object(d["a"])(n,t);var a=Object(s["a"])(n);function n(){var e;Object(l["a"])(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=a.call.apply(a,[this].concat(r)),e.state={computedHeight:0},e.root=void 0,e.handleRoot=function(t){e.root=t},e}return Object(i["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e){var t=j(this.root);this.setState({computedHeight:t}),t<1&&(t=j(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,a=this.state.computedHeight,n=t||a;return g.a.createElement("div",{ref:this.handleRoot},n>0&&g.a.createElement(e,Object(w["a"])({},this.props,{height:n})))}}]),n}(g.a.Component);return t}}var x=N,A=a("23Sy"),I=a.n(A),L=function(e){Object(d["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={legendData:[]},e.chart=void 0,e.node=void 0,e.getG2Instance=function(t){e.chart=t},e.getLegendData=function(){if(e.chart){var t=e.chart.getAllGeoms()[0];if(t){var a=t.get("dataArray")||[],n=a.map((function(e){var t=e.map((function(e){return e._origin})),a={name:t[0].name,color:e[0].color,checked:!0,value:t.reduce((function(e,t){return e+t.value}),0)};return a}));e.setState({legendData:n})}}},e.handleRef=function(t){e.node=t},e.handleLegendClick=function(t,a){var n=t;n.checked=!n.checked;var r=e.state.legendData;r[a]=n;var o=r.filter((function(e){return e.checked})).map((function(e){return e.name}));e.chart&&(e.chart.filter("name",(function(e){return o.indexOf("".concat(e))>-1})),e.chart.repaint()),e.setState({legendData:r})},e}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){this.getLegendData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;t!==e.data&&this.getLegendData()}},{key:"render",value:function(){var e=this,t=["#1890FF","#FACC14","#2FC25B","#8543E0","#F04864","#13C2C2","#fa8c16","#a0d911"],a=this.props,o=a.data,c=void 0===o?[]:o,l=a.height,i=void 0===l?0:l,d=a.title,s=a.hasLegend,m=void 0!==s&&s,p=a.forceFit,u=void 0===p||p,h=a.tickCount,v=void 0===h?5:h,f=a.padding,E=void 0===f?[35,30,16,30]:f,b=a.animate,k=void 0===b||b,w=a.colors,C=void 0===w?t:w,j=this.state.legendData,N={value:{min:0,tickCount:v}},x=i-(m?80:22);return g.a.createElement("div",{className:I.a.radar,style:{height:i}},d&&g.a.createElement("h4",null,d),g.a.createElement(y["Chart"],{scale:N,height:x,forceFit:u,data:c,padding:E,animate:k,onGetG2Instance:this.getG2Instance},g.a.createElement(y["Tooltip"],null),g.a.createElement(y["Coord"],{type:"polar"}),g.a.createElement(y["Axis"],{name:"label",line:void 0,tickLine:void 0,grid:{lineStyle:{lineDash:void 0},hideFirstLine:!1}}),g.a.createElement(y["Axis"],{name:"value",grid:{type:"polygon",lineStyle:{lineDash:void 0}}}),g.a.createElement(y["Geom"],{type:"line",position:"label*value",color:["name",C],size:1}),g.a.createElement(y["Geom"],{type:"point",position:"label*value",color:["name",C],shape:"circle",size:3})),m&&g.a.createElement(n["a"],{className:I.a.legend},j.map((function(t,a){return g.a.createElement(r["a"],{span:24/j.length,key:t.name,onClick:function(){return e.handleLegendClick(t,a)}},g.a.createElement("div",{className:I.a.legendItem},g.a.createElement("p",null,g.a.createElement("span",{className:I.a.dot,style:{backgroundColor:t.checked?t.color:"#aaa"}}),g.a.createElement("span",null,t.name)),g.a.createElement("h6",null,t.value)))}))))}}]),a}(h["Component"]),O=x()(L),S=(a("+L6B"),a("2/Rp")),D=a("xvlK"),G=a("tzUB"),U=a.n(G),z=function(e){var t=e.links,a=e.linkElement,n=e.onAdd;return g.a.createElement("div",{className:U.a.linkGroup},t.map((function(e){return Object(h["createElement"])(a,{key:"linkGroup-item-".concat(e.id||e.title),to:e.href,href:e.href},e.title)})),g.a.createElement(S["a"],{size:"small",type:"primary",ghost:!0,onClick:n},g.a.createElement(D["a"],null)," \u6dfb\u52a0"))};z.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var B=z,T=a("ZiQ9"),H=a.n(T),F=[{title:"\u64cd\u4f5c\u4e00",href:""},{title:"\u64cd\u4f5c\u4e8c",href:""},{title:"\u64cd\u4f5c\u4e09",href:""},{title:"\u64cd\u4f5c\u56db",href:""},{title:"\u64cd\u4f5c\u4e94",href:""},{title:"\u64cd\u4f5c\u516d",href:""}],M=function(e){var t=e.currentUser,a=t&&Object.keys(t).length;return a?g.a.createElement("div",{className:H.a.pageHeaderContent},g.a.createElement("div",{className:H.a.avatar},g.a.createElement(p["a"],{size:"large",src:t.avatar})),g.a.createElement("div",{className:H.a.content},g.a.createElement("div",{className:H.a.contentTitle},"\u65e9\u5b89\uff0c",t.name,"\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01"),g.a.createElement("div",null,t.title," |",t.group))):g.a.createElement(u["a"],{avatar:!0,paragraph:{rows:1},active:!0})},R=function(){return g.a.createElement("div",{className:H.a.extraContent},g.a.createElement("div",{className:H.a.statItem},g.a.createElement(m["a"],{title:"\u9879\u76ee\u6570",value:56})),g.a.createElement("div",{className:H.a.statItem},g.a.createElement(m["a"],{title:"\u56e2\u961f\u5185\u6392\u540d",value:8,suffix:"/ 24"})),g.a.createElement("div",{className:H.a.statItem},g.a.createElement(m["a"],{title:"\u9879\u76ee\u8bbf\u95ee",value:2223})))},X=function(e){Object(d["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.renderActivities=function(e){var t=e.template.split(/@\{([^{}]*)\}/gi).map((function(t){return e[t]?g.a.createElement("a",{href:e[t].link,key:e[t].name},e[t].name):t}));return g.a.createElement(c["b"].Item,{key:e.id},g.a.createElement(c["b"].Item.Meta,{avatar:g.a.createElement(p["a"],{src:e.user.avatar}),title:g.a.createElement("span",null,g.a.createElement("a",{className:H.a.username},e.user.name),"\xa0",g.a.createElement("span",{className:H.a.event},t)),description:g.a.createElement("span",{className:H.a.datetime,title:e.updatedAt},k()(e.updatedAt).fromNow())}))},e}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndworkplace/init"})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndworkplace/clear"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.currentUser,l=t.activities,i=t.projectNotice,d=t.projectLoading,s=t.activitiesLoading,m=t.radarData;return a&&a.userid?g.a.createElement(E["c"],{content:g.a.createElement(M,{currentUser:a}),extraContent:g.a.createElement(R,null)},g.a.createElement(n["a"],{gutter:24},g.a.createElement(r["a"],{xl:16,lg:24,md:24,sm:24,xs:24},g.a.createElement(o["a"],{className:H.a.projectList,style:{marginBottom:24},title:"\u8fdb\u884c\u4e2d\u7684\u9879\u76ee",bordered:!1,extra:g.a.createElement(v["a"],{to:"/"},"\u5168\u90e8\u9879\u76ee"),loading:d,bodyStyle:{padding:0}},i.map((function(e){return g.a.createElement(o["a"].Grid,{className:H.a.projectGrid,key:e.id},g.a.createElement(o["a"],{bodyStyle:{padding:0},bordered:!1},g.a.createElement(o["a"].Meta,{title:g.a.createElement("div",{className:H.a.cardTitle},g.a.createElement(p["a"],{size:"small",src:e.logo}),g.a.createElement(v["a"],{to:e.href},e.title)),description:e.description}),g.a.createElement("div",{className:H.a.projectItemContent},g.a.createElement(v["a"],{to:e.memberLink},e.member||""),e.updatedAt&&g.a.createElement("span",{className:H.a.datetime,title:e.updatedAt},k()(e.updatedAt).fromNow()))))}))),g.a.createElement(o["a"],{bodyStyle:{padding:0},bordered:!1,className:H.a.activeCard,title:"\u52a8\u6001",loading:s},g.a.createElement(c["b"],{loading:s,renderItem:function(t){return e.renderActivities(t)},dataSource:l,className:H.a.activitiesList,size:"large"}))),g.a.createElement(r["a"],{xl:8,lg:24,md:24,sm:24,xs:24},g.a.createElement(o["a"],{style:{marginBottom:24},title:"\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a",bordered:!1,bodyStyle:{padding:0}},g.a.createElement(B,{onAdd:function(){},links:F,linkElement:v["a"]})),g.a.createElement(o["a"],{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:0===m.length},g.a.createElement("div",{className:H.a.chart},g.a.createElement(O,{hasLegend:!0,height:343,data:m}))),g.a.createElement(o["a"],{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56e2\u961f",loading:d},g.a.createElement("div",{className:H.a.members},g.a.createElement(n["a"],{gutter:48},i.map((function(e){return g.a.createElement(r["a"],{span:12,key:"members-item-".concat(e.id)},g.a.createElement(v["a"],{to:e.href},g.a.createElement(p["a"],{src:e.logo,size:"small"}),g.a.createElement("span",{className:H.a.member},e.member)))})))))))):null}}]),a}(h["Component"]);t["default"]=Object(f["c"])((function(e){var t=e.dashboardAndworkplace,a=t.currentUser,n=t.projectNotice,r=t.activities,o=t.radarData,c=e.loading;return{currentUser:a,projectNotice:n,activities:r,radarData:o,currentUserLoading:c.effects["dashboardAndworkplace/fetchUserCurrent"],projectLoading:c.effects["dashboardAndworkplace/fetchProjectNotice"],activitiesLoading:c.effects["dashboardAndworkplace/fetchActivitiesList"]}}))(X)},ZiQ9:function(e,t,a){e.exports={activitiesList:"antd-pro-pages-dashboard-workplace-style-activitiesList",username:"antd-pro-pages-dashboard-workplace-style-username",event:"antd-pro-pages-dashboard-workplace-style-event",pageHeaderContent:"antd-pro-pages-dashboard-workplace-style-pageHeaderContent",avatar:"antd-pro-pages-dashboard-workplace-style-avatar",content:"antd-pro-pages-dashboard-workplace-style-content",contentTitle:"antd-pro-pages-dashboard-workplace-style-contentTitle",extraContent:"antd-pro-pages-dashboard-workplace-style-extraContent",statItem:"antd-pro-pages-dashboard-workplace-style-statItem",members:"antd-pro-pages-dashboard-workplace-style-members",member:"antd-pro-pages-dashboard-workplace-style-member",projectList:"antd-pro-pages-dashboard-workplace-style-projectList",cardTitle:"antd-pro-pages-dashboard-workplace-style-cardTitle",projectGrid:"antd-pro-pages-dashboard-workplace-style-projectGrid",projectItemContent:"antd-pro-pages-dashboard-workplace-style-projectItemContent",datetime:"antd-pro-pages-dashboard-workplace-style-datetime",activeCard:"antd-pro-pages-dashboard-workplace-style-activeCard"}},tzUB:function(e,t,a){e.exports={linkGroup:"antd-pro-pages-dashboard-workplace-components-editable-link-group-index-linkGroup"}}}]);