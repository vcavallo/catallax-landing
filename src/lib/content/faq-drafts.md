## Question

Globe99
nevent1qvzqqqqqqypzptujz495l5qzjfqrzwr0wyenkzhajaq6qah4cuutcfsr5k6e6eclqyfhwumn8ghj7am0wsh82arcduhx7mn99uq3vamnwvaz7tmwdaehgun9d35hgetn9ehhyee0qqsq0txljlm5n0f0xhmk8y9awzxfuu4vq224h3pwt82dc4dhhn6lttcl62vzg

OK something else: reading this, I realize that the arbiter is responsible for judging the work. So basically, the arbiter is involved in every transaction?

I guess this isn't what I would have naively pictured, which would be that most transactions are simply between buyer and seller, and arbiter is only activated if something "goes wrong" and they need adjudication...

Why do you think it's better that the arbiter be "in the loop" for every transaction, rather than only if something goes wrong?

### Answer

Great question! I've got a long (edit: VERY long!), many-pronged answer for you :)

The best answer is that the protocol doesn't enforce this and the three parties involved could choose to do exactly what you're saying. As I fill out the site more I'll be sure to include this important detail, so thanks very much for that.

The arbiter might advertise that they _don't_ judge work and the patron might make clear in their project description that they also work this way. In that case, the agent would send their work directly to the patron and then all three would need to coordinate with the arbiter to get the escrow released to someone.  
The only thing the protocol expects is that _the arbiter_ is the one who creates the "job done" event and attests to the final conclusion and escrow release receipt.

There's a tightrope walk between making the protocol too opinionated such that it gets in the way, vs making it so loose that it doesn't provide any tools for consensus.

That said, I personally think keeping the arbiter "in the loop" as a judge is likely to yield better outcomes:

- Domain expertise for adjudication. If an arbiter is only doing dispute resolution, they'll still need to have domain expertise. If the patron and free agent come to the arbiter with a dispute about some implementation detail of a technical system, the arbiter is going to need to understand it to make a decision. By agreeing to judge the work itself, the arbiter is solidifying a promise about their domain expertise.

- It allows for a **patron** who _doesn't_ have domain expertise! Imagine a patron who has a lot of money, likes a particular open source nostr client, but doesn't know a thing about programming. He could request a feature, described in grug-brain language, "me want big blue button here that make picture". This clever patron selects the _high profile developer_ of the open source client as the arbiter. Now we're in interesting territory... The patron gets his button, the agent gets paid, and the arbiter/open source developer basically gets a PR/contribution to review (either to the upstream project or a personal fork for the patron). **He's getting his FOSS project extended without spending any money - in fact he makes money off arbiter fees.**  
Sure, maybe this sets up new and bizarre incentives or cheats - but that's part of the fun!

- Last one because I wrote way too much here. The are many specific cases in which it is beneficial for two strangers to have a trusted third party in the loop: one example is "anonymous" shipping. Say I want to buy some stuff off @Shopstr
 but I'm paranoid about leaking my address. Imagine there is a super high-profile and trustworthy arbiter out there who I think is _less likely_ than the vendor to dox me. I create a task to get the product to me (as a patron), with the vendor as the free agent and the trusted "shipping intermediary" as the arbiter. I pay ("escrow") the arbiter for the product, the free agent "does the work" of shipping **to the arbiter**. I've already trusted the arbiter with my address (privately), so they ship the product to me and release the funds to the vendor. I would expect to pay high arbiter fees for this incredible service that I can't get elsewhere!

In the last example, providing some basic protocol features that _allow_ (or at least don't preclude) the arbiter from being deeply in the loop creates opportunities for people to build creative service businesses. I'm sure people will come up with even more surprising ones, and I hope they build custom client apps for their weird things, and I hope they contract out the software work via Catallax.

Happy to keep answering more as you've got them. This is really helpful for me not only as a guide to content the site needs, but in the actual protocol design, which should absolutely be a result of many open discussions!
