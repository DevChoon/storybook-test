"use strict";(self.webpackChunkstorybook_test_repo=self.webpackChunkstorybook_test_repo||[]).push([[869],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/stories/basicCss/BasicCssBottomNavigation.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicMode:()=>BasicMode,DarkMode:()=>DarkMode,LightMode:()=>LightMode,default:()=>BasicCssBottomNavigation_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),basicCssBottomNavigation=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/stories/basicCss/basicCssBottomNavigation.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(basicCssBottomNavigation.Z,options);basicCssBottomNavigation.Z&&basicCssBottomNavigation.Z.locals&&basicCssBottomNavigation.Z.locals;var _BasicMode$parameters,_BasicMode$parameters2,_BasicMode$parameters3,_LightMode$parameters,_LightMode$parameters2,_LightMode$parameters3,_DarkMode$parameters,_DarkMode$parameters2,_DarkMode$parameters3,console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["displayLight"],__jsx=react.createElement,BasicCssBottomNavigation=function BasicCssBottomNavigation(_ref){var displayLight=_ref.displayLight,currentSelecter=((0,objectWithoutProperties.Z)(_ref,_excluded),0),onMoveToPage=function onMoveToPage(path,current){console.log(path),currentSelecter=current};return __jsx("section",{className:(displayLight?"bottom-navigation-basic-dark-mode":"bottom-navigation-basic-light-mode")+" bottom-navigation-container"},__jsx("ul",null,__jsx("li",null,__jsx("a",{className:"home"+(0===currentSelecter?" on":""),onClick:function onClick(){return onMoveToPage("/home",0)}})),__jsx("li",null,__jsx("a",{className:"zzim"+(1===currentSelecter?" on":""),onClick:function onClick(){return onMoveToPage("/zzim",1)}})),__jsx("li",null,__jsx("a",{className:"map"+(2===currentSelecter?" on":""),onClick:function onClick(){return onMoveToPage("/map",2)}})),__jsx("li",null,__jsx("a",{className:"magazine"+(3===currentSelecter?" on":""),onClick:function onClick(){return onMoveToPage("/magazine",3)}})),__jsx("li",null,__jsx("a",{className:"more"+(4===currentSelecter?" on":""),onClick:function onClick(){return onMoveToPage("/more",4)}}))))};BasicCssBottomNavigation.displayName="BasicCssBottomNavigation",BasicCssBottomNavigation.propTypes={displayLight:prop_types_default().bool,onMoveToPage:prop_types_default().func},BasicCssBottomNavigation.defaultProps={displayLight:!1,onMoveToPage:void 0},BasicCssBottomNavigation.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"BasicCssBottomNavigation",props:{displayLight:{defaultValue:{value:"false",computed:!1},description:"How large should the button be?",type:{name:"bool"},required:!1},onMoveToPage:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1}}};var BasicCssBottomNavigation_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const BasicCssBottomNavigation_stories={title:"basicCss/BasicCssBottomNavigation",component:BasicCssBottomNavigation,tags:["autodocs"],argTypes:{displayLight:{control:{type:"boolean"}}}};var Template=function Template(args){return BasicCssBottomNavigation_stories_jsx(BasicCssBottomNavigation,args)};Template.displayName="Template";var BasicMode=Template.bind({});BasicMode.args={displayLight:!1};var LightMode=Template.bind({});LightMode.args={displayLight:!1};var DarkMode=Template.bind({});DarkMode.args={displayLight:!0},BasicMode.parameters=_objectSpread(_objectSpread({},BasicMode.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicMode$parameters=BasicMode.parameters)||void 0===_BasicMode$parameters?void 0:_BasicMode$parameters.docs),{},{source:_objectSpread({originalSource:"args => <BasicCssBottomNavigation {...args} />"},null===(_BasicMode$parameters2=BasicMode.parameters)||void 0===_BasicMode$parameters2||null===(_BasicMode$parameters3=_BasicMode$parameters2.docs)||void 0===_BasicMode$parameters3?void 0:_BasicMode$parameters3.source)})}),LightMode.parameters=_objectSpread(_objectSpread({},LightMode.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LightMode$parameters=LightMode.parameters)||void 0===_LightMode$parameters?void 0:_LightMode$parameters.docs),{},{source:_objectSpread({originalSource:"args => <BasicCssBottomNavigation {...args} />"},null===(_LightMode$parameters2=LightMode.parameters)||void 0===_LightMode$parameters2||null===(_LightMode$parameters3=_LightMode$parameters2.docs)||void 0===_LightMode$parameters3?void 0:_LightMode$parameters3.source)})}),DarkMode.parameters=_objectSpread(_objectSpread({},DarkMode.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DarkMode$parameters=DarkMode.parameters)||void 0===_DarkMode$parameters?void 0:_DarkMode$parameters.docs),{},{source:_objectSpread({originalSource:"args => <BasicCssBottomNavigation {...args} />"},null===(_DarkMode$parameters2=DarkMode.parameters)||void 0===_DarkMode$parameters2||null===(_DarkMode$parameters3=_DarkMode$parameters2.docs)||void 0===_DarkMode$parameters3?void 0:_DarkMode$parameters3.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/stories/basicCss/basicCssBottomNavigation.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/stories/assets/button_navigation_home_off.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/stories/assets/button_navigation_home_on.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./src/stories/assets/button_navigation_heart_off.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./src/stories/assets/button_navigation_heart_on.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_4___=new URL(__webpack_require__("./src/stories/assets/button_navigation_map_off.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_5___=new URL(__webpack_require__("./src/stories/assets/button_navigation_map_on.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_6___=new URL(__webpack_require__("./src/stories/assets/button_navigation_magazine_off.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_7___=new URL(__webpack_require__("./src/stories/assets/button_navigation_magazine_on.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_8___=new URL(__webpack_require__("./src/stories/assets/button_navigation_more_off.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_9___=new URL(__webpack_require__("./src/stories/assets/button_navigation_more_on.svg"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___),___CSS_LOADER_URL_REPLACEMENT_5___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___),___CSS_LOADER_URL_REPLACEMENT_6___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___),___CSS_LOADER_URL_REPLACEMENT_7___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___),___CSS_LOADER_URL_REPLACEMENT_8___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___),___CSS_LOADER_URL_REPLACEMENT_9___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);___CSS_LOADER_EXPORT___.push([module.id,`.bottom-navigation-container {\n  position: relative;\n  height: 100%;\n}\n\n.bottom-navigation-container ul {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  max-width: 720px;\n  z-index: 1;\n  box-shadow: 0 0 10px 0 rgba(5, 44, 82, 0.1);\n}\n\n.bottom-navigation-basic-light-mode ul {\n  background-color: #fff;\n}\n\n.bottom-navigation-basic-dark-mode ul {\n  background-color: #1b1e21;\n}\n\n.bottom-navigation-container ul li {\n  text-align: center;\n  flex: 1;\n}\n.bottom-navigation-container ul li a {\n  display: block;\n  height: 56px;\n  cursor: pointer;\n}\n.bottom-navigation-container ul li a.home {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.home.on {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.zzim {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.zzim.on {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.map {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.map.on {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.magazine {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat\n    center center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.magazine.on {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) no-repeat\n    center center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.more {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n.bottom-navigation-container ul li a.more.on {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) no-repeat center\n    center;\n  background-size: 90px 56px;\n}\n`,"",{version:3,sources:["webpack://./src/stories/basicCss/basicCssBottomNavigation.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,UAAU;EACV,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,OAAO;AACT;AACA;EACE,cAAc;EACd,YAAY;EACZ,eAAe;AACjB;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B;AACA;EACE;iBACe;EACf,0BAA0B;AAC5B;AACA;EACE;iBACe;EACf,0BAA0B;AAC5B;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B;AACA;EACE;UACQ;EACR,0BAA0B;AAC5B",sourcesContent:['.bottom-navigation-container {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.bottom-navigation-container ul {\r\n  display: flex;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  max-width: 720px;\r\n  z-index: 1;\r\n  box-shadow: 0 0 10px 0 rgba(5, 44, 82, 0.1);\r\n}\r\n\r\n.bottom-navigation-basic-light-mode ul {\r\n  background-color: #fff;\r\n}\r\n\r\n.bottom-navigation-basic-dark-mode ul {\r\n  background-color: #1b1e21;\r\n}\r\n\r\n.bottom-navigation-container ul li {\r\n  text-align: center;\r\n  flex: 1;\r\n}\r\n.bottom-navigation-container ul li a {\r\n  display: block;\r\n  height: 56px;\r\n  cursor: pointer;\r\n}\r\n.bottom-navigation-container ul li a.home {\r\n  background: url("../assets/button_navigation_home_off.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.home.on {\r\n  background: url("../assets/button_navigation_home_on.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.zzim {\r\n  background: url("../assets/button_navigation_heart_off.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.zzim.on {\r\n  background: url("../assets/button_navigation_heart_on.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.map {\r\n  background: url("../assets/button_navigation_map_off.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.map.on {\r\n  background: url("../assets/button_navigation_map_on.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.magazine {\r\n  background: url("../assets/button_navigation_magazine_off.svg") no-repeat\r\n    center center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.magazine.on {\r\n  background: url("../assets/button_navigation_magazine_on.svg") no-repeat\r\n    center center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.more {\r\n  background: url("../assets/button_navigation_more_off.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n.bottom-navigation-container ul li a.more.on {\r\n  background: url("../assets/button_navigation_more_on.svg") no-repeat center\r\n    center;\r\n  background-size: 90px 56px;\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/stories/assets/button_navigation_heart_off.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_heart_off.055db5f1.svg"},"./src/stories/assets/button_navigation_heart_on.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_heart_on.6601890d.svg"},"./src/stories/assets/button_navigation_home_off.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_home_off.0051ec03.svg"},"./src/stories/assets/button_navigation_home_on.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_home_on.1b19c119.svg"},"./src/stories/assets/button_navigation_magazine_off.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_magazine_off.e2be82f2.svg"},"./src/stories/assets/button_navigation_magazine_on.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_magazine_on.75cf47cb.svg"},"./src/stories/assets/button_navigation_map_off.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_map_off.8b4d743b.svg"},"./src/stories/assets/button_navigation_map_on.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_map_on.49d88b81.svg"},"./src/stories/assets/button_navigation_more_off.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_more_off.91856cab.svg"},"./src/stories/assets/button_navigation_more_on.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button_navigation_more_on.2cabd0c0.svg"}}]);