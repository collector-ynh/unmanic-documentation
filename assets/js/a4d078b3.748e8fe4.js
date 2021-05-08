(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,n,t){"use strict";var r=t(0),a=t(101);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},105:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(100),o=t(97),c=t(56),l=t.n(c);var s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,b=Object(i.a)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,h=Object(r.useState)(c),g=h[0],O=h[1],I=r.Children.toArray(e.children),N=[];if(null!=p){var _=f[p];null!=_&&_!==g&&d.some((function(e){return e.value===_}))&&O(_)}var j=function(e){var n=e.currentTarget,t=N.indexOf(n),r=d[t].value;O(r),null!=p&&(v(p,r),setTimeout((function(){var e,t,r,a,i,o,c,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,t>=0&&i<=s&&a<=c&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l.a.tabItemActive),setTimeout((function(){return n.classList.remove(l.a.tabItemActive)}),2e3))}),150))},y=function(e){var n,t;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null===(n=t)||void 0===n||n.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},d.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:y,onFocus:j,onClick:j},t)}))),n?Object(r.cloneElement)(I.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},I.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},106:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(96)),o=t(105),c=t(106),l={title:"Hardware Acceleration - NVENC",description:"Unmanic Installation - Hardware Acceleration - NVENC",id:"hardware_accelerated_encoding_nvenc"},s={unversionedId:"advanced/hardware_accelerated_encoding_nvenc",id:"advanced/hardware_accelerated_encoding_nvenc",isDocsHomePage:!1,title:"Hardware Acceleration - NVENC",description:"Unmanic Installation - Hardware Acceleration - NVENC",source:"@site/docs/advanced/hardware_accelerated_encoding_nvenc.mdx",sourceDirName:"advanced",slug:"/advanced/hardware_accelerated_encoding_nvenc",permalink:"/docs/advanced/hardware_accelerated_encoding_nvenc",version:"current",frontMatter:{title:"Hardware Acceleration - NVENC",description:"Unmanic Installation - Hardware Acceleration - NVENC",id:"hardware_accelerated_encoding_nvenc"},sidebar:"docs",previous:{title:"Plugin Manager CLI",permalink:"/docs/plugins/plugin_manager_cli"},next:{title:"Hardware Acceleration - VAAPI",permalink:"/docs/advanced/hardware_accelerated_encoding_vaapi"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Running Unmanic with support for NVENC",id:"running-unmanic-with-support-for-nvenc",children:[]},{value:"Enable NVENC in Unmanic Settings",id:"enable-nvenc-in-unmanic-settings",children:[]}],d={toc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Unmanic supports hardware acceleration (HWA) of video decoding using FFMpeg. FFMpeg and Unmanic can support multiple hardware acceleration implementations such as nVidia NVENC and MediaCodec through Video Acceleration API's."),Object(i.b)("p",null,"For more information on NVIDIA using ffmpeg official list, take a look ",Object(i.b)("a",{parentName:"p",href:"https://developer.nvidia.com/ffmpeg"},"here"),"."),Object(i.b)("p",null,"It is recommended to use the patched drivers ",Object(i.b)("a",{parentName:"p",href:"https://github.com/keylase/nvidia-patch"},"here")," as these will remove the restriction on maximum number of simultaneous NVENC video encoding sessions imposed by Nvidia to consumer-grade GPUs."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new"},"Here")," is the official list of NVIDIA Graphics Cards for supported codecs."),Object(i.b)("p",null,"To ensure you device is capible of running the NVENC encoders, run this command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'for i in encoders decoders filters; do     echo $i:; ffmpeg -hide_banner -${i} | egrep -i "npp|cuvid|nvenc|cuda|nvdec"; done\n')),Object(i.b)("p",null,"You should see a list of available encoders and decoders."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE:\nThe minimum required NVIDIA driver version is 418.30 for this to work in Linux.")),Object(i.b)("h2",{id:"running-unmanic-with-support-for-nvenc"},"Running Unmanic with support for NVENC"),Object(i.b)("p",null,"To enable NVENC, you will need to run Unmanic on a device that supports it."),Object(i.b)("p",null,"If you intend to use Unmanic inside a Docker container, you will also need to pass through the required devices to the container. "),Object(i.b)("p",null,"An example of this is shown below:"),Object(i.b)(o.a,{defaultValue:"docker_run",values:[{label:"Docker run",value:"docker_run"},{label:"Docker-compose",value:"docker_compose"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"docker_run",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  PUID=$(id -u)\n  PGID=$(id -g)\n\n  # CONFIG_DIR - Where you settings are saved\n  CONFIG_DIR=/config\n\n  # TZ - Your time zone\n  TZ=Pacific/Auckland\n\n  # LIBRARY_DIR - The location/locations of your library\n  LIBRARY_DIR=/library\n\n  # CACHE_DIR - A tmpfs or and folder for temporary conversion files\n  CACHE_DIR=/tmp/unmanic\n  \n  # NVIDIA_VISIBLE_DEVICES - The GPUs that will be accessible to the container\n  NVIDIA_VISIBLE_DEVICES=all\n\n  docker run -ti --rm \\\n      -e PUID=${PUID} \\\n      -e PGID=${PGID} \\\n      -e TZ=${TZ} \\\n      -e NVIDIA_VISIBLE_DEVICES=${NVIDIA_VISIBLE_DEVICES} \\\n      --runtime=nvidia \\\n      -p 8888:8888 \\\n      -v ${CONFIG_DIR}:/config \\\n      -v ${LIBRARY_DIR}:/library \\\n      -v ${CACHE_DIR}:/tmp/unmanic \\\n      josh5/unmanic:latest\n"))),Object(i.b)(c.a,{value:"docker_compose",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"  # Variables that will need to be changed:\n  #     <PUID>                            -  User id for folder/file permissions\n  #     <PGID>                            -  Group id for folder/file permissions\n  #     <TZ>                              -  Your time zone, eg - Pacific/Auckland\n  #     <NVIDIA_VISIBLE_DEVICES>          -  The GPUs that will be accessible to the container\n  #                                          Options: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/user-guide.html#gpu-enumeration\n  #     <PATH_TO_CONFIG>                  -  Path where Unmanic will store config files\n  #     <PATH_TO_LIBRARY>                 -  Path where you store the files that Unmanic will scan\n  #     <PATH_TO_ENCODE_CACHE>            -  Cache path for in-progress encoding tasks\n  #\n\n  ---\n  version: '2.4'\n  services:\n    unmanic:\n      container_name: unmanic\n      image: josh5/unmanic:latest\n      ports:\n        - 8888:8888\n      environment:\n        - PUID=<PUID>\n        - PGID=<PGID>\n        - TZ=<TZ>\n        - NVIDIA_VISIBLE_DEVICES=<NVIDIA_VISIBLE_DEVICES>\n      volumes:\n        - <PATH_TO_CONFIG>:/config\n        - <PATH_TO_LIBRARY>:/library\n        - <PATH_TO_ENCODE_CACHE>:/tmp/unmanic\n      runtime: nvidia       # For H/W transcoding using the NVENC encoder\n")))),Object(i.b)("h2",{id:"enable-nvenc-in-unmanic-settings"},"Enable NVENC in Unmanic Settings"),Object(i.b)("p",null,"To enable the NVENC FFMpeg encoder, you must select it in the Unmanic's settings. Follow these steps to do this."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Navigate to the ",Object(i.b)("strong",{parentName:"li"},"Video Encoding")," section of Unmanic's settings.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Josh5/unmanic/master/docs/images/settings-video-encoding.png",alt:"Video Encoding"})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select your target ",Object(i.b)("strong",{parentName:"p"},"Video Codec"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Then select the ",Object(i.b)("strong",{parentName:"p"},"Video Encoder"),' that ends with "_nvenc"')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"SUBMIT")))),Object(i.b)("p",null,"These changes will only affect any future added files. If you wish to apply this to the current Pending Tasks list, then restart Unmanic."))}p.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}}}]);