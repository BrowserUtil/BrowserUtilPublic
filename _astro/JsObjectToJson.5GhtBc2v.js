import{v as _,c as lt,a as at,w as dt}from"./runtime-dom.esm-bundler.DdJ6YMes.js";import{t as ct,I as ut}from"./utils.Cnprqvd4.js";import{C as mt}from"./CopyButton.DwTyOc5m.js";import{p as xt,c as ft,r as bt,H as vt,a as pt,j as jt,b as ht,d as gt,l as yt}from"./jsObject.B73ntPK4.js";import{_ as wt}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as i,a as e,n as d,t as o,b as u,w as h,F as S,d as Y,e as kt,r as _t,f as Ct,g as Q,o as Tt,h as Bt,i as p,j as a,k as l}from"./runtime-core.esm-bundler.uSHGqpAL.js";const Ut=Ct({__name:"JsObjectToJson",props:{locale:{}},setup(I,{expose:n}){n();const m=I,t=(r,y)=>ct(m.locale,r,y),C=p(()=>ut[m.locale]),x=a("js-to-json"),s=a(""),c=a("");let f;const T=a(2),O=a(!1),M=a(!1),V=a("omit"),q=a("omit"),K=a("single"),N=a(!0),z=a(!0),E=a("none"),j=a([]),B=a(!1);let b;const D={en:`// JavaScript developer configuration
const config = {
  project: 'BrowserUtil',
  version: 2.0,
  debug: true,
  tags: ['tools', 'developer', 'local-first',], // trailing comma
  created: new Date('2025-01-01T00:00:00.000Z'),
  hexCode: 0xff,
  author: {
    name: 'BrowserUtil Team',
    site: 'https://browserutil.com',
  },
  calculateViews() {
    return 12000;
  },
  note: undefined,
};
export default config;`,zh:`// 开发者配置对象
const config = {
  project: 'BrowserUtil',
  version: 2.0,
  debug: true,
  tags: ['实用工具', '开发者', '本地运行',], // 尾后逗号
  created: new Date('2025-01-01T00:00:00.000Z'),
  hexCode: 0xff,
  author: {
    name: 'BrowserUtil 团队',
    site: 'https://browserutil.com',
  },
  calculateViews() {
    return 12000;
  },
  note: undefined,
};
export default config;`,ko:`// 개발자 설정 객체
const config = {
  project: 'BrowserUtil',
  version: 2.0,
  debug: true,
  tags: ['개발도구', '로컬실행', '프라이버시',], // 후행 쉼표
  created: new Date('2025-01-01T00:00:00.000Z'),
  hexCode: 0xff,
  author: {
    name: 'BrowserUtil Team',
    site: 'https://browserutil.com',
  },
  calculateViews() {
    return 12000;
  },
  note: undefined,
};
export default config;`,ja:`// 開発者向け設定オブジェクト
const config = {
  project: 'BrowserUtil',
  version: 2.0,
  debug: true,
  tags: ['ツール', '開発者', 'ローカル実行',], // 末尾カンマ
  created: new Date('2025-01-01T00:00:00.000Z'),
  hexCode: 0xff,
  author: {
    name: 'BrowserUtil チーム',
    site: 'https://browserutil.com',
  },
  calculateViews() {
    return 12000;
  },
  note: undefined,
};
export default config;`,ru:`// Конфигурация разработчика
const config = {
  project: 'BrowserUtil',
  version: 2.0,
  debug: true,
  tags: ['инструменты', 'разработка', 'локально',], // завершающая запятая
  created: new Date('2025-01-01T00:00:00.000Z'),
  hexCode: 0xff,
  author: {
    name: 'Команда BrowserUtil',
    site: 'https://browserutil.com',
  },
  calculateViews() {
    return 12000;
  },
  note: undefined,
};
export default config;`,de:`// Entwicklerkonfiguration
const config = {
  project: 'BrowserUtil',
  version: 2.0,
  debug: true,
  tags: ['werkzeuge', 'entwickler', 'lokal',], // abschließendes Komma
  created: new Date('2025-01-01T00:00:00.000Z'),
  hexCode: 0xff,
  author: {
    name: 'BrowserUtil Team',
    site: 'https://browserutil.com',
  },
  calculateViews() {
    return 12000;
  },
  note: undefined,
};
export default config;`},R={en:`{
  "project": "BrowserUtil",
  "version": 2.0,
  "runsLocally": true,
  "tags": ["tools", "developer", "local-first"],
  "author": {
    "name": "BrowserUtil Team",
    "site": "https://browserutil.com"
  }
}`,zh:`{
  "project": "BrowserUtil",
  "version": 2.0,
  "runsLocally": true,
  "tags": ["实用工具", "开发者", "本地运行"],
  "author": {
    "name": "BrowserUtil 团队",
    "site": "https://browserutil.com"
  }
}`,ko:`{
  "project": "BrowserUtil",
  "version": 2.0,
  "runsLocally": true,
  "tags": ["개발도구", "로컬실행", "프라이버시"],
  "author": {
    "name": "BrowserUtil Team",
    "site": "https://browserutil.com"
  }
}`,ja:`{
  "project": "BrowserUtil",
  "version": 2.0,
  "runsLocally": true,
  "tags": ["ツール", "開発者", "ローカル実行"],
  "author": {
    "name": "BrowserUtil チーム",
    "site": "https://browserutil.com"
  }
}`,ru:`{
  "project": "BrowserUtil",
  "version": 2.0,
  "runsLocally": true,
  "tags": ["инструменты", "разработка", "локально"],
  "author": {
    "name": "Команда BrowserUtil",
    "site": "https://browserutil.com"
  }
}`,de:`{
  "project": "BrowserUtil",
  "version": 2.0,
  "runsLocally": true,
  "tags": ["werkzeuge", "entwickler", "lokal"],
  "author": {
    "name": "BrowserUtil Team",
    "site": "https://browserutil.com"
  }
}`};Q(s,r=>{f&&clearTimeout(f),f=setTimeout(()=>{c.value=r},120)});const U=p(()=>c.value.trim()===""),v=p(()=>U.value?{ok:!1,value:void 0,error:void 0}:pt(c.value)),G=p(()=>v.value.error),H=p(()=>v.value.ok),g=p(()=>{if(!v.value.ok||v.value.value===void 0)return"";if(x.value==="js-to-json"){const r={indent:T.value,sortKeys:O.value,undefinedHandling:V.value,functionHandling:q.value,specialNumberHandling:"null",escapeUnicode:M.value};return jt(v.value.value,r)}else{const r={indent:T.value,quote:K.value,unquoteKeys:N.value,trailingComma:z.value,declaration:E.value};return ht(v.value.value,r)}}),W=p(()=>gt(c.value,g.value));function Z(){!H.value||U.value||(j.value=xt(c.value,x.value),B.value=!0,b&&clearTimeout(b),b=setTimeout(()=>{B.value=!1},1600))}Q(g,r=>{r&&H.value&&Z()});function X(){const r=x.value==="js-to-json"?D[m.locale]:R[m.locale];s.value=r,c.value=r}function $(){s.value="",c.value=""}function tt(){if(!g.value)return;const r=x.value==="js-to-json",y=r?"converted.json":"converted.js",J=r?"application/json":"text/javascript",L=new Blob([g.value],{type:`${J};charset=utf-8`}),F=URL.createObjectURL(L),w=document.createElement("a");w.href=F,w.download=y,document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(F)}const k=a(null);function A(r,y,J,L){k.value={title:t(r),message:t(y,L),action:J}}function et(){const r=k.value?.action;k.value=null,r&&r()}function ot(){A("jtoj.clearTitle","jtoj.clearConfirm",()=>{ft(),j.value=[]},{n:j.value.length})}function nt(r){x.value=r.mode,s.value=r.content,c.value=r.content}function st(r){j.value=bt(r)}function rt(r){return r<1024?`${r} B`:`${(r/1024).toFixed(1)} KB`}function it(r){return new Date(r).toLocaleString(C.value)}Tt(()=>{j.value=yt()}),Bt(()=>{f&&clearTimeout(f),b&&clearTimeout(b)});const P={props:m,tr:t,tag:C,mode:x,input:s,debounced:c,get debounceTimer(){return f},set debounceTimer(r){f=r},indent:T,sortKeys:O,escapeUnicode:M,undefinedHandling:V,functionHandling:q,quote:K,unquoteKeys:N,trailingComma:z,declaration:E,history:j,savedHint:B,get savedTimer(){return b},set savedTimer(r){b=r},SAMPLES_JS:D,SAMPLES_JSON:R,isEmpty:U,parsed:v,error:G,valid:H,output:g,stats:W,triggerSaveHistory:Z,loadSample:X,clearInput:$,downloadOutput:tt,pending:k,ask:A,runPending:et,askClearHistory:ot,loadHistoryItem:nt,deleteHistoryItem:st,sizeLabel:rt,formatTime:it,CopyButton:mt,get HISTORY_LIMIT(){return vt}};return Object.defineProperty(P,"__isScriptSetup",{enumerable:!1,value:!0}),P}}),Ht={class:"space-y-4"},Jt={class:"bu-card p-3 sm:p-4"},Lt={class:"flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"},St={class:"flex flex-wrap items-center gap-2"},It={class:"inline-flex rounded-xl bg-canvas p-1 border border-line"},Ot=["disabled"],Mt={class:"flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted"},Vt={class:"flex items-center gap-1"},qt={class:"font-medium text-ink"},Kt={key:0,class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},Nt={key:1,class:"text-xs text-ok"},zt={class:"mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-3 text-xs text-muted"},Et={class:"flex items-center gap-1.5"},Dt={class:"font-medium text-ink"},Rt={class:"flex items-center gap-1.5"},Zt={class:"font-medium text-ink"},At={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},Pt={class:"flex items-center gap-1.5"},Ft={class:"font-medium text-ink"},Yt={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},Qt={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},Gt={class:"flex items-center gap-1.5"},Wt={class:"font-medium text-ink"},Xt={value:"none"},$t={value:"const"},te={value:"export"},ee={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},oe={class:"bu-card flex flex-col overflow-hidden"},ne={class:"flex items-center justify-between border-b border-line px-3 py-2"},se={class:"flex items-center gap-2"},re={class:"text-sm font-semibold text-ink"},ie={key:0,class:"rounded-full bg-canvas px-2 py-0.5 text-[11px] text-faint"},le={key:1,class:"inline-flex items-center gap-1 rounded-full bg-ok-soft px-2 py-0.5 text-[11px] font-medium text-ok"},ae={key:2,class:"inline-flex items-center gap-1 rounded-full bg-danger-soft px-2 py-0.5 text-[11px] font-medium text-danger"},de={class:"relative flex-1"},ce=["placeholder"],ue={class:"flex items-center justify-between border-t border-line bg-canvas px-3 py-2 text-xs text-muted"},me={key:0,class:"font-mono text-danger"},xe={class:"bu-card flex flex-col overflow-hidden"},fe={class:"flex items-center justify-between border-b border-line px-3 py-2"},be={class:"flex items-center gap-2"},ve={class:"text-sm font-semibold text-ink"},pe={class:"flex items-center gap-2"},je=["disabled"],he={class:"relative flex-1 h-[26rem] sm:h-[30rem] lg:h-[34rem] overflow-auto bg-white"},ge={key:0,class:"flex h-full min-h-[20rem] items-center justify-center p-6 text-center text-sm text-faint"},ye={key:1,class:"p-4 sm:p-5"},we={class:"rounded-lg border border-danger/40 bg-danger-soft p-4"},ke={class:"flex items-center gap-2 text-sm font-semibold text-danger"},_e={class:"mt-2 font-mono text-xs text-danger"},Ce={class:"mt-1 text-xs text-muted"},Te={key:0,class:"mt-3 rounded border border-danger/30 bg-white p-2 font-mono text-xs text-ink"},Be={key:2,class:"p-4"},Ue={class:"font-mono text-xs sm:text-sm text-ink whitespace-pre leading-relaxed select-text"},He={class:"flex items-center justify-between border-t border-line bg-canvas px-3 py-2 text-xs text-muted"},Je={key:0,class:"font-mono text-brand"},Le={key:0,class:"bu-card p-4 sm:p-5"},Se={class:"flex items-center justify-between border-b border-line pb-3"},Ie={class:"text-sm font-semibold text-ink"},Oe={class:"text-xs text-faint"},Me={class:"mt-3 divide-y divide-line"},Ve={class:"flex min-w-0 flex-1 items-center gap-3"},qe={class:"truncate font-mono text-muted max-w-md"},Ke={class:"shrink-0 text-faint"},Ne={class:"flex items-center gap-1.5 ml-2"},ze=["onClick"],Ee=["onClick"],De={class:"bu-card w-full max-w-sm p-5 shadow-lift"},Re={class:"text-base font-semibold text-ink"},Ze={class:"mt-2 text-sm text-muted"},Ae={class:"mt-5 flex justify-end gap-2"};function Pe(I,n,m,t,C,x){return l(),i("section",Ht,[e("div",Jt,[e("div",Lt,[e("div",St,[e("div",It,[e("button",{type:"button",class:d(["flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",t.mode==="js-to-json"?"bg-white text-brand-dark shadow-sm":"text-muted hover:text-ink"]),onClick:n[0]||(n[0]=s=>t.mode="js-to-json")},[n[21]||(n[21]=e("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M16 18l6-6-6-6M8 6l-6 6 6 6"})],-1)),e("span",null,o(t.tr("jtoj.modeJsToJson")),1)],2),e("button",{type:"button",class:d(["flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",t.mode==="json-to-js"?"bg-white text-brand-dark shadow-sm":"text-muted hover:text-ink"]),onClick:n[1]||(n[1]=s=>t.mode="json-to-js")},[n[22]||(n[22]=e("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M8 18l-6-6 6-6M16 6l6 6-6 6"})],-1)),e("span",null,o(t.tr("jtoj.modeJsonToJs")),1)],2)]),e("button",{type:"button",class:"bu-btn py-1 text-xs",onClick:t.loadSample},o(t.tr("jtoj.sample")),1),e("button",{type:"button",class:"bu-btn py-1 text-xs",disabled:t.isEmpty,onClick:t.clearInput},o(t.tr("jtoj.clear")),9,Ot)]),e("div",Mt,[e("div",Vt,[e("span",qt,o(t.tr("jtoj.indent"))+":",1),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.indent===2}]),onClick:n[2]||(n[2]=s=>t.indent=2)},o(t.tr("jtoj.space2")),3),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.indent===4}]),onClick:n[3]||(n[3]=s=>t.indent=4)},o(t.tr("jtoj.space4")),3),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.indent==="tab"}]),onClick:n[4]||(n[4]=s=>t.indent="tab")},o(t.tr("jtoj.tab")),3),t.mode==="js-to-json"?(l(),i("button",{key:0,type:"button",class:d(["bu-chip",{"bu-chip-active":t.indent===0}]),onClick:n[5]||(n[5]=s=>t.indent=0)},o(t.tr("jtoj.minify")),3)):u("",!0)]),t.mode==="js-to-json"?(l(),i("label",Kt,[h(e("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>t.sortKeys=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[_,t.sortKeys]]),e("span",null,o(t.tr("jtoj.sortKeys")),1)])):u("",!0),t.savedHint?(l(),i("span",Nt,o(t.tr("jtoj.saved")),1)):u("",!0)])]),e("div",zt,[t.mode==="js-to-json"?(l(),i(S,{key:0},[e("div",Et,[e("span",Dt,o(t.tr("jtoj.undefinedHandling"))+":",1),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.undefinedHandling==="omit"}]),onClick:n[7]||(n[7]=s=>t.undefinedHandling="omit")},o(t.tr("jtoj.undefinedOmit")),3),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.undefinedHandling==="null"}]),onClick:n[8]||(n[8]=s=>t.undefinedHandling="null")},o(t.tr("jtoj.undefinedNull")),3)]),e("div",Rt,[e("span",Zt,o(t.tr("jtoj.functionHandling"))+":",1),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.functionHandling==="omit"}]),onClick:n[9]||(n[9]=s=>t.functionHandling="omit")},o(t.tr("jtoj.functionOmit")),3),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.functionHandling==="string"}]),onClick:n[10]||(n[10]=s=>t.functionHandling="string")},o(t.tr("jtoj.functionString")),3),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.functionHandling==="null"}]),onClick:n[11]||(n[11]=s=>t.functionHandling="null")},o(t.tr("jtoj.functionNull")),3)]),e("label",At,[h(e("input",{"onUpdate:modelValue":n[12]||(n[12]=s=>t.escapeUnicode=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[_,t.escapeUnicode]]),e("span",null,o(t.tr("jtoj.escapeUnicode")),1)])],64)):(l(),i(S,{key:1},[e("div",Pt,[e("span",Ft,o(t.tr("jtoj.quoteStyle"))+":",1),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.quote==="single"}]),onClick:n[13]||(n[13]=s=>t.quote="single")},o(t.tr("jtoj.singleQuote")),3),e("button",{type:"button",class:d(["bu-chip",{"bu-chip-active":t.quote==="double"}]),onClick:n[14]||(n[14]=s=>t.quote="double")},o(t.tr("jtoj.doubleQuote")),3)]),e("label",Yt,[h(e("input",{"onUpdate:modelValue":n[15]||(n[15]=s=>t.unquoteKeys=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[_,t.unquoteKeys]]),e("span",null,o(t.tr("jtoj.unquoteKeys")),1)]),e("label",Qt,[h(e("input",{"onUpdate:modelValue":n[16]||(n[16]=s=>t.trailingComma=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[_,t.trailingComma]]),e("span",null,o(t.tr("jtoj.trailingComma")),1)]),e("div",Gt,[e("span",Wt,o(t.tr("jtoj.wrapper"))+":",1),h(e("select",{"onUpdate:modelValue":n[17]||(n[17]=s=>t.declaration=s),class:"rounded-lg border border-line bg-white px-2 py-1 text-xs text-ink focus:border-brand focus:outline-none"},[e("option",Xt,o(t.tr("jtoj.wrapperNone")),1),e("option",$t,o(t.tr("jtoj.wrapperConst")),1),e("option",te,o(t.tr("jtoj.wrapperExport")),1)],512),[[lt,t.declaration]])])],64))])]),e("div",ee,[e("div",oe,[e("div",ne,[e("div",se,[e("h2",re,o(t.mode==="js-to-json"?t.tr("jtoj.inputJs"):t.tr("jtoj.inputJson")),1),t.isEmpty?(l(),i("span",ie,o(t.tr("jtoj.emptyInput")),1)):t.valid?(l(),i("span",le,[n[23]||(n[23]=e("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("path",{d:"M20 6L9 17l-5-5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Y(" "+o(t.tr("jtoj.valid")),1)])):(l(),i("span",ae,[n[24]||(n[24]=e("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12","stroke-linecap":"round"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16","stroke-linecap":"round"})],-1)),Y(" "+o(t.tr("jtoj.invalid")),1)]))])]),e("div",de,[h(e("textarea",{"onUpdate:modelValue":n[18]||(n[18]=s=>t.input=s),spellcheck:"false",placeholder:t.mode==="js-to-json"?t.tr("jtoj.placeholderJs"):t.tr("jtoj.placeholderJson"),class:"font-mono h-[26rem] sm:h-[30rem] lg:h-[34rem] w-full resize-none bg-white p-4 text-xs sm:text-sm text-ink placeholder:text-faint focus:outline-none"},null,8,ce),[[at,t.input]])]),e("div",ue,[e("span",null,o(t.stats.inChars)+" "+o(t.tr("jtoj.chars"))+" · "+o(t.stats.inLines)+" "+o(t.tr("jtoj.lines"))+" · "+o(t.sizeLabel(t.stats.inBytes)),1),t.error?(l(),i("span",me,o(t.tr("jtoj.errorLineCol",{line:t.error.line,col:t.error.column})),1)):u("",!0)])]),e("div",xe,[e("div",fe,[e("div",be,[e("h2",ve,o(t.mode==="js-to-json"?t.tr("jtoj.outputJson"):t.tr("jtoj.outputJs")),1)]),e("div",pe,[e("button",{type:"button",class:"inline-flex shrink-0 items-center gap-1 rounded-lg border border-line bg-white px-2 py-1 text-xs text-muted transition hover:border-brand hover:text-brand-dark disabled:cursor-not-allowed disabled:opacity-40",disabled:!t.output,onClick:t.downloadOutput},[n[25]||(n[25]=e("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[e("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"}),e("polyline",{points:"7 10 12 15 17 10"}),e("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),e("span",null,o(t.tr("jtoj.download")),1)],8,je),kt(t.CopyButton,{locale:m.locale,value:t.output},null,8,["locale","value"])])]),e("div",he,[t.isEmpty?(l(),i("div",ge,o(t.tr("jtoj.emptyOutput")),1)):t.error?(l(),i("div",ye,[e("div",we,[e("div",ke,[n[26]||(n[26]=e("svg",{class:"h-4 w-4 shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12","stroke-linecap":"round"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16","stroke-linecap":"round"})],-1)),e("span",null,o(t.tr("jtoj.error")),1)]),e("p",_e,o(t.error.message),1),e("p",Ce,o(t.tr("jtoj.errorLineCol",{line:t.error.line,col:t.error.column})),1),t.error.snippet?(l(),i("div",Te,o(t.error.snippet),1)):u("",!0)])])):(l(),i("div",Be,[e("pre",Ue,o(t.output),1)]))]),e("div",He,[e("span",null,o(t.stats.outChars)+" "+o(t.tr("jtoj.chars"))+" · "+o(t.stats.outLines)+" "+o(t.tr("jtoj.lines"))+" · "+o(t.sizeLabel(t.stats.outBytes)),1),t.output&&t.stats.ratio?(l(),i("span",Je,o(t.tr("jtoj.ratio"))+": "+o(t.stats.ratio),1)):u("",!0)])])]),t.history.length>0?(l(),i("div",Le,[e("div",Se,[e("div",null,[e("h3",Ie,o(t.tr("jtoj.history")),1),e("p",Oe,o(t.tr("jtoj.historyHint",{n:t.HISTORY_LIMIT})),1)]),e("button",{type:"button",class:"bu-btn py-1 text-xs text-danger hover:border-danger hover:text-danger",onClick:t.askClearHistory},o(t.tr("jtoj.historyClear")),1)]),e("div",Me,[(l(!0),i(S,null,_t(t.history,s=>(l(),i("div",{key:s.id,class:"flex items-center justify-between py-2.5 text-xs"},[e("div",Ve,[e("span",{class:d(["rounded px-1.5 py-0.5 text-[10px] font-medium",s.mode==="js-to-json"?"bg-brand-soft text-brand-dark":"bg-canvas text-muted border border-line"])},o(s.mode==="js-to-json"?"JS → JSON":"JSON → JS"),3),e("span",qe,o(s.content),1),e("span",Ke,o(t.formatTime(s.createdAt)),1)]),e("div",Ne,[e("button",{type:"button",class:"bu-btn py-0.5 px-2 text-xs",onClick:c=>t.loadHistoryItem(s)},o(t.tr("jtoj.historyLoad")),9,ze),e("button",{type:"button",class:"bu-btn py-0.5 px-1.5 text-xs text-danger hover:border-danger hover:text-danger",onClick:c=>t.deleteHistoryItem(s.id)},[...n[27]||(n[27]=[e("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],8,Ee)])]))),128))])])):u("",!0),t.pending?(l(),i("div",{key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",onClick:n[20]||(n[20]=dt(s=>t.pending=null,["self"]))},[e("div",De,[e("h3",Re,o(t.pending.title),1),e("p",Ze,o(t.pending.message),1),e("div",Ae,[e("button",{type:"button",class:"bu-btn text-xs",onClick:n[19]||(n[19]=s=>t.pending=null)},o(t.tr("jtoj.cancel")),1),e("button",{type:"button",class:"bu-btn bu-btn-primary text-xs",onClick:t.runPending},o(t.tr("jtoj.confirm")),1)])])])):u("",!0)])}const $e=wt(Ut,[["render",Pe]]);export{$e as default};
