"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6593],{7033:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(4848),r=t(8453);const a={sidebar_position:1},s="Overview of Bitlayer's Design",o={id:"Learn/BitlayerArchitecture/BitlayerDesign",title:"Overview of Bitlayer's Design",description:"Technical White Paper",source:"@site/docs/Learn/BitlayerArchitecture/BitlayerDesign.md",sourceDirName:"Learn/BitlayerArchitecture",slug:"/Learn/BitlayerArchitecture/BitlayerDesign",permalink:"/docs/Learn/BitlayerArchitecture/BitlayerDesign",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"About finality",permalink:"/docs/Learn/BitlayerNetwork/AboutFinality"},next:{title:"Layered Virtual Machine (LVM)",permalink:"/docs/Learn/BitlayerArchitecture/LVM"}},c={},l=[{value:"Technical White Paper",id:"technical-white-paper",level:2},{value:"Introduction",id:"introduction",level:2},{value:"1. Transaction Processing",id:"1-transaction-processing",level:2},{value:"2. Transaction Verification",id:"2-transaction-verification",level:2},{value:"3. Asset Bridge",id:"3-asset-bridge",level:2}];function h(e){const i={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"overview-of-bitlayers-design",children:"Overview of Bitlayer's Design"}),"\n",(0,n.jsx)(i.h2,{id:"technical-white-paper",children:"Technical White Paper"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://static.bitlayer.org/Bitlayer-Technical-Whitepaper.pdf",children:"Bitlayer: A Bitcoin Computational Layer Architecture Based on the BitVM Paradigm"})}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Bitlayer has revolutionized the verification process for Layer 2 transactions using optimistic execution, while keeping the Bitcoin protocol intact. Its architecture comprises transaction processing, verification, and asset bridging components. Transaction processing involves a sequencer and a Layered Virtual Machine (LVM), optimizing transaction handling and computational efficiency. Transaction verification, managed by provers and challengers, ensures transaction validity and compliance with network rules. They collaborate to complete the entire process from Layer 2 transaction handling to Layer 1 confirmation, maintaining transaction security and integrity throughout the process. Bitlayer's assets bridge components further enhance its capabilities by enabling interoperability between Layer 2 and Layer 1 networks, facilitating secure asset transfer across blockchain layers."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"The Architecture of Bitlayer",src:t(3633).A+"",width:"4440",height:"2832"})}),"\n",(0,n.jsx)(i.h2,{id:"1-transaction-processing",children:"1. Transaction Processing"}),"\n",(0,n.jsx)(i.p,{children:"Transaction Processing, as illustrated in the figure above, involves the sequencer and Layered Virtual Machine. These components are responsible for the entire transaction handling, starting from transaction acceptance to executing the output."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Sequencer"}),": Like other Layer 2 solutions, the sequencer in Bitlayer is responsible for collecting cached transactions and sorting them, serving as the entry point for transactions in Bitlayer."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Layered Virtual Machine (LVM)"}),": The LVM is the computing component of Bitlayer, responsible for executing smart contracts and generating the latest states and zero-knowledge proof. Challengers then use this proof to challenge the execution results."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"2-transaction-verification",children:"2. Transaction Verification"}),"\n",(0,n.jsx)(i.p,{children:"In Bitlayer, transaction verification is achieved by a zero-knowledge-based optimistic mechanism between the prover and challenger."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Prover"}),": The Prover is responsible for submitting Layer 2 transactions and states of execution to the Layer 1 chain as described above. It also reveals zero-knowledge proofs on the chain when getting challenged."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Challenger"}),": The Challenger is responsible for verifying the execution results submitted by the Prover through states of execution and zero-knowledge proof verification. If malicious behavior is detected, the Challenger initiates a challenge process to generate fraud proofs including invalid zero-knowledge proofs and submits them to the Layer 1 chain."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"3-asset-bridge",children:"3. Asset Bridge"}),"\n",(0,n.jsx)(i.p,{children:"The Bridge acts as a crucial component in Bitlayer's infrastructure, facilitating the seamless movement of assets between Layer 2 and Layer 1. Its primary responsibility is to ensure the secure transfer of user assets through an innovative combination of OP-DLC and BitVM."})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3633:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/BitlayerDesign-883d2e8d59a279b9271697a97eae85c5.png"},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var n=t(6540);const r={},a=n.createContext(r);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);