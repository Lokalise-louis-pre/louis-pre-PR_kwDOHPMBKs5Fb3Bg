"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6298],{"./src/components/Pagination/Pagination.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories,pagination:()=>pagination});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles_link=__webpack_require__("./src/utils/styles/link.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),Input=__webpack_require__("./src/components/Input/Input.tsx");const Container=styled_components_browser_esm.ZP.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`,Content=styled_components_browser_esm.ZP.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: ${(0,fontFamily.I)("default")};
`,InputWrapper=styled_components_browser_esm.ZP.div`
    width: 55px;
`,StyledInput=(0,styled_components_browser_esm.ZP)(Input.I)`
    min-width: 40px;
`,Text=styled_components_browser_esm.ZP.div`
    ${(0,typography.c)("description")};
    padding: ${(0,spacing.W)(2)};
    color: ${(0,color.$)("content.primary")};
`,ButtonWrapper=styled_components_browser_esm.ZP.div`
    visibility: hidden;

    ${(0,modifier.c)("visible",styled_components_browser_esm.iv`
            visibility: visible;
        `)}
`,Anchor=styled_components_browser_esm.ZP.button`
    ${(0,typography.c)("description")}
    ${styles_link.J};
    border: none;
    padding-left: ${(0,spacing.W)(2)};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const calculateCurrentPage=(offset,limit)=>Math.floor(offset/limit+1),calculateNewOffset=(newPage,limit)=>(newPage-1)*limit,selectOptions=[{value:25,label:25},{value:50,label:50},{value:100,label:100}],Pagination=_ref=>{let{limit,offset,total,onPaginationChange}=_ref;const[pageInputValue,setPageInputValue]=(0,react.useState)(1),pageCount=((total,limit)=>Math.ceil(total/limit))(total,limit),currentPage=calculateCurrentPage(offset,limit),selectValue=selectOptions.find((_ref2=>{let{value}=_ref2;return value===limit}));return(0,react.useEffect)((()=>{setPageInputValue(1)}),[limit,offset,total]),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(ButtonWrapper,{visible:currentPage>1,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",size:"md",onClick:()=>{currentPage<=1||onPaginationChange([currentPage-1,limit,calculateNewOffset(currentPage-1,limit)])},children:"← Prev"})}),(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:["Page ",currentPage," of ",pageCount||1,". Jump to page"]}),(0,jsx_runtime.jsx)(InputWrapper,{children:(0,jsx_runtime.jsx)(StyledInput,{"aria-label":"page number",type:"number",min:"1",error:!pageInputValue||pageCount<pageInputValue,max:`${pageCount}`,value:pageInputValue.toString(),onValueChange:value=>{setPageInputValue(parseInt(value,10))}})}),(0,jsx_runtime.jsx)(Anchor,{onClick:()=>{!pageInputValue||pageInputValue>pageCount||pageInputValue===currentPage||onPaginationChange([pageInputValue,limit,calculateNewOffset(pageInputValue,limit)])},children:"Go"}),(0,jsx_runtime.jsx)(Text,{children:"Show per page"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Select.P,{"aria-label":"page size",isSearchable:!1,value:selectValue,options:selectOptions,onChange:option=>{null!==option&&onPaginationChange([calculateCurrentPage(offset,option.value),option.value,offset])}})})]}),(0,jsx_runtime.jsx)(ButtonWrapper,{visible:currentPage<pageCount,children:(0,jsx_runtime.jsx)(Button.z,{appearance:"primary",variant:"outline",size:"md",onClick:()=>{currentPage+1>pageCount||onPaginationChange([currentPage+1,limit,calculateNewOffset(currentPage+1,limit)])},children:"Next →"})})]})};Pagination.displayName="Pagination",Pagination.displayName="Pagination";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{limit:{defaultValue:null,description:"Sets the maximum number of items to display per page.",name:"limit",required:!0,type:{name:"enum",value:[{value:"25"},{value:"50"},{value:"100"}]}},offset:{defaultValue:null,description:"Sets the current item offset, used to calculate which page should be displayed, can be a number ≥0 and <`total`.",name:"offset",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"Sets the total number of items.",name:"total",required:!0,type:{name:"number"}},onPaginationChange:{defaultValue:null,description:"Function executed when changing pages or changing the number of items displayed per page.",name:"onPaginationChange",required:!0,type:{name:"(pageData: [pageNo: number, limit: PageSize, offset: number]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const[_,updateArgs]=(0,hooks.D8)();return(0,esm.kt)(Pagination,_extends({},args,{onPaginationChange:([pageNo,limit,offset])=>{updateArgs({offset,limit})},mdxType:"Pagination"}))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Pagination",component:Pagination,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,esm.kt)("div",{style:{height:"130px"}},Story())],mdxType:"Meta"}),(0,esm.kt)("h1",{id:"pagination"},"Pagination"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"The pagination component is a way to navigate through long lists of data. It allows the user to select a specific page to view, and provides an easy way to move between pages."),(0,esm.kt)("p",null,"Pagination expects items to start counting at ",(0,esm.kt)("inlineCode",{parentName:"p"},"0")," (where the last item equals ",(0,esm.kt)("inlineCode",{parentName:"p"},"total - 1"),")."),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Pagination } from "@lokalise/louis";\n\nexport default () => (\n    <Pagination\n        total={100}\n        offset={0}\n        limit={25}\n        onPaginationChange={([pageNo, limit]) => ...}\n    />\n)\n')),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29260",target:"_blank"},"Figma Source File | Pagination"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Pagination,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Pagination",args:{offset:0,limit:25,total:100},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const pagination=Template.bind({});pagination.storyName="Pagination",pagination.args={offset:0,limit:25,total:100},pagination.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  return <Pagination {...args} onPaginationChange={([pageNo, limit, offset]) => {\n    updateArgs({\n      offset,\n      limit\n    });\n  }} />;\n}"}};const componentMeta={title:"Components/Pagination",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,esm.kt)("div",{style:{height:"130px"}},Story())],component:Pagination,includeStories:["pagination"]},mdxStoryNameToKey={Pagination:"pagination"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Pagination_stories=componentMeta,__namedExportsOrder=["Template","pagination"]},"./src/components/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts");const Container=styled_components_browser_esm.ZP.div`
    display: flex;
    gap: ${_ref=>{let{rowGap}=_ref;return(0,spacing.W)(rowGap)}} ${_ref2=>{let{columnGap}=_ref2;return(0,spacing.W)(columnGap)}};
    max-width: 100%;
    align-items: ${_ref3=>{let{alignItems}=_ref3;return alignItems}};
    justify-content: ${_ref4=>{let{justifyContent}=_ref4;return justifyContent}};
    flex-wrap: ${_ref5=>{let{flexWrap}=_ref5;return flexWrap}};
    flex-direction: ${_ref6=>{let{flexDirection}=_ref6;return flexDirection}};
    flex-basis: ${_ref7=>{let{basis}=_ref7;return basis}};
    flex-grow: ${_ref8=>{let{grow}=_ref8;return grow}};
    flex-shrink: ${_ref9=>{let{shrink}=_ref9;return shrink}};
    align-self: ${_ref10=>{let{alignSelf}=_ref10;return alignSelf}};
    ${(0,modifier.c)("inline",styled_components_browser_esm.iv`
            display: inline-flex;
        `)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,react.forwardRef)(((_ref,ref)=>{let{inline=!1,align="flex-start",justify="flex-start",wrap="wrap",direction="row",gap=0,children,as="div",...rest}=_ref;const rowGap="number"==typeof gap?gap:gap[0],columnGap="number"==typeof gap?gap:gap[1];return(0,jsx_runtime.jsx)(Container,{...rest,ref,inline,flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,as,rowGap,columnGap,children})}));Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{inline:{defaultValue:{value:"false"},description:"Toggles inline-flex.",name:"inline",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"flex-start"},description:"Sets align-items.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:{value:"flex-start"},description:"Sets justify-content.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"wrap"},description:"Sets flex-wrap.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"wrap"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},direction:{defaultValue:{value:"row"},description:"Sets flex-direction.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"row"'},{value:'"initial"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"Sets gap, or row-gap and column-gap, using theme spacing.",name:"gap",required:!1,type:{name:"SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels]"}},basis:{defaultValue:null,description:"Sets flex-basis when used as a child of another flex container.",name:"basis",required:!1,type:{name:"FlexBasis<string | number>"}},grow:{defaultValue:null,description:"Sets flex-grow when used as a child of another flex container.",name:"grow",required:!1,type:{name:"FlexGrow"}},shrink:{defaultValue:null,description:"Sets flex-shrink when used as a child of another flex container.",name:"shrink",required:!1,type:{name:"FlexShrink"}},alignSelf:{defaultValue:null,description:"Sets align-self when used as a child of another flex container.",name:"alignSelf",required:!1,type:{name:"AlignSelf"}},children:{defaultValue:null,description:"Renders any flex items in the flex container.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"Sets the HTML element to render for the flex container.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"li"'},{value:'"section"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./src/utils/theme/variants.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const variantColorStyles=styled_components_browser_esm.iv`
    ${(0,variants.o)("appearance",{primary:styled_components_browser_esm.iv`
            padding: 6px;
            font-size: 20px;

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("surface.primary100")};
                color: ${(0,color.$)("primary.500")};
            }

            // pressed
            &:active:not([disabled]),
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("primary.200")};
                color: ${(0,color.$)("primary.500")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.primary50")};
                color: ${(0,color.$)("primary.500")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.primary50")};
                    color: ${(0,color.$)("primary.500")};
                `)}
        `,secondary:styled_components_browser_esm.iv`
            padding: ${(0,spacing.W)(1)};
            font-size: 16px;
            color: ${(0,color.$)("content.secondary")};

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("border.secondary")};
                color: ${(0,color.$)("content.primary")};
            }

            // pressed
            &:active:not([disabled]),
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("border.primary")};
                color: ${(0,color.$)("content.primary")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.secondary")};
                color: ${(0,color.$)("content.primary")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.secondary")};
                    color: ${(0,color.$)("content.primary")};
                `)}
        `,verified:styled_components_browser_esm.iv`
            padding: ${(0,spacing.W)(1)};
            font-size: 16px;
            color: ${(0,color.$)("content.secondary")};

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("surface.yellow100")};
                color: ${(0,color.$)("content.primary")};
            }

            // pressed
            &:active:not([disabled]),
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("yellow.200")};
                color: ${(0,color.$)("content.primary")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.yellow100")};
                color: ${(0,color.$)("content.primary")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.yellow50")};
                    color: ${(0,color.$)("content.primary")};
                `)}
        `,reviewed:styled_components_browser_esm.iv`
            padding: ${(0,spacing.W)(1)};
            font-size: 16px;
            color: ${(0,color.$)("content.secondary")};

            // hover
            &:hover:not([disabled]) {
                background-color: ${(0,color.$)("surface.green100")};
                color: ${(0,color.$)("content.primary")};
            }

            // pressed
            &:active:not([disabled]),
            &:focus:active:not([disabled]) {
                background-color: ${(0,color.$)("green.200")};
                color: ${(0,color.$)("content.primary")};
            }

            // focus
            &:focus:not([disabled]) {
                background-color: ${(0,color.$)("surface.green100")};
                color: ${(0,color.$)("content.primary")};
            }

            // activated
            ${(0,modifier.c)("active",styled_components_browser_esm.iv`
                    background-color: ${(0,color.$)("surface.green50")};
                    color: ${(0,color.$)("content.primary")};
                `)}
        `})}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s)`
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    color: ${(0,color.$)("content.primary")};
    transition: background-color ${(0,transitionTime.Y)()}, color ${(0,transitionTime.Y)()};
    border: 0;
    border-radius: ${(0,radius.q)("md")};
    text-decoration: none;

    ${variantColorStyles}

    // disabled
    &:disabled {
        cursor: not-allowed;
        color: ${(0,color.$)("interactive.primary.disabled")};

        ${(0,modifier.c)("isLoading",styled_components_browser_esm.iv`
                color: initial;
                cursor: auto;
                ${variantColorStyles}
            `)}
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react.forwardRef)(((_ref,ref)=>{let{appearance="secondary",ariaLabel,loading=!1,children,...rest}=_ref;return(0,jsx_runtime.jsx)(Container,{ref,appearance,"aria-label":ariaLabel,isLoading:loading,disabled:"disabled"in rest&&rest.disabled||loading,...rest,children:loading?(0,jsx_runtime.jsx)(LoadingSign.X,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"}):children})}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"verified"'},{value:'"reviewed"'}]}},active:{defaultValue:null,description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Adds accessibility label.",name:"ariaLabel",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Displays Icon component in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react=__webpack_require__("./node_modules/react/index.js"),Close=__webpack_require__("./src/foundations/icons/Close.tsx"),useErrorId=__webpack_require__("./src/utils/hooks/useErrorId.ts"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),InputErrorMessage=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),inputStyle=__webpack_require__("./src/utils/styles/inputStyle.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx");const Container=styled_components_browser_esm.ZP.div`
    width: 100%;
    display: grid;
    gap: ${(0,spacing.W)(1)};
    grid-template-columns: minmax(50px, 1fr); /* This ensures Input doesn't overflow 100% */
`,StyledInput=styled_components_browser_esm.ZP.input`
    ${inputStyle.jR};

    border: 0;
    min-width: 50px;
    width: 100%;
    padding: 0;
    display: block;

    ${inputStyle.RP};
`,InputContainer=(styled_components_browser_esm.ZP.div`
    line-height: 1;
    font-size: 0;
`,(0,styled_components_browser_esm.ZP)(Flex.k)`
    ${inputStyle.NH};

    align-items: center;
    padding: ${(0,spacing.W)(0,3)};
    color: ${(0,color.$)("content.secondary")};

    &:focus-within,
    [data-dev-state='focus'] & {
        color: ${(0,color.$)("primary.500")};
    }

    // All items should preserve their width
    > * {
        flex-shrink: 0;
    }

    // Except input
    > ${StyledInput} {
        flex-shrink: 1;
    }

    ${(0,modifier.c)("hasPrefix",styled_components_browser_esm.iv`
            padding-left: ${(0,spacing.W)(2)};
        `)};

    ${(0,modifier.c)("hasSuffix",styled_components_browser_esm.iv`
            padding-right: ${(0,spacing.W)(2)};
        `)};
`);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isValueEmpty=value=>Array.isArray(value)?0===value.length:void 0===value||""===value,Input=(0,react.forwardRef)(((_ref,ref)=>{let{autoFocus=!1,clearable=!1,error=!1,disabled=!1,inputSize="default",prefix,suffix,onChange,onValueChange,value,...rest}=_ref;const localRef=(0,react.useRef)(null),errorId=(0,useErrorId.P)();return(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(InputContainer,{gap:1,wrap:"nowrap",hasPrefix:!!prefix,hasSuffix:clearable||!!suffix,disabled,error:!!error,onClick:()=>{localRef.current?.focus()},children:[prefix,(0,jsx_runtime.jsx)(StyledInput,{autoFocus,inputSize,ref:el=>{localRef.current=el,ref&&("current"in ref?ref.current=el:"function"==typeof ref&&ref(el))},onChange:event=>{onChange&&onChange(event),onValueChange&&onValueChange(event.target.value)},value,error:!!error,"aria-invalid":!!error,"aria-errormessage":errorId,disabled,...rest}),suffix,clearable&&!isValueEmpty(value)&&(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Clear value",disabled,onClick:()=>{localRef.current&&((element,value)=>{const{set:valueSetter}=Object.getOwnPropertyDescriptor(element,"value")||{},prototype=Object.getPrototypeOf(element),{set:prototypeValueSetter}=Object.getOwnPropertyDescriptor(prototype,"value")||{};if(prototypeValueSetter&&valueSetter!==prototypeValueSetter)prototypeValueSetter.call(element,value);else{if(!valueSetter)throw new Error("The given element does not have a value setter");valueSetter.call(element,value)}element.dispatchEvent(new Event("change",{bubbles:!0}))})(localRef.current,"")},children:(0,jsx_runtime.jsx)(Close.x,{})})]}),!!error&&"boolean"!=typeof error&&(0,jsx_runtime.jsx)(InputErrorMessage.f,{id:errorId,children:error})]})}));Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{clearable:{defaultValue:{value:"false"},description:"Toggles a clear button to empty the input.",name:"clearable",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"Renders a form validation `InputErrorMessage` when passed as `string | string[]`, or just applies error styling when `true`.",name:"error",required:!1,type:{name:"string | boolean | string[]"}},prefix:{defaultValue:null,description:"Renders text content and / or any HTML node on the left side of the input.",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"Renders text content and / or any HTML node on the right side of the input.",name:"suffix",required:!1,type:{name:"ReactNode"}},inputSize:{defaultValue:{value:"default"},description:"Controls height of input element.",name:"inputSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},onValueChange:{defaultValue:null,description:"**Deprecated:** use standard onChange instead.\n@deprecated",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>withLinkStyle});var _styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/color.ts"),_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/transitionTime.ts"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/fontFamily.ts");const withLinkStyle=_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
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
`}}]);
//# sourceMappingURL=components-Pagination-Pagination-stories-mdx.40cf9371.iframe.bundle.js.map