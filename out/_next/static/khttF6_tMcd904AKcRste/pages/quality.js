(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=""},124:function(e,t,n){"use strict";var r=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=m,t.default=void 0;var o=r(n(66)),a=r(n(9)),u=r(n(10)),i=r(n(18)),c=r(n(19)),f=r(n(20)),l=r(n(15)),s=r(n(0)),p=r(n(21)),d=r(n(230)),y=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(s.default.Component);(0,l.default)(y,"contextTypes",{headManager:p.default.object});var h="next-head";function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return[s.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var v=["name","httpEquiv","charSet","itemProp","property"],g=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var w=(0,d.default)(function(e){return e.map(function(e){return s.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return s.default.Fragment&&t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(m("")).filter(Boolean).filter((t=new o.default,n=new o.default,r=new o.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var u=0,i=v.length;u<i;u++){var c=v[u];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var f=e.props[c],l=a[c]||new o.default;if(l.has(f)&&-1===g.indexOf(f))return!1;l.add(f),a[c]=l}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+h,r=e.key||t;return s.default.cloneElement(e,{key:r,className:n})});var t,n,r,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(y);t.default=w},230:function(e,t,n){"use strict";var r=n(23),o=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,m=new d.default;function v(r){o=e((0,p.default)(m)),g.canUseDOM?t.call(r,o):n&&(o=n(o))}var g=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,u.default)(this,(0,i.default)(t).call(this,e)),t.canUseDOM||(m.add((0,l.default)((0,l.default)(n))),v((0,l.default)((0,l.default)(n)))),n}return(0,f.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,m.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){m.add(this),v(this)}},{key:"componentDidUpdate",value:function(){v(this)}},{key:"componentWillUnmount",value:function(){m.delete(this),v(this)}},{key:"render",value:function(){return y.default.createElement(r,null,this.props.children)}}]),t}(y.Component);return(0,s.default)(g,"canUseDOM","undefined"!=typeof window),(0,s.default)(g,"contextTypes",r.contextTypes),(0,s.default)(g,"displayName","SideEffect(".concat((0,h.getDisplayName)(r),")")),g}};var a=o(n(9)),u=o(n(18)),i=o(n(19)),c=o(n(10)),f=o(n(20)),l=o(n(35)),s=o(n(15)),p=o(n(231)),d=o(n(66)),y=r(n(0)),h=n(24)},231:function(e,t,n){var r=n(232),o=n(233),a=n(241);e.exports=function(e){return r(e)||o(e)||a()}},232:function(e,t,n){var r=n(88);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},233:function(e,t,n){var r=n(234),o=n(238);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},234:function(e,t,n){e.exports=n(235)},235:function(e,t,n){n(41),n(236),e.exports=n(4).Array.from},236:function(e,t,n){"use strict";var r=n(33),o=n(8),a=n(44),u=n(103),i=n(104),c=n(60),f=n(237),l=n(84);o(o.S+o.F*!n(111)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,s,p=a(e),d="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,m=void 0!==h,v=0,g=l(p);if(m&&(h=r(h,y>2?arguments[2]:void 0,2)),null==g||d==Array&&i(g))for(n=new d(t=c(p.length));t>v;v++)f(n,v,m?h(p[v],v):p[v]);else for(s=g.call(p),n=new d;!(o=s.next()).done;v++)f(n,v,m?u(s,h,[o.value,v],!0):o.value);return n.length=v,n}})},237:function(e,t,n){"use strict";var r=n(25),o=n(49);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},238:function(e,t,n){e.exports=n(239)},239:function(e,t,n){n(47),n(41),e.exports=n(240)},240:function(e,t,n){var r=n(65),o=n(14)("iterator"),a=n(46);e.exports=n(4).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},241:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},269:function(e,t,n){__NEXT_REGISTER_PAGE("/quality",function(){return e.exports=n(270),{page:e.exports.default}})},270:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(6),a=n.n(o),u=n(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,l(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(a.a,null,r.createElement("title",null,"איכות - קריית החינוך פארק המדע")),r.createElement("img",{src:"".concat(u.a,"/static/img/quality.png")}),r.createElement("style",{jsx:!0},"\n          img {\n            display: block;\n            width: 20rem;\n            margin: 0 auto;\n          }\n        "))}}])&&c(n.prototype,o),i&&c(n,i),t}();t.default=p},6:function(e,t,n){e.exports=n(124)}},[[269,1,3]]]);