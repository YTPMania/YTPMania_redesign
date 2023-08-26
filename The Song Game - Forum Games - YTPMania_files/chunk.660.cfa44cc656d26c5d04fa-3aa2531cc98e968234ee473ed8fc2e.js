/*! For license information please see chunk.660.cfa44cc656d26c5d04fa.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[660],[(e,t,r)=>{"use strict"
var n=r(7),i=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],o=["scalar","sequence","mapping"]
e.exports=function(e,t){var r,s
if(t=t||{},Object.keys(t).forEach((function(t){if(-1===i.indexOf(t))throw new n('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=(r=t.styleAliases||null,s={},null!==r&&Object.keys(r).forEach((function(e){r[e].forEach((function(t){s[String(t)]=e}))})),s),-1===o.indexOf(this.kind))throw new n('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}},(e,t)=>{"use strict"
t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML()
if(null==e)return""
if(!e)return e+""
e=""+e}return i.test(e)?e.replace(n,o):e},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e)
return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t}
var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,i=/[&<>"'`=]/
function o(e){return r[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r])
return e}var a=Object.prototype.toString
t.toString=a
var l=function(e){return"function"==typeof e}
l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===a.call(e)}),t.isFunction=l
var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===a.call(e)}
t.isArray=u},(e,t)=>{"use strict"
t.__esModule=!0
var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"]
function n(e,t){var i=t&&t.loc,o=void 0,s=void 0,a=void 0,l=void 0
i&&(o=i.start.line,s=i.end.line,a=i.start.column,l=i.end.column,e+=" - "+o+":"+a)
for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]]
Error.captureStackTrace&&Error.captureStackTrace(this,n)
try{i&&(this.lineNumber=o,this.endLineNumber=s,Object.defineProperty?(Object.defineProperty(this,"column",{value:a,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=a,this.endColumn=l))}catch(e){}}n.prototype=new Error,t.default=n,e.exports=t.default},(e,t,r)=>{"use strict"
r.d(t,{BL:()=>u,Ct:()=>g,DH:()=>k,F2:()=>o,I:()=>i,MS:()=>P,N7:()=>v,Pj:()=>d,XM:()=>w,YP:()=>f,bw:()=>m,cW:()=>S,d7:()=>a,ij:()=>y,iv:()=>_,k5:()=>h,mv:()=>l,r5:()=>b,t$:()=>s,ut:()=>c,wX:()=>x,we:()=>n,xs:()=>O,zV:()=>p})
var n="top",i="bottom",o="right",s="left",a="auto",l=[n,i,o,s],u="start",c="end",p="clippingParents",d="viewport",h="popper",f="reference",m=l.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+c])}),[]),g=[].concat(l,[a]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+c])}),[]),v="beforeRead",y="read",b="afterRead",w="beforeMain",k="main",x="afterMain",_="beforeWrite",S="write",P="afterWrite",O=[v,y,b,w,k,x,_,S,P]},(e,t,r)=>{"use strict"
function n(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
r.d(t,{Re:()=>o,Zq:()=>s,kK:()=>i})
var n=r(4)
function i(e){return e instanceof(0,n.Z)(e).Element||e instanceof Element}function o(e){return e instanceof(0,n.Z)(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof(0,n.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},e=>{e.exports=function(e){return e&&"Widget"===e.type}},e=>{"use strict"
function t(e,t){var r="",n=e.reason||"(unknown reason)"
return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),n+" "+r):n}function r(e,r){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=r,this.message=t(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.toString=function(e){return this.name+": "+t(this,e)},e.exports=r},e=>{e.exports="2"},(e,t,r)=>{var n=r(8)
e.exports=function(e){return e&&"VirtualNode"===e.type&&e.version===n}},(e,t,r)=>{"use strict"
function n(e){return e?(e.nodeName||"").toLowerCase():null}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
function n(e){return e.split("-")[0]}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
r.d(t,{Fp:()=>n,NM:()=>o,VV:()=>i})
var n=Math.max,i=Math.min,o=Math.round},e=>{"use strict"
function t(e){return null==e}e.exports.isNothing=t,e.exports.isObject=function(e){return"object"==typeof e&&null!==e},e.exports.toArray=function(e){return Array.isArray(e)?e:t(e)?[]:[e]},e.exports.repeat=function(e,t){var r,n=""
for(r=0;r<t;r+=1)n+=e
return n},e.exports.isNegativeZero=function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},e.exports.extend=function(e,t){var r,n,i,o
if(t)for(r=0,n=(o=Object.keys(t)).length;r<n;r+=1)e[i=o[r]]=t[i]
return e}},(e,t,r)=>{var n=r(8)
e.exports=function(e){return e&&"VirtualText"===e.type&&e.version===n}},e=>{e.exports=function(e){return e&&"Thunk"===e.type}},e=>{e.exports=function(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(159)
class i{constructor(e,t){void 0===t&&(t={}),this.uppy=e,this.opts=t}getPluginState(){const{plugins:e}=this.uppy.getState()
return e[this.id]||{}}setPluginState(e){const{plugins:t}=this.uppy.getState()
this.uppy.setState({plugins:{...t,[this.id]:{...t[this.id],...e}}})}setOptions(e){this.opts={...this.opts,...e},this.setPluginState(),this.i18nInit()}i18nInit(){const e=new n.Z([this.defaultLocale,this.uppy.locale,this.opts.locale])
this.i18n=e.translate.bind(e),this.i18nArray=e.translateArray.bind(e),this.setPluginState()}addTarget(){throw new Error("Extend the addTarget method to add your plugin to another plugin's target")}install(){}uninstall(){}render(){throw new Error("Extend the render method to add your plugin to a DOM element")}update(){}afterUpdate(){}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>p})
var n=r(4),i=r(10),o=r(27),s=r(5)
function a(e){return["table","td","th"].indexOf((0,i.Z)(e))>=0}var l=r(69),u=r(195)
function c(e){return(0,s.Re)(e)&&"fixed"!==(0,o.Z)(e).position?e.offsetParent:null}function p(e){for(var t=(0,n.Z)(e),r=c(e);r&&a(r)&&"static"===(0,o.Z)(r).position;)r=c(r)
return r&&("html"===(0,i.Z)(r)||"body"===(0,i.Z)(r)&&"static"===(0,o.Z)(r).position)?t:r||function(e){var t=/firefox/i.test((0,u.Z)())
if(/Trident/i.test((0,u.Z)())&&(0,s.Re)(e)&&"fixed"===(0,o.Z)(e).position)return null
var r=(0,l.Z)(e)
for((0,s.Zq)(r)&&(r=r.host);(0,s.Re)(r)&&["html","body"].indexOf((0,i.Z)(r))<0;){var n=(0,o.Z)(r)
if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r
r=r.parentNode}return null}(e)||t}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(5)
function i(e){return(((0,n.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}},e=>{e.exports=function(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}},(e,t,r)=>{"use strict"
e.exports=r(114).extend({implicit:[r(52),r(53)],explicit:[r(54),r(55),r(56),r(57)]})},e=>{var t=Array.isArray,r=Object.prototype.toString
e.exports=t||function(e){return"[object Array]"===r.call(e)}},e=>{e.exports={indexOf:function(e,t){var r,n
if(Array.prototype.indexOf)return e.indexOf(t)
for(r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1},forEach:function(e,t,r){var n,i
if(Array.prototype.forEach)return e.forEach(t,r)
for(n=0,i=e.length;n<i;n++)t.call(r,e[n],n,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e)
return t?t.index:-1}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>_})
var n=r(3),i=r(4),o=r(19),s=r(153),a=r(151),l=r(27),u=r(70),c=r(12),p=r(154),d=r(18),h=r(5),f=r(26),m=r(69),g=r(152),v=r(10)
function y(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function b(e,t,r){return t===n.Pj?y(function(e,t){var r=(0,i.Z)(e),n=(0,o.Z)(e),l=r.visualViewport,u=n.clientWidth,c=n.clientHeight,p=0,d=0
if(l){u=l.width,c=l.height
var h=(0,a.Z)();(h||!h&&"fixed"===t)&&(p=l.offsetLeft,d=l.offsetTop)}return{width:u,height:c,x:p+(0,s.Z)(e),y:d}}(e,r)):(0,h.kK)(t)?function(e,t){var r=(0,f.Z)(e,!1,"fixed"===t)
return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):y(function(e){var t,r=(0,o.Z)(e),n=(0,u.Z)(e),i=null==(t=e.ownerDocument)?void 0:t.body,a=(0,c.Fp)(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),p=(0,c.Fp)(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),d=-n.scrollLeft+(0,s.Z)(e),h=-n.scrollTop
return"rtl"===(0,l.Z)(i||r).direction&&(d+=(0,c.Fp)(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:p,x:d,y:h}}((0,o.Z)(e)))}var w=r(197),k=r(191),x=r(193)
function _(e,t){void 0===t&&(t={})
var r=t,i=r.placement,s=void 0===i?e.placement:i,a=r.strategy,u=void 0===a?e.strategy:a,_=r.boundary,S=void 0===_?n.zV:_,P=r.rootBoundary,O=void 0===P?n.Pj:P,E=r.elementContext,A=void 0===E?n.k5:E,C=r.altBoundary,T=void 0!==C&&C,j=r.padding,I=void 0===j?0:j,L=(0,k.Z)("number"!=typeof I?I:(0,x.Z)(I,n.mv)),F=A===n.k5?n.YP:n.k5,M=e.rects.popper,N=e.elements[T?F:A],R=function(e,t,r,n){var i="clippingParents"===t?function(e){var t=(0,p.Z)((0,m.Z)(e)),r=["absolute","fixed"].indexOf((0,l.Z)(e).position)>=0&&(0,h.Re)(e)?(0,d.Z)(e):e
return(0,h.kK)(r)?t.filter((function(e){return(0,h.kK)(e)&&(0,g.Z)(e,r)&&"body"!==(0,v.Z)(e)})):[]}(e):[].concat(t),o=[].concat(i,[r]),s=o[0],a=o.reduce((function(t,r){var i=b(e,r,n)
return t.top=(0,c.Fp)(i.top,t.top),t.right=(0,c.VV)(i.right,t.right),t.bottom=(0,c.VV)(i.bottom,t.bottom),t.left=(0,c.Fp)(i.left,t.left),t}),b(e,s,n))
return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}((0,h.kK)(N)?N:N.contextElement||(0,o.Z)(e.elements.popper),S,O,u),$=(0,f.Z)(e.elements.reference),U=(0,w.Z)({reference:$,element:M,strategy:"absolute",placement:s}),D=y(Object.assign({},M,U)),Z=A===n.k5?D:$,H={top:R.top-Z.top+L.top,bottom:Z.bottom-R.bottom+L.bottom,left:R.left-Z.left+L.left,right:Z.right-R.right+L.right},B=e.modifiersData.offset
if(A===n.k5&&B){var V=B[s]
Object.keys(H).forEach((function(e){var t=[n.F2,n.I].indexOf(e)>=0?1:-1,r=[n.we,n.I].indexOf(e)>=0?"y":"x"
H[e]+=V[r]*t}))}return H}},(e,t,r)=>{"use strict"
function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}r.r(t),r.d(t,{default:()=>l})
var i=0
function o(e){return"__private_"+i+++"_"+e}var s=o("emitter"),a=o("events")
class l{constructor(e){Object.defineProperty(this,s,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:[]}),n(this,s)[s]=e}on(e,t){return n(this,a)[a].push([e,t]),n(this,s)[s].on(e,t)}remove(){for(const[e,t]of n(this,a)[a].splice(0))n(this,s)[s].off(e,t)}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>a})
var n=r(5),i=r(12),o=r(4),s=r(151)
function a(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1)
var a=e.getBoundingClientRect(),l=1,u=1
t&&(0,n.Re)(e)&&(l=e.offsetWidth>0&&(0,i.NM)(a.width)/e.offsetWidth||1,u=e.offsetHeight>0&&(0,i.NM)(a.height)/e.offsetHeight||1)
var c=((0,n.kK)(e)?(0,o.Z)(e):window).visualViewport,p=!(0,s.Z)()&&r,d=(a.left+(p&&c?c.offsetLeft:0))/l,h=(a.top+(p&&c?c.offsetTop:0))/u,f=a.width/l,m=a.height/u
return{width:f,height:m,top:h,right:d+f,bottom:h+m,left:d,x:d,y:h}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(4)
function i(e){return(0,n.Z)(e).getComputedStyle(e)}},(e,t,r)=>{"use strict"
function n(e){return e.split("-")[1]}r.d(t,{Z:()=>n})},(e,t,r)=>{var n=r(136),i=r(137)
for(var o in(t=e.exports=function(e,t){return new i(t).process(e)}).FilterCSS=i,n)t[o]=n[o]
"undefined"!=typeof window&&(window.filterCSS=e.exports)},(e,t,r)=>{"use strict"
function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}r.d(t,{B:()=>E,s:()=>k})
var i=0
function o(e){return"__private_"+i+++"_"+e}function s(e){if(null!=e){var t
const r=()=>this.abort(e.reason)
e.addEventListener("abort",r,{once:!0})
const n=()=>{e.removeEventListener("abort",r)}
null==(t=this.then)||t.call(this,n,n)}return this}var a=o("activeRequests"),l=o("queuedHandlers"),u=o("paused"),c=o("pauseTimer"),p=o("downLimit"),d=o("upperLimit"),h=o("rateLimitingTimer"),f=o("call"),m=o("queueNext"),g=o("next"),v=o("queue"),y=o("dequeue"),b=o("resume"),w=o("increaseLimit")
class k{constructor(e){Object.defineProperty(this,y,{value:O}),Object.defineProperty(this,v,{value:P}),Object.defineProperty(this,g,{value:S}),Object.defineProperty(this,m,{value:_}),Object.defineProperty(this,f,{value:x}),Object.defineProperty(this,a,{writable:!0,value:0}),Object.defineProperty(this,l,{writable:!0,value:[]}),Object.defineProperty(this,u,{writable:!0,value:!1}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:1}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,b,{writable:!0,value:()=>this.resume()}),Object.defineProperty(this,w,{writable:!0,value:()=>{if(n(this,u)[u])n(this,h)[h]=setTimeout(n(this,w)[w],0)
else{n(this,p)[p]=this.limit,this.limit=Math.ceil((n(this,d)[d]+n(this,p)[p])/2)
for(let e=n(this,p)[p];e<=this.limit;e++)n(this,m)[m]()
n(this,d)[d]-n(this,p)[p]>3?n(this,h)[h]=setTimeout(n(this,w)[w],2e3):n(this,p)[p]=Math.floor(n(this,p)[p]/2)}}}),this.limit="number"!=typeof e||0===e?1/0:e}run(e,t){return!n(this,u)[u]&&n(this,a)[a]<this.limit?n(this,f)[f](e):n(this,v)[v](e,t)}wrapSyncFunction(e,t){var r=this
return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o]
const a=r.run((()=>(e(...i),queueMicrotask((()=>a.done())),()=>{})),t)
return{abortOn:s,abort(){a.abort()}}}}wrapPromiseFunction(e,t){var r=this
return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o]
let a
const l=new Promise(((n,o)=>{a=r.run((()=>{let t,r
try{r=Promise.resolve(e(...i))}catch(e){r=Promise.reject(e)}return r.then((e=>{t?o(t):(a.done(),n(e))}),(e=>{t?o(t):(a.done(),o(e))})),e=>{t=function(e){return new Error("Cancelled",{cause:e})}(e)}}),t)}))
return l.abort=e=>{a.abort(e)},l.abortOn=s,l}}resume(){n(this,u)[u]=!1,clearTimeout(n(this,c)[c])
for(let e=0;e<this.limit;e++)n(this,m)[m]()}pause(e){void 0===e&&(e=null),n(this,u)[u]=!0,clearTimeout(n(this,c)[c]),null!=e&&(n(this,c)[c]=setTimeout(n(this,b)[b],e))}rateLimit(e){clearTimeout(n(this,h)[h]),this.pause(e),this.limit>1&&Number.isFinite(this.limit)&&(n(this,d)[d]=this.limit-1,this.limit=n(this,p)[p],n(this,h)[h]=setTimeout(n(this,w)[w],e))}get isPaused(){return n(this,u)[u]}}function x(e){n(this,a)[a]+=1
let t,r=!1
try{t=e()}catch(e){throw n(this,a)[a]-=1,e}return{abort:e=>{r||(r=!0,n(this,a)[a]-=1,t(e),n(this,m)[m]())},done:()=>{r||(r=!0,n(this,a)[a]-=1,n(this,m)[m]())}}}function _(){queueMicrotask((()=>n(this,g)[g]()))}function S(){if(n(this,u)[u]||n(this,a)[a]>=this.limit)return
if(0===n(this,l)[l].length)return
const e=n(this,l)[l].shift(),t=n(this,f)[f](e.fn)
e.abort=t.abort,e.done=t.done}function P(e,t){void 0===t&&(t={})
const r={fn:e,priority:t.priority||0,abort:()=>{n(this,y)[y](r)},done:()=>{throw new Error("Cannot mark a queued request as done: this indicates a bug")}},i=n(this,l)[l].findIndex((e=>r.priority>e.priority))
return-1===i?n(this,l)[l].push(r):n(this,l)[l].splice(i,0,r),r}function O(e){const t=n(this,l)[l].indexOf(e);-1!==t&&n(this,l)[l].splice(t,1)}const E=Symbol("__queue")},(e,t,r)=>{"use strict"
r.d(t,{zt:()=>x,C$:()=>g,sk:()=>F})
var n={}
r.r(n),r.d(n,{getItem:()=>w,removeItem:()=>k,setItem:()=>b})
var i=r(71),o=r(156)
class s extends Error{constructor(){super("Authorization required"),this.name="AuthError",this.isAuthError=!0}}const a=s
let l
function u(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var c=0
function p(e){return"__private_"+c+++"_"+e}const d=new Map
var h=p("companionHeaders"),f=p("getUrl"),m=p("request")
l=Symbol.for("uppy test: getCompanionHeaders")
class g{constructor(e,t){Object.defineProperty(this,m,{value:y}),Object.defineProperty(this,f,{value:v}),Object.defineProperty(this,h,{writable:!0,value:void 0}),this.uppy=e,this.opts=t,this.onReceiveResponse=this.onReceiveResponse.bind(this),u(this,h)[h]=null==t?void 0:t.companionHeaders}setCompanionHeaders(e){u(this,h)[h]=e}[l](){return u(this,h)[h]}get hostname(){const{companion:e}=this.uppy.getState(),t=this.opts.companionUrl
return(e&&e[t]?e[t]:t).replace(/\/$/,"")}async headers(){return{Accept:"application/json","Content-Type":"application/json","Uppy-Versions":`@uppy/companion-client=${g.VERSION}`,...u(this,h)[h]}}onReceiveResponse(e){let{headers:t}=e
const r=this.uppy.getState().companion||{},n=this.opts.companionUrl
t.has("i-am")&&t.get("i-am")!==r[n]&&this.uppy.setState({companion:{...r,[n]:t.get("i-am")}})}async preflight(e){const t=d.get(this.hostname)
if(null!=t)return t
const r=["accept","content-type","uppy-auth-token"],n=(async()=>{try{const t=(await fetch(u(this,f)[f](e),{method:"OPTIONS"})).headers.get("access-control-allow-headers")
if(null==t||"*"===t)return d.set(this.hostname,r),r
this.uppy.log(`[CompanionClient] adding allowed preflight headers to companion cache: ${this.hostname} ${t}`)
const n=t.split(",").map((e=>e.trim().toLowerCase()))
return d.set(this.hostname,n),n}catch(e){return this.uppy.log(`[CompanionClient] unable to make preflight request ${e}`,"warning"),d.delete(this.hostname),r}})()
return d.set(this.hostname,n),n}async preflightAndHeaders(e){const[t,r]=await Promise.all([this.preflight(e),this.headers()])
return Object.fromEntries(Object.entries(r).filter((e=>{let[r]=e
return!!t.includes(r.toLowerCase())||(this.uppy.log(`[CompanionClient] excluding disallowed header ${r}`),!1)})))}async get(e,t){return void 0===t&&(t=void 0),"boolean"==typeof t&&(t={skipPostResponse:t}),u(this,m)[m]({...t,path:e})}async post(e,t,r){return void 0===r&&(r=void 0),"boolean"==typeof r&&(r={skipPostResponse:r}),u(this,m)[m]({...r,path:e,method:"POST",data:t})}async delete(e,t,r){return void 0===t&&(t=void 0),"boolean"==typeof r&&(r={skipPostResponse:r}),u(this,m)[m]({...r,path:e,method:"DELETE",data:t})}}function v(e){return/^(https?:|)\/\//.test(e)?e:`${this.hostname}/${e}`}async function y(e){let{path:t,method:r="GET",data:n,skipPostResponse:s,signal:l}=e
try{const e=await this.preflightAndHeaders(t),o=await function(){return fetch(...arguments).catch((e=>{throw"AbortError"===e.name?e:new i.Z(e)}))}(u(this,f)[f](t),{method:r,signal:l,headers:e,credentials:this.opts.companionCookiesRule||"same-origin",body:n?JSON.stringify(n):null})
return s||this.onReceiveResponse(o),async function(e){if(401===e.status)throw new a
const t=e.json()
if(e.ok)return t
let r=`Failed request with status: ${e.status}. ${e.statusText}`
try{const e=await t
r=e.message?`${r} message: ${e.message}`:r,r=e.requestId?`${r} request-Id: ${e.requestId}`:r}catch{}throw new Error(r)}(o)}catch(e){if(null!=e&&e.isAuthError)throw e
throw new o.Z(`Could not ${r} ${u(this,f)[f](t)}`,{cause:e})}}function b(e,t){return new Promise((r=>{localStorage.setItem(e,t),r()}))}function w(e){return Promise.resolve(localStorage.getItem(e))}function k(e){return new Promise((t=>{localStorage.removeItem(e),t()}))}g.VERSION="3.1.3"
class x extends g{constructor(e,t){super(e,t),this.provider=t.provider,this.id=this.provider,this.name=this.opts.name||(e=>this.id.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "))(),this.pluginId=this.opts.pluginId,this.tokenKey=`companion-${this.pluginId}-auth-token`,this.companionKeysParams=this.opts.companionKeysParams,this.preAuthToken=null}async headers(){const[e,t]=await Promise.all([super.headers(),this.getAuthToken()]),r={}
return t&&(r["uppy-auth-token"]=t),this.companionKeysParams&&(r["uppy-credentials-params"]=btoa(JSON.stringify({params:this.companionKeysParams}))),{...e,...r}}onReceiveResponse(e){super.onReceiveResponse(e)
const t=this.uppy.getPlugin(this.pluginId),r=t.getPluginState().authenticated?401!==e.status:e.status<400
return t.setPluginState({authenticated:r}),e}setAuthToken(e){return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey,e)}getAuthToken(){return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey)}async ensurePreAuth(){if(this.companionKeysParams&&!this.preAuthToken&&(await this.fetchPreAuthToken(),!this.preAuthToken))throw new Error("Could not load authentication data required for third-party login. Please try again later.")}authUrl(e){void 0===e&&(e={})
const t=new URLSearchParams(e)
return this.preAuthToken&&t.set("uppyPreAuthToken",this.preAuthToken),`${this.hostname}/${this.id}/connect?${t}`}fileUrl(e){return`${this.hostname}/${this.id}/get/${e}`}async fetchPreAuthToken(){if(this.companionKeysParams)try{const e=await this.post(`${this.id}/preauth/`,{params:this.companionKeysParams})
this.preAuthToken=e.token}catch(e){this.uppy.log(`[CompanionClient] unable to fetch preAuthToken ${e}`,"warning")}}list(e){return this.get(`${this.id}/list/${e||""}`)}logout(){return this.get(`${this.id}/logout`).then((e=>Promise.all([e,this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey)]))).then((e=>{let[t]=e
return t}))}static initPlugin(e,t,r){if(e.type="acquirer",e.files=[],r&&(e.opts={...r,...t}),t.serverUrl||t.serverPattern)throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`")
if(t.companionAllowedHosts){const r=t.companionAllowedHosts
if(!("string"==typeof r||Array.isArray(r)||r instanceof RegExp))throw new TypeError(`${e.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`)
e.opts.companionAllowedHosts=r}else/^(?!https?:\/\/).*$/i.test(t.companionUrl)?e.opts.companionAllowedHosts=`https://${t.companionUrl.replace(/^\/\//,"")}`:e.opts.companionAllowedHosts=new URL(t.companionUrl).origin
e.storage=e.opts.storage||n}}var _=r(37)
let S,P
function O(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var E=0
function A(e){return"__private_"+E+++"_"+e}var C=A("queued"),T=A("emitter"),j=A("isOpen"),I=A("socket"),L=A("handleMessage")
S=Symbol.for("uppy test: getSocket"),P=Symbol.for("uppy test: getQueued")
class F{constructor(e){Object.defineProperty(this,C,{writable:!0,value:[]}),Object.defineProperty(this,T,{writable:!0,value:_()}),Object.defineProperty(this,j,{writable:!0,value:!1}),Object.defineProperty(this,I,{writable:!0,value:void 0}),Object.defineProperty(this,L,{writable:!0,value:e=>{try{const t=JSON.parse(e.data)
this.emit(t.action,t.payload)}catch(e){console.log(e)}}}),this.opts=e,e&&!1===e.autoOpen||this.open()}get isOpen(){return O(this,j)[j]}[S](){return O(this,I)[I]}[P](){return O(this,C)[C]}open(){null==O(this,I)[I]&&(O(this,I)[I]=new WebSocket(this.opts.target),O(this,I)[I].onopen=()=>{for(O(this,j)[j]=!0;O(this,C)[C].length>0&&O(this,j)[j];){const e=O(this,C)[C].shift()
this.send(e.action,e.payload)}},O(this,I)[I].onclose=()=>{O(this,j)[j]=!1,O(this,I)[I]=null},O(this,I)[I].onmessage=O(this,L)[L])}close(){var e
null==(e=O(this,I)[I])||e.close()}send(e,t){O(this,j)[j]?O(this,I)[I].send(JSON.stringify({action:e,payload:t})):O(this,C)[C].push({action:e,payload:t})}on(e,t){O(this,T)[T].on(e,t)}emit(e,t){O(this,T)[T].emit(e,t)}once(e,t){O(this,T)[T].once(e,t)}}},(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(1),i={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(i.methodMap,e.toLowerCase())
e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=i.lookupLevel(e),"undefined"!=typeof console&&i.lookupLevel(i.level)<=e){var t=i.methodMap[e]
console[t]||(t="log")
for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o]
console[t].apply(console,n)}}}
t.default=i,e.exports=t.default},(e,t)=>{"use strict"
t.__esModule=!0,t.default=function(e){"object"!=typeof globalThis&&(Object.prototype.__defineGetter__("__magic__",(function(){return this})),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)
var t=globalThis.Handlebars
e.noConflict=function(){return globalThis.Handlebars===e&&(globalThis.Handlebars=t),e}},e.exports=t.default},(e,t)=>{"use strict"
t.__esModule=!0
var r={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!r.helpers.scopedId(e)&&!e.depth}}}
t.default=r,e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n,i=(n=r(2))&&n.__esModule?n:{default:n}
function o(){this.parents=[]}function s(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function a(e){s.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function l(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}o.prototype={constructor:o,mutating:!1,acceptKey:function(e,t){var r=this.accept(e[t])
if(this.mutating){if(r&&!o.prototype[r.type])throw new i.default('Unexpected node type "'+r.type+'" found when accepting '+t+" on "+e.type)
e[t]=r}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new i.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,r=e.length;t<r;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,r--)},accept:function(e){if(e){if(!this[e.type])throw new i.default("Unknown type: "+e.type,e)
this.current&&this.parents.unshift(this.current),this.current=e
var t=this[e.type](e)
return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:s,Decorator:s,BlockStatement:a,DecoratorBlock:a,PartialStatement:l,PartialBlockStatement:function(e){l.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:s,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},t.default=o,e.exports=t.default},,e=>{e.exports=function(){var e={},t=e._fns={}
return e.emit=function(e,r,n,i,o,s,a){var l=function(e){for(var r=t[e]?t[e]:[],n=e.indexOf(":"),i=-1===n?[e]:[e.substring(0,n),e.substring(n+1)],o=Object.keys(t),s=0,a=o.length;s<a;s++){var l=o[s]
if("*"===l&&(r=r.concat(t[l])),2===i.length&&i[0]===l){r=r.concat(t[l])
break}}return r}(e)
l.length&&function(e,t,r){for(var n=0,i=t.length;n<i&&t[n];n++)t[n].event=e,t[n].apply(t[n],r)}(e,l,[r,n,i,o,s,a])},e.on=function(e,r){t[e]||(t[e]=[]),t[e].push(r)},e.once=function(t,r){this.on(t,(function n(){r.apply(this,arguments),e.off(t,n)}))},e.off=function(e,t){var r=[]
if(e&&t)for(var n=this._fns[e],i=0,o=n?n.length:0;i<o;i++)n[i]!==t&&r.push(n[i])
r.length?this._fns[e]=r:delete this._fns[e]},e}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
const n=r(95)((function(e,t,r){const{progress:n,bytesUploaded:i,bytesTotal:o}=t
n&&(e.uppy.log(`Upload progress: ${n}`),e.uppy.emit("upload-progress",r,{uploader:e,bytesUploaded:i,bytesTotal:o}))}),300,{leading:!0,trailing:!0})},(e,t,r)=>{var n=r(98),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")()
e.exports=o},(e,t,r)=>{var n=r(39).Symbol
e.exports=n},(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=p
var i=r(1),o=n(r(2)),s=r(111),a=r(177),l=n(r(32)),u=r(112)
t.VERSION="4.7.8",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"}
var c="[object Object]"
function p(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},s.registerDefaultHelpers(this),a.registerDefaultDecorators(this)}p.prototype={constructor:p,logger:l.default,log:l.default.log,registerHelper:function(e,t){if(i.toString.call(e)===c){if(t)throw new o.default("Arg not supported with multiple helpers")
i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(i.toString.call(e)===c)i.extend(this.partials,e)
else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined')
this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(i.toString.call(e)===c){if(t)throw new o.default("Arg not supported with multiple decorators")
i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}}
var d=l.default.log
t.log=d,t.createFrame=i.createFrame,t.logger=l.default},(e,t,r)=>{"use strict"
e.exports=r(43).extend({implicit:[r(48),r(49),r(50),r(51)]})},(e,t,r)=>{"use strict"
var n=r(44)
e.exports=new n({explicit:[r(45),r(46),r(47)]})},(e,t,r)=>{"use strict"
var n=r(7),i=r(0)
function o(e,t){var r=[]
return e[t].forEach((function(e){var t=r.length
r.forEach((function(r,n){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=n)})),r[t]=e})),r}function s(e){return this.extend(e)}s.prototype.extend=function(e){var t=[],r=[]
if(e instanceof i)r.push(e)
else if(Array.isArray(e))r=r.concat(e)
else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })")
e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof i))throw new n("Specified list of YAML types (or a single Type object) contains a non-Type object.")
if(e.loadKind&&"scalar"!==e.loadKind)throw new n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")
if(e.multi)throw new n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),r.forEach((function(e){if(!(e instanceof i))throw new n("Specified list of YAML types (or a single Type object) contains a non-Type object.")}))
var a=Object.create(s.prototype)
return a.implicit=(this.implicit||[]).concat(t),a.explicit=(this.explicit||[]).concat(r),a.compiledImplicit=o(a,"implicit"),a.compiledExplicit=o(a,"explicit"),a.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}}
function n(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n)
return r}(a.compiledImplicit,a.compiledExplicit),a},e.exports=s},(e,t,r)=>{"use strict"
var n=r(0)
e.exports=new n("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}})},(e,t,r)=>{"use strict"
var n=r(0)
e.exports=new n("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}})},(e,t,r)=>{"use strict"
var n=r(0)
e.exports=new n("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})},(e,t,r)=>{"use strict"
var n=r(0)
e.exports=new n("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0
var t=e.length
return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"})},(e,t,r)=>{"use strict"
var n=r(0)
e.exports=new n("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1
var t=e.length
return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})},(e,t,r)=>{"use strict"
var n=r(13),i=r(0)
function o(e){return 48<=e&&e<=55}function s(e){return 48<=e&&e<=57}e.exports=new i("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1
var t,r,n=e.length,i=0,a=!1
if(!n)return!1
if("-"!==(t=e[i])&&"+"!==t||(t=e[++i]),"0"===t){if(i+1===n)return!0
if("b"===(t=e[++i])){for(i++;i<n;i++)if("_"!==(t=e[i])){if("0"!==t&&"1"!==t)return!1
a=!0}return a&&"_"!==t}if("x"===t){for(i++;i<n;i++)if("_"!==(t=e[i])){if(!(48<=(r=e.charCodeAt(i))&&r<=57||65<=r&&r<=70||97<=r&&r<=102))return!1
a=!0}return a&&"_"!==t}if("o"===t){for(i++;i<n;i++)if("_"!==(t=e[i])){if(!o(e.charCodeAt(i)))return!1
a=!0}return a&&"_"!==t}}if("_"===t)return!1
for(;i<n;i++)if("_"!==(t=e[i])){if(!s(e.charCodeAt(i)))return!1
a=!0}return!(!a||"_"===t)},construct:function(e){var t,r=e,n=1
if(-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),"-"!==(t=r[0])&&"+"!==t||("-"===t&&(n=-1),t=(r=r.slice(1))[0]),"0"===r)return 0
if("0"===t){if("b"===r[1])return n*parseInt(r.slice(2),2)
if("x"===r[1])return n*parseInt(r.slice(2),16)
if("o"===r[1])return n*parseInt(r.slice(2),8)}return n*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!n.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},(e,t,r)=>{"use strict"
var n=r(13),i=r(0),o=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),s=/^[-+]?[0-9]+e/
e.exports=new i("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!o.test(e)||"_"===e[e.length-1])},construct:function(e){var t,r
return r="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:r*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||n.isNegativeZero(e))},represent:function(e,t){var r
if(isNaN(e))switch(t){case"lowercase":return".nan"
case"uppercase":return".NAN"
case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf"
case"uppercase":return".INF"
case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf"
case"uppercase":return"-.INF"
case"camelcase":return"-.Inf"}else if(n.isNegativeZero(e))return"-0.0"
return r=e.toString(10),s.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"})},(e,t,r)=>{"use strict"
var n=r(0),i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),o=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$")
e.exports=new n("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==i.exec(e)||null!==o.exec(e))},construct:function(e){var t,r,n,s,a,l,u,c,p=0,d=null
if(null===(t=i.exec(e))&&(t=o.exec(e)),null===t)throw new Error("Date resolve error")
if(r=+t[1],n=+t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(r,n,s))
if(a=+t[4],l=+t[5],u=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0"
p=+p}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),c=new Date(Date.UTC(r,n,s,a,l,u,p)),d&&c.setTime(c.getTime()-d),c},instanceOf:Date,represent:function(e){return e.toISOString()}})},(e,t,r)=>{"use strict"
var n=r(0)
e.exports=new n("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}})},(e,t,r)=>{"use strict"
var n=r(0),i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r"
e.exports=new n("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1
var t,r,n=0,o=e.length,s=i
for(r=0;r<o;r++)if(!((t=s.indexOf(e.charAt(r)))>64)){if(t<0)return!1
n+=6}return n%8==0},construct:function(e){var t,r,n=e.replace(/[\r\n=]/g,""),o=n.length,s=i,a=0,l=[]
for(t=0;t<o;t++)t%4==0&&t&&(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)),a=a<<6|s.indexOf(n.charAt(t))
return 0==(r=o%4*6)?(l.push(a>>16&255),l.push(a>>8&255),l.push(255&a)):18===r?(l.push(a>>10&255),l.push(a>>2&255)):12===r&&l.push(a>>4&255),new Uint8Array(l)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,r,n="",o=0,s=e.length,a=i
for(t=0;t<s;t++)t%3==0&&t&&(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]),o=(o<<8)+e[t]
return 0==(r=s%3)?(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[63&o]):2===r?(n+=a[o>>10&63],n+=a[o>>4&63],n+=a[o<<2&63],n+=a[64]):1===r&&(n+=a[o>>2&63],n+=a[o<<4&63],n+=a[64],n+=a[64]),n}})},(e,t,r)=>{"use strict"
var n=r(0),i=Object.prototype.hasOwnProperty,o=Object.prototype.toString
e.exports=new n("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0
var t,r,n,s,a,l=[],u=e
for(t=0,r=u.length;t<r;t+=1){if(n=u[t],a=!1,"[object Object]"!==o.call(n))return!1
for(s in n)if(i.call(n,s)){if(a)return!1
a=!0}if(!a)return!1
if(-1!==l.indexOf(s))return!1
l.push(s)}return!0},construct:function(e){return null!==e?e:[]}})},(e,t,r)=>{"use strict"
var n=r(0),i=Object.prototype.toString
e.exports=new n("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0
var t,r,n,o,s,a=e
for(s=new Array(a.length),t=0,r=a.length;t<r;t+=1){if(n=a[t],"[object Object]"!==i.call(n))return!1
if(1!==(o=Object.keys(n)).length)return!1
s[t]=[o[0],n[o[0]]]}return!0},construct:function(e){if(null===e)return[]
var t,r,n,i,o,s=e
for(o=new Array(s.length),t=0,r=s.length;t<r;t+=1)n=s[t],i=Object.keys(n),o[t]=[i[0],n[i[0]]]
return o}})},(e,t,r)=>{"use strict"
var n=r(0),i=Object.prototype.hasOwnProperty
e.exports=new n("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0
var t,r=e
for(t in r)if(i.call(r,t)&&null!==r[t])return!1
return!0},construct:function(e){return null!==e?e:{}}})},(e,t,r)=>{var n=r(8)
function i(e,t,r){this.type=Number(e),this.vNode=t,this.patch=r}i.NONE=0,i.VTEXT=1,i.VNODE=2,i.WIDGET=3,i.PROPS=4,i.ORDER=5,i.INSERT=6,i.REMOVE=7,i.THUNK=8,e.exports=i,i.prototype.version=n,i.prototype.type="VirtualPatch"},(e,t,r)=>{var n=r(9),i=r(14),o=r(6),s=r(15)
function a(e,t){var r=e.vnode
if(r||(r=e.vnode=e.render(t)),!(n(r)||i(r)||o(r)))throw new Error("thunk did not return a valid node")
return r}e.exports=function(e,t){var r=e,n=t
return s(t)&&(n=a(t,e)),s(e)&&(r=a(e,null)),{a:r,b:n}}},e=>{"use strict"
e.exports=function(e){return"object"==typeof e&&null!==e}},(e,t,r)=>{var n,i="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},o=r(188)
"undefined"!=typeof document?n=document:(n=i["__GLOBAL_DOCUMENT_CACHE@4"])||(n=i["__GLOBAL_DOCUMENT_CACHE@4"]=o),e.exports=n},(e,t,r)=>{var n=r(61),i=r(63),o=r(9),s=r(14),a=r(6),l=r(59)
e.exports=function e(t,r){var u=r&&r.document||n,c=r?r.warn:null
if(t=l(t).a,a(t))return t.init()
if(s(t))return u.createTextNode(t.text)
if(!o(t))return c&&c("Item is not a valid virtual dom node",t),null
var p=null===t.namespace?u.createElement(t.tagName):u.createElementNS(t.namespace,t.tagName),d=t.properties
i(p,d)
for(var h=t.children,f=0;f<h.length;f++){var m=e(h[f],r)
m&&p.appendChild(m)}return p}},(e,t,r)=>{var n=r(60),i=r(16)
function o(e,t,r,n){if(n){var o=n[t]
if(i(o))o.unhook&&o.unhook(e,t,r)
else if("attributes"===t)for(var s in o)e.removeAttribute(s)
else if("style"===t)for(var a in o)e.style[a]=""
else e[t]="string"==typeof o?"":null}}function s(e,t,r,i,o){var s=r?r[i]:void 0
if("attributes"!==i)if(s&&n(s)&&a(s)!==a(o))e[i]=o
else{n(e[i])||(e[i]={})
var l="style"===i?"":void 0
for(var u in o){var c=o[u]
e[i][u]=void 0===c?l:c}}else for(var p in o){var d=o[p]
void 0===d?e.removeAttribute(p):e.setAttribute(p,d)}}function a(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function(e,t,r){for(var a in t){var l=t[a]
void 0===l?o(e,a,l,r):i(l)?(o(e,a,l,r),l.hook&&l.hook(e,a,r?r[a]:void 0)):n(l)?s(e,0,r,a,l):e[a]=l}}},(e,t,r)=>{var n=r(8),i=r(9),o=r(6),s=r(15),a=r(16)
e.exports=c
var l={},u=[]
function c(e,t,r,n,c){this.tagName=e,this.properties=t||l,this.children=r||u,this.key=null!=n?String(n):void 0,this.namespace="string"==typeof c?c:null
var p,d=r&&r.length||0,h=0,f=!1,m=!1,g=!1
for(var v in t)if(t.hasOwnProperty(v)){var y=t[v]
a(y)&&y.unhook&&(p||(p={}),p[v]=y)}for(var b=0;b<d;b++){var w=r[b]
i(w)?(h+=w.count||0,!f&&w.hasWidgets&&(f=!0),!m&&w.hasThunks&&(m=!0),g||!w.hooks&&!w.descendantHooks||(g=!0)):!f&&o(w)?"function"==typeof w.destroy&&(f=!0):!m&&s(w)&&(m=!0)}this.count=d+h,this.hasWidgets=f,this.hasThunks=m,this.hooks=p,this.descendantHooks=g}c.prototype.version=n,c.prototype.type="VirtualNode"},(e,t,r)=>{var n=r(8)
function i(e){this.text=String(e)}e.exports=i,i.prototype.version=n,i.prototype.type="VirtualText"},e=>{e.exports={indexOf:function(e,t){var r,n
if(Array.prototype.indexOf)return e.indexOf(t)
for(r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1},forEach:function(e,t,r){var n,i
if(Array.prototype.forEach)return e.forEach(t,r)
for(n=0,i=e.length;n<i;n++)t.call(r,e[n],n,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(10),i=r(5)
const o={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},o=t.attributes[e]||{},s=t.elements[e];(0,i.Re)(s)&&(0,n.Z)(s)&&(Object.assign(s.style,r),Object.keys(o).forEach((function(e){var t=o[e]
!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],s=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});(0,i.Re)(o)&&(0,n.Z)(o)&&(Object.assign(o.style,a),Object.keys(s).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]}},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{AbortController:()=>i,AbortSignal:()=>o,createAbortError:()=>s})
var n=r(72)
const{AbortController:i}=globalThis,{AbortSignal:o}=globalThis,s=function(e,t){void 0===e&&(e="Aborted")
const r=new DOMException(e,"AbortError")
return null!=t&&(0,n.Z)(t,"cause")&&Object.defineProperty(r,"cause",{__proto__:null,configurable:!0,writable:!0,value:t.cause}),r}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>s})
var n=r(10),i=r(19),o=r(5)
function s(e){return"html"===(0,n.Z)(e)?e:e.assignedSlot||e.parentNode||((0,o.Zq)(e)?e.host:null)||(0,i.Z)(e)}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(4)
function i(e){var t=(0,n.Z)(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
class n extends Error{constructor(e,t){void 0===t&&(t=null),super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."),this.cause=e,this.isNetworkError=!0,this.request=t}}const i=n},(e,t,r)=>{"use strict"
function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
function n(e){const t=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(e)[1]
return`${/^http:\/\//i.test(e)?"ws":"wss"}://${t}`}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
r.d(t,{x:()=>n})
let n=function(){let e="",t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21
for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0]
return e}},(e,t,r)=>{var n=r(135),i=r(139),o=r(140)
function s(e,t){return new o(t).process(e)}(t=e.exports=s).filterXSS=s,t.FilterXSS=o,function(){for(var e in n)t[e]=n[e]
for(var r in i)t[r]=i[r]}(),"undefined"!=typeof window&&(window.filterXSS=e.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=e.exports)},,(e,t,r)=>{var n
!function(i,o,s){if(i){for(var a,l={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},u={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},c={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},p={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},d={},h=1;h<20;++h)l[111+h]="f"+h
for(h=0;h<=9;++h)l[h+96]=h.toString()
k.prototype.bind=function(e,t,r){var n=this
return e=e instanceof Array?e:[e],n._bindMultiple.call(n,e,t,r),n},k.prototype.unbind=function(e,t){return this.bind.call(this,e,(function(){}),t)},k.prototype.trigger=function(e,t){var r=this
return r._directMap[e+":"+t]&&r._directMap[e+":"+t]({},e),r},k.prototype.reset=function(){var e=this
return e._callbacks={},e._directMap={},e},k.prototype.destroy=function(){var e=this
e.reset(),m(e.target,"keypress",e._handleKeyEvent),m(e.target,"keydown",e._handleKeyEvent),m(e.target,"keyup",e._handleKeyEvent),e.target=s,e._handleKeyEvent=s},k.prototype.stopCallback=function(e,t,r,n){if(this.paused)return!0
if(d[r]||d[n])return!1
if((" "+t.className+" ").indexOf(" itsatrap ")>-1)return!1
if(w(t,this.target))return!1
if("composedPath"in e&&"function"==typeof e.composedPath){var i=e.composedPath()[0]
i!==e.target&&(t=i)}return"INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable},k.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},k.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(l[t]=e[t])
a=null},k.prototype.pause=function(){this.paused=!0},k.prototype.unpause=function(){this.paused=!1},k.prototype.bindGlobal=function(e,t,r){if(this.bind(e,t,r),e instanceof Array)for(var n=0;n<e.length;n++)d[e[n]]=!0
else d[e]=!0},i.ItsATrap=k,e.exports&&(e.exports=k),(n=function(){return k}.call(t,r,t,e))===s||(e.exports=n)}function f(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)}function m(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)}function g(e){if("keypress"==e.type){var t=String.fromCharCode(e.which)
return e.shiftKey||(t=t.toLowerCase()),t}return l[e.which]?l[e.which]:u[e.which]?u[e.which]:String.fromCharCode(e.which).toLowerCase()}function v(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function y(e,t,r){return r||(r=function(){if(!a)for(var e in a={},l)e>95&&e<112||l.hasOwnProperty(e)&&(a[l[e]]=e)
return a}()[e]?"keydown":"keypress"),"keypress"==r&&t.length&&(r="keydown"),r}function b(e,t){var r,n,i,o=[]
for(r=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),i=0;i<r.length;++i)n=r[i],p[n]&&(n=p[n]),t&&"keypress"!=t&&c[n]&&(n=c[n],o.push("shift")),v(n)&&o.push(n)
return{key:n,modifiers:o,action:t=y(n,o,t)}}function w(e,t){return null!==e&&e!==o&&(e===t||w(e.parentNode,t))}function k(e){var t=this
if(e=e||o,!(t instanceof k))return new k(e)
t.target=e,t._callbacks={},t._directMap={}
var r,n={},i=!1,s=!1,a=!1
function l(e){e=e||{}
var t,r=!1
for(t in n)e[t]?r=!0:n[t]=0
r||(a=!1)}function u(e,r,i,o,s,a){var l,u,c,p,d=[],h=i.type
if(!t._callbacks[e])return[]
for("keyup"==h&&v(e)&&(r=[e]),l=0;l<t._callbacks[e].length;++l)if(u=t._callbacks[e][l],(o||!u.seq||n[u.seq]==u.level)&&h==u.action&&("keypress"==h&&!i.metaKey&&!i.ctrlKey||(c=r,p=u.modifiers,c.sort().join(",")===p.sort().join(",")))){var f=!o&&u.combo==s,m=o&&u.seq==o&&u.level==a;(f||m)&&t._callbacks[e].splice(l,1),d.push(u)}return d}function c(e,r,n,i){t.stopCallback(r,r.target||r.srcElement,n,i)||!1===e(r,n)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(r),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(r))}function p(e,o,s,d,h){t._directMap[e+":"+s]=o
var f,m=(e=e.replace(/\s+/g," ")).split(" ")
m.length>1?function(e,t,o,s){function u(t){return function(){a=t,++n[e],clearTimeout(r),r=setTimeout(l,1e3)}}function d(t){c(o,t,e),"keyup"!==s&&(i=g(t)),setTimeout(l,10)}n[e]=0
for(var h=0;h<t.length;++h){var f=h+1===t.length?d:u(s||b(t[h+1]).action)
p(t[h],f,s,e,h)}}(e,m,o,s):(f=b(e,s),t._callbacks[f.key]=t._callbacks[f.key]||[],u(f.key,f.modifiers,{type:f.action},d,e,h),t._callbacks[f.key][d?"unshift":"push"]({callback:o,modifiers:f.modifiers,action:f.action,seq:d,level:h,combo:e}))}t._handleKey=function(e,t,r){var n,i=u(e,t,r),o={},p=0,d=!1
for(n=0;n<i.length;++n)i[n].seq&&(p=Math.max(p,i[n].level))
for(n=0;n<i.length;++n)if(i[n].seq){if(i[n].level!=p)continue
d=!0,o[i[n].seq]=1,c(i[n].callback,r,i[n].combo,i[n].seq)}else d||c(i[n].callback,r,i[n].combo)
var h="keypress"==r.type&&s
r.type!=a||v(e)||h||l(o),s=d&&"keydown"==r.type},t._handleKeyEvent=function(e){"number"!=typeof e.which&&(e.which=e.keyCode)
var r=g(e)
r&&("keyup"!=e.type||i!==r?t.handleKey(r,function(e){var t=[]
return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):i=!1)},t._bindMultiple=function(e,t,r){for(var n=0;n<e.length;++n)p(e[n],t,r)},f(e,"keypress",t._handleKeyEvent),f(e,"keydown",t._handleKeyEvent),f(e,"keyup",t._handleKeyEvent)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var i=n(r(79)),o=n(r(34)),s=r(181),a=r(183),l=n(r(91)),u=n(r(35)),c=n(r(33)),p=i.default.create
function d(){var e=p()
return e.compile=function(t,r){return a.compile(t,r,e)},e.precompile=function(t,r){return a.precompile(t,r,e)},e.AST=o.default,e.Compiler=a.Compiler,e.JavaScriptCompiler=l.default,e.Parser=s.parser,e.parse=s.parse,e.parseWithoutProcessing=s.parseWithoutProcessing,e}var h=d()
h.create=d,c.default(h),h.Visitor=u.default,h.default=h,t.default=h,e.exports=t.default},(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}t.__esModule=!0
var o=i(r(41)),s=n(r(88)),a=n(r(2)),l=i(r(1)),u=i(r(179)),c=n(r(33))
function p(){var e=new o.HandlebarsEnvironment
return l.extend(e,o),e.SafeString=s.default,e.Exception=a.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var d=p()
d.create=p,c.default(d),d.default=d,t.default=d,e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(1)
t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var i=r.inverse,o=r.fn
if(!0===t)return o(this)
if(!1===t||null==t)return i(this)
if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):i(this)
if(r.data&&r.ids){var s=n.createFrame(r.data)
s.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:s}}return o(t,r)}))},e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n,i=r(1),o=(n=r(2))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new o.default("Must pass iterator to #each")
var r,n=t.fn,s=t.inverse,a=0,l="",u=void 0,c=void 0
function p(t,r,o){u&&(u.key=t,u.index=r,u.first=0===r,u.last=!!o,c&&(u.contextPath=c+t)),l+=n(e[t],{data:u,blockParams:i.blockParams([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),i.isFunction(e)&&(e=e.call(this)),t.data&&(u=i.createFrame(t.data)),e&&"object"==typeof e)if(i.isArray(e))for(var d=e.length;a<d;a++)a in e&&p(a,a,a===e.length-1)
else if("function"==typeof Symbol&&e[Symbol.iterator]){for(var h=[],f=e[Symbol.iterator](),m=f.next();!m.done;m=f.next())h.push(m.value)
for(d=(e=h).length;a<d;a++)p(a,a,a===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&p(r,a-1),r=e,a++})),void 0!==r&&p(r,a-1,!0)
return 0===a&&(l=s(this)),l}))},e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n,i=(n=r(2))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n,i=r(1),o=(n=r(2))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new o.default("#if requires exactly one argument")
return i.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||i.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new o.default("#unless requires exactly one argument")
return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},(e,t)=>{"use strict"
t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n])
var i=1
null!=r.hash.level?i=r.hash.level:r.data&&null!=r.data.level&&(i=r.data.level),t[0]=i,e.log.apply(e,t)}))},e.exports=t.default},(e,t)=>{"use strict"
t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n,i=r(1),o=(n=r(2))&&n.__esModule?n:{default:n}
t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new o.default("#with requires exactly one argument")
i.isFunction(e)&&(e=e.call(this))
var r=t.fn
if(i.isEmpty(e))return t.inverse(this)
var n=t.data
return t.data&&t.ids&&((n=i.createFrame(t.data)).contextPath=i.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:i.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(1)
t.default=function(e){e.registerDecorator("inline",(function(e,t,r,i){var o=e
return t.partials||(t.partials={},o=function(i,o){var s=r.partials
r.partials=n.extend({},s,t.partials)
var a=e(i,o)
return r.partials=s,a}),t.partials[i.args[0]]=i.fn,o}))},e.exports=t.default},(e,t)=>{"use strict"
function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},(e,t)=>{"use strict"
t.__esModule=!0
var r=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,r,n,i,o,s){var a=o.length-1
switch(i){case 1:return o[a-1]
case 2:this.$=n.prepareProgram(o[a])
break
case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=o[a]
break
case 9:this.$={type:"CommentStatement",value:n.stripComment(o[a]),strip:n.stripFlags(o[a],o[a]),loc:n.locInfo(this._$)}
break
case 10:this.$={type:"ContentStatement",original:o[a],value:o[a],loc:n.locInfo(this._$)}
break
case 11:this.$=n.prepareRawBlock(o[a-2],o[a-1],o[a],this._$)
break
case 12:this.$={path:o[a-3],params:o[a-2],hash:o[a-1]}
break
case 13:this.$=n.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!1,this._$)
break
case 14:this.$=n.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!0,this._$)
break
case 15:this.$={open:o[a-5],path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:n.stripFlags(o[a-5],o[a])}
break
case 16:case 17:this.$={path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:n.stripFlags(o[a-5],o[a])}
break
case 18:this.$={strip:n.stripFlags(o[a-1],o[a-1]),program:o[a]}
break
case 19:var l=n.prepareBlock(o[a-2],o[a-1],o[a],o[a],!1,this._$),u=n.prepareProgram([l],o[a-1].loc)
u.chained=!0,this.$={strip:o[a-2].strip,program:u,chain:!0}
break
case 21:this.$={path:o[a-1],strip:n.stripFlags(o[a-2],o[a])}
break
case 22:case 23:this.$=n.prepareMustache(o[a-3],o[a-2],o[a-1],o[a-4],n.stripFlags(o[a-4],o[a]),this._$)
break
case 24:this.$={type:"PartialStatement",name:o[a-3],params:o[a-2],hash:o[a-1],indent:"",strip:n.stripFlags(o[a-4],o[a]),loc:n.locInfo(this._$)}
break
case 25:this.$=n.preparePartialBlock(o[a-2],o[a-1],o[a],this._$)
break
case 26:this.$={path:o[a-3],params:o[a-2],hash:o[a-1],strip:n.stripFlags(o[a-4],o[a])}
break
case 29:this.$={type:"SubExpression",path:o[a-3],params:o[a-2],hash:o[a-1],loc:n.locInfo(this._$)}
break
case 30:this.$={type:"Hash",pairs:o[a],loc:n.locInfo(this._$)}
break
case 31:this.$={type:"HashPair",key:n.id(o[a-2]),value:o[a],loc:n.locInfo(this._$)}
break
case 32:this.$=n.id(o[a-1])
break
case 35:this.$={type:"StringLiteral",value:o[a],original:o[a],loc:n.locInfo(this._$)}
break
case 36:this.$={type:"NumberLiteral",value:Number(o[a]),original:Number(o[a]),loc:n.locInfo(this._$)}
break
case 37:this.$={type:"BooleanLiteral",value:"true"===o[a],original:"true"===o[a],loc:n.locInfo(this._$)}
break
case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:n.locInfo(this._$)}
break
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:n.locInfo(this._$)}
break
case 42:this.$=n.preparePath(!0,o[a],this._$)
break
case 43:this.$=n.preparePath(!1,o[a],this._$)
break
case 44:o[a-2].push({part:n.id(o[a]),original:o[a],separator:o[a-1]}),this.$=o[a-2]
break
case 45:this.$=[{part:n.id(o[a]),original:o[a]}]
break
case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[]
break
case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:o[a-1].push(o[a])
break
case 98:case 100:this.$=[o[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=[0],r=[null],n=[],i=this.table,o="",s=0,a=0,l=0
this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={})
var u=this.lexer.yylloc
n.push(u)
var c=this.lexer.options&&this.lexer.options.ranges
"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError)
for(var p,d,h,f,m,g,v,y,b,w,k={};;){if(h=t[t.length-1],this.defaultActions[h]?f=this.defaultActions[h]:(null==p&&(w=void 0,"number"!=typeof(w=this.lexer.lex()||1)&&(w=this.symbols_[w]||w),p=w),f=i[h]&&i[h][p]),void 0===f||!f.length||!f[0]){var x=""
if(!l){for(g in b=[],i[h])this.terminals_[g]&&g>2&&b.push("'"+this.terminals_[g]+"'")
x=this.lexer.showPosition?"Parse error on line "+(s+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(s+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:u,expected:b})}}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+h+", token: "+p)
switch(f[0]){case 1:t.push(p),r.push(this.lexer.yytext),n.push(this.lexer.yylloc),t.push(f[1]),p=null,d?(p=d,d=null):(a=this.lexer.yyleng,o=this.lexer.yytext,s=this.lexer.yylineno,u=this.lexer.yylloc,l>0&&l--)
break
case 2:if(v=this.productions_[f[1]][1],k.$=r[r.length-v],k._$={first_line:n[n.length-(v||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(v||1)].first_column,last_column:n[n.length-1].last_column},c&&(k._$.range=[n[n.length-(v||1)].range[0],n[n.length-1].range[1]]),void 0!==(m=this.performAction.call(k,o,a,s,this.yy,f[1],r,n)))return m
v&&(t=t.slice(0,-1*v*2),r=r.slice(0,-1*v),n=n.slice(0,-1*v)),t.push(this.productions_[f[1]][0]),r.push(k.$),n.push(k._$),y=i[t[t.length-2]][t[t.length-1]],t.push(y)
break
case 3:return!0}}return!0}},t={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e)
this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0]
return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,r=e.split(/(?:\r\n?|\n)/g)
this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t
var n=this.match.split(/(?:\r\n?|\n)/g)
this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1)
var i=this.yylloc.range
return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===n.length?this.yylloc.first_column:0)+n[n.length-r.length].length-r[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length)
return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match
return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-")
return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF
var e,t,r,n,i
this._input||(this.done=!0),this._more||(this.yytext="",this.match="")
for(var o=this._currentRules(),s=0;s<o.length&&(!(r=this._input.match(this.rules[o[s]]))||t&&!(r[0].length>t[0].length)||(t=r,n=s,this.options.flex));s++);return t?((i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,o[n],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next()
return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,r,n){function i(e,r){return t.yytext=t.yytext.substring(e,t.yyleng-r+e)}switch(r){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15
break
case 1:case 5:return 15
case 2:return this.popState(),15
case 3:return this.begin("raw"),15
case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK")
case 6:case 22:return this.popState(),14
case 7:return 65
case 8:return 68
case 9:return 19
case 10:return this.popState(),this.begin("raw"),23
case 11:return 55
case 12:return 60
case 13:return 29
case 14:return 47
case 15:case 16:return this.popState(),44
case 17:return 34
case 18:return 39
case 19:return 51
case 20:case 23:return 48
case 21:this.unput(t.yytext),this.popState(),this.begin("com")
break
case 24:return 73
case 25:case 26:case 41:return 72
case 27:return 87
case 28:break
case 29:return this.popState(),54
case 30:return this.popState(),33
case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),80
case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),80
case 33:return 85
case 34:case 35:return 82
case 36:return 83
case 37:return 84
case 38:return 81
case 39:return 75
case 40:return 77
case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72
case 43:return"INVALID"
case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}}
function r(){this.yy={}}return e.lexer=t,r.prototype=e,e.Parser=r,new r}()
t.default=r,e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n,i=(n=r(35))&&n.__esModule?n:{default:n}
function o(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0]
this.options=e}function s(e,t,r){void 0===t&&(t=e.length)
var n=e[t-1],i=e[t-2]
return n?"ContentStatement"===n.type?(i||!r?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(n.original):void 0:r}function a(e,t,r){void 0===t&&(t=-1)
var n=e[t+1],i=e[t+2]
return n?"ContentStatement"===n.type?(i||!r?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(n.original):void 0:r}function l(e,t,r){var n=e[null==t?0:t+1]
if(n&&"ContentStatement"===n.type&&(r||!n.rightStripped)){var i=n.value
n.value=n.value.replace(r?/^\s+/:/^[ \t]*\r?\n?/,""),n.rightStripped=n.value!==i}}function u(e,t,r){var n=e[null==t?e.length-1:t-1]
if(n&&"ContentStatement"===n.type&&(r||!n.leftStripped)){var i=n.value
return n.value=n.value.replace(r?/\s+$/:/[ \t]+$/,""),n.leftStripped=n.value!==i,n.leftStripped}}o.prototype=new i.default,o.prototype.Program=function(e){var t=!this.options.ignoreStandalone,r=!this.isRootSeen
this.isRootSeen=!0
for(var n=e.body,i=0,o=n.length;i<o;i++){var c=n[i],p=this.accept(c)
if(p){var d=s(n,i,r),h=a(n,i,r),f=p.openStandalone&&d,m=p.closeStandalone&&h,g=p.inlineStandalone&&d&&h
p.close&&l(n,i,!0),p.open&&u(n,i,!0),t&&g&&(l(n,i),u(n,i)&&"PartialStatement"===c.type&&(c.indent=/([ \t]+$)/.exec(n[i-1].original)[1])),t&&f&&(l((c.program||c.inverse).body),u(n,i)),t&&m&&(l(n,i),u((c.inverse||c.program).body))}}return e},o.prototype.BlockStatement=o.prototype.DecoratorBlock=o.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse)
var t=e.program||e.inverse,r=e.program&&e.inverse,n=r,i=r
if(r&&r.chained)for(n=r.body[0].program;i.chained;)i=i.body[i.body.length-1].program
var o={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:a(t.body),closeStandalone:s((n||t).body)}
if(e.openStrip.close&&l(t.body,null,!0),r){var c=e.inverseStrip
c.open&&u(t.body,null,!0),c.close&&l(n.body,null,!0),e.closeStrip.open&&u(i.body,null,!0),!this.options.ignoreStandalone&&s(t.body)&&a(n.body)&&(u(t.body),l(n.body))}else e.closeStrip.open&&u(t.body,null,!0)
return o},o.prototype.Decorator=o.prototype.MustacheStatement=function(e){return e.strip},o.prototype.PartialStatement=o.prototype.CommentStatement=function(e){var t=e.strip||{}
return{inlineStandalone:!0,open:t.open,close:t.close}},t.default=o,e.exports=t.default},(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var i=r(41),o=n(r(2)),s=r(1),a=n(r(92))
function l(e){this.value=e}function u(){}u.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){var e=i.COMPILER_REVISION
return[e,i.REVISION_CHANGES[e]]},appendToBuffer:function(e,t,r){return s.isArray(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:r?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,r,n){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!r,this.context=r||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams
var i=e.opcodes,s=void 0,a=void 0,l=void 0,u=void 0
for(l=0,u=i.length;l<u;l++)s=i[l],this.source.currentLocation=s.loc,a=a||s.loc,this[s.opcode].apply(this,s.args)
if(this.source.currentLocation=a,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new o.default("Compile completed with content left on stack")
this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),n?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()))
var c=this.createFunctionContext(n)
if(this.isChild)return c
var p={compiler:this.compilerInfo(),main:c}
this.decorators&&(p.main_d=this.decorators,p.useDecorators=!0)
var d=this.context,h=d.programs,f=d.decorators
for(l=0,u=h.length;l<u;l++)h[l]&&(p[l]=h[l],f[l]&&(p[l+"_d"]=f[l],p.useDecorators=!0))
return this.environment.usePartial&&(p.usePartial=!0),this.options.data&&(p.useData=!0),this.useDepths&&(p.useDepths=!0),this.useBlockParams&&(p.useBlockParams=!0),this.options.compat&&(p.compat=!0),n?p.compilerOptions=this.options:(p.compiler=JSON.stringify(p.compiler),this.source.currentLocation={start:{line:1,column:0}},p=this.objectLiteral(p),t.srcName?(p=p.toStringWithSourceMap({file:t.destName})).map=p.map&&p.map.toString():p=p.toString()),p},preamble:function(){this.lastContext=0,this.source=new a.default(this.options.srcName),this.decorators=new a.default(this.options.srcName)},createFunctionContext:function(e){var t=this,r="",n=this.stackVars.concat(this.registers.list)
n.length>0&&(r+=", "+n.join(", "))
var i=0
Object.keys(this.aliases).forEach((function(e){var n=t.aliases[e]
n.children&&n.referenceCount>1&&(r+=", alias"+ ++i+"="+e,n.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(r+=", "+this.lookupPropertyFunctionVarDeclaration())
var o=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&o.push("blockParams"),this.useDepths&&o.push("depths")
var s=this.mergeSource(r)
return e?(o.push(s),Function.apply(this,o)):this.source.wrap(["function(",o.join(","),") {\n  ",s,"}"])},mergeSource:function(e){var t=this.environment.isSimple,r=!this.forceBuffer,n=void 0,i=void 0,o=void 0,s=void 0
return this.source.each((function(e){e.appendToBuffer?(o?e.prepend("  + "):o=e,s=e):(o&&(i?o.prepend("buffer += "):n=!0,s.add(";"),o=s=void 0),i=!0,t||(r=!1))})),r?o?(o.prepend("return "),s.add(";")):i||this.source.push('return "";'):(e+=", buffer = "+(n?"":this.initializeBuffer()),o?(o.prepend("return buffer + "),s.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(n?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),r=[this.contextName(0)]
this.setupHelperArgs(e,0,r)
var n=this.popStack()
r.splice(1,0,n),this.push(this.source.functionCall(t,"call",r))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)]
this.setupHelperArgs("",0,t,!0),this.flushInline()
var r=this.topStack()
t.splice(1,0,r),this.pushSource(["if (!",this.lastHelper,") { ",r," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()))
else{var e=this.popStack()
this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,r,n){var i=0
n||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[i++])),this.resolvePath("context",e,i,t,r)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,r){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,r)},resolvePath:function(e,t,r,n,i){var o=this
if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,r,n,i){var o=t.popStack(),s=r.length
for(e&&s--;n<s;n++)o=t.nameLookup(o,r[n],i)
return e?[t.aliasable("container.strict"),"(",o,", ",t.quotedString(r[n]),", ",JSON.stringify(t.source.currentLocation)," )"]:o}(this.options.strict&&i,this,t,r,e))
else for(var s=t.length;r<s;r++)this.replaceStack((function(i){var s=o.nameLookup(i,t[r],e)
return n?[" && ",s]:[" != null ? ",s," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash
this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var r=this.nameLookup("decorators",t,"decorator"),n=this.setupHelperArgs(t,e)
this.decorators.push(["fn = ",this.decorators.functionCall(r,"",["fn","props","container",n])," || fn;"])},invokeHelper:function(e,t,r){var n=this.popStack(),i=this.setupHelper(e,t),o=[]
r&&o.push(i.name),o.push(n),this.options.strict||o.push(this.aliasable("container.hooks.helperMissing"))
var s=["(",this.itemsSeparatedBy(o,"||"),")"],a=this.source.functionCall(s,"call",i.callParams)
this.push(a)},itemsSeparatedBy:function(e,t){var r=[]
r.push(e[0])
for(var n=1;n<e.length;n++)r.push(t,e[n])
return r},invokeKnownHelper:function(e,t){var r=this.setupHelper(e,t)
this.push(this.source.functionCall(r.name,"call",r.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper")
var r=this.popStack()
this.emptyHash()
var n=this.setupHelper(0,e,t),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",r,")"]
this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,n.paramsInit?["),(",n.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",n.callParams)," : helper))"])},invokePartial:function(e,t,r){var n=[],i=this.setupParams(t,1,n)
e&&(t=this.popStack(),delete i.name),r&&(i.indent=JSON.stringify(r)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",e?n.unshift(t):n.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),n.push(i),this.push(this.source.functionCall("container.invokePartial","",n))},assignToHash:function(e){var t=this.popStack(),r=void 0,n=void 0,i=void 0
this.trackIds&&(i=this.popStack()),this.stringParams&&(n=this.popStack(),r=this.popStack())
var o=this.hash
r&&(o.contexts[e]=r),n&&(o.types[e]=n),i&&(o.ids[e]=i),o.values[e]=t},pushId:function(e,t,r){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(r?" + "+JSON.stringify("."+r):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:u,compileChildren:function(e,t){for(var r=e.children,n=void 0,i=void 0,o=0,s=r.length;o<s;o++){n=r[o],i=new this.compiler
var a=this.matchExistingProgram(n)
if(null==a){this.context.programs.push("")
var l=this.context.programs.length
n.index=l,n.name="program"+l,this.context.programs[l]=i.compile(n,t,this.context,!this.precompile),this.context.decorators[l]=i.decorators,this.context.environments[l]=n,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,n.useDepths=this.useDepths,n.useBlockParams=this.useBlockParams}else n.index=a.index,n.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,r=this.context.environments.length;t<r;t++){var n=this.context.environments[t]
if(n&&n.equals(e))return n}},programExpression:function(e){var t=this.environment.children[e],r=[t.index,"data",t.blockParams]
return(this.useBlockParams||this.useDepths)&&r.push("blockParams"),this.useDepths&&r.push("depths"),"container.program("+r.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof l||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new l(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],r=void 0,n=void 0,i=void 0
if(!this.isInline())throw new o.default("replaceStack on non-inline")
var s=this.popStack(!0)
if(s instanceof l)t=["(",r=[s.value]],i=!0
else{n=!0
var a=this.incrStack()
t=["((",this.push(a)," = ",s,")"],r=this.topStack()}var u=e.call(this,r)
i||this.popStack(),n&&this.stackSlot--,this.push(t.concat(u,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack
this.inlineStack=[]
for(var t=0,r=e.length;t<r;t++){var n=e[t]
if(n instanceof l)this.compileStack.push(n)
else{var i=this.incrStack()
this.pushSource([i," = ",n,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),r=(t?this.inlineStack:this.compileStack).pop()
if(!e&&r instanceof l)return r.value
if(!t){if(!this.stackSlot)throw new o.default("Invalid stack pop")
this.stackSlot--}return r},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1]
return t instanceof l?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e]
return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,r){var n=[]
return{params:n,paramsInit:this.setupHelperArgs(t,e,n,r),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(n)}},setupParams:function(e,t,r){var n={},i=[],o=[],s=[],a=!r,l=void 0
a&&(r=[]),n.name=this.quotedString(e),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack())
var u=this.popStack(),c=this.popStack();(c||u)&&(n.fn=c||"container.noop",n.inverse=u||"container.noop")
for(var p=t;p--;)l=this.popStack(),r[p]=l,this.trackIds&&(s[p]=this.popStack()),this.stringParams&&(o[p]=this.popStack(),i[p]=this.popStack())
return a&&(n.args=this.source.generateArray(r)),this.trackIds&&(n.ids=this.source.generateArray(s)),this.stringParams&&(n.types=this.source.generateArray(o),n.contexts=this.source.generateArray(i)),this.options.data&&(n.data="data"),this.useBlockParams&&(n.blockParams="blockParams"),n},setupHelperArgs:function(e,t,r,n){var i=this.setupParams(e,t,r)
return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),n?(this.useRegister("options"),r.push("options"),["options=",i]):r?(r.push(i),""):i}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=u.RESERVED_WORDS={},r=0,n=e.length;r<n;r++)t[e[r]]=!0}(),u.isValidJavaScriptVariableName=function(e){return!u.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},t.default=u,e.exports=t.default},(e,t,r)=>{"use strict"
t.__esModule=!0
var n=r(1),i=void 0
function o(e,t,r){if(n.isArray(e)){for(var i=[],o=0,s=e.length;o<s;o++)i.push(t.wrap(e[o],r))
return i}return"boolean"==typeof e||"number"==typeof e?e+"":e}function s(e){this.srcFile=e,this.source=[]}i||((i=function(e,t,r,n){this.src="",n&&this.add(n)}).prototype={add:function(e){n.isArray(e)&&(e=e.join("")),this.src+=e},prepend:function(e){n.isArray(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),s.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty()
return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,r=this.source.length;t<r;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}}
return new i(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1]
return e instanceof i?e:(e=o(e,this,t),new i(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,r){return r=this.generateList(r),this.wrap([e,t?"."+t+"(":"(",r,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,r=[]
Object.keys(e).forEach((function(n){var i=o(e[n],t)
"undefined"!==i&&r.push([t.quotedString(n),":",i])}))
var n=this.generateList(r)
return n.prepend("{"),n.add("}"),n},generateList:function(e){for(var t=this.empty(),r=0,n=e.length;r<n;r++)r&&t.add(","),t.add(o(e[r],this))
return t},generateArray:function(e){var t=this.generateList(e)
return t.prepend("["),t.add("]"),t}},t.default=s,e.exports=t.default},,(e,t,r)=>{"use strict"
r.d(t,{fi:()=>k,kZ:()=>w})
var n=r(26),i=r(70),o=r(4),s=r(5),a=r(10),l=r(153),u=r(19),c=r(155),p=r(12)
function d(e,t,r){void 0===r&&(r=!1)
var d,h,f=(0,s.Re)(t),m=(0,s.Re)(t)&&function(e){var t=e.getBoundingClientRect(),r=(0,p.NM)(t.width)/e.offsetWidth||1,n=(0,p.NM)(t.height)/e.offsetHeight||1
return 1!==r||1!==n}(t),g=(0,u.Z)(t),v=(0,n.Z)(e,m,r),y={scrollLeft:0,scrollTop:0},b={x:0,y:0}
return(f||!f&&!r)&&(("body"!==(0,a.Z)(t)||(0,c.Z)(g))&&(y=(d=t)!==(0,o.Z)(d)&&(0,s.Re)(d)?{scrollLeft:(h=d).scrollLeft,scrollTop:h.scrollTop}:(0,i.Z)(d)),(0,s.Re)(t)?((b=(0,n.Z)(t,!0)).x+=t.clientLeft,b.y+=t.clientTop):g&&(b.x=(0,l.Z)(g))),{x:v.left+y.scrollLeft-b.x,y:v.top+y.scrollTop-b.y,width:v.width,height:v.height}}var h=r(194),f=r(154),m=r(18),g=r(3)
function v(e){var t=new Map,r=new Set,n=[]
function i(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e)
n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||i(e)})),n}var y={placement:"bottom",modifiers:[],strategy:"absolute"}
function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function w(e){void 0===e&&(e={})
var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,o=void 0===i?y:i
return function(e,t,r){void 0===r&&(r=o)
var i,a,l={placement:"bottom",orderedModifiers:[],options:Object.assign({},y,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,p={state:l,setOptions:function(r){var i="function"==typeof r?r(l.options):r
w(),l.options=Object.assign({},o,l.options,i),l.scrollParents={reference:(0,s.kK)(e)?(0,f.Z)(e):e.contextElement?(0,f.Z)(e.contextElement):[],popper:(0,f.Z)(t)}
var a,c,d=function(e){var t=v(e)
return g.xs.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,l.options.modifiers),c=a.reduce((function(e,t){var r=e[t.name]
return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return l.orderedModifiers=d.filter((function(e){return e.enabled})),l.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect
if("function"==typeof i){var o=i({state:l,name:t,instance:p,options:n})
u.push(o||function(){})}})),p.update()},forceUpdate:function(){if(!c){var e=l.elements,t=e.reference,r=e.popper
if(b(t,r)){l.rects={reference:d(t,(0,m.Z)(r),"fixed"===l.options.strategy),popper:(0,h.Z)(r)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach((function(e){return l.modifiersData[e.name]=Object.assign({},e.data)}))
for(var n=0;n<l.orderedModifiers.length;n++)if(!0!==l.reset){var i=l.orderedModifiers[n],o=i.fn,s=i.options,a=void 0===s?{}:s,u=i.name
"function"==typeof o&&(l=o({state:l,options:a,name:u,instance:p})||l)}else l.reset=!1,n=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(l)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){w(),c=!0}}
if(!b(e,t))return p
function w(){u.forEach((function(e){return e()})),u=[]}return p.setOptions(r).then((function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}var k=w()},(e,t,r)=>{var n=r(96),i=r(20)
e.exports=function(e,t,r){var o=!0,s=!0
if("function"!=typeof e)throw new TypeError("Expected a function")
return i(r)&&(o="leading"in r?!!r.leading:o,s="trailing"in r?!!r.trailing:s),n(e,t,{leading:o,maxWait:t,trailing:s})}},(e,t,r)=>{var n=r(20),i=r(97),o=r(99),s=Math.max,a=Math.min
e.exports=function(e,t,r){var l,u,c,p,d,h,f=0,m=!1,g=!1,v=!0
if("function"!=typeof e)throw new TypeError("Expected a function")
function y(t){var r=l,n=u
return l=u=void 0,f=t,p=e.apply(n,r)}function b(e){var r=e-h
return void 0===h||r>=t||r<0||g&&e-f>=c}function w(){var e=i()
if(b(e))return k(e)
d=setTimeout(w,function(e){var r=t-(e-h)
return g?a(r,c-(e-f)):r}(e))}function k(e){return d=void 0,v&&l?y(e):(l=u=void 0,p)}function x(){var e=i(),r=b(e)
if(l=arguments,u=this,h=e,r){if(void 0===d)return function(e){return f=e,d=setTimeout(w,t),m?y(e):p}(h)
if(g)return clearTimeout(d),d=setTimeout(w,t),y(h)}return void 0===d&&(d=setTimeout(w,t)),p}return t=o(t)||0,n(r)&&(m=!!r.leading,c=(g="maxWait"in r)?s(o(r.maxWait)||0,t):c,v="trailing"in r?!!r.trailing:v),x.cancel=function(){void 0!==d&&clearTimeout(d),f=0,l=h=u=d=void 0},x.flush=function(){return void 0===d?p:k(i())},x}},(e,t,r)=>{var n=r(39)
e.exports=function(){return n.Date.now()}},e=>{var t="object"==typeof global&&global&&global.Object===Object&&global
e.exports=t},(e,t,r)=>{var n=r(100),i=r(20),o=r(102),s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt
e.exports=function(e){if("number"==typeof e)return e
if(o(e))return NaN
if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=n(e)
var r=a.test(e)
return r||l.test(e)?u(e.slice(2),r?2:8):s.test(e)?NaN:+e}},(e,t,r)=>{var n=r(101),i=/^\s+/
e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},e=>{var t=/\s/
e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},(e,t,r)=>{var n=r(103),i=r(106)
e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},(e,t,r)=>{var n=r(40),i=r(104),o=r(105),s=n?n.toStringTag:void 0
e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?i(e):o(e)}},(e,t,r)=>{var n=r(40),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=n?n.toStringTag:void 0
e.exports=function(e){var t=o.call(e,a),r=e[a]
try{e[a]=void 0
var n=!0}catch(e){}var i=s.call(e)
return n&&(t?e[a]=r:delete e[a]),i}},e=>{var t=Object.prototype.toString
e.exports=function(e){return t.call(e)}},e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},e=>{var t="Expected a function",r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,u=a||l||Function("return this")(),c=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return u.Date.now()}
function f(e){var t=typeof e
return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e
if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN
if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=e.replace(r,"")
var a=i.test(e)
return a||o.test(e)?s(e.slice(2),a?2:8):n.test(e)?NaN:+e}e.exports=function(e,r,n){var i=!0,o=!0
if("function"!=typeof e)throw new TypeError(t)
return f(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,r,n){var i,o,s,a,l,u,c=0,g=!1,v=!1,y=!0
if("function"!=typeof e)throw new TypeError(t)
function b(t){var r=i,n=o
return i=o=void 0,c=t,a=e.apply(n,r)}function w(e){var t=e-u
return void 0===u||t>=r||t<0||v&&e-c>=s}function k(){var e=h()
if(w(e))return x(e)
l=setTimeout(k,function(e){var t=r-(e-u)
return v?d(t,s-(e-c)):t}(e))}function x(e){return l=void 0,y&&i?b(e):(i=o=void 0,a)}function _(){var e=h(),t=w(e)
if(i=arguments,o=this,u=e,t){if(void 0===l)return function(e){return c=e,l=setTimeout(k,r),g?b(e):a}(u)
if(v)return l=setTimeout(k,r),b(u)}return void 0===l&&(l=setTimeout(k,r)),a}return r=m(r)||0,f(n)&&(g=!!n.leading,s=(v="maxWait"in n)?p(m(n.maxWait)||0,r):s,y="trailing"in n?!!n.trailing:y),_.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=u=o=l=void 0},_.flush=function(){return void 0===l?a:x(h())},_}(e,r,{leading:i,maxWait:r,trailing:o})}},e=>{e.exports=function(e){if("number"!=typeof e||isNaN(e))throw new TypeError("Expected a number, got "+typeof e)
const t=e<0,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"]
if(t&&(e=-e),e<1)return(t?"-":"")+e+" B"
const n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),r.length-1)
e=Number(e/Math.pow(1024,n))
const i=r[n]
return e>=10||e%1==0?`${(t?"-":"")+e.toFixed(0)} ${i}`:`${(t?"-":"")+e.toFixed(1)} ${i}`}},(e,t,r)=>{var n=r(110),i=/[\/\+\.]/
e.exports=function(e,t){function r(t){var r=n(t,e,i)
return r&&r.length>=2}return t?r(t.split(";")[0]):r}},e=>{"use strict"
function t(e,t){this.text=e=e||"",this.hasWild=~e.indexOf("*"),this.separator=t,this.parts=e.split(t)}t.prototype.match=function(e){var t,r,n=!0,i=this.parts,o=i.length
if("string"==typeof e||e instanceof String)if(this.hasWild||this.text==e){for(r=(e||"").split(this.separator),t=0;n&&t<o;t++)"*"!==i[t]&&(n=t<r.length&&i[t]===r[t])
n=n&&r}else n=!1
else if("function"==typeof e.splice)for(n=[],t=e.length;t--;)this.match(e[t])&&(n[n.length]=e[t])
else if("object"==typeof e)for(var s in n={},e)this.match(s)&&(n[s]=e[s])
return n},e.exports=function(e,r,n){var i=new t(e,n||/[\/\.]/)
return void 0!==r?i.match(r):i}},(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){i.default(e),o.default(e),s.default(e),a.default(e),l.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])}
var i=n(r(80)),o=n(r(81)),s=n(r(82)),a=n(r(83)),l=n(r(84)),u=n(r(85)),c=n(r(86))},(e,t,r)=>{"use strict"
t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null)
t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1
var r=Object.create(null)
return r.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return function(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==s[e]&&(s[e]=!0,o.default.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(s).forEach((function(e){delete s[e]}))}
var n,i=r(178),o=(n=r(32))&&n.__esModule?n:{default:n},s=Object.create(null)},(e,t,r)=>{"use strict"
var n=r(13)
function i(e,t,r,n,i){var o="",s="",a=Math.floor(i/2)-1
return n-t>a&&(t=n-a+(o=" ... ").length),r-n>a&&(r=n+a-(s=" ...").length),{str:o+e.slice(t,r).replace(/\t/g,"→")+s,pos:n-t+o.length}}function o(e,t){return n.repeat(" ",t-e.length)+e}e.exports=function(e,t){if(t=Object.create(t||null),!e.buffer)return null
t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2)
for(var r,s=/\r?\n|\r|\0/g,a=[0],l=[],u=-1;r=s.exec(e.buffer);)l.push(r.index),a.push(r.index+r[0].length),e.position<=r.index&&u<0&&(u=a.length-2)
u<0&&(u=a.length-1)
var c,p,d="",h=Math.min(e.line+t.linesAfter,l.length).toString().length,f=t.maxLength-(t.indent+h+3)
for(c=1;c<=t.linesBefore&&!(u-c<0);c++)p=i(e.buffer,a[u-c],l[u-c],e.position-(a[u]-a[u-c]),f),d=n.repeat(" ",t.indent)+o((e.line-c+1).toString(),h)+" | "+p.str+"\n"+d
for(p=i(e.buffer,a[u],l[u],e.position,f),d+=n.repeat(" ",t.indent)+o((e.line+1).toString(),h)+" | "+p.str+"\n",d+=n.repeat("-",t.indent+h+3+p.pos)+"^\n",c=1;c<=t.linesAfter&&!(u+c>=l.length);c++)p=i(e.buffer,a[u+c],l[u+c],e.position-(a[u]-a[u+c]),f),d+=n.repeat(" ",t.indent)+o((e.line+c+1).toString(),h)+" | "+p.str+"\n"
return d.replace(/\n$/,"")}},(e,t,r)=>{"use strict"
e.exports=r(42)},function(e,t){var r,n
n="undefined"!=typeof self?self:this,void 0===(r=function(){return n.MessageBus=function(){"use strict"
var e,t,r,n,i=!1,o=!1,s="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)})),a=[],l=0,u=!1,c=[],p=0,d=null,h=0,f=0,m=function(){for(var e,t=["","webkit","ms","moz"],r=0;r<t.length;r++){var n=t[r],i=n+(""===n?"hidden":"Hidden")
void 0!==document[i]&&(e=i)}return function(){return void 0!==e?document[e]:!document.hasFocus}}(),g=function(){try{return localStorage.setItem("mbTestLocalStorage",Date.now()),localStorage.removeItem("mbTestLocalStorage"),!0}catch(e){return!1}}(),v=null===(new XMLHttpRequest).onprogress,y=function(){return e.alwaysLongPoll||(e.shouldLongPollCallback?e.shouldLongPollCallback():!m())},b=function(e){if(!e||0===e.length)return!1
for(var t=0;t<e.length;t++)for(var r=e[t],n=0;n<a.length;n++){var i=a[n]
if(i.channel===r.channel){i.last_id=r.message_id
try{i.func(r.data,r.global_id,r.message_id)}catch(e){console.log&&console.log("MESSAGE BUS FAIL: callback "+i.channel+" caused exception "+e.stack)}}"/__status"===r.channel&&void 0!==r.data[i.channel]&&(i.last_id=r.data[i.channel])}return!0},w=function(e){if(l=0,!u)return b(e)
if(e)for(var t=0;t<e.length;t++)c.push(e[t])
return!1},k=function(t,r){if(!i){var s,a=!1,u=!1,c=!1
n=new Date,f+=1,r.__seq=f
var m=y()&&e.enableLongPolling,b=m&&e.enableChunkedEncoding&&v
p>0&&(p--,b=!1)
var k={"X-SILENCE-LOGGER":"true"}
for(var x in e.headers)k[x]=e.headers[x]
b||(k["Dont-Chunk"]="true")
var _,S=b?"text":"json",P=function(e,t){var n="\r\n|\r\n",i=e.indexOf(n,t)
if(-1===i)return t
var o=e.substring(t,i)
o=o.replace(/\r\n\|\|\r\n/g,n)
try{w(JSON.parse(o))}catch(e){console.log&&(console.log("FAILED TO PARSE CHUNKED REPLY"),console.log(r))}return P(e,i+5)},O=function(){e.longPoll&&(e.longPoll.abort(),p=e.retryChunkedAfterRequests)}
if(!e.ajax)throw new Error("Either jQuery or the ajax adapter must be loaded")
return g&&localStorage.setItem("__mbLastAjax",Date.now()),i=!0,e.ajax({url:e.baseUrl+"message-bus/"+e.clientId+"/poll"+(m?"":"?dlp=t"),data:r,async:!0,dataType:S,type:"POST",headers:k,messageBus:{chunked:b,onProgressListener:function(t){var r=0
return _=setTimeout(O,e.firstChunkTimeout),t.onprogress=function(){clearTimeout(_),"application/json; charset=utf-8"===t.getResponseHeader("Content-Type")?b=!1:r=P(t.responseText,r)}}},xhr:function(){var e=jQuery.ajaxSettings.xhr()
return b?(this.messageBus.onProgressListener(e),e):e},success:function(e){b||("string"==typeof e&&(e=JSON.parse(e)),a=w(e))},error:function(e,t){if(clearTimeout(_),429===e.status){var r=parseInt(e.getResponseHeader&&e.getResponseHeader("Retry-After"))||0;(r=r||0)<15&&(r=15),s=r,c=!0}else"abort"===t?u=!0:(l+=1,h+=1)},complete:function(){i=!1
var r,p=y()
try{c?r=Math.max(e.minPollInterval,1e3*s):u?r=e.minPollInterval:l>2?r=Math.min(e.callbackInterval*l,e.maxPollInterval):p&&a?r=e.minPollInterval:(r=(p?e.callbackInterval:e.backgroundCallbackInterval)-(new Date-n))<100&&(r=100)}catch(e){console.log&&e.message&&console.log("MESSAGE BUS FAIL: "+e.message)}d&&(clearTimeout(d),d=null),o&&(d=setTimeout((function(){d=null,t()}),r)),e.longPoll=null}})}}
return e={minHiddenPollInterval:1500,enableChunkedEncoding:!0,enableLongPolling:!0,callbackInterval:15e3,backgroundCallbackInterval:6e4,minPollInterval:100,maxPollInterval:18e4,callbacks:a,clientId:s,alwaysLongPoll:!1,shouldLongPollCallback:void 0,firstChunkTimeout:3e3,retryChunkedAfterRequests:30,baseUrl:"/",headers:{},ajax:"undefined"!=typeof jQuery&&jQuery.ajax,diagnostics:function(){console.log("Stopped: "+r+" Started: "+o),console.log("Current callbacks"),console.log(a),console.log("Total ajax calls: "+f+" Recent failure count: "+l+" Total failures: "+h),console.log("Last ajax call: "+(new Date-n)/1e3+" seconds ago")},pause:function(){u=!0},resume:function(){u=!1,b(c),c=[]},stop:function(){r=!0,o=!1,t&&(clearTimeout(t),t=null),d&&(clearTimeout(d),d=null),e.longPoll&&e.longPoll.abort(),e.onVisibilityChange&&(document.removeEventListener("visibilitychange",e.onVisibilityChange),e.onVisibilityChange=null)},start:function(){if(!o){o=!0,r=!1
var n=function(){if(!r)if(0===a.length||function(){if(g&&m()){var t=parseInt(localStorage.getItem("__mbLastAjax"),10),r=Date.now()-t
return r>=0&&r<e.minHiddenPollInterval}return!1}())t||(t=setTimeout((function(){t=null,n()}),parseInt(500+500*Math.random())))
else{for(var i={},o=0;o<a.length;o++)i[a[o].channel]=a[o].last_id
e.longPoll||(e.longPoll=k(n,i))}}
document.addEventListener&&"hidden"in document&&(e.onVisibilityChange=function(){document.hidden||e.longPoll||!d&&!t||(clearTimeout(d),clearTimeout(t),t=null,d=null,n())},document.addEventListener("visibilitychange",e.onVisibilityChange)),n()}},status:function(){if(u)return"paused"
if(o)return"started"
if(r)return"stopped"
throw"Cannot determine current status"},subscribe:function(t,n,i){if(o||r||e.start(),null==i)i=-1
else if("number"!=typeof i)throw"lastId has type "+typeof i+" but a number was expected."
if("string"!=typeof t)throw"Channel name must be a string!"
return a.push({channel:t,func:n,last_id:i}),e.longPoll&&e.longPoll.abort(),n},unsubscribe:function(t,r){var n=!1;-1!==t.indexOf("*",t.length-1)&&(t=t.substr(0,t.length-1),n=!0)
for(var i=!1,o=a.length-1;o>=0;o--){var s,l=a[o]
!(s=n?l.channel.substr(0,t.length)!==t:l.channel!==t)&&r&&l.func!==r&&(s=!0),s||(a.splice(o,1),i=!0)}return i&&e.longPoll&&e.longPoll.abort(),i}}}()}.apply(t,[]))||(e.exports=r)},(e,t,r)=>{var n=r(117),i=r(120),o=r(125),s=r(134),a=r(64),l=r(65)
e.exports={diff:n,patch:i,h:o,create:s,VNode:a,VText:l}},(e,t,r)=>{var n=r(118)
e.exports=n},(e,t,r)=>{var n=r(22),i=r(58),o=r(9),s=r(14),a=r(6),l=r(15),u=r(59),c=r(119)
function p(e,t){var r={a:e}
return d(e,t,r,0),r}function d(e,t,r,n){if(e!==t){var u=r[n],p=!1
if(l(e)||l(t))m(e,t,r,n)
else if(null==t)a(e)||(h(e,r,n),u=r[n]),u=b(u,new i(i.REMOVE,e,t))
else if(o(t))if(o(e))if(e.tagName===t.tagName&&e.namespace===t.namespace&&e.key===t.key){var f=c(e.properties,t.properties)
f&&(u=b(u,new i(i.PROPS,e,f))),u=function(e,t,r,n,s){for(var a=e.children,l=function(e,t){var r=y(t),n=r.keys,i=r.free
if(i.length===t.length)return{children:t,moves:null}
var o=y(e),s=o.keys
if(o.free.length===e.length)return{children:t,moves:null}
for(var a=[],l=0,u=i.length,c=0,p=0;p<e.length;p++){var d,h=e[p]
h.key?n.hasOwnProperty(h.key)?(d=n[h.key],a.push(t[d])):(d=p-c++,a.push(null)):l<u?(d=i[l++],a.push(t[d])):(d=p-c++,a.push(null))}for(var f=l>=i.length?t.length:i[l],m=0;m<t.length;m++){var g=t[m]
g.key?s.hasOwnProperty(g.key)||a.push(g):m>=f&&a.push(g)}var b,w=a.slice(),k=0,x=[],_=[],S=t.length-e.length
if(S>0&&w.length===t.length){var P=!0
for(p=0;P&&p<w.length;p++)P=w[p]&&w[p].key
for(p=0;P&&p<e.length;p++)P=e[p].key===t[p+S].key
if(P){for(p=0;p<S;p++)x.push({from:e.length,key:t[p].key}),_.push({to:p,key:t[p].key})
return{children:a,moves:{removes:x,inserts:_}}}}for(var O=0;O<t.length;){var E=t[O]
for(b=w[k];null===b&&w.length;)x.push(v(w,k,null)),b=w[k]
b&&b.key===E.key?(k++,O++):E.key?(b&&b.key&&n[b.key]!==O+1?(x.push(v(w,k,b.key)),(b=w[k])&&b.key===E.key?k++:_.push({key:E.key,to:O})):_.push({key:E.key,to:O}),O++):b&&b.key&&x.push(v(w,k,b.key))}for(;k<w.length;)b=w[k],x.push(v(w,k,b&&b.key))
return x.length!==c||_.length?{children:a,moves:{removes:x,inserts:_}}:{children:a,moves:null}}(a,t.children),u=l.children,c=a.length,p=u.length,h=c>p?c:p,f=0;f<h;f++){var m=a[f],g=u[f]
s+=1,m?d(m,g,r,s):g&&(n=b(n,new i(i.INSERT,null,g))),o(m)&&m.count&&(s+=m.count)}return l.moves&&(n=b(n,new i(i.ORDER,e,l.moves))),n}(e,t,r,u,n)}else u=b(u,new i(i.VNODE,e,t)),p=!0
else u=b(u,new i(i.VNODE,e,t)),p=!0
else s(t)?s(e)?e.text!==t.text&&(u=b(u,new i(i.VTEXT,e,t))):(u=b(u,new i(i.VTEXT,e,t)),p=!0):a(t)&&(a(e)||(p=!0),u=b(u,new i(i.WIDGET,e,t)))
u&&(r[n]=u),p&&h(e,r,n)}}function h(e,t,r){g(e,t,r),f(e,t,r)}function f(e,t,r){if(a(e))"function"==typeof e.destroy&&(t[r]=b(t[r],new i(i.REMOVE,e,null)))
else if(o(e)&&(e.hasWidgets||e.hasThunks))for(var n=e.children,s=n.length,u=0;u<s;u++){var c=n[u]
f(c,t,r+=1),o(c)&&c.count&&(r+=c.count)}else l(e)&&m(e,null,t,r)}function m(e,t,r,n){var o=u(e,t),s=p(o.a,o.b);(function(e){for(var t in e)if("a"!==t)return!0
return!1})(s)&&(r[n]=new i(i.THUNK,null,s))}function g(e,t,r){if(o(e)){if(e.hooks&&(t[r]=b(t[r],new i(i.PROPS,e,function(e){var t={}
for(var r in e)t[r]=void 0
return t}(e.hooks)))),e.descendantHooks||e.hasThunks)for(var n=e.children,s=n.length,a=0;a<s;a++){var u=n[a]
g(u,t,r+=1),o(u)&&u.count&&(r+=u.count)}}else l(e)&&m(e,null,t,r)}function v(e,t,r){return e.splice(t,1),{from:t,key:r}}function y(e){for(var t={},r=[],n=e.length,i=0;i<n;i++){var o=e[i]
o.key?t[o.key]=i:r.push(i)}return{keys:t,free:r}}function b(e,t){return e?(n(e)?e.push(t):e=[e,t],e):t}e.exports=p},(e,t,r)=>{var n=r(60),i=r(16)
function o(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function e(t,r){var s
for(var a in t){a in r||((s=s||{})[a]=void 0)
var l=t[a],u=r[a]
if(l!==u)if(n(l)&&n(u))if(o(u)!==o(l))(s=s||{})[a]=u
else if(i(u))(s=s||{})[a]=u
else{var c=e(l,u)
c&&((s=s||{})[a]=c)}else(s=s||{})[a]=u}for(var p in r)p in t||((s=s||{})[p]=r[p])
return s}},(e,t,r)=>{var n=r(121)
e.exports=n},(e,t,r)=>{var n=r(61),i=r(22),o=r(62),s=r(122),a=r(123)
function l(e,t,r){var i=function(e){var t=[]
for(var r in e)"a"!==r&&t.push(Number(r))
return t}(t)
if(0===i.length)return e
var o=s(e,t.a,i),a=e.ownerDocument
r.document||a===n||(r.document=a)
for(var l=0;l<i.length;l++){var c=i[l]
e=u(e,o[c],t[c],r)}return e}function u(e,t,r,n){if(!t)return e
var o
if(i(r))for(var s=0;s<r.length;s++)o=a(r[s],t,n),t===e&&(e=o)
else o=a(r,t,n),t===e&&(e=o)
return e}e.exports=function e(t,r,n){return(n=n||{}).patch=n.patch&&n.patch!==e?n.patch:l,n.render=n.render||o,n.patch(t,r,n)}},e=>{var t={}
function r(e,i,o,s,a){if(s=s||{},e){n(o,a,a)&&(s[a]=e)
var l=i.children
if(l)for(var u=e.childNodes,c=0;c<i.children.length;c++){a+=1
var p=l[c]||t,d=a+(p.count||0)
n(o,a,d)&&r(u[c],p,o,s,a),a=d}}return s}function n(e,t,r){if(0===e.length)return!1
for(var n,i,o=0,s=e.length-1;o<=s;){if(i=e[n=(s+o)/2>>0],o===s)return i>=t&&i<=r
if(i<t)o=n+1
else{if(!(i>r))return!0
s=n-1}}return!1}function i(e,t){return e>t?1:-1}e.exports=function(e,t,n,o){return n&&0!==n.length?(n.sort(i),r(e,t,n,o,0)):{}}},(e,t,r)=>{var n=r(63),i=r(6),o=r(58),s=r(124)
function a(e,t){"function"==typeof t.destroy&&i(t)&&t.destroy(e)}e.exports=function(e,t,r){var i,l,u=e.type,c=e.vNode,p=e.patch
switch(u){case o.REMOVE:return function(e,t){var r=e.parentNode
return r&&r.removeChild(e),a(e,t),null}(t,c)
case o.INSERT:return function(e,t,r){var n=r.render(t,r)
return e&&e.appendChild(n),e}(t,p,r)
case o.VTEXT:return function(e,t,r,n){var i
if(3===e.nodeType)e.replaceData(0,e.length,r.text),i=e
else{var o=e.parentNode
i=n.render(r,n),o&&i!==e&&o.replaceChild(i,e)}return i}(t,0,p,r)
case o.WIDGET:return function(e,t,r,n){var i,o=s(t,r)
i=o?r.update(t,e)||e:n.render(r,n)
var l=e.parentNode
return l&&i!==e&&l.replaceChild(i,e),o||a(e,t),i}(t,c,p,r)
case o.VNODE:return function(e,t,r,n){var i=e.parentNode,o=n.render(r,n)
return i&&o!==e&&i.replaceChild(o,e),o}(t,0,p,r)
case o.ORDER:return function(e,t){for(var r,n,i,o=e.childNodes,s={},a=0;a<t.removes.length;a++)r=o[(n=t.removes[a]).from],n.key&&(s[n.key]=r),e.removeChild(r)
for(var l=o.length,u=0;u<t.inserts.length;u++)r=s[(i=t.inserts[u]).key],e.insertBefore(r,i.to>=l++?null:o[i.to])}(t,p),t
case o.PROPS:return n(t,p,c.properties),t
case o.THUNK:return i=t,l=r.patch(t,p,r),i&&l&&i!==l&&i.parentNode&&i.parentNode.replaceChild(l,i),l
default:return t}}},(e,t,r)=>{var n=r(6)
e.exports=function(e,t){return!(!n(e)||!n(t))&&("name"in e&&"name"in t?e.id===t.id:e.init===t.init)}},(e,t,r)=>{var n=r(126)
e.exports=n},(e,t,r)=>{"use strict"
var n=r(22),i=r(64),o=r(65),s=r(9),a=r(14),l=r(6),u=r(16),c=r(15),p=r(127),d=r(129),h=r(130)
function f(e,t,r,i){if("string"==typeof e)t.push(new o(e))
else if("number"==typeof e)t.push(new o(String(e)))
else if(m(e))t.push(e)
else{if(!n(e)){if(null==e)return
throw a={foreignObject:e,parentVnode:{tagName:r,properties:i}},(l=new Error).type="virtual-hyperscript.unexpected.virtual-element",l.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+g(a.foreignObject)+".\nThe parent vnode is:\n"+g(a.parentVnode),l.foreignObject=a.foreignObject,l.parentVnode=a.parentVnode,l}for(var s=0;s<e.length;s++)f(e[s],t,r,i)}var a,l}function m(e){return s(e)||a(e)||l(e)||c(e)}function g(e){try{return JSON.stringify(e,null,"    ")}catch(t){return String(e)}}e.exports=function(e,t,r){var o,s,a,l,c,g=[]
return!r&&("string"==typeof(c=t)||n(c)||m(c))&&(r=t,s={}),o=p(e,s=s||t||{}),s.hasOwnProperty("key")&&(a=s.key,s.key=void 0),s.hasOwnProperty("namespace")&&(l=s.namespace,s.namespace=void 0),"INPUT"!==o||l||!s.hasOwnProperty("value")||void 0===s.value||u(s.value)||(s.value=d(s.value)),function(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t]
if(u(r))continue
"ev-"===t.substr(0,3)&&(e[t]=h(r))}}(s),null!=r&&f(r,g,o,s),new i(o,s,g,a,l)}},(e,t,r)=>{"use strict"
var n=r(128),i=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,o=/^\.|#/
e.exports=function(e,t){if(!e)return"DIV"
var r,s,a,l,u=!t.hasOwnProperty("id"),c=n(e,i),p=null
for(o.test(c[1])&&(p="DIV"),l=0;l<c.length;l++)(s=c[l])&&(a=s.charAt(0),p?"."===a?(r=r||[]).push(s.substring(1,s.length)):"#"===a&&u&&(t.id=s.substring(1,s.length)):p=s)
return r&&(t.className&&r.push(t.className),t.className=r.join(" ")),t.namespace?p:p.toUpperCase()}},e=>{e.exports=function(e){var t,r=String.prototype.split,n=/()??/.exec("")[1]===e
return t=function(t,i,o){if("[object RegExp]"!==Object.prototype.toString.call(i))return r.call(t,i,o)
var s,a,l,u,c=[],p=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.extended?"x":"")+(i.sticky?"y":""),d=0
for(i=new RegExp(i.source,p+"g"),t+="",n||(s=new RegExp("^"+i.source+"$(?!\\s)",p)),o=o===e?-1>>>0:o>>>0;(a=i.exec(t))&&!((l=a.index+a[0].length)>d&&(c.push(t.slice(d,a.index)),!n&&a.length>1&&a[0].replace(s,(function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(a[t]=e)})),a.length>1&&a.index<t.length&&Array.prototype.push.apply(c,a.slice(1)),u=a[0].length,d=l,c.length>=o));)i.lastIndex===a.index&&i.lastIndex++
return d===t.length?!u&&i.test("")||c.push(""):c.push(t.slice(d)),c.length>o?c.slice(0,o):c},t}()},e=>{"use strict"
function t(e){if(!(this instanceof t))return new t(e)
this.value=e}e.exports=t,t.prototype.hook=function(e,t){e[t]!==this.value&&(e[t]=this.value)}},(e,t,r)=>{"use strict"
var n=r(131)
function i(e){if(!(this instanceof i))return new i(e)
this.value=e}e.exports=i,i.prototype.hook=function(e,t){n(e)[t.substr(3)]=this.value},i.prototype.unhook=function(e,t){n(e)[t.substr(3)]=void 0}},(e,t,r)=>{"use strict"
r(132)("ev-store","7")
var n="__EV_STORE_KEY@7"
e.exports=function(e){var t=e[n]
return t||(t=e[n]={}),t}},(e,t,r)=>{"use strict"
var n=r(133)
e.exports=function(e,t,r){var i="__INDIVIDUAL_ONE_VERSION_"+e,o=n(i+"_ENFORCE_SINGLETON",t)
if(o!==t)throw new Error("Can only have one copy of "+e+".\nYou already have version "+o+" installed.\nThis means you cannot install version "+t)
return n(i,r)}},e=>{"use strict"
var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:{}
e.exports=function(e,r){return e in t?t[e]:(t[e]=r,r)}},(e,t,r)=>{var n=r(62)
e.exports=n},(e,t,r)=>{var n=r(29).FilterCSS,i=r(29).getDefaultWhiteList,o=r(23),s=new n
function a(e){return e.replace(l,"&lt;").replace(u,"&gt;")}var l=/</g,u=/>/g,c=/"/g,p=/&quot;/g,d=/&#([a-zA-Z0-9]*);?/gim,h=/&colon;?/gim,f=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,g=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,v=/u\s*r\s*l\s*\(.*/gi
function y(e){return e.replace(c,"&quot;")}function b(e){return e.replace(p,'"')}function w(e){return e.replace(d,(function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))}))}function k(e){return e.replace(h,":").replace(f," ")}function x(e){for(var t="",r=0,n=e.length;r<n;r++)t+=e.charCodeAt(r)<32?" ":e.charAt(r)
return o.trim(t)}function _(e){return x(e=k(e=w(e=b(e))))}function S(e){return a(e=y(e))}t.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},t.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}},t.onTag=function(e,t,r){},t.onIgnoreTag=function(e,t,r){},t.onTagAttr=function(e,t,r){},t.onIgnoreTagAttr=function(e,t,r){},t.safeAttrValue=function(e,t,r,n){if(r=_(r),"href"===t||"src"===t){if("#"===(r=o.trim(r)))return"#"
if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===t){if(m.lastIndex=0,m.test(r))return""}else if("style"===t){if(g.lastIndex=0,g.test(r))return""
if(v.lastIndex=0,v.test(r)&&(m.lastIndex=0,m.test(r)))return""
!1!==n&&(r=(n=n||s).process(r))}return S(r)},t.escapeHtml=a,t.escapeQuote=y,t.unescapeQuote=b,t.escapeHtmlEntities=w,t.escapeDangerHtml5Entities=k,t.clearNonPrintableCharacter=x,t.friendlyAttrValue=_,t.escapeAttrValue=S,t.onIgnoreTagStripAll=function(){return""},t.StripTagBody=function(e,t){"function"!=typeof t&&(t=function(){})
var r=!Array.isArray(e),n=[],i=!1
return{onIgnoreTag:function(s,a,l){if(function(t){return!!r||-1!==o.indexOf(e,t)}(s)){if(l.isClosing){var u=l.position+10
return n.push([!1!==i?i:l.position,u]),i=!1,"[/removed]"}return i||(i=l.position),"[removed]"}return t(s,a,l)},remove:function(e){var t="",r=0
return o.forEach(n,(function(n){t+=e.slice(r,n[0]),r=n[1]})),t+=e.slice(r)}}},t.stripCommentTag=function(e){for(var t="",r=0;r<e.length;){var n=e.indexOf("\x3c!--",r)
if(-1===n){t+=e.slice(r)
break}t+=e.slice(r,n)
var i=e.indexOf("--\x3e",n)
if(-1===i)break
r=i+3}return t},t.stripBlankChar=function(e){var t=e.split("")
return(t=t.filter((function(e){var t=e.charCodeAt(0)
return!(127===t||t<=31&&10!==t&&13!==t)}))).join("")},t.cssFilter=s,t.getDefaultCSSWhiteList=i},(e,t)=>{var r=/javascript\s*\:/gim
t.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},t.getDefaultWhiteList=function(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}},t.onAttr=function(e,t,r){},t.onIgnoreAttr=function(e,t,r){},t.safeAttrValue=function(e,t){return r.test(t)?"":t}},(e,t,r)=>{var n=r(136),i=r(138)
function o(e){return null==e}function s(e){(e=function(e){var t={}
for(var r in e)t[r]=e[r]
return t}(e||{})).whiteList=e.whiteList||n.whiteList,e.onAttr=e.onAttr||n.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||n.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||n.safeAttrValue,this.options=e}r(66),s.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,r=t.whiteList,n=t.onAttr,s=t.onIgnoreAttr,a=t.safeAttrValue
return i(e,(function(e,t,i,l,u){var c=r[i],p=!1
if(!0===c?p=c:"function"==typeof c?p=c(l):c instanceof RegExp&&(p=c.test(l)),!0!==p&&(p=!1),l=a(i,l)){var d,h={position:t,sourcePosition:e,source:u,isWhite:p}
return p?o(d=n(i,l,h))?i+":"+l:d:o(d=s(i,l,h))?void 0:d}}))},e.exports=s},(e,t,r)=>{var n=r(66)
e.exports=function(e,t){";"!==(e=n.trimRight(e))[e.length-1]&&(e+=";")
var r=e.length,i=!1,o=0,s=0,a=""
function l(){if(!i){var r=n.trim(e.slice(o,s)),l=r.indexOf(":")
if(-1!==l){var u=n.trim(r.slice(0,l)),c=n.trim(r.slice(l+1))
if(u){var p=t(o,a.length,u,c,r)
p&&(a+=p+"; ")}}}o=s+1}for(;s<r;s++){var u=e[s]
if("/"===u&&"*"===e[s+1]){var c=e.indexOf("*/",s+2)
if(-1===c)break
o=(s=c+1)+1,i=!1}else"("===u?i=!0:")"===u?i=!1:";"===u?i||l():"\n"===u&&l()}return n.trim(a)}},(e,t,r)=>{var n=r(23)
function i(e){var t,r=n.spaceIndex(e)
return t=-1===r?e.slice(1,-1):e.slice(1,r+1),"/"===(t=n.trim(t).toLowerCase()).slice(0,1)&&(t=t.slice(1)),"/"===t.slice(-1)&&(t=t.slice(0,-1)),t}function o(e){return"</"===e.slice(0,2)}var s=/[^a-zA-Z0-9\\_:.-]/gim
function a(e,t){for(;t<e.length;t++){var r=e[t]
if(" "!==r)return"="===r?t:-1}}function l(e,t){for(;t<e.length;t++){var r=e[t]
if(" "!==r)return"'"===r||'"'===r?t:-1}}function u(e,t){for(;t>0;t--){var r=e[t]
if(" "!==r)return"="===r?t:-1}}function c(e){return function(e){return'"'===e[0]&&'"'===e[e.length-1]||"'"===e[0]&&"'"===e[e.length-1]}(e)?e.substr(1,e.length-2):e}t.parseTag=function(e,t,r){"use strict"
var n="",s=0,a=!1,l=!1,u=0,c=e.length,p="",d=""
e:for(u=0;u<c;u++){var h=e.charAt(u)
if(!1===a){if("<"===h){a=u
continue}}else if(!1===l){if("<"===h){n+=r(e.slice(s,u)),a=u,s=u
continue}if(">"===h||u===c-1){n+=r(e.slice(s,a)),p=i(d=e.slice(a,u+1)),n+=t(a,n.length,p,d,o(d)),s=u+1,a=!1
continue}if('"'===h||"'"===h)for(var f=1,m=e.charAt(u-f);""===m.trim()||"="===m;){if("="===m){l=h
continue e}m=e.charAt(u-++f)}}else if(h===l){l=!1
continue}}return s<c&&(n+=r(e.substr(s))),n},t.parseAttr=function(e,t){"use strict"
var r=0,i=0,o=[],p=!1,d=e.length
function h(e,r){if(!((e=(e=n.trim(e)).replace(s,"").toLowerCase()).length<1)){var i=t(e,r||"")
i&&o.push(i)}}for(var f=0;f<d;f++){var m,g=e.charAt(f)
if(!1!==p||"="!==g)if(!1===p||f!==i){if(/\s|\n|\t/.test(g)){if(e=e.replace(/\s|\n|\t/g," "),!1===p){if(-1===(m=a(e,f))){h(n.trim(e.slice(r,f))),p=!1,r=f+1
continue}f=m-1
continue}if(-1===(m=u(e,f-1))){h(p,c(n.trim(e.slice(r,f)))),p=!1,r=f+1
continue}}}else{if(-1===(m=e.indexOf(g,f+1)))break
h(p,n.trim(e.slice(i+1,m))),p=!1,r=(f=m)+1}else p=e.slice(r,f),r=f+1,i='"'===e.charAt(r)||"'"===e.charAt(r)?r:l(e,f+1)}return r<e.length&&(!1===p?h(e.slice(r)):h(p,c(n.trim(e.slice(r))))),n.trim(o.join(" "))}},(e,t,r)=>{var n=r(29).FilterCSS,i=r(135),o=r(139),s=o.parseTag,a=o.parseAttr,l=r(23)
function u(e){return null==e}function c(e){(e=function(e){var t={}
for(var r in e)t[r]=e[r]
return t}(e||{})).stripIgnoreTag&&(e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),e.onIgnoreTag=i.onIgnoreTagStripAll),e.whiteList||e.allowList?e.whiteList=function(e){var t={}
for(var r in e)Array.isArray(e[r])?t[r.toLowerCase()]=e[r].map((function(e){return e.toLowerCase()})):t[r.toLowerCase()]=e[r]
return t}(e.whiteList||e.allowList):e.whiteList=i.whiteList,e.onTag=e.onTag||i.onTag,e.onTagAttr=e.onTagAttr||i.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||i.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||i.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||i.safeAttrValue,e.escapeHtml=e.escapeHtml||i.escapeHtml,this.options=e,!1===e.css?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new n(e.css))}c.prototype.process=function(e){if(!(e=(e=e||"").toString()))return""
var t=this.options,r=t.whiteList,n=t.onTag,o=t.onIgnoreTag,c=t.onTagAttr,p=t.onIgnoreTagAttr,d=t.safeAttrValue,h=t.escapeHtml,f=this.cssFilter
t.stripBlankChar&&(e=i.stripBlankChar(e)),t.allowCommentTag||(e=i.stripCommentTag(e))
var m=!1
t.stripIgnoreTagBody&&(m=i.StripTagBody(t.stripIgnoreTagBody,o),o=m.onIgnoreTag)
var g=s(e,(function(e,t,i,s,m){var g={sourcePosition:e,position:t,isClosing:m,isWhite:Object.prototype.hasOwnProperty.call(r,i)},v=n(i,s,g)
if(!u(v))return v
if(g.isWhite){if(g.isClosing)return"</"+i+">"
var y=function(e){var t=l.spaceIndex(e)
if(-1===t)return{html:"",closing:"/"===e[e.length-2]}
var r="/"===(e=l.trim(e.slice(t+1,-1)))[e.length-1]
return r&&(e=l.trim(e.slice(0,-1))),{html:e,closing:r}}(s),b=r[i],w=a(y.html,(function(e,t){var r=-1!==l.indexOf(b,e),n=c(i,e,t,r)
return u(n)?r?(t=d(i,e,t,f))?e+'="'+t+'"':e:u(n=p(i,e,t,r))?void 0:n:n}))
return s="<"+i,w&&(s+=" "+w),y.closing&&(s+=" /"),s+">"}return u(v=o(i,s,g))?h(s):v}),h)
return m&&(g=m.remove(g)),g},e.exports=c},,(e,t,r)=>{"use strict"
r.d(t,{Z:()=>d})
var n=r(11),i=r(194),o=r(152),s=r(18),a=r(150),l=r(196),u=r(191),c=r(193),p=r(3)
const d={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,o=e.name,d=e.options,h=r.elements.arrow,f=r.modifiersData.popperOffsets,m=(0,n.Z)(r.placement),g=(0,a.Z)(m),v=[p.t$,p.F2].indexOf(m)>=0?"height":"width"
if(h&&f){var y=function(e,t){return e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,u.Z)("number"!=typeof e?e:(0,c.Z)(e,p.mv))}(d.padding,r),b=(0,i.Z)(h),w="y"===g?p.we:p.t$,k="y"===g?p.I:p.F2,x=r.rects.reference[v]+r.rects.reference[g]-f[g]-r.rects.popper[v],_=f[g]-r.rects.reference[g],S=(0,s.Z)(h),P=S?"y"===g?S.clientHeight||0:S.clientWidth||0:0,O=x/2-_/2,E=y[w],A=P-b[v]-y[k],C=P/2-b[v]/2+O,T=(0,l.u)(E,C,A),j=g
r.modifiersData[o]=((t={})[j]=T,t.centerOffset=T-C,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r
null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&(0,o.Z)(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>h})
var n=r(3),i=r(18),o=r(4),s=r(19),a=r(27),l=r(11),u=r(28),c=r(12),p={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function d(e){var t,r=e.popper,l=e.popperRect,u=e.placement,d=e.variation,h=e.offsets,f=e.position,m=e.gpuAcceleration,g=e.adaptive,v=e.roundOffsets,y=e.isFixed,b=h.x,w=void 0===b?0:b,k=h.y,x=void 0===k?0:k,_="function"==typeof v?v({x:w,y:x}):{x:w,y:x}
w=_.x,x=_.y
var S=h.hasOwnProperty("x"),P=h.hasOwnProperty("y"),O=n.t$,E=n.we,A=window
if(g){var C=(0,i.Z)(r),T="clientHeight",j="clientWidth"
C===(0,o.Z)(r)&&(C=(0,s.Z)(r),"static"!==(0,a.Z)(C).position&&"absolute"===f&&(T="scrollHeight",j="scrollWidth")),(u===n.we||(u===n.t$||u===n.F2)&&d===n.ut)&&(E=n.I,x-=(y&&C===A&&A.visualViewport?A.visualViewport.height:C[T])-l.height,x*=m?1:-1),u!==n.t$&&(u!==n.we&&u!==n.I||d!==n.ut)||(O=n.F2,w-=(y&&C===A&&A.visualViewport?A.visualViewport.width:C[j])-l.width,w*=m?1:-1)}var I,L=Object.assign({position:f},g&&p),F=!0===v?function(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1
return{x:(0,c.NM)(r*i)/i||0,y:(0,c.NM)(n*i)/i||0}}({x:w,y:x},(0,o.Z)(r)):{x:w,y:x}
return w=F.x,x=F.y,m?Object.assign({},L,((I={})[E]=P?"0":"",I[O]=S?"0":"",I.transform=(A.devicePixelRatio||1)<=1?"translate("+w+"px, "+x+"px)":"translate3d("+w+"px, "+x+"px, 0)",I)):Object.assign({},L,((t={})[E]=P?x+"px":"",t[O]=S?w+"px":"",t.transform="",t))}const h={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=void 0===n||n,o=r.adaptive,s=void 0===o||o,a=r.roundOffsets,c=void 0===a||a,p={placement:(0,l.Z)(t.placement),variation:(0,u.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,d(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,d(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(4),i={passive:!0}
const o={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=e.options,s=o.scroll,a=void 0===s||s,l=o.resize,u=void 0===l||l,c=(0,n.Z)(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,i)})),u&&c.addEventListener("resize",r.update,i),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,i)})),u&&c.removeEventListener("resize",r.update,i)}},data:{}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>p})
var n={left:"right",right:"left",bottom:"top",top:"bottom"}
function i(e){return e.replace(/left|right|bottom|top/g,(function(e){return n[e]}))}var o=r(11),s={start:"end",end:"start"}
function a(e){return e.replace(/start|end/g,(function(e){return s[e]}))}var l=r(24),u=r(28),c=r(3)
const p={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name
if(!t.modifiersData[n]._skip){for(var s=r.mainAxis,p=void 0===s||s,d=r.altAxis,h=void 0===d||d,f=r.fallbackPlacements,m=r.padding,g=r.boundary,v=r.rootBoundary,y=r.altBoundary,b=r.flipVariations,w=void 0===b||b,k=r.allowedAutoPlacements,x=t.options.placement,_=(0,o.Z)(x),S=f||(_!==x&&w?function(e){if((0,o.Z)(e)===c.d7)return[]
var t=i(e)
return[a(e),t,a(t)]}(x):[i(x)]),P=[x].concat(S).reduce((function(e,r){return e.concat((0,o.Z)(r)===c.d7?function(e,t){void 0===t&&(t={})
var r=t,n=r.placement,i=r.boundary,s=r.rootBoundary,a=r.padding,p=r.flipVariations,d=r.allowedAutoPlacements,h=void 0===d?c.Ct:d,f=(0,u.Z)(n),m=f?p?c.bw:c.bw.filter((function(e){return(0,u.Z)(e)===f})):c.mv,g=m.filter((function(e){return h.indexOf(e)>=0}))
0===g.length&&(g=m)
var v=g.reduce((function(t,r){return t[r]=(0,l.Z)(e,{placement:r,boundary:i,rootBoundary:s,padding:a})[(0,o.Z)(r)],t}),{})
return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(t,{placement:r,boundary:g,rootBoundary:v,padding:m,flipVariations:w,allowedAutoPlacements:k}):r)}),[]),O=t.rects.reference,E=t.rects.popper,A=new Map,C=!0,T=P[0],j=0;j<P.length;j++){var I=P[j],L=(0,o.Z)(I),F=(0,u.Z)(I)===c.BL,M=[c.we,c.I].indexOf(L)>=0,N=M?"width":"height",R=(0,l.Z)(t,{placement:I,boundary:g,rootBoundary:v,altBoundary:y,padding:m}),$=M?F?c.F2:c.t$:F?c.I:c.we
O[N]>E[N]&&($=i($))
var U=i($),D=[]
if(p&&D.push(R[L]<=0),h&&D.push(R[$]<=0,R[U]<=0),D.every((function(e){return e}))){T=I,C=!1
break}A.set(I,D)}if(C)for(var Z=function(e){var t=P.find((function(t){var r=A.get(t)
if(r)return r.slice(0,e).every((function(e){return e}))}))
if(t)return T=t,"break"},H=w?3:1;H>0&&"break"!==Z(H);H--);t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>a})
var n=r(3),i=r(24)
function o(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function s(e){return[n.we,n.F2,n.I,n.t$].some((function(t){return e[t]>=0}))}const a={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,l=t.modifiersData.preventOverflow,u=(0,i.Z)(t,{elementContext:"reference"}),c=(0,i.Z)(t,{altBoundary:!0}),p=o(u,n),d=o(c,a,l),h=s(p),f=s(d)
t.modifiersData[r]={referenceClippingOffsets:p,popperEscapeOffsets:d,isReferenceHidden:h,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":f})}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(11),i=r(3)
const o={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,o=e.name,s=r.offset,a=void 0===s?[0,0]:s,l=i.Ct.reduce((function(e,r){return e[r]=function(e,t,r){var o=(0,n.Z)(e),s=[i.t$,i.we].indexOf(o)>=0?-1:1,a="function"==typeof r?r(Object.assign({},t,{placement:e})):r,l=a[0],u=a[1]
return l=l||0,u=(u||0)*s,[i.t$,i.F2].indexOf(o)>=0?{x:u,y:l}:{x:l,y:u}}(r,t.rects,a),e}),{}),u=l[t.placement],c=u.x,p=u.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=l}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(197)
const i={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name
t.modifiersData[r]=(0,n.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>h})
var n=r(3),i=r(11),o=r(150),s=r(196),a=r(194),l=r(18),u=r(24),c=r(28),p=r(192),d=r(12)
const h={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,h=e.name,f=r.mainAxis,m=void 0===f||f,g=r.altAxis,v=void 0!==g&&g,y=r.boundary,b=r.rootBoundary,w=r.altBoundary,k=r.padding,x=r.tether,_=void 0===x||x,S=r.tetherOffset,P=void 0===S?0:S,O=(0,u.Z)(t,{boundary:y,rootBoundary:b,padding:k,altBoundary:w}),E=(0,i.Z)(t.placement),A=(0,c.Z)(t.placement),C=!A,T=(0,o.Z)(E),j="x"===T?"y":"x",I=t.modifiersData.popperOffsets,L=t.rects.reference,F=t.rects.popper,M="function"==typeof P?P(Object.assign({},t.rects,{placement:t.placement})):P,N="number"==typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0}
if(I){if(m){var U,D="y"===T?n.we:n.t$,Z="y"===T?n.I:n.F2,H="y"===T?"height":"width",B=I[T],V=B+O[D],q=B-O[Z],z=_?-F[H]/2:0,W=A===n.BL?L[H]:F[H],K=A===n.BL?-F[H]:-L[H],Y=t.elements.arrow,X=_&&Y?(0,a.Z)(Y):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,p.Z)(),J=G[D],Q=G[Z],ee=(0,s.u)(0,L[H],X[H]),te=C?L[H]/2-z-ee-J-N.mainAxis:W-ee-J-N.mainAxis,re=C?-L[H]/2+z+ee+Q+N.mainAxis:K+ee+Q+N.mainAxis,ne=t.elements.arrow&&(0,l.Z)(t.elements.arrow),ie=ne?"y"===T?ne.clientTop||0:ne.clientLeft||0:0,oe=null!=(U=null==R?void 0:R[T])?U:0,se=B+te-oe-ie,ae=B+re-oe,le=(0,s.u)(_?(0,d.VV)(V,se):V,B,_?(0,d.Fp)(q,ae):q)
I[T]=le,$[T]=le-B}if(v){var ue,ce="x"===T?n.we:n.t$,pe="x"===T?n.I:n.F2,de=I[j],he="y"===j?"height":"width",fe=de+O[ce],me=de-O[pe],ge=-1!==[n.we,n.t$].indexOf(E),ve=null!=(ue=null==R?void 0:R[j])?ue:0,ye=ge?fe:de-L[he]-F[he]-ve+N.altAxis,be=ge?de+L[he]+F[he]-ve-N.altAxis:me,we=_&&ge?(0,s.q)(ye,de,be):(0,s.u)(_?ye:fe,de,_?be:me)
I[j]=we,$[j]=we-de}t.modifiersData[h]=$}},requiresIfExists:["offset"]}},(e,t,r)=>{"use strict"
function n(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(195)
function i(){return!/^((?!chrome|android).)*safari/i.test((0,n.Z)())}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(5)
function i(e,t){var r=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(r&&(0,n.Zq)(r)){var i=t
do{if(i&&e.isSameNode(i))return!0
i=i.parentNode||i.host}while(i)}return!1}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>s})
var n=r(26),i=r(19),o=r(70)
function s(e){return(0,n.Z)((0,i.Z)(e)).left+(0,o.Z)(e).scrollLeft}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>u})
var n=r(69),i=r(155),o=r(10),s=r(5)
function a(e){return["html","body","#document"].indexOf((0,o.Z)(e))>=0?e.ownerDocument.body:(0,s.Re)(e)&&(0,i.Z)(e)?e:a((0,n.Z)(e))}var l=r(4)
function u(e,t){var r
void 0===t&&(t=[])
var o=a(e),s=o===(null==(r=e.ownerDocument)?void 0:r.body),c=(0,l.Z)(o),p=s?[c].concat(c.visualViewport||[],(0,i.Z)(o)?o:[]):o,d=t.concat(p)
return s?d:d.concat(u((0,n.Z)(p)))}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(27)
function i(e){var t=(0,n.Z)(e),r=t.overflow,i=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(r+o+i)}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(72)
class i extends Error{constructor(e,t){void 0===t&&(t={}),super(e),this.cause=t.cause,this.cause&&(0,n.Z)(this.cause,"isNetworkError")&&(this.isNetworkError=this.cause.isNetworkError)}}const o=i},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>n})
const n=function(e){return!!e&&(0!==e.readyState&&4!==e.readyState||0===e.status)}},(e,t,r)=>{"use strict"
function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}r.d(t,{Z:()=>c})
var i=0
function o(e){return"__private_"+i+++"_"+e}var s=o("aliveTimer"),a=o("isDone"),l=o("onTimedOut"),u=o("timeout")
const c=class{constructor(e,t){Object.defineProperty(this,s,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:!1}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),n(this,u)[u]=e,n(this,l)[l]=t}progress(){n(this,a)[a]||n(this,u)[u]>0&&(clearTimeout(n(this,s)[s]),n(this,s)[s]=setTimeout(n(this,l)[l],n(this,u)[u]))}done(){n(this,a)[a]||(clearTimeout(n(this,s)[s]),n(this,s)[s]=null,n(this,a)[a]=!0)}}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>u})
var n=r(72)
function i(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var o=0
function s(e,t,r){const n=[]
return e.forEach((e=>"string"!=typeof e?n.push(e):t[Symbol.split](e).forEach(((e,t,i)=>{""!==e&&n.push(e),t<i.length-1&&n.push(r)})))),n}function a(e,t){const r=/\$/g
let n=[e]
if(null==t)return n
for(const i of Object.keys(t))if("_"!==i){let e=t[i]
"string"==typeof e&&(e=r[Symbol.replace](e,"$$$$")),n=s(n,new RegExp(`%\\{${i}\\}`,"g"),e)}return n}var l=function(e){return"__private_"+o+++"_"+e}("apply")
class u{constructor(e){Object.defineProperty(this,l,{value:c}),this.locale={strings:{},pluralize:e=>1===e?0:1},Array.isArray(e)?e.forEach(i(this,l)[l],this):i(this,l)[l](e)}translate(e,t){return this.translateArray(e,t).join("")}translateArray(e,t){if(!(0,n.Z)(this.locale.strings,e))throw new Error(`missing string: ${e}`)
const r=this.locale.strings[e]
if("object"==typeof r){if(t&&void 0!==t.smart_count)return a(r[this.locale.pluralize(t.smart_count)],t)
throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}")}return a(r,t)}}function c(e){if(null==e||!e.strings)return
const t=this.locale
this.locale={...t,strings:{...t.strings,...e.strings}},this.locale.pluralize=e.pluralize||t.pluralize}},,(e,t,r)=>{"use strict"
r.r(t),r.d(t,{TrackedArray:()=>C,TrackedMap:()=>h,TrackedObject:()=>H,TrackedSet:()=>g,TrackedWeakMap:()=>f,TrackedWeakSet:()=>v,tracked:()=>B})
var n=r(162),i=r(163),o=r(160)
let s,a,l,u,c,p
function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}s=Symbol.iterator,a=Symbol.toStringTag
class h{readStorageFor(e){const{storages:t}=this
let r=t.get(e)
void 0===r&&(r=(0,o.createStorage)(null,(()=>!1)),t.set(e,r)),(0,o.getValue)(r)}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,o.setValue)(t,null)}constructor(e){d(this,"collection",(0,o.createStorage)(null,(()=>!1))),d(this,"storages",new Map),this.vals=e?new Map(e):new Map}get(e){return this.readStorageFor(e),this.vals.get(e)}has(e){return this.readStorageFor(e),this.vals.has(e)}entries(){return(0,o.getValue)(this.collection),this.vals.entries()}keys(){return(0,o.getValue)(this.collection),this.vals.keys()}values(){return(0,o.getValue)(this.collection),this.vals.values()}forEach(e){(0,o.getValue)(this.collection),this.vals.forEach(e)}get size(){return(0,o.getValue)(this.collection),this.vals.size}[s](){return(0,o.getValue)(this.collection),this.vals[Symbol.iterator]()}get[a](){return this.vals[Symbol.toStringTag]}set(e,t){return this.dirtyStorageFor(e),(0,o.setValue)(this.collection,null),this.vals.set(e,t),this}delete(e){return this.dirtyStorageFor(e),(0,o.setValue)(this.collection,null),this.vals.delete(e)}clear(){this.storages.forEach((e=>(0,o.setValue)(e,null))),(0,o.setValue)(this.collection,null),this.vals.clear()}}Object.setPrototypeOf(h.prototype,Map.prototype),l=Symbol.toStringTag
class f{readStorageFor(e){const{storages:t}=this
let r=t.get(e)
void 0===r&&(r=(0,o.createStorage)(null,(()=>!1)),t.set(e,r)),(0,o.getValue)(r)}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,o.setValue)(t,null)}constructor(e){d(this,"storages",new WeakMap),this.vals=e?new WeakMap(e):new WeakMap}get(e){return this.readStorageFor(e),this.vals.get(e)}has(e){return this.readStorageFor(e),this.vals.has(e)}set(e,t){return this.dirtyStorageFor(e),this.vals.set(e,t),this}delete(e){return this.dirtyStorageFor(e),this.vals.delete(e)}get[l](){return this.vals[Symbol.toStringTag]}}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.setPrototypeOf(f.prototype,WeakMap.prototype),u=Symbol.iterator,c=Symbol.toStringTag
class g{storageFor(e){const t=this.storages
let r=t.get(e)
return void 0===r&&(r=(0,o.createStorage)(null,(()=>!1)),t.set(e,r)),r}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,o.setValue)(t,null)}constructor(e){m(this,"collection",(0,o.createStorage)(null,(()=>!1))),m(this,"storages",new Map),this.vals=new Set(e)}has(e){return(0,o.getValue)(this.storageFor(e)),this.vals.has(e)}entries(){return(0,o.getValue)(this.collection),this.vals.entries()}keys(){return(0,o.getValue)(this.collection),this.vals.keys()}values(){return(0,o.getValue)(this.collection),this.vals.values()}forEach(e){(0,o.getValue)(this.collection),this.vals.forEach(e)}get size(){return(0,o.getValue)(this.collection),this.vals.size}[u](){return(0,o.getValue)(this.collection),this.vals[Symbol.iterator]()}get[c](){return this.vals[Symbol.toStringTag]}add(e){return this.dirtyStorageFor(e),(0,o.setValue)(this.collection,null),this.vals.add(e),this}delete(e){return this.dirtyStorageFor(e),(0,o.setValue)(this.collection,null),this.vals.delete(e)}clear(){this.storages.forEach((e=>(0,o.setValue)(e,null))),(0,o.setValue)(this.collection,null),this.vals.clear()}}Object.setPrototypeOf(g.prototype,Set.prototype),p=Symbol.toStringTag
class v{storageFor(e){const t=this.storages
let r=t.get(e)
return void 0===r&&(r=(0,o.createStorage)(null,(()=>!1)),t.set(e,r)),r}dirtyStorageFor(e){const t=this.storages.get(e)
t&&(0,o.setValue)(t,null)}constructor(e){m(this,"storages",new WeakMap),this.vals=new WeakSet(e)}has(e){return(0,o.getValue)(this.storageFor(e)),this.vals.has(e)}add(e){return this.vals.add(e),this.dirtyStorageFor(e),this}delete(e){return this.dirtyStorageFor(e),this.vals.delete(e)}get[p](){return this.vals[Symbol.toStringTag]}}function y(e,t){var r=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return t.get(e)}(e,t)
return function(e,t){return t.get?t.get.call(e):t.value}(e,r)}function b(e,t){k(e,t),t.add(e)}function w(e,t,r){k(e,t),t.set(e,r)}function k(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function x(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return r}Object.setPrototypeOf(v.prototype,WeakSet.prototype)
const _=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"])
function S(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}var P=new WeakMap,O=new WeakMap,E=new WeakSet,A=new WeakSet
class C{static from(e,t,r){return new C(t?Array.from(e,t,r):Array.from(e))}static of(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return new C(t)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
b(this,A),b(this,E),w(this,P,{writable:!0,value:(0,o.createStorage)(null,(()=>!1))}),w(this,O,{writable:!0,value:new Map})
let t=e.slice(),r=this,n=new Map
return new Proxy(t,{get(e,t){let i=S(t)
if(null!==i)return x(r,E,T).call(r,i),(0,o.getValue)(y(r,P)),e[i]
if("length"===t)(0,o.getValue)(y(r,P))
else if(_.has(t)){let i=n.get(t)
return void 0===i&&(i=function(){return(0,o.getValue)(y(r,P)),e[t](...arguments)},n.set(t,i)),i}return e[t]},set(e,t,n){e[t]=n
let i=S(t)
return null!==i?(x(r,A,j).call(r,i),(0,o.setValue)(y(r,P),null)):"length"===t&&(0,o.setValue)(y(r,P),null),!0},getPrototypeOf:()=>C.prototype})}}function T(e){const t=y(this,O)
let r=t.get(e)
void 0===r&&(r=(0,o.createStorage)(null,(()=>!1)),t.set(e,r)),(0,o.getValue)(r)}function j(e){const t=y(this,O).get(e)
t&&(0,o.setValue)(t,null)}Object.setPrototypeOf(C.prototype,Array.prototype)
var I=r(164)
const{dirtyProperty:L,consumeProperty:F}=function(e){if("consumeTag"in(t=e)&&"function"==typeof t.consumeTag&&"tagFor"in t&&"function"==typeof t.tagFor&&"dirtyTagFor"in t&&"function"==typeof t.dirtyTagFor)return{dirtyProperty:(t,r)=>{e.dirtyTagFor(t,r)},consumeProperty:(t,r)=>{e.consumeTag(e.tagFor(t,r))}}
throw new Error("The version of @glimmer/validator included with this build is incompatible with @ember-compat/tracked-built-ins. ")
var t}(I)
function M(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,N(e,t,"get"))}function N(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance")
return t.get(e)}var R=new WeakMap
class ${constructor(e){var t,r
r={writable:!0,value:void 0},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=R),t.set(this,r),function(e,t,r){(function(e,t,r){if(t.set)t.set.call(e,r)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=r}})(e,N(e,t,"set"),r)}(this,R,e)}consume(e){F(M(this,R),e)}update(e){L(M(this,R),e)}}function U(e){return"get"in e||"set"in e}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(void 0===new.target)throw new Error("TrackedObject must be called with `new`")
const t=new.target.prototype,r=function(e){const t=Object.getPrototypeOf(e),r=Object.create(t),n={}
for(const i of Reflect.ownKeys(e)){const t=Object.getOwnPropertyDescriptor(e,i)
t&&(U(t)?Object.defineProperty(r,i,t):(Reflect.set(n,i,Reflect.get(e,i)),Object.defineProperty(r,i,{configurable:t.configurable,enumerable:!0,get:()=>Reflect.get(n,i),set:e=>{Reflect.set(n,i,e)}})))}return r}(e),n=(0,o.createStorage)(null,(()=>!1)),i=new Proxy(r,{get:(e,t)=>(s.consume(t),Reflect.get(e,t)),getPrototypeOf:()=>t,setPrototypeOf(){throw new Error("Cannot set prototype of TrackedObject")},has:(e,t)=>(s.consume(t),Reflect.has(e,t)),ownKeys:e=>((0,o.getValue)(n),Reflect.ownKeys(e)),set:(e,t,r,i)=>(Z(n),s.update(t),Reflect.set(e,t,r,i),!0),deleteProperty(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t)
return r&&!0===r.configurable&&(s.update(t),Z(n)),Reflect.deleteProperty(e,t),!0}}),s=new $(i)
return i}function Z(e){(0,o.setValue)(e,null)}D.fromEntries=e=>new H(Object.fromEntries(e))
const H=D
function B(e,t,r){if(void 0!==t&&void 0!==r)return(0,n.tracked)(e,t,r)
if(Array.isArray(e))return new C(e)
switch(e){case Object:return new H
case Array:return new C
case Map:return new h
case WeakMap:return new f
case Set:return new g
case WeakSet:return new v}return e instanceof Map?new h(e):e instanceof WeakMap?new f:e instanceof Set?new g(e):e instanceof WeakSet?new v:((0,i.assert)("You must either use tracked as a field decorator, or to wrap built-in class instances:\n\n      class Example {\n        @tracked field = 123;\n\n        map = tracked(Map);\n        map = tracked(new Map());\n      }","object"==typeof e&&null!==e),new H(e))}},,,,(e,t,r)=>{"use strict"
r.r(t),r.d(t,{afterMain:()=>n.wX,afterRead:()=>n.r5,afterWrite:()=>n.MS,applyStyles:()=>i.Z,arrow:()=>o.Z,auto:()=>n.d7,basePlacements:()=>n.mv,beforeMain:()=>n.XM,beforeRead:()=>n.N7,beforeWrite:()=>n.iv,bottom:()=>n.I,clippingParents:()=>n.zV,computeStyles:()=>s.Z,createPopper:()=>m.fi,createPopperBase:()=>h.fi,createPopperLite:()=>v,detectOverflow:()=>f.Z,end:()=>n.ut,eventListeners:()=>a.Z,flip:()=>l.Z,hide:()=>u.Z,left:()=>n.t$,main:()=>n.DH,modifierPhases:()=>n.xs,offset:()=>c.Z,placements:()=>n.Ct,popper:()=>n.k5,popperGenerator:()=>h.kZ,popperOffsets:()=>p.Z,preventOverflow:()=>d.Z,read:()=>n.ij,reference:()=>n.YP,right:()=>n.F2,start:()=>n.BL,top:()=>n.we,variationPlacements:()=>n.bw,viewport:()=>n.Pj,write:()=>n.cW})
var n=r(3),i=r(67),o=r(142),s=r(143),a=r(144),l=r(145),u=r(146),c=r(147),p=r(148),d=r(149),h=r(94),f=r(24),m=r(198),g=[a.Z,p.Z,s.Z,i.Z],v=(0,h.kZ)({defaultModifiers:g})},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>z})
var n=r(17),i=r(30),o=r(31),s=r(74),a=r(38),l=r(73),u=r(25),c=r(158),p=r(156),d=r(71),h=r(157)
function f(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var m=0
function g(e){return"__private_"+m+++"_"+e}function v(e,t){if((0,h.Z)(e))return new d.Z(t,e)
const r=new p.Z("Upload error",{cause:t})
return r.request=e,r}var y=g("queueRequestSocketToken"),b=g("getOptions"),w=g("addEventHandlerForFile"),k=g("addEventHandlerIfFileStillExists"),x=g("uploadLocalFile"),_=g("requestSocketToken"),S=g("uploadRemoteFile")
class P{constructor(e,t){Object.defineProperty(this,S,{value:T}),Object.defineProperty(this,x,{value:C}),Object.defineProperty(this,k,{value:A}),Object.defineProperty(this,w,{value:E}),Object.defineProperty(this,b,{value:O}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:async e=>{const t=f(this,b)[b](e),r=new(e.remote.providerOptions.provider?o.zt:o.C$)(this.uppy,e.remote.providerOptions),n=Array.isArray(t.allowedMetaFields)?t.allowedMetaFields:Object.keys(e.meta)
return e.tus&&Object.assign(t,e.tus),(await r.post(e.remote.url,{...e.remote.body,protocol:"multipart",endpoint:t.endpoint,size:e.data.size,fieldname:t.fieldName,metadata:Object.fromEntries(n.map((t=>[t,e.meta[t]]))),httpMethod:t.method,useFormData:t.formData,headers:t.headers})).token}}),this.uppy=e,this.opts={validateStatus:e=>e>=200&&e<300,...t},this.requests=t[i.B],this.uploaderEvents=Object.create(null),this.i18n=t.i18n,f(this,y)[y]=this.requests.wrapPromiseFunction(f(this,_)[_],{priority:-1})}uploadFile(e,t,r){const n=this.uppy.getFile(e)
if(n.error)throw new Error(n.error)
return n.isRemote?f(this,S)[S](n,t,r):f(this,x)[x](n,t,r)}async connectToServerSocket(e){return new Promise(((t,r)=>{const n=f(this,b)[b](e),i=e.serverToken,s=(0,l.Z)(e.remote.companionUrl)
let c
const d=()=>{null==c&&(c=new o.sk({target:`${s}/api/${i}`}),c.on("progress",(t=>(0,a.Z)(this,t,e))),c.on("success",(r=>{const i=n.getResponseData(r.response.responseText,r.response),o=i[n.responseUrlFieldName],s={status:r.response.status,body:i,uploadURL:o,bytesUploaded:r.bytesUploaded}
return this.uppy.emit("upload-success",e,s),h.done(),c.close(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),t()})),c.on("error",(t=>{const i=t.response,o=i?n.getResponseError(i.responseText,i):new p.Z(t.error.message,{cause:t.error})
this.uppy.emit("upload-error",e,o),h.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),r(o)})))}
this.uploaderEvents[e.id]=new u.default(this.uppy)
let h=this.requests.run((()=>{var t
return e.isPaused?null==(t=c)||t.send("pause",{}):d(),()=>c.close()}))
f(this,w)[w]("file-removed",e.id,(()=>{var r
null==(r=c)||r.send("cancel",{}),h.abort(),t(`upload ${e.id} was removed`)})),f(this,k)[k]("cancel-all",e.id,(function(r){let{reason:n}=void 0===r?{}:r
var i
"user"===n&&(null==(i=c)||i.send("cancel",{}),h.abort()),t(`upload ${e.id} was canceled`)}))
const m=()=>{null==c?h.abort():(c.send("pause",{}),h.done()),h=this.requests.run((()=>(e.isPaused||(null==c?d():c.send("resume",{})),()=>c.close())))}
f(this,w)[w]("upload-retry",e.id,m),f(this,k)[k]("retry-all",e.id,m)})).catch((t=>(this.uppy.emit("upload-error",e,t),Promise.reject(t))))}}function O(e){var t
const{uppy:r}=this,n=r.getState().xhrUpload
return{...this.opts,...n||{},...e.xhrUpload||{},headers:{...this.opts.headers,...null==n?void 0:n.headers,...null==(t=e.xhrUpload)?void 0:t.headers}}}function E(e,t,r){this.uploaderEvents[t].on(e,(e=>{var n
const i=null!=(n=null==e?void 0:e.id)?n:e
t===i&&r()}))}function A(e,t,r){var n=this
this.uploaderEvents[t].on(e,(function(){n.uppy.getFile(t)&&r(...arguments)}))}function C(e,t,r){const n=f(this,b)[b](e)
return this.uppy.log(`uploading ${t} of ${r}`),new Promise(((t,r)=>{const i=n.formData?function(e,t){const r=new FormData
!function(e,t,r){(Array.isArray(r.allowedMetaFields)?r.allowedMetaFields:Object.keys(t)).forEach((r=>{e.append(r,t[r])}))}(r,e.meta,t)
const n=function(e){return e.data.slice(0,e.data.size,e.meta.type)}(e)
return e.name?r.append(t.fieldName,n,e.meta.name):r.append(t.fieldName,n),r}(e,n):(e=>e.data)(e),o=new XMLHttpRequest
this.uploaderEvents[e.id]=new u.default(this.uppy)
const a=new c.Z(n.timeout,(()=>{o.abort(),p.done()
const t=new Error(this.i18n("timedOut",{seconds:Math.ceil(n.timeout/1e3)}))
this.uppy.emit("upload-error",e,t),r(t)})),l=(0,s.x)()
o.upload.addEventListener("loadstart",(()=>{this.uppy.log(`[AwsS3/XHRUpload] ${l} started`)})),o.upload.addEventListener("progress",(t=>{this.uppy.log(`[AwsS3/XHRUpload] ${l} progress: ${t.loaded} / ${t.total}`),a.progress(),t.lengthComputable&&this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t.loaded,bytesTotal:t.total})})),o.addEventListener("load",(i=>{if(this.uppy.log(`[AwsS3/XHRUpload] ${l} finished`),a.done(),p.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),n.validateStatus(i.target.status,o.responseText,o)){const r=n.getResponseData(o.responseText,o),s=r[n.responseUrlFieldName],a={status:i.target.status,body:r,uploadURL:s}
return this.uppy.emit("upload-success",e,a),s&&this.uppy.log(`Download ${e.name} from ${s}`),t(e)}const s=n.getResponseData(o.responseText,o),u=v(o,n.getResponseError(o.responseText,o)),c={status:i.target.status,body:s}
return this.uppy.emit("upload-error",e,u,c),r(u)})),o.addEventListener("error",(()=>{this.uppy.log(`[AwsS3/XHRUpload] ${l} errored`),a.done(),p.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null)
const t=v(o,n.getResponseError(o.responseText,o))
return this.uppy.emit("upload-error",e,t),r(t)})),o.open(n.method.toUpperCase(),n.endpoint,!0),o.withCredentials=Boolean(n.withCredentials),""!==n.responseType&&(o.responseType=n.responseType),Object.keys(n.headers).forEach((e=>{o.setRequestHeader(e,n.headers[e])}))
const p=this.requests.run((()=>(o.send(i),()=>{a.done(),o.abort()})),{priority:1})
f(this,w)[w]("file-removed",e.id,(()=>{p.abort(),r(new Error("File removed"))})),f(this,k)[k]("cancel-all",e.id,(function(e){let{reason:t}=void 0===e?{}:e
"user"===t&&p.abort(),r(new Error("Upload cancelled"))}))}))}async function T(e){try{if(e.serverToken)return await this.connectToServerSocket(e)
const t=await f(this,y)[y](e)
if(!this.uppy.getState().files[e.id])return
return this.uppy.setFileState(e.id,{serverToken:t}),await this.connectToServerSocket(this.uppy.getFile(e.id))}catch(t){throw this.uppy.setFileState(e.id,{serverToken:void 0}),this.uppy.emit("upload-error",e,t),t}}const j=function(e,t){const r=t.headers?t.headers["content-type"]:t.getResponseHeader("Content-Type")
if("string"==typeof r){const t=(n=r,n.replace(/;.*$/,"")).toLowerCase()
if("application/xml"===t||"text/xml"===t)return!0
if("text/html"===t&&/^<\?xml /.test(e))return!0}var n
return!1},I={strings:{timedOut:"Upload stalled for %{seconds} seconds, aborting."}}
let L
function F(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var M=0
function N(e){return"__private_"+M+++"_"+e}function R(e,t){const r=e.indexOf(`<${t}>`),n=e.indexOf(`</${t}>`,r)
return-1!==r&&-1!==n?e.slice(r+t.length+2,n):""}function $(e){if(e&&e.error){const t=new Error(e.message)
throw Object.assign(t,e.error),t}return e}function U(e,t){if(!j(e,t))return
const r=R(e,"Message")
return new Error(r)}let D=!1
var Z=N("client"),H=N("requests"),B=N("uploader"),V=N("handleUpload"),q=N("setCompanionHeaders")
L=Symbol.for("uppy test: getClient")
class z extends n.Z{constructor(e,t){super(e,t),Object.defineProperty(this,Z,{writable:!0,value:void 0}),Object.defineProperty(this,H,{writable:!0,value:void 0}),Object.defineProperty(this,B,{writable:!0,value:void 0}),Object.defineProperty(this,V,{writable:!0,value:e=>{const t=Object.create(null)
function r(e){var r
const{id:n}=e
null==(r=t[n])||r.abort()}this.uppy.on("file-removed",r),e.forEach((e=>{const t=this.uppy.getFile(e)
this.uppy.emit("upload-started",t)}))
const n=F(this,H)[H].wrapPromiseFunction((e=>this.opts.getUploadParameters(e))),i=e.length
return Promise.allSettled(e.map(((e,r)=>(t[e]=n(this.uppy.getFile(e)),t[e].then((n=>{delete t[e]
const o=this.uppy.getFile(e)
!function(e,t){if(null==t||"string"!=typeof t.url||"object"!=typeof t.fields&&null!=t.fields)throw new TypeError(`AwsS3: got incorrect result from 'getUploadParameters()' for file '${e.name}', expected an object '{ url, method, fields, headers }' but got '${JSON.stringify(t)}' instead.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`)
if(null!=t.method&&!/^p(u|os)t$/i.test(t.method))throw new TypeError(`AwsS3: got incorrect method from 'getUploadParameters()' for file '${e.name}', expected  'put' or 'post' but got '${t.method}' instead.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`)}(o,n)
const{method:s="post",url:a,fields:l,headers:u}=n,c={method:s,formData:"post"===s.toLowerCase(),endpoint:a,allowedMetaFields:l?Object.keys(l):[]}
return u&&(c.headers=u),this.uppy.setFileState(o.id,{meta:{...o.meta,...l},xhrUpload:c}),F(this,B)[B].uploadFile(o.id,r,i)})).catch((r=>{delete t[e]
const n=this.uppy.getFile(e)
return this.uppy.emit("upload-error",n,r),Promise.reject(r)})))))).finally((()=>{this.uppy.off("file-removed",r)}))}}),Object.defineProperty(this,q,{writable:!0,value:()=>(F(this,Z)[Z].setCompanionHeaders(this.opts.companionHeaders),Promise.resolve())}),this.type="uploader",this.id=this.opts.id||"AwsS3",this.title="AWS S3",this.defaultLocale=I
const r={timeout:3e4,limit:0,allowedMetaFields:[],getUploadParameters:this.getUploadParameters.bind(this),companionHeaders:{}}
if(this.opts={...r,...t},void 0===(null==t?void 0:t.allowedMetaFields)&&"metaFields"in this.opts)throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.")
this.i18nInit(),F(this,Z)[Z]=new o.C$(e,t),F(this,H)[H]=new i.s(this.opts.limit)}[L](){return F(this,Z)[Z]}get client(){return F(this,Z)[Z]}set client(e){F(this,Z)[Z]=e}getUploadParameters(e){if(!this.opts.companionUrl)throw new Error("Expected a `companionUrl` option containing a Companion address.")
const t=e.meta.name,{type:r}=e.meta,n=Object.fromEntries(this.opts.allowedMetaFields.filter((t=>null!=e.meta[t])).map((t=>[`metadata[${t}]`,e.meta[t].toString()]))),i=new URLSearchParams({filename:t,type:r,...n})
return F(this,Z)[Z].get(`s3/params?${i}`).then($)}install(){const{uppy:e}=this
e.addPreProcessor(F(this,q)[q]),e.addUploader(F(this,V)[V])
const t={fieldName:"file",responseUrlFieldName:"location",timeout:this.opts.timeout,[i.B]:F(this,H)[H],responseType:"text",getResponseData:this.opts.getResponseData||function(t,r){return j(t,r)?{location:(n=r.responseURL,i=R(t,"Location"),n||i.startsWith("https://")||i.startsWith("http://")||(i=`https://${i}`),new URL(i,n||void 0).toString()),bucket:R(t,"Bucket"),key:R(t,"Key"),etag:R(t,"ETag")}:"POST"===this.method.toUpperCase()?(D||(e.log("[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads","warning"),D=!0),{location:null}):r.responseURL?{location:r.responseURL.replace(/\?.*$/,"")}:{location:null}
var n,i},getResponseError:U}
t.i18n=this.i18n,F(this,B)[B]=new P(e,t)}uninstall(){this.uppy.removePreProcessor(F(this,q)[q]),this.uppy.removeUploader(F(this,V)[V])}}z.VERSION="3.0.6"},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>se})
var n=r(17),i=r(31),o=r(25),s=r(38),a=r(73),l=r(30),u=r(68)
function c(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var p=0
function d(e){return"__private_"+p+++"_"+e}const h={getChunkSize:e=>Math.ceil(e.size/1e4),onProgress(){},onPartComplete(){},onSuccess(){},onError(e){throw e}},f=Symbol("pausing upload, not an actual error")
var m=d("abortController"),g=d("chunks"),v=d("chunkState"),y=d("data"),b=d("file"),w=d("uploadPromise"),k=d("onError"),x=d("onSuccess"),_=d("onReject"),S=d("initChunks"),P=d("createUpload"),O=d("resumeUpload"),E=d("onPartProgress"),A=d("onPartComplete"),C=d("abortUpload")
function T(){const e=this.options.getChunkSize(c(this,y)[y]),t=c(this,y)[y].size,r=Math.max(5242880,Math.ceil(t/1e4)),n=Math.max(e,r)
if(0===c(this,y)[y].size)c(this,g)[g]=[c(this,y)[y]],c(this,y)[y].onProgress=c(this,E)[E](0),c(this,y)[y].onComplete=c(this,A)[A](0)
else{const e=Math.ceil(t/n)
c(this,g)[g]=Array(e)
let r=0
for(let i=0;i<t;i+=n){const e=Math.min(t,i+n),o=c(this,y)[y].slice(i,e)
o.onProgress=c(this,E)[E](r),o.onComplete=c(this,A)[A](r),c(this,g)[g][r++]=o}}c(this,v)[v]=c(this,g)[g].map((()=>({uploaded:0})))}function j(){c(this,w)[w]=this.options.companionComm.uploadFile(c(this,b)[b],c(this,g)[g],c(this,m)[m].signal).then(c(this,x)[x],c(this,_)[_])}function I(){c(this,w)[w]=this.options.companionComm.resumeUploadFile(c(this,b)[b],c(this,g)[g],c(this,m)[m].signal).then(c(this,x)[x],c(this,_)[_])}function L(){c(this,m)[m].abort(),this.options.companionComm.abortFileUpload(c(this,b)[b]).catch((e=>this.options.log(e)))}let F
function M(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var N=0
function R(e){return"__private_"+N+++"_"+e}function $(e){if(e&&e.error){const t=new Error(e.message)
throw Object.assign(t,e.error),t}return e}function U(e){if(null!=e&&e.aborted)throw(0,u.createAbortError)("The operation was aborted",{cause:e.reason})}var D=R("abortMultipartUpload"),Z=R("cache"),H=R("createMultipartUpload"),B=R("fetchSignature"),V=R("listParts"),q=R("previousRetryDelay"),z=R("requests"),W=R("retryDelayIterator"),K=R("sendCompletionRequest"),Y=R("setS3MultipartState"),X=R("uploadPartBytes"),G=R("shouldRetry")
class J{constructor(e,t,r){Object.defineProperty(this,G,{value:Q}),Object.defineProperty(this,D,{writable:!0,value:void 0}),Object.defineProperty(this,Z,{writable:!0,value:new WeakMap}),Object.defineProperty(this,H,{writable:!0,value:void 0}),Object.defineProperty(this,B,{writable:!0,value:void 0}),Object.defineProperty(this,V,{writable:!0,value:void 0}),Object.defineProperty(this,q,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,W,{writable:!0,value:void 0}),Object.defineProperty(this,K,{writable:!0,value:void 0}),Object.defineProperty(this,Y,{writable:!0,value:void 0}),Object.defineProperty(this,X,{writable:!0,value:void 0}),M(this,z)[z]=e,M(this,Y)[Y]=r,this.setOptions(t)}setOptions(e){const t=M(this,z)[z]
var r
"abortMultipartUpload"in e&&(M(this,D)[D]=t.wrapPromiseFunction(e.abortMultipartUpload)),"createMultipartUpload"in e&&(M(this,H)[H]=t.wrapPromiseFunction(e.createMultipartUpload,{priority:-1})),"signPart"in e&&(M(this,B)[B]=t.wrapPromiseFunction(e.signPart)),"listParts"in e&&(M(this,V)[V]=t.wrapPromiseFunction(e.listParts)),"completeMultipartUpload"in e&&(M(this,K)[K]=t.wrapPromiseFunction(e.completeMultipartUpload)),"retryDelays"in e&&(M(this,W)[W]=null==(r=e.retryDelays)?void 0:r.values()),"uploadPartBytes"in e&&(M(this,X)[X]=t.wrapPromiseFunction(e.uploadPartBytes,{priority:1/0}))}async getUploadId(e,t){const r=M(this,Z)[Z].get(e.data)
if(null!=r)return r
const n=M(this,H)[H](e,t),i=()=>{n.abort(t.reason),M(this,Z)[Z].delete(e.data)}
return t.addEventListener("abort",i,{once:!0}),M(this,Z)[Z].set(e.data,n),n.then((async r=>{t.removeEventListener("abort",i),M(this,Y)[Y](e,r),M(this,Z)[Z].set(e.data,r)}),(()=>{t.removeEventListener("abort",i)})),n}async abortFileUpload(e){const t=M(this,Z)[Z].get(e.data)
null!=t&&await M(this,D)[D](e,await t)}async uploadFile(e,t,r){U(r)
const{uploadId:n,key:i}=await this.getUploadId(e,r)
U(r)
const o=await Promise.all(t.map(((t,n)=>this.uploadChunk(e,n+1,t,r))))
return U(r),M(this,K)[K](e,{key:i,uploadId:n,parts:o,signal:r}).abortOn(r)}async resumeUploadFile(e,t,r){U(r)
const{uploadId:n,key:i}=await this.getUploadId(e,r)
U(r)
const o=await M(this,V)[V](e,{uploadId:n,key:i,signal:r}).abortOn(r)
U(r)
const s=await Promise.all(t.map(((t,n)=>{const i=n+1,s=o.find((e=>{let{PartNumber:t}=e
return t===i}))
return null==s?this.uploadChunk(e,i,t,r):{PartNumber:i,ETag:s.ETag}})))
return U(r),M(this,K)[K](e,{key:i,uploadId:n,parts:s,signal:r}).abortOn(r)}async uploadChunk(e,t,r,n){U(n)
const{uploadId:i,key:o}=await this.getUploadId(e,n)
for(U(n);;){const s=await M(this,B)[B](e,{uploadId:i,key:o,partNumber:t,body:r,signal:n}).abortOn(n)
U(n)
try{return{PartNumber:t,...await M(this,X)[X](s,r,n).abortOn(n)}}catch(e){if(!await M(this,G)[G](e))throw e}}}}async function Q(e){var t
const r=M(this,z)[z],n=null==e||null==(t=e.source)?void 0:t.status
if(null==n)return!1
if(403===n&&"Request has expired"===e.message){if(!r.isPaused){if(1===r.limit||null==M(this,q)[q]){var i
const e=null==(i=M(this,W)[W])?void 0:i.next()
if(null==e||e.done)return!1
M(this,q)[q]=e.value}r.rateLimit(0),await new Promise((e=>setTimeout(e,M(this,q)[q])))}}else if(429===n){if(!r.isPaused){var o
const e=null==(o=M(this,W)[W])?void 0:o.next()
if(null==e||e.done)return!1
r.rateLimit(e.value)}}else{if(n>400&&n<500&&409!==n)return!1
if("undefined"!=typeof navigator&&!1===navigator.onLine)r.isPaused||(r.pause(),window.addEventListener("online",(()=>{r.resume()}),{once:!0}))
else{var s
const e=null==(s=M(this,W)[W])?void 0:s.next()
if(null==e||e.done)return!1
await new Promise((t=>setTimeout(t,e.value)))}}return!0}var ee=R("queueRequestSocketToken"),te=R("companionCommunicationQueue"),re=R("client"),ne=R("setS3MultipartState"),ie=R("requestSocketToken"),oe=R("setCompanionHeaders")
F=Symbol.for("uppy test: getClient")
class se extends n.Z{constructor(e,t){var r
super(e,t),Object.defineProperty(this,ee,{writable:!0,value:void 0}),Object.defineProperty(this,te,{writable:!0,value:void 0}),Object.defineProperty(this,re,{writable:!0,value:void 0}),Object.defineProperty(this,ne,{writable:!0,value:(e,t)=>{let{key:r,uploadId:n}=t
const i=this.uppy.getFile(e.id)
this.uppy.setFileState(e.id,{s3Multipart:{...i.s3Multipart,key:r,uploadId:n}})}}),Object.defineProperty(this,ie,{writable:!0,value:async e=>{const t=new(e.remote.providerOptions.provider?i.zt:i.C$)(this.uppy,e.remote.providerOptions),r={...this.opts}
if(e.tus&&Object.assign(r,e.tus),null==e.remote.url)throw new Error("Cannot connect to an undefined URL")
return(await t.post(e.remote.url,{...e.remote.body,protocol:"s3-multipart",size:e.data.size,metadata:e.meta})).token}}),Object.defineProperty(this,oe,{writable:!0,value:()=>{M(this,re)[re].setCompanionHeaders(this.opts.companionHeaders)}}),this.type="uploader",this.id=this.opts.id||"AwsS3Multipart",this.title="AWS S3 Multipart",M(this,re)[re]=new i.C$(e,t)
const n={allowedMetaFields:null,limit:6,retryDelays:[0,1e3,3e3,5e3],createMultipartUpload:this.createMultipartUpload.bind(this),listParts:this.listParts.bind(this),abortMultipartUpload:this.abortMultipartUpload.bind(this),completeMultipartUpload:this.completeMultipartUpload.bind(this),signPart:this.signPart.bind(this),uploadPartBytes:se.uploadPartBytes,companionHeaders:{}}
this.opts={...n,...t},null!=(null==t?void 0:t.prepareUploadParts)&&null==t.signPart&&(this.opts.signPart=async(e,r)=>{let{uploadId:n,key:i,partNumber:o,body:s,signal:a}=r
const{presignedUrls:l,headers:u}=await t.prepareUploadParts(e,{uploadId:n,key:i,parts:[{number:o,chunk:s}],signal:a})
return{url:null==l?void 0:l[o],headers:null==u?void 0:u[o]}}),this.upload=this.upload.bind(this),this.requests=null!=(r=this.opts.rateLimitedQueue)?r:new l.s(this.opts.limit),M(this,te)[te]=new J(this.requests,this.opts,M(this,ne)[ne]),this.uploaders=Object.create(null),this.uploaderEvents=Object.create(null),this.uploaderSockets=Object.create(null),M(this,ee)[ee]=this.requests.wrapPromiseFunction(M(this,ie)[ie],{priority:-1})}[F](){return M(this,re)[re]}setOptions(e){return M(this,te)[te].setOptions(e),super.setOptions(e)}resetUploaderReferences(e,t){void 0===t&&(t={}),this.uploaders[e]&&(this.uploaders[e].abort({really:t.abort||!1}),this.uploaders[e]=null),this.uploaderEvents[e]&&(this.uploaderEvents[e].remove(),this.uploaderEvents[e]=null),this.uploaderSockets[e]&&(this.uploaderSockets[e].close(),this.uploaderSockets[e]=null)}assertHost(e){if(!this.opts.companionUrl)throw new Error(`Expected a \`companionUrl\` option containing a Companion address, or if you are not using Companion, a custom \`${e}\` implementation.`)}createMultipartUpload(e,t){var r
this.assertHost("createMultipartUpload"),U(t)
const n=e.meta?Object.fromEntries((null!=(r=this.opts.allowedMetaFields)?r:Object.keys(e.meta)).filter((t=>null!=e.meta[t])).map((t=>[t,String(e.meta[t])]))):{}
return M(this,re)[re].post("s3/multipart",{filename:e.name,type:e.type,metadata:n},{signal:t}).then($)}listParts(e,t,r){let{key:n,uploadId:i}=t
this.assertHost("listParts"),U(r)
const o=encodeURIComponent(n)
return M(this,re)[re].get(`s3/multipart/${i}?key=${o}`,{signal:r}).then($)}completeMultipartUpload(e,t,r){let{key:n,uploadId:i,parts:o}=t
this.assertHost("completeMultipartUpload"),U(r)
const s=encodeURIComponent(n),a=encodeURIComponent(i)
return M(this,re)[re].post(`s3/multipart/${a}/complete?key=${s}`,{parts:o},{signal:r}).then($)}signPart(e,t){let{uploadId:r,key:n,partNumber:i,signal:o}=t
if(this.assertHost("signPart"),U(o),null==r||null==n||null==i)throw new Error("Cannot sign without a key, an uploadId, and a partNumber")
const s=encodeURIComponent(n)
return M(this,re)[re].get(`s3/multipart/${r}/${i}?key=${s}`,{signal:o}).then($)}abortMultipartUpload(e,t,r){let{key:n,uploadId:i}=t
this.assertHost("abortMultipartUpload")
const o=encodeURIComponent(n),s=encodeURIComponent(i)
return M(this,re)[re].delete(`s3/multipart/${s}?key=${o}`,void 0,{signal:r}).then($)}static async uploadPartBytes(e,t,r){let{url:n,expires:i,headers:o}=e
if(U(r),null==n)throw new Error("Cannot upload to an undefined URL")
return new Promise(((e,s)=>{const a=new XMLHttpRequest
function l(){a.abort()}function c(){r.removeEventListener("abort",l)}a.open("PUT",n,!0),o&&Object.keys(o).forEach((e=>{a.setRequestHeader(e,o[e])})),a.responseType="text","number"==typeof i&&(a.timeout=1e3*i),r.addEventListener("abort",l),a.upload.addEventListener("progress",t.onProgress),a.addEventListener("abort",(()=>{c(),s((0,u.createAbortError)())})),a.addEventListener("timeout",(()=>{c()
const e=new Error("Request has expired")
e.source={status:403},s(e)})),a.addEventListener("load",(r=>{if(c(),403===r.target.status&&r.target.responseText.includes("<Message>Request has expired</Message>")){const e=new Error("Request has expired")
return e.source=r.target,void s(e)}if(r.target.status<200||r.target.status>=300){const e=new Error("Non 2xx")
return e.source=r.target,void s(e)}null==t.onProgress||t.onProgress(t.size)
const n=r.target.getResponseHeader("ETag")
null!==n?(null==t.onComplete||t.onComplete(n),e({ETag:n})):s(new Error("AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."))})),a.addEventListener("error",(e=>{c()
const t=new Error("Unknown error")
t.source=e.target,s(t)})),a.send(t)}))}uploadFile(e){var t=this
return new Promise(((r,n)=>{const i=new class{constructor(e,t){var r
Object.defineProperty(this,C,{value:L}),Object.defineProperty(this,O,{value:I}),Object.defineProperty(this,P,{value:j}),Object.defineProperty(this,S,{value:T}),Object.defineProperty(this,m,{writable:!0,value:new u.AbortController}),Object.defineProperty(this,g,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,b,{writable:!0,value:void 0}),Object.defineProperty(this,w,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:e=>(null==e?void 0:e.cause)===f?null:c(this,k)[k](e)}),Object.defineProperty(this,E,{writable:!0,value:e=>t=>{if(!t.lengthComputable)return
const r=t.loaded
c(this,v)[v][e].uploaded=function(e){if("string"==typeof e)return parseInt(e,10)
if("number"==typeof e)return e
throw new TypeError("Expected a number")}(r)
const n=c(this,v)[v].reduce(((e,t)=>e+t.uploaded),0)
this.options.onProgress(n,c(this,y)[y].size)}}),Object.defineProperty(this,A,{writable:!0,value:e=>t=>{c(this,g)[g][e]=null,c(this,v)[v][e].etag=t,c(this,v)[v][e].done=!0
const r={PartNumber:e+1,ETag:t}
this.options.onPartComplete(r)}}),this.options={...h,...t},null!=(r=this.options).getChunkSize||(r.getChunkSize=h.getChunkSize),c(this,y)[y]=e,c(this,b)[b]=t.file,c(this,x)[x]=this.options.onSuccess,c(this,k)[k]=this.options.onError,c(this,S)[S]()}start(){c(this,w)[w]?(c(this,m)[m].signal.aborted||c(this,m)[m].abort(f),c(this,m)[m]=new u.AbortController,c(this,O)[O]()):c(this,P)[P]()}pause(){c(this,m)[m].abort(f),c(this,m)[m]=new u.AbortController}abort(e){var t
void 0===e&&(e=void 0),null!=(t=e)&&t.really?c(this,C)[C]():this.pause()}get chunkState(){return c(this,v)[v]}}(e.data,{companionComm:M(this,te)[te],log:function(){return t.uppy.log(...arguments)},getChunkSize:this.opts.getChunkSize?this.opts.getChunkSize.bind(this):null,onProgress:(t,r)=>{this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t,bytesTotal:r})},onError:t=>{this.uppy.log(t),this.uppy.emit("upload-error",e,t),this.resetUploaderReferences(e.id),n(t)},onSuccess:t=>{const n=i,o={body:{...t},uploadURL:t.location}
this.resetUploaderReferences(e.id)
const s=this.uppy.getFile(e.id)
this.uppy.emit("upload-success",s||e,o),t.location&&this.uppy.log(`Download ${e.name} from ${t.location}`),r(n)},onPartComplete:t=>{const r=this.uppy.getFile(e.id)
r&&this.uppy.emit("s3-multipart:part-uploaded",r,t)},file:e,...e.s3Multipart})
this.uploaders[e.id]=i,this.uploaderEvents[e.id]=new o.default(this.uppy),this.onFileRemove(e.id,(t=>{i.abort(),this.resetUploaderReferences(e.id,{abort:!0}),r(`upload ${t.id} was removed`)})),this.onCancelAll(e.id,(function(n){let{reason:o}=void 0===n?{}:n
"user"===o&&(i.abort(),t.resetUploaderReferences(e.id,{abort:!0})),r(`upload ${e.id} was canceled`)})),this.onFilePause(e.id,(e=>{e?i.pause():i.start()})),this.onPauseAll(e.id,(()=>{i.pause()})),this.onResumeAll(e.id,(()=>{i.start()})),e.progress.uploadStarted&&e.isRestored||(i.start(),this.uppy.emit("upload-started",e))}))}async uploadRemote(e){this.resetUploaderReferences(e.id),e.progress.uploadStarted&&e.isRestored||this.uppy.emit("upload-started",e)
try{if(e.serverToken)return await this.connectToServerSocket(e)
const t=await M(this,ee)[ee](e)
if(!this.uppy.getState().files[e.id])return
return this.uppy.setFileState(e.id,{serverToken:t}),await this.connectToServerSocket(this.uppy.getFile(e.id))}catch(t){throw this.uppy.setFileState(e.id,{serverToken:void 0}),this.uppy.emit("upload-error",e,t),t}}async connectToServerSocket(e){var t=this
return new Promise(((r,n)=>{let l
const u=e.serverToken,c=(0,a.Z)(e.remote.companionUrl),p=new i.sk({target:`${c}/api/${u}`,autoOpen:!1})
this.uploaderSockets[e.id]=p,this.uploaderEvents[e.id]=new o.default(this.uppy),this.onFileRemove(e.id,(()=>{l.abort(),p.send("cancel",{}),this.resetUploaderReferences(e.id,{abort:!0}),r(`upload ${e.id} was removed`)})),this.onFilePause(e.id,(e=>{e?(l.abort(),p.send("pause",{})):(l.abort(),l=this.requests.run((()=>(p.open(),p.send("resume",{}),()=>p.close()))))})),this.onPauseAll(e.id,(()=>{l.abort(),p.send("pause",{})})),this.onCancelAll(e.id,(function(n){let{reason:i}=void 0===n?{}:n
"user"===i&&(l.abort(),p.send("cancel",{}),t.resetUploaderReferences(e.id)),r(`upload ${e.id} was canceled`)})),this.onResumeAll(e.id,(()=>{l.abort(),e.error&&p.send("pause",{}),l=this.requests.run((()=>(p.open(),p.send("resume",{}),()=>p.close())))})),this.onRetry(e.id,(()=>{p.isOpen&&(p.send("pause",{}),p.send("resume",{}))})),this.onRetryAll(e.id,(()=>{p.isOpen&&(p.send("pause",{}),p.send("resume",{}))})),p.on("progress",(t=>(0,s.Z)(this,t,e))),p.on("error",(t=>{this.uppy.emit("upload-error",e,new Error(t.error)),this.resetUploaderReferences(e.id),l.done(),n(new Error(t.error))})),p.on("success",(t=>{const n={uploadURL:t.url}
this.uppy.emit("upload-success",e,n),this.resetUploaderReferences(e.id),l.done(),r()})),l=this.requests.run((()=>(e.isPaused?p.send("pause",{}):p.open(),()=>p.close())))}))}async upload(e){if(0===e.length)return
const t=e.map((e=>{const t=this.uppy.getFile(e)
return t.isRemote?this.uploadRemote(t):this.uploadFile(t)}))
return Promise.all(t)}onFileRemove(e,t){this.uploaderEvents[e].on("file-removed",(r=>{e===r.id&&t(r.id)}))}onFilePause(e,t){this.uploaderEvents[e].on("upload-pause",((r,n)=>{e===r&&t(n)}))}onRetry(e,t){this.uploaderEvents[e].on("upload-retry",(r=>{e===r&&t()}))}onRetryAll(e,t){this.uploaderEvents[e].on("retry-all",(()=>{this.uppy.getFile(e)&&t()}))}onPauseAll(e,t){this.uploaderEvents[e].on("pause-all",(()=>{this.uppy.getFile(e)&&t()}))}onCancelAll(e,t){var r=this
this.uploaderEvents[e].on("cancel-all",(function(){r.uppy.getFile(e)&&t(...arguments)}))}onResumeAll(e,t){this.uploaderEvents[e].on("resume-all",(()=>{this.uppy.getFile(e)&&t()}))}install(){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,resumableUploads:!0}}),this.uppy.addPreProcessor(M(this,oe)[oe]),this.uppy.addUploader(this.upload)}uninstall(){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,resumableUploads:!1}}),this.uppy.removePreProcessor(M(this,oe)[oe]),this.uppy.removeUploader(this.upload)}}se.VERSION="3.1.3"},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{BasePlugin:()=>ze.Z,UIPlugin:()=>Ge,Uppy:()=>pe,debugLogger:()=>x,default:()=>pe})
var n=r(159),i=r(37),o=r(74),s=r(107)
function a(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var l=0
function u(e){return"__private_"+l+++"_"+e}var c=u("callbacks"),p=u("publish")
class d{constructor(){Object.defineProperty(this,p,{value:h}),Object.defineProperty(this,c,{writable:!0,value:new Set}),this.state={}}getState(){return this.state}setState(e){const t={...this.state},r={...this.state,...e}
this.state=r,a(this,p)[p](t,r,e)}subscribe(e){return a(this,c)[c].add(e),()=>{a(this,c)[c].delete(e)}}}function h(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
a(this,c)[c].forEach((e=>{e(...t)}))}d.VERSION="3.0.3"
const f=d
function m(e){const t=e.lastIndexOf(".")
return-1===t||t===e.length-1?{name:e,extension:void 0}:{name:e.slice(0,t),extension:e.slice(t+1)}}const g={md:"text/markdown",markdown:"text/markdown",mp4:"video/mp4",mp3:"audio/mp3",svg:"image/svg+xml",jpg:"image/jpeg",png:"image/png",webp:"image/webp",gif:"image/gif",heic:"image/heic",heif:"image/heif",yaml:"text/yaml",yml:"text/yaml",csv:"text/csv",tsv:"text/tab-separated-values",tab:"text/tab-separated-values",avi:"video/x-msvideo",mks:"video/x-matroska",mkv:"video/x-matroska",mov:"video/quicktime",dicom:"application/dicom",doc:"application/msword",docm:"application/vnd.ms-word.document.macroenabled.12",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",dot:"application/msword",dotm:"application/vnd.ms-word.template.macroenabled.12",dotx:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",xla:"application/vnd.ms-excel",xlam:"application/vnd.ms-excel.addin.macroenabled.12",xlc:"application/vnd.ms-excel",xlf:"application/x-xliff+xml",xlm:"application/vnd.ms-excel",xls:"application/vnd.ms-excel",xlsb:"application/vnd.ms-excel.sheet.binary.macroenabled.12",xlsm:"application/vnd.ms-excel.sheet.macroenabled.12",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xlt:"application/vnd.ms-excel",xltm:"application/vnd.ms-excel.template.macroenabled.12",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",xlw:"application/vnd.ms-excel",txt:"text/plain",text:"text/plain",conf:"text/plain",log:"text/plain",pdf:"application/pdf",zip:"application/zip","7z":"application/x-7z-compressed",rar:"application/x-rar-compressed",tar:"application/x-tar",gz:"application/gzip",dmg:"application/x-apple-diskimage"}
function v(e){let t=""
return e.replace(/[^A-Z0-9]/gi,(e=>(t+=`-${function(e){return e.charCodeAt(0).toString(32)}(e)}`,"/")))+t}function y(e){if(null==e&&"undefined"!=typeof navigator&&(e=navigator.userAgent),!e)return!0
const t=/Edge\/(\d+\.\d+)/.exec(e)
if(!t)return!0
const r=t[1]
let[n,i]=r.split(".")
return n=parseInt(n,10),i=parseInt(i,10),n<15||15===n&&i<15063||n>18||18===n&&i>=18218}function b(e){return e<10?`0${e}`:e.toString()}function w(){const e=new Date
return`${b(e.getHours())}:${b(e.getMinutes())}:${b(e.getSeconds())}`}const k={debug:()=>{},warn:()=>{},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.error(`[Uppy] [${w()}]`,...t)}},x={debug:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.debug(`[Uppy] [${w()}]`,...t)},warn:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.warn(`[Uppy] [${w()}]`,...t)},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return console.error(`[Uppy] [${w()}]`,...t)}}
var _=r(108),S=r(109)
const P={maxFileSize:null,minFileSize:null,maxTotalFileSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,requiredMetaFields:[]}
class O extends Error{constructor(){super(...arguments),this.isRestriction=!0}}class E{constructor(e,t){this.i18n=t,this.getOpts=()=>{const t=e()
if(null!=t.restrictions.allowedFileTypes&&!Array.isArray(t.restrictions.allowedFileTypes))throw new TypeError("`restrictions.allowedFileTypes` must be an array")
return t}}validate(e,t){const{maxFileSize:r,minFileSize:n,maxTotalFileSize:i,maxNumberOfFiles:o,allowedFileTypes:s}=this.getOpts().restrictions
if(o){if(t.filter((e=>!e.isGhost)).length+1>o)throw new O(`${this.i18n("youCanOnlyUploadX",{smart_count:o})}`)}if(s&&!s.some((t=>t.includes("/")?!!e.type&&S(e.type.replace(/;.*?$/,""),t):!("."!==t[0]||!e.extension)&&e.extension.toLowerCase()===t.slice(1).toLowerCase()))){const e=s.join(", ")
throw new O(this.i18n("youCanOnlyUploadFileTypes",{types:e}))}if(i&&null!=e.size){if(t.reduce(((e,t)=>e+t.size),e.size)>i)throw new O(this.i18n("exceedsSize",{size:_(i),file:e.name}))}if(r&&null!=e.size&&e.size>r)throw new O(this.i18n("exceedsSize",{size:_(r),file:e.name}))
if(n&&null!=e.size&&e.size<n)throw new O(this.i18n("inferiorSize",{size:_(n)}))}validateMinNumberOfFiles(e){const{minNumberOfFiles:t}=this.getOpts().restrictions
if(Object.keys(e).length<t)throw new O(this.i18n("youHaveToAtLeastSelectX",{smart_count:t}))}getMissingRequiredMetaFields(e){const t=new O(this.i18n("missingRequiredMetaFieldOnFile",{fileName:e.name})),{requiredMetaFields:r}=this.getOpts().restrictions,n=[]
for(const i of r)Object.hasOwn(e.meta,i)&&""!==e.meta[i]||n.push(i)
return{missingFields:n,error:t}}}const A={strings:{addBulkFilesFailed:{0:"Failed to add %{smart_count} file due to an internal error",1:"Failed to add %{smart_count} files due to internal errors"},youCanOnlyUploadX:{0:"You can only upload %{smart_count} file",1:"You can only upload %{smart_count} files"},youHaveToAtLeastSelectX:{0:"You have to select at least %{smart_count} file",1:"You have to select at least %{smart_count} files"},exceedsSize:"%{file} exceeds maximum allowed size of %{size}",missingRequiredMetaField:"Missing required meta fields",missingRequiredMetaFieldOnFile:"Missing required meta fields in %{fileName}",inferiorSize:"This file is smaller than the allowed size of %{size}",youCanOnlyUploadFileTypes:"You can only upload: %{types}",noMoreFilesAllowed:"Cannot add more files",noDuplicates:"Cannot add the duplicate file '%{fileName}', it already exists",companionError:"Connection with Companion failed",authAborted:"Authentication aborted",companionUnauthorizeHint:"To unauthorize to your %{provider} account, please go to %{url}",failedToUpload:"Failed to upload %{file}",noInternetConnection:"No Internet connection",connectedToInternet:"Connected to the Internet",noFilesFound:"You have no files or folders here",selectX:{0:"Select %{smart_count}",1:"Select %{smart_count}"},allFilesFromFolderNamed:"All files from folder %{name}",openFolderNamed:"Open folder %{name}",cancel:"Cancel",logOut:"Log out",filter:"Filter",resetFilter:"Reset filter",loading:"Loading...",authenticateWithTitle:"Please authenticate with %{pluginName} to select files",authenticateWith:"Connect to %{pluginName}",signInWithGoogle:"Sign in with Google",searchImages:"Search for images",enterTextToSearch:"Enter text to search for images",search:"Search",emptyFolderAdded:"No files were added from empty folder",folderAlreadyAdded:'The folder "%{folder}" was already added',folderAdded:{0:"Added %{smart_count} file from %{folder}",1:"Added %{smart_count} files from %{folder}"}}}
let C,T
function j(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var I=0
function L(e){return"__private_"+I+++"_"+e}var F=L("plugins"),M=L("restricter"),N=L("storeUnsubscribe"),R=L("emitter"),$=L("preProcessors"),U=L("uploaders"),D=L("postProcessors"),Z=L("informAndEmit"),H=L("checkRequiredMetaFieldsOnFile"),B=L("checkRequiredMetaFields"),V=L("assertNewUploadAllowed"),q=L("checkAndCreateFileStateObject"),z=L("startIfAutoProceed"),W=L("addListeners"),K=L("updateOnlineStatus"),Y=L("createUpload"),X=L("getUpload"),G=L("removeUpload"),J=L("runUpload")
C=Symbol.for("uppy test: getPlugins"),T=Symbol.for("uppy test: createUpload")
class Q{constructor(e){Object.defineProperty(this,J,{value:ce}),Object.defineProperty(this,G,{value:ue}),Object.defineProperty(this,X,{value:le}),Object.defineProperty(this,Y,{value:ae}),Object.defineProperty(this,W,{value:se}),Object.defineProperty(this,z,{value:oe}),Object.defineProperty(this,q,{value:ie}),Object.defineProperty(this,V,{value:ne}),Object.defineProperty(this,B,{value:re}),Object.defineProperty(this,H,{value:te}),Object.defineProperty(this,Z,{value:ee}),Object.defineProperty(this,F,{writable:!0,value:Object.create(null)}),Object.defineProperty(this,M,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),Object.defineProperty(this,R,{writable:!0,value:i()}),Object.defineProperty(this,$,{writable:!0,value:new Set}),Object.defineProperty(this,U,{writable:!0,value:new Set}),Object.defineProperty(this,D,{writable:!0,value:new Set}),Object.defineProperty(this,K,{writable:!0,value:this.updateOnlineStatus.bind(this)}),this.defaultLocale=A
const t={id:"uppy",autoProceed:!1,allowMultipleUploadBatches:!0,debug:!1,restrictions:P,meta:{},onBeforeFileAdded:e=>e,onBeforeUpload:e=>e,store:new f,logger:k,infoTimeout:5e3}
this.opts={...t,...e,restrictions:{...t.restrictions,...e&&e.restrictions}},e&&e.logger&&e.debug?this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.","warning"):e&&e.debug&&(this.opts.logger=x),this.log(`Using Core v${this.constructor.VERSION}`),this.i18nInit(),this.calculateProgress=s(this.calculateProgress.bind(this),500,{leading:!0,trailing:!0}),this.store=this.opts.store,this.setState({plugins:{},files:{},currentUploads:{},allowNewUpload:!0,capabilities:{uploadProgress:y(),individualCancellation:!0,resumableUploads:!1},totalProgress:0,meta:{...this.opts.meta},info:[],recoveredState:null}),j(this,M)[M]=new E((()=>this.opts),this.i18n),j(this,N)[N]=this.store.subscribe(((e,t,r)=>{this.emit("state-update",e,t,r),this.updateAll(t)})),this.opts.debug&&"undefined"!=typeof window&&(window[this.opts.id]=this),j(this,W)[W]()}emit(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
j(this,R)[R].emit(e,...r)}on(e,t){return j(this,R)[R].on(e,t),this}once(e,t){return j(this,R)[R].once(e,t),this}off(e,t){return j(this,R)[R].off(e,t),this}updateAll(e){this.iteratePlugins((t=>{t.update(e)}))}setState(e){this.store.setState(e)}getState(){return this.store.getState()}setFileState(e,t){if(!this.getState().files[e])throw new Error(`Can’t set state for ${e} (the file could have been removed)`)
this.setState({files:{...this.getState().files,[e]:{...this.getState().files[e],...t}}})}i18nInit(){const e=new n.Z([this.defaultLocale,this.opts.locale])
this.i18n=e.translate.bind(e),this.i18nArray=e.translateArray.bind(e),this.locale=e.locale}setOptions(e){this.opts={...this.opts,...e,restrictions:{...this.opts.restrictions,...e&&e.restrictions}},e.meta&&this.setMeta(e.meta),this.i18nInit(),e.locale&&this.iteratePlugins((e=>{e.setOptions()})),this.setState()}resetProgress(){const e={percentage:0,bytesUploaded:0,uploadComplete:!1,uploadStarted:null},t={...this.getState().files},r={}
Object.keys(t).forEach((n=>{const i={...t[n]}
i.progress={...i.progress,...e},r[n]=i})),this.setState({files:r,totalProgress:0}),this.emit("reset-progress")}addPreProcessor(e){j(this,$)[$].add(e)}removePreProcessor(e){return j(this,$)[$].delete(e)}addPostProcessor(e){j(this,D)[D].add(e)}removePostProcessor(e){return j(this,D)[D].delete(e)}addUploader(e){j(this,U)[U].add(e)}removeUploader(e){return j(this,U)[U].delete(e)}setMeta(e){const t={...this.getState().meta,...e},r={...this.getState().files}
Object.keys(r).forEach((t=>{r[t]={...r[t],meta:{...r[t].meta,...e}}})),this.log("Adding metadata:"),this.log(e),this.setState({meta:t,files:r})}setFileMeta(e,t){const r={...this.getState().files}
if(!r[e])return void this.log("Was trying to set metadata for a file that has been removed: ",e)
const n={...r[e].meta,...t}
r[e]={...r[e],meta:n},this.setState({files:r})}getFile(e){return this.getState().files[e]}getFiles(){const{files:e}=this.getState()
return Object.values(e)}getObjectOfFilesPerState(){const{files:e,totalProgress:t,error:r}=this.getState(),n=Object.values(e),i=n.filter((e=>{let{progress:t}=e
return!t.uploadComplete&&t.uploadStarted})),o=n.filter((e=>!e.progress.uploadStarted)),s=n.filter((e=>e.progress.uploadStarted||e.progress.preprocess||e.progress.postprocess)),a=n.filter((e=>e.progress.uploadStarted)),l=n.filter((e=>e.isPaused)),u=n.filter((e=>e.progress.uploadComplete)),c=n.filter((e=>e.error)),p=i.filter((e=>!e.isPaused)),d=n.filter((e=>e.progress.preprocess||e.progress.postprocess))
return{newFiles:o,startedFiles:s,uploadStartedFiles:a,pausedFiles:l,completeFiles:u,erroredFiles:c,inProgressFiles:i,inProgressNotPausedFiles:p,processingFiles:d,isUploadStarted:a.length>0,isAllComplete:100===t&&u.length===n.length&&0===d.length,isAllErrored:!!r&&c.length===n.length,isAllPaused:0!==i.length&&l.length===i.length,isUploadInProgress:i.length>0,isSomeGhost:n.some((e=>e.isGhost))}}validateRestrictions(e,t){void 0===t&&(t=this.getFiles())
try{j(this,M)[M].validate(e,t)}catch(e){return e}return null}checkIfFileAlreadyExists(e){const{files:t}=this.getState()
return!(!t[e]||t[e].isGhost)}addFile(e){j(this,V)[V](e)
const{files:t}=this.getState()
let r=j(this,q)[q](t,e)
return t[r.id]&&t[r.id].isGhost&&(r={...t[r.id],data:e.data,isGhost:!1},this.log(`Replaced the blob in the restored ghost file: ${r.name}, ${r.id}`)),this.setState({files:{...t,[r.id]:r}}),this.emit("file-added",r),this.emit("files-added",[r]),this.log(`Added file: ${r.name}, ${r.id}, mime type: ${r.type}`),j(this,z)[z](),r.id}addFiles(e){j(this,V)[V]()
const t={...this.getState().files},r=[],n=[]
for(let i=0;i<e.length;i++)try{let n=j(this,q)[q](t,e[i])
t[n.id]&&t[n.id].isGhost&&(n={...t[n.id],data:e[i].data,isGhost:!1},this.log(`Replaced blob in a ghost file: ${n.name}, ${n.id}`)),t[n.id]=n,r.push(n)}catch(e){e.isRestriction||n.push(e)}if(this.setState({files:t}),r.forEach((e=>{this.emit("file-added",e)})),this.emit("files-added",r),r.length>5?this.log(`Added batch of ${r.length} files`):Object.keys(r).forEach((e=>{this.log(`Added file: ${r[e].name}\n id: ${r[e].id}\n type: ${r[e].type}`)})),r.length>0&&j(this,z)[z](),n.length>0){let e="Multiple errors occurred while adding files:\n"
if(n.forEach((t=>{e+=`\n * ${t.message}`})),this.info({message:this.i18n("addBulkFilesFailed",{smart_count:n.length}),details:e},"error",this.opts.infoTimeout),"function"==typeof AggregateError)throw new AggregateError(n,e)
{const t=new Error(e)
throw t.errors=n,t}}}removeFiles(e,t){const{files:r,currentUploads:n}=this.getState(),i={...r},o={...n},s=Object.create(null)
function a(e){return void 0===s[e]}e.forEach((e=>{r[e]&&(s[e]=r[e],delete i[e])})),Object.keys(o).forEach((e=>{const t=n[e].fileIDs.filter(a)
if(0===t.length)return void delete o[e]
const{capabilities:r}=this.getState()
if(t.length!==n[e].fileIDs.length&&!r.individualCancellation)throw new Error("individualCancellation is disabled")
o[e]={...n[e],fileIDs:t}}))
const l={currentUploads:o,files:i}
0===Object.keys(i).length&&(l.allowNewUpload=!0,l.error=null,l.recoveredState=null),this.setState(l),this.calculateTotalProgress()
const u=Object.keys(s)
u.forEach((e=>{this.emit("file-removed",s[e],t)})),u.length>5?this.log(`Removed ${u.length} files`):this.log(`Removed files: ${u.join(", ")}`)}removeFile(e,t){void 0===t&&(t=null),this.removeFiles([e],t)}pauseResume(e){if(!this.getState().capabilities.resumableUploads||this.getFile(e).uploadComplete)return
const t=!this.getFile(e).isPaused
return this.setFileState(e,{isPaused:t}),this.emit("upload-pause",e,t),t}pauseAll(){const e={...this.getState().files}
Object.keys(e).filter((t=>!e[t].progress.uploadComplete&&e[t].progress.uploadStarted)).forEach((t=>{const r={...e[t],isPaused:!0}
e[t]=r})),this.setState({files:e}),this.emit("pause-all")}resumeAll(){const e={...this.getState().files}
Object.keys(e).filter((t=>!e[t].progress.uploadComplete&&e[t].progress.uploadStarted)).forEach((t=>{const r={...e[t],isPaused:!1,error:null}
e[t]=r})),this.setState({files:e}),this.emit("resume-all")}retryAll(){const e={...this.getState().files},t=Object.keys(e).filter((t=>e[t].error))
if(t.forEach((t=>{const r={...e[t],isPaused:!1,error:null}
e[t]=r})),this.setState({files:e,error:null}),this.emit("retry-all",t),0===t.length)return Promise.resolve({successful:[],failed:[]})
const r=j(this,Y)[Y](t,{forceAllowNewUpload:!0})
return j(this,J)[J](r)}cancelAll(e){let{reason:t="user"}=void 0===e?{}:e
if(this.emit("cancel-all",{reason:t}),"user"===t){const{files:e}=this.getState(),t=Object.keys(e)
t.length&&this.removeFiles(t,"cancel-all"),this.setState({totalProgress:0,error:null,recoveredState:null})}}retryUpload(e){this.setFileState(e,{error:null,isPaused:!1}),this.emit("upload-retry",e)
const t=j(this,Y)[Y]([e],{forceAllowNewUpload:!0})
return j(this,J)[J](t)}logout(){this.iteratePlugins((e=>{e.provider&&e.provider.logout&&e.provider.logout()}))}calculateProgress(e,t){if(null==e||!this.getFile(e.id))return void this.log(`Not setting progress for a file that has been removed: ${null==e?void 0:e.id}`)
const r=Number.isFinite(t.bytesTotal)&&t.bytesTotal>0
this.setFileState(e.id,{progress:{...this.getFile(e.id).progress,bytesUploaded:t.bytesUploaded,bytesTotal:t.bytesTotal,percentage:r?Math.round(t.bytesUploaded/t.bytesTotal*100):0}}),this.calculateTotalProgress()}calculateTotalProgress(){const e=this.getFiles().filter((e=>e.progress.uploadStarted||e.progress.preprocess||e.progress.postprocess))
if(0===e.length)return this.emit("progress",0),void this.setState({totalProgress:0})
const t=e.filter((e=>null!=e.progress.bytesTotal)),r=e.filter((e=>null==e.progress.bytesTotal))
if(0===t.length){const t=100*e.length,n=r.reduce(((e,t)=>e+t.progress.percentage),0),i=Math.round(n/t*100)
return void this.setState({totalProgress:i})}let n=t.reduce(((e,t)=>e+t.progress.bytesTotal),0)
const i=n/t.length
n+=i*r.length
let o=0
t.forEach((e=>{o+=e.progress.bytesUploaded})),r.forEach((e=>{o+=i*(e.progress.percentage||0)/100}))
let s=0===n?0:Math.round(o/n*100)
s>100&&(s=100),this.setState({totalProgress:s}),this.emit("progress",s)}updateOnlineStatus(){void 0===window.navigator.onLine||window.navigator.onLine?(this.emit("is-online"),this.wasOffline&&(this.emit("back-online"),this.info(this.i18n("connectedToInternet"),"success",3e3),this.wasOffline=!1)):(this.emit("is-offline"),this.info(this.i18n("noInternetConnection"),"error",0),this.wasOffline=!0)}getID(){return this.opts.id}use(e,t){if("function"!=typeof e)throw new TypeError(`Expected a plugin class, but got ${null===e?"null":typeof e}. Please verify that the plugin was imported and spelled correctly.`)
const r=new e(this,t),n=r.id
if(!n)throw new Error("Your plugin must have an id")
if(!r.type)throw new Error("Your plugin must have a type")
const i=this.getPlugin(n)
if(i){const e=`Already found a plugin named '${i.id}'. Tried to use: '${n}'.\nUppy plugins must have unique \`id\` options. See https://uppy.io/docs/plugins/#id.`
throw new Error(e)}return e.VERSION&&this.log(`Using ${n} v${e.VERSION}`),r.type in j(this,F)[F]?j(this,F)[F][r.type].push(r):j(this,F)[F][r.type]=[r],r.install(),this}getPlugin(e){for(const t of Object.values(j(this,F)[F])){const r=t.find((t=>t.id===e))
if(null!=r)return r}}[C](e){return j(this,F)[F][e]}iteratePlugins(e){Object.values(j(this,F)[F]).flat(1).forEach(e)}removePlugin(e){this.log(`Removing plugin ${e.id}`),this.emit("plugin-remove",e),e.uninstall&&e.uninstall()
const t=j(this,F)[F][e.type],r=t.findIndex((t=>t.id===e.id));-1!==r&&t.splice(r,1)
const n={plugins:{...this.getState().plugins,[e.id]:void 0}}
this.setState(n)}close(e){let{reason:t}=void 0===e?{}:e
this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`),this.cancelAll({reason:t}),j(this,N)[N](),this.iteratePlugins((e=>{this.removePlugin(e)})),"undefined"!=typeof window&&window.removeEventListener&&(window.removeEventListener("online",j(this,K)[K]),window.removeEventListener("offline",j(this,K)[K]))}hideInfo(){const{info:e}=this.getState()
this.setState({info:e.slice(1)}),this.emit("info-hidden")}info(e,t,r){void 0===t&&(t="info"),void 0===r&&(r=3e3)
const n="object"==typeof e
this.setState({info:[...this.getState().info,{type:t,message:n?e.message:e,details:n?e.details:null}]}),setTimeout((()=>this.hideInfo()),r),this.emit("info-visible")}log(e,t){const{logger:r}=this.opts
switch(t){case"error":r.error(e)
break
case"warning":r.warn(e)
break
default:r.debug(e)}}restore(e){return this.log(`Core: attempting to restore upload "${e}"`),this.getState().currentUploads[e]?j(this,J)[J](e):(j(this,G)[G](e),Promise.reject(new Error("Nonexistent upload")))}[T](){return j(this,Y)[Y](...arguments)}addResultData(e,t){if(!j(this,X)[X](e))return void this.log(`Not setting result for an upload that has been removed: ${e}`)
const{currentUploads:r}=this.getState(),n={...r[e],result:{...r[e].result,...t}}
this.setState({currentUploads:{...r,[e]:n}})}upload(){var e
null!=(e=j(this,F)[F].uploader)&&e.length||this.log("No uploader type plugins are used","warning")
let{files:t}=this.getState()
const r=this.opts.onBeforeUpload(t)
return!1===r?Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")):(r&&"object"==typeof r&&(t=r,this.setState({files:t})),Promise.resolve().then((()=>j(this,M)[M].validateMinNumberOfFiles(t))).catch((e=>{throw j(this,Z)[Z](e),e})).then((()=>{if(!j(this,B)[B](t))throw new O(this.i18n("missingRequiredMetaField"))})).catch((e=>{throw e})).then((()=>{const{currentUploads:e}=this.getState(),r=Object.values(e).flatMap((e=>e.fileIDs)),n=[]
Object.keys(t).forEach((e=>{const t=this.getFile(e)
t.progress.uploadStarted||-1!==r.indexOf(e)||n.push(t.id)}))
const i=j(this,Y)[Y](n)
return j(this,J)[J](i)})).catch((e=>{throw this.emit("error",e),this.log(e,"error"),e})))}}function ee(e,t){const{message:r,details:n=""}=e
e.isRestriction?this.emit("restriction-failed",t,e):this.emit("error",e),this.info({message:r,details:n},"error",this.opts.infoTimeout),this.log(`${r} ${n}`.trim(),"error")}function te(e){const{missingFields:t,error:r}=j(this,M)[M].getMissingRequiredMetaFields(e)
return!(t.length>0&&(this.setFileState(e.id,{missingRequiredMetaFields:t}),this.log(r.message),this.emit("restriction-failed",e,r),1))}function re(e){let t=!0
for(const r of Object.values(e))j(this,H)[H](r)||(t=!1)
return t}function ne(e){const{allowNewUpload:t}=this.getState()
if(!1===t){const t=new O(this.i18n("noMoreFilesAllowed"))
throw j(this,Z)[Z](t,e),t}}function ie(e,t){t instanceof File&&(t={name:t.name,type:t.type,size:t.size,data:t})
const r=function(e){var t
if(e.type)return e.type
const r=e.name?null==(t=m(e.name).extension)?void 0:t.toLowerCase():null
return r&&r in g?g[r]:"application/octet-stream"}(t),n=function(e,t){return t.name?t.name:"image"===e.split("/")[0]?`${e.split("/")[0]}.${e.split("/")[1]}`:"noname"}(r,t),i=m(n).extension,o=Boolean(t.isRemote),s=function(e){let t="uppy"
return"string"==typeof e.name&&(t+=`-${v(e.name.toLowerCase())}`),void 0!==e.type&&(t+=`-${e.type}`),e.meta&&"string"==typeof e.meta.relativePath&&(t+=`-${v(e.meta.relativePath.toLowerCase())}`),void 0!==e.data.size&&(t+=`-${e.data.size}`),void 0!==e.data.lastModified&&(t+=`-${e.data.lastModified}`),t}({...t,type:r})
if(this.checkIfFileAlreadyExists(s)){const e=new O(this.i18n("noDuplicates",{fileName:n}))
throw j(this,Z)[Z](e,t),e}const a=t.meta||{}
a.name=n,a.type=r
const l=Number.isFinite(t.data.size)?t.data.size:null
let u={source:t.source||"",id:s,name:n,extension:i||"",meta:{...this.getState().meta,...a},type:r,data:t.data,progress:{percentage:0,bytesUploaded:0,bytesTotal:l,uploadComplete:!1,uploadStarted:null},size:l,isRemote:o,remote:t.remote||"",preview:t.preview}
const c=this.opts.onBeforeFileAdded(u,e)
if(!1===c){const e=new O("Cannot add the file because onBeforeFileAdded returned false.")
throw this.emit("restriction-failed",t,e),e}"object"==typeof c&&null!==c&&(u=c)
try{const t=Object.keys(e).map((t=>e[t]))
j(this,M)[M].validate(u,t)}catch(e){throw j(this,Z)[Z](e,u),e}return u}function oe(){this.opts.autoProceed&&!this.scheduledAutoProceed&&(this.scheduledAutoProceed=setTimeout((()=>{this.scheduledAutoProceed=null,this.upload().catch((e=>{e.isRestriction||this.log(e.stack||e.message||e)}))}),4))}function se(){const e=(e,t,r)=>{let n=e.message||"Unknown error"
e.details&&(n+=` ${e.details}`),this.setState({error:n}),null!=t&&t.id in this.getState().files&&this.setFileState(t.id,{error:n,response:r})}
this.on("error",e),this.on("upload-error",((t,r,n)=>{if(e(r,t,n),"object"==typeof r&&r.message){const e=new Error(r.message)
e.details=r.message,r.details&&(e.details+=` ${r.details}`),e.message=this.i18n("failedToUpload",{file:null==t?void 0:t.name}),j(this,Z)[Z](e)}else j(this,Z)[Z](r)})),this.on("upload",(()=>{this.setState({error:null})})),this.on("upload-started",(e=>{null!=e&&this.getFile(e.id)?this.setFileState(e.id,{progress:{uploadStarted:Date.now(),uploadComplete:!1,percentage:0,bytesUploaded:0,bytesTotal:e.size}}):this.log(`Not setting progress for a file that has been removed: ${null==e?void 0:e.id}`)})),this.on("upload-progress",this.calculateProgress),this.on("upload-success",((e,t)=>{if(null==e||!this.getFile(e.id))return void this.log(`Not setting progress for a file that has been removed: ${null==e?void 0:e.id}`)
const r=this.getFile(e.id).progress
this.setFileState(e.id,{progress:{...r,postprocess:j(this,D)[D].size>0?{mode:"indeterminate"}:null,uploadComplete:!0,percentage:100,bytesUploaded:r.bytesTotal},response:t,uploadURL:t.uploadURL,isPaused:!1}),null==e.size&&this.setFileState(e.id,{size:t.bytesUploaded||r.bytesTotal}),this.calculateTotalProgress()})),this.on("preprocess-progress",((e,t)=>{null!=e&&this.getFile(e.id)?this.setFileState(e.id,{progress:{...this.getFile(e.id).progress,preprocess:t}}):this.log(`Not setting progress for a file that has been removed: ${null==e?void 0:e.id}`)})),this.on("preprocess-complete",(e=>{if(null==e||!this.getFile(e.id))return void this.log(`Not setting progress for a file that has been removed: ${null==e?void 0:e.id}`)
const t={...this.getState().files}
t[e.id]={...t[e.id],progress:{...t[e.id].progress}},delete t[e.id].progress.preprocess,this.setState({files:t})})),this.on("postprocess-progress",((e,t)=>{null!=e&&this.getFile(e.id)?this.setFileState(e.id,{progress:{...this.getState().files[e.id].progress,postprocess:t}}):this.log(`Not setting progress for a file that has been removed: ${null==e?void 0:e.id}`)})),this.on("postprocess-complete",(e=>{if(null==e||!this.getFile(e.id))return void this.log(`Not setting progress for a file that has been removed: ${null==e?void 0:e.id}`)
const t={...this.getState().files}
t[e.id]={...t[e.id],progress:{...t[e.id].progress}},delete t[e.id].progress.postprocess,this.setState({files:t})})),this.on("restored",(()=>{this.calculateTotalProgress()})),this.on("dashboard:file-edit-complete",(e=>{e&&j(this,H)[H](e)})),"undefined"!=typeof window&&window.addEventListener&&(window.addEventListener("online",j(this,K)[K]),window.addEventListener("offline",j(this,K)[K]),setTimeout(j(this,K)[K],3e3))}function ae(e,t){void 0===t&&(t={})
const{forceAllowNewUpload:r=!1}=t,{allowNewUpload:n,currentUploads:i}=this.getState()
if(!n&&!r)throw new Error("Cannot create a new upload: already uploading.")
const s=(0,o.x)()
return this.emit("upload",{id:s,fileIDs:e}),this.setState({allowNewUpload:!1!==this.opts.allowMultipleUploadBatches&&!1!==this.opts.allowMultipleUploads,currentUploads:{...i,[s]:{fileIDs:e,step:0,result:{}}}}),s}function le(e){const{currentUploads:t}=this.getState()
return t[e]}function ue(e){const t={...this.getState().currentUploads}
delete t[e],this.setState({currentUploads:t})}async function ce(e){let{currentUploads:t}=this.getState(),r=t[e]
const n=r.step||0,i=[...j(this,$)[$],...j(this,U)[U],...j(this,D)[D]]
try{for(let o=n;o<i.length&&r;o++){const n=i[o],s={...r,step:o}
this.setState({currentUploads:{...t,[e]:s}}),await n(s.fileIDs,e),t=this.getState().currentUploads,r=t[e]}}catch(t){throw j(this,G)[G](e),t}if(r){r.fileIDs.forEach((e=>{const t=this.getFile(e)
t&&t.progress.postprocess&&this.emit("postprocess-complete",t)}))
const n=r.fileIDs.map((e=>this.getFile(e))),i=n.filter((e=>!e.error)),o=n.filter((e=>e.error))
await this.addResultData(e,{successful:i,failed:o,uploadID:e}),t=this.getState().currentUploads,r=t[e]}let o
return r&&(o=r.result,this.emit("complete",o),j(this,G)[G](e)),null==o&&this.log(`Not setting result for an upload that has been removed: ${e}`),o}Q.VERSION="3.0.4"
const pe=Q
var de,he,fe,me,ge,ve,ye,be={},we=[],ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,xe=Array.isArray
function _e(e,t){for(var r in t)e[r]=t[r]
return e}function Se(e){var t=e.parentNode
t&&t.removeChild(e)}function Pe(e,t,r,n,i){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++fe:i}
return null==i&&null!=he.vnode&&he.vnode(o),o}function Oe(e){return e.children}function Ee(e,t){this.props=e,this.context=t}function Ae(e,t){if(null==t)return e.__?Ae(e.__,e.__.__k.indexOf(e)+1):null
for(var r;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e)return r.__e
return"function"==typeof e.type?Ae(e):null}function Ce(e){var t,r
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(r=e.__k[t])&&null!=r.__e){e.__e=e.__c.base=r.__e
break}return Ce(e)}}function Te(e){(!e.__d&&(e.__d=!0)&&me.push(e)&&!je.__r++||ge!==he.debounceRendering)&&((ge=he.debounceRendering)||ve)(je)}function je(){var e,t,r,n,i,o,s,a
for(me.sort(ye);e=me.shift();)e.__d&&(t=me.length,n=void 0,i=void 0,s=(o=(r=e).__v).__e,(a=r.__P)&&(n=[],(i=_e({},o)).__v=o.__v+1,De(a,o,i,r.__n,void 0!==a.ownerSVGElement,null!=o.__h?[s]:null,n,null==s?Ae(o):s,o.__h),Ze(n,o),o.__e!=s&&Ce(o)),me.length>t&&me.sort(ye))
je.__r=0}function Ie(e,t,r,n,i,o,s,a,l,u){var c,p,d,h,f,m,g,v=n&&n.__k||we,y=v.length
for(r.__k=[],c=0;c<t.length;c++)if(null!=(h=r.__k[c]=null==(h=t[c])||"boolean"==typeof h||"function"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?Pe(null,h,null,null,h):xe(h)?Pe(Oe,{children:h},null,null,null):h.__b>0?Pe(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h)){if(h.__=r,h.__b=r.__b+1,null===(d=v[c])||d&&h.key==d.key&&h.type===d.type)v[c]=void 0
else for(p=0;p<y;p++){if((d=v[p])&&h.key==d.key&&h.type===d.type){v[p]=void 0
break}d=null}De(e,h,d=d||be,i,o,s,a,l,u),f=h.__e,(p=h.ref)&&d.ref!=p&&(g||(g=[]),d.ref&&g.push(d.ref,null,h),g.push(p,h.__c||f,h)),null!=f?(null==m&&(m=f),"function"==typeof h.type&&h.__k===d.__k?h.__d=l=Le(h,l,e):l=Fe(e,h,d,v,f,l),"function"==typeof r.type&&(r.__d=l)):l&&d.__e==l&&l.parentNode!=e&&(l=Ae(d))}for(r.__e=m,c=y;c--;)null!=v[c]&&("function"==typeof r.type&&null!=v[c].__e&&v[c].__e==r.__d&&(r.__d=Me(n).nextSibling),Be(v[c],v[c]))
if(g)for(c=0;c<g.length;c++)He(g[c],g[++c],g[++c])}function Le(e,t,r){for(var n,i=e.__k,o=0;i&&o<i.length;o++)(n=i[o])&&(n.__=e,t="function"==typeof n.type?Le(n,t,r):Fe(r,n,n,i,n.__e,t))
return t}function Fe(e,t,r,n,i,o){var s,a,l
if(void 0!==t.__d)s=t.__d,t.__d=void 0
else if(null==r||i!=o||null==i.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(i),s=null
else{for(a=o,l=0;(a=a.nextSibling)&&l<n.length;l+=1)if(a==i)break e
e.insertBefore(i,o),s=o}return void 0!==s?s:i.nextSibling}function Me(e){var t,r,n
if(null==e.type||"string"==typeof e.type)return e.__e
if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((r=e.__k[t])&&(n=Me(r)))return n
return null}function Ne(e,t,r){"-"===t[0]?e.setProperty(t,null==r?"":r):e[t]=null==r?"":"number"!=typeof r||ke.test(t)?r:r+"px"}function Re(e,t,r,n,i){var o
e:if("style"===t)if("string"==typeof r)e.style.cssText=r
else{if("string"==typeof n&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Ne(e.style,t,"")
if(r)for(t in r)n&&r[t]===n[t]||Ne(e.style,t,r[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n||e.addEventListener(t,o?Ue:$e,o):e.removeEventListener(t,o?Ue:$e,o)
else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==r?"":r
break e}catch(e){}"function"==typeof r||(null==r||!1===r&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,r))}}function $e(e){return this.l[e.type+!1](he.event?he.event(e):e)}function Ue(e){return this.l[e.type+!0](he.event?he.event(e):e)}function De(e,t,r,n,i,o,s,a,l){var u,c,p,d,h,f,m,g,v,y,b,w,k,x,_,S=t.type
if(void 0!==t.constructor)return null
null!=r.__h&&(l=r.__h,a=t.__e=r.__e,t.__h=null,o=[a]),(u=he.__b)&&u(t)
try{e:if("function"==typeof S){if(g=t.props,v=(u=S.contextType)&&n[u.__c],y=u?v?v.props.value:u.__:n,r.__c?m=(c=t.__c=r.__c).__=c.__E:("prototype"in S&&S.prototype.render?t.__c=c=new S(g,y):(t.__c=c=new Ee(g,y),c.constructor=S,c.render=Ve),v&&v.sub(c),c.props=g,c.state||(c.state={}),c.context=y,c.__n=n,p=c.__d=!0,c.__h=[],c._sb=[]),null==c.__s&&(c.__s=c.state),null!=S.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=_e({},c.__s)),_e(c.__s,S.getDerivedStateFromProps(g,c.__s))),d=c.props,h=c.state,c.__v=t,p)null==S.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount)
else{if(null==S.getDerivedStateFromProps&&g!==d&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(g,y),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(g,c.__s,y)||t.__v===r.__v){for(t.__v!==r.__v&&(c.props=g,c.state=c.__s,c.__d=!1),c.__e=!1,t.__e=r.__e,t.__k=r.__k,t.__k.forEach((function(e){e&&(e.__=t)})),b=0;b<c._sb.length;b++)c.__h.push(c._sb[b])
c._sb=[],c.__h.length&&s.push(c)
break e}null!=c.componentWillUpdate&&c.componentWillUpdate(g,c.__s,y),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(d,h,f)}))}if(c.context=y,c.props=g,c.__P=e,w=he.__r,k=0,"prototype"in S&&S.prototype.render){for(c.state=c.__s,c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context),x=0;x<c._sb.length;x++)c.__h.push(c._sb[x])
c._sb=[]}else do{c.__d=!1,w&&w(t),u=c.render(c.props,c.state,c.context),c.state=c.__s}while(c.__d&&++k<25)
c.state=c.__s,null!=c.getChildContext&&(n=_e(_e({},n),c.getChildContext())),p||null==c.getSnapshotBeforeUpdate||(f=c.getSnapshotBeforeUpdate(d,h)),Ie(e,xe(_=null!=u&&u.type===Oe&&null==u.key?u.props.children:u)?_:[_],t,r,n,i,o,s,a,l),c.base=t.__e,t.__h=null,c.__h.length&&s.push(c),m&&(c.__E=c.__=null),c.__e=!1}else null==o&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=function(e,t,r,n,i,o,s,a){var l,u,c,p=r.props,d=t.props,h=t.type,f=0
if("svg"===h&&(i=!0),null!=o)for(;f<o.length;f++)if((l=o[f])&&"setAttribute"in l==!!h&&(h?l.localName===h:3===l.nodeType)){e=l,o[f]=null
break}if(null==e){if(null===h)return document.createTextNode(d)
e=i?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),o=null,a=!1}if(null===h)p===d||a&&e.data===d||(e.data=d)
else{if(o=o&&de.call(e.childNodes),u=(p=r.props||be).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!a){if(null!=o)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(function(e,t,r,n,i){var o
for(o in r)"children"===o||"key"===o||o in t||Re(e,o,null,r[o],n)
for(o in t)i&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||r[o]===t[o]||Re(e,o,t[o],r[o],n)}(e,d,p,i,a),c)t.__k=[]
else if(Ie(e,xe(f=t.props.children)?f:[f],t,r,n,i&&"foreignObject"!==h,o,s,o?o[0]:r.__k&&Ae(r,0),a),null!=o)for(f=o.length;f--;)null!=o[f]&&Se(o[f])
a||("value"in d&&void 0!==(f=d.value)&&(f!==e.value||"progress"===h&&!f||"option"===h&&f!==p.value)&&Re(e,"value",f,p.value,!1),"checked"in d&&void 0!==(f=d.checked)&&f!==e.checked&&Re(e,"checked",f,p.checked,!1))}return e}(r.__e,t,r,n,i,o,s,l);(u=he.diffed)&&u(t)}catch(e){t.__v=null,(l||null!=o)&&(t.__e=a,t.__h=!!l,o[o.indexOf(a)]=null),he.__e(e,t,r)}}function Ze(e,t){he.__c&&he.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){he.__e(e,t.__v)}}))}function He(e,t,r){try{"function"==typeof e?e(t):e.current=t}catch(e){he.__e(e,r)}}function Be(e,t,r){var n,i
if(he.unmount&&he.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||He(n,null,t)),null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){he.__e(e,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&Be(n[i],t,r||"function"!=typeof e.type)
r||null==e.__e||Se(e.__e),e.__=e.__e=e.__d=void 0}function Ve(e,t,r){return this.constructor(e,r)}function qe(e,t,r){var n,i,o
he.__&&he.__(e,t),i=(n="function"==typeof r)?null:r&&r.__k||t.__k,o=[],De(t,e=(!n&&r||t).__k=function(e,t,r){var n,i,o,s={}
for(o in t)"key"==o?n=t[o]:"ref"==o?i=t[o]:s[o]=t[o]
if(arguments.length>2&&(s.children=arguments.length>3?de.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===s[o]&&(s[o]=e.defaultProps[o])
return Pe(e,s,n,i,null)}(Oe,null,[e]),i||be,be,void 0!==t.ownerSVGElement,!n&&r?[r]:i?null:t.firstChild?de.call(t.childNodes):null,o,!n&&r?r:i?i.__e:t.firstChild,n),Ze(o,e)}de=we.slice,he={__e:function(e,t,r,n){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,n||{}),s=i.__d),s)return i.__E=i}catch(t){e=t}throw e}},fe=0,Ee.prototype.setState=function(e,t){var r
r=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_e({},this.state),"function"==typeof e&&(e=e(_e({},r),this.props)),e&&_e(r,e),null!=e&&this.__v&&(t&&this._sb.push(t),Te(this))},Ee.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Te(this))},Ee.prototype.render=Oe,me=[],ve="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ye=function(e,t){return e.__v.__b-t.__v.__b},je.__r=0
var ze=r(17)
function We(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var Ke=0
var Ye=function(e){return"__private_"+Ke+++"_"+e}("updateUI")
class Xe extends ze.Z{constructor(){super(...arguments),Object.defineProperty(this,Ye,{writable:!0,value:void 0})}getTargetPlugin(e){let t
if("object"==typeof e&&e instanceof Xe)t=e
else if("function"==typeof e){const r=e
this.uppy.iteratePlugins((e=>{e instanceof r&&(t=e)}))}return t}mount(e,t){const r=t.id,n=(i=e,void 0===o&&(o=document),"string"==typeof i?o.querySelector(i):(null==(s=i)?void 0:s.nodeType)===Node.ELEMENT_NODE?i:null)
var i,o,s
if(n){this.isTargetDOMEl=!0
const t=document.createElement("div")
return t.classList.add("uppy-Root"),We(this,Ye)[Ye]=function(e){let t=null,r=null
return function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o]
return r=i,t||(t=Promise.resolve().then((()=>(t=null,e(...r))))),t}}((e=>{this.uppy.getPlugin(this.id)&&(qe(this.render(e),t),this.afterUpdate())})),this.uppy.log(`Installing ${r} to a DOM element '${e}'`),this.opts.replaceTargetContent&&(n.innerHTML=""),qe(this.render(this.uppy.getState()),t),this.el=t,n.appendChild(t),t.dir=this.opts.direction||function(e){for(var t;e&&!e.dir;)e=e.parentNode
return null==(t=e)?void 0:t.dir}(t)||"ltr",this.onMount(),this.el}const a=this.getTargetPlugin(e)
if(a)return this.uppy.log(`Installing ${r} to ${a.id}`),this.parent=a,this.el=a.addTarget(t),this.onMount(),this.el
this.uppy.log(`Not installing ${r}`)
let l=`Invalid target option given to ${r}.`
throw l+="function"==typeof e?" The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.":"If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.",new Error(l)}update(e){var t,r
null!=this.el&&(null==(t=(r=We(this,Ye))[Ye])||t.call(r,e))}unmount(){var e
this.isTargetDOMEl&&(null==(e=this.el)||e.remove()),this.onUnmount()}onMount(){}onUnmount(){}}const Ge=Xe},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>u})
var n=r(17)
function i(e,t,r,n){let{onSuccess:o}=n
e.readEntries((n=>{const s=[...t,...n]
n.length?queueMicrotask((()=>{i(e,s,r,{onSuccess:o})})):o(s)}),(e=>{r(e),o(t)}))}function o(e,t){return null==e?e:{kind:e.isFile?"file":e.isDirectory?"directory":void 0,name:e.name,getFile:()=>new Promise(((t,r)=>e.file(t,r))),async*values(){const r=e.createReader(),n=await new Promise((e=>{i(r,[],t,{onSuccess:r=>e(r.map((e=>o(e,t))))})}))
yield*n}}}function s(e,t,r){try{return void 0===r&&(r=void 0),async function*(){if("file"===e.kind){const n=await e.getFile()
null!=n?(n.relativePath=t?`${t}/${e.name}`:null,yield n):null!=r&&(yield r)}else if("directory"===e.kind)for await(const r of e.values())yield*s(r,`${t}/${e.name}`)
else null!=r&&(yield r)}()}catch(e){return Promise.reject(e)}}const a=Array.from
function l(e){var t,r
return null!=(t=null==(r=e.dataTransfer.types)?void 0:r.some((e=>"Files"===e)))&&t}class u extends n.Z{constructor(e,t){super(e,t),this.addFiles=e=>{const t=e.map((e=>({source:this.id,name:e.name,type:e.type,data:e,meta:{relativePath:e.relativePath||null}})))
try{this.uppy.addFiles(t)}catch(e){this.uppy.log(e)}},this.handleDrop=async e=>{var t,r
if(!l(e))return
e.preventDefault(),e.stopPropagation(),clearTimeout(this.removeDragOverClassTimeout),e.currentTarget.classList.remove("uppy-is-drag-over"),this.setPluginState({isDraggingOver:!1}),this.uppy.iteratePlugins((t=>{"acquirer"===t.type&&(null==t.handleRootDrop||t.handleRootDrop(e))}))
let n=!1
const i=await async function(e,t){let{logDropError:r=(()=>{})}=void 0===t?{}:t
try{const t=[]
for await(const n of async function*(e,t){const r=await Promise.all(Array.from(e.items,(async e=>{let r
return null!=r||(r=o("function"==typeof e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry(),t)),{fileSystemHandle:r,lastResortFile:e.getAsFile()}})))
for(const{lastResortFile:n,fileSystemHandle:i}of r)if(null!=i)try{yield*s(i,"",n)}catch(r){null!=n?yield n:t(r)}else null!=n&&(yield n)}(e,r))t.push(n)
return t}catch{return function(e){const t=a(e.files)
return Promise.resolve(t)}(e)}}(e.dataTransfer,{logDropError:e=>{this.uppy.log(e,"error"),n||(this.uppy.info(e.message,"error"),n=!0)}})
i.length>0&&(this.uppy.log("[DropTarget] Files were dropped"),this.addFiles(i)),null==(t=(r=this.opts).onDrop)||t.call(r,e)},this.handleDragOver=e=>{var t,r
l(e)&&(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",clearTimeout(this.removeDragOverClassTimeout),e.currentTarget.classList.add("uppy-is-drag-over"),this.setPluginState({isDraggingOver:!0}),null==(t=(r=this.opts).onDragOver)||t.call(r,e))},this.handleDragLeave=e=>{var t,r
if(!l(e))return
e.preventDefault(),e.stopPropagation()
const{currentTarget:n}=e
clearTimeout(this.removeDragOverClassTimeout),this.removeDragOverClassTimeout=setTimeout((()=>{n.classList.remove("uppy-is-drag-over"),this.setPluginState({isDraggingOver:!1})}),50),null==(t=(r=this.opts).onDragLeave)||t.call(r,e)},this.addListeners=()=>{const{target:e}=this.opts
if(e instanceof Element?this.nodes=[e]:"string"==typeof e&&(this.nodes=a(document.querySelectorAll(e))),!this.nodes&&!this.nodes.length>0)throw new Error(`"${e}" does not match any HTML elements`)
this.nodes.forEach((e=>{e.addEventListener("dragover",this.handleDragOver,!1),e.addEventListener("dragleave",this.handleDragLeave,!1),e.addEventListener("drop",this.handleDrop,!1)}))},this.removeListeners=()=>{this.nodes&&this.nodes.forEach((e=>{e.removeEventListener("dragover",this.handleDragOver,!1),e.removeEventListener("dragleave",this.handleDragLeave,!1),e.removeEventListener("drop",this.handleDrop,!1)}))},this.type="acquirer",this.id=this.opts.id||"DropTarget",this.title="Drop Target",this.opts={target:null,...t},this.removeDragOverClassTimeout=null}install(){this.setPluginState({isDraggingOver:!1}),this.addListeners()}uninstall(){this.removeListeners()}}u.VERSION="2.0.1"},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>i})
var n=r(68)
function i(e,t){return new Promise(((r,i)=>{var o,s
if(null!=t&&null!=(o=t.signal)&&o.aborted)return i((0,n.createAbortError)())
const a=setTimeout((()=>{u(),r()}),e)
function l(){clearTimeout(a),u(),i((0,n.createAbortError)())}function u(){var e
null==t||null==(e=t.signal)||e.removeEventListener("abort",l)}null==t||null==(s=t.signal)||s.addEventListener("abort",l)}))}},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>k})
var n=r(17),i=r(74),o=r(31),s=r(38),a=r(73),l=r(25),u=r(158),c=r(30),p=r(71),d=r(157)
const h={strings:{uploadStalled:"Upload has not made any progress for %{seconds} seconds. You may want to retry it."}}
function f(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance")
return e}var m=0
function g(e){return"__private_"+m+++"_"+e}function v(e,t){let r=t
return r||(r=new Error("Upload error")),"string"==typeof r&&(r=new Error(r)),r instanceof Error||(r=Object.assign(new Error("Upload error"),{data:r})),(0,d.Z)(e)?(r=new p.Z(r,e),r):(r.request=e,r)}function y(e){return e.data.slice(0,e.data.size,e.meta.type)}var b=g("queueRequestSocketToken"),w=g("requestSocketToken")
class k extends n.Z{constructor(e,t){super(e,t),Object.defineProperty(this,b,{writable:!0,value:void 0}),Object.defineProperty(this,w,{writable:!0,value:async e=>{const t=this.getOptions(e),r=new(e.remote.providerOptions.provider?o.zt:o.C$)(this.uppy,e.remote.providerOptions),n=Array.isArray(t.allowedMetaFields)?t.allowedMetaFields:Object.keys(e.meta)
return(await r.post(e.remote.url,{...e.remote.body,protocol:"multipart",endpoint:t.endpoint,size:e.data.size,fieldname:t.fieldName,metadata:Object.fromEntries(n.map((t=>[t,e.meta[t]]))),httpMethod:t.method,useFormData:t.formData,headers:t.headers})).token}}),this.type="uploader",this.id=this.opts.id||"XHRUpload",this.title="XHRUpload",this.defaultLocale=h
const r={formData:!0,fieldName:t.bundle?"files[]":"file",method:"post",allowedMetaFields:null,responseUrlFieldName:"url",bundle:!1,headers:{},timeout:3e4,limit:5,withCredentials:!1,responseType:"",getResponseData(t){let r={}
try{r=JSON.parse(t)}catch(t){e.log(t)}return r},getResponseError(e,t){let r=new Error("Upload error")
return(0,d.Z)(t)&&(r=new p.Z(r,t)),r},validateStatus:e=>e>=200&&e<300}
if(this.opts={...r,...t},this.i18nInit(),this.handleUpload=this.handleUpload.bind(this),c.B in this.opts?this.requests=this.opts[c.B]:this.requests=new c.s(this.opts.limit),this.opts.bundle&&!this.opts.formData)throw new Error("`opts.formData` must be true when `opts.bundle` is enabled.")
if(void 0===(null==t?void 0:t.allowedMetaFields)&&"metaFields"in this.opts)throw new Error("The `metaFields` option has been renamed to `allowedMetaFields`.")
this.uploaderEvents=Object.create(null),f(this,b)[b]=this.requests.wrapPromiseFunction(f(this,w)[w],{priority:-1})}getOptions(e){const t=this.uppy.getState().xhrUpload,{headers:r}=this.opts,n={...this.opts,...t||{},...e.xhrUpload||{},headers:{}}
return"function"==typeof r?n.headers=r(e):Object.assign(n.headers,this.opts.headers),t&&Object.assign(n.headers,t.headers),e.xhrUpload&&Object.assign(n.headers,e.xhrUpload.headers),n}addMetadata(e,t,r){(Array.isArray(r.allowedMetaFields)?r.allowedMetaFields:Object.keys(t)).forEach((r=>{e.append(r,t[r])}))}createFormDataUpload(e,t){const r=new FormData
this.addMetadata(r,e.meta,t)
const n=y(e)
return e.name?r.append(t.fieldName,n,e.meta.name):r.append(t.fieldName,n),r}createBundledUpload(e,t){const r=new FormData,{meta:n}=this.uppy.getState()
return this.addMetadata(r,n,t),e.forEach((e=>{const t=this.getOptions(e),n=y(e)
e.name?r.append(t.fieldName,n,e.name):r.append(t.fieldName,n)})),r}upload(e,t,r){const n=this.getOptions(e)
return this.uppy.log(`uploading ${t} of ${r}`),new Promise(((t,r)=>{this.uppy.emit("upload-started",e)
const o=n.formData?this.createFormDataUpload(e,n):e.data,s=new XMLHttpRequest
let a
this.uploaderEvents[e.id]=new l.default(this.uppy)
const c=new u.Z(n.timeout,(()=>{const t=new Error(this.i18n("uploadStalled",{seconds:Math.ceil(n.timeout/1e3)}))
this.uppy.emit("upload-stalled",t,[e])})),p=(0,i.x)()
s.upload.addEventListener("loadstart",(()=>{this.uppy.log(`[XHRUpload] ${p} started`)})),s.upload.addEventListener("progress",(t=>{this.uppy.log(`[XHRUpload] ${p} progress: ${t.loaded} / ${t.total}`),c.progress(),t.lengthComputable&&this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t.loaded,bytesTotal:t.total})})),s.addEventListener("load",(()=>{if(this.uppy.log(`[XHRUpload] ${p} finished`),c.done(),a.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),n.validateStatus(s.status,s.responseText,s)){const r=n.getResponseData(s.responseText,s),i=r[n.responseUrlFieldName],o={status:s.status,body:r,uploadURL:i}
return this.uppy.emit("upload-success",e,o),i&&this.uppy.log(`Download ${e.name} from ${i}`),t(e)}const i=n.getResponseData(s.responseText,s),o=v(s,n.getResponseError(s.responseText,s)),l={status:s.status,body:i}
return this.uppy.emit("upload-error",e,o,l),r(o)})),s.addEventListener("error",(()=>{this.uppy.log(`[XHRUpload] ${p} errored`),c.done(),a.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null)
const t=v(s,n.getResponseError(s.responseText,s))
return this.uppy.emit("upload-error",e,t),r(t)})),s.open(n.method.toUpperCase(),n.endpoint,!0),s.withCredentials=n.withCredentials,""!==n.responseType&&(s.responseType=n.responseType),a=this.requests.run((()=>{this.uppy.emit("upload-started",e)
const t=this.getOptions(e)
return Object.keys(t.headers).forEach((e=>{s.setRequestHeader(e,t.headers[e])})),s.send(o),()=>{c.done(),s.abort()}})),this.onFileRemove(e.id,(()=>{a.abort(),r(new Error("File removed"))})),this.onCancelAll(e.id,(e=>{let{reason:t}=e
"user"===t&&a.abort(),r(new Error("Upload cancelled"))}))}))}async uploadRemote(e){try{if(this.uppy.emit("upload-started",e),e.serverToken)return await this.connectToServerSocket(e)
const t=await f(this,b)[b](e)
if(!this.uppy.getState().files[e.id])return
return this.uppy.setFileState(e.id,{serverToken:t}),await this.connectToServerSocket(this.uppy.getFile(e.id))}catch(t){throw this.uppy.setFileState(e.id,{serverToken:void 0}),this.uppy.emit("upload-error",e,t),t}}async connectToServerSocket(e){return new Promise(((t,r)=>{const n=this.getOptions(e),i=e.serverToken,u=(0,a.Z)(e.remote.companionUrl)
let c
const p=()=>{null==c&&(c=new o.sk({target:`${u}/api/${i}`}),c.on("progress",(t=>(0,s.Z)(this,t,e))),c.on("success",(r=>{const i=n.getResponseData(r.response.responseText,r.response),o=i[n.responseUrlFieldName],s={status:r.response.status,body:i,uploadURL:o}
return this.uppy.emit("upload-success",e,s),d.done(),c.close(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),t()})),c.on("error",(t=>{const i=t.response,o=i?n.getResponseError(i.responseText,i):Object.assign(new Error(t.error.message),{cause:t.error})
this.uppy.emit("upload-error",e,o),d.done(),this.uploaderEvents[e.id]&&(this.uploaderEvents[e.id].remove(),this.uploaderEvents[e.id]=null),r(o)})))}
this.uploaderEvents[e.id]=new l.default(this.uppy)
let d=this.requests.run((()=>{var t
return e.isPaused?null==(t=c)||t.send("pause",{}):p(),()=>c.close()}))
this.onFileRemove(e.id,(()=>{var r
null==(r=c)||r.send("cancel",{}),d.abort(),t(`upload ${e.id} was removed`)})),this.onCancelAll(e.id,(function(r){let{reason:n}=void 0===r?{}:r
var i
"user"===n&&(null==(i=c)||i.send("cancel",{}),d.abort()),t(`upload ${e.id} was canceled`)}))
const h=()=>{null==c?d.abort():(c.send("pause",{}),d.done()),d=this.requests.run((()=>(e.isPaused||(null==c?p():c.send("resume",{})),()=>c.close())))}
this.onRetry(e.id,h),this.onRetryAll(e.id,h)})).catch((t=>(this.uppy.emit("upload-error",e,t),Promise.reject(t))))}uploadBundle(e){return new Promise(((t,r)=>{const{endpoint:n}=this.opts,{method:i}=this.opts,o=this.uppy.getState().xhrUpload,s=this.createBundledUpload(e,{...this.opts,...o||{}}),a=new XMLHttpRequest,l=t=>{e.forEach((e=>{this.uppy.emit("upload-error",e,t)}))},c=new u.Z(this.opts.timeout,(()=>{const t=new Error(this.i18n("uploadStalled",{seconds:Math.ceil(this.opts.timeout/1e3)}))
this.uppy.emit("upload-stalled",t,e)}))
a.upload.addEventListener("loadstart",(()=>{this.uppy.log("[XHRUpload] started uploading bundle"),c.progress()})),a.upload.addEventListener("progress",(t=>{c.progress(),t.lengthComputable&&e.forEach((e=>{this.uppy.emit("upload-progress",e,{uploader:this,bytesUploaded:t.loaded/t.total*e.size,bytesTotal:e.size})}))})),a.addEventListener("load",(n=>{if(c.done(),this.opts.validateStatus(n.target.status,a.responseText,a)){const r=this.opts.getResponseData(a.responseText,a),i={status:n.target.status,body:r}
return e.forEach((e=>{this.uppy.emit("upload-success",e,i)})),t()}const i=this.opts.getResponseError(a.responseText,a)||new Error("Upload error")
return i.request=a,l(i),r(i)})),a.addEventListener("error",(()=>{c.done()
const e=this.opts.getResponseError(a.responseText,a)||new Error("Upload error")
return l(e),r(e)})),this.uppy.on("cancel-all",(function(e){let{reason:t}=void 0===e?{}:e
"user"===t&&(c.done(),a.abort())})),a.open(i.toUpperCase(),n,!0),a.withCredentials=this.opts.withCredentials,""!==this.opts.responseType&&(a.responseType=this.opts.responseType),Object.keys(this.opts.headers).forEach((e=>{a.setRequestHeader(e,this.opts.headers[e])})),a.send(s),e.forEach((e=>{this.uppy.emit("upload-started",e)}))}))}uploadFiles(e){return function(e){const t=[],r=[]
function n(e){t.push(e)}function i(e){r.push(e)}return Promise.all(e.map((e=>e.then(n,i)))).then((()=>({successful:t,failed:r})))}(e.map(((t,r)=>{const n=parseInt(r,10)+1,i=e.length
return t.error?Promise.reject(new Error(t.error)):t.isRemote?this.uploadRemote(t,n,i):this.upload(t,n,i)})))}onFileRemove(e,t){this.uploaderEvents[e].on("file-removed",(r=>{e===r.id&&t(r.id)}))}onRetry(e,t){this.uploaderEvents[e].on("upload-retry",(r=>{e===r&&t()}))}onRetryAll(e,t){this.uploaderEvents[e].on("retry-all",(()=>{this.uppy.getFile(e)&&t()}))}onCancelAll(e,t){var r=this
this.uploaderEvents[e].on("cancel-all",(function(){r.uppy.getFile(e)&&t(...arguments)}))}handleUpload(e){if(0===e.length)return this.uppy.log("[XHRUpload] No files to upload!"),Promise.resolve()
0!==this.opts.limit||this.opts[c.B]||this.uppy.log("[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0","warning"),this.uppy.log("[XHRUpload] Uploading...")
const t=e.map((e=>this.uppy.getFile(e)))
if(this.opts.bundle){if(t.some((e=>e.isRemote)))throw new Error("Can’t upload remote files when the `bundle: true` option is set")
if("function"==typeof this.opts.headers)throw new TypeError("`headers` may not be a function when the `bundle: true` option is set")
return this.uploadBundle(t)}return this.uploadFiles(t).then((()=>null))}install(){if(this.opts.bundle){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,individualCancellation:!1}})}this.uppy.addUploader(this.handleUpload)}uninstall(){if(this.opts.bundle){const{capabilities:e}=this.uppy.getState()
this.uppy.setState({capabilities:{...e,individualCancellation:!0}})}this.uppy.removeUploader(this.handleUpload)}}k.VERSION="3.1.1"},(e,t,r)=>{"use strict"
function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:()=>f})
const i=":not([inert]):not([inert] *)",o=':not([tabindex^="-"])',s=":not(:disabled)"
var a=[`a[href]${i}${o}`,`area[href]${i}${o}`,`input:not([type="hidden"]):not([type="radio"])${i}${o}${s}`,`input[type="radio"]${i}${o}${s}`,`select${i}${o}${s}`,`textarea${i}${o}${s}`,`button${i}${o}${s}`,`details${i} > summary:first-of-type${o}`,`iframe${i}${o}`,`audio[controls]${i}${o}`,`video[controls]${i}${o}`,`[contenteditable]${i}${o}`,`[tabindex]${i}${o}`]
function l(e){(e.querySelector("[autofocus]")||e).focus()}function u(e,t){if(t&&d(e))return e
if(!((r=e).shadowRoot&&"-1"===r.getAttribute("tabindex")||r.matches(":disabled,[hidden],[inert]")))if(e.shadowRoot){let r=c(e.shadowRoot,t)
for(;r;){const e=u(r,t)
if(e)return e
r=p(r,t)}}else if("slot"===e.localName){const r=e.assignedElements({flatten:!0})
t||r.reverse()
for(const e of r){const r=u(e,t)
if(r)return r}}else{let r=c(e,t)
for(;r;){const e=u(r,t)
if(e)return e
r=p(r,t)}}var r
return!t&&d(e)?e:null}function c(e,t){return t?e.firstElementChild:e.lastElementChild}function p(e,t){return t?e.nextElementSibling:e.previousElementSibling}const d=e=>!e.shadowRoot?.delegatesFocus&&e.matches(a.join(","))&&!(e=>!(!e.matches("details:not([open]) *")||e.matches("details>summary:first-of-type"))||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))(e)
function h(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).activeElement
return e?e.shadowRoot?h(e.shadowRoot)||document.activeElement:e:null}class f{constructor(e){n(this,"$el",void 0),n(this,"id",void 0),n(this,"previouslyFocused",void 0),n(this,"shown",void 0),this.$el=e,this.id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this.previouslyFocused=null,this.shown=!1,this.maintainFocus=this.maintainFocus.bind(this),this.bindKeypress=this.bindKeypress.bind(this),this.handleTriggerClicks=this.handleTriggerClicks.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.$el.setAttribute("aria-hidden","true"),this.$el.setAttribute("aria-modal","true"),this.$el.setAttribute("tabindex","-1"),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),document.addEventListener("click",this.handleTriggerClicks,!0)}destroy(){return this.hide(),document.removeEventListener("click",this.handleTriggerClicks,!0),this.$el.replaceWith(this.$el.cloneNode(!0)),this.fire("destroy"),this}show(e){return this.shown||(this.shown=!0,this.$el.removeAttribute("aria-hidden"),this.previouslyFocused=h(),"BODY"===this.previouslyFocused?.tagName&&e?.target&&(this.previouslyFocused=e.target),l(this.$el),document.body.addEventListener("focus",this.maintainFocus,!0),this.$el.addEventListener("keydown",this.bindKeypress,!0),this.fire("show",e)),this}hide(e){return this.shown?(this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this.previouslyFocused?.focus?.(),document.body.removeEventListener("focus",this.maintainFocus,!0),this.$el.removeEventListener("keydown",this.bindKeypress,!0),this.fire("hide",e),this):this}on(e,t,r){return this.$el.addEventListener(e,t,r),this}off(e,t,r){return this.$el.removeEventListener(e,t,r),this}fire(e,t){this.$el.dispatchEvent(new CustomEvent(e,{detail:t,cancelable:!0}))}handleTriggerClicks(e){const t=e.target
t.closest(`[data-a11y-dialog-show="${this.id}"]`)&&this.show(e),(t.closest(`[data-a11y-dialog-hide="${this.id}"]`)||t.closest("[data-a11y-dialog-hide]")&&t.closest('[aria-modal="true"]')===this.$el)&&this.hide(e)}bindKeypress(e){document.activeElement?.closest('[aria-modal="true"]')===this.$el&&("Escape"===e.key&&"alertdialog"!==this.$el.getAttribute("role")&&(e.preventDefault(),this.hide(e)),"Tab"===e.key&&function(e,t){const[r,n]=function(e){const t=u(e,!0)
return[t,t?u(e,!1)||t:null]}(e)
if(!r)return t.preventDefault()
const i=h()
t.shiftKey&&i===r?(n.focus(),t.preventDefault()):t.shiftKey||i!==n||(r.focus(),t.preventDefault())}(this.$el,e))}maintainFocus(e){e.target.closest('[aria-modal="true"], [data-a11y-dialog-ignore-focus-trap]')||l(this.$el)}}function m(){for(const e of document.querySelectorAll("[data-a11y-dialog]"))new f(e)}"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",m):m())},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>l,modifier:()=>c})
var n=r(174),i=r(175),o=r(176)
function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a{constructor(e){this.owner=e,s(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e,t){return{instance:new e(this.owner,t),element:null}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t)
n.instance.modify(t,r.positional,r.named)}updateModifier(e,t){e.instance.modify(e.element,t.positional,t.named)}destroyModifier(e){let{instance:t}=e;(0,o.destroy)(t)}}class l{constructor(e,t){(0,n.setOwner)(this,e)}modify(e,t,r){}}(0,i.setModifierManager)((e=>new a(e)),l)
const u=new class{constructor(){s(this,"capabilities",(0,i.capabilities)("3.22"))}createModifier(e){return{element:null,instance:e}}installModifier(e,t,r){const n=function(e,t){const r=e
return r.element=t,r}(e,t),{positional:i,named:o}=r,s=e.instance(t,i,o)
"function"==typeof s&&(n.teardown=s)}updateModifier(e,t){"function"==typeof e.teardown&&e.teardown()
const r=e.instance(e.element,t.positional,t.named)
"function"==typeof r&&(e.teardown=r)}destroyModifier(e){"function"==typeof e.teardown&&e.teardown()}}
function c(e){return(0,i.setModifierManager)((()=>u),e)}},,,,(e,t,r)=>{"use strict"
t.__esModule=!0,t.registerDefaultDecorators=function(e){i.default(e)}
var n,i=(n=r(87))&&n.__esModule?n:{default:n}},(e,t,r)=>{"use strict"
t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r]
return n.extend.apply(void 0,[Object.create(null)].concat(t))}
var n=r(1)},(e,t,r)=>{"use strict"
t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION
if(!(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)){if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],i=s.REVISION_CHANGES[t]
throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+i+").")}throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new o.default("No environment passed to template")
if(!e||!e.main)throw new o.default("Unknown template object: "+typeof e)
e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler)
var r=e.compiler&&7===e.compiler[0],n={strict:function(e,t,r){if(!e||!(t in e))throw new o.default('"'+t+'" not defined in '+e,{loc:r})
return n.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t]
return null==r||Object.prototype.hasOwnProperty.call(e,t)||u.resultIsAllowed(r,n.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,i=0;i<r;i++)if(null!=(e[i]&&n.lookupProperty(e[i],t)))return e[i][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:i.escapeExpression,invokePartial:function(r,n,s){s.hash&&(n=i.extend({},n,s.hash),s.ids&&(s.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,s)
var a=i.extend({},s,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=t.VM.invokePartial.call(this,r,n,a)
if(null==l&&t.compile&&(s.partials[s.name]=t.compile(r,e.compilerOptions,t),l=s.partials[s.name](n,a)),null!=l){if(s.indent){for(var u=l.split("\n"),c=0,p=u.length;c<p&&(u[c]||c+1!==p);c++)u[c]=s.indent+u[c]
l=u.join("\n")}return l}throw new o.default("The partial "+s.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t]
return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,i){var o=this.programs[e],s=this.fn(e)
return t||i||n||r?o=c(this,e,s,t,r,n,i):o||(o=this.programs[e]=c(this,e,s)),o},data:function(e,t){for(;e&&t--;)e=e._parent
return e},mergeIfNeeded:function(e,t){var r=e||t
return e&&t&&e!==t&&(r=i.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler}
function p(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=r.data
p._setup(r),!r.partial&&e.useData&&(i=function(e,t){return t&&"root"in t||((t=t?s.createFrame(t):{}).root=e),t}(t,i))
var o=void 0,a=e.useBlockParams?[]:void 0
function l(t){return""+e.main(n,t,n.helpers,n.partials,i,a,o)}return e.useDepths&&(o=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=d(e.main,l,n,r.depths||[],i,a))(t,r)}return p.isTop=!0,p._setup=function(o){if(o.partial)n.protoAccessControl=o.protoAccessControl,n.helpers=o.helpers,n.partials=o.partials,n.decorators=o.decorators,n.hooks=o.hooks
else{var s=i.extend({},t.helpers,o.helpers)
!function(e,t){Object.keys(e).forEach((function(r){var n=e[r]
e[r]=function(e,t){var r=t.lookupProperty
return l.wrapHelper(e,(function(e){return i.extend({lookupProperty:r},e)}))}(n,t)}))}(s,n),n.helpers=s,e.usePartial&&(n.partials=n.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=i.extend({},t.decorators,o.decorators)),n.hooks={},n.protoAccessControl=u.createProtoAccessControl(o)
var c=o.allowCallsToHelperMissing||r
a.moveHelperToHooks(n,"helperMissing",c),a.moveHelperToHooks(n,"blockHelperMissing",c)}},p._child=function(t,r,i,s){if(e.useBlockParams&&!i)throw new o.default("must pass block params")
if(e.useDepths&&!s)throw new o.default("must pass parent depths")
return c(n,t,e[t],r,0,i,s)},p},t.wrapProgram=c,t.resolvePartial=function(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"]
r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath)
var a=void 0
if(r.fn&&r.fn!==p&&function(){r.data=s.createFrame(r.data)
var e=r.fn
a=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1]
return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=i.extend({},r.partials,e.partials))}(),void 0===e&&a&&(e=a),void 0===e)throw new o.default("The partial "+r.name+" could not be found")
if(e instanceof Function)return e(t,r)},t.noop=p
var n,i=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}(r(1)),o=(n=r(2))&&n.__esModule?n:{default:n},s=r(41),a=r(111),l=r(180),u=r(112)
function c(e,t,r,n,i,o,s){function a(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=s
return!s||t==s[0]||t===e.nullContext&&null===s[0]||(a=[t].concat(s)),r(e,t,e.helpers,e.partials,i.data||n,o&&[i.blockParams].concat(o),a)}return(a=d(r,a,e,s,n,o)).program=t,a.depth=s?s.length:0,a.blockParams=i||0,a}function p(){return""}function d(e,t,r,n,o,s){if(e.decorator){var a={}
t=e.decorator(t,a,r,n&&n[0],o,s,n),i.extend(t,a)}return t}},(e,t)=>{"use strict"
t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.parseWithoutProcessing=u,t.parse=function(e,t){var r=u(e,t)
return new o.default(t).accept(r)}
var i=n(r(89)),o=n(r(90)),s=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}(r(182)),a=r(1)
t.parser=i.default
var l={}
function u(e,t){return"Program"===e.type?e:(i.default.yy=l,l.locInfo=function(e){return new l.SourceLocation(t&&t.srcName,e)},i.default.parse(e))}a.extend(l,s)},(e,t,r)=>{"use strict"
t.__esModule=!0,t.SourceLocation=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},t.id=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},t.stripFlags=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},t.stripComment=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},t.preparePath=function(e,t,r){r=this.locInfo(r)
for(var n=e?"@":"",o=[],s=0,a=0,l=t.length;a<l;a++){var u=t[a].part,c=t[a].original!==u
if(n+=(t[a].separator||"")+u,c||".."!==u&&"."!==u&&"this"!==u)o.push(u)
else{if(o.length>0)throw new i.default("Invalid path: "+n,{loc:r})
".."===u&&s++}}return{type:"PathExpression",data:e,depth:s,parts:o,original:n,loc:r}},t.prepareMustache=function(e,t,r,n,i,o){var s=n.charAt(3)||n.charAt(2),a="{"!==s&&"&"!==s
return{type:/\*/.test(n)?"Decorator":"MustacheStatement",path:e,params:t,hash:r,escaped:a,strip:i,loc:this.locInfo(o)}},t.prepareRawBlock=function(e,t,r,n){o(e,r)
var i={type:"Program",body:t,strip:{},loc:n=this.locInfo(n)}
return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:n}},t.prepareBlock=function(e,t,r,n,s,a){n&&n.path&&o(e,n)
var l=/\*/.test(e.open)
t.blockParams=e.blockParams
var u=void 0,c=void 0
if(r){if(l)throw new i.default("Unexpected inverse block on decorator",r)
r.chain&&(r.program.body[0].closeStrip=n.strip),c=r.strip,u=r.program}return s&&(s=u,u=t,t=s),{type:l?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:u,openStrip:e.strip,inverseStrip:c,closeStrip:n&&n.strip,loc:this.locInfo(a)}},t.prepareProgram=function(e,t){if(!t&&e.length){var r=e[0].loc,n=e[e.length-1].loc
r&&n&&(t={source:r.source,start:{line:r.start.line,column:r.start.column},end:{line:n.end.line,column:n.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},t.preparePartialBlock=function(e,t,r,n){return o(e,r),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:r&&r.strip,loc:this.locInfo(n)}}
var n,i=(n=r(2))&&n.__esModule?n:{default:n}
function o(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var r={loc:e.path.loc}
throw new i.default(e.path.original+" doesn't match "+t,r)}}},(e,t,r)=>{"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Compiler=l,t.precompile=function(e,t,r){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)
"data"in(t=t||{})||(t.data=!0),t.compat&&(t.useDepths=!0)
var n=r.parse(e,t),o=(new r.Compiler).compile(n,t)
return(new r.JavaScriptCompiler).compile(o,t)},t.compile=function(e,t,r){if(void 0===t&&(t={}),null==e||"string"!=typeof e&&"Program"!==e.type)throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)
"data"in(t=o.extend({},t))||(t.data=!0),t.compat&&(t.useDepths=!0)
var n=void 0
function s(){var n=r.parse(e,t),i=(new r.Compiler).compile(n,t),o=(new r.JavaScriptCompiler).compile(i,t,void 0,!0)
return r.template(o)}function a(e,t){return n||(n=s()),n.call(this,e,t)}return a._setup=function(e){return n||(n=s()),n._setup(e)},a._child=function(e,t,r,i){return n||(n=s()),n._child(e,t,r,i)},a}
var i=n(r(2)),o=r(1),s=n(r(34)),a=[].slice
function l(){}function u(e,t){if(e===t)return!0
if(o.isArray(e)&&o.isArray(t)&&e.length===t.length){for(var r=0;r<e.length;r++)if(!u(e[r],t[r]))return!1
return!0}}function c(e){if(!e.path.parts){var t=e.path
e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}l.prototype={compiler:l,equals:function(e){var t=this.opcodes.length
if(e.opcodes.length!==t)return!1
for(var r=0;r<t;r++){var n=this.opcodes[r],i=e.opcodes[r]
if(n.opcode!==i.opcode||!u(n.args,i.args))return!1}for(t=this.children.length,r=0;r<t;r++)if(!this.children[r].equals(e.children[r]))return!1
return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=o.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),r=this.guid++
return this.usePartial=this.usePartial||t.usePartial,this.children[r]=t,this.useDepths=this.useDepths||t.useDepths,r},accept:function(e){if(!this[e.type])throw new i.default("Unknown type: "+e.type,e)
this.sourceNode.unshift(e)
var t=this[e.type](e)
return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams)
for(var t=e.body,r=t.length,n=0;n<r;n++)this.accept(t[n])
return this.options.blockParams.shift(),this.isSimple=1===r,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){c(e)
var t=e.program,r=e.inverse
t=t&&this.compileProgram(t),r=r&&this.compileProgram(r)
var n=this.classifySexpr(e)
"helper"===n?this.helperSexpr(e,t,r):"simple"===n?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,r),this.opcode("pushProgram",t),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),r=this.setupFullMustacheParams(e,t,void 0),n=e.path
this.useDecorators=!0,this.opcode("registerDecorator",r.length,n.original)},PartialStatement:function(e){this.usePartial=!0
var t=e.program
t&&(t=this.compileProgram(e.program))
var r=e.params
if(r.length>1)throw new i.default("Unsupported number of partial arguments: "+r.length,e)
r.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):r.push({type:"PathExpression",parts:[],depth:0}))
var n=e.name.original,o="SubExpression"===e.name.type
o&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0)
var s=e.indent||""
this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",o,n,s),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){c(e)
var t=this.classifySexpr(e)
"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,r){var n=e.path,i=n.parts[0],o=null!=t||null!=r
this.opcode("getContext",n.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",r),n.strict=!0,this.accept(n),this.opcode("invokeAmbiguous",i,o)},simpleSexpr:function(e){var t=e.path
t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var n=this.setupFullMustacheParams(e,t,r),o=e.path,a=o.parts[0]
if(this.options.knownHelpers[a])this.opcode("invokeKnownHelper",n.length,a)
else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+a,e)
o.strict=!0,o.falsy=!0,this.accept(o),this.opcode("invokeHelper",n.length,o.original,s.default.helpers.simpleId(o))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth)
var t=e.parts[0],r=s.default.helpers.scopedId(e),n=!e.depth&&!r&&this.blockParamIndex(t)
n?this.opcode("lookupBlockParam",n,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,r):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,r=0,n=t.length
for(this.opcode("pushHash");r<n;r++)this.pushParam(t[r].value)
for(;r--;)this.opcode("assignToHash",t[r].key)
this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:a.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=s.default.helpers.simpleId(e.path),r=t&&!!this.blockParamIndex(e.path.parts[0]),n=!r&&s.default.helpers.helperExpression(e),i=!r&&(n||t)
if(i&&!n){var o=e.path.parts[0],a=this.options
a.knownHelpers[o]?n=!0:a.knownHelpersOnly&&(i=!1)}return n?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,r=e.length;t<r;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||""
if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e)
else{if(this.trackIds){var r=void 0
if(!e.parts||s.default.helpers.scopedId(e)||e.depth||(r=this.blockParamIndex(e.parts[0])),r){var n=e.parts.slice(1).join(".")
this.opcode("pushId","BlockParam",r,n)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,r,n){var i=e.params
return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",r),e.hash?this.accept(e.hash):this.opcode("emptyHash",n),i},blockParamIndex:function(e){for(var t=0,r=this.options.blockParams.length;t<r;t++){var n=this.options.blockParams[t],i=n&&o.indexOf(n,e)
if(n&&i>=0)return[t,i]}}}},(e,t,r)=>{"use strict"
var n=r(185),i=r(186)
function o(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}e.exports.Type=r(0),e.exports.Schema=r(44),e.exports.FAILSAFE_SCHEMA=r(43),e.exports.JSON_SCHEMA=r(42),e.exports.CORE_SCHEMA=r(114),e.exports.DEFAULT_SCHEMA=r(21),e.exports.load=n.load,e.exports.loadAll=n.loadAll,e.exports.dump=i.dump,e.exports.YAMLException=r(7),e.exports.types={binary:r(54),float:r(51),map:r(47),null:r(48),pairs:r(56),set:r(57),timestamp:r(52),bool:r(49),int:r(50),merge:r(53),omap:r(55),seq:r(46),str:r(45)},e.exports.safeLoad=o("safeLoad","load"),e.exports.safeLoadAll=o("safeLoadAll","loadAll"),e.exports.safeDump=o("safeDump","dump")},(e,t,r)=>{"use strict"
var n=r(13),i=r(7),o=r(113),s=r(21),a=Object.prototype.hasOwnProperty,l=1,u=2,c=3,p=4,d=1,h=2,f=3,m=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,g=/[\x85\u2028\u2029]/,v=/[,\[\]\{\}]/,y=/^(?:!|!!|![a-z\-]+!)$/i,b=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i
function w(e){return Object.prototype.toString.call(e)}function k(e){return 10===e||13===e}function x(e){return 9===e||32===e}function _(e){return 9===e||32===e||10===e||13===e}function S(e){return 44===e||91===e||93===e||123===e||125===e}function P(e){var t
return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function O(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function E(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var A=new Array(256),C=new Array(256),T=0;T<256;T++)A[T]=O(T)?1:0,C[T]=O(T)
function j(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||s,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function I(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart}
return r.snippet=o(r),new i(t,r)}function L(e,t){throw I(e,t)}function F(e,t){e.onWarning&&e.onWarning.call(null,I(e,t))}var M={YAML:function(e,t,r){var n,i,o
null!==e.version&&L(e,"duplication of %YAML directive"),1!==r.length&&L(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&L(e,"ill-formed argument of the YAML directive"),i=parseInt(n[1],10),o=parseInt(n[2],10),1!==i&&L(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&F(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,i
2!==r.length&&L(e,"TAG directive accepts exactly two arguments"),n=r[0],i=r[1],y.test(n)||L(e,"ill-formed tag handle (first argument) of the TAG directive"),a.call(e.tagMap,n)&&L(e,'there is a previously declared suffix for "'+n+'" tag handle'),b.test(i)||L(e,"ill-formed tag prefix (second argument) of the TAG directive")
try{i=decodeURIComponent(i)}catch(t){L(e,"tag prefix is malformed: "+i)}e.tagMap[n]=i}}
function N(e,t,r,n){var i,o,s,a
if(t<r){if(a=e.input.slice(t,r),n)for(i=0,o=a.length;i<o;i+=1)9===(s=a.charCodeAt(i))||32<=s&&s<=1114111||L(e,"expected valid JSON character")
else m.test(a)&&L(e,"the stream contains non-printable characters")
e.result+=a}}function R(e,t,r,i){var o,s,l,u
for(n.isObject(r)||L(e,"cannot merge mappings; the provided source object is unacceptable"),l=0,u=(o=Object.keys(r)).length;l<u;l+=1)s=o[l],a.call(t,s)||(t[s]=r[s],i[s]=!0)}function $(e,t,r,n,i,o,s,l,u){var c,p
if(Array.isArray(i))for(c=0,p=(i=Array.prototype.slice.call(i)).length;c<p;c+=1)Array.isArray(i[c])&&L(e,"nested arrays are not supported inside keys"),"object"==typeof i&&"[object Object]"===w(i[c])&&(i[c]="[object Object]")
if("object"==typeof i&&"[object Object]"===w(i)&&(i="[object Object]"),i=String(i),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(o))for(c=0,p=o.length;c<p;c+=1)R(e,t,o[c],r)
else R(e,t,o,r)
else e.json||a.call(r,i)||!a.call(t,i)||(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=u||e.position,L(e,"duplicated mapping key")),"__proto__"===i?Object.defineProperty(t,i,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[i]=o,delete r[i]
return t}function U(e){var t
10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):L(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function D(e,t,r){for(var n=0,i=e.input.charCodeAt(e.position);0!==i;){for(;x(i);)9===i&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position)
if(t&&35===i)do{i=e.input.charCodeAt(++e.position)}while(10!==i&&13!==i&&0!==i)
if(!k(i))break
for(U(e),i=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position)}return-1!==r&&0!==n&&e.lineIndent<r&&F(e,"deficient indentation"),n}function Z(e){var t,r=e.position
return!(45!==(t=e.input.charCodeAt(r))&&46!==t||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,0!==(t=e.input.charCodeAt(r))&&!_(t)))}function H(e,t){1===t?e.result+=" ":t>1&&(e.result+=n.repeat("\n",t-1))}function B(e,t){var r,n,i=e.tag,o=e.anchor,s=[],a=!1
if(-1!==e.firstTabInLine)return!1
for(null!==e.anchor&&(e.anchorMap[e.anchor]=s),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,L(e,"tab characters must not be used in indentation")),45===n)&&_(e.input.charCodeAt(e.position+1));)if(a=!0,e.position++,D(e,!0,-1)&&e.lineIndent<=t)s.push(null),n=e.input.charCodeAt(e.position)
else if(r=e.line,z(e,t,c,!1,!0),s.push(e.result),D(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==n)L(e,"bad indentation of a sequence entry")
else if(e.lineIndent<t)break
return!!a&&(e.tag=i,e.anchor=o,e.kind="sequence",e.result=s,!0)}function V(e){var t,r,n,i,o=!1,s=!1
if(33!==(i=e.input.charCodeAt(e.position)))return!1
if(null!==e.tag&&L(e,"duplication of a tag property"),60===(i=e.input.charCodeAt(++e.position))?(o=!0,i=e.input.charCodeAt(++e.position)):33===i?(s=!0,r="!!",i=e.input.charCodeAt(++e.position)):r="!",t=e.position,o){do{i=e.input.charCodeAt(++e.position)}while(0!==i&&62!==i)
e.position<e.length?(n=e.input.slice(t,e.position),i=e.input.charCodeAt(++e.position)):L(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==i&&!_(i);)33===i&&(s?L(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),y.test(r)||L(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),i=e.input.charCodeAt(++e.position)
n=e.input.slice(t,e.position),v.test(n)&&L(e,"tag suffix cannot contain flow indicator characters")}n&&!b.test(n)&&L(e,"tag name cannot contain such characters: "+n)
try{n=decodeURIComponent(n)}catch(t){L(e,"tag name is malformed: "+n)}return o?e.tag=n:a.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:L(e,'undeclared tag handle "'+r+'"'),!0}function q(e){var t,r
if(38!==(r=e.input.charCodeAt(e.position)))return!1
for(null!==e.anchor&&L(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!_(r)&&!S(r);)r=e.input.charCodeAt(++e.position)
return e.position===t&&L(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function z(e,t,r,i,o){var s,m,g,v,y,b,w,O,T,j=1,I=!1,F=!1
if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,s=m=g=p===r||c===r,i&&D(e,!0,-1)&&(I=!0,e.lineIndent>t?j=1:e.lineIndent===t?j=0:e.lineIndent<t&&(j=-1)),1===j)for(;V(e)||q(e);)D(e,!0,-1)?(I=!0,g=s,e.lineIndent>t?j=1:e.lineIndent===t?j=0:e.lineIndent<t&&(j=-1)):g=!1
if(g&&(g=I||o),1!==j&&p!==r||(O=l===r||u===r?t:t+1,T=e.position-e.lineStart,1===j?g&&(B(e,T)||function(e,t,r){var n,i,o,s,a,l,c,d=e.tag,h=e.anchor,f={},m=Object.create(null),g=null,v=null,y=null,b=!1,w=!1
if(-1!==e.firstTabInLine)return!1
for(null!==e.anchor&&(e.anchorMap[e.anchor]=f),c=e.input.charCodeAt(e.position);0!==c;){if(b||-1===e.firstTabInLine||(e.position=e.firstTabInLine,L(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),o=e.line,63!==c&&58!==c||!_(n)){if(s=e.line,a=e.lineStart,l=e.position,!z(e,r,u,!1,!0))break
if(e.line===o){for(c=e.input.charCodeAt(e.position);x(c);)c=e.input.charCodeAt(++e.position)
if(58===c)_(c=e.input.charCodeAt(++e.position))||L(e,"a whitespace character is expected after the key-value separator within a block mapping"),b&&($(e,f,m,g,v,null,s,a,l),g=v=y=null),w=!0,b=!1,i=!1,g=e.tag,v=e.result
else{if(!w)return e.tag=d,e.anchor=h,!0
L(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!w)return e.tag=d,e.anchor=h,!0
L(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(b&&($(e,f,m,g,v,null,s,a,l),g=v=y=null),w=!0,b=!0,i=!0):b?(b=!1,i=!0):L(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=n
if((e.line===o||e.lineIndent>t)&&(b&&(s=e.line,a=e.lineStart,l=e.position),z(e,t,p,!0,i)&&(b?v=e.result:y=e.result),b||($(e,f,m,g,v,y,s,a,l),g=v=y=null),D(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&0!==c)L(e,"bad indentation of a mapping entry")
else if(e.lineIndent<t)break}return b&&$(e,f,m,g,v,null,s,a,l),w&&(e.tag=d,e.anchor=h,e.kind="mapping",e.result=f),w}(e,T,O))||function(e,t){var r,n,i,o,s,a,u,c,p,d,h,f,m=!0,g=e.tag,v=e.anchor,y=Object.create(null)
if(91===(f=e.input.charCodeAt(e.position)))s=93,c=!1,o=[]
else{if(123!==f)return!1
s=125,c=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),f=e.input.charCodeAt(++e.position);0!==f;){if(D(e,!0,t),(f=e.input.charCodeAt(e.position))===s)return e.position++,e.tag=g,e.anchor=v,e.kind=c?"mapping":"sequence",e.result=o,!0
m?44===f&&L(e,"expected the node content, but found ','"):L(e,"missed comma between flow collection entries"),h=null,a=u=!1,63===f&&_(e.input.charCodeAt(e.position+1))&&(a=u=!0,e.position++,D(e,!0,t)),r=e.line,n=e.lineStart,i=e.position,z(e,t,l,!1,!0),d=e.tag,p=e.result,D(e,!0,t),f=e.input.charCodeAt(e.position),!u&&e.line!==r||58!==f||(a=!0,f=e.input.charCodeAt(++e.position),D(e,!0,t),z(e,t,l,!1,!0),h=e.result),c?$(e,o,y,d,p,h,r,n,i):a?o.push($(e,null,y,d,p,h,r,n,i)):o.push(p),D(e,!0,t),44===(f=e.input.charCodeAt(e.position))?(m=!0,f=e.input.charCodeAt(++e.position)):m=!1}L(e,"unexpected end of the stream within a flow collection")}(e,O)?F=!0:(m&&function(e,t){var r,i,o,s,a,l=d,u=!1,c=!1,p=t,m=0,g=!1
if(124===(s=e.input.charCodeAt(e.position)))i=!1
else{if(62!==s)return!1
i=!0}for(e.kind="scalar",e.result="";0!==s;)if(43===(s=e.input.charCodeAt(++e.position))||45===s)d===l?l=43===s?f:h:L(e,"repeat of a chomping mode identifier")
else{if(!((o=48<=(a=s)&&a<=57?a-48:-1)>=0))break
0===o?L(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?L(e,"repeat of an indentation width identifier"):(p=t+o-1,c=!0)}if(x(s)){do{s=e.input.charCodeAt(++e.position)}while(x(s))
if(35===s)do{s=e.input.charCodeAt(++e.position)}while(!k(s)&&0!==s)}for(;0!==s;){for(U(e),e.lineIndent=0,s=e.input.charCodeAt(e.position);(!c||e.lineIndent<p)&&32===s;)e.lineIndent++,s=e.input.charCodeAt(++e.position)
if(!c&&e.lineIndent>p&&(p=e.lineIndent),k(s))m++
else{if(e.lineIndent<p){l===f?e.result+=n.repeat("\n",u?1+m:m):l===d&&u&&(e.result+="\n")
break}for(i?x(s)?(g=!0,e.result+=n.repeat("\n",u?1+m:m)):g?(g=!1,e.result+=n.repeat("\n",m+1)):0===m?u&&(e.result+=" "):e.result+=n.repeat("\n",m):e.result+=n.repeat("\n",u?1+m:m),u=!0,c=!0,m=0,r=e.position;!k(s)&&0!==s;)s=e.input.charCodeAt(++e.position)
N(e,r,e.position,!1)}}return!0}(e,O)||function(e,t){var r,n,i
if(39!==(r=e.input.charCodeAt(e.position)))return!1
for(e.kind="scalar",e.result="",e.position++,n=i=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(N(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return!0
n=e.position,e.position++,i=e.position}else k(r)?(N(e,n,i,!0),H(e,D(e,!1,t)),n=i=e.position):e.position===e.lineStart&&Z(e)?L(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position)
L(e,"unexpected end of the stream within a single quoted scalar")}(e,O)||function(e,t){var r,n,i,o,s,a,l
if(34!==(a=e.input.charCodeAt(e.position)))return!1
for(e.kind="scalar",e.result="",e.position++,r=n=e.position;0!==(a=e.input.charCodeAt(e.position));){if(34===a)return N(e,r,e.position,!0),e.position++,!0
if(92===a){if(N(e,r,e.position,!0),k(a=e.input.charCodeAt(++e.position)))D(e,!1,t)
else if(a<256&&A[a])e.result+=C[a],e.position++
else if((s=120===(l=a)?2:117===l?4:85===l?8:0)>0){for(i=s,o=0;i>0;i--)(s=P(a=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+s:L(e,"expected hexadecimal character")
e.result+=E(o),e.position++}else L(e,"unknown escape sequence")
r=n=e.position}else k(a)?(N(e,r,n,!0),H(e,D(e,!1,t)),r=n=e.position):e.position===e.lineStart&&Z(e)?L(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}L(e,"unexpected end of the stream within a double quoted scalar")}(e,O)?F=!0:function(e){var t,r,n
if(42!==(n=e.input.charCodeAt(e.position)))return!1
for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!_(n)&&!S(n);)n=e.input.charCodeAt(++e.position)
return e.position===t&&L(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),a.call(e.anchorMap,r)||L(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],D(e,!0,-1),!0}(e)?(F=!0,null===e.tag&&null===e.anchor||L(e,"alias node should not have any properties")):function(e,t,r){var n,i,o,s,a,l,u,c,p=e.kind,d=e.result
if(_(c=e.input.charCodeAt(e.position))||S(c)||35===c||38===c||42===c||33===c||124===c||62===c||39===c||34===c||37===c||64===c||96===c)return!1
if((63===c||45===c)&&(_(n=e.input.charCodeAt(e.position+1))||r&&S(n)))return!1
for(e.kind="scalar",e.result="",i=o=e.position,s=!1;0!==c;){if(58===c){if(_(n=e.input.charCodeAt(e.position+1))||r&&S(n))break}else if(35===c){if(_(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Z(e)||r&&S(c))break
if(k(c)){if(a=e.line,l=e.lineStart,u=e.lineIndent,D(e,!1,-1),e.lineIndent>=t){s=!0,c=e.input.charCodeAt(e.position)
continue}e.position=o,e.line=a,e.lineStart=l,e.lineIndent=u
break}}s&&(N(e,i,o,!1),H(e,e.line-a),i=o=e.position,s=!1),x(c)||(o=e.position+1),c=e.input.charCodeAt(++e.position)}return N(e,i,o,!1),!!e.result||(e.kind=p,e.result=d,!1)}(e,O,l===r)&&(F=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===j&&(F=g&&B(e,T))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)
else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&L(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),v=0,y=e.implicitTypes.length;v<y;v+=1)if((w=e.implicitTypes[v]).resolve(e.result)){e.result=w.construct(e.result),e.tag=w.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)
break}}else if("!"!==e.tag){if(a.call(e.typeMap[e.kind||"fallback"],e.tag))w=e.typeMap[e.kind||"fallback"][e.tag]
else for(w=null,v=0,y=(b=e.typeMap.multi[e.kind||"fallback"]).length;v<y;v+=1)if(e.tag.slice(0,b[v].tag.length)===b[v].tag){w=b[v]
break}w||L(e,"unknown tag !<"+e.tag+">"),null!==e.result&&w.kind!==e.kind&&L(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+w.kind+'", not "'+e.kind+'"'),w.resolve(e.result,e.tag)?(e.result=w.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):L(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||F}function W(e){var t,r,n,i,o=e.position,s=!1
for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(i=e.input.charCodeAt(e.position))&&(D(e,!0,-1),i=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==i));){for(s=!0,i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!_(i);)i=e.input.charCodeAt(++e.position)
for(n=[],(r=e.input.slice(t,e.position)).length<1&&L(e,"directive name must not be less than one character in length");0!==i;){for(;x(i);)i=e.input.charCodeAt(++e.position)
if(35===i){do{i=e.input.charCodeAt(++e.position)}while(0!==i&&!k(i))
break}if(k(i))break
for(t=e.position;0!==i&&!_(i);)i=e.input.charCodeAt(++e.position)
n.push(e.input.slice(t,e.position))}0!==i&&U(e),a.call(M,r)?M[r](e,r,n):F(e,'unknown document directive "'+r+'"')}D(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,D(e,!0,-1)):s&&L(e,"directives end mark is expected"),z(e,e.lineIndent-1,p,!1,!0),D(e,!0,-1),e.checkLineBreaks&&g.test(e.input.slice(o,e.position))&&F(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Z(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,D(e,!0,-1)):e.position<e.length-1&&L(e,"end of the stream or a document separator is expected")}function K(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)))
var r=new j(e,t),n=e.indexOf("\0")
for(-1!==n&&(r.position=n,L(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1
for(;r.position<r.length-1;)W(r)
return r.documents}e.exports.loadAll=function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null)
var n=K(e,r)
if("function"!=typeof t)return n
for(var i=0,o=n.length;i<o;i+=1)t(n[i])},e.exports.load=function(e,t){var r=K(e,t)
if(0!==r.length){if(1===r.length)return r[0]
throw new i("expected a single document in the stream, but found more")}}},(e,t,r)=>{"use strict"
var n=r(13),i=r(7),o=r(21),s=Object.prototype.toString,a=Object.prototype.hasOwnProperty,l=65279,u=9,c=10,p=13,d=32,h=33,f=34,m=35,g=37,v=38,y=39,b=42,w=44,k=45,x=58,_=61,S=62,P=63,O=64,E=91,A=93,C=96,T=123,j=124,I=125,L={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},F=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],M=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/
function N(e){var t,r,o
if(t=e.toString(16).toUpperCase(),e<=255)r="x",o=2
else if(e<=65535)r="u",o=4
else{if(!(e<=4294967295))throw new i("code point within a string may not be greater than 0xFFFFFFFF")
r="U",o=8}return"\\"+r+n.repeat("0",o-t.length)+t}var R=2
function $(e){this.schema=e.schema||o,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=n.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var r,n,i,o,s,l,u
if(null===t)return{}
for(r={},i=0,o=(n=Object.keys(t)).length;i<o;i+=1)s=n[i],l=String(t[s]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(u=e.compiledTypeMap.fallback[s])&&a.call(u.styleAliases,l)&&(l=u.styleAliases[l]),r[s]=l
return r}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?R:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function U(e,t){for(var r,i=n.repeat(" ",t),o=0,s=-1,a="",l=e.length;o<l;)-1===(s=e.indexOf("\n",o))?(r=e.slice(o),o=l):(r=e.slice(o,s+1),o=s+1),r.length&&"\n"!==r&&(a+=i),a+=r
return a}function D(e,t){return"\n"+n.repeat(" ",e.indent*t)}function Z(e){return e===d||e===u}function H(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==l||65536<=e&&e<=1114111}function B(e){return H(e)&&e!==l&&e!==p&&e!==c}function V(e,t,r){var n=B(e),i=n&&!Z(e)
return(r?n:n&&e!==w&&e!==E&&e!==A&&e!==T&&e!==I)&&e!==m&&!(t===x&&!i)||B(t)&&!Z(t)&&e===m||t===x&&i}function q(e,t){var r,n=e.charCodeAt(t)
return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1))>=56320&&r<=57343?1024*(n-55296)+r-56320+65536:n}function z(e){return/^\n* /.test(e)}var W=1,K=2,Y=3,X=4,G=5
function J(e,t,r,n,o){e.dump=function(){if(0===t.length)return e.quotingType===R?'""':"''"
if(!e.noCompatMode&&(-1!==F.indexOf(t)||M.test(t)))return e.quotingType===R?'"'+t+'"':"'"+t+"'"
var s=e.indent*Math.max(1,r),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-s),u=n||e.flowLevel>-1&&r>=e.flowLevel
switch(function(e,t,r,n,i,o,s,a){var u,p,d=0,L=null,F=!1,M=!1,N=-1!==n,$=-1,U=H(p=q(e,0))&&p!==l&&!Z(p)&&p!==k&&p!==P&&p!==x&&p!==w&&p!==E&&p!==A&&p!==T&&p!==I&&p!==m&&p!==v&&p!==b&&p!==h&&p!==j&&p!==_&&p!==S&&p!==y&&p!==f&&p!==g&&p!==O&&p!==C&&function(e){return!Z(e)&&e!==x}(q(e,e.length-1))
if(t||s)for(u=0;u<e.length;d>=65536?u+=2:u++){if(!H(d=q(e,u)))return G
U=U&&V(d,L,a),L=d}else{for(u=0;u<e.length;d>=65536?u+=2:u++){if((d=q(e,u))===c)F=!0,N&&(M=M||u-$-1>n&&" "!==e[$+1],$=u)
else if(!H(d))return G
U=U&&V(d,L,a),L=d}M=M||N&&u-$-1>n&&" "!==e[$+1]}return F||M?r>9&&z(e)?G:s?o===R?G:K:M?X:Y:!U||s||i(e)?o===R?G:K:W}(t,u,e.indent,a,(function(t){return function(e,t){var r,n
for(r=0,n=e.implicitTypes.length;r<n;r+=1)if(e.implicitTypes[r].resolve(t))return!0
return!1}(e,t)}),e.quotingType,e.forceQuotes&&!n,o)){case W:return t
case K:return"'"+t.replace(/'/g,"''")+"'"
case Y:return"|"+Q(t,e.indent)+ee(U(t,s))
case X:return">"+Q(t,e.indent)+ee(U(function(e,t){for(var r,n,i,o=/(\n+)([^\n]*)/g,s=(i=-1!==(i=e.indexOf("\n"))?i:e.length,o.lastIndex=i,te(e.slice(0,i),t)),a="\n"===e[0]||" "===e[0];n=o.exec(e);){var l=n[1],u=n[2]
r=" "===u[0],s+=l+(a||r||""===u?"":"\n")+te(u,t),a=r}return s}(t,a),s))
case G:return'"'+function(e){for(var t,r="",n=0,i=0;i<e.length;n>=65536?i+=2:i++)n=q(e,i),!(t=L[n])&&H(n)?(r+=e[i],n>=65536&&(r+=e[i+1])):r+=t||N(n)
return r}(t)+'"'
default:throw new i("impossible error: invalid scalar style")}}()}function Q(e,t){var r=z(e)?String(t):"",n="\n"===e[e.length-1]
return r+(!n||"\n"!==e[e.length-2]&&"\n"!==e?n?"":"-":"+")+"\n"}function ee(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function te(e,t){if(""===e||" "===e[0])return e
for(var r,n,i=/ [^ ]/g,o=0,s=0,a=0,l="";r=i.exec(e);)(a=r.index)-o>t&&(n=s>o?s:a,l+="\n"+e.slice(o,n),o=n+1),s=a
return l+="\n",e.length-o>t&&s>o?l+=e.slice(o,s)+"\n"+e.slice(s+1):l+=e.slice(o),l.slice(1)}function re(e,t,r,n){var i,o,s,a="",l=e.tag
for(i=0,o=r.length;i<o;i+=1)s=r[i],e.replacer&&(s=e.replacer.call(r,String(i),s)),(ie(e,t+1,s,!0,!0,!1,!0)||void 0===s&&ie(e,t+1,null,!0,!0,!1,!0))&&(n&&""===a||(a+=D(e,t)),e.dump&&c===e.dump.charCodeAt(0)?a+="-":a+="- ",a+=e.dump)
e.tag=l,e.dump=a||"[]"}function ne(e,t,r){var n,o,l,u,c,p
for(l=0,u=(o=r?e.explicitTypes:e.implicitTypes).length;l<u;l+=1)if(((c=o[l]).instanceOf||c.predicate)&&(!c.instanceOf||"object"==typeof t&&t instanceof c.instanceOf)&&(!c.predicate||c.predicate(t))){if(r?c.multi&&c.representName?e.tag=c.representName(t):e.tag=c.tag:e.tag="?",c.represent){if(p=e.styleMap[c.tag]||c.defaultStyle,"[object Function]"===s.call(c.represent))n=c.represent(t,p)
else{if(!a.call(c.represent,p))throw new i("!<"+c.tag+'> tag resolver accepts not "'+p+'" style')
n=c.represent[p](t,p)}e.dump=n}return!0}return!1}function ie(e,t,r,n,o,a,l){e.tag=null,e.dump=r,ne(e,r,!1)||ne(e,r,!0)
var u,p=s.call(e.dump),d=n
n&&(n=e.flowLevel<0||e.flowLevel>t)
var h,f,m="[object Object]"===p||"[object Array]"===p
if(m&&(f=-1!==(h=e.duplicates.indexOf(r))),(null!==e.tag&&"?"!==e.tag||f||2!==e.indent&&t>0)&&(o=!1),f&&e.usedDuplicates[h])e.dump="*ref_"+h
else{if(m&&f&&!e.usedDuplicates[h]&&(e.usedDuplicates[h]=!0),"[object Object]"===p)n&&0!==Object.keys(e.dump).length?(function(e,t,r,n){var o,s,a,l,u,p,d="",h=e.tag,f=Object.keys(r)
if(!0===e.sortKeys)f.sort()
else if("function"==typeof e.sortKeys)f.sort(e.sortKeys)
else if(e.sortKeys)throw new i("sortKeys must be a boolean or a function")
for(o=0,s=f.length;o<s;o+=1)p="",n&&""===d||(p+=D(e,t)),l=r[a=f[o]],e.replacer&&(l=e.replacer.call(r,a,l)),ie(e,t+1,a,!0,!0,!0)&&((u=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&c===e.dump.charCodeAt(0)?p+="?":p+="? "),p+=e.dump,u&&(p+=D(e,t)),ie(e,t+1,l,!0,u)&&(e.dump&&c===e.dump.charCodeAt(0)?p+=":":p+=": ",d+=p+=e.dump))
e.tag=h,e.dump=d||"{}"}(e,t,e.dump,o),f&&(e.dump="&ref_"+h+e.dump)):(function(e,t,r){var n,i,o,s,a,l="",u=e.tag,c=Object.keys(r)
for(n=0,i=c.length;n<i;n+=1)a="",""!==l&&(a+=", "),e.condenseFlow&&(a+='"'),s=r[o=c[n]],e.replacer&&(s=e.replacer.call(r,o,s)),ie(e,t,o,!1,!1)&&(e.dump.length>1024&&(a+="? "),a+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),ie(e,t,s,!1,!1)&&(l+=a+=e.dump))
e.tag=u,e.dump="{"+l+"}"}(e,t,e.dump),f&&(e.dump="&ref_"+h+" "+e.dump))
else if("[object Array]"===p)n&&0!==e.dump.length?(e.noArrayIndent&&!l&&t>0?re(e,t-1,e.dump,o):re(e,t,e.dump,o),f&&(e.dump="&ref_"+h+e.dump)):(function(e,t,r){var n,i,o,s="",a=e.tag
for(n=0,i=r.length;n<i;n+=1)o=r[n],e.replacer&&(o=e.replacer.call(r,String(n),o)),(ie(e,t,o,!1,!1)||void 0===o&&ie(e,t,null,!1,!1))&&(""!==s&&(s+=","+(e.condenseFlow?"":" ")),s+=e.dump)
e.tag=a,e.dump="["+s+"]"}(e,t,e.dump),f&&(e.dump="&ref_"+h+" "+e.dump))
else{if("[object String]"!==p){if("[object Undefined]"===p)return!1
if(e.skipInvalid)return!1
throw new i("unacceptable kind of an object to dump "+p)}"?"!==e.tag&&J(e,e.dump,t,a,d)}null!==e.tag&&"?"!==e.tag&&(u=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),u="!"===e.tag[0]?"!"+u:"tag:yaml.org,2002:"===u.slice(0,18)?"!!"+u.slice(18):"!<"+u+">",e.dump=u+" "+e.dump)}return!0}function oe(e,t){var r,n,i=[],o=[]
for(se(e,i,o),r=0,n=o.length;r<n;r+=1)t.duplicates.push(i[o[r]])
t.usedDuplicates=new Array(n)}function se(e,t,r){var n,i,o
if(null!==e&&"object"==typeof e)if(-1!==(i=t.indexOf(e)))-1===r.indexOf(i)&&r.push(i)
else if(t.push(e),Array.isArray(e))for(i=0,o=e.length;i<o;i+=1)se(e[i],t,r)
else for(i=0,o=(n=Object.keys(e)).length;i<o;i+=1)se(e[n[i]],t,r)}e.exports.dump=function(e,t){var r=new $(t=t||{})
r.noRefs||oe(e,r)
var n=e
return r.replacer&&(n=r.replacer.call({"":n},"",n)),ie(r,0,n,!0,!0)?r.dump+"\n":""}},(e,t,r)=>{"use strict"
r.r(t),r.d(t,{animateFill:()=>ne,createSingleton:()=>ee,default:()=>pe,delegate:()=>re,followCursor:()=>ae,hideAll:()=>J,inlinePositioning:()=>le,roundArrow:()=>o,sticky:()=>ue})
var n=r(198),i=r(67),o='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',s="tippy-content",a="tippy-backdrop",l="tippy-arrow",u="tippy-svg-arrow",c={passive:!0,capture:!0},p=function(){return document.body}
function d(e,t,r){if(Array.isArray(e)){var n=e[t]
return null==n?Array.isArray(r)?r[t]:r:n}return e}function h(e,t){var r={}.toString.call(e)
return 0===r.indexOf("[object")&&r.indexOf(t+"]")>-1}function f(e,t){return"function"==typeof e?e.apply(void 0,t):e}function m(e,t){return 0===t?e:function(n){clearTimeout(r),r=setTimeout((function(){e(n)}),t)}
var r}function g(e,t){var r=Object.assign({},e)
return t.forEach((function(e){delete r[e]})),r}function v(e){return[].concat(e)}function y(e,t){-1===e.indexOf(t)&&e.push(t)}function b(e){return e.split("-")[0]}function w(e){return[].slice.call(e)}function k(e){return Object.keys(e).reduce((function(t,r){return void 0!==e[r]&&(t[r]=e[r]),t}),{})}function x(){return document.createElement("div")}function _(e){return["Element","Fragment"].some((function(t){return h(e,t)}))}function S(e){return h(e,"MouseEvent")}function P(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function O(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function E(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function A(e){var t,r=v(e)[0]
return null!=r&&null!=(t=r.ownerDocument)&&t.body?r.ownerDocument:document}function C(e,t,r){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[n](t,r)}))}function T(e,t){for(var r=t;r;){var n
if(e.contains(r))return!0
r=null==r.getRootNode||null==(n=r.getRootNode())?void 0:n.host}return!1}var j={isTouch:!1},I=0
function L(){j.isTouch||(j.isTouch=!0,window.performance&&document.addEventListener("mousemove",F))}function F(){var e=performance.now()
e-I<20&&(j.isTouch=!1,document.removeEventListener("mousemove",F)),I=e}function M(){var e=document.activeElement
if(P(e)){var t=e._tippy
e.blur&&!t.state.isVisible&&e.blur()}}var N=!("undefined"==typeof window||"undefined"==typeof document||!window.msCrypto),R=Object.assign({appendTo:p,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),$=Object.keys(R)
function U(e){var t=(e.plugins||[]).reduce((function(t,r){var n,i=r.name,o=r.defaultValue
return i&&(t[i]=void 0!==e[i]?e[i]:null!=(n=R[i])?n:o),t}),{})
return Object.assign({},e,t)}function D(e,t){var r=Object.assign({},t,{content:f(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(U(Object.assign({},R,{plugins:t}))):$).reduce((function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim()
if(!n)return t
if("content"===r)t[r]=n
else try{t[r]=JSON.parse(n)}catch(e){t[r]=n}return t}),{})}(e,t.plugins))
return r.aria=Object.assign({},R.aria,r.aria),r.aria={expanded:"auto"===r.aria.expanded?t.interactive:r.aria.expanded,content:"auto"===r.aria.content?t.interactive?null:"describedby":r.aria.content},r}var Z=function(){return"innerHTML"}
function H(e,t){e[Z()]=t}function B(e){var t=x()
return!0===e?t.className=l:(t.className=u,_(e)?t.appendChild(e):H(t,e)),t}function V(e,t){_(t.content)?(H(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?H(e,t.content):e.textContent=t.content)}function q(e){var t=e.firstElementChild,r=w(t.children)
return{box:t,content:r.find((function(e){return e.classList.contains(s)})),arrow:r.find((function(e){return e.classList.contains(l)||e.classList.contains(u)})),backdrop:r.find((function(e){return e.classList.contains(a)}))}}function z(e){var t=x(),r=x()
r.className="tippy-box",r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1")
var n=x()
function i(r,n){var i=q(t),o=i.box,s=i.content,a=i.arrow
n.theme?o.setAttribute("data-theme",n.theme):o.removeAttribute("data-theme"),"string"==typeof n.animation?o.setAttribute("data-animation",n.animation):o.removeAttribute("data-animation"),n.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"==typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?o.setAttribute("role",n.role):o.removeAttribute("role"),r.content===n.content&&r.allowHTML===n.allowHTML||V(s,e.props),n.arrow?a?r.arrow!==n.arrow&&(o.removeChild(a),o.appendChild(B(n.arrow))):o.appendChild(B(n.arrow)):a&&o.removeChild(a)}return n.className=s,n.setAttribute("data-state","hidden"),V(n,e.props),t.appendChild(r),r.appendChild(n),i(e.props,e.props),{popper:t,onUpdate:i}}z.$$tippy=!0
var W=1,K=[],Y=[]
function X(e,t){var r,i,o,s,a,l,u,h,g=D(e,Object.assign({},R,U(k(t)))),_=!1,P=!1,I=!1,L=!1,F=[],M=m(we,g.interactiveDebounce),$=W++,Z=(h=g.plugins).filter((function(e,t){return h.indexOf(e)===t})),H={id:$,reference:e,popper:x(),popperInstance:null,props:g,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:Z,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(i),cancelAnimationFrame(o)},setProps:function(t){if(!H.state.isDestroyed){se("onBeforeUpdate",[H,t]),ye()
var r=H.props,n=D(e,Object.assign({},r,k(t),{ignoreAttributes:!0}))
H.props=n,ve(),r.interactiveDebounce!==n.interactiveDebounce&&(ue(),M=m(we,n.interactiveDebounce)),r.triggerTarget&&!n.triggerTarget?v(r.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):n.triggerTarget&&e.removeAttribute("aria-expanded"),le(),oe(),z&&z(r,n),H.popperInstance&&(Se(),Oe().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),se("onAfterUpdate",[H,t])}},setContent:function(e){H.setProps({content:e})},show:function(){var e=H.state.isVisible,t=H.state.isDestroyed,r=!H.state.isEnabled,n=j.isTouch&&!H.props.touch,i=d(H.props.duration,0,R.duration)
if(!(e||t||r||n||te().hasAttribute("disabled")||(se("onShow",[H],!1),!1===H.props.onShow(H)))){if(H.state.isVisible=!0,ee()&&(V.style.visibility="visible"),oe(),he(),H.state.isMounted||(V.style.transition="none"),ee()){var o=ne()
O([o.box,o.content],0)}var s,a,u
l=function(){var e
if(H.state.isVisible&&!L){if(L=!0,V.offsetHeight,V.style.transition=H.props.moveTransition,ee()&&H.props.animation){var t=ne(),r=t.box,n=t.content
O([r,n],i),E([r,n],"visible")}ae(),le(),y(Y,H),null==(e=H.popperInstance)||e.forceUpdate(),se("onMount",[H]),H.props.animation&&ee()&&function(e,t){me(e,(function(){H.state.isShown=!0,se("onShown",[H])}))}(i)}},a=H.props.appendTo,u=te(),(s=H.props.interactive&&a===p||"parent"===a?u.parentNode:f(a,[u])).contains(V)||s.appendChild(V),H.state.isMounted=!0,Se()}},hide:function(){var e=!H.state.isVisible,t=H.state.isDestroyed,r=!H.state.isEnabled,n=d(H.props.duration,1,R.duration)
if(!(e||t||r)&&(se("onHide",[H],!1),!1!==H.props.onHide(H))){if(H.state.isVisible=!1,H.state.isShown=!1,L=!1,_=!1,ee()&&(V.style.visibility="hidden"),ue(),fe(),oe(!0),ee()){var i=ne(),o=i.box,s=i.content
H.props.animation&&(O([o,s],n),E([o,s],"hidden"))}ae(),le(),H.props.animation?ee()&&function(e,t){me(e,(function(){!H.state.isVisible&&V.parentNode&&V.parentNode.contains(V)&&t()}))}(n,H.unmount):H.unmount()}},hideWithInteractivity:function(e){re().addEventListener("mousemove",M),y(K,M),M(e)},enable:function(){H.state.isEnabled=!0},disable:function(){H.hide(),H.state.isEnabled=!1},unmount:function(){H.state.isVisible&&H.hide(),H.state.isMounted&&(Pe(),Oe().forEach((function(e){e._tippy.unmount()})),V.parentNode&&V.parentNode.removeChild(V),Y=Y.filter((function(e){return e!==H})),H.state.isMounted=!1,se("onHidden",[H]))},destroy:function(){H.state.isDestroyed||(H.clearDelayTimeouts(),H.unmount(),ye(),delete e._tippy,H.state.isDestroyed=!0,se("onDestroy",[H]))}}
if(!g.render)return H
var B=g.render(H),V=B.popper,z=B.onUpdate
V.setAttribute("data-tippy-root",""),V.id="tippy-"+H.id,H.popper=V,e._tippy=H,V._tippy=H
var X=Z.map((function(e){return e.fn(H)})),G=e.hasAttribute("aria-expanded")
return ve(),le(),oe(),se("onCreate",[H]),g.showOnCreate&&Ee(),V.addEventListener("mouseenter",(function(){H.props.interactive&&H.state.isVisible&&H.clearDelayTimeouts()})),V.addEventListener("mouseleave",(function(){H.props.interactive&&H.props.trigger.indexOf("mouseenter")>=0&&re().addEventListener("mousemove",M)})),H
function J(){var e=H.props.touch
return Array.isArray(e)?e:[e,0]}function Q(){return"hold"===J()[0]}function ee(){var e
return!(null==(e=H.props.render)||!e.$$tippy)}function te(){return u||e}function re(){var e=te().parentNode
return e?A(e):document}function ne(){return q(V)}function ie(e){return H.state.isMounted&&!H.state.isVisible||j.isTouch||s&&"focus"===s.type?0:d(H.props.delay,e?0:1,R.delay)}function oe(e){void 0===e&&(e=!1),V.style.pointerEvents=H.props.interactive&&!e?"":"none",V.style.zIndex=""+H.props.zIndex}function se(e,t,r){var n
void 0===r&&(r=!0),X.forEach((function(r){r[e]&&r[e].apply(r,t)})),r&&(n=H.props)[e].apply(n,t)}function ae(){var t=H.props.aria
if(t.content){var r="aria-"+t.content,n=V.id
v(H.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(r)
if(H.state.isVisible)e.setAttribute(r,t?t+" "+n:n)
else{var i=t&&t.replace(n,"").trim()
i?e.setAttribute(r,i):e.removeAttribute(r)}}))}}function le(){!G&&H.props.aria.expanded&&v(H.props.triggerTarget||e).forEach((function(e){H.props.interactive?e.setAttribute("aria-expanded",H.state.isVisible&&e===te()?"true":"false"):e.removeAttribute("aria-expanded")}))}function ue(){re().removeEventListener("mousemove",M),K=K.filter((function(e){return e!==M}))}function ce(t){if(!j.isTouch||!I&&"mousedown"!==t.type){var r=t.composedPath&&t.composedPath()[0]||t.target
if(!H.props.interactive||!T(V,r)){if(v(H.props.triggerTarget||e).some((function(e){return T(e,r)}))){if(j.isTouch)return
if(H.state.isVisible&&H.props.trigger.indexOf("click")>=0)return}else se("onClickOutside",[H,t])
!0===H.props.hideOnClick&&(H.clearDelayTimeouts(),H.hide(),P=!0,setTimeout((function(){P=!1})),H.state.isMounted||fe())}}}function pe(){I=!0}function de(){I=!1}function he(){var e=re()
e.addEventListener("mousedown",ce,!0),e.addEventListener("touchend",ce,c),e.addEventListener("touchstart",de,c),e.addEventListener("touchmove",pe,c)}function fe(){var e=re()
e.removeEventListener("mousedown",ce,!0),e.removeEventListener("touchend",ce,c),e.removeEventListener("touchstart",de,c),e.removeEventListener("touchmove",pe,c)}function me(e,t){var r=ne().box
function n(e){e.target===r&&(C(r,"remove",n),t())}if(0===e)return t()
C(r,"remove",a),C(r,"add",n),a=n}function ge(t,r,n){void 0===n&&(n=!1),v(H.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,r,n),F.push({node:e,eventType:t,handler:r,options:n})}))}function ve(){var e
Q()&&(ge("touchstart",be,{passive:!0}),ge("touchend",ke,{passive:!0})),(e=H.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(ge(e,be),e){case"mouseenter":ge("mouseleave",ke)
break
case"focus":ge(N?"focusout":"blur",xe)
break
case"focusin":ge("focusout",xe)}}))}function ye(){F.forEach((function(e){var t=e.node,r=e.eventType,n=e.handler,i=e.options
t.removeEventListener(r,n,i)})),F=[]}function be(e){var t,r=!1
if(H.state.isEnabled&&!_e(e)&&!P){var n="focus"===(null==(t=s)?void 0:t.type)
s=e,u=e.currentTarget,le(),!H.state.isVisible&&S(e)&&K.forEach((function(t){return t(e)})),"click"===e.type&&(H.props.trigger.indexOf("mouseenter")<0||_)&&!1!==H.props.hideOnClick&&H.state.isVisible?r=!0:Ee(e),"click"===e.type&&(_=!r),r&&!n&&Ae(e)}}function we(e){var t=e.target,r=te().contains(t)||V.contains(t)
if("mousemove"!==e.type||!r){var n=Oe().concat(V).map((function(e){var t,r=null==(t=e._tippy.popperInstance)?void 0:t.state
return r?{popperRect:e.getBoundingClientRect(),popperState:r,props:g}:null})).filter(Boolean);(function(e,t){var r=t.clientX,n=t.clientY
return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,s=b(i.placement),a=i.modifiersData.offset
if(!a)return!0
var l="bottom"===s?a.top.y:0,u="top"===s?a.bottom.y:0,c="right"===s?a.left.x:0,p="left"===s?a.right.x:0,d=t.top-n+l>o,h=n-t.bottom-u>o,f=t.left-r+c>o,m=r-t.right-p>o
return d||h||f||m}))})(n,e)&&(ue(),Ae(e))}}function ke(e){_e(e)||H.props.trigger.indexOf("click")>=0&&_||(H.props.interactive?H.hideWithInteractivity(e):Ae(e))}function xe(e){H.props.trigger.indexOf("focusin")<0&&e.target!==te()||H.props.interactive&&e.relatedTarget&&V.contains(e.relatedTarget)||Ae(e)}function _e(e){return!!j.isTouch&&Q()!==e.type.indexOf("touch")>=0}function Se(){Pe()
var t=H.props,r=t.popperOptions,i=t.placement,o=t.offset,s=t.getReferenceClientRect,a=t.moveTransition,u=ee()?q(V).arrow:null,c=s?{getBoundingClientRect:s,contextElement:s.contextElement||te()}:e,p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state
if(ee()){var r=ne().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?r.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?r.setAttribute("data-"+e,""):r.removeAttribute("data-"+e)})),t.attributes.popper={}}}}]
ee()&&u&&p.push({name:"arrow",options:{element:u,padding:3}}),p.push.apply(p,(null==r?void 0:r.modifiers)||[]),H.popperInstance=(0,n.fi)(c,V,Object.assign({},r,{placement:i,onFirstUpdate:l,modifiers:p}))}function Pe(){H.popperInstance&&(H.popperInstance.destroy(),H.popperInstance=null)}function Oe(){return w(V.querySelectorAll("[data-tippy-root]"))}function Ee(e){H.clearDelayTimeouts(),e&&se("onTrigger",[H,e]),he()
var t=ie(!0),n=J(),i=n[0],o=n[1]
j.isTouch&&"hold"===i&&o&&(t=o),t?r=setTimeout((function(){H.show()}),t):H.show()}function Ae(e){if(H.clearDelayTimeouts(),se("onUntrigger",[H,e]),H.state.isVisible){if(!(H.props.trigger.indexOf("mouseenter")>=0&&H.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&_)){var t=ie(!1)
t?i=setTimeout((function(){H.state.isVisible&&H.hide()}),t):o=requestAnimationFrame((function(){H.hide()}))}}else fe()}}function G(e,t){void 0===t&&(t={})
var r=R.plugins.concat(t.plugins||[])
document.addEventListener("touchstart",L,c),window.addEventListener("blur",M)
var n,i=Object.assign({},t,{plugins:r}),o=(n=e,_(n)?[n]:function(e){return h(e,"NodeList")}(n)?w(n):Array.isArray(n)?n:w(document.querySelectorAll(n))).reduce((function(e,t){var r=t&&X(t,i)
return r&&e.push(r),e}),[])
return _(e)?o[0]:o}G.defaultProps=R,G.setDefaultProps=function(e){Object.keys(e).forEach((function(t){R[t]=e[t]}))},G.currentInput=j
var J=function(e){var t=void 0===e?{}:e,r=t.exclude,n=t.duration
Y.forEach((function(e){var t=!1
if(r&&(t=P(r)?e.reference===r:e.popper===r.popper),!t){var i=e.props.duration
e.setProps({duration:n}),e.hide(),e.state.isDestroyed||e.setProps({duration:i})}}))},Q=Object.assign({},i.Z,{effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow)}}),ee=function(e,t){var r
void 0===t&&(t={})
var n,i=e,o=[],s=[],a=t.overrides,l=[],u=!1
function c(){s=i.map((function(e){return v(e.props.triggerTarget||e.reference)})).reduce((function(e,t){return e.concat(t)}),[])}function p(){o=i.map((function(e){return e.reference}))}function d(e){i.forEach((function(t){e?t.enable():t.disable()}))}function h(e){return i.map((function(t){var r=t.setProps
return t.setProps=function(i){r(i),t.reference===n&&e.setProps(i)},function(){t.setProps=r}}))}function f(e,t){var r=s.indexOf(t)
if(t!==n){n=t
var l=(a||[]).concat("content").reduce((function(e,t){return e[t]=i[r].props[t],e}),{})
e.setProps(Object.assign({},l,{getReferenceClientRect:"function"==typeof l.getReferenceClientRect?l.getReferenceClientRect:function(){var e
return null==(e=o[r])?void 0:e.getBoundingClientRect()}}))}}d(!1),p(),c()
var m={fn:function(){return{onDestroy:function(){d(!0)},onHidden:function(){n=null},onClickOutside:function(e){e.props.showOnCreate&&!u&&(u=!0,n=null)},onShow:function(e){e.props.showOnCreate&&!u&&(u=!0,f(e,o[0]))},onTrigger:function(e,t){f(e,t.currentTarget)}}}},y=G(x(),Object.assign({},g(t,["overrides"]),{plugins:[m].concat(t.plugins||[]),triggerTarget:s,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat((null==(r=t.popperOptions)?void 0:r.modifiers)||[],[Q])})})),b=y.show
y.show=function(e){if(b(),!n&&null==e)return f(y,o[0])
if(!n||null!=e){if("number"==typeof e)return o[e]&&f(y,o[e])
if(i.indexOf(e)>=0){var t=e.reference
return f(y,t)}return o.indexOf(e)>=0?f(y,e):void 0}},y.showNext=function(){var e=o[0]
if(!n)return y.show(0)
var t=o.indexOf(n)
y.show(o[t+1]||e)},y.showPrevious=function(){var e=o[o.length-1]
if(!n)return y.show(e)
var t=o.indexOf(n),r=o[t-1]||e
y.show(r)}
var w=y.setProps
return y.setProps=function(e){a=e.overrides||a,w(e)},y.setInstances=function(e){d(!0),l.forEach((function(e){return e()})),i=e,d(!1),p(),c(),l=h(y),y.setProps({triggerTarget:s})},l=h(y),y},te={mouseover:"mouseenter",focusin:"focus",click:"click"}
function re(e,t){var r=[],n=[],i=!1,o=t.target,s=g(t,["target"]),a=Object.assign({},s,{trigger:"manual",touch:!1}),l=Object.assign({touch:R.touch},s,{showOnCreate:!0}),u=G(e,a)
function p(e){if(e.target&&!i){var r=e.target.closest(o)
if(r){var s=r.getAttribute("data-tippy-trigger")||t.trigger||R.trigger
if(!r._tippy&&!("touchstart"===e.type&&"boolean"==typeof l.touch||"touchstart"!==e.type&&s.indexOf(te[e.type])<0)){var a=G(r,l)
a&&(n=n.concat(a))}}}}function d(e,t,n,i){void 0===i&&(i=!1),e.addEventListener(t,n,i),r.push({node:e,eventType:t,handler:n,options:i})}return v(u).forEach((function(e){var t=e.destroy,o=e.enable,s=e.disable
e.destroy=function(e){void 0===e&&(e=!0),e&&n.forEach((function(e){e.destroy()})),n=[],r.forEach((function(e){var t=e.node,r=e.eventType,n=e.handler,i=e.options
t.removeEventListener(r,n,i)})),r=[],t()},e.enable=function(){o(),n.forEach((function(e){return e.enable()})),i=!1},e.disable=function(){s(),n.forEach((function(e){return e.disable()})),i=!0},function(e){var t=e.reference
d(t,"touchstart",p,c),d(t,"mouseover",p),d(t,"focusin",p),d(t,"click",p)}(e)})),u}var ne={name:"animateFill",defaultValue:!1,fn:function(e){var t
if(null==(t=e.props.render)||!t.$$tippy)return{}
var r=q(e.popper),n=r.box,i=r.content,o=e.props.animateFill?function(){var e=x()
return e.className=a,E([e],"hidden"),e}():null
return{onCreate:function(){o&&(n.insertBefore(o,n.firstElementChild),n.setAttribute("data-animatefill",""),n.style.overflow="hidden",e.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(o){var e=n.style.transitionDuration,t=Number(e.replace("ms",""))
i.style.transitionDelay=Math.round(t/10)+"ms",o.style.transitionDuration=e,E([o],"visible")}},onShow:function(){o&&(o.style.transitionDuration="0ms")},onHide:function(){o&&E([o],"hidden")}}}},ie={clientX:0,clientY:0},oe=[]
function se(e){var t=e.clientX,r=e.clientY
ie={clientX:t,clientY:r}}var ae={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,r=A(e.props.triggerTarget||t),n=!1,i=!1,o=!0,s=e.props
function a(){return"initial"===e.props.followCursor&&e.state.isVisible}function l(){r.addEventListener("mousemove",p)}function u(){r.removeEventListener("mousemove",p)}function c(){n=!0,e.setProps({getReferenceClientRect:null}),n=!1}function p(r){var n=!r.target||t.contains(r.target),i=e.props.followCursor,o=r.clientX,s=r.clientY,a=t.getBoundingClientRect(),l=o-a.left,u=s-a.top
!n&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),r=o,n=s
"initial"===i&&(r=e.left+l,n=e.top+u)
var a="horizontal"===i?e.top:n,c="vertical"===i?e.right:r,p="horizontal"===i?e.bottom:n,d="vertical"===i?e.left:r
return{width:c-d,height:p-a,top:a,right:c,bottom:p,left:d}}})}function d(){e.props.followCursor&&(oe.push({instance:e,doc:r}),function(e){e.addEventListener("mousemove",se)}(r))}function h(){0===(oe=oe.filter((function(t){return t.instance!==e}))).filter((function(e){return e.doc===r})).length&&function(e){e.removeEventListener("mousemove",se)}(r)}return{onCreate:d,onDestroy:h,onBeforeUpdate:function(){s=e.props},onAfterUpdate:function(t,r){var o=r.followCursor
n||void 0!==o&&s.followCursor!==o&&(h(),o?(d(),!e.state.isMounted||i||a()||l()):(u(),c()))},onMount:function(){e.props.followCursor&&!i&&(o&&(p(ie),o=!1),a()||l())},onTrigger:function(e,t){S(t)&&(ie={clientX:t.clientX,clientY:t.clientY}),i="focus"===t.type},onHidden:function(){e.props.followCursor&&(c(),u(),o=!0)}}}},le={name:"inlinePositioning",defaultValue:!1,fn:function(e){var t,r=e.reference,n=-1,i=!1,o=[],s={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(i){var s=i.state
e.props.inlinePositioning&&(-1!==o.indexOf(s.placement)&&(o=[]),t!==s.placement&&-1===o.indexOf(s.placement)&&(o.push(s.placement),e.setProps({getReferenceClientRect:function(){return function(e){return function(e,t,r,n){if(r.length<2||null===e)return t
if(2===r.length&&n>=0&&r[0].left>r[1].right)return r[n]||t
switch(e){case"top":case"bottom":var i=r[0],o=r[r.length-1],s="top"===e,a=i.top,l=o.bottom,u=s?i.left:o.left,c=s?i.right:o.right
return{top:a,bottom:l,left:u,right:c,width:c-u,height:l-a}
case"left":case"right":var p=Math.min.apply(Math,r.map((function(e){return e.left}))),d=Math.max.apply(Math,r.map((function(e){return e.right}))),h=r.filter((function(t){return"left"===e?t.left===p:t.right===d})),f=h[0].top,m=h[h.length-1].bottom
return{top:f,bottom:m,left:p,right:d,width:d-p,height:m-f}
default:return t}}(b(e),r.getBoundingClientRect(),w(r.getClientRects()),n)}(s.placement)}})),t=s.placement)}}
function a(){var t
i||(t=function(e,t){var r
return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat(((null==(r=e.popperOptions)?void 0:r.modifiers)||[]).filter((function(e){return e.name!==t.name})),[t])})}}(e.props,s),i=!0,e.setProps(t),i=!1)}return{onCreate:a,onAfterUpdate:a,onTrigger:function(t,r){if(S(r)){var i=w(e.reference.getClientRects()),o=i.find((function(e){return e.left-2<=r.clientX&&e.right+2>=r.clientX&&e.top-2<=r.clientY&&e.bottom+2>=r.clientY})),s=i.indexOf(o)
n=s>-1?s:n}},onHidden:function(){n=-1}}}},ue={name:"sticky",defaultValue:!1,fn:function(e){var t=e.reference,r=e.popper
function n(t){return!0===e.props.sticky||e.props.sticky===t}var i=null,o=null
function s(){var a=n("reference")?(e.popperInstance?e.popperInstance.state.elements.reference:t).getBoundingClientRect():null,l=n("popper")?r.getBoundingClientRect():null;(a&&ce(i,a)||l&&ce(o,l))&&e.popperInstance&&e.popperInstance.update(),i=a,o=l,e.state.isMounted&&requestAnimationFrame(s)}return{onMount:function(){e.props.sticky&&s()}}}}
function ce(e,t){return!e||!t||e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left}G.setDefaultProps({render:z})
const pe=G},,,,(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(192)
function i(e){return Object.assign({},(0,n.Z)(),e)}},(e,t,r)=>{"use strict"
function n(){return{top:0,right:0,bottom:0,left:0}}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
function n(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>i})
var n=r(26)
function i(e){var t=(0,n.Z)(e),r=e.offsetWidth,i=e.offsetHeight
return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}},(e,t,r)=>{"use strict"
function n(){var e=navigator.userAgentData
return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}r.d(t,{Z:()=>n})},(e,t,r)=>{"use strict"
r.d(t,{q:()=>o,u:()=>i})
var n=r(12)
function i(e,t,r){return(0,n.Fp)(e,(0,n.VV)(t,r))}function o(e,t,r){var n=i(e,t,r)
return n>r?r:n}},(e,t,r)=>{"use strict"
r.d(t,{Z:()=>a})
var n=r(11),i=r(28),o=r(150),s=r(3)
function a(e){var t,r=e.reference,a=e.element,l=e.placement,u=l?(0,n.Z)(l):null,c=l?(0,i.Z)(l):null,p=r.x+r.width/2-a.width/2,d=r.y+r.height/2-a.height/2
switch(u){case s.we:t={x:p,y:r.y-a.height}
break
case s.I:t={x:p,y:r.y+r.height}
break
case s.F2:t={x:r.x+r.width,y:d}
break
case s.t$:t={x:r.x-a.width,y:d}
break
default:t={x:r.x,y:r.y}}var h=u?(0,o.Z)(u):null
if(null!=h){var f="y"===h?"height":"width"
switch(c){case s.BL:t[h]=t[h]-(r[f]/2-a[f]/2)
break
case s.ut:t[h]=t[h]+(r[f]/2-a[f]/2)}}return t}},(e,t,r)=>{"use strict"
r.d(t,{fi:()=>f})
var n=r(94),i=r(144),o=r(148),s=r(143),a=r(67),l=r(147),u=r(145),c=r(149),p=r(142),d=r(146),h=[i.Z,o.Z,s.Z,a.Z,l.Z,u.Z,c.Z,p.Z,d.Z],f=(0,n.kZ)({defaultModifiers:h})}]])

//# sourceMappingURL=chunk.660.cfa44cc656d26c5d04fa-d4f8d9ac4f3273ea832a84acc62fa86a13e5920207bac6927d4c800d0b8e7ee2.map
//!
;
