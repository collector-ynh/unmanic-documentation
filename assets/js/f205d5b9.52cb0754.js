(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},170:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unraid-docker-templates-42aba77f97844ea92c531eeb6b4f373b.png"},171:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unraid-select-unmanic-template-304d9c9f7ff233f834c4d35693bc0d99.png"},172:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unraid-unmanic-template-volumes-aac0c1ede49256a5691ce087d45f89b1.png"},173:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unraid-unmanic-template-multiple-libraries-47a58e38e3fac055cbdef0d31380ce1e.png"},174:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unraid-nvidia-plugin_6.8-da64a318fd36d8aa6910ec45acbcd2c0.png"},175:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/unraid-unmanic-template-nvidia-gpu-1f2d09896e31d11bb4a5ab75e4d13c58.png"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=(n(0),n(100));const r={title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},o={unversionedId:"installation/unraid",id:"installation/unraid",isDocsHomePage:!1,title:"Installation on Unraid",description:"Unmanic Installation on Unraid",source:"@site/docs/installation/unraid.mdx",sourceDirName:"installation",slug:"/installation/unraid",permalink:"/docs/installation/unraid",version:"current",frontMatter:{title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},sidebar:"docs",previous:{title:"Installation via Docker",permalink:"/docs/installation/docker"},next:{title:"General Settings",permalink:"/docs/configuration/overview_and_general_settings"}},l=[{value:"Video Guide:",id:"video-guide",children:[]},{value:"Instructions:",id:"instructions",children:[]},{value:"Some optional configuration steps:",id:"some-optional-configuration-steps",children:[{value:"Multiple libraries:",id:"multiple-libraries",children:[]},{value:"Nvidia GPU hardware encoding: DEPRECATED",id:"nvidia-gpu-hardware-encoding-deprecated",children:[]}]}],c={toc:l};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"video-guide"},"Video Guide:"),Object(i.b)("figure",{class:"video-container"},Object(i.b)("iframe",{width:"500",height:"285",src:"https://www.youtube.com/embed/ngqixJy6qr8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"1"})),Object(i.b)("h2",{id:"instructions"},"Instructions:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Navigate to the ",Object(i.b)("strong",{parentName:"li"},"Docker"),' tab and scroll down to the bottom where it says "Template Repositories".'),Object(i.b)("li",{parentName:"ol"},"Enter in a URL of ",Object(i.b)("a",{parentName:"li",href:"https://github.com/Josh5/unraid-docker-templates"},"https://github.com/Josh5/unraid-docker-templates"),' in the "Template repositories" field.'),Object(i.b)("li",{parentName:"ol"},'Click on the "Save" button')),Object(i.b)("p",null,Object(i.b)("img",{alt:"Unraid Docker Templates",src:n(170).default,title:"unraid-docker-templates"})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Scroll back to the bottom of the ",Object(i.b)("strong",{parentName:"li"},"Docker"),' tab and then click on the "Add Container" button.'),Object(i.b)("li",{parentName:"ol"},'Click on the "Template" drop-down menu and select the ',Object(i.b)("em",{parentName:"li"},"unmanic")," template.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Unraid Select Unmanic Templates",src:n(171).default,title:"unraid-select-unmanic-template"})),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Modify the WebUI variables as desired:")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note:\nThe Encoding Cache Directory is where files are written while they are being transcoded.\nSetting this to /dev/shm/unmanic will cause the files to be written to a RAM tmpfs. Set this to whatever you like.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Unraid Unmanic Templates Volumes",src:n(172).default,title:"unraid-unmanic-template-volumes"})),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},'Scroll to the bottom and click the "APPLY" button')),Object(i.b)("p",null,"Once the image is downloaded you should see it appear in the ",Object(i.b)("strong",{parentName:"p"},"Docker")," tab."),Object(i.b)("h2",{id:"some-optional-configuration-steps"},"Some optional configuration steps:"),Object(i.b)("h3",{id:"multiple-libraries"},"Multiple libraries:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Unraid Unmanic Template Multiple Libraries",src:n(173).default,title:"unraid-unmanic-template-multiple-libraries"})),Object(i.b)("h3",{id:"nvidia-gpu-hardware-encoding-deprecated"},"Nvidia GPU hardware encoding: ","[DEPRECATED]"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Only use the below instructions if you are not running Unraid >= 6.9.0.\nThe latest version of Unraid that ships with NVIDIA drivers already installed)"))),Object(i.b)("p",null,"To use your NVIDIA GPU for hardware encoding in this container, follow these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the Unraid Nvidia Plugin to install a version of Unraid with the Nvidia Drivers installed.\n",Object(i.b)("a",{parentName:"p",href:"https://forums.unraid.net/topic/77813-plugin-linuxserverio-unraid-nvidia/"},"Linuxserverio Unraid NVIDIA Plugin"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Toggle this Docker Container template editor to "Advanced View".')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'In the "Extra Parameters" field, add "--runtime=nvidia".'))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Unraid NVIDIA Plugin",src:n(174).default,title:"unraid-nvidia-plugin_6.8"})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},'Expand the template "Show more settings..." section near the bottom.'),Object(i.b)("li",{parentName:"ol"},'In the "NVIDIA_VISIBLE_DEVICES" variable, copy your GPU UUID (can be found in the Unraid Nvidia Plugin. See that forum thread for details)')),Object(i.b)("p",null,Object(i.b)("img",{alt:"Unraid Unmanic Template NVIDIA GPU",src:n(175).default,title:"unraid-unmanic-template-nvidia-gpu"})),Object(i.b)("p",null,"Once you have completed these steps, you should be able to use the ",Object(i.b)("strong",{parentName:"p"},"h264_nvenc")," and ",Object(i.b)("strong",{parentName:"p"},"hvec_nvenc")," encoders."))}s.isMDXComponent=!0}}]);