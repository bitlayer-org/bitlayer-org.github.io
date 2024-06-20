"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6316],{3224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=n(4848),r=n(8453);const l={},a="DefiLlama TVL Integration",s={id:"Build/FAQs/Defillama-TVL-integration",title:"DefiLlama TVL Integration",description:"Introduction",source:"@site/docs/Build/FAQs/Defillama-TVL-integration.md",sourceDirName:"Build/FAQs",slug:"/Build/FAQs/Defillama-TVL-integration",permalink:"/docs/Build/FAQs/Defillama-TVL-integration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"wBTC",permalink:"/docs/Build/FAQs/WBTC"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Add adapter locally",id:"step-1-add-adapter-locally",level:2},{value:"Step 2: Submit PR",id:"step-2-submit-pr",level:2},{value:"Reference",id:"reference",level:2},{value:"Projects built on bitlayer",id:"projects-built-on-bitlayer",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"defillama-tvl-integration",children:"DefiLlama TVL Integration"}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"There are two steps required to integrate into the defillama system."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Add adapter to defillama"}),"\n",(0,i.jsxs)(t.li,{children:["Submit PR like: ",(0,i.jsx)(t.a,{href:"https://github.com/DefiLlama/DefiLlama-Adapters/commits/d67f57641b931a04afe05affe4c52605b6544e26/projects/macaron-xyz/index.js",children:"https://github.com/DefiLlama/DefiLlama-Adapters/commits/d67f57641b931a04afe05affe4c52605b6544e26/projects/macaron-xyz/index.js"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-add-adapter-locally",children:"Step 1: Add adapter locally"}),"\n",(0,i.jsx)(t.p,{children:"The following steps need to be completed:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Fork repository: ",(0,i.jsx)(t.a,{href:"https://github.com/DefiLlama/DefiLlama-Adapters",children:"https://github.com/DefiLlama/DefiLlama-Adapters"})]}),"\n",(0,i.jsx)(t.li,{children:"Create a new project adapter path under projects, for example: projects/[%PROJECT_TAG%]/index.js"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const { sumTokens2, } = require('../helper/unwrapLPs')\n\nasync function tvl(api) {\n  \n  return sumTokens2({ owners: [\n    '[%CONTRACT_ADDR%]',\n  ], tokens: ['[%TOKEN_ADDR_1%]', '[%TOKEN_ADDR_2%]'], api, }) //wbtc and usdt\n}\n\nmodule.exports = {\n  btr: { tvl, }\n}\n\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"[%PROJECT_TAG%] is  the project name"}),"\n",(0,i.jsx)(t.li,{children:"[%CONTRACT_ADDR%] is the contract address of the project"}),"\n",(0,i.jsx)(t.li,{children:"[%TOKNE_ADDR_1%]\u3001[%TOKEN_ADDR_2%] are the currency pair address that needs to be calculated"}),"\n",(0,i.jsxs)(t.li,{children:["For future references, if you add another token you can just add it here, you can do like this ",(0,i.jsx)(t.a,{href:"https://github.com/DefiLlama/DefiLlama-Adapters/pull/10229/files",children:"https://github.com/DefiLlama/DefiLlama-Adapters/pull/10229/files"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-submit-pr",children:"Step 2: Submit PR"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Submit PR, for example: ",(0,i.jsx)(t.a,{href:"https://github.com/DefiLlama/DefiLlama-Adapters/commits/d67f57641b931a04afe05affe4c52605b6544e26/projects/macaron-xyz/index.js",children:"https://github.com/DefiLlama/DefiLlama-Adapters/commits/d67f57641b931a04afe05affe4c52605b6544e26/projects/macaron-xyz/index.js"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.llama.fi/list-your-project/submit-a-project",children:"https://docs.llama.fi/list-your-project/submit-a-project"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"projects-built-on-bitlayer",children:"Projects built on bitlayer"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Category"}),(0,i.jsx)(t.th,{children:"Website"}),(0,i.jsx)(t.th,{children:"Defillama"}),(0,i.jsx)(t.th,{children:"Project Path"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bitsmiley"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocols/CDP",children:"CDP"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.bitsmiley.io/app/alphanet",children:"https://www.bitsmiley.io/app/alphanet"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocol/bitsmiley#information",children:"https://defillama.com/protocol/bitsmiley#information"})}),(0,i.jsx)(t.td,{children:"projects/bitsmiley-io"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"macaron"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocols/Dexes",children:"Dexes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.macaron.xyz/#/swap?lang=en",children:"https://www.macaron.xyz/#/swap?lang=en"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocol/macaron",children:"https://defillama.com/protocol/macaron"})}),(0,i.jsx)(t.td,{children:"projects/macaron-xyz"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"avalon"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocols/Lending",children:"Lending"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://app.avalonfinance.xyz/",children:"https://app.avalonfinance.xyz/"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocol/avalon-finance#information",children:"https://defillama.com/protocol/avalon-finance#information"})}),(0,i.jsx)(t.td,{children:"projects/avalon-finance"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bitcow"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocols/Dexes",children:"Dexes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://bitcow.xyz/",children:"https://bitcow.xyz/"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocol/bitcow#information",children:"https://defillama.com/protocol/bitcow#information"})}),(0,i.jsx)(t.td,{children:"projects/bitcow"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"enzo"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocols/Lending",children:"Lending"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://app.enzo.finance/",children:"https://app.enzo.finance/"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocol/enzo#information",children:"https://defillama.com/protocol/enzo#information"})}),(0,i.jsx)(t.td,{children:"projects/enzo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"trustin"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocols/Lending",children:"Lending"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.trustin.com/",children:"https://www.trustin.com/"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://defillama.com/protocol/trustin-finance?borrowed=false&twitter=true&tvl=false",children:"https://defillama.com/protocol/trustin-finance?borrowed=false&twitter=true&tvl=false"})}),(0,i.jsx)(t.td,{children:"projects/trustin"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(6540);const r={},l=i.createContext(r);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);