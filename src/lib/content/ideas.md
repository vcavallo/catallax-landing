# Draft

# Ideas / WIP

> **katallasso** (καταλλάσσω) which meant not only "to exchange" but also "to admit in the community" and "to change from enemy into friend."

> The advantage of a free market is that it allows millions of decision-makers to respond individually to freely determined prices, allocating resources - labor, capital and human ingenuity - in a manner that can't be mimicked by a central plan, however brilliant the central planner.

- [ ] Create a github project and include it here via api integration
- [ ] Include "citations" from Anarchy State and Utopia, David Friedman, etc. - explain that this project is informed by ancap literature
- [ ] include "follow me on nostr" link
- [ ] include importance of pseudonymity

# Questions being explored

- Should the cashu mint be with the relay/"instance" or the escrow arbiter?
- is cashu a fallback from lighting, or the only option?
- can a patron choose a different mint or have to use the arbiter's (or relay's...) mint?

## Drafts

_Value for Value for real_.

- [early relay implementation of the Kinds proposed in NIP-3400](https://github.com/vcavallo/khatru/blob/escrow/nip100.md), but it, too is under active development and the fate of NIP-3400 is yet to be determined.

This application provides a user interface for participating in bounty/escrow workflows on Nostr. Users can take on different roles:

- **Patron**: Create tasks, finalize agreements with **Arbiters**, and assign **Free Agents**
- **Arbiter**: Register as an escrow agent, accept tasks, and judge outcomes
- **Free Agent**: Browse available tasks, submit applications, deliver work and get paid

## Define Roles

TK: what the roles are and what they mean

## How It Works

The application implements the NIP-3400 protocol for escrow workflows:

1. Arbiters register themselves with terms and conditions
2. Patrons create task proposals with requirements and bounty amounts
3. Arbiters can accept task proposals and hold escrow
4. Patrons finalize tasks by funding the escrow
5. Free Agents can apply for tasks
6. Patrons assign Free Agents to tasks
7. Free Agents submit completed work
8. Arbiters resolve tasks and release funds (or refund the Patron)

**Catallax trust-maxxes**. We don't rely on blockchains or smart contracts for escrow or other agreements, but rather on trust and reputation. All activity will live forever(ish) in Nostr events, which allows positive reputation to flow to honest actors and for scammers, ruggers and cheaters to be forever besmirched.  
This is a proper free market where anyone can participate and the goat-trails of **real value** will pave themselves down into highways of human flourishing.

All interactions are performed through Nostr events.

### reputation

- Discussion of GrapeRank

### Trust and rug risk

- List all the known places where bad actors could do bad things and their mitigations
- Game theorists and red-teamers are invited to help plug these holes

## Payments

- cashu + NIP-50 (TK 60?) for immediate payments for any user level

## "Nostr users" optional

- The protocol runs over nostr, but we strive to obscure that
- any _person_, whether they know what nostr is or not, should be able to sign up and provide services
- any person, whether they have a lightning wallet or bitcoin-awarness/interest should be able to participate economically (thanks, nutsack)

## Decentralized

- relay + client package for easy deployment
- optionally include a mint
- optionally include GrapeRank WoT
- I, vinney, will not run this service - that's up to others.

## Image dump

![catallax](https://github.com/user-attachments/assets/6561b70c-b3cc-496b-86ea-33cc9c48cd62)
