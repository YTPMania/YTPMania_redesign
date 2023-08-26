"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(14,{blog_category:"off-topic-lounge-blogging",blog_tag:"",image_display_style:"responsive crop",mobile_enabled:!1,no_images:!1,full_width:!1}),"define"in window&&define("discourse/theme-14/blog-post-styling/components/blog-image",["exports","discourse/models/category","@ember/component","discourse-common/utils/decorators"],(function(e,i,t,o){"use strict"
var r,l,s
function n(e,i,t,o,r){var l={}
return Object.keys(o).forEach((function(e){l[e]=o[e]})),l.enumerable=!!l.enumerable,l.configurable=!!l.configurable,("value"in l||l.initializer)&&(l.writable=!0),l=t.slice().reverse().reduce((function(t,o){return o(e,i,t)||t}),l),r&&void 0!==l.initializer&&(l.value=l.initializer?l.initializer.call(r):void 0,l.initializer=void 0),void 0===l.initializer&&(Object.defineProperty(e,i,l),l=null),l}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const a=require("discourse/lib/theme-settings-store").getObjectForTheme(14)
var c=t.default.extend((r=(0,o.default)("topic.category_id","topic.tags"),l=(0,o.default)("topic.thumbnails"),n(s={isBlogTopic:!1,imageURL:null,isBlogTopic(e,t){let o=!1,r=!1
if(a.no_images)return!1
if(e){const t=a.blog_category.split(","),r=i.default.findById(e),l=r.parentCategory?`${r.parentCategory.slug}-`:""
o=t.some((e=>e.trim()===`${l}${r.slug}`))}if(t){r=a.blog_tag.split("|").some((e=>t.includes(e)))}return o||r},imageURL(e){if(e)return e[0].url}},"isBlogTopic",[r],Object.getOwnPropertyDescriptor(s,"isBlogTopic"),s),n(s,"imageURL",[l],Object.getOwnPropertyDescriptor(s,"imageURL"),s),s))
e.default=c})),"define"in window&&define("discourse/theme-14/discourse/templates/connectors/topic-above-post-stream/blog-post-styling",["exports","@ember/template-factory"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=(0,i.createTemplateFactory)({id:null,block:'[[[1,[28,[35,0],null,[["topic"],[[33,1]]]]]],[],false,["blog-image","model"]]',moduleName:"discourse/theme-14/discourse/templates/connectors/topic-above-post-stream/blog-post-styling",isStrictMode:!1})
e.default=t})),"define"in window&&define("discourse/theme-14/discourse/templates/components/blog-image",["exports","@ember/template-factory"],(function(e,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=(0,i.createTemplateFactory)({id:null,block:'[[[41,[33,1],[[[41,[33,2],[[[1,"  "],[10,0],[14,0,"blog-image-container"],[12],[1,"\\n    "],[10,0],[14,0,"blog-image"],[15,5,[29,["background-image: url(\'",[36,2],"\')"]]],[12],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[]],null]],[],false,["if","isBlogTopic","imageURL"]]',moduleName:"discourse/theme-14/discourse/templates/components/blog-image",isStrictMode:!1})
e.default=t}))

//# sourceMappingURL=f14243fb339023b42c69cc0996755cb63e90881f.map?__ws=ytpmania.net
