webpackJsonp([27],{9:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},19:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(8),e=t(p),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,e["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},20:function(n,a,s){"use strict";s(35)},22:function(n,a){"use strict";function s(n){var a={};return Object.keys(n).forEach(function(s){0===s.indexOf("data-")&&(a[s]=n[s])}),a}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},23:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(30),e=t(p),o=s(29),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,l=(0,c["default"])(n);!(t=(o=l.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(u){p=!0,e=u}finally{try{!t&&l["return"]&&l["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,e["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},25:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),e=t(p),o=s(4),c=t(o),l=s(6),u=t(l),i=s(5),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:l,style:o,onClick:c})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},26:function(n,a,s){"use strict";s(9),s(52)},27:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(p){a.indexOf(p)!==-1?s[p]=n[p]:t[p]=n[p]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},29:function(n,a,s){n.exports={"default":s(31),__esModule:!0}},30:function(n,a,s){n.exports={"default":s(32),__esModule:!0}},31:function(n,a,s){s(28),s(18),n.exports=s(33)},32:function(n,a,s){s(28),s(18),n.exports=s(34)},33:function(n,a,s){var t=s(41),p=s(50);n.exports=s(16).getIterator=function(n){var a=p(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},34:function(n,a,s){var t=s(58),p=s(24)("iterator"),e=s(43);n.exports=s(16).isIterable=function(n){var a=Object(n);return void 0!==a[p]||"@@iterator"in a||e.hasOwnProperty(t(a))}},35:function(n,a){},52:function(n,a){},324:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),e=t(p),o=s(7),c=t(o),l=s(23),u=t(l),i=s(4),k=t(i),r=s(6),d=t(r),f=s(5),m=t(f),g=s(1),v=t(g),h=s(3),y=t(h),E=s(22),N=t(E),C=s(27),x=t(C),b=s(19),w=t(b),B=function(n){function a(s){(0,k["default"])(this,a);var t=(0,d["default"])(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.mode,s=n.onClick;s&&s(),"closable"===a&&t.setState({show:!1})},t.state={show:!0},t}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a=(0,x["default"])(this.props,["mode","type","onClick","children","className","prefixCls"]),s=(0,u["default"])(a,2),t=s[0],p=t.mode,o=t.type,l=t.onClick,i=t.children,k=t.className,r=t.prefixCls,d=s[1],f={},m=null;"closable"===p?m=v["default"].createElement("div",{className:r+"-operation",onClick:this.onClick},v["default"].createElement(w["default"],{type:"cross"})):("link"===p&&(m=v["default"].createElement("div",{className:r+"-operation"},v["default"].createElement(w["default"],{type:"right"}))),f.onClick=l);var g={success:"check-circle",error:"cross-circle",warn:"exclamation-circle",question:"question-circle"},h=o?v["default"].createElement("div",{className:r+"-icon"},v["default"].createElement(w["default"],{type:g[o]||"info-circle"})):null,E=(0,y["default"])((n={},(0,c["default"])(n,r,!0),(0,c["default"])(n,k,!!k),n));return this.state.show?v["default"].createElement("div",(0,e["default"])({},(0,N["default"])(this.props),{className:E},d,f),h,v["default"].createElement("div",{className:r+"-content"},i),m):null},a}(v["default"].Component);a["default"]=B,B.defaultProps={prefixCls:"am-notice-bar",mode:"",onClick:function(){}},n.exports=a["default"]},325:function(n,a,s){"use strict";s(9),s(20),s(1145)},718:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(325),s(324)),e=t(p),o=(s(26),s(25)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u5173\u95ed\u56fe\u6807\u540e\uff0c\u9690\u85cf\u8be5\u680f\u3002"]],meta:{order:0,title:"\u53ef\u5173\u95ed",filename:"components/notice-bar/demo/closable.md",id:"components-notice-bar-demo-closable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NoticeBar<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> NoticeBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'clicked\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          \u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token number" >1</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"NoticeBarExample",onClick:function(){alert("clicked")},render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"closable",onClick:this.onClick},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f41"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"info",mode:"closable"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}))}});return u["default"].createElement(n,null)}}},719:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(325),s(324)),e=t(p),o=(s(26),s(25)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u663e\u793a\u6210\u529f, \u9519\u8bef, \u4fe1\u606f, \u8b66\u544a, \u95ee\u9898 \u56fe\u6807"]],meta:{order:2,title:"\u56fe\u6807\u540d\u79f0",filename:"components/notice-bar/demo/icon.md",id:"components-notice-bar-demo-icon"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NoticeBar<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> NoticeBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'click\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warn<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>link<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>question<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"NoticeBarExample",render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"info",onClick:function(){return alert("click")}},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"warn"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"closable",type:"success"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"error"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"link",type:"question"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}))}});return u["default"].createElement(n,null)}}},720:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(325),s(324)),e=t(p),o=(s(26),s(25)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u662f\u5426\u663e\u793a\u8df3\u8f6c\u7bad\u5934\u56fe\u6807\uff0c\u70b9\u51fb\u4e4b\u540e\u4f1a\u8df3\u8f6c\u5230\u522b\u7684\u9875\u9762\u3002"]],meta:{order:1,title:"\u8df3\u8f6c",filename:"components/notice-bar/demo/link.md",id:"components-notice-bar-demo-link"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NoticeBar<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >linkClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token comment" spellcheck="true">// \u8fd9\u91cc\u914d\u7f6e\u8df3\u8f6c</span>\n  <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u8df3\u8f6c\u64cd\u4f5c\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> NoticeBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>link<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>linkClick<span class="token punctuation" >}</span></span> <span class="token attr-name" >data-seed</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>logId<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          \u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>link<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){alert("\u8df3\u8f6c\u64cd\u4f5c")}var a=u["default"].createClass({displayName:"NoticeBarExample",render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"link",onClick:n,"data-seed":"logId"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"link",type:"info"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}))}});return u["default"].createElement(a,null)}}},891:function(n,a,s){n.exports={closable:s(718),icon:s(719),link:s(720)}},1145:function(n,a){}});