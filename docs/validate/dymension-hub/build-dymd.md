---
title: Build Dymension Hub
slug: build-dymd
---

#### The following section explains how to build the Dymension Hub full node:

1. Use `git` to retrieve [Dymension Hub](https://github.com/dymensionxyz/dymension):

    ```
    git clone https://github.com/dymensionxyz/dymension.git --branch TODO
    cd dymension
    ```

2. Build the Dymension Hub. This will install the `dymd` executable to your [ `GOPATH` ](https://go.dev/doc/gopath_code) environment variable.

    ```bash
    make install
    ```

3. Verify that the Dymension Hub full node is installed correctly.

    ```bash
    dymd version --long
    ```

    **Example**:

    ```bash
    name: dymension
    server_name: dymd
    version: TODO
    commit: TODO
    ```

    If the dymd command is not found an error message is returned, confirm that your [GOPATH](https://go.dev/doc/gopath_code#GOPATH) is correctly configured by running the following command:

    ```
    export PATH=$PATH:$(go env GOPATH)/bin
    ```
