"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3968],{63917:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>h,assets:()=>l,chCodeConfig:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"Concepts/concepts-playground","title":"Playground","description":"The\xa0Playground\xa0is a dynamic interface designed for real-time interaction with LLMs, allowing users to chat, access memories, and monitor inputs and outputs. Here, users can directly prototype their models, making adjustments and observing different outcomes.","source":"@site/docs/Concepts/concepts-playground.md","sourceDirName":"Concepts","slug":"/concepts-playground","permalink":"/concepts-playground","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Playground","slug":"/concepts-playground"},"sidebar":"docs","previous":{"title":"Langflow overview","permalink":"/concepts-overview"},"next":{"title":"Components","permalink":"/concepts-components"}}');var s=t(74848),i=t(28453),c=t(24754),r=t(84443);const a={title:"Playground",slug:"/concepts-playground"},d=void 0,l={},h={annotations:c.hk,Code:c.Cy},u={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Run a flow in the playgound",id:"run-a-flow-in-the-playgound",level:2},{value:"View playground messages by session ID",id:"view-playground-messages-by-session-id",level:2},{value:"Use custom Session IDs for multiple user interactions",id:"use-custom-session-ids-for-multiple-user-interactions",level:2}];function g(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return h||f("CH",!1),h.Code||f("CH.Code",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.strong,{children:"Playground"}),"\xa0is a dynamic interface designed for real-time interaction with LLMs, allowing users to chat, access memories, and monitor inputs and outputs. Here, users can directly prototype their models, making adjustments and observing different outcomes."]}),"\n",(0,s.jsxs)(n.p,{children:["As long as you have an ",(0,s.jsx)(n.a,{href:"/components-io",children:"Input or Output"})," component working, you can open it by clicking the\xa0",(0,s.jsx)(n.strong,{children:"Playground"}),"\xa0button.\nThe Playground's window arrangement changes depending on what components are being used."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(78170).A+"",width:"3244",height:"1776"})}),"\n",(0,s.jsx)(n.h2,{id:"run-a-flow-in-the-playgound",children:"Run a flow in the playgound"}),"\n",(0,s.jsxs)(n.p,{children:["When you run a flow in the ",(0,s.jsx)(n.strong,{children:"Playground"}),", Langflow calls the ",(0,s.jsx)(n.code,{children:"/build/{flow_id}/flow"})," endpoint in ",(0,s.jsx)(n.a,{href:"https://github.com/langflow-ai/langflow/blob/main/src/backend/base/langflow/api/v1/chat.py#L162",children:"chat.py"}),". This call retrieves the flow data, builds a graph, and executes the graph. As each component (or node) is executed, the ",(0,s.jsx)(n.code,{children:"build_vertex"})," function calls ",(0,s.jsx)(n.code,{children:"build_and_run"}),", which may call the individual components' ",(0,s.jsx)(n.code,{children:"def_build"})," method, if it exists. If a component doesn't have a ",(0,s.jsx)(n.code,{children:"def_build"})," function, the build still returns a component."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"build"})," function allows components to execute logic at runtime. For example, the ",(0,s.jsx)(n.a,{href:"https://github.com/langflow-ai/langflow/blob/main/src/backend/base/langflow/components/langchain_utilities/recursive_character.py",children:"Recursive character text splitter"})," is a child of the ",(0,s.jsx)(n.code,{children:"LCTextSplitterComponent"})," class. When text needs to be processed, the parent class's ",(0,s.jsx)(n.code,{children:"build"})," method is called, which creates a ",(0,s.jsx)(n.code,{children:"RecursiveCharacterTextSplitter"})," object and uses it to split the text according to the defined parameters. The split text is then passed on to the next component. This all occurs when the component is built."]}),"\n",(0,s.jsx)(n.h2,{id:"view-playground-messages-by-session-id",children:"View playground messages by session ID"}),"\n",(0,s.jsxs)(n.p,{children:["When you send a message from the ",(0,s.jsx)(n.strong,{children:"Playground"})," interface, the interactions are stored in the ",(0,s.jsx)(n.strong,{children:"Message Logs"})," by ",(0,s.jsx)(n.code,{children:"session_id"}),".\nA single flow can have multiple chats, and different flows can share the same chat. Each chat will have a different ",(0,s.jsx)(n.code,{children:"session_id"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To view messages by ",(0,s.jsx)(n.code,{children:"session_id"})," within the Playground, click the ",(0,s.jsx)(r.A,{name:"Ellipsis","aria-label":"Horizontal ellipsis"})," menu of any chat session, and then select ",(0,s.jsx)(n.strong,{children:"Message Logs"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(43249).A+"",width:"3250",height:"1778"})}),"\n",(0,s.jsx)(n.p,{children:"Individual messages in chat memory can be edited or deleted. Modifying these memories influences the behavior of the chatbot responses."}),"\n",(0,s.jsxs)(n.p,{children:["To learn more about chat memories in Langflow, see\xa0",(0,s.jsx)(n.a,{href:"/components-memories",children:"Memory components"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"use-custom-session-ids-for-multiple-user-interactions",children:"Use custom Session IDs for multiple user interactions"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"session_id"})," values are used to track user interactions in a flow.\nBy default, if the ",(0,s.jsx)(n.code,{children:"session_id"})," value is empty, it is set to the same value as the ",(0,s.jsx)(n.code,{children:"flow_id"}),". In this case, every chat call uses the same ",(0,s.jsx)(n.code,{children:"session_id"}),", and you effectively have one chat session."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"session_id"})," value can be configured in the ",(0,s.jsx)(n.strong,{children:"Advanced Settings"})," of the ",(0,s.jsx)(n.strong,{children:"Chat Input"})," and ",(0,s.jsx)(n.strong,{children:"Chat Output"})," components."]}),"\n",(0,s.jsxs)(n.p,{children:["To have more than one session in a single flow, pass a specific Session ID to a flow with the ",(0,s.jsx)(n.code,{children:"session_id"})," parameter in the URL. All the components in the flow will automatically use this ",(0,s.jsx)(n.code,{children:"session_id"})," value."]}),"\n",(0,s.jsx)(n.p,{children:"To post a message to a flow with a specific Session ID with curl, enter the following command:"}),"\n",(0,s.jsx)(h.Code,{codeConfig:u,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"   curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:'POST "http://127.0.0.1:7860/api/v1/run/',props:{style:{color:"#A5D6FF"}}},{content:"$FLOW_ID",props:{style:{color:"#C9D1D9"}}},{content:'" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"   -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json' ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"   -d ",props:{style:{color:"#79C0FF"}}},{content:"'{",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'       "session_id": "custom_session_123",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'       "input_value": "message",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'       "input_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'       "output_type": "chat"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"   }'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsxs)(n.p,{children:["Check your flow's ",(0,s.jsx)(n.strong,{children:"Playground"}),". In addition to the messages stored for the Default Session, a new session is started with your custom Session ID."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84443:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(64058),s=t(74848);function i(e){let{name:n,...t}=e;const i=o[n];return i?(0,s.jsx)(i,{...t}):null}},43249:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/messages-logs-aec5213dc668ee51c2a40eab2ba0718c.png"},78170:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/playground-b2c623fb6849024570bc9bd5285309f5.png"}}]);