"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4102],{84677:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"type":"api","id":"get-config","title":"Get Config","description":"","slug":"/get-config","frontMatter":{},"api":{"tags":["Base"],"operationId":"get_config_api_v1_config_get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"feature_flags":{"properties":{"mvp_components":{"type":"boolean","title":"Mvp Components","default":false}},"additionalProperties":false,"type":"object","title":"FeatureFlags"},"frontend_timeout":{"type":"integer","title":"Frontend Timeout"},"auto_saving":{"type":"boolean","title":"Auto Saving"},"auto_saving_interval":{"type":"integer","title":"Auto Saving Interval"},"health_check_max_retries":{"type":"integer","title":"Health Check Max Retries"},"max_file_size_upload":{"type":"integer","title":"Max File Size Upload"}},"type":"object","required":["feature_flags","frontend_timeout","auto_saving","auto_saving_interval","health_check_max_retries","max_file_size_upload"],"title":"ConfigResponse"}}}}},"description":"Get Config","method":"get","path":"/api/v1/config","parameters":[],"securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Get Config","description":{"type":"text/plain"},"url":{"path":["api","v1","config"],"host":["{{baseUrl}}"],"query":[],"variable":[]},"header":[{"key":"Accept","value":"application/json"}],"method":"GET"}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/get-config","previous":{"title":"Custom Component Update","permalink":"/api/custom-component-update"},"next":{"title":"Post Validate Code","permalink":"/api/post-validate-code"}}');var s=n(74848),o=n(28453);const a={},r="Get Config",l=[];function c(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"get-config",children:"Get Config"})}),"\n",(0,s.jsx)(t.p,{children:"Get Config"}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"feature_flags"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"mvp_components"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Mvp Components"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"frontend_timeout"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Frontend Timeout"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"auto_saving"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Auto Saving"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"auto_saving_interval"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Auto Saving Interval"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"health_check_max_retries"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Health Check Max Retries"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"max_file_size_upload"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Max File Size Upload"})]})})]})]})})]})})})]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);