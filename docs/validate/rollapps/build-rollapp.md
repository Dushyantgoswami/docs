---
title: Build RollApp
slug: build-rollapp
---

#### The following section explains how to build a RollApp full node:

1. Use `git` to retrieve the RollApp binaries:

    ```
    git clone https://github.com/dymensionxyz/dymension-rdk
    cd dymension-rdk
    ```

2. Build the RollApp. This will install the `rollappd` executable to your [ `GOPATH` ](https://go.dev/doc/gopath_code) environment variable.

    ```bash
    make install
    ```

3. Verify that the RollApp full node is installed correctly.

    ```bash
    rollappd version
    ```

    If the command is not found an error message is returned, confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

    ```
    export PATH=$PATH:$(go env GOPATH)/bin
    ```
