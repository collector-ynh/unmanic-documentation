"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[40],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=n(2004),l=["components"],s={title:"Creating Your Own Repository",id:"creating_your_own_repo"},p=void 0,u={unversionedId:"development/plugin_repos/creating_your_own_repo",id:"development/plugin_repos/creating_your_own_repo",title:"Creating Your Own Repository",description:"If you wish to create your own custom repository, follow these steps.",source:"@site/docs/development/plugin_repos/creating_your_own_repo.mdx",sourceDirName:"development/plugin_repos",slug:"/development/plugin_repos/creating_your_own_repo",permalink:"/docs/development/plugin_repos/creating_your_own_repo",tags:[],version:"current",frontMatter:{title:"Creating Your Own Repository",id:"creating_your_own_repo"},sidebar:"docs",previous:{title:"Plugin Runners",permalink:"/docs/development/writing_plugins/plugin_runner_types"},next:{title:"Creating a Pull Request to the Official Repository",permalink:"/docs/development/plugin_repos/creating_a_pull_request"}},c={},m=[{value:"Video Guide:",id:"video-guide",level:2},{value:"Instructions:",id:"instructions",level:2},{value:"Fork the GitHub repo",id:"fork-the-github-repo",level:3},{value:"Configure a GitHub Token",id:"configure-a-github-token",level:3},{value:"Clone your fork",id:"clone-your-fork",level:3},{value:"Checkout the template",id:"checkout-the-template",level:3},{value:"Adding Plugin source to repo",id:"adding-plugin-source-to-repo",level:3},{value:"Cleanup branches",id:"cleanup-branches",level:3},{value:"Enable GitHub Actions",id:"enable-github-actions",level:3},{value:"Update repo docs",id:"update-repo-docs",level:3}],d={toc:m};function h(e){var t=e.components,s=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you wish to create your own custom repository, follow these steps."),(0,a.kt)("p",null,"Feel free to deviate and create a repo your own way.\nFollowing these steps will provide you with a repo that is able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatically build plugins"),(0,a.kt)("li",{parentName:"ul"},"Check that plugins are compatible for PRs to the official repo"),(0,a.kt)("li",{parentName:"ul"},"Provide you with the ability to easily create PRs by following ",(0,a.kt)("a",{parentName:"li",href:"./creating_a_pull_request"},"the next guide"))),(0,a.kt)("h2",{id:"video-guide"},"Video Guide:"),(0,a.kt)(i.Z,{url:"https://www.youtube.com/watch?v=n2dFCP5W5jA",light:!0,controls:!0,mdxType:"ReactPlayer"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"instructions"},"Instructions:"),(0,a.kt)("h3",{id:"fork-the-github-repo"},"Fork the GitHub repo"),(0,a.kt)("p",null,"Start by logging into your github account and navigating the browser to this URL:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins"},"https://github.com/Unmanic/unmanic-plugins")),(0,a.kt)("p",null,"Select the ",(0,a.kt)("strong",{parentName:"p"},"Fork")," button in the top right corner."),(0,a.kt)("img",{className:"screenshot",src:n(7852).Z}),(0,a.kt)("p",null,"Ensure that the repository is forked into your account."),(0,a.kt)("img",{className:"screenshot",src:n(9962).Z}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"configure-a-github-token"},"Configure a GitHub Token"),(0,a.kt)("p",null,"We will rely on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions"),' to test, build, commit and push our repo to the "',(0,a.kt)("em",{parentName:"p"},"repo"),'" branch of this git repository.'),(0,a.kt)("p",null,"In order for GitHub Action workflow to do this, we need to add a secret variable to our repo that contains a authorisation token for our GitHub account."),(0,a.kt)("p",null,"Follow the guide provided ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"here"),"\nto generate a personal access token. Note down that token as once you have generated it, you cannot see it again."),(0,a.kt)("p",null,"You will need to create a personal access token authorised for the following things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"repo (Full control of private repositories)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"repo:status"),(0,a.kt)("li",{parentName:"ul"},"repo_deployment"),(0,a.kt)("li",{parentName:"ul"},"public_repo"),(0,a.kt)("li",{parentName:"ul"},"repo:invite"),(0,a.kt)("li",{parentName:"ul"},"security_events")))),(0,a.kt)("img",{className:"screenshot",src:n(5487).Z}),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"These tokens are sensitive and contain the ability to access/modify your GitHub account.\nDon't go sharing this information with anyone."))),(0,a.kt)("p",null,"Once you have done that, open the settings tab on your fork repo."),(0,a.kt)("img",{className:"screenshot",src:n(7139).Z}),(0,a.kt)("p",null,"Then select ",(0,a.kt)("strong",{parentName:"p"},"Secrets")," and then ",(0,a.kt)("strong",{parentName:"p"},"New repository secret")),(0,a.kt)("img",{className:"screenshot",src:n(918).Z}),(0,a.kt)("p",null,'Enter the name as "',(0,a.kt)("strong",{parentName:"p"},"GH_TOKEN"),'" and then enter the value as the token you created following the steps in the link above.'),(0,a.kt)("img",{className:"screenshot",src:n(1243).Z}),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},"Add secret")," button."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"clone-your-fork"},"Clone your fork"),(0,a.kt)("p",null,"Clone the forked repository from your GitHub profile."),(0,a.kt)("img",{className:"screenshot",src:n(7806).Z}),(0,a.kt)("p",null,"Once you have cloned the repo, change directory to where you cloned it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd unmanic-plugins\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"checkout-the-template"},"Checkout the template"),(0,a.kt)("p",null,"Start by checking out the ",(0,a.kt)("em",{parentName:"p"},"template")," branch. This branch contains the basic setup required to get started..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout template\n")),(0,a.kt)("p",null,"Create a new branch called ",(0,a.kt)("em",{parentName:"p"},"master")," from the template branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout -b master\n")),(0,a.kt)("p",null,"If this is the first time you have cloned this branch it is recommended to push at this point."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only carry out this step if you have not pushed to ",(0,a.kt)("em",{parentName:"p"},"master")," before.\nThis will overwrite anything that already exists in your remote ",(0,a.kt)("em",{parentName:"p"},"master")," branch."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push -f origin master\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"adding-plugin-source-to-repo"},"Adding Plugin source to repo"),(0,a.kt)("p",null,"All Plugin source files are added under the ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," directory.\nThese should be added under a directory named the same as the Plugin ID."),(0,a.kt)("p",null,"Add the files to your source directory and commit."),(0,a.kt)("img",{className:"screenshot",src:n(9523).Z}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cleanup-branches"},"Cleanup branches"),(0,a.kt)("p",null,"You need to set your ",(0,a.kt)("em",{parentName:"p"},"master")," branch as the default branch on your GitHub Fork."),(0,a.kt)("p",null,"To do this, open your GitHub fork in a browser and navigate to the branches screen."),(0,a.kt)("img",{className:"screenshot",src:n(6505).Z}),(0,a.kt)("p",null,"Select the ",(0,a.kt)("strong",{parentName:"p"},"Switch default branch")," button."),(0,a.kt)("img",{className:"screenshot",src:n(4162).Z}),(0,a.kt)("p",null,"Select the ",(0,a.kt)("strong",{parentName:"p"},"Switch to another branch")," button. Select the ",(0,a.kt)("em",{parentName:"p"},"Master")," branch. Then click ",(0,a.kt)("strong",{parentName:"p"},"Update"),"."),(0,a.kt)("img",{className:"screenshot",src:n(173).Z}),(0,a.kt)("p",null,'Click the "',(0,a.kt)("em",{parentName:"p"},"I understand, update the default branch."),'" button.'),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enable-github-actions"},"Enable GitHub Actions"),(0,a.kt)("p",null,"GitHub Actions are not enabled by default on new repos. We must first enable it."),(0,a.kt)("p",null,"The Actions in this repository are managed by the file ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/plugin-checker.yml"),"."),(0,a.kt)("p",null,"Without enabling these GitHub Actions, your repository will not build when you push to the ",(0,a.kt)("em",{parentName:"p"},"master")," branch."),(0,a.kt)("img",{className:"screenshot",src:n(6695).Z}),(0,a.kt)("p",null,"Now that this is done, whenever you commit something on the ",(0,a.kt)("em",{parentName:"p"},"master")," branch and push back to GitHub, it will automatically build\nyour repository into the ",(0,a.kt)("em",{parentName:"p"},"repo")," branch, so long as you have configured your ",(0,a.kt)("a",{parentName:"p",href:"#configure-a-github-token"},"GitHub Token")," above."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"update-repo-docs"},"Update repo docs"),(0,a.kt)("p",null,"The last step is to update your repository docs so that they reflect your newly created repository."),(0,a.kt)("p",null,"Two things are required for this..."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update README.md file\nBy default, if you followed these steps, your README.md file will still be pointing to:\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://raw.githubusercontent.com/Unmanic/unmanic-plugins/repo/repo.json")),(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," file and modify it accordingly."),(0,a.kt)("p",{parentName:"li"},'For example, in the above URL, replace "',(0,a.kt)("em",{parentName:"p"},"Unmanic/unmanic-plugins"),'" with "',(0,a.kt)("em",{parentName:"p"},"JaneDoe/unmanic-plugins"),'".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create config file\nYou also need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file inside the root directory of your repo on the ",(0,a.kt)("em",{parentName:"p"},"master")," branch.\nIn this config.json file, add the following:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'{\n    "id": "repository.YOUR_NAME_NO_SPACES",\n    "name": "THE NAME OF YOUR REPO",\n    "icon": ""\n}\n')))),(0,a.kt)("p",null,"Once you have done this, commit the change and push it to the ",(0,a.kt)("em",{parentName:"p"},"master")," branch."),(0,a.kt)("p",null,"You are now all set to start using your own Unmanic Plugin Repository.\nYou can do this by ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/plugins/adding_a_custom_plugin_repo"},"Adding a Custom Repository")," in Unmanic's web interface."))}h.isMDXComponent=!0},5487:function(e,t,n){t.Z=n.p+"assets/images/github-generating-pat-6c09a1f4baae50d4fb83cf68a84fb6fa.png"},1243:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-add-repo-secret-git-repo-fork-2-9e5d64638dfbd24cb4133d141e0acbf1.png"},918:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-add-repo-secret-git-repo-fork-9778298e3120a135c6a92fa1882b1c91.png"},7806:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-clone-git-repo-fork-8a8eb47b5bf2fc33fd01ff1364eabae5.png"},9523:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-commit-plugin-to-git-repo-fork-7a9e5237f50e24844ca5e9a7f6ff8517.png"},9962:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-confirm-fork-git-repo-d9429cf21a71d95759628efffa411afc.png"},6695:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-enable-github-actions-git-repo-fork-d443851323aa3baf4809d0ee06fb8e94.png"},7852:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-fork-git-repo-6afb651c589f3e02de8d743a4d5e981f.png"},7139:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-settings-tab-git-repo-fork-0aecffcd42e91976990273b85ff27c21.png"},6505:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-show-branches-git-repo-fork-373208894241407c7696e2ef1e86427f.png"},4162:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-switch-default-branch-git-repo-fork-1-49567fe61ef2f8b594f6c28feb447ea8.png"},173:function(e,t,n){t.Z=n.p+"assets/images/unmanic-plugins-switch-default-branch-git-repo-fork-2-264cf9961a15b7cf95365a5410920074.png"}}]);