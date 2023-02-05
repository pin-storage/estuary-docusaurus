---
sidebar_position: 3
---

# FAQ

### Does Pin.Storage support private storage?

Pin.Storage does not encrypt or provide any protection for your data. The safety of your data is your own responsibility.

### Is Pin.Storage {insert any compliance} compliant?

When you run your own Pin.Storage Node, you can make your Pin.Storage Node compliant. Our Pin.Storage Node may not be and does not make any promises about compliance.

### Can you guarantee the location of our data?

No.

### Can you guarantee all of my data ends up on a specific storage provider?

No. But you may be able to if you run your own Pin.Storage Node.

### What is the mechanism for choosing storage providers?

You decide, we try against 3 of the storage providers with the best performance, and 3 random ones. You can modify this and can also contribute better ways to select providers, and make open source contributions to the repo itself.

### What is Pin.Storage's take on storage provider reputation, and what are some key reputation metrics that Pin.Storage focuses on?

Pin.Storage's take is one based on real performance, to attempt to simulate real world requirements as much as possible.

### Are the existing storage providers' information shared by all estuary nodes, or does each node have its own list of storage providers?

Each Pin.Storage node has its own list, in a SQL database.

### What is the process for a storage provider to connect to Pin.Storage?

Add the storage provider to the list that your Pin.Storage node keeps. You will have an admin dashboard, and can manage your providers from a GUI or API call.

### Can I use Pin.Storage over the command line?

Yes, use CURL.

### How is Pin.Storage different than Web3 Storage or NFT Storage?

Read more [here](https://pin.storage/comparisons-web3).

### How does Pin.Storage compare to cloud storage?

Read more [here](https://pin.storage/comparisons).

### How do we make sure providers are able to accept these deals? Do they need advance warning?

Providers should not need advance warning, if there are problems with the deal they should have the mechanisms in place to reject it.

### Can providers handle the Pin.Storage Node rate of deals?

Pin.Storage as of September 1st is capable of making 600 storage deals an hour.

### How does Pin.Storage fit into indexing plans for discovering Filecoin data on providers?

Pin.Storage uses [multihashes](https://multiformats.io/multihash/).

### Are all pieces of data referenced by mulithash?

Everything is referenced by a content identifer (CID). IPFS does not distinguish between CIDs with the same multihash.

### Does Pin.Storage have a plan for deal renewals?

There is no way to extend an existing deal, Pin.Storage will make a new deal on the users behalf.

### Are deals importable and exportable?

Yes, but the API is not exposed.

### Once a deal is made, how does Pin.Storage help clients monitor storage status and facilitate retrieval?

Your Pin.Storage node runs with a web server that polls against each storage provider per deal ID, and checks the status. If a deal is slashed, it will continue to try and make Pin.Storage deals until there are 6. This process is automated.

Pin.Storage will attempt retrieval to fix lost CIDs on the IPFS node. Currently, since everything you upload is also pinned, users can retrieve anything uploaded through Pin.Storage through any IPFS gateway via HTTP.
