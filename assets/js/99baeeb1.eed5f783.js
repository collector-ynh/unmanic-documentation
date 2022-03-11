"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[816],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3117),a=t(7294),o=t(2389),i=t(9553),s=t(6010),l="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,A=(0,a.useState)(b),T=A[0],O=A[1],E=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=y[f];null!=x&&x!==T&&g.some((function(e){return e.value===x}))&&O(x)}var N=function(e){var n=e.currentTarget,t=E.indexOf(n),r=g[t].value;r!==T&&(P(n),O(r),null!=f&&w(f,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:N,onClick:N},o,{className:(0,s.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},7056:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=(t(9877),t(8215),["components"]),s={title:"Dashboard Pending Tasks",description:"Pending Tasks",id:"pending_tasks"},l=void 0,u={unversionedId:"dashboard/pending_tasks",id:"dashboard/pending_tasks",title:"Dashboard Pending Tasks",description:"Pending Tasks",source:"@site/docs/dashboard/pending_tasks.mdx",sourceDirName:"dashboard",slug:"/dashboard/pending_tasks",permalink:"/docs/dashboard/pending_tasks",tags:[],version:"current",frontMatter:{title:"Dashboard Pending Tasks",description:"Pending Tasks",id:"pending_tasks"},sidebar:"docs",previous:{title:"Installation on Synology",permalink:"/docs/installation/synology"},next:{title:"Dashboard Workers",permalink:"/docs/dashboard/workers"}},c={},d=[{value:"What are Pending Tasks",id:"what-are-pending-tasks",level:2},{value:"Managing Pending Tasks",id:"managing-pending-tasks",level:2}],p={toc:d};function f(e){var n=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("img",{className:"screenshot",src:t(8608).Z}),(0,o.kt)("h2",{id:"what-are-pending-tasks"},"What are Pending Tasks"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"task")," is generated whenever a file is discovered that requires processing by one or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/plugins/overview"},"plugins"),"."),(0,o.kt)("p",null,"The pending tasks are a list of file pointers that are currently awaiting to be picked up by the next available Worker."),(0,o.kt)("p",null,"Pending tasks are listed in order that they will be processed and limited to showing up to 10 tasks."),(0,o.kt)("h2",{id:"managing-pending-tasks"},"Managing Pending Tasks"),(0,o.kt)("p",null,"You will see more details regarding your pending tasks queue if you expand the card by clicking the ",(0,o.kt)("img",{className:"inline-text-screenshot",src:t(2172).Z,title:"Show more"})," button in the top-right corner."),(0,o.kt)("img",{className:"screenshot",src:t(8497).Z}),(0,o.kt)("p",null,"Once expanded you have the options to move a task to either the top or bottom of the list, or to remove the items from your pending tasks queue altogether."),(0,o.kt)("p",null,"From here you are also able to manually execute a scan of your library."))}f.isMDXComponent=!0},8497:function(e,n,t){n.Z=t.p+"assets/images/unmanic-dashboard-pending-tasks-expanded-1d0308c85c2dcee77075826eaa4d89b3.png"},8608:function(e,n,t){n.Z=t.p+"assets/images/unmanic-dashboard-pending-tasks-c877fcd2934d2139190c558613134ac2.png"},2172:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAIAAAChywxXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABYElEQVRYhWP8+vUrA30BE53tG7Vy1ErKAAvZOv////f/P7ogIyMTIyONrPz96uzaJdtufvqHaiuzgmdevDk/XlvJDVhWMZOQOB8NfmZCfqKelQwMDCwiRsGxPpoCpNpKWfJhEdE01xRmIs1Oiqz88eTQ8hUnXv1j4uHjJt6v5Fv548mh5Uv3P/zBLKQXmJyT5KNJbLySaSWSfQGxfjqCbMKGQbHeGnzEGEdOJkG3jxlikohRcCzjqdcEvcpIan2J3T5SAGkBS7l9+Kz8++TM4TtfkMsWqtiHz0qG369Or16y887X/1S1D6+VDAwMv16cXLVk190v36lnHwPBFPv/1/MTK2dcZvr65Sd17CNsJQMDw/9fX74wMHKqesRQwz4GolPs/x+Pzp5+8BWjfqShlQz/fz4/sXLxTtQ0TFsrGRgY/v96cXLV4u23PlNoK8mlD+VgZLTwRq0ctXLUysFnJQD4waNXIaKd+gAAAABJRU5ErkJggg=="}}]);