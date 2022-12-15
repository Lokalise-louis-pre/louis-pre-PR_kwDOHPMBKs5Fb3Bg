"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6513],{"./src/components/Table/Table.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories,table:()=>table});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts");const Container=styled_components_browser_esm.ZP.table`
    table-layout: fixed;
    width: 100%;
    border: none;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: ${(0,fontFamily.I)("default")};
`,HeaderCell=styled_components_browser_esm.ZP.th`
    ${(0,typography.c)("descriptionMedium")}
    text-align: left;
    border: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${(0,color.$)("border.secondary")};
    padding: ${(0,spacing.W)(2)};
`,Cell=styled_components_browser_esm.ZP.td`
    ${(0,typography.c)("description")}
    border: none;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${(0,color.$)("border.primary")};
    padding: ${(0,spacing.W)(2)};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Table=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(Container,{children})};Table.displayName="Table",Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const TableHeader=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)("thead",{children})};TableHeader.displayName="TableHeader";try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}const TableRow=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)("tr",{children})};TableRow.displayName="TableRow";try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}const TableHeaderCell=_ref=>{let{children,width,align,colSpan}=_ref;return(0,jsx_runtime.jsx)(HeaderCell,{colSpan,style:{width,textAlign:align},children})};TableHeaderCell.displayName="TableHeaderCell";try{TableHeaderCell.displayName="TableHeaderCell",TableHeaderCell.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{width:{defaultValue:null,description:"Sets the width of the table data cell element.",name:"width",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"Sets the colspan attribute on the table data cell element.",name:"colSpan",required:!1,type:{name:"number"}},align:{defaultValue:null,description:"Sets the text-align style for content in the table data cell element.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in a table data cell element.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeaderCell.tsx#TableHeaderCell"]={docgenInfo:TableHeaderCell.__docgenInfo,name:"TableHeaderCell",path:"src/components/Table/TableHeaderCell.tsx#TableHeaderCell"})}catch(__react_docgen_typescript_loader_error){}const TableBody=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)("tbody",{children})};TableBody.displayName="TableBody";try{TableBody.displayName="TableBody",TableBody.__docgenInfo={description:"",displayName:"TableBody",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:TableBody.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(__react_docgen_typescript_loader_error){}const TableCell=_ref=>{let{children,width,align,colSpan}=_ref;return(0,jsx_runtime.jsx)(Cell,{colSpan,style:{width,textAlign:align},children})};TableCell.displayName="TableCell";try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{width:{defaultValue:null,description:"Sets the width of the table data cell element.",name:"width",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"Sets the colspan attribute on the table data cell element.",name:"colSpan",required:!1,type:{name:"number"}},align:{defaultValue:null,description:"Sets the text-align style for content in the table data cell element.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in a table data cell element.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}const TableFooter=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)("tfoot",{children})};TableFooter.displayName="TableFooter";try{TableFooter.displayName="TableFooter",TableFooter.__docgenInfo={description:"",displayName:"TableFooter",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:TableFooter.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const{tableCellProps,tableHeaderCellProps,tableFooterCellProps,...restArgs}=args;return(0,esm.kt)(Table,{mdxType:"Table"},(0,esm.kt)(TableHeader,{mdxType:"TableHeader"},(0,esm.kt)(TableRow,{mdxType:"TableRow"},(0,esm.kt)(TableHeaderCell,_extends({},tableHeaderCellProps,{mdxType:"TableHeaderCell"}),"No."),(0,esm.kt)(TableHeaderCell,{mdxType:"TableHeaderCell"},"First Name"),(0,esm.kt)(TableHeaderCell,{mdxType:"TableHeaderCell"},"Last Name"))),(0,esm.kt)(TableBody,{mdxType:"TableBody"},(0,esm.kt)(TableRow,{mdxType:"TableRow"},(0,esm.kt)(TableCell,_extends({},tableCellProps,{mdxType:"TableCell"}),"1"),(0,esm.kt)(TableCell,_extends({},tableCellProps,{mdxType:"TableCell"}),"John"),(0,esm.kt)(TableCell,_extends({},tableCellProps,{mdxType:"TableCell"}),"Doe")),(0,esm.kt)(TableRow,{mdxType:"TableRow"},(0,esm.kt)(TableCell,_extends({},tableCellProps,{mdxType:"TableCell"}),"2"),(0,esm.kt)(TableCell,_extends({},tableCellProps,{mdxType:"TableCell"}),"Jane"),(0,esm.kt)(TableCell,_extends({},tableCellProps,{mdxType:"TableCell"}),"Doe"))),(0,esm.kt)(TableFooter,{mdxType:"TableFooter"},(0,esm.kt)(TableRow,{mdxType:"TableRow"},(0,esm.kt)(TableCell,_extends({},tableFooterCellProps,{mdxType:"TableCell"}),(0,esm.kt)("em",null,"Total: 2 people")))))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Table",component:Table,subcomponents:{TableHeader,TableHeaderCell,TableBody,TableFooter,TableRow,TableCell},parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0}}},mdxType:"Meta"}),(0,esm.kt)("h1",{id:"table"},"Table"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Table can be used to represent tabular data, comprised of rows and columns of cells containing data."),(0,esm.kt)("p",null,"Table exports 7 components:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Table"),": Main component which can contain a ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableHeader"),", ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableBody"),", ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableFooter"),", and one or more ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableRow")," and ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableCell"),"."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TableHeader"),": Renders a table header element."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TableHeaderCell"),": Renders a styled table cell element for use in a ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableHeader"),"."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TableBody"),": Renders a table body element."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TableFooter"),": Renders a table footer element."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TableRow"),": Renders a table row element."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TableCell"),": Renders a styled table cell element for use in a ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableBody")," or ",(0,esm.kt)("inlineCode",{parentName:"li"},"TableFooter"),".")),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Table, TableBody, TableRow, TableCell } from '@lokalise/louis';\n\nexport default () => (\n    <Table>\n        <TableBody>\n            <TableRow>\n                <TableCell>1</TableCell>\n                <TableCell>John</TableCell>\n                <TableCell>Doe</TableCell>\n            </TableRow>\n            <TableRow>\n                <TableCell>2</TableCell>\n                <TableCell>Jane</TableCell>\n                <TableCell>Doe</TableCell>\n            </TableRow>\n        </TableBody>\n    </Table>\n);\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4037%3A21036",target:"_blank"},"Figma Source File | Table"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Table,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Table",args:{tableHeaderCellProps:{colSpan:1,width:"50px",align:"left"},tableFooterCellProps:{colSpan:3,width:"auto",align:"right"},tableCellProps:{colSpan:1,width:"auto",align:"left"}},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const table=Template.bind({});table.storyName="Table",table.args={tableHeaderCellProps:{colSpan:1,width:"50px",align:"left"},tableFooterCellProps:{colSpan:3,width:"auto",align:"right"},tableCellProps:{colSpan:1,width:"auto",align:"left"}},table.parameters={storySource:{source:"args => {\n  const {\n    tableCellProps,\n    tableHeaderCellProps,\n    tableFooterCellProps,\n    ...restArgs\n  } = args;\n  return <Table>\n            <TableHeader>\n                <TableRow>\n                    <TableHeaderCell {...tableHeaderCellProps}>No.</TableHeaderCell>\n                    <TableHeaderCell>First Name</TableHeaderCell>\n                    <TableHeaderCell>Last Name</TableHeaderCell>\n                </TableRow>\n            </TableHeader>\n            <TableBody>\n                <TableRow>\n                    <TableCell {...tableCellProps}>1</TableCell>\n                    <TableCell {...tableCellProps}>John</TableCell>\n                    <TableCell {...tableCellProps}>Doe</TableCell>\n                </TableRow>\n                <TableRow>\n                    <TableCell {...tableCellProps}>2</TableCell>\n                    <TableCell {...tableCellProps}>Jane</TableCell>\n                    <TableCell {...tableCellProps}>Doe</TableCell>\n                </TableRow>\n            </TableBody>\n            <TableFooter>\n                <TableRow>\n                    <TableCell {...tableFooterCellProps}>\n                        <em>Total: 2 people</em>\n                    </TableCell>\n                </TableRow>\n            </TableFooter>\n        </Table>;\n}"}};const componentMeta={title:"Components/Table",parameters:{controls:{sort:"requiredFirst",exclude:["children"]},docs:{source:{excludeDecorators:!0}}},component:Table,subcomponents:{TableHeader,TableHeaderCell,TableBody,TableFooter,TableRow,TableCell},includeStories:["table"]},mdxStoryNameToKey={Table:"table"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Table_stories=componentMeta,__namedExportsOrder=["Template","table"]},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))}}]);
//# sourceMappingURL=components-Table-Table-stories-mdx.f00b9dd0.iframe.bundle.js.map