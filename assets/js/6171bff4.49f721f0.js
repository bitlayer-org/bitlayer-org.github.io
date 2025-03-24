"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8106],{7505:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"BitVMBridge/safety-and-liveness","title":"Safety and Liveness","description":"The concepts of safety and liveness are fundamental to the design and operation of decentralized systems, particularly in the context of smart contracts and bridging mechanisms like those employed by BitVM. This article delves into the nuances of these properties as they pertain to BitVM\'s smart contract architecture and its derivative, the BitVM Bridge. By exploring both the deployment and operational stages of BitVM smart contracts, we aim to provide a comprehensive understanding of how these systems ensure security and reliability while maintaining operational continuity.","source":"@site/docs/BitVMBridge/safety-and-liveness.md","sourceDirName":"BitVMBridge","slug":"/BitVMBridge/safety-and-liveness","permalink":"/docs/BitVMBridge/safety-and-liveness","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Safety and Liveness"},"sidebar":"bitVMBridgeSidebar","previous":{"title":"System Design","permalink":"/docs/BitVMBridge/system-design"},"next":{"title":"Introduction to Peg-BTC","permalink":"/docs/BitVMBridge/introduction-peg-btc"}}');var n=a(4848),i=a(8453);const r={sidebar_position:4,sidebar_label:"Safety and Liveness"},l="Safety and Liveness",h={},c=[{value:"Safety and Liveness in BitVM Smart Contracts",id:"safety-and-liveness-in-bitvm-smart-contracts",level:2},{value:"Safety",id:"safety",level:3},{value:"Safety Assumptions",id:"safety-assumptions",level:4},{value:"Safety of the Attesting Procedure",id:"safety-of-the-attesting-procedure",level:4},{value:"Liveness",id:"liveness",level:3},{value:"Liveness at the Deployment Stage",id:"liveness-at-the-deployment-stage",level:4},{value:"Liveness at the Running Stage",id:"liveness-at-the-running-stage",level:4},{value:"Safety and Liveness in the BitVM Bridge",id:"safety-and-liveness-in-the-bitvm-bridge",level:2},{value:"Safety",id:"safety-1",level:3},{value:"Liveness",id:"liveness-1",level:3}];function m(e){const s={annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"safety-and-liveness",children:"Safety and Liveness"})}),"\n",(0,n.jsx)(s.p,{children:"The concepts of safety and liveness are fundamental to the design and operation of decentralized systems, particularly in the context of smart contracts and bridging mechanisms like those employed by BitVM. This article delves into the nuances of these properties as they pertain to BitVM's smart contract architecture and its derivative, the BitVM Bridge. By exploring both the deployment and operational stages of BitVM smart contracts, we aim to provide a comprehensive understanding of how these systems ensure security and reliability while maintaining operational continuity."}),"\n",(0,n.jsx)(s.h2,{id:"safety-and-liveness-in-bitvm-smart-contracts",children:"Safety and Liveness in BitVM Smart Contracts"}),"\n",(0,n.jsxs)(s.p,{children:["BitVM smart contracts operate through two distinct stages: the ",(0,n.jsx)(s.strong,{children:"deployment stage"})," and the ",(0,n.jsx)(s.strong,{children:"running stage"}),". At the deployment stage, a transaction graph is created and presigned by a committee of participants, while the running stage involves participants executing actions in accordance with the predefined transaction graph. These stages form the foundation for evaluating both safety and liveness in the system."]}),"\n",(0,n.jsx)(s.h3,{id:"safety",children:"Safety"}),"\n",(0,n.jsx)(s.h4,{id:"safety-assumptions",children:"Safety Assumptions"}),"\n",(0,n.jsx)(s.p,{children:"The safety of BitVM smart contracts hinges on specific assumptions tied to each stage of the contract lifecycle. During the deployment stage, all operations occur off-chain, making safety considerations largely irrelevant at this point. However, at the running stage, safety is critically dependent on the behavior of the attesters. Specifically, if at least one attester deletes their signing key after the deployment stage, the contract remains secure and resistant to manipulation. This key deletion ensures that no unauthorized modifications can occur, preserving the integrity of the transaction graph."}),"\n",(0,n.jsx)(s.h4,{id:"safety-of-the-attesting-procedure",children:"Safety of the Attesting Procedure"}),"\n",(0,n.jsxs)(s.p,{children:["The attesting procedure, a cornerstone of the deployment stage, leverages the ",(0,n.jsx)(s.strong,{children:"MuSig2 algorithm"})," to ensure cryptographic integrity. The MuSig2 algorithm guarantees that all honest attesters produce the same signature, denoted as ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"\u03c3"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\sigma"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"})]})})]}),", for a given message. This uniformity arises from the synchronous network assumption, which ensures that all attesters receive the same set of partial signatures, ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"\u03b3"}),(0,n.jsx)(s.mi,{children:"k"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\gamma_k"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05556em"},children:"\u03b3"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0556em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]})]})})]}),", within a bounded time ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{mathvariant:"normal",children:"\u0394"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Delta"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(s.span,{className:"mord",children:"\u0394"})]})})]}),". Consequently, if an honest attester outputs a valid signature ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"\u03c3"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\sigma"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"})]})})]}),", it is inevitable that all other honest attesters will do the same."]}),"\n",(0,n.jsxs)(s.p,{children:["Moreover, the protocol ensures that malicious attesters cannot generate a valid signature ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"\u03c3"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\sigma'"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," for an invalid message ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"m'"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]}),". For a valid signature ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"\u03c3"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\sigma'"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]})," to exist, all attesters would need to contribute partial signatures ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msubsup,{children:[(0,n.jsx)(s.mi,{children:"\u03b3"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\gamma_k'"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.035em",verticalAlign:"-0.2831em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05556em"},children:"\u03b3"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsxs)(s.span,{className:"vlist",style:{height:"0.7519em"},children:[(0,n.jsxs)(s.span,{style:{top:"-2.4169em",marginLeft:"-0.0556em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]}),(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})]}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.2831em"},children:(0,n.jsx)(s.span,{})})})]})})]})]})})]}),", including at least one from an honest participant. However, an honest node will categorically refuse to generate a partial signature for an invalid message, thereby preventing the creation of ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"\u03c3"}),(0,n.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\sigma'"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7519em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03c3"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]}),". This property is crucial in maintaining the integrity of the attesting procedure and ensuring the system's overall safety."]}),"\n",(0,n.jsx)(s.h3,{id:"liveness",children:"Liveness"}),"\n",(0,n.jsx)(s.h4,{id:"liveness-at-the-deployment-stage",children:"Liveness at the Deployment Stage"}),"\n",(0,n.jsx)(s.p,{children:"The deployment stage of a BitVM smart contract is inherently fragile in terms of liveness. If even a single attester refuses to cooperate, the entire contract deployment will fail. This characteristic underscores the importance of coordination and trust among participants during the initial setup phase."}),"\n",(0,n.jsx)(s.h4,{id:"liveness-at-the-running-stage",children:"Liveness at the Running Stage"}),"\n",(0,n.jsx)(s.p,{children:"Once the contract is deployed, the liveness of the system depends heavily on the application-layer design. For example, in the context of a bridge contract, liveness is preserved as long as at least one broker remains honest and actively participates in the protocol. This ensures that the system can continue to process transactions and fulfill its intended purpose, even in the presence of some malicious or uncooperative participants."}),"\n",(0,n.jsx)(s.h2,{id:"safety-and-liveness-in-the-bitvm-bridge",children:"Safety and Liveness in the BitVM Bridge"}),"\n",(0,n.jsx)(s.p,{children:"The BitVM Bridge, built atop the BitVM smart contract framework, inherits many of its safety and liveness properties. This bridge serves as a trust-minimized mechanism for transferring assets across chains, leveraging the same cryptographic guarantees provided by the underlying BitVM architecture."}),"\n",(0,n.jsx)(s.h3,{id:"safety-1",children:"Safety"}),"\n",(0,n.jsx)(s.p,{children:"The safety of the BitVM Bridge is rooted in the behavior of its honest participants. Once the presigned transaction is constructed and the corresponding keys are discarded by honest nodes, the UTXO associated with the bridge becomes immutable. This means that no transaction other than the presigned one can spend the UTXO, and the UTXO cannot be privately appropriated by colluding committee members. This property ensures that the assets locked in the bridge remain secure and tamper-proof, even in the presence of malicious actors."}),"\n",(0,n.jsx)(s.h3,{id:"liveness-1",children:"Liveness"}),"\n",(0,n.jsx)(s.p,{children:"The liveness of the BitVM Bridge, however, is more constrained. If even a single attester refuses to cooperate, the bridge cannot process a peg-in transaction. This limitation highlights the critical role of participant cooperation in maintaining the bridge's functionality. While this dependence on cooperation may seem like a drawback, it is a necessary trade-off to achieve the high level of safety and trust minimization that the BitVM Bridge offers."})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>l});var t=a(6540);const n={},i=t.createContext(n);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);