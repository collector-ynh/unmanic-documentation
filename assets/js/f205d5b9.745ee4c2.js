"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[653],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9845:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=n(2004),l=["components"],s={title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},c=void 0,d={unversionedId:"installation/unraid",id:"installation/unraid",isDocsHomePage:!1,title:"Installation on Unraid",description:"Unmanic Installation on Unraid",source:"@site/docs/installation/unraid.mdx",sourceDirName:"installation",slug:"/installation/unraid",permalink:"/docs/installation/unraid",tags:[],version:"current",frontMatter:{title:"Installation on Unraid",description:"Unmanic Installation on Unraid",id:"unraid"},sidebar:"docs",previous:{title:"Installation via Docker",permalink:"/docs/installation/docker"},next:{title:"Installation on Synology",permalink:"/docs/installation/synology"}},p=[{value:"Video Guide:",id:"video-guide",children:[],level:2},{value:"Instructions:",id:"instructions",children:[],level:2},{value:"Some optional configuration steps:",id:"some-optional-configuration-steps",children:[{value:"Multiple libraries:",id:"multiple-libraries",children:[],level:3},{value:"Nvidia GPU hardware encoding:",id:"nvidia-gpu-hardware-encoding",children:[],level:3},{value:"Intel hardware encoding:",id:"intel-hardware-encoding",children:[],level:3},{value:"AMD hardware encoding:",id:"amd-hardware-encoding",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"video-guide"},"Video Guide:"),(0,i.kt)(o.Z,{url:"https://www.youtube.com/watch?v=8_t_DJ6azkw",light:!0,controls:!0,mdxType:"ReactPlayer"}),(0,i.kt)("h2",{id:"instructions"},"Instructions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Docker"),' tab and scroll down to the bottom where it says "Template Repositories".'),(0,i.kt)("li",{parentName:"ol"},"Enter in a URL of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Josh5/unraid-docker-templates"},"https://github.com/Josh5/unraid-docker-templates"),' in the "Template repositories" field.'),(0,i.kt)("li",{parentName:"ol"},'Click on the "Save" button')),(0,i.kt)("img",{className:"screenshot",src:n(7334).Z}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Scroll back to the bottom of the ",(0,i.kt)("strong",{parentName:"li"},"Docker"),' tab and then click on the "Add Container" button.'),(0,i.kt)("li",{parentName:"ol"},'Click on the "Template" drop-down menu and select the ',(0,i.kt)("em",{parentName:"li"},"unmanic")," template.")),(0,i.kt)("img",{className:"screenshot",src:n(4280).Z}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Modify the WebUI variables as desired:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note:\nThe Encoding Cache Directory is where files are written while they are being transcoded.\nSetting this to /dev/shm/unmanic will cause the files to be written to a RAM tmpfs. Set this to whatever you like.")),(0,i.kt)("img",{className:"screenshot",src:n(3151).Z}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},'Scroll to the bottom and click the "APPLY" button')),(0,i.kt)("p",null,"Once the image is downloaded you should see it appear in the ",(0,i.kt)("strong",{parentName:"p"},"Docker")," tab."),(0,i.kt)("h2",{id:"some-optional-configuration-steps"},"Some optional configuration steps:"),(0,i.kt)("h3",{id:"multiple-libraries"},"Multiple libraries:"),(0,i.kt)("img",{className:"screenshot",src:n(6735).Z}),(0,i.kt)("h3",{id:"nvidia-gpu-hardware-encoding"},"Nvidia GPU hardware encoding:"),(0,i.kt)("p",null,"To use your NVIDIA GPU for hardware encoding in this container, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/98978-plugin-nvidia-driver/"},"Unraid Nvidia-Driver Plugin")," to install\nan up-to-date NVIDIA driver onto your Unraid server.")),(0,i.kt)("img",{className:"screenshot",src:n(6742).Z}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,i.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--runtime=nvidia".')),(0,i.kt)("img",{className:"screenshot",src:n(1978).Z}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},'Expand the template "Show more settings..." section near the bottom.'),(0,i.kt)("li",{parentName:"ol"},'In the "NVIDIA_VISIBLE_DEVICES" variable, copy your GPU UUID (can be found in the Unraid Nvidia Plugin. See that forum thread for details)')),(0,i.kt)("img",{className:"screenshot",src:n(1962).Z}),(0,i.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,i.kt)("strong",{parentName:"p"},"h264_nvenc")," and ",(0,i.kt)("strong",{parentName:"p"},"hvec_nvenc")," encoders."),(0,i.kt)("h3",{id:"intel-hardware-encoding"},"Intel hardware encoding:"),(0,i.kt)("p",null,"To use your INTEL Processor for hardware encoding in this container, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/92865-support-ich777-nvidiadvb-kernel-helperbuilder-docker/"},"Intel-GPU-TOP Plugin"),".")),(0,i.kt)("img",{className:"screenshot",src:n(4813).Z}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,i.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--device=/dev/dri".')),(0,i.kt)("img",{className:"screenshot",src:n(403).Z}),(0,i.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,i.kt)("strong",{parentName:"p"},"h264_vaapi")," and ",(0,i.kt)("strong",{parentName:"p"},"hevc_vaapi")," encoders."),(0,i.kt)("h3",{id:"amd-hardware-encoding"},"AMD hardware encoding:"),(0,i.kt)("p",null,"To use your AMD APU/GPU for hardware encoding in this container, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/92865-support-ich777-nvidiadvb-kernel-helperbuilder-docker/"},"Radeon-TOP Plugin"),".")),(0,i.kt)("img",{className:"screenshot",src:n(183).Z}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'Toggle this Docker Container template editor to "Advanced View".'),(0,i.kt)("li",{parentName:"ol"},'In the "Extra Parameters" field, add "--device=/dev/dri".')),(0,i.kt)("img",{className:"screenshot",src:n(403).Z}),(0,i.kt)("p",null,"Once you have completed these steps, you should be able to use the ",(0,i.kt)("strong",{parentName:"p"},"h264_vaapi")," and ",(0,i.kt)("strong",{parentName:"p"},"hevc_vaapi")," encoders."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ryzen APU transcode performance is heavily determined by the speed of your RAM."),(0,i.kt)("p",{parentName:"div"},"Setting RAM speed from 2400 to 3200 changed transcode times from around 10 minutes to around 5."),(0,i.kt)("p",{parentName:"div"},"Also, if you have the option in your BIOS, set your iGPU RAM to at least 1GB (So long as you can afford to subtract that from your available RAM)."))))}m.isMDXComponent=!0},7334:function(e,t,n){t.Z=n.p+"assets/images/unraid-docker-templates-42aba77f97844ea92c531eeb6b4f373b.png"},4813:function(e,t,n){t.Z=n.p+"assets/images/unraid-intel-top-plugin-acd4c754403b98dc07f404ff9fe358fa.png"},6742:function(e,t,n){t.Z=n.p+"assets/images/unraid-nvidia-plugin-d75086535837dc4ec96fe941f2c5755d.png"},183:function(e,t,n){t.Z=n.p+"assets/images/unraid-radeon-top-plugin-992fb707317c30e1c8ac6ceb1ea83fb7.png"},4280:function(e,t,n){t.Z=n.p+"assets/images/unraid-select-unmanic-template-304d9c9f7ff233f834c4d35693bc0d99.png"},403:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-dri-device-extra-params-6257d8d4514f09b0482358fbcfc1b6d9.png"},6735:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-multiple-libraries-47a58e38e3fac055cbdef0d31380ce1e.png"},1978:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-nvidia-extra-params-52b98423e5a527063baa11dd84161f87.png"},1962:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-nvidia-gpu-1f2d09896e31d11bb4a5ab75e4d13c58.png"},3151:function(e,t,n){t.Z=n.p+"assets/images/unraid-unmanic-template-volumes-aac0c1ede49256a5691ce087d45f89b1.png"}}]);