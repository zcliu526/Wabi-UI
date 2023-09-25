"use strict";(self.webpackChunkwabi_ui=self.webpackChunkwabi_ui||[]).push([[886],{"./src/components/Tabs/tabs.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ADefaultTabs:function(){return ADefaultTabs},BCardTabs:function(){return BCardTabs},CCustomTabs:function(){return CCustomTabs},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return tabs_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tabs=function Tabs(props){var defaultIndex=props.defaultIndex,className=props.className,onSelect=props.onSelect,children=props.children,type=props.type,_useState=(0,react.useState)(defaultIndex),_useState2=(0,slicedToArray.Z)(_useState,2),activeIndex=_useState2[0],setActiveIndex=_useState2[1],navClass=classnames_default()("viking-tabs-nav",{"nav-line":"line"===type,"nav-card":"card"===type});return(0,jsx_runtime.jsxs)("div",{className:"viking-tabs ".concat(className),children:[(0,jsx_runtime.jsx)("ul",{className:navClass,children:function renderNavLinks(){return react.Children.map(children,(function(child,index){var _childElement$props=child.props,label=_childElement$props.label,disabled=_childElement$props.disabled,classes=classnames_default()("viking-tabs-nav-item",{"is-active":activeIndex===index,disabled:disabled});return(0,jsx_runtime.jsx)("li",{className:classes,onClick:function onClick(e){!function handleClick(e,index,disabled){disabled||(setActiveIndex(index),onSelect&&onSelect(index))}(0,index,disabled)},children:label},"nav-item-".concat(index))}))}()}),(0,jsx_runtime.jsx)("div",{className:"viking-tabs-content",children:function renderContent(){return react.Children.map(children,(function(child,index){if(index===activeIndex)return child}))}()})]})};Tabs.defaultProps={defaultIndex:0,type:"line"};var Tabs_tabs=Tabs;try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"Tab Component.\nKeep the content neat.\n### Usage\n\n~~~js\nimport { Tabs } from 'wabi-ui'\n~~~",displayName:"Tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"Current active tab, default is 0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Extensible className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"When selecting tab",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs styles",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"Tab Component.\nKeep the content neat.\n### Usage\n\n~~~js\nimport { Tabs } from 'wabi-ui'\n~~~",displayName:"tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"Current active tab, default is 0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Extensible className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"When selecting tab",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs styles",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#tabs"]={docgenInfo:tabs.__docgenInfo,name:"tabs",path:"src/components/Tabs/tabs.tsx#tabs"})}catch(__react_docgen_typescript_loader_error){}var TabItem=function TabItem(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:"viking-tab-panel",children:children})},Tabs_tabItem=TabItem;try{TabItem.displayName="TabItem",TabItem.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:null,description:"Tab label",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab diabled?",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#TabItem"]={docgenInfo:TabItem.__docgenInfo,name:"TabItem",path:"src/components/Tabs/tabItem.tsx#TabItem"})}catch(__react_docgen_typescript_loader_error){}try{tabItem.displayName="tabItem",tabItem.__docgenInfo={description:"",displayName:"tabItem",props:{label:{defaultValue:null,description:"Tab label",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab diabled?",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#tabItem"]={docgenInfo:tabItem.__docgenInfo,name:"tabItem",path:"src/components/Tabs/tabItem.tsx#tabItem"})}catch(__react_docgen_typescript_loader_error){}var _ADefaultTabs$paramet,_ADefaultTabs$paramet2,_ADefaultTabs$paramet3,_BCardTabs$parameters,_BCardTabs$parameters2,_BCardTabs$parameters3,_CCustomTabs$paramete,_CCustomTabs$paramete2,_CCustomTabs$paramete3,Icon=__webpack_require__("./src/components/Icon/index.tsx"),tabs_stories={title:"Tabs",id:"Tabs",component:Tabs_tabs,subcomponents:{TabItem:Tabs_tabItem},tags:["autodocs"]},ADefaultTabs=function ADefaultTabs(args){return(0,jsx_runtime.jsxs)(Tabs_tabs,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:[(0,jsx_runtime.jsx)(Tabs_tabItem,{label:"Tab1",children:"This is Tab1"}),(0,jsx_runtime.jsx)(Tabs_tabItem,{label:"Tab2",children:"This is Tab2"}),(0,jsx_runtime.jsx)(Tabs_tabItem,{label:"Tab3",children:"This is Tab3"})]}))};ADefaultTabs.storyName="Default Tabs";var BCardTabs=function BCardTabs(args){return(0,jsx_runtime.jsxs)(Tabs_tabs,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{type:"card",children:[(0,jsx_runtime.jsx)(Tabs_tabItem,{label:"Card1",children:"This is Card One"}),(0,jsx_runtime.jsx)(Tabs_tabItem,{label:"Card2",children:"This is Card Two"}),(0,jsx_runtime.jsx)(Tabs_tabItem,{label:"disabled",disabled:!0,children:"This is Card Three"})]}))};BCardTabs.storyName="Tabs - Card Style";var CCustomTabs=function CCustomTabs(args){return(0,jsx_runtime.jsxs)(Tabs_tabs,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{type:"card",children:[(0,jsx_runtime.jsx)(Tabs_tabItem,{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Icon.Z,{icon:"check-circle"}),"  Custom Icon"]}),children:"This is Tab One"}),(0,jsx_runtime.jsx)(Tabs_tabItem,{label:"Tab2",children:"This is Tab Two"})]}))};CCustomTabs.storyName="Tabs - Custom Icon",ADefaultTabs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ADefaultTabs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ADefaultTabs$paramet=ADefaultTabs.parameters)||void 0===_ADefaultTabs$paramet?void 0:_ADefaultTabs$paramet.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => <Tabs {...args}>\n    <TabItem label="Tab1">This is Tab1</TabItem>\n    <TabItem label="Tab2">This is Tab2</TabItem>\n    <TabItem label="Tab3">This is Tab3</TabItem>\n  </Tabs>'},null===(_ADefaultTabs$paramet2=ADefaultTabs.parameters)||void 0===_ADefaultTabs$paramet2||null===(_ADefaultTabs$paramet3=_ADefaultTabs$paramet2.docs)||void 0===_ADefaultTabs$paramet3?void 0:_ADefaultTabs$paramet3.source)})}),BCardTabs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},BCardTabs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_BCardTabs$parameters=BCardTabs.parameters)||void 0===_BCardTabs$parameters?void 0:_BCardTabs$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => <Tabs {...args} type="card">\n    <TabItem label=\'Card1\'>This is Card One</TabItem>\n    <TabItem label="Card2">This is Card Two</TabItem>\n    <TabItem label="disabled" disabled>This is Card Three</TabItem>\n  </Tabs>'},null===(_BCardTabs$parameters2=BCardTabs.parameters)||void 0===_BCardTabs$parameters2||null===(_BCardTabs$parameters3=_BCardTabs$parameters2.docs)||void 0===_BCardTabs$parameters3?void 0:_BCardTabs$parameters3.source)})}),CCustomTabs.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CCustomTabs.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CCustomTabs$paramete=CCustomTabs.parameters)||void 0===_CCustomTabs$paramete?void 0:_CCustomTabs$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => <Tabs {...args} type="card">\n    <TabItem label={<><Icon icon="check-circle" />  Custom Icon</>}>This is Tab One</TabItem>\n    <TabItem label="Tab2">This is Tab Two</TabItem>\n  </Tabs>'},null===(_CCustomTabs$paramete2=CCustomTabs.parameters)||void 0===_CCustomTabs$paramete2||null===(_CCustomTabs$paramete3=_CCustomTabs$paramete2.docs)||void 0===_CCustomTabs$paramete3?void 0:_CCustomTabs$paramete3.source)})});var __namedExportsOrder=["ADefaultTabs","BCardTabs","CCustomTabs"]},"./src/components/Icon/icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Users_zhichengliu_Desktop_react_wabi_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_zhichengliu_Desktop_react_wabi_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_zhichengliu_Desktop_react_wabi_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","theme"],Icon=function Icon(props){var className=props.className,theme=props.theme,restProps=(0,_Users_zhichengliu_Desktop_react_wabi_ui_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("viking-icon",className,(0,_Users_zhichengliu_Desktop_react_wabi_ui_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},"icon-".concat(theme),theme));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,(0,_Users_zhichengliu_Desktop_react_wabi_ui_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({className:classes},restProps))};__webpack_exports__.Z=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Provide icon sets based on **'react-fontawesome'**.\n\nSupport all properties of **'react-fontawesome'**. More info: https://github.com/FortAwesome/react-fontawesome#basic\n\nSupport all **'free-solid-icons'** from **'fontawesome'**. More info: https://fontawesome.com/icons?d=gallery&s=solid&m=free\n### Usage\n\n~~~js\nimport { Icon } from 'wabi-ui'\n~~~",displayName:"Icon",props:{theme:{defaultValue:null,description:"Display different colors based on themes",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{icon.displayName="icon",icon.__docgenInfo={description:"Provide icon sets based on **'react-fontawesome'**.\n\nSupport all properties of **'react-fontawesome'**. More info: https://github.com/FortAwesome/react-fontawesome#basic\n\nSupport all **'free-solid-icons'** from **'fontawesome'**. More info: https://fontawesome.com/icons?d=gallery&s=solid&m=free\n### Usage\n\n~~~js\nimport { Icon } from 'wabi-ui'\n~~~",displayName:"icon",props:{theme:{defaultValue:null,description:"Display different colors based on themes",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/icon.tsx");__webpack_exports__.Z=_icon__WEBPACK_IMPORTED_MODULE_0__.Z;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"Provide icon sets based on **'react-fontawesome'**.\n\nSupport all properties of **'react-fontawesome'**. More info: https://github.com/FortAwesome/react-fontawesome#basic\n\nSupport all **'free-solid-icons'** from **'fontawesome'**. More info: https://fontawesome.com/icons?d=gallery&s=solid&m=free\n### Usage\n\n~~~js\nimport { Icon } from 'wabi-ui'\n~~~",displayName:"Icon",props:{theme:{defaultValue:null,description:"Display different colors based on themes",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);