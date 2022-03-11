"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[139],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return p}});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=i.createContext({}),s=function(n){var e=i.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=s(n.components);return i.createElement(c.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),f=s(t),p=r,m=f["".concat(c,".").concat(p)]||f[p]||g[p]||o;return t?i.createElement(m,a(a({ref:e},l),{},{components:t})):i.createElement(m,a({ref:e},l))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=n,u.mdxType="string"==typeof n?n:r,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4462:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return g}});var i=t(3117),r=t(102),o=(t(7294),t(3905)),a=["components"],u={title:"Configuring Plugins",description:"Unmanic Configuration - Configuring Plugins",id:"configuring_plugins"},c=void 0,s={unversionedId:"configuration/plugins/configuring_plugins",id:"configuration/plugins/configuring_plugins",title:"Configuring Plugins",description:"Unmanic Configuration - Configuring Plugins",source:"@site/docs/configuration/plugins/configuring_plugins.mdx",sourceDirName:"configuration/plugins",slug:"/configuration/plugins/configuring_plugins",permalink:"/docs/configuration/plugins/configuring_plugins",tags:[],version:"current",frontMatter:{title:"Configuring Plugins",description:"Unmanic Configuration - Configuring Plugins",id:"configuring_plugins"},sidebar:"docs",previous:{title:"Adding a Custom Plugin Repository",permalink:"/docs/configuration/plugins/adding_a_custom_plugin_repo"},next:{title:"Link Settings",permalink:"/docs/configuration/link_settings"}},l={},g=[{value:"Global Config",id:"global-config",level:2},{value:"Library Config",id:"library-config",level:2}],f={toc:g};function p(n){var e=n.components,u=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Plugins may be configured either globally or per-library.\nThe configuration saved against a library overrides the configuration set globally.\nThis gives you the option to configure some plugins once for all libraries while tweaking others to suit the needs of\nthe libraries they are assigned to."),(0,o.kt)("h2",{id:"global-config"},"Global Config"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("strong",{parentName:"p"},"Plugins")," section of Unmanic's settings you will see the list of all currently installed plugins."),(0,o.kt)("img",{className:"screenshot",src:t(3327).Z}),(0,o.kt)("p",null,"Click the ",(0,o.kt)("img",{className:"inline-text-screenshot",src:t(798).Z,title:"Configure"})," button\nto open up the plugin's global configuration."),(0,o.kt)("h2",{id:"library-config"},"Library Config"),(0,o.kt)("p",null,"Under the ",(0,o.kt)("strong",{parentName:"p"},"Library")," section of Unmanic's settings, select the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/libraries/configure_libraries"},"library configuration")," for which you wish to modify a plugin's\nconfiguration."),(0,o.kt)("img",{className:"screenshot",src:t(7260).Z}),(0,o.kt)("p",null,"Click the ",(0,o.kt)("img",{className:"inline-text-screenshot",src:t(798).Z,title:"Configure"})," button\nto open up the plugin's library configuration."),(0,o.kt)("img",{className:"screenshot",src:t(6503).Z}),(0,o.kt)("p",null,"At the bottom you will have the option to reset the plugin's configuration back to the global configuration.\nThis action will remove the library's override settings for this plugin."))}p.isMDXComponent=!0},798:function(n,e,t){e.Z=t.p+"assets/images/unmanic-configure-icon-03d08e19ba2f312a66f3d75e5dfb3820.png"},6503:function(n,e,t){e.Z=t.p+"assets/images/unmanic-plugin-library-config-521c4374a351cda19528511e4a856abe.png"},7260:function(n,e,t){e.Z=t.p+"assets/images/unmanic-settings-library-configuration-plugins-added-745a10345e88fdee8892e2a30902a9c2.png"},3327:function(n,e,t){e.Z=t.p+"assets/images/unmanic-settings-plugins-68757c4057cf41340d4233e51a0fb6ce.png"}}]);