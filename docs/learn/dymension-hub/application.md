---
title: "Dymension Hub"
slug: "application"
hide_table_of_contents: true
---

Dymension Hub is a decentralized Delegated Proof-of-Stake blockchain secured by the `DYM` token. The Dymension Hub is the decentralized source of truth, security, and liquidity for the network of RollApps. The Dymension Hub is specifically built to provide RollApps with security, interoperability, and liquidity.<br/>

-   <b>Security</b> - Inherited from the Dymension Hub and the respective data availability layer. Security for RollApp users is enforced by validators of the Dymension Hub and the protocol's fraud proof design. By relying on an honest-majority of the Dymension Hub validator set, RollApps may operate with an honest-minority (i.e. 1/N trust assumption) and have significantly reduced bootstrapping overhead.
-   <b>Interoperability</b> - RollApps communicate and transact with one another via dedicated modules which exist both on the RollApp and the Dymension Hub. Inter-Blockchain Communication (IBC) leverages the common ground of all RollApps - the Dymension Hub. The Dymension Hub facilitates bridging for RollApp users within the entire IBC ecosystem.
-   <b>Liquidity</b> - The only application logic in the Dymension Hub not strictly restricted for handling RollApp validity is an embedded Automated Market Maker (AMM). The AMM is designed to expose RollApps to efficient asset routing, price discovery and most importantly shared liquidity for the entire ecosystem.

<div class="image-container-secondary">
    <img class="image--primary" src={require('../images/dymension-hub-amm.png').default} alt="dymension-hub-overview" />
</div>

Dymension Hub facilitates the vertical integration of the `app-chain thesis` in which network and liquidity bootstrapping is coupled in one user experience. Dymension's vertically integrated approach reduces the amount of time to deploy an app-chain to as little as a few minutes.

By establishing a canonical IBC connection with access to concentrated liquidity and furthermore to the entire IBC ecosystem, RollApps only need to run one IBC relayer. This vertically integrated approach allows developers to focus on their main objective, building novel blockchain applications.
