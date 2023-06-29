---
title: "Play with the smart contract"
slug: Play
---

Now that we've deployed the smart contract, let's mint a new NFT to our account.

### Mint

Copy your Metamask address and paste it in the `mintTo` section.

After submitting the address the address will be minted an NFT!

Next select `balanceOf` with the Metamask address you minted to. Now the `balanceOf` the address should display `1`.

<div class="image-container-secondary">
    <img class="image--primary" src={require('@site/static/img/remix.png').default} alt="dymint-overview" />
</div>

### Conclusion

We've done a lot in this tutorial!

We've used the `Roller` CLI tool to deploy an EVM RollApp connected to IBC and then deployed a custom NFT smart contract to it. But this is just a small taste of what is possible.

Have ideas? Join the Dymension community on [Discord](https://discord.gg/dymension) and share what you're working on!
