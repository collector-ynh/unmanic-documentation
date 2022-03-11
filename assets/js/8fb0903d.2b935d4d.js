"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[488],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5483:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),l=["components"],o={title:"Introduction to Writing Plugins",id:"introduction"},u=void 0,s={unversionedId:"development/writing_plugins/introduction",id:"development/writing_plugins/introduction",title:"Introduction to Writing Plugins",description:"Writing Plugins for Unmanic should be easy.",source:"@site/docs/development/writing_plugins/introduction.mdx",sourceDirName:"development/writing_plugins",slug:"/development/writing_plugins/introduction",permalink:"/docs/development/writing_plugins/introduction",tags:[],version:"current",frontMatter:{title:"Introduction to Writing Plugins",id:"introduction"},sidebar:"docs",previous:{title:"Plugin Development Overview",permalink:"/docs/development/developing_plugins"},next:{title:"Creating a New Plugin",permalink:"/docs/development/writing_plugins/creating_a_new_plugin"}},p={},d=[{value:"Directory Structure",id:"directory-structure",level:2},{value:"File: changelog.json",id:"file-changelogjson",level:4},{value:"File: info.json",id:"file-infojson",level:4},{value:"Example:",id:"example",level:5},{value:"File: plugin.py",id:"file-pluginpy",level:4},{value:"Plugin Module",id:"plugin-module",level:2},{value:"Runners",id:"runners",level:4},{value:"Example:",id:"example-1",level:5}],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Writing Plugins for Unmanic should be easy. "),(0,a.kt)("p",null,"All that is required to get started is a basic knowledge of writing\nPython scripts."),(0,a.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("p",null,"The directory structure of a Plugin should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"my_new_plugin\n\u251c\u2500\u2500 changelog.md\n\u251c\u2500\u2500 info.json\n\u2514\u2500\u2500 plugin.py\n")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"file-changelogjson"},"File: changelog.json"),(0,a.kt)("p",null,"This file should be used to record changes made to the Plugin."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"file-infojson"},"File: info.json"),(0,a.kt)("p",null,"A JSON file containing the metadata of your Plugin.\nThis JSON file should contain the following data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"id"))," - A string identifier for your Plugin. Should only contain lowercase ",(0,a.kt)("inlineCode",{parentName:"li"},"a-z")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," characters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"name"))," - A very short name for your Plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"author"))," - Your name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"version"))," - The version of your Plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"description"))," - A long description of your Plugin detailing what it does. To include line-breaks, insert a ",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"icon"))," - A URI to an image. If no icon is provided, the default Plugin icon will be used in the WebUI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"tags"))," - A comma separated list able to be used as keywords when searching for Plugins."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"compatibility"))," - A list of Unmanic Plugin Handler versions that this Plugin is compatible with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"priorities"))," - A dictionary of the initial priority that this Plugin's runners within the Plugin flow.")),(0,a.kt)("h5",{id:"example"},"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "reorder_subtitle_streams_by_language",\n    "name": "Re-order subtitle streams by language",\n    "author": "Josh.5",\n    "version": "0.0.1",\n    "description": "Specify a language tag for Unmanic to try and put as 1st subtitle track.\\n\\nIn the plugin settings, specify a \'Search String\'. The plugin will search the files to find matching subtitle tracks. The matching subtitle tracks will be moved to the 1st subtitle track position.\\n\\nExamples of search strings:\\n  - \'en\'\\n  - \'fr\'\\n  - \'de\'",\n    "icon": ""\n    "tags": "subtitle,ffmpeg,worker",\n    "compatibility": [\n        1\n    ],\n    "priorities": {\n        "on_library_management_file_test": 99,\n        "on_worker_process": 1\n    }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"file-pluginpy"},"File: plugin.py"),(0,a.kt)("p",null,"The main Pugin Python module."),(0,a.kt)("p",null,"This file will be imported and it's functions called byt he main Unmanic process."),(0,a.kt)("h2",{id:"plugin-module"},"Plugin Module"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.py")," file is a stand-alone Python module. From this module you may import other\nmodules as you see fit. There is no limitation on what may be executed within the\n",(0,a.kt)("a",{parentName:"p",href:"#runners"},(0,a.kt)("strong",{parentName:"a"},"runner")),"\nof your Plugin."),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"runners"},"Runners"),(0,a.kt)("p",null,"The Plugin module is made up of defined ",(0,a.kt)("strong",{parentName:"p"},"runner")," functions. A Plugin may include multiple\nrunner functions such that it is executed at multiple stages of the library optimisation process,\nhowever it is recommended that a Plugin carry out only a single task and therefore only include\na single runner function."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"data")," parameter is provided to the runner functions. This data parameter is a dictionary\nobject of information pertaining to that stage of the library optimisation process.\nWhatever data schema is provided to a Plugin runner must also be returned at the end of that\nfunction. During the function, that data may be manipulated as you see fit. However, a Plugin\nrunner may fail if data is removed from that data dictionary."),(0,a.kt)("p",null,"Plugins should be tested with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/plugin_manager_cli"},(0,a.kt)("strong",{parentName:"a"},"Plugin Manager CLI"))," before publishing changes to ensure\nthat the returned data matches the required schema for all included runner functions."),(0,a.kt)("h5",{id:"example-1"},"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def on_worker_process(data):\n    ...\n    return data\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Runner Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"on_library_management_file_test"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#library-management---file-test"},"LINK"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"on_worker_process"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#worker---processing-file"},"LINK"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"on_postprocessor_file_movement"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#post-processor---file-movements"},"LINK"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"on_postprocessor_task_results"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#post-processor---marking-task-successfailure"},"LINK"))))))}m.isMDXComponent=!0}}]);