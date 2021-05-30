(this["webpackJsonpfgr-secure-api"]=this["webpackJsonpfgr-secure-api"]||[]).push([[0],{32:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(22),s=n.n(c),o=n(2),i=n(6),u=n(23),f=n(24),p=n(11),h=n(26),j=n(25),l=(n(32),n(0));function b(){var t=Object(i.e)().instance;return Object(l.jsx)("button",{onClick:function(){return function(t){t.loginRedirect()}(t)},children:"Sign In"})}var d={scopes:["openid","https://fgrsolutionsb2c.onmicrosoft.com/api/demo.read","https://fgrsolutionsb2c.onmicrosoft.com/api/demo.write"]},O={auth:{clientId:"b4472f17-dacf-42ed-ad2d-4901f18d1974",authority:"https://fgrsolutionsb2c.b2clogin.com/fgrsolutionsb2c.onmicrosoft.com/B2C_1_signupsignin1",redirectUri:"https://dariv94.github.io/fgr-secure-api/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(t,e,n){if(!n)switch(t){case o.e.Error:return void console.error(e);case o.e.Info:return void console.info(e);case o.e.Verbose:return void console.debug(e);default:return void console.warn(e)}}}}};function g(){var t=Object(i.e)().instance;return Object(l.jsx)("button",{onClick:function(){return function(t){console.log("instance: ",t);var e={account:t.getAccountByHomeId("homeAccountId"),postLogoutRedirectUri:"https://dariv94.github.io/fgr-secure-api/"};t.logoutRedirect(e)}(t)},children:"Sign Out"})}var m=n(3),x=n.n(m),k=n(5),v=n(13);function w(t){var e=Object(i.e)(),n=e.instance,a=e.accounts;return Object(r.useEffect)((function(){n.acquireTokenSilent(Object(v.a)(Object(v.a)({},d),{},{account:a[0]})).then(function(){var e=Object(k.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("RequestProfileData response:",n),t.setToken(n.accessToken);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Object(l.jsx)(l.Fragment,{})}var A=n(7);function T(t){var e=Object(r.useState)(null),n=Object(A.a)(e,2),a=n[0],c=n[1];function s(){return(s=Object(k.a)(x.a.mark((function e(){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.apicall,e.next=3,n(t.token);case 3:r=e.sent,c(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h5",{children:["API ",t.name]}),Object(l.jsxs)("button",{onClick:function(){return s.apply(this,arguments)},children:["CALL ",t.name]}),a?Object(l.jsx)(l.Fragment,{children:JSON.stringify(a)}):Object(l.jsx)("p",{children:"No API Data"}),Object(l.jsx)("button",{onClick:function(){c("")},children:"Reset API Data"})]})}var y=n(8),I=n.n(y);function S(t){return z.apply(this,arguments)}function z(){return(z=Object(k.a)(x.a.mark((function t(e){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e}},t.next=3,I.a.get("https://fgr-secure-api-management.azure-api.net/mock1/mockget",n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){return P.apply(this,arguments)}function P(){return(P=Object(k.a)(x.a.mark((function t(e){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e}},t.next=3,I.a.get("https://fgr-secure-api-management.azure-api.net/fgr-secure-function-app-1/HttpTrigger1",n);case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return F.apply(this,arguments)}function F(){return(F=Object(k.a)(x.a.mark((function t(e){var n,r,a,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e}},t.next=3,I.a.get("https://fgr-secure-api-management.azure-api.net/aks/kubernetes/funfact",n);case 3:return r=t.sent,a=Math.floor(Math.random()*r.data.funfacts.length),c=r.data.funfacts[a].fun_fact,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t){return E.apply(this,arguments)}function E(){return(E=Object(k.a)(x.a.mark((function t(e){var n,r,a,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e}},t.next=3,I.a.get("https://fgr-secure-api-management.azure-api.net/aks/microsoft/funfact",n);case 3:return r=t.sent,a=Math.floor(Math.random()*r.data.funfacts.length),c=r.data.funfacts[a].fun_fact,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var M=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).state={selectedFile:"",loading:!1,responseImage:"",message:"Select a file to upload.",jwtToken:""},r.setToken=r.setToken.bind(Object(p.a)(r)),r}return Object(f.a)(n,[{key:"setToken",value:function(t){this.setState({jwtToken:t})}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"topheader",children:"Secure API"}),Object(l.jsxs)(i.a,{children:[Object(l.jsx)(w,{setToken:this.setToken}),Object(l.jsx)("hr",{}),Object(l.jsx)(T,{name:"MOCK ENDPOINT",apicall:S,token:this.state.jwtToken}),Object(l.jsx)("hr",{}),Object(l.jsx)(T,{name:"Azure Function ENDPOINT",apicall:N,token:this.state.jwtToken}),Object(l.jsx)("hr",{}),Object(l.jsx)(T,{name:"Azure AKS ENDPOINT Kubernetes Fun Facts",apicall:C,token:this.state.jwtToken}),Object(l.jsx)("hr",{}),Object(l.jsx)(T,{name:"Azure AKS ENDPOINT Microsoft Fun Facts",apicall:D,token:this.state.jwtToken}),Object(l.jsx)("hr",{}),Object(l.jsx)(g,{})]}),Object(l.jsx)(i.c,{children:Object(l.jsx)(b,{})})]})}}]),n}(r.Component);var R=function(t){var e=Object(i.d)();return console.log("APP isAuthenticated: ",e),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(M,{instance:t.instance,isAuthenticated:e})})},K=new o.g(O);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(i.b,{instance:K,children:Object(l.jsx)(R,{instance:K})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.c75ea049.chunk.js.map