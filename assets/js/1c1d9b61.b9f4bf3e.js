"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[422],{56804:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"type":"api","id":"patch-user","title":"Patch User","description":"","slug":"/patch-user","frontMatter":{},"api":{"tags":["Users"],"description":"Update an existing user\'s data.","operationId":"patch_user_api_v1_users__user_id__patch","security":[{"OAuth2PasswordBearer":[]},{"API key query":[]},{"API key header":[]}],"parameters":[{"name":"user_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"User Id"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"username":{"anyOf":[{"type":"string"}],"title":"Username","nullable":true},"profile_image":{"anyOf":[{"type":"string"}],"title":"Profile Image","nullable":true},"password":{"anyOf":[{"type":"string"}],"title":"Password","nullable":true},"is_active":{"anyOf":[{"type":"boolean"}],"title":"Is Active","nullable":true},"is_superuser":{"anyOf":[{"type":"boolean"}],"title":"Is Superuser","nullable":true},"last_login_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Last Login At","nullable":true}},"type":"object","title":"UserUpdate"}}}},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"id":{"type":"string","format":"uuid","title":"Id"},"username":{"type":"string","title":"Username"},"profile_image":{"anyOf":[{"type":"string"}],"title":"Profile Image","nullable":true},"store_api_key":{"anyOf":[{"type":"string"}],"title":"Store Api Key","nullable":true},"is_active":{"type":"boolean","title":"Is Active"},"is_superuser":{"type":"boolean","title":"Is Superuser"},"create_at":{"type":"string","format":"date-time","title":"Create At"},"updated_at":{"type":"string","format":"date-time","title":"Updated At"},"last_login_at":{"anyOf":[{"type":"string","format":"date-time"}],"title":"Last Login At","nullable":true}},"type":"object","required":["username","profile_image","store_api_key","is_active","is_superuser","create_at","updated_at","last_login_at"],"title":"UserRead"}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"method":"patch","path":"/api/v1/users/{user_id}","securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Patch User","description":{"content":"Update an existing user\'s data.","type":"text/plain"},"url":{"path":["api","v1","users",":user_id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<uuid>","key":"user_id"}]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"PATCH","body":{"mode":"raw","raw":"{\\n  \\"username\\": \\"<string>\\",\\n  \\"profile_image\\": \\"<string>\\",\\n  \\"password\\": \\"<string>\\",\\n  \\"is_active\\": \\"<boolean>\\",\\n  \\"is_superuser\\": \\"<boolean>\\",\\n  \\"last_login_at\\": \\"<dateTime>\\"\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"oauth2","oauth2":[{"type":"any","value":"api/v1/login","key":"accessTokenUrl"},{"type":"any","value":"password_credentials","key":"grant_type"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/patch-user","previous":{"title":"Read Current User","permalink":"/api/read-current-user"},"next":{"title":"Delete User","permalink":"/api/delete-user"}}');var r=s(74848),n=s(28453);const l={},a="Patch User",d=[];function c(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"patch-user",children:"Patch User"})}),"\n",(0,r.jsx)(t.p,{children:"Update an existing user's data."}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"user_id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Request Body "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"username"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Username"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"profile_image"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Profile Image"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"password"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Password"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"is_active"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Is Active"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"is_superuser"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Is Superuser"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"last_login_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Last Login At"})]})})]})]}),"\n",(0,r.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"200"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Successful Response"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"id"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"username"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Username"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"profile_image"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Profile Image"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"store_api_key"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Store Api Key"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"is_active"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Is Active"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"is_superuser"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Is Superuser"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"create_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" date-time"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"updated_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" date-time"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"last_login_at"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Last Login At"})]})})]})]})})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,r.jsx)("code",{children:"422"})}),(0,r.jsx)("div",{children:(0,r.jsx)(t.p,{children:"Validation Error"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("th",{style:{textAlign:"left"},children:[(0,r.jsx)("span",{children:"Schema "}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("div",{})]})})}),(0,r.jsx)("tbody",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"detail"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,r.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,r.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"loc"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"msg"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{children:[(0,r.jsx)("code",{children:"type"}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var i=s(96540);const r={},n=i.createContext(r);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);