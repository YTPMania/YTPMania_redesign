define("discourse/plugins/discourse-signatures/discourse/initializers/extend-for-signatures",["exports","discourse/lib/plugin-api","discourse/widgets/raw-html","@ember/utils"],(function(e,s,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"extend-for-signatures",initialize(e){const n=e.lookup("site-settings:main")
n.signatures_enabled&&((0,s.withPluginApi)("0.1",(e=>function(e,s){e.includePostAttributes("user_signature"),e.decorateWidget("post-contents:after-cooked",(n=>{const r=n.attrs
if((0,i.isEmpty)(r.user_signature))return
const u=e.getCurrentUser()
let l
return l=u?u.get("custom_fields.see_signatures")??s.signatures_visible_by_default:s.signatures_visible_by_default,l?s.signatures_advanced_mode?[n.h("hr"),n.h("div",new t.default({html:`<div class='user-signature'>${r.user_signature}</div>`}))]:[n.h("hr"),n.h("img.signature-img",{attributes:{src:r.user_signature}})]:void 0}))}(e,n))),(0,s.withPluginApi)("0.1",(e=>function(e){e.modifyClass("controller:preferences/profile",{pluginId:"discourse-signatures",actions:{save(){this.set("model.custom_fields.see_signatures",this.get("model.see_signatures")),this.get("saveAttrNames").push("custom_fields"),this._super()}}})}(e))))}}
e.default=n})),define("discourse/plugins/discourse-signatures/discourse/templates/connectors/user-custom-preferences/signature-preferences",["exports","@ember/template-factory"],(function(e,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=(0,s.createTemplateFactory)({id:"CRRpid/S",block:'[[[41,[33,1,["signatures_enabled"]],[[[1,"  "],[10,0],[14,0,"control-group signatures"],[12],[1,"\\n    "],[10,"label"],[14,0,"control-label"],[12],[1,[28,[35,2],["signatures.enable_signatures"],null]],[13],[1,"\\n    "],[10,0],[14,0,"controls"],[12],[1,"\\n      "],[10,"label"],[14,0,"checkbox-label"],[12],[1,"\\n        "],[8,[39,3],null,[["@type","@checked"],["checkbox",[33,4,["see_signatures"]]]],null],[1,"\\n        "],[1,[28,[35,2],["signatures.show_signatures"],null]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"control-group signatures"],[12],[1,"\\n    "],[10,"label"],[14,0,"control-label"],[12],[1,[28,[35,2],["signatures.my_signature"],null]],[13],[1,"\\n    "],[10,0],[14,0,"controls bio-composer input-xxlarge"],[12],[1,"\\n"],[41,[33,1,["signatures_advanced_mode"]],[[[1,"        "],[8,[39,5],null,[["@value","@showUploadModal"],[[33,4,["custom_fields","signature_raw"]],"showUploadModal"]],null],[1,"\\n"]],[]],[[[1,"        "],[10,"label"],[14,0,"text-label"],[12],[1,"\\n          "],[8,[39,3],[[24,0,"input-xxlarge"]],[["@type","@value"],["text",[33,4,["custom_fields","signature_url"]]]],null],[1,"\\n        "],[13],[1,"\\n"]],[]]],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","siteSettings","i18n","input","model","d-editor"]]',moduleName:"discourse/plugins/discourse-signatures/discourse/templates/connectors/user-custom-preferences/signature-preferences.hbs",isStrictMode:!1})
e.default=t}))

//# sourceMappingURL=discourse-signatures-172c48ac04c6679c03839c28bb7512c4a8d52a49def4f4d4d5bee4d7ee143481.map
//!

;
