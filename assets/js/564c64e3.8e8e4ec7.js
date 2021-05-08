(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(e,t,n){"use strict";var a=n(0),r=n(101);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},105:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(100),o=n(97),c=n(56),s=n.n(c);var l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,p=e.groupId,b=e.className,d=Object(i.a)(),v=d.tabGroupChoices,f=d.setTabGroupChoices,y=Object(a.useState)(c),h=y[0],O=y[1],g=a.Children.toArray(e.children),j=[];if(null!=p){var w=v[p];null!=w&&w!==h&&m.some((function(e){return e.value===w}))&&O(w)}var N=function(e){var t=e.currentTarget,n=j.indexOf(t),a=m[n].value;O(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,r,i,o,c,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case l:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},m.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},106:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(96)),o=n(105),c=n(106),s={title:"Installation via Python pip",description:"Unmanic Installation via Python pip",id:"pip"},l={unversionedId:"installation/pip",id:"installation/pip",isDocsHomePage:!1,title:"Installation via Python pip",description:"Unmanic Installation via Python pip",source:"@site/docs/installation/pip.mdx",sourceDirName:"installation",slug:"/installation/pip",permalink:"/docs/installation/pip",version:"current",frontMatter:{title:"Installation via Python pip",description:"Unmanic Installation via Python pip",id:"pip"},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/requirements"},next:{title:"Installation via Docker",permalink:"/docs/installation/docker"}},u=[{value:"Instructions",id:"instructions",children:[]},{value:"Running Unmanic",id:"running-unmanic",children:[]},{value:"Automatically starting Unmanic",id:"automatically-starting-unmanic",children:[]}],m={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"instructions"},"Instructions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install unmanic\n")),Object(i.b)("h2",{id:"running-unmanic"},"Running Unmanic"),Object(i.b)("p",null,"To run unmanic, simply run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"unmanic\n")),Object(i.b)("h2",{id:"automatically-starting-unmanic"},"Automatically starting Unmanic"),Object(i.b)("p",null,"You may wish to automatically start Unmanic when you PC starts."),Object(i.b)("p",null,"This can be achieved in a few ways:"),Object(i.b)(o.a,{defaultValue:"systemd",values:[{label:"Systemd",value:"systemd"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"systemd",mdxType:"TabItem"},Object(i.b)("p",null,"Run the following commands as root"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'mkdir -p \\\n/usr/local/lib/systemd/system \\\n/opt/unmanic\n\nchown -R nobody:video /opt/unmanic\n\ncat << EOF > /usr/local/lib/systemd/system/unmanic.service\n[Unit]\nDescription= Unmanic - Library Optimiser\nAfter=network-online.target\nStartLimitInterval=200\nStartLimitBurst=3\n\n[Service]\nType=simple\nUser=nobody\nGroup=video\nEnvironment="HOME_DIR=/opt/unmanic"\nWorkingDirectory=/opt/unmanic\nExecStart=/usr/local/bin/unmanic\nRestart=always\nRestartSec=30\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl enable unmanic.service\nsystemctl start unmanic.service\n')),Object(i.b)("p",null,"You can view the status of the running process with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"systemctl status unmanic.service\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This example runs unmanic as the user:group nobody:video.\nMake sure that your library is accessible by this group."),Object(i.b)("p",{parentName:"div"},"Alternatively, if you already have a user:group configured\nfor accessing your library, modify the above systemd unit with those details."))))))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}}]);