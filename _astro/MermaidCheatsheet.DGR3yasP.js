import{t as w}from"./utils.Cnprqvd4.js";import{_ as D}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c,a as e,d as f,t as s,n as v,F as S,r as M,f as A,j as y,i as u,k as m}from"./runtime-core.esm-bundler.uSHGqpAL.js";const p="https://mermaid.live/",x=[{type:"flowchart",label:{en:"Flowchart",zh:"流程图",ja:"フローチャート",ko:"플로우차트",ru:"Блок-схема",de:"Flussdiagramm"},description:{en:"Visualize decision paths, logic flows, and task sequences with nodes and styled arrows.",zh:"使用节点与带箭头的连接线，清晰展示业务流程、逻辑判断与状态流转。",ja:"ノードと矢印でロジックの流れや判定分岐を直感的に可視化します。",ko:"노드와 화살표로 로직의 흐름과 조건 분기를 직관적으로 시각화합니다.",ru:"Визуализация логических путей, условий и процессов с помощью узлов и стрелок.",de:"Visualisieren Sie Entscheidungswege, Logikabläufe und Aufgaben mit Knoten und Pfeilen."},code:`graph TD
  A[开始 / Start] --> B{参数是否合法?}
  B -- 是 / Yes --> C[执行核心业务逻辑]
  B -- 否 / No --> D[返回错误 400 Bad Request]
  C --> E{处理是否成功?}
  E -- 是 --> F[返回结果 200 OK]
  E -- 否 --> G[记录告警日志]
  G --> D
  F --> H[结束 / End]`},{type:"sequence",label:{en:"Sequence",zh:"时序图",ja:"シーケンス図",ko:"시퀀스 다이어그램",ru:"Диаграмма последовательности",de:"Sequenzdiagramm"},description:{en:"Demonstrate interactions and message flows between actors, services, and databases over time.",zh:"按时间顺序展示客户端、微服务网关、业务系统与数据库之间的交互调用消息流。",ja:"クライアント、API、データベース間のメッセージ送受信の流れを時系列で表現します。",ko:"클라이언트, API 서버, 데이터베이스 간의 상호작용과 메시지 흐름을 시간 순으로 표현합니다.",ru:"Демонстрация взаимодействия между пользователем, сервисами и базой данных по времени.",de:"Zeigt Interaktionen und Nachrichtenflüsse zwischen Akteuren, Diensten und Datenbanken im Zeitverlauf."},code:`sequenceDiagram
  autonumber
  actor User as 用户 (Client)
  participant Front as 前端页面
  participant API as 后端网关
  participant DB as 数据库 (MySQL)

  User->>Front: 提交表单数据
  Front->>API: POST /api/submit (Token)
  activate API
  API->>DB: 查询用户权限与唯一性校验
  DB-->>API: 校验通过
  API->>DB: 事务写入业务数据
  DB-->>API: 写入成功
  API-->>Front: 返回 200 (Success)
  deactivate API
  Front-->>User: 弹窗提示操作成功`},{type:"class",label:{en:"Class Diagram",zh:"类图 / 架构",ja:"クラス図",ko:"클래스 다이어그램",ru:"Диаграмма классов",de:"Klassendiagramm"},description:{en:"Model object-oriented class hierarchies, interfaces, inheritance, and dependencies.",zh:"面向对象设计利器，直观建模类与接口结构、字段属性、方法以及继承与关联关系。",ja:"クラスやインターフェースの構造、属性、メソッド、継承関係を整理・設計します。",ko:"객체 지향 클래스 구조, 인터페이스, 메서드 및 상속 관계를 명확히 설계합니다.",ru:"Моделирование иерархии классов, интерфейсов, наследования и зависимостей.",de:"Modellierung von Klassen, Schnittstellen, Vererbung und Abhängigkeiten in der OOP."},code:`classDiagram
  class BaseEntity {
    +String id
    +DateTime createdAt
    +save() Boolean
  }
  class User {
    +String username
    +String email
    +login() Boolean
    +changePassword(newPass) Void
  }
  class Order {
    +String orderNo
    +Double amount
    +pay() Void
  }
  BaseEntity <|-- User : 继承
  BaseEntity <|-- Order : 继承
  User "1" --> "*" Order : 拥有多个订单`},{type:"gantt",label:{en:"Gantt Chart",zh:"甘特图",ja:"ガントチャート",ko:"간트 차트",ru:"Диаграмма Ганта",de:"Gantt-Diagramm"},description:{en:"Track project milestones, sprint schedules, dependencies, and delivery phases.",zh:"规划项目进度周期，清晰编排需求分析、敏捷冲刺迭代、测试上线里程碑。",ja:"プロジェクトのマイルストーン、タスクスケジュール、リリース計画を可視化します。",ko:"프로젝트 일정, 마일스톤, 스프린트 계획 및 릴리스 일정을 한눈에 파악합니다.",ru:"Отслеживание сроков проекта, спринтов, зависимостей и этапов поставки.",de:"Verfolgen Sie Projektmeilensteine, Zeitpläne, Abhängigkeiten und Releasephasen."},code:`gantt
  title 项目版本发布排期计划
  dateFormat YYYY-MM-DD
  section 方案与设计
    需求评审与架构设计 :done,   des1, 2026-11-01, 2026-11-06
    UI 原型与交互设计  :active, des2, 2026-11-07, 2026-11-12
  section 编码开发
    核心功能模块编码   :        des3, 2026-11-13, 2026-11-25
    前后端接口联调     :        des4, 2026-11-26, 2026-11-29
  section 验收与发布
    全面回归测试       :        des5, 2026-11-30, 2026-12-04
    正式部署上线       :milestone, m1, 2026-12-05, 0d`},{type:"state",label:{en:"State Diagram",zh:"状态机图",ja:"状態遷移図",ko:"상태 다이어그램",ru:"Диаграмма состояний",de:"Zustandsdiagramm"},description:{en:"Map finite state machines, transitions, triggers, and lifecycle states.",zh:"用于建模有限状态机（FSM）、订单生命周期、工单状态流转及触发事件。",ja:"ステートマシン、ライフサイクル、イベントによる状態遷移を明確に定義します。",ko:"유한 상태 기계(FSM), 주문 상태 전이 및 이벤트 트리거를 체계적으로 정의합니다.",ru:"Отображение состояний конечного автомата, переходов и жизненных циклов.",de:"Modellieren von Zustandsautomaten, Übergängen, Triggern und Lebenszyklen."},code:`stateDiagram-v2
  [*] --> 待支付 : 创建订单
  待支付 --> 已支付 : 支付成功
  待支付 --> 已取消 : 超时未支付 / 用户取消
  已支付 --> 拣货中 : 仓库接单
  拣货中 --> 运输中 : 发货出库
  运输中 --> 已签收 : 用户确认收货
  已签收 --> [*] : 订单归档完成
  已取消 --> [*]`}],I=A({__name:"MermaidCheatsheet",props:{locale:{}},setup(h,{expose:a}){a();const n=h,t=y("flowchart"),l=y(!1);let i=null;const o=u(()=>x.find(r=>r.type===t.value)??x[0]),g=u(()=>o.value.label[n.locale]??o.value.label.en),_=u(()=>o.value.description[n.locale]??o.value.description.en);async function k(r=!1){try{await navigator.clipboard.writeText(o.value.code),l.value=!0,i&&clearTimeout(i),i=setTimeout(()=>{l.value=!1},2e3),r&&window.open(p,"_blank","noopener,noreferrer")}catch{const d=document.createElement("textarea");d.value=o.value.code,d.style.position="fixed",d.style.opacity="0",document.body.appendChild(d),d.select();try{document.execCommand("copy"),l.value=!0,i&&clearTimeout(i),i=setTimeout(()=>{l.value=!1},2e3)}finally{document.body.removeChild(d)}r&&window.open(p,"_blank","noopener,noreferrer")}}const b={props:n,activeType:t,copied:l,get copyTimer(){return i},set copyTimer(r){i=r},activeSnippet:o,activeLabel:g,activeDescription:_,copySnippet:k,get MERMAID_LIVE_URL(){return p},get MERMAID_SNIPPETS(){return x},get t(){return w}};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),E={class:"space-y-6"},P={class:"relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-brand/10 via-canvas to-white p-6 shadow-sm sm:p-8"},T={class:"relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"},B={class:"max-w-2xl space-y-2.5"},C={class:"flex flex-wrap items-center gap-2"},j={class:"inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark"},z={class:"rounded-full bg-canvas border border-line px-2.5 py-0.5 text-xs text-muted"},F={class:"text-xl font-bold tracking-tight text-ink sm:text-2xl"},V={class:"text-sm leading-relaxed text-muted sm:text-base"},L={class:"flex flex-wrap gap-2 pt-1 text-xs text-muted"},R={class:"inline-flex items-center gap-1 rounded bg-canvas px-2 py-1"},N={class:"inline-flex items-center gap-1 rounded bg-canvas px-2 py-1"},O={class:"inline-flex items-center gap-1 rounded bg-canvas px-2 py-1"},U={class:"inline-flex items-center gap-1 rounded bg-canvas px-2 py-1"},q={class:"shrink-0 pt-2 md:pt-0"},Y=["href"],Z={class:"bu-card p-5 sm:p-6"},G={class:"flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"},H={class:"text-base font-bold text-ink sm:text-lg"},K={class:"mt-0.5 text-xs text-muted sm:text-sm"},Q={class:"flex items-center gap-2 pt-2 sm:pt-0"},J={key:0,class:"h-3.5 w-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},W={key:1,class:"h-3.5 w-3.5 text-ok",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},X=["title"],$={class:"mt-4 flex flex-wrap gap-2 border-b border-line pb-3"},ee=["onClick"],te={class:"mt-3 flex items-start gap-2 rounded-lg bg-canvas px-3.5 py-2 text-xs text-muted"},ne={class:"leading-relaxed"},ae={class:"text-ink font-semibold"},se={class:"relative mt-3"},oe={class:"max-h-96 overflow-x-auto rounded-xl border border-line bg-slate-900 p-4 font-mono text-xs leading-relaxed text-slate-100 selection:bg-brand selection:text-white"};function ie(h,a,n,t,l,i){return m(),c("div",E,[e("div",P,[e("div",T,[e("div",B,[e("div",C,[e("span",j,[a[2]||(a[2]=e("span",{class:"h-1.5 w-1.5 rounded-full bg-brand animate-pulse"},null,-1)),f(" "+s(t.t(n.locale,"mm.officialBadge")),1)]),e("span",z,s(t.t(n.locale,"mm.freeNotice")),1)]),e("h2",F,s(t.t(n.locale,"mm.heroTitle")),1),e("p",V,s(t.t(n.locale,"mm.heroDesc")),1),e("div",L,[e("span",R," ✓ "+s(t.t(n.locale,"mm.tagRealtime")),1),e("span",N," ✓ "+s(t.t(n.locale,"mm.tagExport")),1),e("span",O," ✓ "+s(t.t(n.locale,"mm.tagMarkdown")),1),e("span",U," ✓ "+s(t.t(n.locale,"mm.tagNoSignup")),1)])]),e("div",q,[e("a",{href:t.MERMAID_LIVE_URL,target:"_blank",rel:"noopener noreferrer",class:"bu-btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold shadow-md transition duration-200 hover:shadow-lg sm:w-auto"},[e("span",null,s(t.t(n.locale,"mm.openEditor")),1),a[3]||(a[3]=e("svg",{class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[e("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e("polyline",{points:"15 3 21 3 21 9"}),e("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1))],8,Y)])])]),e("div",Z,[e("div",G,[e("div",null,[e("h3",H,s(t.t(n.locale,"mm.cheatsheetTitle")),1),e("p",K,s(t.t(n.locale,"mm.cheatsheetDesc")),1)]),e("div",Q,[e("button",{type:"button",class:v(["bu-btn inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium",t.copied?"text-ok border-ok":""]),onClick:a[0]||(a[0]=o=>t.copySnippet(!1))},[t.copied?(m(),c("svg",W,[...a[5]||(a[5]=[e("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):(m(),c("svg",J,[...a[4]||(a[4]=[e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1)])])),e("span",null,s(t.copied?t.t(n.locale,"mm.copied"):t.t(n.locale,"mm.copyCode")),1)],2),e("button",{type:"button",class:"bu-btn inline-flex items-center gap-1.5 bg-brand-soft text-brand-dark hover:bg-brand hover:text-white px-3 py-1.5 text-xs font-medium transition-colors",onClick:a[1]||(a[1]=o=>t.copySnippet(!0)),title:t.t(n.locale,"mm.copyAndOpenTip")},[e("span",null,s(t.t(n.locale,"mm.copyAndOpen")),1),a[6]||(a[6]=e("svg",{class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e("polyline",{points:"15 3 21 3 21 9"}),e("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1))],8,X)])]),e("div",$,[(m(!0),c(S,null,M(t.MERMAID_SNIPPETS,o=>(m(),c("button",{key:o.type,type:"button",class:v(["rounded-lg px-3 py-1.5 text-xs font-medium transition-all",t.activeType===o.type?"bg-brand text-white shadow-sm":"bg-canvas text-muted hover:bg-brand-soft hover:text-brand-dark"]),onClick:g=>t.activeType=o.type},s(o.label[n.locale]??o.label.en),11,ee))),128))]),e("div",te,[a[7]||(a[7]=e("svg",{class:"mt-0.5 h-3.5 w-3.5 shrink-0 text-brand",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)),e("span",ne,[e("strong",ae,s(t.activeLabel)+"：",1),f(" "+s(t.activeDescription),1)])]),e("div",se,[e("pre",oe,[e("code",null,s(t.activeSnippet.code),1)])])])])}const ce=D(I,[["render",ie]]);export{ce as default};
