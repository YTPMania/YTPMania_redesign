define("discourse/plugins/checklist/discourse/initializers/checklist",["exports","discourse/lib/plugin-api","discourse/lib/ajax","discourse-common/lib/icon-library","I18n"],(function(e,n,t,c,s){"use strict"
function i(e){return 3===e.nodeType&&e.nodeValue.match(/^\s*$/)}function a(e){e.forEach((e=>{let n=e.parentElement
"P"===n.nodeName&&n.parentElement.firstElementChild===n&&(n=n.parentElement),"LI"!==n.nodeName||"UL"!==n.parentElement.nodeName||function(e){let n=e.previousSibling
for(;n;){if(!i(n))return!0
n=n.previousSibling}return!1}(e)||(n.classList.add("has-checkbox"),e.classList.add("list-item-checkbox"),e.nextSibling||e.insertAdjacentHTML("afterend","&#8203;"))}))}function o(e,n){const i=[...e.getElementsByClassName("chcklst-box")]
if(a(i),!n)return
const o=n.widget,r=n.getModel()
r.can_edit&&i.forEach(((e,n)=>{e.onclick=async e=>{const a=e.currentTarget,l=a.classList
if(l.contains("permanent")||l.contains("readonly"))return
const d=l.contains("checked")?"[ ]":"[x]",f=document.createElement("template")
f.innerHTML=(0,c.iconHTML)("spinner",{class:"fa-spin"}),a.insertAdjacentElement("afterend",f.content.firstChild),a.classList.add("hidden"),i.forEach((e=>e.classList.add("readonly")))
try{const e=await(0,t.ajax)(`/posts/${r.id}`),c=[];[/`[^`\n]*\n?[^`\n]*`/gm,/^```[^]*?^```/gm,/\[code\][^]*?\[\/code\]/gm,/_(?=\S).*?\S_/gm,/~~(?=\S).*?\S~~/gm].forEach((n=>{let t
for(;null!=(t=n.exec(e.raw));)c.push([t.index,t.index+t[0].length])})),[/([^\[\n]|^)\*\S.+?\S\*(?=[^\]\n]|$)/gm].forEach((n=>{let t
for(;null!=(t=n.exec(e.raw));)c.push([t.index+1,t.index+t[0].length])}))
let i=-1,a=!1
const l=e.raw.replace(/\[(\s|\_|\-|\x|\\?\*)?\]/gi,((e,t,s)=>a?e:(i+=c.every((n=>n[0]>=s+e.length||s>n[1])),i===n?(a=!0,d):e)))
await r.save({raw:l,edit_reason:s.default.t("checklist.edit_reason")}),o.attrs.isSaving=!1,o.scheduleRerender()}finally{(function(e){e.forEach((e=>e.classList.remove("readonly")))})(i)}}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.checklistSyntax=o,e.default=void 0
var r={name:"checklist",initialize(){(0,n.withPluginApi)("0.1",(e=>function(e){e.container.lookup("site-settings:main").checklist_enabled&&e.decorateCookedElement(o,{id:"checklist"})}(e)))}}
e.default=r})),define("discourse/plugins/checklist/lib/discourse-markdown/checklist",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.registerOptions(((e,n)=>{e.features.checklist=!!n.checklist_enabled})),e.allowList(["span.chcklst-stroked","span.chcklst-box fa fa-square-o fa-fw","span.chcklst-box checked fa fa-check-square-o fa-fw","span.chcklst-box checked permanent fa fa-check-square fa-fw"]),e.registerPlugin((e=>e.core.ruler.push("checklist",s)))}
const n=/\[(\s?|x|X)\]/g
function t(e,n,t,c){const s=function(e){switch(e){case"x":return"checked fa fa-check-square-o fa-fw"
case"X":return"checked permanent fa fa-check-square fa-fw"
default:return"fa fa-square-o fa-fw"}}(t[1]),i=new c.Token("check_open","span",1)
i.attrs=[["class",`chcklst-box ${s}`]],e.push(i)
const a=new c.Token("check_close","span",-1)
e.push(a)}function c(e,c){let s,i=null,a=0
for(;s=n.exec(e);){if(s.index>a){i=i||[]
const n=new c.Token("text","",0)
n.content=e.slice(a,s.index),i.push(n)}a=s.index+s[0].length,i=i||[],t(i,0,s,c)}if(i&&a<e.length){const n=new c.Token("text","",0)
n.content=e.slice(a),i.push(n)}return i}function s(e){let n,t,s,i,a,o=e.tokens,r=0
for(t=0,s=o.length;t<s;t++)if("inline"===o[t].type)for(i=o[t].children,n=i.length-1;n>=0;n--)if(a=i[n],r+=a.nesting,"text"===a.type&&0===r){const s=c(a.content,e)
s&&(o[t].children=i=e.md.utils.arrayReplaceAt(i,n,s))}}}))

//# sourceMappingURL=checklist-47504201a3c777a0f3c1e5684e370013debab3436da2012140f42d72bed6f506.map
//!

;
