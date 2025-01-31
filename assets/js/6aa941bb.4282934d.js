"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3327],{19054:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>h,assets:()=>c,chCodeConfig:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"Components/components-logic","title":"Logic","description":"Logic components provide functionalities for routing, conditional processing, and flow management.","source":"@site/docs/Components/components-logic.md","sourceDirName":"Components","slug":"/components-logic","permalink":"/components-logic","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Logic","slug":"/components-logic"},"sidebar":"docs","previous":{"title":"Loaders","permalink":"/components-loaders"},"next":{"title":"Memories","permalink":"/components-memories"}}');var i=n(74848),o=n(28453),r=n(24754);const d={title:"Logic",slug:"/components-logic"},l="Logic components in Langflow",c={},h={annotations:r.hk,Code:r.Cy},a={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},x=[{value:"Use a logic component in a flow",id:"use-a-logic-component-in-a-flow",level:2},{value:"Conditional router",id:"conditional-router",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Data conditional router",id:"data-conditional-router",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"Outputs",id:"outputs-1",level:3},{value:"Flow as Tool",id:"flow-as-tool",level:2},{value:"Inputs",id:"inputs-2",level:3},{value:"Outputs",id:"outputs-2",level:3},{value:"Listen",id:"listen",level:2},{value:"Inputs",id:"inputs-3",level:3},{value:"Outputs",id:"outputs-3",level:3},{value:"Loop",id:"loop",level:2},{value:"Inputs",id:"inputs-4",level:3},{value:"Outputs",id:"outputs-4",level:3},{value:"Notify",id:"notify",level:2},{value:"Inputs",id:"inputs-5",level:3},{value:"Outputs",id:"outputs-5",level:3},{value:"Run flow",id:"run-flow",level:2},{value:"Inputs",id:"inputs-6",level:3},{value:"Outputs",id:"outputs-6",level:3},{value:"Sub Flow",id:"sub-flow",level:2},{value:"Inputs",id:"inputs-7",level:3},{value:"Outputs",id:"outputs-7",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return h||p("CH",!1),h.Code||p("CH.Code",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"logic-components-in-langflow",children:"Logic components in Langflow"})}),"\n",(0,i.jsx)(t.p,{children:"Logic components provide functionalities for routing, conditional processing, and flow management."}),"\n",(0,i.jsx)(t.h2,{id:"use-a-logic-component-in-a-flow",children:"Use a logic component in a flow"}),"\n",(0,i.jsxs)(t.p,{children:['This flow creates a summarizing "for each" loop with the ',(0,i.jsx)(t.a,{href:"/components-logic#loop",children:"Loop"})," component."]}),"\n",(0,i.jsxs)(t.p,{children:["The component iterates over a list of ",(0,i.jsx)(t.a,{href:"/concepts-objects#data-object",children:"Data"})," objects until it's completed, and then the ",(0,i.jsx)(t.strong,{children:"Done"})," loop aggregates the results."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"File"})," component loads text files from your local machine, and then the ",(0,i.jsx)(t.strong,{children:"Parse Data"})," component parses them into a list of structured ",(0,i.jsx)(t.code,{children:"Data"})," objects.\nThe ",(0,i.jsx)(t.strong,{children:"Loop"})," component passes each ",(0,i.jsx)(t.code,{children:"Data"})," object to a ",(0,i.jsx)(t.strong,{children:"Prompt"})," to be summarized."]}),"\n",(0,i.jsxs)(t.p,{children:["When the ",(0,i.jsx)(t.strong,{children:"Loop"})," component runs out of ",(0,i.jsx)(t.code,{children:"Data"}),", the ",(0,i.jsx)(t.strong,{children:"Done"})," loop activates, which counts the number of pages and summarizes their tone with another ",(0,i.jsx)(t.strong,{children:"Prompt"}),".\nThis is represented in Langflow by connecting the Parse Data component's ",(0,i.jsx)(t.strong,{children:"Data List"})," output to the Loop component's ",(0,i.jsx)(t.code,{children:"Data"})," loop input."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Sample Flow looping summarizer",src:n(55673).A+"",width:"2676",height:"1512"})}),"\n",(0,i.jsx)(t.p,{children:"The output will look similar to this:"}),"\n",(0,i.jsx)(h.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"Document Summary",props:{}}]},{tokens:[{content:"Total Pages Processed",props:{}}]},{tokens:[{content:"Total Pages: 2",props:{}}]},{tokens:[{content:"Overall Tone of Document",props:{}}]},{tokens:[{content:"Tone: Informative and Instructional",props:{}}]},{tokens:[{content:"The documentation outlines microservices architecture patterns and best practices.",props:{}}]},{tokens:[{content:"It emphasizes service isolation and inter-service communication protocols.",props:{}}]},{tokens:[{content:"The use of asynchronous messaging patterns is recommended for system scalability.",props:{}}]},{tokens:[{content:"It includes code examples of REST and gRPC implementations to demonstrate integration approaches.",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,i.jsx)(t.h2,{id:"conditional-router",children:"Conditional router"}),"\n",(0,i.jsx)(t.p,{children:"This component routes an input message to a corresponding output based on text comparison."}),"\n",(0,i.jsx)(t.p,{children:"The ConditionalRouterComponent routes messages based on text comparison. It evaluates a condition by comparing two text inputs using a specified operator and routes the message accordingly."}),"\n",(0,i.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"input_text"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The primary text input for the operation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"match_text"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The text input to compare against."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"operator"}),(0,i.jsx)(t.td,{children:"Dropdown"}),(0,i.jsx)(t.td,{children:"The operator to apply for comparing the texts."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"case_sensitive"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"If true, the comparison will be case sensitive."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"message"}),(0,i.jsx)(t.td,{children:"Message"}),(0,i.jsx)(t.td,{children:"The message to pass through either route."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"max_iterations"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"The maximum number of iterations for the conditional router."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"default_route"}),(0,i.jsx)(t.td,{children:"Dropdown"}),(0,i.jsx)(t.td,{children:"The default route to take when max iterations are reached."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"true_result"}),(0,i.jsx)(t.td,{children:"Message"}),(0,i.jsx)(t.td,{children:"The output when the condition is true."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"false_result"}),(0,i.jsx)(t.td,{children:"Message"}),(0,i.jsx)(t.td,{children:"The output when the condition is false."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"data-conditional-router",children:"Data conditional router"}),"\n",(0,i.jsxs)(t.p,{children:["This component routes ",(0,i.jsx)(t.code,{children:"Data"})," objects based on a condition applied to a specified key, including boolean validation."]}),"\n",(0,i.jsx)(t.p,{children:"This component is particularly useful in workflows that require conditional routing of complex data structures, enabling dynamic decision-making based on data content."}),"\n",(0,i.jsx)(t.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"data_input"}),(0,i.jsx)(t.td,{children:"Data"}),(0,i.jsx)(t.td,{children:"The data object or list of data objects to process."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"key_name"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The name of the key in the data object to check."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"operator"}),(0,i.jsx)(t.td,{children:"Dropdown"}),(0,i.jsx)(t.td,{children:"The operator to apply for comparing the values."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"compare_value"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The value to compare against (not used for boolean validator)."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs-1",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"true_output"}),(0,i.jsx)(t.td,{children:"Data/List"}),(0,i.jsx)(t.td,{children:"Output when the condition is met."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"false_output"}),(0,i.jsx)(t.td,{children:"Data/List"}),(0,i.jsx)(t.td,{children:"Output when the condition is not met."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"flow-as-tool",children:"Flow as Tool"}),"\n",(0,i.jsx)(t.p,{children:"This component constructs a tool from a function that runs a loaded flow."}),"\n",(0,i.jsx)(t.h3,{id:"inputs-2",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"flow_name"}),(0,i.jsx)(t.td,{children:"Dropdown"}),(0,i.jsx)(t.td,{children:"The name of the flow to run."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tool_name"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The name of the tool."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tool_description"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The description of the tool."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"return_direct"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"If true, returns the result directly from the tool."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs-2",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"api_build_tool"}),(0,i.jsx)(t.td,{children:"Tool"}),(0,i.jsx)(t.td,{children:"The constructed tool from the flow."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"listen",children:"Listen"}),"\n",(0,i.jsx)(t.p,{children:"This component listens for a notification and retrieves its associated state."}),"\n",(0,i.jsx)(t.h3,{id:"inputs-3",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The name of the notification to listen for."})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs-3",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output"}),(0,i.jsx)(t.td,{children:"Data"}),(0,i.jsx)(t.td,{children:"The state associated with the notification."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"loop",children:"Loop"}),"\n",(0,i.jsxs)(t.p,{children:["This component iterates over a list of ",(0,i.jsx)(t.a,{href:"/concepts-objects#data-object",children:"Data"})," objects, outputting one item at a time and aggregating results from loop inputs."]}),"\n",(0,i.jsx)(t.h3,{id:"inputs-4",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"data"}),(0,i.jsx)(t.td,{children:"Data/List"}),(0,i.jsx)(t.td,{children:"The initial list of Data objects to iterate over."})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs-4",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"item"}),(0,i.jsx)(t.td,{children:"Data"}),(0,i.jsx)(t.td,{children:"Outputs one item at a time from the data list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"done"}),(0,i.jsx)(t.td,{children:"Data"}),(0,i.jsx)(t.td,{children:"Triggered when iteration complete, returns aggregated results."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"notify",children:"Notify"}),"\n",(0,i.jsx)(t.p,{children:"This component generates a notification for the Listen component to use."}),"\n",(0,i.jsx)(t.h3,{id:"inputs-5",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The name of the notification."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"data"}),(0,i.jsx)(t.td,{children:"Data"}),(0,i.jsx)(t.td,{children:"The data to store in the notification."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"append"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"If true, the record will be appended to the existing notification."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs-5",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output"}),(0,i.jsx)(t.td,{children:"Data"}),(0,i.jsx)(t.td,{children:"The data stored in the notification."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"run-flow",children:"Run flow"}),"\n",(0,i.jsx)(t.p,{children:"This component allows you to run a specified flow with given inputs and tweaks."}),"\n",(0,i.jsx)(t.p,{children:"The RunFlowComponent executes a specified flow within a larger workflow. It provides the ability to run a flow with custom inputs and apply tweaks to modify its behavior."}),"\n",(0,i.jsx)(t.h3,{id:"inputs-6",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"input_value"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The input value for the flow to process."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"flow_name"}),(0,i.jsx)(t.td,{children:"Dropdown"}),(0,i.jsx)(t.td,{children:"The name of the flow to run."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tweaks"}),(0,i.jsx)(t.td,{children:"Nested Dict"}),(0,i.jsx)(t.td,{children:"Tweaks to apply to the flow."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs-6",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"run_outputs"}),(0,i.jsx)(t.td,{children:"List[Data]"}),(0,i.jsx)(t.td,{children:"The results generated from running the flow."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"sub-flow",children:"Sub Flow"}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.code,{children:"SubFlowComponent"})," generates a component from a flow with all of its inputs and outputs."]}),"\n",(0,i.jsx)(t.p,{children:"This component can integrate entire flows as components within a larger workflow. It dynamically generates inputs based on the selected flow and executes the flow with provided parameters."}),"\n",(0,i.jsx)(t.h3,{id:"inputs-7",children:"Inputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"flow_name"}),(0,i.jsx)(t.td,{children:"Dropdown"}),(0,i.jsx)(t.td,{children:"The name of the flow to run."})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"outputs-7",children:"Outputs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"flow_outputs"}),(0,i.jsx)(t.td,{children:"List[Data]"}),(0,i.jsx)(t.td,{children:"The outputs generated from the flow."})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},55673:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/loop-text-summarizer-bd1d7be6d26bb47765931e3ab9f98dfa.png"}}]);