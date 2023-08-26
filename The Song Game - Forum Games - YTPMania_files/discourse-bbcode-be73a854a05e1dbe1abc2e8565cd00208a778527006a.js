define("discourse/plugins/discourse-bbcode/lib/discourse-markdown/bbcode",["exports","I18n"],(function(t,e){"use strict"
function s(t,e,s){return function(l,o,a){l.tag=o.tag=t,l.content=o.content="",l.type="bbcode_open",o.type="bbcode_close",l.nesting=1,o.nesting=-1,l.attrs=[[e,s?s(a):a.attrs._default]]}}function l(t){const l=t.inline.bbcode.ruler
l.push("size",{tag:"size",wrap:s("span","style",(t=>"font-size:"+t.attrs._default.trim()+"%"))}),l.push("font",{tag:"font",wrap:s("span","style",(t=>`font-family:'${t.attrs._default.trim()}'`))}),l.push("color",{tag:"color",wrap:s("span","style",(t=>"color:"+t.attrs._default.trim()))}),l.push("bgcolor",{tag:"bgcolor",wrap:s("span","style",(t=>"background-color:"+t.attrs._default.trim()))}),l.push("highlight",{tag:"highlight",wrap:"span.highlight"}),l.push("small",{tag:"small",wrap:s("span","style",(()=>"font-size:x-small"))}),l.push("aname",{tag:"aname",wrap:s("a","name")}),l.push("jumpto",{tag:"jumpto",wrap:s("a","href",(t=>"#"+t.attrs._default))}),["left","right","center"].forEach((e=>{t.block.bbcode.ruler.push(e,{tag:e,wrap:function(t){return t.attrs=[["style","text-align:"+e]],!0}})})),t.block.bbcode.ruler.push("indent",{tag:"indent",wrap:"blockquote.indent"}),["ot","edit"].forEach((s=>{t.block.bbcode.ruler.push("ot",{tag:s,before:function(t){let l=t.push("sepquote_open","div",1)
l.attrs=[["class","sepquote"]],l=t.push("span_open","span",1),l.block=!1,l.attrs=[["class","smallfont"]],l=t.push("text","",0),l.content=e.default.t("bbcode."+s),l=t.push("span_close","span",-1),t.push("soft_break","br",0),t.push("soft_break","br",0)},after:function(t){t.push("sepquote_close","div",-1)}})})),["list","ul","ol"].forEach((e=>{t.block.bbcode.ruler.push(e,{tag:e,replace:function(t,s,l){let o,a="ol"===e||"list"===e&&s.attrs._default
a?(o=t.push("ordered_list_open","ol",1),s.attrs._default&&(o.attrs=[["type",s.attrs._default]])):t.push("bullet_list_open","ul",1)
let n=l.split("\n"),r=[null],i=0
for(let e=0;e<n.length;e++){let t=n[e],s=t.match(/^\s*\[?\*\]?(.*)/)
s?(i++,r[i]=s[1]):(s=t.match(/\s*\[li\](.*)\[\/li\]\s*$/),s?(i++,r[i]=s[1]):r[i]?r[i]+="\n"+t:r[i]=t)}return r.forEach((e=>{null!==e&&(t.push("list_item_open","li",1),o=t.push("inline","",0),o.content=e,o.children=[],t.push("list_item_close","li",-1))})),a?t.push("ordered_list_close","ol",-1):t.push("bullet_list_close","ul",-1),!0}})}))}Object.defineProperty(t,"__esModule",{value:!0}),t.setup=function(t){t.allowList(["div.highlight","span.highlight","div.sepquote","span.smallfont","blockquote.indent","ol[type=*]"]),t.allowList({custom:(t,e,s)=>"span"===t&&"style"===e?/^(font-size:(xx-small|x-small|small|medium|large|x-large|xx-large|[0-9]{1,3}%)|background-color:#?[a-zA-Z0-9]+|color:#?[a-zA-Z0-9]+|font-family:'[a-zA-Z0-9\s-]+')$/.exec(s):"div"===t&&"style"===e?/^text-align:(center|left|right)$/.exec(s):void 0}),t.registerOptions((t=>{t.features.bbcode=!0})),t.registerPlugin(l)}}))

//# sourceMappingURL=discourse-bbcode-14172599eed3a69c23acae968896194a2bf61d545502710d46ff914bd9949c84.map
//!

;