"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9038],{3573:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(4848),r=i(8453);const s={sidebar_position:1},o="About Gas",a={id:"BitlayerNetwork/AboutGas",title:"About Gas",description:"Important: about gas price",source:"@site/docs/BitlayerNetwork/AboutGas.md",sourceDirName:"BitlayerNetwork",slug:"/BitlayerNetwork/AboutGas",permalink:"/docs/BitlayerNetwork/AboutGas",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"V1: Bitlayer PoS",permalink:"/docs/category/v1-bitlayer-pos"},next:{title:"Networks and RPC Enpoints",permalink:"/docs/BitlayerNetwork/Networks"}},c={},l=[{value:"Important: about gas price",id:"important-about-gas-price",level:2},{value:"Get BTC Gas",id:"get-btc-gas",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"about-gas",children:"About Gas"}),"\n",(0,n.jsx)(t.h2,{id:"important-about-gas-price",children:"Important: about gas price"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Bitlayer's native gas token is BTC. However, on Bitlayer, BTC has an 18-digit precision, which is different from the 8-digit precision of BTC on Bitcoin. This is done to maintain consistency with the default decimal of tokens of EVM-compatible chains."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On the Bitlayer, there is a minimum priority fee requirement. Developers can use ",(0,n.jsx)(t.code,{children:"eth_gasPrice"})," or ",(0,n.jsx)(t.code,{children:"eth_maxPriorityFeePerGas"})," to estimate the gas price required for a transaction in real time."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["For the Mainnet/Testnet, a minimum tip of ",(0,n.jsx)(t.code,{children:"0.1 gwei"})," is required. Usually, ",(0,n.jsx)(t.code,{children:"0.11 gwei"})," ",(0,n.jsx)(t.code,{children:"gasPrice"})," for legacy transactions, ",(0,n.jsx)(t.code,{children:"0.1 gwei"})," ",(0,n.jsx)(t.code,{children:"maxPriorityFeePerGas"})," (and set enough amount to ",(0,n.jsx)(t.code,{children:"maxFeePerGas"}),") for EIP1559 transactions SHOULD BE enough."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["For Dapp developers, it's recommended that setting the ",(0,n.jsx)(t.code,{children:"maxPriorityFeePerGas"})," by code before calling apis to send the transaction, rather then leave it empty (filled by the default strategy of wallet (e.g. Metamask) or SDK)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"get-btc-gas",children:"Get BTC Gas"}),"\n",(0,n.jsx)(t.p,{children:"There are multiple way to get BTC gas on Bitlayer:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://www.bitlayer.org/bridge",children:"https://www.bitlayer.org/bridge"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://www.bitlayer.org/gas-swap",children:"https://www.bitlayer.org/gas-swap"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);