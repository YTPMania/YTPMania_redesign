"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(57,{Hamburger_links:"Moderator Policy,/pub/moderator-policy,f,blank"}),"define"in window&&define("discourse/theme-57/api-initializers/init-custom-hamburger-links",["exports","discourse/lib/api"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=require("discourse/lib/theme-settings-store").getObjectForTheme(57)
var t=(0,i.apiInitializer)("0.8.18",(e=>{(r.Hamburger_links||"").split("|").forEach((i=>{let[r,t,s,a]=(i||"").split(","),o=`custom-hamburger-link ${r.replace(/\s+/g,"-").toLowerCase()}`
s="f"===s?"footerLinks":"generalLinks",a="blank"===a?"_blank":"",e.decorateWidget(`hamburger-menu:${s}`,(()=>({href:t,rawLabel:r,className:o,attributes:{target:a}})))}))}))
e.default=t}))

//# sourceMappingURL=dca796c8bd91fd985311c71dd817a62df9be46b9.map?__ws=ytpmania.net
