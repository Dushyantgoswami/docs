---
title: Build a module
slug: begin-end-block
---

BeginBlocker and EndBlocker are a way for module developers to add automatic execution of logic to their module. This is a powerful tool that should be used carefully, as complex automatic functions can slow down or even halt the chain.

When needed, BeginBlocker and EndBlocker are implemented as part of the BeginBlockAppModule. This means either can be left-out if not required. The BeginBlock and EndBlock methods of the interface implemented in module.go generally defer to BeginBlocker and EndBlocker methods respectively, which are usually implemented in abci.go.
