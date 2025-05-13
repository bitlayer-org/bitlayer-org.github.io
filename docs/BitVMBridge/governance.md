---
sidebar_position: 95
sidebar_label: BitVM Bridge Network (BBN) Governance Framework
---

# BitVM Bridge Network (BBN) Governance Framework

## 1. Understanding the BitVM Bridge Network (BBN)

The BitVM Bridge Network (BBN) is the decentralized backbone of the BitVM Bridge, facilitating secure and trust-minimized cross-chain asset transfers. It is composed of three key types of participants:

- **Attesters:** Responsible for pre-signing the transaction graph of the bridge instance.
- **Brokers:** Front the peg-out request with their own liquidity and reclaim the funds from the smart contract later.
- **Watchers:** Monitor the network for any malicious reclaim request and initiate a challenge against it, playing a crucial role in the security and integrity of the bridge.

Participants within the BBN interact using a dedicated peer-to-peer (P2P) communication protocol.

**Current Status and Evolution:**

The BBN is designed as a permissionless network, allowing any entity that meets the predefined operational and (eventually) staking requirements to join. Initially, the BBN's operational management and onboarding of new participants are overseen by the Bitlayer team.

The comprehensive governance framework for the BBN is currently under active development. Upon its full implementation, the direct management responsibilities held by the Bitlayer team will transition to a community-driven governance model. Subsequently, the BBN governance, empowered by BTR token holders, will be responsible for decisions regarding network participation, protocol upgrades, and other critical aspects.

## 2. The BBN Governance Model

The governance of the BitVM Bridge Network will be centered around the **Bitlayer Token (BTR)**, empowering BTR holders to shape the future of the bridge.

**Key Features:**

- **Governance Platform:** The core governance smart contracts will be deployed on the **Bitlayer Network** (the L2 scaling solution for Bitcoin). You can find more information about Bitlayer Network at [https://www.bitlayer.org/](https://www.bitlayer.org/).
- **Membership:** Any individual or entity holding a specified minimum amount of BTR tokens will be eligible to participate as a governance member. The exact threshold will be defined in the forthcoming governance framework.
- **Proposal Submission:** Any eligible governance member can create new proposals and initiate the voting process.
- **Discussion Forum:** A dedicated governance forum (currently under construction) will serve as the primary platform for discussing proposals, debating ideas, and fostering community consensus before formal voting.

**Proposal Categories:**

The BBN governance will address various types of proposals, including but not limited to:

1. **Protocol Upgrades:**
    - **Description:** Significant changes to the core BitVM Bridge protocol, such as replacing or upgrading the light client implementations for supported chains, or introducing new **safeguard mechanisms**.
    - **Initiation:** Protocol upgrade proposals can be put forth by the core development team, established core community contributors, and the Security Council.
    - **Process:** Such proposals will require thorough discussion and rigorous review within the governance forum. Any implementation must undergo comprehensive testing and security audits before being put to a vote for final approval and deployment.
2. **Protocol Parameter Adjustments:**
    - **Description:** Modifications to existing operational parameters of the bridge, such as fee structures, collateralization ratios, or timeout periods for specific operations.
3. **Treasury Allocations:**
    - **Description:** Decisions regarding the use of funds held within the BBN treasury. This could include, for example, rewarding Watchers who successfully challenge malicious activities (e.g., an invalid reclaim attempt) by allocating a portion of the forfeited collateral from the malicious actor.
4. **Governance Mechanism Changes:**
    - **Description:** Modifications to the governance framework itself, such as adjusting proposal thresholds, voting periods, or the process for adding or removing members of bodies like the Security Council.

## 3. The Security Council

The Security Council is a specialized governance body established within the broader BBN governance framework, designed to act swiftly and decisively in matters of network security and operational stability.

**Composition and Authority:**

- **Membership:** The Security Council will consist of 10 members. These members are the designated signers of a multi-signature (multisig) wallet, requiring 7 out of 10 signatures (7/10) to authorize actions.
- **Mandate:** This multisig wallet holds the authority to execute certain pre-defined standard operational procedures and critical emergency actions to safeguard the protocol and user assets.
- **Representation:** Members will be drawn from diverse, reputable backgrounds, including:
    - Core Bitlayer Development Team
    - Esteemed Security Researchers and Audit Firms
    - Trusted Technical Experts from the Bitlayer Community
    - Representatives from Key Ecosystem Partners

**Responsibilities:**

The Security Council is entrusted with several critical functions:

1. **Emergency Incident Response:**
    - Rapidly assess and execute emergency measures in response to active security threats or critical vulnerabilities. This may include pausing specific bridge functionalities, deploying urgent hotfixes, or isolating affected components to mitigate damage and protect user funds.
2. **Vulnerability Management and Mitigation:**
    - Oversee the lifecycle of security vulnerabilities, from identification and assessment to remediation. This includes coordinating the development and deployment of fixes and tracking the resolution of issues identified in security audits.
3. **Proactive Risk Monitoring and Early Warning:**
    - Actively monitor protocol activity, network telemetry, and external threat intelligence to preemptively identify and alert the community and relevant stakeholders about emerging security risks or anomalous patterns.
4. **Treasury Security and Asset Protection (Under Pre-Authorized Conditions):**
    - Manage critical multi-signature wallets associated with protocol assets and upgrade mechanisms under strict, predefined conditions authorized by the broader governance framework. This ensures the safeguarding of community funds and the integrity of the upgrade process.

**Interim Governance Role:**

Prior to the full operational launch of the on-chain BBN governance system, the Security Council will provisionally assume key governance responsibilities to ensure the stability and security of the BitVM Bridge.

### 3.1. Emergency Withdrawal Protocol

In extreme situations where there is an imminent and critical threat that could lead to a significant drain of funds from the BitVM smart contracts, the Security Council is authorized to activate an Emergency Withdrawal Protocol.

**Mechanism:**

- An emergency withdrawal path will be established for reclaimable UTXOs within the BitVM bridge design.
- Upon identification of a qualifying breach and subsequent authorization by the 7/10 multisig, the Security Council can initiate the withdrawal of bridge funds from the compromised BitVM smart contract instance(s).
- These withdrawn funds will be secured in a designated multisig wallet controlled by the Security Council.
- Following the containment of the threat and a thorough review, the control and stewardship of these funds will be transferred to a new, secure bridge instance or managed as directed by the (future) BBN governance.

**Future Outlook:**

The Emergency Withdrawal path is a temporary, critical safeguard. As the BitVM Bridge protocol matures, undergoes further hardening, and the decentralized governance mechanisms become fully established and battle-tested, this Emergency Withdrawal capability will be carefully evaluated and is intended to be fully phased out. This transition will relieve the Security Council of this specific duty, further decentralizing control over the bridge funds.