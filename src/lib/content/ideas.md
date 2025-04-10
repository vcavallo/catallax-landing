# Drafts / Ideas / WIP

Value for Value _for Real_

# How it works

## Define Roles

what the roles are and what they mean

- **Patron**: Create tasks, finalize agreements with **Arbiters**, and assign **Free Agents**
- **Arbiter**: Register as an escrow agent, accept tasks, and judge outcomes
- **Free Agent**: Browse available tasks, submit applications, deliver work and get paid

## Other Definitions:

- **Escrow**: This is simply the wallet of the Arbiter; nothing fancy. Patrons send payment to the Arbiter. The Arbiter sends payment to the Agent (or refunds the Patron).

## Protocol flow

The application implements the NIP-3400 protocol for contractor/escrow workflows:

1. Arbiters register themselves with terms and conditions
2. Patrons create task proposals with requirements and bounty amounts
3. Arbiters can accept task proposals and hold escrow
4. Patrons **finalize tasks by funding the escrow**
5. Free Agents can apply for tasks
6. Patrons assign Free Agents to tasks
7. Free Agents submit completed work
8. Arbiters resolve tasks and release funds (or refund the Patron)

# Principles

## Fully decentralized

- Provide a relay + client package for easy deployment by anyone
- optionally include a mint
- optionally include GrapeRank WoT
- The author of this protocol will not run this service - that's up to others.

## Full Pseudonymity Spectrum Respected

- The protocol runs over nostr, but we strive to obscure that
- any _person_, whether they know what nostr is or not, should be able to sign up and provide services
- any person, whether they have a lightning wallet or bitcoin-awarness/interest should be able to participate economically (thanks, nutsack)


## Trust and Reputation

- Discussion of GrapeRank
- List all the known places where bad actors could do bad things and their mitigations
- Game theorists and red-teamers are invited to help plug these holes

# TODO for this site:

- [ ] Create a github project and display its tasks here via api integration (Public roadmap)
- [ ] Include citations from the literature that inspired this project
- [ ] include "follow me on nostr" link
- [ ] include importance of pseudonymity

# Questions being explored

- Should the cashu mint be with the relay/"instance" or the escrow arbiter?
- is cashu a fallback from lighting, or the only option?
- can a patron choose a different mint or have to use the arbiter's (or relay's...) mint?

# Links

- [Early UI being fully revamped](https://github.com/vcavallo/catallax-ui)
- [Initial NIP proposal](https://github.com/nostr-protocol/nips/pull/1714) (also being fully revamped after some valuable feedback from fiatjaf
- [WIP Khatru relay implementation](https://github.com/vcavallo/khatru/tree/trim-kinds)

---

> The advantage of a free market is that it allows millions of decision-makers to respond individually to freely determined prices, allocating resources - labor, capital and human ingenuity - in a manner that can't be mimicked by a central plan, however brilliant the central planner.
