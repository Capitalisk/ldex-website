---
id: faqs
title: FAQs
sidebar_label: FAQs
---

### How is LDEX decentralized?

Price history, order matching and trade execution are fully decentralized.
There is no point of centralization anywhere in the entire trading flow.
DEX validator nodes add their signatures to valid trades but the execution of those trades is handled directly by the underlying blockchains.
The DEX output is deterministic and idempotent relative to its input so there can only be one correct version of history.

### What is the LDEX fee structure?

Each time a trade is executed, the following fees are deducted from the cross-chain transfer on each affected blockchain:

- **Base fee**: This is a flat fee which is used to cover the transaction fees of the underlying blockchains. It is levied against every type of DEX transaction. For Lisk and Leasehold blockchains, this fee is `0.1 LSK/LSH`.
- **Rate fee**: This fee is a percentage of the total amount of each transfer. It is levied against all trade transactions (`t1` and `t2`) on both affected blockchains in addition to the base fee. This fee is currently `0.1%` for all LDEX markets.

Because orders are filled in real time, the flat base fee could be levied multiple times against a single order depending on the number of matching counterparty orders.
Also note that LDEX rounds down taker trades by up to `1 LSK/LSH` to guarantee that transfers can comfortably cover blockchain fees.

### Does LDEX have custody over my tokens?

Before you place an order, all of your tokens are in your sole custody inside your own blockchain wallet.
Once you submit an order to LDEX, the tokens contained in the underlying transaction will be stored in the DEX multisig wallet until they are matched with counter-offers.
No single LDEX member or minority group has control over your tokens since all transfers out of the DEX multisig wallets require signatures from the majority of DEX members/validators.
As a user, you have the ability to cancel your own order at any time by submitting a `close` order.

### Can trades across different blockchains be traced?

Each trade is written to two different blockchains and the underlying transactions contain IDs which can be used to trace the movement of tokens across different blockchains.
However, LDEX itself is not able to attach an identity to any wallet address so the pseudo-anonymity provided by the underlying blockchains is maintained.

### How does the LDEX UI application handle wallet passphrases?

Passphrases provided to the DEX UI application are never sent across the wire; they are only kept in memory on your own computer.
Order transactions are signed on the front end and submitted directly to the relevant blockchain for processing.

### What is the minimum size of an order?

This can vary between markets and is designed to limit spam. For Lisk and Leasehold, the minimum order is `10 LSK/LSH`.

### What happens if I send an invalid order to the DEX multisig address?

If LDEX receives a transaction which it does not recognize, it will send the tokens back to the user minus the `base fee`.

### How long can limit orders stay open on LDEX?

Limit orders on LDEX can stay open on the order book for up to 1 month before they expire. When an order expires, any unfilled amount will be refunded back to the maker's wallet address minus the `base fee`.

### How can I become an LDEX member/validator?

Each LDEX market is made up of 8 to 100 members who validate cross-chain transfers and receive a share of trading fees. Most slots are reserved for Leasehold directors and original LDEX members but each market will also have some spare slots available for outside participants. You can apply for a slot on specific markets via the Leasehold [dex-members channel](https://discord.gg/mGCPYpS).

### How can I get my token listed on LDEX?

You can send a pitch deck or a link to your project website on the Leasehold [dex-pitches channel](https://discord.gg/2xugtUp). Projects are judged based on their potential and compatibility within with the LDEX ecosystem. Having a technical background is not necessary. Pure business cases will also be considered.

### Is LDEX scalable?

Yes, this can be achieved by supporting a multi-level hierarchy of sidechains connected to each other via DEX markets. Additional sub-sidechains can be launched to increase the total TPS capacity of existing sidechains. Top level chains are likely to be more valuable and have higher fees than chains further down in the market hierarchy.

Since LDEX leaves a complete decentralized trading history of prices and volumes on all participating blockchains, it will be possible for the value of any token to be determined automatically and trustlessly relative to any other token in the LDEX ecosystem. The goal of this approach is to allow all tokens within the LDEX ecosystem to be used interchangeably as a form payment according to their relative values. The innovation which makes this possible is that LDEX allows the relative value of different tokens to be calculated trustlessly and automatically.

### Is LDEX a company?

No. LDEX is made up of individual members who independently operate nodes which validate and sign cross-chain transfers.
This collaboration is founded purely on individual incentives and cryptography.

### Where is LDEX located?

LDEX is not based in any country. Members decide individually where they want to run their nodes.
