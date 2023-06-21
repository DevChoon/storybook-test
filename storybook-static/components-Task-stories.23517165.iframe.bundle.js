"use strict";(self.webpackChunkstorybook_test_repo=self.webpackChunkstorybook_test_repo||[]).push([[266],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Task.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Archived:()=>Archived,Default:()=>Default,Pinned:()=>Pinned,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Pinned$parameters,_Pinned$parameters2,_Pinned$parameters2$d,_Archived$parameters,_Archived$parameters2,_Archived$parameters3,C_Users_choon_Desktop_work_design_test_storybook_test_repo_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Task__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Task.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,C_Users_choon_Desktop_work_design_test_storybook_test_repo_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={component:_Task__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Task"};var Template=function Template(args){return __jsx(_Task__WEBPACK_IMPORTED_MODULE_2__.Z,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:_objectSpread(_objectSpread({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:_objectSpread(_objectSpread({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Task {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Pinned.parameters=_objectSpread(_objectSpread({},Pinned.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Pinned$parameters=Pinned.parameters)||void 0===_Pinned$parameters?void 0:_Pinned$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Task {...args} />"},null===(_Pinned$parameters2=Pinned.parameters)||void 0===_Pinned$parameters2||null===(_Pinned$parameters2$d=_Pinned$parameters2.docs)||void 0===_Pinned$parameters2$d?void 0:_Pinned$parameters2$d.source)})}),Archived.parameters=_objectSpread(_objectSpread({},Archived.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Archived$parameters=Archived.parameters)||void 0===_Archived$parameters?void 0:_Archived$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Task {...args} />"},null===(_Archived$parameters2=Archived.parameters)||void 0===_Archived$parameters2||null===(_Archived$parameters3=_Archived$parameters2.docs)||void 0===_Archived$parameters3?void 0:_Archived$parameters3.source)})})},"./src/components/Task.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Task});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return __jsx("div",{className:"list-item ".concat(state)},__jsx("label",{className:"checkbox"},__jsx("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),__jsx("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)},id:"archiveTask-".concat(id),"aria-label":"archiveTask-".concat(id)})),__jsx("div",{className:"title"},__jsx("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})),__jsx("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&__jsx("a",{onClick:function onClick(){return onPinTask(id)}},__jsx("span",{className:"icon-star",id:"pinTask-".concat(id),"aria-label":"pinTask-".concat(id)}))))}Task.displayName="Task",Task.propTypes={task:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,state:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired}),onArchiveTask:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,onPinTask:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func},Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}}}}]);