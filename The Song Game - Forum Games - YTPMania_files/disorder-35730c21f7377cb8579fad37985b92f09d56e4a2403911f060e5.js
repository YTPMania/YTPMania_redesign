define("discourse/plugins/disorder/discourse/initializers/disorder-composer",["exports","discourse/lib/plugin-api","@ember/template","I18n"],(function(e,r,d,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"disorder-composer-setup",initialize(e){(0,r.withPluginApi)("1.5.0",(r=>{r.modifyClass("model:composer",{pluginId:"disorder",disorderWarned:!0})
const o=e.lookup("service:dialog"),i=e.lookup("service:site-settings")
r.addComposerSaveErrorCallback((e=>{if(e.match(/Disorder detected/)){let e=document.querySelector(".topic-post.staged.current-user-post .cooked").innerHTML,s=`\n            <h2 class="disorder-modal-before-post">\n              ${t.default.t("disorder.modal.title")}\n            </h2>\n            <p>\n              ${t.default.t("disorder.modal.before_quote")}\n            </p>\n            <aside class="quote disorder-content-preview">\n            <div class="title" style="cursor: pointer;" data-has-quote-controls="true" dir="ltr">\n              <img loading="lazy" alt="" src="${r.getCurrentUser().avatar_template.replace("{size}","20")}" class="avatar" style="aspect-ratio: 20 / 20;" width="20" height="20">\n              ${r.getCurrentUser().username}:\n            </div>\n              <blockquote>${e}</blockquote>\n            </aside>\n            <p>\n              ${t.default.t("disorder.modal.after_quote_1")} \n              <a href="/tos">${t.default.t("conduct")}</a>.\n            </p>\n            <p>\n              ${t.default.t("disorder.modal.after_quote_2")}\n            </p>\n            <p><b>${i.disorder_warn_posting_above_toxicity,t.default.t("disorder.modal.action_line_warning")}</b></p>\n          `
return o.alert({message:(0,d.htmlSafe)(s)}),r.serializeOnCreate("disorder_warned","disorderWarned"),r.serializeOnUpdate("disorder_warned","disorderWarned"),r.serializeToTopic("disorder_warned","disorderWarned"),!0}}))}))}}
e.default=o}))

//# sourceMappingURL=disorder-727c1a937278a7c85220ba0677ac24c4c6106064aa53f58fe25f8cabef5e26ad.map
//!

;
