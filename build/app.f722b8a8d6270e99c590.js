webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(27),u=r(o),l=n(62),a=r(l),c=n(94),f=r(c);n(96),a["default"].render(u["default"].createElement(f["default"],null),document.getElementById("app"))},91:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(27),u=r(o);t["default"]=function(e){var t=e.value;return u["default"].createElement("h1",null,t,"!")}},92:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(27),f=r(c),i=n(95),s=r(i),d=function(e){function t(){o(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.state={},e.onChange=e.onChange.bind(e),e}return l(t,e),a(t,[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return f["default"].createElement("div",null,f["default"].createElement("input",{className:s["default"].control,placeholder:"Introduce yourself!",value:this.state.value,onChange:this.onChange}),f["default"].createElement("br",null),f["default"].createElement("div",{className:s["default"].hello},"Hello, ",this.state.value||"World","!"))}}]),t}(c.Component);t["default"]=d},93:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(92),u=r(o);t["default"]=u["default"]},94:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(27),f=r(c),i=n(91),s=r(i),d=n(93),p=r(d),y=function(e){function t(){o(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.state={},e}return l(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement("section",null,f["default"].createElement(s["default"],{value:"Test React Page"}),f["default"].createElement(p["default"],null))}}]),t}(c.Component);t["default"]=y},95:function(e,t){e.exports={control:"styles__control___2z6_4",hello:"styles__hello___27jxy"}},96:function(e,t){}});