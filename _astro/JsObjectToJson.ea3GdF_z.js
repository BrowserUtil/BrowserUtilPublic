import{c as a,a as i,n as g,t as c,b as j,w as B,v as E,F as Z,x as _n,e as rn,d as Cn,f as Sn,r as Un,g as Tn,h as Bn,i as ln,o as In,j as Hn,k as C,l as h,m}from"./runtime-dom.esm-bundler.CrGUkiI6.js";import{t as Jn,I as Nn}from"./utils.-w71MSdJ.js";import{C as On}from"./CopyButton.Pzal6Mjm.js";import{_ as An}from"./_plugin-vue_export-helper.DlAUqK2U.js";const sn=5,V="browserutil:js-object-to-json:history",Ln=1e5,En=new Set(["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","enum","implements","interface","let","package","private","protected","public","static","await","null","true","false"]);function x(n,o){const t=n.input.split(/\r\n|\r|\n/),e=Math.max(1,n.line),r=Math.max(1,n.col),u=t[e-1]??"";return{message:o,line:e,column:r,snippet:u.trim()}}function l(n,o=1){for(let t=0;t<o;t+=1)n.pos<n.length&&(n.input[n.pos]===`
`?(n.line+=1,n.col=1):n.col+=1,n.pos+=1)}function f(n){for(;n.pos<n.length;){const o=n.input[n.pos];if(o===" "||o==="	"||o==="\r"||o===`
`){l(n);continue}if(o==="/"&&n.input[n.pos+1]==="/"){for(l(n,2);n.pos<n.length&&n.input[n.pos]!==`
`;)l(n);continue}if(o==="/"&&n.input[n.pos+1]==="*"){for(l(n,2);n.pos<n.length;){if(n.input[n.pos]==="*"&&n.input[n.pos+1]==="/"){l(n,2);break}l(n)}continue}break}}function z(n){return n?n>="a"&&n<="z"||n>="A"&&n<="Z"||n==="$"||n==="_":!1}function cn(n){return n?z(n)||n>="0"&&n<="9":!1}function Mn(n){if(!n||En.has(n)||!z(n[0]))return!1;for(let o=1;o<n.length;o+=1)if(!cn(n[o]))return!1;return!0}function W(n){let o="";for(;n.pos<n.length&&cn(n.input[n.pos]);)o+=n.input[n.pos],l(n);return o}function R(n){const o=n.input[n.pos];l(n);let t="";for(;n.pos<n.length;){const e=n.input[n.pos];if(e===o)return l(n),t;if(e==="\\"){if(l(n),n.pos>=n.length)throw x(n,"Unterminated escape sequence");const r=n.input[n.pos];if(r==="n")t+=`
`;else if(r==="r")t+="\r";else if(r==="t")t+="	";else if(r==="b")t+="\b";else if(r==="f")t+="\f";else if(r==="v")t+="\v";else if(r==="0")t+="\0";else if(r==="\\")t+="\\";else if(r===o)t+=o;else if(r==='"')t+='"';else if(r==="'")t+="'";else if(r==="/")t+="/";else if(r==="u")if(n.input[n.pos+1]==="{"){l(n,2);let u="";for(;n.pos<n.length&&n.input[n.pos]!=="}";)u+=n.input[n.pos],l(n);if(n.input[n.pos]==="}"){l(n),t+=String.fromCodePoint(parseInt(u,16));continue}}else{const u=n.input.slice(n.pos+1,n.pos+5);if(/^[0-9a-fA-F]{4}$/.test(u)){t+=String.fromCharCode(parseInt(u,16)),l(n,5);continue}t+="u"}else if(r==="x"){const u=n.input.slice(n.pos+1,n.pos+3);if(/^[0-9a-fA-F]{2}$/.test(u)){t+=String.fromCharCode(parseInt(u,16)),l(n,3);continue}t+="x"}else r===`
`||r==="\r"||(t+=r);l(n);continue}if(o==="`"&&e==="$"&&n.input[n.pos+1]==="{"){t+="${",l(n,2);let r=1;for(;n.pos<n.length&&r>0;)n.input[n.pos]==="{"?r+=1:n.input[n.pos]==="}"&&(r-=1),r>0&&(t+=n.input[n.pos]),l(n);t+="}";continue}t+=e,l(n)}throw x(n,`Unterminated string starting with ${o}`)}function un(n){let o="";if((n.input[n.pos]==="+"||n.input[n.pos]==="-")&&(o+=n.input[n.pos],l(n)),n.input[n.pos]==="0"){const u=n.input[n.pos+1]?.toLowerCase();if(u==="x"||u==="b"||u==="o"){for(o+=n.input.slice(n.pos,n.pos+2),l(n,2);n.pos<n.length&&/[0-9a-fA-F_]/.test(n.input[n.pos]);)n.input[n.pos]!=="_"&&(o+=n.input[n.pos]),l(n);return n.input[n.pos]==="n"?(l(n),{type:"bigint",value:o}):{type:"number",value:Number(o)}}}let t=!1,e=!1;for(;n.pos<n.length;){const u=n.input[n.pos];if(u>="0"&&u<="9")o+=u,l(n);else if(u==="_")l(n);else if(u==="."&&!t&&!e)t=!0,o+=u,l(n);else if((u==="e"||u==="E")&&!e)e=!0,o+=u,l(n),(n.input[n.pos]==="+"||n.input[n.pos]==="-")&&(o+=n.input[n.pos],l(n));else break}if(n.input[n.pos]==="n")return l(n),{type:"bigint",value:o};const r=Number(o);if(Number.isNaN(r))throw x(n,`Invalid number: ${o}`);return{type:"number",value:r}}function Vn(n){l(n);let o="";for(;n.pos<n.length;){const e=n.input[n.pos];if(e==="/"){l(n);break}if(e==="\\"){o+="\\",l(n),n.pos<n.length&&(o+=n.input[n.pos],l(n));continue}o+=e,l(n)}let t="";for(;n.pos<n.length&&/[a-z]/i.test(n.input[n.pos]);)t+=n.input[n.pos],l(n);return`/${o}/${t}`}function dn(n,o=""){const t=n.pos;let e=0;for(;n.pos<n.length;){const u=n.input[n.pos];if(u==="(")l(n);else if(u===")")l(n);else if(u==="{"){e+=1,l(n);break}else l(n)}for(;n.pos<n.length&&e>0;){const u=n.input[n.pos];if(u==="{")e+=1;else if(u==="}")e-=1;else if(u==="'"||u==='"'||u==="`"){R(n);continue}l(n)}const r=n.input.slice(t,n.pos).trim();return{__type:"function",name:o,code:o?`${o} ${r}`:r}}function fn(n,o){l(n,2),f(n);const t=n.pos;if(n.input[n.pos]==="{"){l(n);let r=1;for(;n.pos<n.length&&r>0;){const u=n.input[n.pos];if(u==="{")r+=1;else if(u==="}")r-=1;else if(u==="'"||u==='"'||u==="`"){R(n);continue}l(n)}}else for(;n.pos<n.length;){const r=n.input[n.pos];if(r===","||r==="}"||r==="]"||r===";")break;l(n)}const e=n.input.slice(t,n.pos).trim();return{__type:"function",name:"",code:`${o} => ${e}`}}function zn(n,o){l(n),f(n);const t=[];if(n.input[n.pos]!==")")for(;n.pos<n.length;)if(t.push(I(n)),f(n),n.input[n.pos]===","){if(l(n),f(n),n.input[n.pos]===")")break}else{if(n.input[n.pos]===")")break;throw x(n,`Expected ',' or ')' in new ${o}(...)`)}if(n.input[n.pos]===")"&&l(n),o==="Date"){if(t.length===0)return new Date().toISOString();const e=new Date(t[0]);return Number.isNaN(e.getTime())?String(t[0]):e.toISOString()}if(o==="RegExp"){const e=typeof t[0]=="string"?t[0]:"",r=typeof t[1]=="string"?t[1]:"";return`/${e}/${r}`}if(o==="Set")return Array.isArray(t[0])?t[0]:[];if(o==="Map"){if(Array.isArray(t[0])){const e={};for(const r of t[0])Array.isArray(r)&&r.length>=2&&(e[String(r[0])]=r[1]);return e}return{}}return{__type:"instance",constructor:o,args:t}}function Rn(n){l(n),f(n);const o={};if(n.input[n.pos]==="}")return l(n),o;for(;n.pos<n.length;){if(f(n),n.input[n.pos]==="}")return l(n),o;let t="";const e=n.input[n.pos];if(e==="'"||e==='"'||e==="`")t=R(n);else if(e==="["){l(n),f(n);const r=I(n);if(f(n),n.input[n.pos]!=="]")throw x(n,"Expected ']' after computed property key");l(n),t=String(r)}else if(e>="0"&&e<="9"||e==="+"||e==="-"){const r=un(n);t=String(r.value)}else if(z(e))t=W(n);else throw x(n,`Unexpected character '${e}' for property key`);if(f(n),n.input[n.pos]==="(")o[t]=dn(n,t);else if(n.input[n.pos]===":")l(n),f(n),o[t]=I(n);else if(n.input[n.pos]===","||n.input[n.pos]==="}")o[t]=t;else throw x(n,`Expected ':' after property '${t}', found '${n.input[n.pos]}'`);if(f(n),n.input[n.pos]===","){if(l(n),f(n),n.input[n.pos]==="}")return l(n),o}else{if(n.input[n.pos]==="}")return l(n),o;throw x(n,`Expected ',' or '}' in object, found '${n.input[n.pos]}'`)}}throw x(n,"Unterminated object, expected '}'")}function Dn(n){l(n),f(n);const o=[];if(n.input[n.pos]==="]")return l(n),o;for(;n.pos<n.length;){if(f(n),n.input[n.pos]==="]")return l(n),o;if(n.input[n.pos]===","){o.push(null),l(n);continue}if(o.push(I(n)),f(n),n.input[n.pos]===","){if(l(n),f(n),n.input[n.pos]==="]")return l(n),o}else{if(n.input[n.pos]==="]")return l(n),o;throw x(n,`Expected ',' or ']' in array, found '${n.input[n.pos]}'`)}}throw x(n,"Unterminated array, expected ']'")}function qn(n){l(n),f(n);let o=1,t="";for(;n.pos<n.length&&o>0;){const r=n.input[n.pos];r==="("?o+=1:r===")"&&(o-=1),o>0&&(t+=r,l(n))}if(n.input[n.pos]===")"&&l(n),f(n),n.input[n.pos]==="="&&n.input[n.pos+1]===">")return fn(n,`(${t})`);const e={input:t,pos:0,length:t.length,line:1,col:1};return I(e)}function I(n){if(f(n),n.pos>=n.length)throw x(n,"Unexpected end of input");const o=n.input[n.pos];if(o==="{")return Rn(n);if(o==="[")return Dn(n);if(o==="'"||o==='"'||o==="`")return R(n);if(o==="/"&&n.input[n.pos+1]!=="/"&&n.input[n.pos+1]!=="*")return Vn(n);if(o==="(")return qn(n);const t=n.input[n.pos+1];if(o>="0"&&o<="9"||(o==="+"||o==="-")&&(t>="0"&&t<="9"||t===".")||o==="."&&t>="0"&&t<="9"){const e=un(n);return e.type==="bigint"?{__type:"bigint",value:e.value}:e.value}if(z(o)){const e=W(n);if(e==="true")return!0;if(e==="false")return!1;if(e==="null")return null;if(e==="undefined")return;if(e==="NaN")return NaN;if(e==="Infinity")return 1/0;if(e==="new"){f(n);const r=W(n);if(f(n),n.input[n.pos]==="(")return zn(n,r)}return e==="function"||e==="async"?dn(n,""):(f(n),n.input[n.pos]==="="&&n.input[n.pos+1]===">"?fn(n,e):e)}throw x(n,`Unexpected character '${o}'`)}function Kn(n){let o=n.trim();if(!o)return"";o.endsWith(";")&&(o=o.slice(0,-1).trim()),o.startsWith("(")&&o.endsWith(")")&&(o=o.slice(1,-1).trim());const e=/^(?:export\s+default\s+|export\s+(?:const|let|var)\s+[a-zA-Z0-9_$]+(?:\s*:\s*[^=]+)?\s*=|module\.exports\s*=|window\.[a-zA-Z0-9_$]+\s*=|(?:\b(?:const|let|var)\s+[a-zA-Z0-9_$]+(?:\s*:\s*[^=]+)?\s*=))\s*/.exec(o);return e&&(o=o.slice(e[0].length).trim()),o.endsWith(";")&&(o=o.slice(0,-1).trim()),o}function Fn(n){const o=Kn(n);if(!o)return{ok:!1,value:void 0};const t={input:o,pos:0,length:o.length,line:1,col:1};try{const e=I(t);return f(t),t.pos<t.length&&t.input[t.pos]!==";"?{ok:!1,value:void 0,error:x(t,`Unexpected trailing content '${t.input[t.pos]}'`)}:{ok:!0,value:e}}catch(e){return typeof e=="object"&&e!==null&&"message"in e&&"line"in e?{ok:!1,value:void 0,error:e}:{ok:!1,value:void 0,error:{message:e instanceof Error?e.message:String(e),line:1,column:1,snippet:""}}}}function Pn(n){return n.replace(/[^\x20-\x7e]/g,o=>`\\u${(o.codePointAt(0)??0).toString(16).padStart(4,"0")}`)}function pn(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function Y(n,o){if(n===void 0)return o.undefinedHandling==="null"?null:void 0;if(typeof n=="number")return Number.isNaN(n)||!Number.isFinite(n)?o.specialNumberHandling==="string"?String(n):null:n;if(typeof n=="bigint")return n.toString();if(n&&typeof n=="object"){if("__type"in n){const t=n;if(t.__type==="bigint")return t.value;if(t.__type==="function")return o.functionHandling==="string"?t.code||`[Function: ${t.name||"anonymous"}]`:o.functionHandling==="null"?null:void 0}if(Array.isArray(n))return n.map(t=>Y(t,o));if(pn(n)){const t=o.sortKeys?Object.keys(n).sort():Object.keys(n),e={};for(const r of t){const u=Y(n[r],o);u!==void 0&&(e[r]=u)}return e}}return n}function Zn(n,o){const t=Y(n,o),e=o.indent==="tab"?"	":o.indent===0?void 0:o.indent,r=JSON.stringify(t,null,e)??"";return o.escapeUnicode?Pn(r):r}function Wn(n,o){const t=o.indent==="tab"?"	":" ".repeat(Number(o.indent)||2);function e(s){return o.quote==="single"?"'"+s.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")+"'":JSON.stringify(s)}function r(s,p){const b=t.repeat(p),y=t.repeat(p+1);if(s===null)return"null";if(s===void 0)return"undefined";if(typeof s=="string")return e(s);if(typeof s=="number"||typeof s=="boolean")return String(s);if(typeof s=="bigint")return`${s}n`;if(Array.isArray(s)){if(s.length===0)return"[]";const v=s.map(U=>`${y}${r(U,p+1)}`),S=o.trailingComma?",":"";return`[
${v.join(`,
`)}${S}
${b}]`}if(pn(s)){const v=Object.keys(s);if(v.length===0)return"{}";const S=v.map(w=>{const O=r(s[w],p+1),A=o.unquoteKeys&&Mn(w)?w:e(w);return`${y}${A}: ${O}`}),U=o.trailingComma?",":"";return`{
${S.join(`,
`)}${U}
${b}}`}return String(s)}const u=r(n,0);return o.declaration==="const"?`const data = ${u};
`:o.declaration==="export"?`export default ${u};
`:u}function Yn(n,o){const t=new TextEncoder,e=n.length,r=n===""?0:n.split(/\r\n|\r|\n/).length,u=t.encode(n).length,s=o.length,p=o===""?0:o.split(/\r\n|\r|\n/).length,b=t.encode(o).length;let y="0%";if(u>0){const v=(b-u)/u*100;y=(v>0?"+":"")+v.toFixed(1)+"%"}return{inChars:e,inLines:r,inBytes:u,outChars:s,outLines:p,outBytes:b,ratio:y}}function M(){if(typeof window>"u")return[];try{const n=localStorage.getItem(V);if(!n)return[];const o=JSON.parse(n);return Array.isArray(o)?o:[]}catch{return[]}}function Qn(n,o){if(typeof window>"u")return[];const t=n.trim();if(!t||t.length>Ln)return M();const r=M().filter(p=>p.content!==t),s=[{id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,content:t,mode:o,createdAt:Date.now()},...r].slice(0,sn);try{localStorage.setItem(V,JSON.stringify(s))}catch{}return s}function Gn(n){if(typeof window>"u")return[];const t=M().filter(e=>e.id!==n);try{localStorage.setItem(V,JSON.stringify(t))}catch{}return t}function Xn(){if(!(typeof window>"u"))try{localStorage.removeItem(V)}catch{}}const $n=Bn({__name:"JsObjectToJson",props:{locale:{}},setup(n,{expose:o}){o();const t=n,e=(d,J)=>Jn(t.locale,d,J),r=C(()=>Nn[t.locale]),u=h("js-to-json"),s=h(""),p=h("");let b;const y=h(2),v=h(!1),S=h(!1),U=h("omit"),w=h("omit"),O=h("single"),A=h(!0),Q=h(!0),G=h("none"),T=h([]),D=h(!1);let k;const X={en:`// JavaScript developer configuration
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
export default config;`},$={en:`{
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
}`};ln(s,d=>{b&&clearTimeout(b),b=setTimeout(()=>{p.value=d},120)});const q=C(()=>p.value.trim()===""),_=C(()=>q.value?{ok:!1,value:void 0,error:void 0}:Fn(p.value)),an=C(()=>_.value.error),K=C(()=>_.value.ok),H=C(()=>{if(!_.value.ok||_.value.value===void 0)return"";if(u.value==="js-to-json"){const d={indent:y.value,sortKeys:v.value,undefinedHandling:U.value,functionHandling:w.value,specialNumberHandling:"null",escapeUnicode:S.value};return Zn(_.value.value,d)}else{const d={indent:y.value,quote:O.value,unquoteKeys:A.value,trailingComma:Q.value,declaration:G.value};return Wn(_.value.value,d)}}),mn=C(()=>Yn(p.value,H.value));function nn(){!K.value||q.value||(T.value=Qn(p.value,u.value),D.value=!0,k&&clearTimeout(k),k=setTimeout(()=>{D.value=!1},1600))}ln(H,d=>{d&&K.value&&nn()});function hn(){const d=u.value==="js-to-json"?X[t.locale]:$[t.locale];s.value=d,p.value=d}function gn(){s.value="",p.value=""}function xn(){if(!H.value)return;const d=u.value==="js-to-json",J=d?"converted.json":"converted.js",F=d?"application/json":"text/javascript",P=new Blob([H.value],{type:`${F};charset=utf-8`}),tn=URL.createObjectURL(P),N=document.createElement("a");N.href=tn,N.download=J,document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(tn)}const L=h(null);function en(d,J,F,P){L.value={title:e(d),message:e(J,P),action:F}}function bn(){const d=L.value?.action;L.value=null,d&&d()}function vn(){en("jtoj.clearTitle","jtoj.clearConfirm",()=>{Xn(),T.value=[]},{n:T.value.length})}function yn(d){u.value=d.mode,s.value=d.content,p.value=d.content}function jn(d){T.value=Gn(d)}function wn(d){return d<1024?`${d} B`:`${(d/1024).toFixed(1)} KB`}function kn(d){return new Date(d).toLocaleString(r.value)}In(()=>{T.value=M()}),Hn(()=>{b&&clearTimeout(b),k&&clearTimeout(k)});const on={props:t,tr:e,tag:r,mode:u,input:s,debounced:p,get debounceTimer(){return b},set debounceTimer(d){b=d},indent:y,sortKeys:v,escapeUnicode:S,undefinedHandling:U,functionHandling:w,quote:O,unquoteKeys:A,trailingComma:Q,declaration:G,history:T,savedHint:D,get savedTimer(){return k},set savedTimer(d){k=d},SAMPLES_JS:X,SAMPLES_JSON:$,isEmpty:q,parsed:_,error:an,valid:K,output:H,stats:mn,triggerSaveHistory:nn,loadSample:hn,clearInput:gn,downloadOutput:xn,pending:L,ask:en,runPending:bn,askClearHistory:vn,loadHistoryItem:yn,deleteHistoryItem:jn,sizeLabel:wn,formatTime:kn,CopyButton:On,get HISTORY_LIMIT(){return sn}};return Object.defineProperty(on,"__isScriptSetup",{enumerable:!1,value:!0}),on}}),ne={class:"space-y-4"},ee={class:"bu-card p-3 sm:p-4"},oe={class:"flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"},te={class:"flex flex-wrap items-center gap-2"},ie={class:"inline-flex rounded-xl bg-canvas p-1 border border-line"},re=["disabled"],le={class:"flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted"},se={class:"flex items-center gap-1"},ce={class:"font-medium text-ink"},ue={key:0,class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},de={key:1,class:"text-xs text-ok"},fe={class:"mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-3 text-xs text-muted"},pe={class:"flex items-center gap-1.5"},ae={class:"font-medium text-ink"},me={class:"flex items-center gap-1.5"},he={class:"font-medium text-ink"},ge={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},xe={class:"flex items-center gap-1.5"},be={class:"font-medium text-ink"},ve={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},ye={class:"inline-flex cursor-pointer items-center gap-1.5 hover:text-ink"},je={class:"flex items-center gap-1.5"},we={class:"font-medium text-ink"},ke={value:"none"},_e={value:"const"},Ce={value:"export"},Se={class:"grid grid-cols-1 gap-4 lg:grid-cols-2"},Ue={class:"bu-card flex flex-col overflow-hidden"},Te={class:"flex items-center justify-between border-b border-line px-3 py-2"},Be={class:"flex items-center gap-2"},Ie={class:"text-sm font-semibold text-ink"},He={key:0,class:"rounded-full bg-canvas px-2 py-0.5 text-[11px] text-faint"},Je={key:1,class:"inline-flex items-center gap-1 rounded-full bg-ok-soft px-2 py-0.5 text-[11px] font-medium text-ok"},Ne={key:2,class:"inline-flex items-center gap-1 rounded-full bg-danger-soft px-2 py-0.5 text-[11px] font-medium text-danger"},Oe={class:"relative flex-1"},Ae=["placeholder"],Le={class:"flex items-center justify-between border-t border-line bg-canvas px-3 py-2 text-xs text-muted"},Ee={key:0,class:"font-mono text-danger"},Me={class:"bu-card flex flex-col overflow-hidden"},Ve={class:"flex items-center justify-between border-b border-line px-3 py-2"},ze={class:"flex items-center gap-2"},Re={class:"text-sm font-semibold text-ink"},De={class:"flex items-center gap-2"},qe=["disabled"],Ke={class:"relative flex-1 h-[26rem] sm:h-[30rem] lg:h-[34rem] overflow-auto bg-white"},Fe={key:0,class:"flex h-full min-h-[20rem] items-center justify-center p-6 text-center text-sm text-faint"},Pe={key:1,class:"p-4 sm:p-5"},Ze={class:"rounded-lg border border-danger/40 bg-danger-soft p-4"},We={class:"flex items-center gap-2 text-sm font-semibold text-danger"},Ye={class:"mt-2 font-mono text-xs text-danger"},Qe={class:"mt-1 text-xs text-muted"},Ge={key:0,class:"mt-3 rounded border border-danger/30 bg-white p-2 font-mono text-xs text-ink"},Xe={key:2,class:"p-4"},$e={class:"font-mono text-xs sm:text-sm text-ink whitespace-pre leading-relaxed select-text"},no={class:"flex items-center justify-between border-t border-line bg-canvas px-3 py-2 text-xs text-muted"},eo={key:0,class:"font-mono text-brand"},oo={key:0,class:"bu-card p-4 sm:p-5"},to={class:"flex items-center justify-between border-b border-line pb-3"},io={class:"text-sm font-semibold text-ink"},ro={class:"text-xs text-faint"},lo={class:"mt-3 divide-y divide-line"},so={class:"flex min-w-0 flex-1 items-center gap-3"},co={class:"truncate font-mono text-muted max-w-md"},uo={class:"shrink-0 text-faint"},fo={class:"flex items-center gap-1.5 ml-2"},po=["onClick"],ao=["onClick"],mo={class:"bu-card w-full max-w-sm p-5 shadow-lift"},ho={class:"text-base font-semibold text-ink"},go={class:"mt-2 text-sm text-muted"},xo={class:"mt-5 flex justify-end gap-2"};function bo(n,o,t,e,r,u){return m(),a("section",ne,[i("div",ee,[i("div",oe,[i("div",te,[i("div",ie,[i("button",{type:"button",class:g(["flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",e.mode==="js-to-json"?"bg-white text-brand-dark shadow-sm":"text-muted hover:text-ink"]),onClick:o[0]||(o[0]=s=>e.mode="js-to-json")},[o[21]||(o[21]=i("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[i("path",{d:"M16 18l6-6-6-6M8 6l-6 6 6 6"})],-1)),i("span",null,c(e.tr("jtoj.modeJsToJson")),1)],2),i("button",{type:"button",class:g(["flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",e.mode==="json-to-js"?"bg-white text-brand-dark shadow-sm":"text-muted hover:text-ink"]),onClick:o[1]||(o[1]=s=>e.mode="json-to-js")},[o[22]||(o[22]=i("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[i("path",{d:"M8 18l-6-6 6-6M16 6l6 6-6 6"})],-1)),i("span",null,c(e.tr("jtoj.modeJsonToJs")),1)],2)]),i("button",{type:"button",class:"bu-btn py-1 text-xs",onClick:e.loadSample},c(e.tr("jtoj.sample")),1),i("button",{type:"button",class:"bu-btn py-1 text-xs",disabled:e.isEmpty,onClick:e.clearInput},c(e.tr("jtoj.clear")),9,re)]),i("div",le,[i("div",se,[i("span",ce,c(e.tr("jtoj.indent"))+":",1),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.indent===2}]),onClick:o[2]||(o[2]=s=>e.indent=2)},c(e.tr("jtoj.space2")),3),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.indent===4}]),onClick:o[3]||(o[3]=s=>e.indent=4)},c(e.tr("jtoj.space4")),3),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.indent==="tab"}]),onClick:o[4]||(o[4]=s=>e.indent="tab")},c(e.tr("jtoj.tab")),3),e.mode==="js-to-json"?(m(),a("button",{key:0,type:"button",class:g(["bu-chip",{"bu-chip-active":e.indent===0}]),onClick:o[5]||(o[5]=s=>e.indent=0)},c(e.tr("jtoj.minify")),3)):j("",!0)]),e.mode==="js-to-json"?(m(),a("label",ue,[B(i("input",{"onUpdate:modelValue":o[6]||(o[6]=s=>e.sortKeys=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[E,e.sortKeys]]),i("span",null,c(e.tr("jtoj.sortKeys")),1)])):j("",!0),e.savedHint?(m(),a("span",de,c(e.tr("jtoj.saved")),1)):j("",!0)])]),i("div",fe,[e.mode==="js-to-json"?(m(),a(Z,{key:0},[i("div",pe,[i("span",ae,c(e.tr("jtoj.undefinedHandling"))+":",1),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.undefinedHandling==="omit"}]),onClick:o[7]||(o[7]=s=>e.undefinedHandling="omit")},c(e.tr("jtoj.undefinedOmit")),3),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.undefinedHandling==="null"}]),onClick:o[8]||(o[8]=s=>e.undefinedHandling="null")},c(e.tr("jtoj.undefinedNull")),3)]),i("div",me,[i("span",he,c(e.tr("jtoj.functionHandling"))+":",1),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.functionHandling==="omit"}]),onClick:o[9]||(o[9]=s=>e.functionHandling="omit")},c(e.tr("jtoj.functionOmit")),3),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.functionHandling==="string"}]),onClick:o[10]||(o[10]=s=>e.functionHandling="string")},c(e.tr("jtoj.functionString")),3),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.functionHandling==="null"}]),onClick:o[11]||(o[11]=s=>e.functionHandling="null")},c(e.tr("jtoj.functionNull")),3)]),i("label",ge,[B(i("input",{"onUpdate:modelValue":o[12]||(o[12]=s=>e.escapeUnicode=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[E,e.escapeUnicode]]),i("span",null,c(e.tr("jtoj.escapeUnicode")),1)])],64)):(m(),a(Z,{key:1},[i("div",xe,[i("span",be,c(e.tr("jtoj.quoteStyle"))+":",1),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.quote==="single"}]),onClick:o[13]||(o[13]=s=>e.quote="single")},c(e.tr("jtoj.singleQuote")),3),i("button",{type:"button",class:g(["bu-chip",{"bu-chip-active":e.quote==="double"}]),onClick:o[14]||(o[14]=s=>e.quote="double")},c(e.tr("jtoj.doubleQuote")),3)]),i("label",ve,[B(i("input",{"onUpdate:modelValue":o[15]||(o[15]=s=>e.unquoteKeys=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[E,e.unquoteKeys]]),i("span",null,c(e.tr("jtoj.unquoteKeys")),1)]),i("label",ye,[B(i("input",{"onUpdate:modelValue":o[16]||(o[16]=s=>e.trailingComma=s),type:"checkbox",class:"h-3.5 w-3.5 accent-[var(--color-brand)]"},null,512),[[E,e.trailingComma]]),i("span",null,c(e.tr("jtoj.trailingComma")),1)]),i("div",je,[i("span",we,c(e.tr("jtoj.wrapper"))+":",1),B(i("select",{"onUpdate:modelValue":o[17]||(o[17]=s=>e.declaration=s),class:"rounded-lg border border-line bg-white px-2 py-1 text-xs text-ink focus:border-brand focus:outline-none"},[i("option",ke,c(e.tr("jtoj.wrapperNone")),1),i("option",_e,c(e.tr("jtoj.wrapperConst")),1),i("option",Ce,c(e.tr("jtoj.wrapperExport")),1)],512),[[_n,e.declaration]])])],64))])]),i("div",Se,[i("div",Ue,[i("div",Te,[i("div",Be,[i("h2",Ie,c(e.mode==="js-to-json"?e.tr("jtoj.inputJs"):e.tr("jtoj.inputJson")),1),e.isEmpty?(m(),a("span",He,c(e.tr("jtoj.emptyInput")),1)):e.valid?(m(),a("span",Je,[o[23]||(o[23]=i("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[i("path",{d:"M20 6L9 17l-5-5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),rn(" "+c(e.tr("jtoj.valid")),1)])):(m(),a("span",Ne,[o[24]||(o[24]=i("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[i("circle",{cx:"12",cy:"12",r:"9"}),i("line",{x1:"12",y1:"8",x2:"12",y2:"12","stroke-linecap":"round"}),i("line",{x1:"12",y1:"16",x2:"12.01",y2:"16","stroke-linecap":"round"})],-1)),rn(" "+c(e.tr("jtoj.invalid")),1)]))])]),i("div",Oe,[B(i("textarea",{"onUpdate:modelValue":o[18]||(o[18]=s=>e.input=s),spellcheck:"false",placeholder:e.mode==="js-to-json"?e.tr("jtoj.placeholderJs"):e.tr("jtoj.placeholderJson"),class:"font-mono h-[26rem] sm:h-[30rem] lg:h-[34rem] w-full resize-none bg-white p-4 text-xs sm:text-sm text-ink placeholder:text-faint focus:outline-none"},null,8,Ae),[[Cn,e.input]])]),i("div",Le,[i("span",null,c(e.stats.inChars)+" "+c(e.tr("jtoj.chars"))+" · "+c(e.stats.inLines)+" "+c(e.tr("jtoj.lines"))+" · "+c(e.sizeLabel(e.stats.inBytes)),1),e.error?(m(),a("span",Ee,c(e.tr("jtoj.errorLineCol",{line:e.error.line,col:e.error.column})),1)):j("",!0)])]),i("div",Me,[i("div",Ve,[i("div",ze,[i("h2",Re,c(e.mode==="js-to-json"?e.tr("jtoj.outputJson"):e.tr("jtoj.outputJs")),1)]),i("div",De,[i("button",{type:"button",class:"inline-flex shrink-0 items-center gap-1 rounded-lg border border-line bg-white px-2 py-1 text-xs text-muted transition hover:border-brand hover:text-brand-dark disabled:cursor-not-allowed disabled:opacity-40",disabled:!e.output,onClick:e.downloadOutput},[o[25]||(o[25]=i("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8"},[i("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"}),i("polyline",{points:"7 10 12 15 17 10"}),i("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),i("span",null,c(e.tr("jtoj.download")),1)],8,qe),Sn(e.CopyButton,{locale:t.locale,value:e.output},null,8,["locale","value"])])]),i("div",Ke,[e.isEmpty?(m(),a("div",Fe,c(e.tr("jtoj.emptyOutput")),1)):e.error?(m(),a("div",Pe,[i("div",Ze,[i("div",We,[o[26]||(o[26]=i("svg",{class:"h-4 w-4 shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[i("circle",{cx:"12",cy:"12",r:"9"}),i("line",{x1:"12",y1:"8",x2:"12",y2:"12","stroke-linecap":"round"}),i("line",{x1:"12",y1:"16",x2:"12.01",y2:"16","stroke-linecap":"round"})],-1)),i("span",null,c(e.tr("jtoj.error")),1)]),i("p",Ye,c(e.error.message),1),i("p",Qe,c(e.tr("jtoj.errorLineCol",{line:e.error.line,col:e.error.column})),1),e.error.snippet?(m(),a("div",Ge,c(e.error.snippet),1)):j("",!0)])])):(m(),a("div",Xe,[i("pre",$e,c(e.output),1)]))]),i("div",no,[i("span",null,c(e.stats.outChars)+" "+c(e.tr("jtoj.chars"))+" · "+c(e.stats.outLines)+" "+c(e.tr("jtoj.lines"))+" · "+c(e.sizeLabel(e.stats.outBytes)),1),e.output&&e.stats.ratio?(m(),a("span",eo,c(e.tr("jtoj.ratio"))+": "+c(e.stats.ratio),1)):j("",!0)])])]),e.history.length>0?(m(),a("div",oo,[i("div",to,[i("div",null,[i("h3",io,c(e.tr("jtoj.history")),1),i("p",ro,c(e.tr("jtoj.historyHint",{n:e.HISTORY_LIMIT})),1)]),i("button",{type:"button",class:"bu-btn py-1 text-xs text-danger hover:border-danger hover:text-danger",onClick:e.askClearHistory},c(e.tr("jtoj.historyClear")),1)]),i("div",lo,[(m(!0),a(Z,null,Un(e.history,s=>(m(),a("div",{key:s.id,class:"flex items-center justify-between py-2.5 text-xs"},[i("div",so,[i("span",{class:g(["rounded px-1.5 py-0.5 text-[10px] font-medium",s.mode==="js-to-json"?"bg-brand-soft text-brand-dark":"bg-canvas text-muted border border-line"])},c(s.mode==="js-to-json"?"JS → JSON":"JSON → JS"),3),i("span",co,c(s.content),1),i("span",uo,c(e.formatTime(s.createdAt)),1)]),i("div",fo,[i("button",{type:"button",class:"bu-btn py-0.5 px-2 text-xs",onClick:p=>e.loadHistoryItem(s)},c(e.tr("jtoj.historyLoad")),9,po),i("button",{type:"button",class:"bu-btn py-0.5 px-1.5 text-xs text-danger hover:border-danger hover:text-danger",onClick:p=>e.deleteHistoryItem(s.id)},[...o[27]||(o[27]=[i("svg",{class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[i("path",{d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],8,ao)])]))),128))])])):j("",!0),e.pending?(m(),a("div",{key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",onClick:o[20]||(o[20]=Tn(s=>e.pending=null,["self"]))},[i("div",mo,[i("h3",ho,c(e.pending.title),1),i("p",go,c(e.pending.message),1),i("div",xo,[i("button",{type:"button",class:"bu-btn text-xs",onClick:o[19]||(o[19]=s=>e.pending=null)},c(e.tr("jtoj.cancel")),1),i("button",{type:"button",class:"bu-btn bu-btn-primary text-xs",onClick:e.runPending},c(e.tr("jtoj.confirm")),1)])])])):j("",!0)])}const ko=An($n,[["render",bo]]);export{ko as default};
