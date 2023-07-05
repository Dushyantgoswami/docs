---
title: Module config
slug: config
---

Modules by themselves are indepedent components, therefore we will need to integrate the module into the main application `app.go`. To do so we will use `depinject`, a framework for efficiently wiring modules into applications.

In this section we will define the module configuration using Protobuf. This will a module must define its configuration and requirements so that depinject can provide the right dependencies. We will define a config object with Protobuf to later define the configurations.

Begin by creating a new file called `module.proto` in the `proto` folder:

```
touch module.proto
```

Now we will define the module config object itself. This example has one field that defines an `authority` which will be used to check signer of the state transition message:

```protobuf
syntax = "proto3";

package cosmos.payment.module.v1;

import "cosmos/app/v1alpha1/module.proto";
import "gogoproto/gogo.proto";
import "google/protobuf/duration.proto";
import "amino/amino.proto";

// Module is the config object of the payment module.
message Module {
  // go_import must point to the Go package of the custom module.
  option (cosmos.app.v1alpha1.module) = {
    go_import: "github.com/rollapp/x/payment"
  };

  // Message fields define the module configuration. That configuration can be set in the app_config.go / app.yaml file for a chain developer to configure the module.
  // authority defines the custom module authority. If not set, defaults to the governance module.
  string authority = 1;
}
```

Now that we've defined the `payment` module's config requirements, we may continue and generate the Protobuf files.
