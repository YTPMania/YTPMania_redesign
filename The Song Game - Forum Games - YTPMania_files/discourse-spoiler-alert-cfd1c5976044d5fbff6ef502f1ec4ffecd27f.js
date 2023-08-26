define("discourse/plugins/discourse-spoiler-alert/initializers/spoiler-alert",["exports","discourse/lib/plugin-api","discourse/controllers/composer","discourse/plugins/discourse-spoiler-alert/lib/apply-spoiler","discourse/lib/to-markdown"],(function(e,i,r,t,l){"use strict"
function o(e){e.querySelectorAll(".spoiler").forEach((e=>{e.classList.remove("spoiler"),e.classList.add("spoiled"),(0,t.default)(e)}))}function s(e){e.decorateCookedElement(o,{id:"spoiler-alert"}),e.addToolbarPopupMenuOptionsCallback((()=>({action:"insertSpoiler",icon:"magic",label:"spoiler.title"}))),r.default.reopen({actions:{insertSpoiler(){this.get("toolbarEvent").applySurround("[spoiler]","[/spoiler]","spoiler_text",{multiline:!1,useBlockMode:!0})}}}),(0,l.addTagDecorateCallback)((function(){"spoiled"===this.element.attributes.class&&(this.prefix="[spoiler]",this.suffix="[/spoiler]")})),(0,l.addBlockDecorateCallback)((function(e){const{name:i,attributes:r}=this.element
if("div"===i&&"spoiled"===r.class)return this.prefix="[spoiler]",this.suffix="[/spoiler]",e.trim()}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initializeSpoiler=s
var a={name:"spoiler-alert",initialize(e){e.lookup("site-settings:main").spoiler_enabled&&(0,i.withPluginApi)("1.3.0",s)}}
e.default=a})),define("discourse/plugins/discourse-spoiler-alert/lib/apply-spoiler",["exports","I18n"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){l(e),e.addEventListener("click",(i=>{o(i,e)})),e.addEventListener("keydown",(i=>{"Enter"===i.key&&o(i,e)}))}
const r=["a","area","audio","button","details","embed","iframe","img.animated","input","map","object","option","portal","select","textarea","track","video",".lightbox"].join(", ")
function t(e,i){Object.entries(i).forEach((i=>{let[r,t]=i
null===t?e.removeAttribute(r):e.setAttribute(r,t)}))}function l(e){t(e,{role:"button",tabindex:"0","data-spoiler-state":"blurred","aria-expanded":!1,"aria-label":i.default.t("spoiler.label.show"),"aria-live":"polite"}),e.classList.add("spoiler-blurred"),Array.from(e.children).forEach((e=>{e.setAttribute("aria-hidden",!0)}))}function o(e,i){"blurred"===i.getAttribute("data-spoiler-state")?(function(e){t(e,{"data-spoiler-state":"revealed","aria-expanded":!0,"aria-label":null,role:null}),e.classList.remove("spoiler-blurred"),Array.from(e.children).forEach((e=>{e.removeAttribute("aria-hidden")}))}(i),e.preventDefault()):function(e){return e.defaultPrevented||e.target.closest(r)}(e)||window.getSelection()+""!=""||l(i)}})),define("discourse/plugins/discourse-spoiler-alert/lib/discourse-markdown/spoiler-alert",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["span.spoiler","div.spoiler"]),e.markdownIt?function(e){e.registerOptions(((e,i)=>{e.features["spoiler-alert"]=!!i.spoiler_enabled})),e.registerPlugin((e=>{e.inline.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"span.spoiler"}),e.block.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"div.spoiler"})}))}(e):e.addPreProcessor(t)}
const i=/\n|<img|!\[[^\]]*\][(\[]/
function r(e,r){const t=i.test(r)?"div":"span"
return`<${t} class='spoiler'>${r}</${t}>`}function t(e){for(e=e||"";e!==(e=e.replace(/\[spoiler\]((?:(?!\[spoiler\]|\[\/spoiler\])[\S\s])*)\[\/spoiler\]/gi,r)););return e}}))

//# sourceMappingURL=discourse-spoiler-alert-c5f0574cf69e29757eef1259e58cf2112aa96aa881d3d464fe122d1f09a7c282.map
//!

;
