"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2167],{7642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(4848),a=n(8453),s=n(1470),l=n(9365);const o={sidebar_position:6,title:"Tokens"},c=void 0,i={id:"Build/BitlayerScanAPIs/Tokens",title:"Tokens",description:"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress",source:"@site/docs/Build/BitlayerScanAPIs/Tokens.mdx",sourceDirName:"Build/BitlayerScanAPIs",slug:"/Build/BitlayerScanAPIs/Tokens",permalink:"/docs/Build/BitlayerScanAPIs/Tokens",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Tokens"},sidebar:"buildSidebar",previous:{title:"Logs",permalink:"/docs/Build/BitlayerScanAPIs/Logs"},next:{title:"Token Reputation",permalink:"/docs/Build/BitlayerScanInfoCenter/TokenReputation"}},d={},u=[{value:"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress",id:"get-erc20-token-totalsupply-aka-maxsupply-by-contractaddress",level:2},{value:"Get ERC20-Token Account Balance for TokenContractAddress",id:"get-erc20-token-account-balance-for-tokencontractaddress",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"get-erc20-token-totalsupply-aka-maxsupply-by-contractaddress",children:"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress"}),"\n",(0,r.jsx)(t.p,{children:"Returns the current amount of an ERC-20 token in circulation."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"https://api.btrscan.com/scan/api\r\n?module=token\r\n&action=tokensupply\r\n&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Try this endpoint in your ",(0,r.jsx)(t.a,{href:"https://api.btrscan.com/scan/api?module=token&action=tokensupply&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2",children:"browser"})," \ud83d\udd17"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"request",label:"Request",default:!0,children:[(0,r.jsx)(t.p,{children:"Query Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"contractaddress"}),(0,r.jsxs)(t.td,{children:["the ",(0,r.jsx)(t.code,{children:"contract address"})," of the ERC-20 token"]})]})})]})]}),(0,r.jsxs)(l.A,{value:"response",label:"Response",children:[(0,r.jsx)(t.p,{children:"Sample Response"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n  "status": "1",\r\n  "message": "OK",\r\n  "result": "20000000000"\r\n}\n'})}),(0,r.jsx)(t.admonition,{title:"The result is returned in the token's smallest decimal representation",type:"tip",children:(0,r.jsx)(t.p,{children:"Eg. a token with a balance of 215.241526476136819398 and 18 decimal places will be returned as 215241526476136819398"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"get-erc20-token-account-balance-for-tokencontractaddress",children:"Get ERC20-Token Account Balance for TokenContractAddress"}),"\n",(0,r.jsx)(t.p,{children:"Returns the current balance of an ERC-20 token of an address."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"https://api.btrscan.com/scan/api\r\n?module=account\r\n&action=tokenbalance\r\n&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2\r\n&address=0x718e5b4f5b007bceb7ad6ce8c2629cea767fc4ec\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Try this endpoint in your ",(0,r.jsx)(t.a,{href:"https://api.btrscan.com/scan/api?module=account&action=tokenbalance&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2&address=0x718e5b4f5b007bceb7ad6ce8c2629cea767fc4ec&tag=latest",children:"browser"})," \ud83d\udd17"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"request",label:"Request",default:!0,children:[(0,r.jsx)(t.p,{children:"Query Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"contractaddress"}),(0,r.jsxs)(t.td,{children:["the ",(0,r.jsx)(t.code,{children:"contract address"})," of the ERC-20 token"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"address"}),(0,r.jsxs)(t.td,{children:["the ",(0,r.jsx)(t.code,{children:"string"})," representing the address to check for token balance"]})]})]})]})]}),(0,r.jsxs)(l.A,{value:"response",label:"Response",children:[(0,r.jsx)(t.p,{children:"Sample Response"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\r\n  "status": "1",\r\n  "message": "OK",\r\n  "result": 0\r\n}\n'})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(6540),a=n(8215),s=n(3104),l=n(6347),o=n(205),c=n(7485),i=n(1682),d=n(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,u]=f({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=i??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(i(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...t,...e}),(0,j.jsx)(k,{...t,...e})]})}function g(e){const t=(0,m.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);