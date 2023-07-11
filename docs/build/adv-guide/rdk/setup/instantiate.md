---
title: Instantiate
slug: instantiate
---

We will now install the application to the GOPATH.

```
make install
```

Now that we've installed the application on the local machine we can test by running the following command:

```
rollappd
```

Should return:

<div class="image-container-secondary">
    <img class="image--primary" src={require('@site/static/img/rollappd.png').default} alt="dymint-overview" />
</div>

Please note the path in which the RollApp binary exists. We can then move to deploying the application with [Roller](/docs/build/adv-guide/roller-adv/install-adv.md).
