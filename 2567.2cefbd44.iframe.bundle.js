/*! For license information please see 2567.2cefbd44.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[2567],{"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var react=__webpack_require__("./node_modules/react/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),index_esm=__webpack_require__("./node_modules/react-resize-detector/build/index.esm.js"),useOnClickOutside=__webpack_require__("./src/utils/hooks/useOnClickOutside.ts"),Portal=__webpack_require__("./src/components/Portal/Portal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(Portal.h,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}const setRef=(value,ref)=>{"function"==typeof ref?ref(value):ref&&(ref.current=value)};var styles=__webpack_require__("./src/components/Popover/styles.ts");const isEventTriggeredInContainer=(e,container)=>!container||container.contains(e.currentTarget),getHandlers=(referenceElement,visible,setVisible,triggerEvent,delay)=>{if("hover"===triggerEvent){let timer;const delayVisibility=isVisible=>{isVisible&&(timer=setTimeout((()=>setVisible(!0)),250))},checktimer=()=>{timer&&clearTimeout(timer)},checkDelay=()=>{delay?delayVisibility(!0):setVisible(!0)};return{onPointerEnter:e=>{isEventTriggeredInContainer(e,referenceElement)&&checkDelay()},onPointerLeave:e=>{isEventTriggeredInContainer(e,referenceElement)&&setVisible(!1),checktimer()},onFocus:e=>isEventTriggeredInContainer(e,referenceElement)&&setVisible(!0),onBlur:()=>setVisible(!1)}}return{onClick:e=>{document.body.click(),e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onTouchStart:e=>{e.stopPropagation(),e.preventDefault(),setVisible(!visible)},onKeyDown:(isVisible=visible,onSetIsVisible=setVisible,e=>{"Tab"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Escape"===e.key&&(e.stopPropagation(),onSetIsVisible(!1)),"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),e.preventDefault(),onSetIsVisible(!isVisible))})};var isVisible,onSetIsVisible},Popover=_ref=>{let{placement="bottom",popoverContent,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},modifiers=[],offset,withArrow=!1,visibleCallback,showPopover=!0,forceVisible=!1,inPortal=!1,positioning="absolute",...rest}=_ref;const[visible,setVisible]=(0,react.useState)(forceVisible),[referenceElement,setReferenceElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),[arrowElement,setArrowElement]=(0,react.useState)(null),isComponentUnmounted=(0,react.useRef)(!1),popper=(0,usePopper.D)(referenceElement,popperElement,{strategy:positioning,placement,modifiers:[{name:"arrow",options:{element:arrowElement,padding:5}},{name:"offset",options:{offset:[0,withArrow?10:4*(offset??0)]}},...modifiers]});(0,react.useEffect)((()=>{forceVisible&&setVisible(!0)}),[forceVisible,setVisible]);const onClickOutside=(0,react.useCallback)((()=>{"hover"!==triggerEvent&&setVisible(!1)}),[triggerEvent]);(0,useOnClickOutside.t)(popperElement,onClickOutside),(0,react.useEffect)((()=>{visibleCallback&&visibleCallback(visible)}),[visible]);const updatePopper=(0,react.useCallback)((()=>{popper.update&&popper.update()}),[popper]),popperElementRefObject=(0,react.useRef)(popperElement);popperElementRefObject.current=popperElement,(0,index_esm.NB)({targetRef:popperElementRefObject,onResize:updatePopper});const maybeSetVisible=val=>isComponentUnmounted.current?void 0:setVisible(val);(0,react.useEffect)((()=>(isComponentUnmounted.current=!1,()=>{isComponentUnmounted.current=!0})));const getChildrenProps=(props,ref)=>{return{...props,ref:(newRef=setReferenceElement,parentRef=ref,el=>{setRef(el,newRef),parentRef&&setRef(el,parentRef)}),...getHandlers(referenceElement,visible,maybeSetVisible,triggerEvent,delay)};var newRef,parentRef};let clone=null;const resolvedChildren="function"==typeof children?children(visible):children;if("string"==typeof resolvedChildren||"number"==typeof children)clone=(0,jsx_runtime.jsx)("span",{...getChildrenProps(),children:resolvedChildren});else{if(!(0,react.isValidElement)(resolvedChildren))throw new Error("Should pass only single element as the child");clone=(0,react.cloneElement)(resolvedChildren,getChildrenProps(resolvedChildren.props,resolvedChildren.ref))}const contentElement="function"==typeof popoverContent?popoverContent(setVisible):popoverContent,popperPlacement=popper.attributes?.popper?.["data-popper-placement"]??"bottom";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,visible&&showPopover&&contentElement&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:setPopperElement,...popper.attributes.popper,style:popper.styles.popper,...rest,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),setVisible(!1))},children:[contentElement,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:setArrowElement,style:popper.styles.arrow,placement:popperPlacement})]})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},modifiers:{defaultValue:{value:"[]"},description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:{value:"false"},description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"false"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}},positioning:{defaultValue:{value:"absolute"},description:"Sets the positioning of the popover.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _utils_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/zIndex.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/theme/variants.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/radius.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/theme/fontFamily.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/theme/typography.ts");const bottom=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    top: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,top=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    bottom: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,left=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    right: -5px;

    &::before {
        border-right-width: 1px;
        border-right-style: solid;
        border-top-width: 1px;
        border-top-style: solid;
    }
`,right=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
    left: -5px;

    &::before {
        border-left-width: 1px;
        border-left-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
`,Arrow=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};

    &::before {
        position: absolute;
        width: 8px;
        height: 8px;
        z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("hide")};
        content: '';
        display: block;
        transform: rotate(45deg);
        background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
        border-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    }

    ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_3__.o)("placement",{top,bottom,left,right,"right-end":right,"right-start":right,"left-start":left,"auto-end":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"auto-start":_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,auto:_utils_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"bottom-end":bottom,"bottom-start":bottom,"left-end":left,"top-end":top,"top-start":top},"auto")}
`,Content=_utils_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    padding: 0;
    border-radius: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.q)("md")};
    background-color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("background.primary")};
    border: 1px solid ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("border.primary")};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.W)("popover")};
    color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.$)("content.primary")};
    font-family: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__.I)("default")};
    ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_6__.c)("description")};
`},"./src/components/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const useIsomorphicLayoutEffect=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect,Portal=_ref=>{let{children,containerRef,type="div"}=_ref;const isServer="undefined"==typeof window||"undefined"==typeof document,portalNode=(0,react.useMemo)((()=>isServer?null:document.createElement(type)),[isServer,type]);return portalNode&&(portalNode.className="louis-portal"),useIsomorphicLayoutEffect((()=>{if(isServer||!portalNode)return;const host=containerRef?.current||document.body;return host.appendChild(portalNode),()=>{host.contains(portalNode)&&host.removeChild(portalNode)}}),[containerRef,type,isServer]),!isServer&&portalNode?(0,react_dom.createPortal)(children,portalNode):null};Portal.displayName="Portal";try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"div"},description:"The DOM element type to render, default 'div'.",name:"type",required:!1,type:{name:"string"}},containerRef:{defaultValue:null,description:"Container element where the Portal will render. If not set the\nportal will be appended to the body of the component's owner document\n(typically this is the `document.body`).",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var react=__webpack_require__("./node_modules/react/index.js"),ActiveThemeContext=__webpack_require__("./src/components/ThemeProvider/ActiveThemeContext.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),md5=__webpack_require__("./node_modules/md5/md5.js"),md5_default=__webpack_require__.n(md5);const arraySum=array=>{let sum=0;for(let i=0,{length}=array;i<length;i+=1)sum+=array[i];return sum},hexdec=hexString=>{const newHexString=hexString.replace(/[^a-f0-9]/gi,"");return parseInt(newHexString,16)},dechex=number=>(number<0&&(number=4294967295+number+1),number.toString(16));function strPad(input,padLength,padString,padType){let half="";const strPadRepeater=(s,len)=>{let collect="";for(;collect.length<len;)collect+=s;return collect=collect.substr(0,len),collect};"STR_PAD_LEFT"!==padType&&"STR_PAD_RIGHT"!==padType&&"STR_PAD_BOTH"!==padType&&(padType="STR_PAD_RIGHT");const padToGo=padLength-input.length;return padToGo>0&&("STR_PAD_LEFT"===padType?input=strPadRepeater(padString,padToGo)+input:"STR_PAD_RIGHT"===padType?input+=strPadRepeater(padString,padToGo):"STR_PAD_BOTH"===padType&&(half=strPadRepeater(padString,Math.ceil(padToGo/2)),input=(input=half+input+half).substr(0,padLength))),input}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),oneLineEllipsis=__webpack_require__("./src/utils/styles/oneLineEllipsis.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),variants=__webpack_require__("./src/utils/theme/variants.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),modifier=__webpack_require__("./src/utils/theme/modifier.ts"),excludeProps=__webpack_require__("./src/utils/theme/excludeProps.ts");const baseStyle=styled_components_browser_esm.iv`
    ${oneLineEllipsis.i};
    box-sizing: border-box;
    ${(0,typography.c)("tags")};
    border-radius: ${(0,radius.q)("rounded")};
    border-width: 1px;
    border-style: solid;
    border-color: ${props=>props.color};
    max-width: max-content;
    width: min-content;
    line-height: 14px; // This is needed so the text appears centered
    height: 20px;
    padding: 2px ${(0,spacing.W)(2)};

    ${(0,variants.o)("variant",{solid:styled_components_browser_esm.iv`
            color: ${(0,color.$)("background.primary")};
            background-color: ${props=>props.color};
        `,outlined:styled_components_browser_esm.iv`
            color: ${props=>props.color};
            background-color: transparent;
        `})};

    ${(0,variants.o)("size",{default:styled_components_browser_esm.iv`
            line-height: 14px; // This is needed so the text appears centered
            height: 20px;
            padding: 2px ${(0,spacing.W)(2)};
        `,small:styled_components_browser_esm.iv`
            font-size: 10px;
            line-height: 1;
            padding: 1px 5px 2px;
            height: auto;
        `})};

    ${(0,modifier.c)("fullWidth",styled_components_browser_esm.iv`
            width: 100%;
            display: inline-block;
        `)}
`,SimpleTag=styled_components_browser_esm.ZP.div.withConfig({shouldForwardProp:(0,excludeProps.L)(["color"])})`
    ${baseStyle};
`,TagButton=styled_components_browser_esm.ZP.button.withConfig({shouldForwardProp:(0,excludeProps.L)(["color"])})`
    ${baseStyle};

    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tag=_ref=>{let{children,variant="solid",color,size="default",fullWidth=!1,onClick}=_ref;const text=react.Children.toArray(children).join(""),{activeTheme}=(0,react.useContext)(ActiveThemeContext.J),resolvedColor=(0,react.useMemo)((()=>color??function(value){let maxBrightness=190,minBrightness=50;const spec=3;arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(maxBrightness=255,minBrightness=150);const hash=md5_default()(value),colors=[0,0,0];for(let i=0;i<3;i+=1)colors[i]=Math.max(Math.round(hexdec(hash.substr(spec*i,spec))/hexdec(strPad("",spec,"F"))*255),minBrightness);if(minBrightness>0)for(;arraySum(colors)/3<minBrightness;)for(let i=0;i<3;i+=1)colors[i]+=10;if(maxBrightness<255)for(;arraySum(colors)/3>maxBrightness;)for(let i=0;i<3;i+=1)colors[i]-=10;let output="";for(let i=0;i<3;i+=1)output+=strPad(dechex(colors[i]),2,0,"STR_PAD_LEFT");return`#${output}`}(text,"dark"===activeTheme)),[color,text,activeTheme]),[tagEl,setTagEl]=(0,react.useState)(null),isTooltipShown=!!tagEl&&tagEl.scrollWidth>tagEl.clientWidth;return(0,jsx_runtime.jsx)(Tooltip.u,{popoverContent:children,showPopover:isTooltipShown,placement:"top",children:onClick?(0,jsx_runtime.jsx)(TagButton,{type:"button",color:resolvedColor,variant,size,fullWidth,onClick,ref:setTagEl,children}):(0,jsx_runtime.jsx)(SimpleTag,{color:resolvedColor,variant,size,fullWidth,ref:setTagEl,children})})};Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{children:{defaultValue:null,description:"Renders text inside the Tag. Only string and array of strings are allowed because content like `<Tag>{`one`}{`two`}</Tag>` is passed\nas an array of strings `['one', 'two']`. It is still valid case which is concatenated within the component.",name:"children",required:!0,type:{name:"string | string[]"}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the tag.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outlined"'}]}},color:{defaultValue:null,description:"Tag color can be set to any color. In case color is not provided color will be generated based on the passed text.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"default"},description:"Sets tag size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},onClick:{defaultValue:null,description:"Function that is executed when clicking on a Tag. Providing this will imply that tag should be a button.",name:"onClick",required:!1,type:{name:"(() => void)"}},fullWidth:{defaultValue:{value:"false"},description:"Makes Tag span 100% of the container width.",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),radius=__webpack_require__("./src/utils/theme/radius.ts"),zIndex=__webpack_require__("./src/utils/theme/zIndex.ts"),styles=__webpack_require__("./src/components/Popover/styles.ts");const Content=(0,styled_components_browser_esm.ZP)(styles.V)`
    font: ${(0,fontFamily.I)("default")};
    ${(0,typography.c)("caption2")};
    background-color: ${(0,color.$)("content.black")};
    color: ${(0,color.$)("content.white")};
    border-radius: ${(0,radius.q)("md")};
    padding: 3px 8px 4px;
    border-color: ${(0,color.$)("content.black")};
    z-index: ${(0,zIndex.W)("tooltip")};
`,Arrow=(0,styled_components_browser_esm.ZP)(styles.E)`
    &:before {
        background-color: ${(0,color.$)("content.black")};
        border-color: ${(0,color.$)("content.black")};
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=(0,react.forwardRef)(((_ref,ref)=>{let{children,showPopover=!0,popoverContent,delay=!0,...rest}=_ref;return(0,jsx_runtime.jsx)(Popover.J,{ref,...rest,showPopover,popoverContent,components:{Content,Arrow},delay,triggerEvent:"hover",withArrow:!0,children})}));Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"ReactChild | ((visible: boolean) => ReactChild)"}},placement:{defaultValue:null,description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},popoverContent:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"popoverContent",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},modifiers:{defaultValue:null,description:"Sets custom popperjs modifier objects: https://popper.js.org/docs/v2/modifiers/.",name:"modifiers",required:!1,type:{name:"Record<string, unknown>[]"}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},showPopover:{defaultValue:{value:"true"},description:"Toggles the visibility of the popover.",name:"showPopover",required:!1,type:{name:"boolean"}},forceVisible:{defaultValue:null,description:"Toggles whether the popover is visible without user interaction.",name:"forceVisible",required:!1,type:{name:"boolean"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},visibleCallback:{defaultValue:null,description:"Function executed when the visibility of the popover changes.",name:"visibleCallback",required:!1,type:{name:"((visible: boolean) => void)"}},delay:{defaultValue:{value:"true"},description:"Toggles delayed appearance of the popover when `triggerEvent` is 'hover'.",name:"delay",required:!1,type:{name:"boolean"}},positioning:{defaultValue:null,description:"Sets the positioning of the popover.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useOnClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useOnClickOutside=function(element,callback){let isActive=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=event=>{element&&!element.contains(event.target)&&callback?.(event)},container=element?.closest("reach-portal");return isActive&&(container?.addEventListener("click",listener),container?.addEventListener("touchstart",listener),document.addEventListener("click",listener),document.addEventListener("touchstart",listener)),()=>{container?.removeEventListener("click",listener),container?.removeEventListener("touchstart",listener),document.removeEventListener("click",listener),document.removeEventListener("touchstart",listener)}}),[element,callback,isActive])}},"./src/utils/styles/oneLineEllipsis.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>oneLineEllipsis});const oneLineEllipsis=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").iv`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/excludeProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>excludeProps});const excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop)},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/modifier.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>modifier});const modifier=(prop,trueCss)=>props=>("function"==typeof prop?prop(props):props[prop])?trueCss:void 0},"./src/utils/theme/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>radius});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const radius=radiusPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(radiusPath,theme.radii)))},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./src/utils/theme/variants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>variants});const variants=(prop,allVariants,fallback)=>props=>allVariants["function"==typeof prop?prop(props):props[prop]??fallback]},"./src/utils/theme/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>zIndex});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const zIndex=index=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(index,theme.zIndices)))},"./node_modules/charenc/charenc.js":module=>{var charenc={utf8:{stringToBytes:function(str){return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)))},bytesToString:function(bytes){return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)))}},bin:{stringToBytes:function(str){for(var bytes=[],i=0;i<str.length;i++)bytes.push(255&str.charCodeAt(i));return bytes},bytesToString:function(bytes){for(var str=[],i=0;i<bytes.length;i++)str.push(String.fromCharCode(bytes[i]));return str.join("")}}};module.exports=charenc},"./node_modules/crypt/crypt.js":module=>{var base64map,crypt;base64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",crypt={rotl:function(n,b){return n<<b|n>>>32-b},rotr:function(n,b){return n<<32-b|n>>>b},endian:function(n){if(n.constructor==Number)return 16711935&crypt.rotl(n,8)|4278255360&crypt.rotl(n,24);for(var i=0;i<n.length;i++)n[i]=crypt.endian(n[i]);return n},randomBytes:function(n){for(var bytes=[];n>0;n--)bytes.push(Math.floor(256*Math.random()));return bytes},bytesToWords:function(bytes){for(var words=[],i=0,b=0;i<bytes.length;i++,b+=8)words[b>>>5]|=bytes[i]<<24-b%32;return words},wordsToBytes:function(words){for(var bytes=[],b=0;b<32*words.length;b+=8)bytes.push(words[b>>>5]>>>24-b%32&255);return bytes},bytesToHex:function(bytes){for(var hex=[],i=0;i<bytes.length;i++)hex.push((bytes[i]>>>4).toString(16)),hex.push((15&bytes[i]).toString(16));return hex.join("")},hexToBytes:function(hex){for(var bytes=[],c=0;c<hex.length;c+=2)bytes.push(parseInt(hex.substr(c,2),16));return bytes},bytesToBase64:function(bytes){for(var base64=[],i=0;i<bytes.length;i+=3)for(var triplet=bytes[i]<<16|bytes[i+1]<<8|bytes[i+2],j=0;j<4;j++)8*i+6*j<=8*bytes.length?base64.push(base64map.charAt(triplet>>>6*(3-j)&63)):base64.push("=");return base64.join("")},base64ToBytes:function(base64){base64=base64.replace(/[^A-Z0-9+\/]/gi,"");for(var bytes=[],i=0,imod4=0;i<base64.length;imod4=++i%4)0!=imod4&&bytes.push((base64map.indexOf(base64.charAt(i-1))&Math.pow(2,-2*imod4+8)-1)<<2*imod4|base64map.indexOf(base64.charAt(i))>>>6-2*imod4);return bytes}},module.exports=crypt},"./node_modules/is-buffer/index.js":module=>{function isBuffer(obj){return!!obj.constructor&&"function"==typeof obj.constructor.isBuffer&&obj.constructor.isBuffer(obj)}module.exports=function(obj){return null!=obj&&(isBuffer(obj)||function isSlowBuffer(obj){return"function"==typeof obj.readFloatLE&&"function"==typeof obj.slice&&isBuffer(obj.slice(0,0))}(obj)||!!obj._isBuffer)}},"./node_modules/md5/md5.js":(module,__unused_webpack_exports,__webpack_require__)=>{var crypt,utf8,isBuffer,bin,md5;crypt=__webpack_require__("./node_modules/crypt/crypt.js"),utf8=__webpack_require__("./node_modules/charenc/charenc.js").utf8,isBuffer=__webpack_require__("./node_modules/is-buffer/index.js"),bin=__webpack_require__("./node_modules/charenc/charenc.js").bin,(md5=function(message,options){message.constructor==String?message=options&&"binary"===options.encoding?bin.stringToBytes(message):utf8.stringToBytes(message):isBuffer(message)?message=Array.prototype.slice.call(message,0):Array.isArray(message)||message.constructor===Uint8Array||(message=message.toString());for(var m=crypt.bytesToWords(message),l=8*message.length,a=1732584193,b=-271733879,c=-1732584194,d=271733878,i=0;i<m.length;i++)m[i]=16711935&(m[i]<<8|m[i]>>>24)|4278255360&(m[i]<<24|m[i]>>>8);m[l>>>5]|=128<<l%32,m[14+(l+64>>>9<<4)]=l;var FF=md5._ff,GG=md5._gg,HH=md5._hh,II=md5._ii;for(i=0;i<m.length;i+=16){var aa=a,bb=b,cc=c,dd=d;a=FF(a,b,c,d,m[i+0],7,-680876936),d=FF(d,a,b,c,m[i+1],12,-389564586),c=FF(c,d,a,b,m[i+2],17,606105819),b=FF(b,c,d,a,m[i+3],22,-1044525330),a=FF(a,b,c,d,m[i+4],7,-176418897),d=FF(d,a,b,c,m[i+5],12,1200080426),c=FF(c,d,a,b,m[i+6],17,-1473231341),b=FF(b,c,d,a,m[i+7],22,-45705983),a=FF(a,b,c,d,m[i+8],7,1770035416),d=FF(d,a,b,c,m[i+9],12,-1958414417),c=FF(c,d,a,b,m[i+10],17,-42063),b=FF(b,c,d,a,m[i+11],22,-1990404162),a=FF(a,b,c,d,m[i+12],7,1804603682),d=FF(d,a,b,c,m[i+13],12,-40341101),c=FF(c,d,a,b,m[i+14],17,-1502002290),a=GG(a,b=FF(b,c,d,a,m[i+15],22,1236535329),c,d,m[i+1],5,-165796510),d=GG(d,a,b,c,m[i+6],9,-1069501632),c=GG(c,d,a,b,m[i+11],14,643717713),b=GG(b,c,d,a,m[i+0],20,-373897302),a=GG(a,b,c,d,m[i+5],5,-701558691),d=GG(d,a,b,c,m[i+10],9,38016083),c=GG(c,d,a,b,m[i+15],14,-660478335),b=GG(b,c,d,a,m[i+4],20,-405537848),a=GG(a,b,c,d,m[i+9],5,568446438),d=GG(d,a,b,c,m[i+14],9,-1019803690),c=GG(c,d,a,b,m[i+3],14,-187363961),b=GG(b,c,d,a,m[i+8],20,1163531501),a=GG(a,b,c,d,m[i+13],5,-1444681467),d=GG(d,a,b,c,m[i+2],9,-51403784),c=GG(c,d,a,b,m[i+7],14,1735328473),a=HH(a,b=GG(b,c,d,a,m[i+12],20,-1926607734),c,d,m[i+5],4,-378558),d=HH(d,a,b,c,m[i+8],11,-2022574463),c=HH(c,d,a,b,m[i+11],16,1839030562),b=HH(b,c,d,a,m[i+14],23,-35309556),a=HH(a,b,c,d,m[i+1],4,-1530992060),d=HH(d,a,b,c,m[i+4],11,1272893353),c=HH(c,d,a,b,m[i+7],16,-155497632),b=HH(b,c,d,a,m[i+10],23,-1094730640),a=HH(a,b,c,d,m[i+13],4,681279174),d=HH(d,a,b,c,m[i+0],11,-358537222),c=HH(c,d,a,b,m[i+3],16,-722521979),b=HH(b,c,d,a,m[i+6],23,76029189),a=HH(a,b,c,d,m[i+9],4,-640364487),d=HH(d,a,b,c,m[i+12],11,-421815835),c=HH(c,d,a,b,m[i+15],16,530742520),a=II(a,b=HH(b,c,d,a,m[i+2],23,-995338651),c,d,m[i+0],6,-198630844),d=II(d,a,b,c,m[i+7],10,1126891415),c=II(c,d,a,b,m[i+14],15,-1416354905),b=II(b,c,d,a,m[i+5],21,-57434055),a=II(a,b,c,d,m[i+12],6,1700485571),d=II(d,a,b,c,m[i+3],10,-1894986606),c=II(c,d,a,b,m[i+10],15,-1051523),b=II(b,c,d,a,m[i+1],21,-2054922799),a=II(a,b,c,d,m[i+8],6,1873313359),d=II(d,a,b,c,m[i+15],10,-30611744),c=II(c,d,a,b,m[i+6],15,-1560198380),b=II(b,c,d,a,m[i+13],21,1309151649),a=II(a,b,c,d,m[i+4],6,-145523070),d=II(d,a,b,c,m[i+11],10,-1120210379),c=II(c,d,a,b,m[i+2],15,718787259),b=II(b,c,d,a,m[i+9],21,-343485551),a=a+aa>>>0,b=b+bb>>>0,c=c+cc>>>0,d=d+dd>>>0}return crypt.endian([a,b,c,d])})._ff=function(a,b,c,d,x,s,t){var n=a+(b&c|~b&d)+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._gg=function(a,b,c,d,x,s,t){var n=a+(b&d|c&~d)+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._hh=function(a,b,c,d,x,s,t){var n=a+(b^c^d)+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._ii=function(a,b,c,d,x,s,t){var n=a+(c^(b|~d))+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._blocksize=16,md5._digestsize=16,module.exports=function(message,options){if(null==message)throw new Error("Illegal argument "+message);var digestbytes=crypt.wordsToBytes(md5(message,options));return options&&options.asBytes?digestbytes:options&&options.asString?bin.bytesToString(digestbytes):crypt.bytesToHex(digestbytes)}}}]);
//# sourceMappingURL=2567.2cefbd44.iframe.bundle.js.map