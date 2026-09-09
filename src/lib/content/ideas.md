## Protocols over Platforms

Catallax is a protocol, not a platform. This site acts as a schelling point to coordinate and explain the system, but doesn't provide the service itself nor does the author take any fees from anyone running the protocol. It's up to market actors to participate and run infrastructure according to their needs.

Because the network is built on top of Nostr, Catallax inherits Nostr's censorship-resistance. As long as you can find a relay (or run your own), you can participate in the economy. Neither individual users nor particular tasks or work categories can be unilaterally prohibited by any central authority.  
Speech is guaranteed by open protocols, but reach is not.

## How it Works

1. Arbiters advertise themselves, including what type of work they are proficient at judging, their fee, and any terms and conditions.
2. Patrons create task proposals with detailed descriptions of what they want done and how much the gig pays.
3. Patrons **finalize tasks by funding the escrow**

- By "fund the escrow" we just mean "send bitcoin or ecash to the Arbiter's wallet". Remember, we're keeping the base layer simple.

1. Free Agents can apply for tasks and discuss with the Patron
2. The Patron assigns a Free Agent to a task
3. Free Agents get to work. When done, they submit the final product to the Arbiter for this gig
4. The Arbiter judges the work. If it meets the requirement, the Free Agent is paid. If not, the money is refunded to the Patron.

For more details, see [How it Works](/how-it-works).

_Value-for-Value **for Real**_

## Principles

### Fully decentralized from the beginning

The author of this protocol is deeply distrustful of _defacto centralization_, where a nominally open protocol is implemented in one instance with overly-opinionated defaults hardcoded in such that viable alternatives never arise.  
To avoid that, we will endeavour to:

- Provide a relay + client package as a dead-simple binary for easy deployment by anyone.
  - The maintainers of this site might run an instance to help bootstrap, but it should be trivial for anyone else to do the same.
- Optionally include a Cashu mint in the above.
- Optionally include [GrapeRank WoT](https://brainstorm.world/what-is-wot) in the above.

### Pseudonymity and user-proficiency spectrum respected

- The protocol runs over nostr, but we will strive to hide these technicaliities at first
  - The ideal implementation will include simple onboarding such that a non-Nostr-user who just wants to participate in Catallax can get a Nostr identity and Cashu wallet right away via a Catallax client.
  - For the user who wants to explore the rest of Nostr, off-ramps should be provided to usher them into the rest of the ecosystem.
- Any person, whether they have a lightning wallet and bitcoin-awarness/interest or not should be able to participate economically (thanks to NIP-60).
- The above, taken all together, imply that fully pseudonymous interaction will be feasible.
- Thought will be given to Tor compatibility as appropriate.

### Trust and Reputation

Both [Grantless](https://grantless.org) and [Canvasstr](https://canvasstr.org) now lean on [GrapeRank](https://brainstorm.world/what-is-wot) web-of-trust scores and [decentralized lists](https://nostrhub.io/naddr1qvzqqqrcvypzpef89h53f0fsza2ugwdc3e54nfpun5nxfqclpy79r6w8nxsk5yp0qythwumn8ghj7erpwe5kgtnwdaehgu339e3k7mf0qqfkgetrv4h8gunpd35h5ety94kxjum5wv4px7v6) instead of any central reputation system. A viewer's own point of view decides which patrons, arbiters and workers they see first; nobody's point of view can stop anyone else from publishing.

The one place a Catallax user must extend real trust is the Arbiter: they hold the escrow, and they could run off with it. We've capitulated on that up front. Pick your Arbiter well, and appreciate that their fee is your safety. Web-of-trust scores and a public record of every judgement (each resolution is a signed event with a payment receipt beside it) are how that choice gets easier over time.

Game theorists and red-teamers are invited to find the remaining holes.

### Catallax will be built on Catallax

- To every extent possible, once an MVP is ready and as budget allows, work on Catallax relay implementations, clients, Cashu integrations and GrapeRank integrations will be advertised as Catallax tasks for others to pick up!

## Where things stand

_As of September 2026._

- **Live and used:** [Grantless](https://grantless.org) and [Canvasstr](https://canvasstr.org) both run on the protocol with real lightning payments between real people. The reference client is up and exercises the whole NIP.
- **Trust:** both clients read GrapeRank scores and decentralized lists, with [Brainstorm](https://brainstorm.world) as the first provider of trusted assertions. Anyone can compute their own point of view and any client can choose a different provider.
- **Payments:** lightning, as NIP-57 zaps, so every escrow deposit and every payout has a public receipt. Cashu is _unstarted_; NIP-60 wallets remain the plan for people who arrive with no lightning at all.
- **Relays:** none required. The protocol works on any relay that stores the three kinds, and we got further without relay-side work than we expected to. The early relay implementation is retired.
- **Packaging:** a one-binary deployment of client, relay and optional mint is still the aspiration and still _unstarted_.

## Links

- [Grantless](https://grantless.org) · [source](https://github.com/vcavallo/grantless)
- [Canvasstr](https://canvasstr.org) · [source](https://github.com/vcavallo/canvasstr) · [how it extends Catallax](https://github.com/vcavallo/canvasstr/blob/master/PROTOCOL.md)
- [Reference client](https://catallax-reference-client.netlify.app/catallax) · [source](https://github.com/vcavallo/catallax-reference-client)
- [The NIP](/nip) · [draft pull request](https://github.com/nostr-protocol/nips/pull/1714)
- [Brainstorm](https://brainstorm.world), where points of view are computed
