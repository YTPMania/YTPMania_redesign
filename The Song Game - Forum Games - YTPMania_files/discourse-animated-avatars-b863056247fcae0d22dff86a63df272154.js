define("discourse/plugins/discourse-animated-avatars/app/helpers/animated-bound-avatar",["exports","discourse-common/lib/helpers","discourse/lib/utilities","discourse/helpers/bound-avatar"],(function(e,a,t,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,a.htmlHelper)(((e,a)=>{const n=(0,r.default)(e,a)
return null==e.animated_avatar||(0,t.prefersReducedMotion)()||(n.string=n.string.replace(/\.png/,".gif")),n}))
e.default=n})),define("discourse/plugins/discourse-animated-avatars/discourse/templates/components/user-profile-avatar",["exports","@ember/template-factory"],(function(e,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=(0,a.createTemplateFactory)({id:"swDSWCCW",block:'[[[10,0],[14,0,"user-profile-avatar"],[12],[1,"\\n  "],[1,[28,[35,0],[[30,1],"huge"],null]],[1,"\\n  "],[8,[39,1],null,[["@user"],[[30,1]]],null],[1,"\\n"],[1,"  "],[8,[39,2],null,[["@name","@connectorTagName","@args","@tagName"],["user-profile-avatar-flair","div",[28,[37,3],null,[["model"],[[30,1]]]],"div"]],null],[1,"\\n"],[13]],["@user"],false,["animated-bound-avatar","user-avatar-flair","plugin-outlet","hash"]]',moduleName:"discourse/plugins/discourse-animated-avatars/discourse/templates/components/user-profile-avatar.hbs",isStrictMode:!1})
e.default=t})),define("discourse/plugins/discourse-animated-avatars/initializers/animated-avatars",["exports","discourse/lib/utilities","@ember/runloop","discourse/lib/plugin-api"],(function(e,a,t,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let n=[],i=!0
function s(e){document.querySelector("#user-card.show")||l(e)}function l(e){if(e&&i){e.src.replace(/\.png$/,".gif")!==e.src&&(e.src=e.src.replace(/\.png$/,".gif"),n.push(e))}}function o(e){if(e){e.src.replace(/\.gif$/,".png")!==e.src&&(e.src=e.src.replace(/\.gif$/,".png")),n=n.filter((a=>a!==e))}}function u(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
n?.forEach((e=>{e.src=e.src.replace(/\.gif$/,".png")})),e?i=!1:n=[]}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return t=>{const r=null!=e?t.target.closest(e):t.target
if(document.elementsFromPoint(t.clientX,t.clientY).some((e=>e===r)))return
const n=null!=a?r?.querySelectorAll(a):[r]
n?.forEach((e=>{o(e)}))}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return t=>{const r=null!=e?t.target.closest(e):t.target,n=null!=a?r?.querySelectorAll(a):[r]
n?.forEach((e=>{s(e)}))}}var v={name:"animated-avatars",initialize(){(0,r.withPluginApi)("0.8.7",(e=>{if((0,a.prefersReducedMotion)())return
window.addEventListener("blur",this.blurEvent),window.addEventListener("focus",this.focusEvent),e.customUserAvatarClasses((e=>null!=e?.animated_avatar?["animated-avatar"]:[])),e.includePostAttributes("animated_avatar"),e.addPostClassesCallback((e=>null!=e?.animated_avatar?["animated-avatar"]:[])),e.onAppEvent("user-card:after-show",(()=>{(0,t.next)((()=>{u(),l(document.querySelector("#user-card img.animated-avatar"))}))}))
e.container.lookup("service:site-settings").animated_avatars_always_animate?e.reopenWidget("post",{didRenderWidget(){this.attrs.animated_avatar&&this.siteSettings.animated_avatars_always_animate&&document.querySelectorAll(".animated-avatar .main-avatar img.avatar").forEach((e=>{e.src=e.src.replace(/\.png$/,".gif")}))}}):(e.onAppEvent("keyboard:move-selection",(e=>{let{articles:a,selectedArticle:t}=e
a?.forEach((e=>{e.classList.contains("animated-avatar")&&o(e.querySelector(".main-avatar img.avatar"))})),t.classList.contains("animated-avatar")&&s(t.querySelector(".main-avatar img.avatar"))})),e.reopenWidget("post",{mouseOver:d(".animated-avatar",".main-avatar>.avatar"),mouseOut:c(".animated-avatar",".main-avatar>.avatar")}))}))},blurEvent(){u(!0)},focusEvent(){i=!0,n?.forEach((e=>{e.src=e.src.replace(/\.png$/,".gif")}))},teardown(){window.removeEventListener("blur",this.blurEvent),window.removeEventListener("focus",this.focusEvent)}}
e.default=v}))

//# sourceMappingURL=discourse-animated-avatars-0fb28c6573069e14b642f8402f0c78ee558f524a8935c4d73b4cc7d8229d4279.map
//!

;
