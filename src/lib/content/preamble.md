This site explains an open protocol called _Catallax_ which is intended to facilitate uncensorable, decentralized labor markets and permissionless payments.

Anybody on Earth can participate in Catallax and nobody can be stopped from doing so by anyone. Those who choose to participate in Catallax do so as one of the following roles, depending on their goals:

- **Patron**: Creates tasks to be worked, finalizes agreements with **Arbiters**, funds escrows and assigns **Free Agents**.
- **Arbiter**: Advertises as an escrow agent, accepts tasks, judges outcomes of work and pays **Free Agents** or refunds **Patrons**.
- **Free Agent**: Applies for available tasks, delivers work and gets paid.

Arbiter advertisements, Task postings and their eventual resolutions are posted on the [Nostr](https://nostr.com/) protocol while payments are handled via [Cashu ecash](https://cashu.space/) and [Lightning](https://lightning.network/).  
Thanks to [Cashu-based wallets](https://github.com/nostr-protocol/nips/blob/master/60.md) and Nostr's permissionless identity creation, anyone (namedoxxed or nym) can participate in the Catallax economy without conforming to [KYC or AML](https://www.dowjones.com/professional/risk/resources/glossary/kyc-vs-aml) nor first having a Bitcion or Lightning wallet configured.

**All you need is a web browser.**

## Built on Catallax

Catallax is one protocol, and it's meant to have many faces. Each client below narrows the work to one kind of thing, gives the three roles names its own users understand, and leaves the protocol underneath untouched.

- **[Grantless](https://grantless.org)** — crowdfunded grants for open-source work. Teams post the work they intend to do, the community funds it with lightning, the team self-assigns and builds it, and an arbiter releases the pooled sats when it's delivered. No board, no application, no grantmaker.
- **[Canvasstr](https://canvasstr.org)** — get paid to build the lexiconomy. A patron puts sats behind a decentralized list or a tag, canvassers add entries and tag profiles, and a purser judges each entry and pays for the good ones. Everything you see is filtered through your own web of trust, so there is no central curator.
- **[Reference client](https://catallax-reference-client.netlify.app/catallax)** — the unopinionated one. It exercises every part of the protocol and is where the NIP gets tested. Useful for seeing the raw machinery; not where you'd send your friends.

Roles are renamed per client, never redefined: whoever funds the escrow is the Patron, whoever holds it and judges is the Arbiter (Canvasstr calls them the purser), and whoever does the work is the Free Agent (Grantless lets the team be its own; Canvasstr calls them canvassers). The events on the wire are the same three kinds in every case, so any Catallax client can read what any other one produced.

Rather than involving blockchains, smart contracts or complicated oracles and voting systems, the Catallax protocol relies on lindy technology: **trust and reputation.**

---
