## Protocols over Platforms

Catallax is a protocol, not a platform. This site acts as a schelling point to coordinate and explain the system, but doesn't provide the service itself nor does the author take any fees from anyone running the protocol. It's up to market actors to participate and run infrastructure according to their needs.

Because the network is built on top of Nostr, Catallax inherits Nostr's censorship-resistance. As long as you can find a relay (or run your own), you can participate in the economy. Neither individual users nor particular tasks or work categories can be unilaterally prohibited by any central authority.  
Speech is guaranteed by open protocols, but reach is not.

## How it Works

1. Arbiters advertise themselves, including what type of work they are proficient at judging, their fee, and any terms and conditions.
2. Patrons create task proposals with detailed descriptions of what they want done and how much the gig pays.
4. Patrons **finalize tasks by funding the escrow**
  - By "fund the escrow" we just mean "send bitcoin or ecash to the Arbiter's wallet". Remember, we're keeping the base layer simple.
5. Free Agents can apply for tasks and discuss with the Patron
6. The Patron assigns a Free Agent to a task
7. Free Agents get to work. When done, they submit the final product to the Arbiter for this gig
8. The Arbiter judges the work. If it meets the requirement, the Free Agent is paid. If not, the money is refunded to the Patron.

For more details, see [How it Works](/how-it-works).

_Value-for-Value **for Real**_

## Principles

### Fully decentralized from the beginning

The author of this protocol is deeply distrustful of _defacto centralization_, where a nominally open protocol is implemented in one instance with overly-opinionated defaults hardcoded in such that viable alternatives never arise.  
To avoid that, we will endeavour to:

- Provide a relay + client package as a dead-simple binary for easy deployment by anyone.
  - The maintainers of this site might run an instance to help bootstrap, but it should be trivial for anyone else to do the same.
- Optionally include a Cashu mint in the above.
- Optionally include [GrapeRank WoT](https://grapevine-brainstorm.vercel.app/#/about/graperank) in the above.

### Pseudonymity and user-proficiency spectrum respected

- The protocol runs over nostr, but we will strive to hide these technicaliities at first
  - The ideal implementation will include simple onboarding such that a non-Nostr-user who just wants to participate in Catallax can get a Nostr identity and Cashu wallet right away via a Catallax client.
  - For the user who wants to explore the rest of Nostr, off-ramps should be provided to usher them into the rest of the ecosystem.
- Any person, whether they have a lightning wallet and bitcoin-awarness/interest or not should be able to participate economically (thanks to NIP-60).
- The above, taken all together, imply that fully pseudonymous interaction will be feasible.
- Thought will be given to Tor compatibility as appropriate.


### Trust and Reputation

- TODO: Discussion of GrapeRank
- TODO: List all the known places where bad actors could do bad things and their mitigations (spoiler alert: it's mostly the Arbiter who can scam people, and we've already capitulated that Arbiter trust will be paramount. Pick your Arbiter well and appreciate that their fee is your safety!)
- Game theorists and red-teamers are invited to help plug these holes

### Catallax will be built on Catallax

- To every extent possible, once an MVP is ready and as budget allows, work on Catallax relay implementations, clients, Cashu integrations and GrapeRank integrations will be advertised as Catallax tasks for others to pick up!

## Current Status

_Catallax is in active development!_

See the links below for more detail, but briefly:

- An initial relay implementation was briefly live
- An initial proof-of-concept UI was briefly live
- Lightning/Cashu integration is _unstarted_
- GrapeRank integration is _unstarted_
- Friendly deployment packaging is _unstarted_

A public roadmap will be provided on this site (see below).

## TODO for this site:

- [ ] Create a github project and display its tasks here via api integration (Public roadmap)
- [ ] Include citations from the literature that inspired this project
- [ ] include easy "follow me on nostr" link
- [ ] Fill out mentions of GrapeRank above
- [ ] write more on the importance of pseudonymity?

## Questions Being Explored

- Should the cashu mint be with the relay/"instance" or the escrow arbiter?
- is Cashu a fallback from lighting, or the only option?
- can a patron choose a different mint or have to use the arbiter's (or relay's...) mint?

## Links

- [Early UI being fully revamped](https://github.com/vcavallo/catallax-ui)
- [Initial NIP proposal](https://github.com/nostr-protocol/nips/pull/1714) (also being fully revamped after some valuable feedback from fiatjaf
- [WIP Khatru relay implementation](https://github.com/vcavallo/khatru/tree/trim-kinds) - in the process of incorporating the above feedback.
