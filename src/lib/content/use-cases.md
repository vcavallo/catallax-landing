_This section is under development_

## Programming, design and other digitally-delivered work

This is the most obvious use case that comes to mind for most people in this space, so lets get it out of the way immediately and very briefly: A patron wants some software development, design, content writing, etc. work done, they get it delivered digitally, the worker gets paid; this is the straightforward, happy path for the protocol.  

Now for some more creative applications...

## Privacy-protective shipping and fulfillment

There are plenty of items on [Shopstr](https://shopstr.store/) that I would like to buy - and I have! But I don't love leaking my home address to every vendor I come across. Does Catallax solve this?

- Patron wants to buy physical goods from Vendor X
- There exists a very trustworthy arbiter who acts as a shipping intermediary
- Patron creates a "Get me Item Y from Vendor X" task and coordinates with the arbiter and the Vendor (who is sort of acting as a free agent here)
- Patron sends the cost of Item Y (plus fee) to the arbiter
- Arbiter buys Item Y from Vendor X, using the arbiter's address for shipping
- When the product is received by the arbiter, he turns around and re-ships it to the original patron (who felt comfortable sharing his home address with this _one_ arbiter).

The patron can shop from dozens of vendors while only trusting one highly-reputable party with his shipping address.

## Crowdfunding

With a little imagination, and some integrations with _Kind 9041: Zap Goals_ ("crowdfunding"), one could see a way to crowdfund tasks. Rather than a single patron funding the escrow (and potentially being refunded), many "crowd patrons" could all fund a Zap Goal together, held by the arbiter. Then as usual, if the free agent completes the work, he gets paid. Funds could even be released incrementally, at that various zap goal milestones. But if a refund is due, the arbiter would refund _each_ of the crowd patrons. Clients could provide ergonomic tools for this and arbiters might charge extra to adjudicate crowdfunded tasks (herding cats and all).

## Open Source Software and Bug Bounties

Mostly related to the above. But a few interesting wrinkles.  

The author or maintainer of a Free and Open Source Software project hangs out her shingle as an arbiter with her adjudication context being: her software! Let's say she builds a FOSS Nostr client called Nahstr.  

A deep-pocketed patron who loves Nahstr but doesn't know the first thing about software development can now put out a task for some feature _he_ wants, "I want dark mode! Take my money!". Once an appropriate free agent comes around, the FOSS-maintainer arbiter can help the free agent spec out the technicalities a little, checking in with the Patron that its what he wants. The Patron happily pays the arbiter, and the free agent completes the work and gets paid.  

Depending on the rate the arbiter set, she's either making good money herself or having her project get contributions is rewarding enough and she's mostly ferrying the money along to free agent contributors. And she might choose to provide a personal fork for this weird dark mode patron or she merges it to master if appropriate.

The kicker here is that **the free agent _just got paid to contribute to open source_, the project maintainer has a lighter load (and maybe some fuller pockets) and the user (patron) has his needs met**.

Combine this with the Crowdfunding approach above and we might have just found an additional strategy for funding open source at scale.

## Reputation Bonds

It might be tough to bootstrap your career as a free agent, especially if doing so on a fresh nym.  

One approach might be reputation bonds. The free agent could offer to "stake" some percentage of the project rate with the arbiter in order to sweeten their application. This is a strong signal of confidence: if the free agent doesn't complete the work successfully, his bond is lost (it should probably get sent to the patron, in the case where the arbiter is judging the work - or else this might be unacceptably risky as the arbiter could just say the work was poor and take the bond. A temptation that isn't present in the standard cases).  

If he completes the work, he gets his bond returned and acquires a nice reputational notch on his belt. Perhaps next time a smaller bond will be okay...

## Underwriters

This is almost like a similar-to-above bootstrapping system for arbiters. Second-layer "meta-arbiters" would specialize in judging arbiters themselves. They necessarily must be among the most trustworthy, high-profile individuals in the community. If one of the arbiters they vouch for - or "underwrite" - totally absconds with project funds (or otherwise somehow fails in their duties), the underwriter compensates the affected parties.  

They may either earn a small fee on these interactions, or they might have a personal interest in seeing the system flourish. Sounds like they have a lot of clout so maybe they don't need the money anyway?

## Arbiter Insurance Pools

Similarly, multiple arbiters could collectively form an insurance pool. Each member contributes a percentage of their fees to the pool. If an arbiter in the pool fails to perform properly, the pool could make whole the affected patrons or free agents. Those with longer positive track records may contribute less while newer arbiters contribute more.

This additional insurance might make arbiters who participate in such pools more attractive to patrons. And it causes the arbiters to self-regulate and police each other a bit.

## More to come...

Feel free to get in touch if you have interesting applications for Catallax. It might help inform reference implementation features.
