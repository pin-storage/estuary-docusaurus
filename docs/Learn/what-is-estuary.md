---
sidebar_position: 2
---

# What is Pin.Storage?

Pin.Storage is an open source software that allows easy sending of public data to the Filecoin network that can be retrieved from anywhere.

### Why does Pin.Storage exist?

The Outercore Engineering team that helped make [Filecoin](https://filecoin.io) wanted to provide an end-to-end example of how to use IPFS, Filecoin, and other technologies together.

Read our [FAQ](../Learn/faq) for more frequently asked questions and criticism.

### How do you make Filecoin storage deals?

![alt text](https://user-images.githubusercontent.com/28320272/212175640-273f467a-b8a5-4236-b8e5-977e546e43ef.png)

All data is currently uploaded to our hosted Pin.Storage Node (Written in Go) in North America. Filecoin deals are made immediately against miners listed on our index. When a file is uploaded:

1. A proposal receipt is provided.
2. The deal machine will continue to make deals until 6 storage deals are sealed on the Filecoin Network with 6 different storage providers. The location is variable.
3. Each deal is proposed for at least a year (in fil-epochs), and is a verified client deal.
4. For each successful deal, a Filecoin storage deal receipt is provided with duration and miner information.

### How does Pin.Storage use the Filecoin Network and IPFS protocol?

The setup of our node has parts for those who operate IPFS nodes.

- [LibP2P](https://github.com/libp2p) protocols and modules for identity, establishing secure and multiplexed connections between peers, and so much more.
- [go-libp2p-connmgr](https://github.com/libp2p/go-libp2p-connmgr), a package to help manage connections in go-libp2p.
- [go-ipfs-blockstore](https://github.com/ipfs/go-ipfs-blockstore) a thin wrapper over a datastore, giving a clean interface for Getting and Putting block objects.
- [go-libp2p-kad-dht](https://github.com/libp2p/go-libp2p-kad-dht). A Kademlia DHT implementation on go-libp2p.
- [go-bitswap](https://github.com/ipfs/go-bitswap) to acquire blocks requested by the client from the network and to judiciously send blocks in its possession to other peers who want them.

Then we added:

- [Lotus-gateway](https://github.com/filecoin-project/lotus) - we use a small portion of Lotus, to read information about the chain and publish messages.
- [Filclient](https://github.com/application-research/filclient) - a new standalone client library for interacting with the Filecoin storage network.
- Filecoin wallet for automation and escrow funds.
- Automated replication till 6 deals are active and on chain. The value is configurable.
- Deal estimation with USD cost estimation.
- Automated Filecoin retrieval if the CID is no longer pinned.
- Bandwidth tracking.
- Miner logs and performance tracking.
- Deal lookup by ID and CID.

Not enough? Read the [source code](https://github.com/application-research/estuary/blob/master/main.go).

### How does Pin.Storage handle retrieval deals?

Given any given person, let us imagine they made a request for their data. As an example: [cid:Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5](https://dweb.link/ipfs/Qmch2cHCE4WXV32vyaLgWXYqE7VSLYwrT7xJ6tpxqq3NP5).

**Case A**

- That data is already pinned to an IPFS/Pin.Storage node.
- The CID is served back to the requester immediately.

**Case B**

- That data is not pinned to an IPFS/Pin.Storage node
- The Pin.Storage node makes a retrieval deal against a Filecoin miner using FIL it has in escrow.
- Once the retrieval deal is successful, that data is pinned to the node.
- The CID is served back to the requester.

Still confusing? Check out the [source code](https://github.com/application-research/estuary/blob/master/retrieval.go).

### Who is a Storage Provider

![alt text](https://user-images.githubusercontent.com/28320272/212178311-7dd89211-0b40-4281-88e3-75f1f5c7b966.png)

**Storage providers** are the heart of the Filecoin network. They earn Filecoin by storing data for clients and computing cryptographic proofs to verify storage over time. The more storage a provider contributes to the network, the higher their chances of earning transaction fees and block rewards. Learn more about [how providing storage works](https://docs.filecoin.io/storage-provider/basics/how-providing-storage-works/). You can apply to be a storage provider [here](https://docs-beta.estuary.tech/docs/Learn/get-provider-added).

### People are making deals against my system, where are the logs?

- All of the miners we work with are located on this [API documentation page](https://docs.pin.storage/api-public-miners) and [here](https://pin.storage/ecosystem).
- All of our stats are publicly available on this [API documentation page](https://docs.pin.storage/api-public-stats) or visible from [https://pin.storage](https://pin.storage).
- You can find custom miner pages for each miner on [https://pin.storage/ecosystem](https://pin.storage/ecosystem).

### I am a developer, how do I start?

[Get API access](https://docs.pin.storage/tutorial-get-an-api-key).
