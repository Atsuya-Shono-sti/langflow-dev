"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9695],{97525:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"type":"api","id":"get-transactions","title":"Get Transactions","description":"","slug":"/get-transactions","frontMatter":{},"api":{"tags":["Monitor"],"operationId":"get_transactions_api_v1_monitor_transactions_get","parameters":[{"name":"flow_id","in":"query","required":true,"schema":{"type":"string","format":"uuid","title":"Flow Id"}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"description":"Page number","default":1,"title":"Page"},"description":"Page number"},{"name":"size","in":"query","required":false,"schema":{"type":"integer","maximum":100,"minimum":1,"description":"Page size","default":50,"title":"Size"},"description":"Page size"}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"items":{"items":{"properties":{"timestamp":{"type":"string","format":"date-time","title":"Timestamp"},"vertex_id":{"type":"string","title":"Vertex Id"},"target_id":{"anyOf":[{"type":"string"}],"title":"Target Id","nullable":true},"inputs":{"type":"object","title":"Inputs"},"outputs":{"type":"object","title":"Outputs"},"status":{"type":"string","title":"Status"},"error":{"anyOf":[{"type":"string"}],"title":"Error","nullable":true},"flow_id":{"type":"string","format":"uuid","title":"Flow Id"},"id":{"anyOf":[{"type":"string","format":"uuid"}],"title":"Id","nullable":true}},"type":"object","required":["vertex_id","status","flow_id"],"title":"TransactionTable"},"type":"array","title":"Items"},"total":{"anyOf":[{"type":"integer","minimum":0}],"title":"Total","nullable":true},"page":{"anyOf":[{"type":"integer","minimum":1}],"title":"Page","nullable":true},"size":{"anyOf":[{"type":"integer","minimum":1}],"title":"Size","nullable":true},"pages":{"anyOf":[{"type":"integer","minimum":0}],"title":"Pages","nullable":true}},"type":"object","required":["items","total","page","size"],"title":"Page[TransactionTable]"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"description":"Get Transactions","method":"get","path":"/api/v1/monitor/transactions","securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Get Transactions","description":{"type":"text/plain"},"url":{"path":["api","v1","monitor","transactions"],"host":["{{baseUrl}}"],"query":[{"disabled":false,"description":{"content":"(Required) ","type":"text/plain"},"key":"flow_id","value":"<uuid>"},{"disabled":false,"description":{"content":"Page number","type":"text/plain"},"key":"page","value":"1"},{"disabled":false,"description":{"content":"Page size","type":"text/plain"},"key":"size","value":"50"}],"variable":[]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/get-transactions","previous":{"title":"Delete Messages Session","permalink":"/api/delete-messages-session"},"next":{"title":"Read Folders","permalink":"/api/read-folders"}}');var n=i(74848),r=i(28453);const l={},a="Get Transactions",d=[];function c(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"get-transactions",children:"Get Transactions"})}),"\n",(0,n.jsx)(t.p,{children:"Get Transactions"}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"flow_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"page"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Page"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Possible values:"})," 1 \u2264 value"]})}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Page number"})}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Page number"})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"size"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Size"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Possible values:"})," 1 \u2264 value \u2264 100"]})}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Page size"})}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)(t.p,{children:"Page size"})})]})})]})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Successful Response"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"items"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"timestamp"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" date-time"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"vertex_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Vertex Id"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"target_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Target Id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"inputs"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"outputs"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"status"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Status"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"error"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"flow_id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"total"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Total"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"page"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Page"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"size"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Size"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"pages"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Pages"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"422"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Validation Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"detail"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"loc"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"msg"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"type"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var s=i(96540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);