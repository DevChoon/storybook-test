"use strict";(self.webpackChunkstorybook_test_repo=self.webpackChunkstorybook_test_repo||[]).push([[728],{"./src/components/BottomNavigation/BottomNavigation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkMode:()=>DarkMode,LightMode:()=>LightMode,default:()=>BottomNavigation_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),selectNavigation=(0,redux_toolkit_esm.oM)({name:"selectNavigation",initialState:{value:"home"},reducers:{onChangeNavigation:function onChangeNavigation(state,action){state.value=action.payload}}}),onChangeNavigation=selectNavigation.actions.onChangeNavigation;selectNavigation.reducer;var _templateObject,_templateObject2,__jsx=react.createElement,BottomNavigation=function BottomNavigation(_ref){var display=_ref.display,selectNav=(0,es.v9)((function(state){return state.selectNavigation.value})),dispatch=(0,es.I0)(),handleClick=function handleClick(path){dispatch(onChangeNavigation(path))};return __jsx("section",null,__jsx(BottomNavigationContainer,{display},__jsx("li",null,__jsx(IconItem,{className:"home",onClick:function onClick(){return handleClick("home")},selectNav})),__jsx("li",null,__jsx(IconItem,{className:"zzim",onClick:function onClick(){return handleClick("zzim")},selectNav})),__jsx("li",null,__jsx(IconItem,{className:"map",onClick:function onClick(){return handleClick("map")},selectNav})),__jsx("li",null,__jsx(IconItem,{className:"magazine",onClick:function onClick(){return handleClick("magazine")},selectNav})),__jsx("li",null,__jsx(IconItem,{className:"more",onClick:function onClick(){return handleClick("more")},selectNav}))))};BottomNavigation.displayName="BottomNavigation";var BottomNavigationContainer=styled_components_browser_esm.zo.ul(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 720px;\n  z-index: 1;\n  box-shadow: 0 0 10px 0 rgba(5, 44, 82, 0.1);\n  background: ",";\n  & > li {\n    text-align: center;\n    flex: 1;\n  }\n"])),(function(props){return"light-mode"===props.display?"#fff":"#1b1e21"})),IconItem=styled_components_browser_esm.zo.a(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: block;\n  height: 56px;\n  cursor: pointer;\n\n  &.home {\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 90px 56px;\n  }\n  &.zzim {\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 90px 56px;\n  }\n  &.map {\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 90px 56px;\n  }\n  &.magazine {\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 90px 56px;\n  }\n  &.more {\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 90px 56px;\n  }\n"])),(function(props){return"home"===props.selectNav?'url("/assets/button_navigation_home_on.svg")':'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_home_off.svg")'}),(function(props){return"zzim"===props.selectNav?'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_heart_on.svg")':'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_heart_off.svg")'}),(function(props){return"map"===props.selectNav?'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_map_on.svg")':'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_map_off.svg")'}),(function(props){return"magazine"===props.selectNav?'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_magazine_on.svg")':'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_magazine_off.svg")'}),(function(props){return"more"===props.selectNav?'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_more_on.svg")':'url("http://localhost:6006/static/media/src/stories/assets/button_navigation_more_off.svg")'}));BottomNavigation.__docgenInfo={description:"",methods:[],displayName:"BottomNavigation"};var _LightMode$parameters,_LightMode$parameters2,_LightMode$parameters3,_DarkMode$parameters,_DarkMode$parameters2,_DarkMode$parameters3,bottomNavigationStore=(0,redux_toolkit_esm.xC)({reducer:{selectNavigation:selectNavigation.reducer}}),BottomNavigation_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const BottomNavigation_stories={title:"BottomNavigation",component:BottomNavigation,decorators:[function(story){return BottomNavigation_stories_jsx("div",{className:"test"},story())}],tags:["autodocs"],argTypes:{display:{options:["light-mode","dark-mode"],control:{type:"radio"}}}};var Template=function Template(args){return BottomNavigation_stories_jsx(BottomNavigation,args)};Template.displayName="Template";var LightMode=Template.bind({});LightMode.args={display:"light-mode"},LightMode.decorators=[function(story){return BottomNavigation_stories_jsx(es.zt,{store:bottomNavigationStore},story())}];var DarkMode=Template.bind({});DarkMode.args={display:"dark-mode"},DarkMode.decorators=[function(story){return BottomNavigation_stories_jsx(es.zt,{store:bottomNavigationStore},story())}],LightMode.parameters=_objectSpread(_objectSpread({},LightMode.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LightMode$parameters=LightMode.parameters)||void 0===_LightMode$parameters?void 0:_LightMode$parameters.docs),{},{source:_objectSpread({originalSource:"args => <BottomNavigation {...args} />"},null===(_LightMode$parameters2=LightMode.parameters)||void 0===_LightMode$parameters2||null===(_LightMode$parameters3=_LightMode$parameters2.docs)||void 0===_LightMode$parameters3?void 0:_LightMode$parameters3.source)})}),DarkMode.parameters=_objectSpread(_objectSpread({},DarkMode.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DarkMode$parameters=DarkMode.parameters)||void 0===_DarkMode$parameters?void 0:_DarkMode$parameters.docs),{},{source:_objectSpread({originalSource:"args => <BottomNavigation {...args} />"},null===(_DarkMode$parameters2=DarkMode.parameters)||void 0===_DarkMode$parameters2||null===(_DarkMode$parameters3=_DarkMode$parameters2.docs)||void 0===_DarkMode$parameters3?void 0:_DarkMode$parameters3.source)})})}}]);