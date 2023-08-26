define("discourse/plugins/discourse-post-badges-plugin/discourse/connectors/user-preferences-profile/user-featured-badges",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s={setupComponent(e,s){e.model.custom_fields.featured_badges&&s.set("featuredBadges",e.model.custom_fields.featured_badges.split(",").map((e=>Number(e)))),s.addObserver("featuredBadges",(function(){if("destroying"===this._state)return
let t=s.get("featuredBadges")
t&&(e.model.custom_fields.featured_badges=t.join(","))}))}}
e.default=s})),define("discourse/plugins/discourse-post-badges-plugin/discourse/initializers/initialize-discourse-post-badges",["exports","discourse/lib/ajax","discourse/lib/plugin-api","discourse-common/lib/icon-library","@ember/runloop","discourse-common/lib/helpers"],(function(e,s,t,r,i,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const a=["badge-type-gold","badge-type-silver","badge-type-bronze"],n=["basic","member","regular","leader"]
function d(e,s){const t=`[data-post-id="${s.attrs.id}"] .poster-icon-container`
let a="",d=0
const u=[]
e.forEach((e=>{u.push(function(e){let s
if(e.imageUrl){const t=document.createElement("img")
t.setAttribute("src",e.imageUrl),s=t.outerHTML}else e.icon&&(s=(0,r.iconHTML)(e.icon))
if(e.url){const t=document.createElement("a")
t.setAttribute("href",e.url),t.innerHTML=s,s=t}const t=document.createElement("span")
return t.classList.add("poster-icon"),t.classList.add(e.className),t.classList.add(n[e.id-1]),t.setAttribute("title",e.title),t.appendChild(s),t}(e)),4===e.badgeGroup&&e.id>d&&(d=e.id,a=`${n[d-1]}-highest`)})),(0,i.schedule)("afterRender",(()=>{const e=document.querySelector(t)
e&&(e.innerHTML="",a&&e.classList.add(a),(0,o.helperContext)().siteSettings.post_badges_only_show_highest_trust_level&&e.classList.add("show-highest"),u.forEach((s=>e.appendChild(s))))}))}var u={name:"discourse-post-badges-plugin",initialize(){(0,t.withPluginApi)("0.8.25",(e=>{const s=Discourse.Site.currentProp("mobileView")?"before":"after"
e.includePostAttributes("user_badges"),e.decorateWidget(`poster-name:${s}`,(e=>{let s=function(e,s){let t=""
return"user's badge page"===(0,o.helperContext)().siteSettings.post_badges_badge_link_destination&&(t=`?username=${e}`),(0,o.makeArray)(s).map((e=>({icon:e.icon.replace("fa-",""),imageUrl:e.image_url,className:a[e.badge_type_id-1],name:e.slug,id:e.id,badgeGroup:e.badge_grouping_id,title:e.description.replace(/<\/?[^>]+(>|$)/g,""),url:`/badges/${e.id}/${e.slug}${t}`})))}(e.attrs.username,e.attrs.user_badges)
return d(s,e),e.h("div.poster-icon-container",{},[])}))}))}}
e.default=u})),define("discourse/plugins/discourse-post-badges-plugin/discourse/templates/connectors/user-preferences-profile/user-featured-badges",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=(0,s.createTemplateFactory)({id:"ZfhN4/Sm",block:'[[[10,0],[14,0,"control-group pref-website"],[12],[1,"\\n  "],[10,"label"],[14,0,"control-label"],[12],[1,[28,[35,0],["user.featured_badges.label"],null]],[13],[1,"\\n  "],[10,0],[14,0,"controls"],[12],[1,"\\n    "],[1,[28,[35,1],null,[["content","value","none","maximum","onChange"],[[33,2,["badges"]],[33,3],"user.featured_badges.none",3,[28,[37,4],[[30,0],[28,[37,5],[[33,3]],null]],null]]]]],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"instructions"],[12],[1,"\\n    "],[1,[28,[35,0],["user.featured_badges.description"],null]],[1,"\\n  "],[13],[1,"\\n"],[13]],[],false,["i18n","multi-select","model","featuredBadges","action","mut"]]',moduleName:"discourse/plugins/discourse-post-badges-plugin/discourse/templates/connectors/user-preferences-profile/user-featured-badges.hbs",isStrictMode:!1})
e.default=t}))

//# sourceMappingURL=discourse-post-badges-plugin-8e9939d22acaeef92ffe0818c4db267c538778b47f239fabc8b98380ba6b50da.map
//!

;
