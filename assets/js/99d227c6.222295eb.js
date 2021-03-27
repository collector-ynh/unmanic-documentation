(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return o}));var r=t(3),a=(t(0),t(95));const i={title:"Plugin Manager CLI",id:"plugin_manager_cli"},l={unversionedId:"plugins/plugin_manager_cli",id:"plugins/plugin_manager_cli",isDocsHomePage:!1,title:"Plugin Manager CLI",description:"Unmanic has a built-in Plugin Manager CLI.",source:"@site/docs/plugins/plugin_manager_cli.mdx",slug:"/plugins/plugin_manager_cli",permalink:"/docs/plugins/plugin_manager_cli",version:"current",sidebar:"docs",previous:{title:"Plugin Runners",permalink:"/docs/plugins/writing_plugins/plugin_runner_types"},next:{title:"Hardware Acceleration - NVENC",permalink:"/docs/advanced/hardware_accelerated_encoding_nvenc"}},c=[],u={toc:c};function o({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Unmanic has a built-in ",Object(a.b)("strong",{parentName:"p"},"Plugin Manager CLI"),".\nTo access this, run:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"unmanic --manage_plugins\n")),Object(a.b)("p",null,"This will not run the main Unmanic service and may be run while already\nrunning the Unmanic service without any interference."),Object(a.b)("p",null,"You will be presented with the main menu"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ unmanic --manage_plugins\nStarting migrations\nThere is nothing to migrate\nUnmanicLogger - SETUP LOGGER\n[?] What would you like to do?: Test installed plugins\n > Test installed plugins\n   List installed plugins\n   Create new plugin\n   Exit\n")),Object(a.b)("p",null,"From here you may select on of the available options."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Option"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Test installed plugins"),Object(a.b)("td",{parentName:"tr",align:null},"Executes tests against all runners of all currently installed Plugins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"List installed plugins"),Object(a.b)("td",{parentName:"tr",align:null},"Lists all currently installed Plugins")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Create new plugin"),Object(a.b)("td",{parentName:"tr",align:null},"Executes a guided process to generate a new Plugin template")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Exit"),Object(a.b)("td",{parentName:"tr",align:null},"Exits the Plugin Manager CLI")))))}o.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),p=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=p(t),g=r,m=s["".concat(l,".").concat(g)]||s[g]||b[g]||i;return t?a.a.createElement(m,c(c({ref:n},o),{},{components:t})):a.a.createElement(m,c({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<i;o++)l[o]=t[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);