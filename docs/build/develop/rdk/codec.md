---
title: Encoding
slug: codec
---

cdc is the codec used to marshall and unmarshall structs to/from []byte. The cdc can be any of codec.BinaryCodec, codec.JSONCodec or codec.Codec based on your requirements. It can be either a proto or amino codec as long as they implement these interfaces. The authority listed is a module account or user account that has the right to change module level parameters. Previously this was handled by the param module, which has been deprecated.
