"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[7497],{"./src/components/Stats/Stats.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,alignRight:()=>alignRight,default:()=>Stats_stories,defaultStory:()=>defaultStory,linkToHref:()=>linkToHref});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),Link=__webpack_require__("./src/components/Link/Link.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts");const Container=styled_components_browser_esm.ZP.p`
    font-family: ${(0,fontFamily.I)("default")};
    margin: 0;
    display: grid;
    ${(0,modifier.c)("alignRight",styled_components_browser_esm.iv`
            text-align: right;
        `)}
`,Title=styled_components_browser_esm.ZP.span`
    ${(0,typography.c)("label")}
    color: ${(0,color.$)("content.secondary")};
    white-space: nowrap;
`,Value=styled_components_browser_esm.ZP.span`
    font-size: 20px;
    line-height: 22px;
    font-weight: 100;
    color: ${(0,color.$)("content.secondary")};
`,Percent=styled_components_browser_esm.ZP.span`
    font-size: 16px;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Stats=_ref=>{let{title,children,href,clickable=!1,alignRight=!1,percent=!1}=_ref;return(0,jsx_runtime.jsxs)(Container,{alignRight,children:[(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(Value,{children:(()=>{const value=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children,percent&&(0,jsx_runtime.jsx)(Percent,{children:"%"})]});return href?(0,jsx_runtime.jsx)(Link.r,{href,children:value}):clickable?(0,jsx_runtime.jsx)(Link.r,{children:value}):value})()})]})};Stats.displayName="Stats",Stats.displayName="Stats";try{Stats.displayName="Stats",Stats.__docgenInfo={description:"",displayName:"Stats",props:{title:{defaultValue:null,description:"Title of the stat.",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"Link to some place, render as clickable when an href is passed.",name:"href",required:!1,type:{name:"string"}},clickable:{defaultValue:{value:"false"},description:"Indicate the stat is clickable.",name:"clickable",required:!1,type:{name:"boolean"}},alignRight:{defaultValue:{value:"false"},description:"Align text to right.",name:"alignRight",required:!1,type:{name:"boolean"}},percent:{defaultValue:{value:"false"},description:"Renders a styled percentage sign after the passed content.",name:"percent",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Renders text content.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stats/Stats.tsx#Stats"]={docgenInfo:Stats.__docgenInfo,name:"Stats",path:"src/components/Stats/Stats.tsx#Stats"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>(0,esm.kt)(Stats,_extends({},args,{mdxType:"Stats"}));Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Stats",component:Stats,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,esm.kt)("div",{style:{padding:20}},Story())],mdxType:"Meta"}),(0,esm.kt)("h1",{id:"stats"},"Stats"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Stats is a component that can be used to show statistical information."),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Stats } from '@lokalise/louis';\n\nexport default () => (\n    <Stats title=\"Title\" href=\"https://link-to.some-place\" alignRight={false} percent={false}>\n        '100'\n    </Stats>\n);\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4028%3A25590",target:"_blank"},"Figma Source File | Stats"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Stats,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",{id:"default"},"Default"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Default",args:{title:"Some Information",href:void 0,alignRight:!1,percent:!0,children:"99"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"link-to-href"},"Link to Href"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Link to Href",args:{title:"Project",href:"https://github.com/lokalise/louis",alignRight:!1,percent:!1,children:"Louis"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"align-right"},"Align Right"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Align Right",args:{title:"Code coverage",href:void 0,alignRight:!0,percent:!0,children:"99.99"},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={title:"Some Information",href:void 0,alignRight:!1,percent:!0,children:"99"},defaultStory.parameters={storySource:{source:"args => <Stats {...args} />"}};const linkToHref=Template.bind({});linkToHref.storyName="Link to Href",linkToHref.args={title:"Project",href:"https://github.com/lokalise/louis",alignRight:!1,percent:!1,children:"Louis"},linkToHref.parameters={storySource:{source:"args => <Stats {...args} />"}};const alignRight=Template.bind({});alignRight.storyName="Align Right",alignRight.args={title:"Code coverage",href:void 0,alignRight:!0,percent:!0,children:"99.99"},alignRight.parameters={storySource:{source:"args => <Stats {...args} />"}};const componentMeta={title:"Components/Stats",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,esm.kt)("div",{style:{padding:20}},Story())],component:Stats,includeStories:["defaultStory","linkToHref","alignRight"]},mdxStoryNameToKey={Default:"defaultStory","Link to Href":"linkToHref","Align Right":"alignRight"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Stats_stories=componentMeta,__namedExportsOrder=["Template","defaultStory","linkToHref","alignRight"]},"./src/components/Link/Link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/styles/link.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/modifier.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/color.ts"),_Pressable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Pressable/index.tsx");const Link=(0,_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP)(_Pressable__WEBPACK_IMPORTED_MODULE_1__.s)`
    ${_utils_styles__WEBPACK_IMPORTED_MODULE_2__.J};

    ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.c)((_ref=>{let{href}=_ref;return!href}),_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
            &:disabled {
                cursor: not-allowed;
                color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.$)("content.disabled")};
            }
        `)}
`;Link.displayName="Link"},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
    cursor: pointer;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return(props=>void 0!==props.href)(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>withLinkStyle});var _styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts"),_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/transitionTime.ts"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/fontFamily.ts");const withLinkStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.idle")};
    transition: color ${(0,_theme__WEBPACK_IMPORTED_MODULE_2__.Y)()};
    background-color: transparent;
    padding: 0;
    border: none;
    font-family: ${(0,_theme__WEBPACK_IMPORTED_MODULE_3__.I)("default")};

    &:hover,
    &:focus {
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.hover")};
    }
    &:active {
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.pressed")};
    }
    &:active:hover {
        color: ${(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$)("interactive.primary.pressedHover")};
    }
`},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/modifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>modifier});const modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0},"./src/utils/theme/transitionTime.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>transitionTime});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const transitionTime=()=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>theme.transitionTime))},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))}}]);
//# sourceMappingURL=components-Stats-Stats-stories-mdx.591c64b8.iframe.bundle.js.map