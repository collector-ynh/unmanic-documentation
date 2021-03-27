(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(0),i=n.n(a),o=n(95),s=n(96),c=n(78),l=n.n(c);function u({toc:e,isChild:t}){return e.length?i.a.createElement("ul",{className:t?"":"table-of-contents"},e.map((e=>i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),i.a.createElement(u,{isChild:!0,toc:e.children}))))):null}var p=function({toc:e}){return i.a.createElement("div",{className:Object(s.a)(l.a.tableOfContentsInline)},i.a.createElement(u,{toc:e}))};const b={title:"Plugin Runners",id:"plugin_runner_types"},m={unversionedId:"plugins/writing_plugins/plugin_runner_types",id:"plugins/writing_plugins/plugin_runner_types",isDocsHomePage:!1,title:"Plugin Runners",description:"This page outlines the various Plugin types and their",source:"@site/docs/plugins/writing_plugins/plugin_runner_types.mdx",slug:"/plugins/writing_plugins/plugin_runner_types",permalink:"/docs/plugins/writing_plugins/plugin_runner_types",version:"current",sidebar:"docs",previous:{title:"Accessing System Info",permalink:"/docs/plugins/writing_plugins/system_info"},next:{title:"Plugin Manager CLI",permalink:"/docs/plugins/plugin_manager_cli"}},d=[{value:"Worker - Processing file",id:"worker---processing-file",children:[]},{value:"Post-processor - File movements",id:"post-processor---file-movements",children:[]},{value:"Post-processor - Marking task success/failure",id:"post-processor---marking-task-successfailure",children:[]}],g={toc:d};function f({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page outlines the various Plugin types and their\n",Object(o.b)("a",{parentName:"p",href:"/docs/plugins/writing_plugins/introduction#runners"},Object(o.b)("strong",{parentName:"a"},"runners")),"."),Object(o.b)(p,{toc:d,mdxType:"TOCInline"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"worker---processing-file"},"Worker - Processing file"),Object(o.b)("h5",{id:"executed"},"Executed:"),Object(o.b)("p",null,"Just prior to the execution of the FFMPEG subprocess within a Unmanic Worker process."),Object(o.b)("h5",{id:"function"},"Function:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"on_worker_process(data)")),Object(o.b)("h5",{id:"provided-data"},"Provided data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"exec_ffmpeg"))," - Boolean, should Unmanic run FFMPEG with the data returned from this plugin."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"file_probe"))," - A dictionary object containing the current file probe state."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"ffmpeg_args"))," - A list of Unmanic's default FFMPEG args."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"file_in"))," - The source file to be processed by the FFMPEG command."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"file_out"))," - The destination that the FFMPEG command will output.")),Object(o.b)("h5",{id:"example"},"Example:"),Object(o.b)("details",null,Object(o.b)("summary",null,"plugin.py"),Object(o.b)("p",null,"For an up-to-date example, see the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/custom_ffmpeg_process/plugin.py"},"Example Plugins Repo")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'from unmanic.libs.unplugins.settings import PluginSettings\nfrom unmanic.libs.system import System\n\n\nclass Settings(PluginSettings):\n    """\n    An object to hold a dictionary of settings accessible to the Plugin\n    class and able to be configured by users from within the Unmanic WebUI.\n\n    This class has a number of methods available to it for accessing these settings:\n\n        > get_setting(<key>)            - Fetch a single setting value. Or leave the \n                                        key argument empty and return the full dictionary.\n        > set_setting(<key>, <value>)   - Set a singe setting value.\n                                        Used by the Unmanic WebUI to save user settings.\n                                        Settings are stored on disk in order to be persistent.\n\n    """\n    settings = {\n        "Execute FFMPEG": True,\n        "Insert string into cache file name": "custom-string"\n    }\n\n\ndef on_worker_process(data):\n    """\n    Runner function - carries out additional processing during the worker stages of a task.\n\n    The \'data\' object argument includes:\n        exec_ffmpeg             - Boolean, should Unmanic run FFMPEG with the data returned from this plugin.\n        file_probe              - A dictionary object containing the current file probe state.\n        ffmpeg_args             - A list of Unmanic\'s default FFMPEG args.\n        file_in                 - The source file to be processed by the FFMPEG command.\n        file_out                - The destination that the FFMPEG command will output.\n\n    :param data:\n    :return:\n    """\n    settings = Settings()\n    system = System()\n    system_info = system.info()\n\n    custom_string = settings.get_setting(\'Insert string into cache file name\')\n    if custom_string:\n        tmp_file_out = os.path.splitext(data[\'file_out\'])\n        data[\'file_out\'] = "{}-{}-{}{}".format(tmp_file_out[0], custom_string, tmp_file_out[1])\n\n    if not settings.get_setting(\'Execute FFMPEG\'):\n        data[\'exec_ffmpeg\'] = False\n\n        \n\n    return data\n'))),Object(o.b)("h5",{id:"details"},"Details:"),Object(o.b)("p",null,"This Plugin runner should be used for carrying any custom FFMpeg command execution stages.\nThe runner itself is only required to configure the parameters of the FFMpeg command execution.\nThe main Unmanic process will take the data dictionary returned from this runner and execute\nthe FFMpeg command within it's own shell."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"post-processor---file-movements"},"Post-processor - File movements"),Object(o.b)("h5",{id:"executed-1"},"Executed:"),Object(o.b)("p",null,"Just prior to file copy operation from cached output file to source file's directory."),Object(o.b)("h5",{id:"function-1"},"Function:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"on_postprocessor_file_movement(data)")),Object(o.b)("h5",{id:"provided-data-1"},"Provided data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"remove_source_file"))," - Boolean, should Unmanic remove the original source file after all copy operations are complete."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"copy_file"))," - Boolean, should Unmanic run a copy operation with the returned data variables."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"file_in"))," - The converted cache file to be copied by the postprocessor."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"file_out"))," - The destination file that the file will be copied to.")),Object(o.b)("h5",{id:"example-1"},"Example:"),Object(o.b)("details",null,Object(o.b)("summary",null,"plugin.py"),Object(o.b)("p",null,"For an up-to-date example, see the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/"},"Example Plugins Repo")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'def on_postprocessor_file_movement(data):\n    """\n    Runner function - configures additional postprocessor file movements during the postprocessor stage of a task.\n\n    The \'data\' object argument includes:\n        remove_source_file      - Boolean, should Unmanic remove the original source file after all copy operations are complete.\n        copy_file               - Boolean, should Unmanic run a copy operation with the returned data variables.\n        file_in                 - The converted cache file to be copied by the postprocessor.\n        file_out                - The destination file that the file will be copied to.\n\n    :param data:\n    :return:\n    """\n\n    return data\n'))),Object(o.b)("h5",{id:"details-1"},"Details:"),Object(o.b)("p",null,"This Plugin runner should be used for executing additional file movements of a completed task."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This Plugin runner is only executed on a successfully completed task."))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"post-processor---marking-task-successfailure"},"Post-processor - Marking task success/failure"),Object(o.b)("h5",{id:"executed-2"},"Executed:"),Object(o.b)("p",null,"Just prior to the task cache directory cleanup."),Object(o.b)("h5",{id:"function-2"},"Function:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"on_postprocessor_task_results(data)")),Object(o.b)("h5",{id:"provided-data-2"},"Provided data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"task_processing_success"))," - Boolean, did all task processes complete successfully."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"file_move_processes_success"))," - Boolean, did all postprocessor movement tasks complete successfully.")),Object(o.b)("h5",{id:"example-2"},"Example:"),Object(o.b)("details",null,Object(o.b)("summary",null,"plugin.py"),Object(o.b)("p",null,"For an up-to-date example, see the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/blob/examples/source/"},"Example Plugins Repo")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},'def on_postprocessor_task_results(data):\n    """\n    Runner function - provides a means for additional postprocessor functions based on the task success.\n\n    The \'data\' object argument includes:\n        task_processing_success         - Boolean, did all task processes complete successfully.\n        file_move_processes_success     - Boolean, did all postprocessor movement tasks complete successfully.\n\n    :param data:\n    :return:\n    """\n    return data\n'))))}f.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);