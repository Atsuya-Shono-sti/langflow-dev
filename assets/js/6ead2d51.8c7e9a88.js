"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5327],{77074:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>h,assets:()=>c,chCodeConfig:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"Tutorials/tutorials-math-agent","title":"Math agent","description":"Build a Math Agent flow for an agentic application using the Tool-calling agent component.","source":"@site/docs/Tutorials/tutorials-math-agent.md","sourceDirName":"Tutorials","slug":"/tutorials-math-agent","permalink":"/tutorials-math-agent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Math agent","slug":"/tutorials-math-agent"},"sidebar":"docs","previous":{"title":"Memory chatbot","permalink":"/tutorials-memory-chatbot"},"next":{"title":"Sequential tasks agent","permalink":"/tutorials-sequential-agent"}}');var r=n(74848),s=n(28453),i=n(24754);n(84443);const a={title:"Math agent",slug:"/tutorials-math-agent"},l=void 0,c={},h={annotations:i.hk,Code:i.Cy},d={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open Langflow and start a new flow",id:"open-langflow-and-start-a-new-flow",level:2},{value:"Math Agent flow",id:"math-agent-flow",level:2},{value:"Run the Math Agent flow",id:"run-the-math-agent-flow",level:2}];function g(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return h||m("CH",!1),h.Code||m("CH.Code",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n",(0,r.jsxs)(t.p,{children:["Build a ",(0,r.jsx)(t.strong,{children:"Math Agent"})," flow for an agentic application using the ",(0,r.jsx)(t.strong,{children:"Tool-calling agent"})," component."]}),"\n",(0,r.jsxs)(t.p,{children:["In this flow, the ",(0,r.jsx)(t.strong,{children:"Tool-calling agent"})," reasons using an ",(0,r.jsx)(t.strong,{children:"Open AI"})," LLM to solve math problems.\nIt selects the ",(0,r.jsx)(t.strong,{children:"Calculator"})," tool for simpler math and the ",(0,r.jsx)(t.strong,{children:"Python REPL"})," tool (with the Python ",(0,r.jsx)(t.code,{children:"math"})," library) for more complex problems."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To use this flow, you need an OpenAI API key."}),"\n",(0,r.jsx)(t.h2,{id:"open-langflow-and-start-a-new-flow",children:"Open Langflow and start a new flow"}),"\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"New Flow"}),", and then select the ",(0,r.jsx)(t.strong,{children:"Math Agent"})," flow."]}),"\n",(0,r.jsx)(t.p,{children:"This opens a starter flow with the necessary components to run an agentic application using the Tool-calling agent."}),"\n",(0,r.jsx)(t.h2,{id:"math-agent-flow",children:"Math Agent flow"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(87988).A+"",width:"2104",height:"1746"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Math Agent"})," flow consists of these components:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Tool calling agent"})," component uses the connected LLM to reason through the user's input and select among the connected tools to complete its task."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Python REPL tool"})," component executes Python code in a REPL (Read-Evaluate-Print Loop) interpreter."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Calculator"})," component performs basic arithmetic operations."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Chat Input"})," component accepts user input to the chat."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Prompt"})," component combines the user input with a user-defined prompt."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Chat Output"})," component prints the flow's output to the chat."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"OpenAI"})," model component sends the user input and prompt to the OpenAI API and receives a response."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"run-the-math-agent-flow",children:"Run the Math Agent flow"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Add your credentials to the Open AI component."}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Playground"})," to start a chat session."]}),"\n",(0,r.jsxs)(t.li,{children:["Enter a simple math problem, like ",(0,r.jsx)(t.code,{children:"2 + 2"}),", and then make sure the bot responds with the correct answer."]}),"\n",(0,r.jsxs)(t.li,{children:["To confirm the REPL interpreter is working, prompt the ",(0,r.jsx)(t.code,{children:"math"})," library directly with ",(0,r.jsx)(t.code,{children:"math.sqrt(4)"})," and see if the bot responds with ",(0,r.jsx)(t.code,{children:"4"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"The agent will also reason through more complex word problems. For example, prompt the agent with the following math problem:"}),"\n"]}),"\n",(0,r.jsx)(h.Code,{codeConfig:d,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"The equation 24x2+25x\u221247ax\u22122=\u22128x\u22123\u221253ax\u22122 is true for all values of x\u22602a, where a is a constant.",props:{}}]},{tokens:[{content:"What is the value of a?",props:{}}]},{tokens:[{content:"A) -16",props:{}}]},{tokens:[{content:"B) -3",props:{}}]},{tokens:[{content:"C) 3",props:{}}]},{tokens:[{content:"D) 16",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,r.jsxs)(t.p,{children:["The agent should respond with ",(0,r.jsx)(t.code,{children:"B"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Now that your query has completed the journey from ",(0,r.jsx)(t.strong,{children:"Chat input"})," to ",(0,r.jsx)(t.strong,{children:"Chat output"}),", you have completed the ",(0,r.jsx)(t.strong,{children:"Math Agent"})," flow."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84443:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var o=n(64058),r=n(74848);function s(e){let{name:t,...n}=e;const s=o[t];return s?(0,r.jsx)(s,{...n}):null}},87988:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/starter-flow-simple-agent-repl-6c6df85ce6d01bfafebe3e4247cefc83.png"}}]);