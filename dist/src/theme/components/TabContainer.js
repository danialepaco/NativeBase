Object.defineProperty(exports,"__esModule",{value:true});var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);
var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var platformStyle=variables.platformStyle;
var platform=variables.platform;

var tabContainerTheme={
elevation:3,
height:50,
flexDirection:"row",
shadowColor:platformStyle==="material"?undefined:undefined,
shadowOffset:platformStyle==="material"?
undefined:
undefined,
shadowOpacity:platformStyle==="material"?undefined:undefined,
shadowRadius:platformStyle==="material"?undefined:undefined,
justifyContent:"space-around",
borderBottomWidth:_reactNative.Platform.OS==="ios"?variables.borderWidth:0,
borderColor:variables.topTabBarBorderColor};


return tabContainerTheme;
};
//# sourceMappingURL=TabContainer.js.map