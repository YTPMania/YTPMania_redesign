"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(13,{minimum_trust_level_to_create_TOC:0,composer_toc_text:"This topic will contain a table of contents",table_of_contents_icon:"align-left",anchor_icon:"hashtag",theme_uploads:{"icons-sprite":"/uploads/default/original/2X/8/80ed408554201b1aea5b03b7b3a2ab0b0be0a012.svg"}}),"define"in window&&define("discourse/theme-13/discourse/templates/connectors/after-topic-progress/d-toc-mini",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,t.createTemplateFactory)({id:null,block:'[[[1,[28,[35,0],null,[["class","action","label"],["btn-primary",[28,[37,1],[[30,0],"showTOCOverlay"],null],[28,[37,2],[13,"table_of_contents"],null]]]]],[1,"\\n"]],[],false,["d-button","action","theme-prefix"]]',moduleName:"discourse/theme-13/discourse/templates/connectors/after-topic-progress/d-toc-mini",isStrictMode:!1})
e.default=o})),"define"in window&&define("discourse/theme-13/connectors/after-topic-progress/d-toc-mini",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(13)
var t={actions:{showTOCOverlay(){document.querySelector(".d-toc-wrapper").classList.toggle("overlay")}}}
e.default=t})),"define"in window&&define("discourse/theme-13/discourse/templates/connectors/below-docs-topic/d-toc-wrapper",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,t.createTemplateFactory)({id:null,block:"[[],[],false,[]]",moduleName:"discourse/theme-13/discourse/templates/connectors/below-docs-topic/d-toc-wrapper",isStrictMode:!1})
e.default=o})),"define"in window&&define("discourse/theme-13/discourse/templates/connectors/topic-navigation/d-toc-wrapper",["exports","@ember/template-factory"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=(0,t.createTemplateFactory)({id:null,block:"[[],[],false,[]]",moduleName:"discourse/theme-13/discourse/templates/connectors/topic-navigation/d-toc-wrapper",isStrictMode:!1})
e.default=o})),"define"in window&&define("discourse/theme-13/initializers/disco-toc-composer",["exports","I18n","discourse/lib/plugin-api"],(function(e,t,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const c=require("discourse/lib/theme-settings-store").getObjectForTheme(13)
var i={name:"disco-toc-composer",initialize(){(0,o.withPluginApi)("1.0.0",(e=>{const o=e.getCurrentUser()
if(!o)return
const i=c.minimum_trust_level_to_create_TOC
o.trust_level>=i&&(t.default.translations[t.default.currentLocale()].js.composer||(t.default.translations[t.default.currentLocale()].js.composer={}),t.default.translations[t.default.currentLocale()].js.composer.contains_dtoc=" ",e.modifyClass("controller:composer",{pluginId:"DiscoTOC",actions:{insertDtoc(){this.get("toolbarEvent").applySurround('<div data-theme-toc="true">',"</div>","contains_dtoc")}}}),e.addToolbarPopupMenuOptionsCallback((e=>{return{action:"insertDtoc",icon:"align-left",label:(t="insert_table_of_contents",`theme_translations.13.${t}`),condition:e.get("model.topicFirstPost")}
var t})))}))}}
e.default=i})),"define"in window&&define("discourse/theme-13/initializers/disco-toc-main",["exports","discourse-common/utils/dom-utils","discourse/lib/offset-calculator","discourse-common/lib/icon-library","@ember/runloop","discourse/lib/utilities","discourse/lib/plugin-api","I18n"],(function(e,t,o,c,i,r,s,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(13)
var a={name:"disco-toc-main",initialize(){(0,s.withPluginApi)("1.0.0",(e=>{e.decorateCookedElement(((e,t)=>{if(t){const o=t.getModel()
if(1!==o?.post_number)return
if(!e.querySelector('[data-theme-toc="true"]'))return void document.body.classList.remove("d-toc-timeline-visible")
let c=":scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5"
const s=e.querySelectorAll(c)
if(s.length<1)return
s.forEach(((e,t)=>{const o=(0,r.slugify)(e.textContent)||t,c=e.getAttribute("id")||(0,r.slugify)(`toc-${e.nodeName}-${o}`)
e.setAttribute("id",c),e.setAttribute("data-d-toc",c),e.classList.add("d-toc-post-heading")})),e.classList.add("d-toc-cooked"),document.querySelector(".d-toc-wrapper")?this.insertTOC(s):(0,i.later)((()=>{document.querySelector(".d-toc-wrapper")&&this.insertTOC(s)}),300)}}),{id:"disco-toc",onlyStream:!0,afterAdopt:!0}),e.onAppEvent("topic:current-post-changed",(e=>{document.querySelector(".d-toc-cooked")&&(1===e.post.post_number?document.body.classList.add("d-toc-timeline-visible"):document.body.classList.remove("d-toc-timeline-visible"))})),e.onAppEvent("docs-topic:current-post-scrolled",(()=>{this.updateTOCSidebar()})),e.onAppEvent("topic:current-post-scrolled",(e=>{1===e.postIndex&&this.updateTOCSidebar()})),e.cleanupStream((()=>{document.body.classList.remove("d-toc-timeline-visible"),document.removeEventListener("click",this.clickTOC,!1)}))}))},updateTOCSidebar(){if(!document.querySelector(".d-toc-cooked"))return
const e=document.querySelectorAll(".d-toc-post-heading")
let c=null,i=null
if(e.forEach((e=>{const r=Math.abs(t.default.offset(e).top-(0,o.headerOffset)()-window.scrollY)
if(!(null==c||r<c))return!1
c=r,i=e})),i){document.querySelectorAll("#d-toc li").forEach((e=>{e.classList.remove("active"),e.classList.remove("direct-active")}))
const e=document.querySelector(`#d-toc a[data-d-toc="${i.getAttribute("id")}"]`)
if(!e)return
e.parentElement.classList.add("direct-active"),function(e,t,o){const c=[],i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector
e=e.parentElement
for(;e&&!i.call(e,t);)o?i.call(e,o)&&c.push(e):c.push(e),e=e.parentElement
return c}(e,"#d-toc",".d-toc-item").forEach((e=>{e.classList.add("active")}))}},insertTOC(e){const t=document.createElement("div")
var o
t.classList.add("d-toc-main"),t.innerHTML=`<div class="d-toc-icons">\n              <a href="" class="scroll-to-bottom" title="${n.default.t((o="post_bottom_tooltip",`theme_translations.13.${o}`))}">${(0,c.iconHTML)("downward")}</a>\n              <a href="" class="d-toc-close">${(0,c.iconHTML)("times")}</a></div>`
const i=document.querySelector(".d-toc-wrapper .d-toc-main")
i?document.querySelector(".d-toc-wrapper").replaceChild(t,i):document.querySelector(".d-toc-wrapper").appendChild(t)
const r=this.buildTOC(Array.from(e))
document.querySelector(".d-toc-main").appendChild(r),document.addEventListener("click",this.clickTOC,!1)},clickTOC(e){if(["d-toc-timeline-visible","archetype-docs-topic"].some((e=>document.body.classList.contains(e)))){if(e.target.closest(".d-toc-item")&&e.target.hasAttribute("data-d-toc")){const c=`#${e.target.getAttribute("data-d-toc")}`,i=t.default.offset(document.querySelector(`.d-toc-cooked ${c}`)).top
return window.scrollTo({top:i-(0,o.headerOffset)()-10,behavior:"smooth"}),document.querySelector(".d-toc-wrapper").classList.remove("overlay"),e.preventDefault(),!1}if(e.target.closest("a")){if(e.target.closest("a").classList.contains("scroll-to-bottom")){const t=document.querySelector(".d-toc-cooked").getBoundingClientRect()
if(t)return window.scrollTo({top:t.bottom+window.scrollY-(0,o.headerOffset)()-10,behavior:"smooth"}),e.preventDefault(),!1}if(e.target.closest("a").classList.contains("d-toc-close"))return document.querySelector(".d-toc-wrapper").classList.remove("overlay"),e.preventDefault(),!1}document.querySelector(".d-toc-wrapper.overlay")&&(e.target.closest(".d-toc-wrapper.overlay")||document.querySelector(".d-toc-wrapper").classList.remove("overlay"))}},buildTOC(e){const t=document.createElement("div")
t.setAttribute("id","d-toc")
const o=e[0].tagName,c=e.filter((e=>e.tagName===o))
let i=e.length
return c.forEach(((o,r)=>{const s=document.createElement("ul")
s.classList.add("d-toc-heading")
let n=this.buildItem(o)
s.appendChild(n)
const a=e.indexOf(o)
i=c[r+1]?e.indexOf(c[r+1]):e.length,e.forEach(((e,t)=>{if(t>a&&t<i){let t=n.lastChild
"UL"!==t.tagName&&(t=t.appendChild(document.createElement("ul")),t.classList.add("d-toc-sublevel"),n.appendChild(t))
let o=this.buildItem(e)
t.appendChild(o)}})),t.appendChild(s)})),t},buildItem(e){let t=e.cloneNode(!0)
t.querySelector("span.clicks")?.remove()
const o=document.createElement("li")
return o.classList.add("d-toc-item"),o.classList.add(`d-toc-${t.tagName.toLowerCase()}`),o.innerHTML=`<a data-d-toc="${t.getAttribute("id")}">${t.textContent}</a>`,t.remove(),o}}
e.default=a}))

//# sourceMappingURL=1c6f3a704c75a53f8be78862545ea126edafaca3.map?__ws=ytpmania.net
