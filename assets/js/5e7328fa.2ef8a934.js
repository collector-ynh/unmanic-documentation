"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[137],{2579:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(7294),a=n(2600),i=n(9162),o=n(2014),s=n(4073),c=n(4267),u=n(5861),l=n(7757),f=n.n(l),p=n(2728),m=n(5376);p.kL.register(p.f$,p.WV,p.jn,p.od,p.Dx,p.u,p.Gu,p.De);var d="https://api.unmanic.app";var h=function(){var t=(0,r.useState)([]),e=t[0],n=t[1],a=(0,r.useState)([]),i=a[0],o=a[1],s=(0,r.useState)([]),c=s[0],l=s[1],p=(0,r.useState)([]),h=p[0],x=p[1];(0,r.useEffect)((function(){var t=function(){var t=(0,u.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d+"/api/stats/installations/time-series/month",{method:"GET"}).then((function(t){t.json().then((function(t){t.success&&n(t.data.results)}))})).catch((function(t){console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[d]),(0,r.useEffect)((function(){var t=function(){var t=(0,u.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d+"/api/stats/installations/time-series/month/filter/x86",{method:"GET"}).then((function(t){t.json().then((function(t){t.success&&o(t.data.results)}))})).catch((function(t){console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[d]),(0,r.useEffect)((function(){var t=function(){var t=(0,u.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d+"/api/stats/installations/time-series/month/filter/armv7l",{method:"GET"}).then((function(t){t.json().then((function(t){t.success&&l(t.data.results)}))})).catch((function(t){console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[d]),(0,r.useEffect)((function(){var t=function(){var t=(0,u.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d+"/api/stats/installations/time-series/month/filter/aarch64",{method:"GET"}).then((function(t){t.json().then((function(t){t.success&&x(t.data.results)}))})).catch((function(t){console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[d]);var v={labels:e.map((function(t){return new Date(t.year,t.month).toLocaleString("default",{month:"long"})})),datasets:[{label:"Armv7l",data:c.map((function(t){return t.count})),borderColor:"rgb(251,216,114)",backgroundColor:"rgb(251,216,114, 0.7)",fill:!0},{label:"Aarch64",data:h.map((function(t){return t.count})),borderColor:"rgb(0,157,110)",backgroundColor:"rgb(0,157,110, 0.7)",fill:!0},{label:"x86/x86_64",data:i.map((function(t){return t.count})),borderColor:"rgb(0,159,221)",backgroundColor:"rgb(0,159,221, 0.7)",fill:!0}]};return r.createElement(m.x1,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"New Installations"},filler:{propagate:!1},tooltip:{mode:"index"}},interaction:{mode:"nearest",axis:"x",intersect:!0},scales:{x:{title:{display:!0,text:"Month"}},y:{display:!0,title:{display:!0,text:"Installations"},type:"logarithmic",stacked:!0}}},data:v})};p.kL.register(p.uw,p.f$,p.ZL,p.Dx,p.u,p.De);var x="https://api.unmanic.app";var v=function(){var t=(0,r.useState)([]),e=t[0],n=t[1];(0,r.useEffect)((function(){var t=function(){var t=(0,u.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.unmanic.app/api/stats/installations/active-count/week/all",{method:"GET"}).then((function(t){t.json().then((function(t){t.success&&n(t.data["filter-os"])}))})).catch((function(t){console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[x]);var a={indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,plugins:{legend:{display:!1,position:"top"},title:{display:!0,text:"Active Installations This Week (by OS platform)"}},scales:{x:{display:!0,title:{display:!0,text:"Installations"},type:"logarithmic"},y:{display:!0}}},i={labels:e.map((function(t){return t.search})),datasets:[{label:"",data:e.map((function(t){return t.count})),borderColor:"rgb(0,159,221)",backgroundColor:"rgb(0,159,221, 0.7)"}]};return r.createElement(m.$Q,{options:a,data:i})};function b(){return r.createElement(a.Z,{title:"Unmanic Stats",description:"Unmanic is a simple tool for optimising your file library to a single, uniform format."},r.createElement(i.ZP,{container:!0,spacing:0},r.createElement(i.ZP,{item:!0,xs:12,md:6},r.createElement(o.Z,{maxWidth:"md"},r.createElement(s.Z,{sx:{minWidth:360}},r.createElement(c.Z,null,r.createElement(h,null))))),r.createElement(i.ZP,{item:!0,xs:12,md:6},r.createElement(o.Z,{maxWidth:"md"},r.createElement(s.Z,{sx:{minWidth:360}},r.createElement(c.Z,null,r.createElement(v,null)))))))}}}]);