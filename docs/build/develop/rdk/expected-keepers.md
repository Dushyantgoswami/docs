---
title: Expected keepers
slug: expected-keepers
---

If a module needs to access the subset of state defined by another module, a reference to the second module's internal keeper needs to be passed to the first one. This is done in app.go during the instantiation of module keepers.

An expected keeper is a keeper external to a module that is required by the internal keeper of said module. External keepers are listed in the internal keeper's type definition as interfaces. These interfaces are themselves defined in an expected_keepers.go file in the root of the module's folder. In this context, interfaces are used to reduce the number of dependencies, as well as to facilitate the maintenance of the module itself.
