(()=>{"use strict";var e,t={158:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}const n=window.wp.element,r=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.components,l=window.wp.data,m=window.wp.coreData,i=window.wp.htmlEntities,s=()=>(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},(0,n.createElement)("path",{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"}));function c(e){let{id:t,children:r}=e;const[o,a]=(0,n.useState)(!1);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("a",{href:"#",id:`npseudo-info-toggle-${t}`,role:"button","aria-expanded":o,"aria-controls":`npseudo-info-${t}`,onClick:()=>(a(!o),!1)},"More Info"),(0,n.createElement)("section",{className:"npseudo-member-bio",id:`npseudo-info-${t}`,"aria-labelledby":`npseudo-info-toggle-${t}`,hidden:!o},r))}const d=(0,n.forwardRef)((function(e,r){let{member:o,children:a,...l}=e;if(!o)return(0,n.createElement)("p",null,"Member not found.");const{url:m,alt:s}=function(e,t){var n;const r=e._embedded?.["wp:featuredmedia"]?.[0];return{url:null!==(n=r?.media_details?.sizes?.medium?.source_url)&&void 0!==n?n:r?.source_url,alt:r?.alt_text}}(o),d=o.meta.attachment&&o.meta.attachment.id;return(0,n.createElement)("div",t({},l,{ref:r}),a,m&&(0,n.createElement)("img",{src:m,alt:s}),(0,n.createElement)("div",{className:"npseudo-card-body"},(0,n.createElement)("h5",null,(0,i.decodeEntities)(o.title.rendered)),o.meta.member_pronouns&&(0,n.createElement)("span",{className:"npseudo-pronouns"},"(",o.meta.member_pronouns,")"),(0,n.createElement)("h6",null,o.meta.position),o.meta.member_email&&(0,n.createElement)("a",{href:"mailto:"+o.meta.member_email},"Email Me"),d&&(0,n.createElement)("a",{href:o.meta.attachment.url},"Manifesto"),(0,n.createElement)(c,{id:o.id},(0,n.createElement)("div",{dangerouslySetInnerHTML:{__html:o.content.rendered.trim()}}))))}));function u(e){let{onSelect:t}=e;const{members:o,hasResolved:c}=(0,l.useSelect)((e=>{const t=["postType","npseudo_com_member"];return{members:e(m.store).getEntityRecords(...t),hasResolved:e(m.store).hasFinishedResolution("getEntityRecords",t)}}),[]),d=c?(0,n.createElement)(a.ComboboxControl,{label:(0,r.__)("Select Member","committee_teams"),onChange:t,options:[...o.map((e=>({value:e.id,label:(0,i.decodeEntities)(e.title.rendered)})))]}):(0,n.createElement)(a.Spinner,null);return(0,n.createElement)(a.Placeholder,{icon:(0,n.createElement)(a.Icon,{icon:s}),label:(0,r.__)("Committee Member","committee_teams")},d)}const p=(0,n.forwardRef)(((e,r)=>{let{member_id:o,...i}=e;const{member:s,hasResolved:c}=(0,l.useSelect)((e=>{const{getEntityRecord:t,hasFinishedResolution:n}=e(m.store),r=["postType","npseudo_com_member",o,{_embed:"wp:featuredmedia"}];return{member:t(...r),hasResolved:n("getEntityRecord",r)}}),[o]);return c?(0,n.createElement)(d,t({ref:r},i,{member:s})):(0,n.createElement)("div",i,(0,n.createElement)(a.Spinner,null))})),b=JSON.parse('{"u2":"npseudo/committee-member"}');(0,e.registerBlockType)(b.u2,{edit:function(e){let{attributes:r,setAttributes:l,className:m}=e;return r.member_id&&-1!==r.member_id?(0,n.createElement)(p,t({},(0,o.useBlockProps)(),{member_id:r.member_id}),(0,n.createElement)(o.BlockControls,null,(0,n.createElement)(a.ToolbarButton,{onClick:()=>l({member_id:null})},"Replace"))):(0,n.createElement)("div",(0,o.useBlockProps)(),(0,n.createElement)(o.BlockControls,null,(0,n.createElement)(a.ToolbarButton,{onClick:()=>l({member_id:null})},"Replace")),(0,n.createElement)(u,{onSelect:e=>{l({member_id:parseInt(e)})}}))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],m=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(m=!1,a<l&&(l=a));if(m){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={390:0,575:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,m,i]=n,s=0;if(l.some((t=>0!==e[t]))){for(o in m)r.o(m,o)&&(r.m[o]=m[o]);if(i)var c=i(r)}for(t&&t(n);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=globalThis.webpackChunkcommittee_teams=globalThis.webpackChunkcommittee_teams||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[575],(()=>r(158)));o=r.O(o)})();