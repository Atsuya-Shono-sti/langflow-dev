"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7771],{28948:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"type":"api","id":"post-validate-prompt","title":"Post Validate Prompt","description":"","slug":"/post-validate-prompt","frontMatter":{},"api":{"tags":["Validate"],"operationId":"post_validate_prompt_api_v1_validate_prompt_post","requestBody":{"content":{"application/json":{"schema":{"properties":{"name":{"type":"string","title":"Name"},"template":{"type":"string","title":"Template"},"custom_fields":{"anyOf":[{"type":"object"}],"title":"Custom Fields","nullable":true},"frontend_node":{"anyOf":[{"properties":{"template":{"type":"object","title":"Template"},"description":{"anyOf":[{"type":"string"}],"title":"Description","nullable":true},"icon":{"anyOf":[{"type":"string"}],"title":"Icon","nullable":true},"is_input":{"anyOf":[{"type":"boolean"}],"title":"Is Input","nullable":true},"is_output":{"anyOf":[{"type":"boolean"}],"title":"Is Output","nullable":true},"is_composition":{"anyOf":[{"type":"boolean"}],"title":"Is Composition","nullable":true},"base_classes":{"items":{"type":"string"},"type":"array","title":"Base Classes"},"name":{"type":"string","title":"Name","default":""},"display_name":{"anyOf":[{"type":"string"}],"title":"Display Name","default":"","nullable":true},"documentation":{"type":"string","title":"Documentation","default":""},"minimized":{"type":"boolean","title":"Minimized","default":false},"custom_fields":{"anyOf":[{"type":"object"}],"title":"Custom Fields","nullable":true},"output_types":{"items":{"type":"string"},"type":"array","title":"Output Types","default":[]},"full_path":{"anyOf":[{"type":"string"}],"title":"Full Path","nullable":true},"pinned":{"type":"boolean","title":"Pinned","default":false},"conditional_paths":{"items":{"type":"string"},"type":"array","title":"Conditional Paths","default":[]},"frozen":{"type":"boolean","title":"Frozen","default":false},"outputs":{"items":{"properties":{"types":{"items":{"type":"string"},"type":"array","title":"Types","default":[]},"selected":{"anyOf":[{"type":"string"}],"title":"Selected","nullable":true},"name":{"type":"string","title":"Name","description":"The name of the field."},"hidden":{"anyOf":[{"type":"boolean"}],"title":"Hidden","nullable":true},"display_name":{"anyOf":[{"type":"string"}],"title":"Display Name","nullable":true},"method":{"anyOf":[{"type":"string"}],"title":"Method","nullable":true},"value":{"anyOf":[{}],"title":"Value","default":"__UNDEFINED__","nullable":true},"cache":{"type":"boolean","title":"Cache","default":true},"required_inputs":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Required Inputs","nullable":true},"allows_loop":{"type":"boolean","title":"Allows Loop","default":false}},"type":"object","required":["name"],"title":"Output"},"type":"array","title":"Outputs","default":[]},"field_order":{"items":{"type":"string"},"type":"array","title":"Field Order","default":[]},"beta":{"type":"boolean","title":"Beta","default":false},"legacy":{"type":"boolean","title":"Legacy","default":false},"error":{"anyOf":[{"type":"string"}],"title":"Error","nullable":true},"edited":{"type":"boolean","title":"Edited","default":false},"metadata":{"type":"object","title":"Metadata","default":{}},"tool_mode":{"type":"boolean","title":"Tool Mode","default":false}},"type":"object","required":["template","base_classes"],"title":"FrontendNodeRequest"}],"nullable":true}},"type":"object","required":["name","template"],"title":"ValidatePromptRequest"}}},"required":true},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"input_variables":{"items":{},"type":"array","title":"Input Variables"},"frontend_node":{"anyOf":[{"properties":{"template":{"type":"object","title":"Template"},"description":{"anyOf":[{"type":"string"}],"title":"Description","nullable":true},"icon":{"anyOf":[{"type":"string"}],"title":"Icon","nullable":true},"is_input":{"anyOf":[{"type":"boolean"}],"title":"Is Input","nullable":true},"is_output":{"anyOf":[{"type":"boolean"}],"title":"Is Output","nullable":true},"is_composition":{"anyOf":[{"type":"boolean"}],"title":"Is Composition","nullable":true},"base_classes":{"items":{"type":"string"},"type":"array","title":"Base Classes"},"name":{"type":"string","title":"Name","default":""},"display_name":{"type":"string","title":"Display Name"},"documentation":{"type":"string","title":"Documentation","default":""},"minimized":{"type":"boolean","title":"Minimized","default":false},"custom_fields":{"anyOf":[{"type":"object"}],"title":"Custom Fields","nullable":true},"output_types":{"items":{"type":"string"},"type":"array","title":"Output Types","default":[]},"full_path":{"anyOf":[{"type":"string"}],"title":"Full Path","nullable":true},"pinned":{"type":"boolean","title":"Pinned","default":false},"conditional_paths":{"items":{"type":"string"},"type":"array","title":"Conditional Paths","default":[]},"frozen":{"type":"boolean","title":"Frozen","default":false},"outputs":{"items":{"properties":{"types":{"items":{"type":"string"},"type":"array","title":"Types","default":[]},"selected":{"anyOf":[{"type":"string"}],"title":"Selected","nullable":true},"name":{"type":"string","title":"Name","description":"The name of the field."},"hidden":{"anyOf":[{"type":"boolean"}],"title":"Hidden","nullable":true},"display_name":{"anyOf":[{"type":"string"}],"title":"Display Name","nullable":true},"method":{"anyOf":[{"type":"string"}],"title":"Method","nullable":true},"value":{"anyOf":[{}],"title":"Value","default":"__UNDEFINED__","nullable":true},"cache":{"type":"boolean","title":"Cache","default":true},"required_inputs":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Required Inputs","nullable":true},"allows_loop":{"type":"boolean","title":"Allows Loop","default":false}},"type":"object","required":["name"],"title":"Output"},"type":"array","title":"Outputs","default":[]},"field_order":{"items":{"type":"string"},"type":"array","title":"Field Order","default":[]},"beta":{"type":"boolean","title":"Beta","default":false},"legacy":{"type":"boolean","title":"Legacy","default":false},"error":{"anyOf":[{"type":"string"}],"title":"Error","nullable":true},"edited":{"type":"boolean","title":"Edited","default":false},"metadata":{"type":"object","title":"Metadata","default":{}},"tool_mode":{"type":"boolean","title":"Tool Mode","default":false}},"type":"object","required":["template","base_classes"],"title":"FrontendNodeRequest"}],"nullable":true}},"type":"object","required":["input_variables"],"title":"PromptValidationResponse"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"description":"Post Validate Prompt","method":"post","path":"/api/v1/validate/prompt","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"name":"string","template":"string"},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Post Validate Prompt","description":{"type":"text/plain"},"url":{"path":["api","v1","validate","prompt"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"name\\": \\"<string>\\",\\n  \\"template\\": \\"<string>\\",\\n  \\"custom_fields\\": \\"<object>\\",\\n  \\"frontend_node\\": {\\n    \\"template\\": \\"<object>\\",\\n    \\"base_classes\\": [\\n      \\"<string>\\",\\n      \\"<string>\\"\\n    ],\\n    \\"description\\": \\"<string>\\",\\n    \\"icon\\": \\"<string>\\",\\n    \\"is_input\\": \\"<boolean>\\",\\n    \\"is_output\\": \\"<boolean>\\",\\n    \\"is_composition\\": \\"<boolean>\\",\\n    \\"name\\": \\"\\",\\n    \\"display_name\\": \\"<string>\\",\\n    \\"documentation\\": \\"\\",\\n    \\"minimized\\": false,\\n    \\"custom_fields\\": \\"<object>\\",\\n    \\"full_path\\": \\"<string>\\",\\n    \\"pinned\\": false,\\n    \\"frozen\\": false,\\n    \\"beta\\": false,\\n    \\"legacy\\": false,\\n    \\"error\\": \\"<string>\\",\\n    \\"edited\\": false,\\n    \\"metadata\\": \\"<object>\\",\\n    \\"tool_mode\\": false\\n  }\\n}","options":{"raw":{"language":"json"}}}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/post-validate-prompt","previous":{"title":"Post Validate Code","permalink":"/api/post-validate-code"},"next":{"title":"Check If Store Is Enabled","permalink":"/api/check-if-store-is-enabled"}}');var n=l(74848),a=l(28453);const s={},r="Post Validate Prompt",o=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"post-validate-prompt",children:"Post Validate Prompt"})}),"\n",(0,n.jsx)(t.p,{children:"Post Validate Prompt"}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Request Body "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"template"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Template"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"custom_fields"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Custom Fields"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"frontend_node"}),(0,n.jsx)("span",{style:{opacity:"0.6"}})]})})]})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"input_variables"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"frontend_node"}),(0,n.jsx)("span",{style:{opacity:"0.6"}}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>r});var i=l(96540);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);