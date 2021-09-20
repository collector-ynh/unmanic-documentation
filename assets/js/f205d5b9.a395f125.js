"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[653],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8764:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},s=void 0,c={unversionedId:"installation/unraid",id:"installation/unraid",isDocsHomePage:!1,title:"Installation on Unraid",description:"Unmanic Installation on Unraid",source:"@site/docs/installation/unraid.mdx",sourceDirName:"installation",slug:"/installation/unraid",permalink:"/docs/installation/unraid",version:"current",frontMatter:{title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},sidebar:"docs",previous:{title:"Installation via Docker",permalink:"/docs/installation/docker"},next:{title:"Installation on Synology",permalink:"/docs/installation/synology"}},d=[{value:"Video Guide:",id:"video-guide",children:[]},{value:"Instructions:",id:"instructions",children:[]},{value:"Some optional configuration steps:",id:"some-optional-configuration-steps",children:[{value:"Multiple libraries:",id:"multiple-libraries",children:[]},{value:"Nvidia GPU hardware encoding: DEPRECATED",id:"nvidia-gpu-hardware-encoding-deprecated",children:[]}]}],u={toc:d};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"video-guide"},"Video Guide:"),(0,r.kt)("figure",{class:"video-container"},(0,r.kt)("iframe",{width:"500",height:"285",src:"https://www.youtube.com/embed/ngqixJy6qr8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"1"})),(0,r.kt)("h2",{id:"instructions"},"Instructions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Docker"),' tab and scroll down to the bottom where it says "Template Repositories".'),(0,r.kt)("li",{parentName:"ol"},"Enter in a URL of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Josh5/unraid-docker-templates"},"https://github.com/Josh5/unraid-docker-templates"),' in the "Template repositories" field.'),(0,r.kt)("li",{parentName:"ol"},'Click on the "Save" button')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unraid Docker Templates",src:n(5661).Z,title:"unraid-docker-templates"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Scroll back to the bottom of the ",(0,r.kt)("strong",{parentName:"li"},"Docker"),' tab and then click on the "Add Container" button.'),(0,r.kt)("li",{parentName:"ol"},'Click on the "Template" drop-down menu and select the ',(0,r.kt)("em",{parentName:"li"},"unmanic")," template.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unraid Select Unmanic Templates",src:n(5433).Z,title:"unraid-select-unmanic-template"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Modify the WebUI variables as desired:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note:\nThe Encoding Cache Directory is where files are written while they are being transcoded.\nSetting this to /dev/shm/unmanic will cause the files to be written to a RAM tmpfs. Set this to whatever you like.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unraid Unmanic Templates Volumes",src:n(7180).Z,title:"unraid-unmanic-template-volumes"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},'Scroll to the bottom and click the "APPLY" button')),(0,r.kt)("p",null,"Once the image is downloaded you should see it appear in the ",(0,r.kt)("strong",{parentName:"p"},"Docker")," tab."),(0,r.kt)("h2",{id:"some-optional-configuration-steps"},"Some optional configuration steps:"),(0,r.kt)("h3",{id:"multiple-libraries"},"Multiple libraries:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unraid Unmanic Template Multiple Libraries",src:n(2477).Z,title:"unraid-unmanic-template-multiple-libraries"})),(0,r.kt)("h3",{id:"nvidia-gpu-hardware-encoding-deprecated"},"Nvidia GPU hardware encoding: ","[DEPRECATED]"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only use the below instructions if you are running Unraid version older than 6.9.0.\nMore recent versions of Unraid ship with NVIDIA drivers already installed."))),(0,r.kt)("p",null,"To use your NVIDIA GPU for hardware encoding in this container, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Unraid Nvidia Plugin to install a version of Unraid with the Nvidia Drivers installed.\n",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/77813-plugin-linuxserverio-unraid-nvidia/"},"Linuxserverio Unraid NVIDIA Plugin"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Toggle this Docker Container template editor to "Advanced View".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the "Extra Parameters" field, add "--runtime=nvidia".'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unraid NVIDIA Plugin",src:n(1578).Z,title:"unraid-nvidia-plugin_6.8"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Expand the template "Show more settings..." section near the bottom.'),(0,r.kt)("li",{parentName:"ol"},'In the "NVIDIA_VISIBLE_DEVICES" variable, copy your GPU UUID (can be found in the Unraid Nvidia Plugin. See that forum thread for details)')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unraid Unmanic Template NVIDIA GPU",src:n(3343).Z,title:"unraid-unmanic-template-nvidia-gpu"})),(0,r.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,r.kt)("strong",{parentName:"p"},"h264_nvenc")," and ",(0,r.kt)("strong",{parentName:"p"},"hvec_nvenc")," encoders."))}p.isMDXComponent=!0},5661:function(e,t,n){t.Z=n.p+"assets/images/unraid-docker-templates-42aba77f97844ea92c531eeb6b4f373b.png"},1578:function(e,t,n){t.Z=n.p+"assets/images/unraid-nvidia-plugin_6.8-da64a318fd36d8aa6910ec45acbcd2c0.png"},5433:function(e,t,n){t.Z=n.p+"assets/images/unraid-select-unmanic-template-304d9c9f7ff233f834c4d35693bc0d99.png"},2477:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-multiple-libraries-47a58e38e3fac055cbdef0d31380ce1e.png"},3343:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-nvidia-gpu-1f2d09896e31d11bb4a5ab75e4d13c58.png"},7180:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-volumes-aac0c1ede49256a5691ce087d45f89b1.png"}}]);