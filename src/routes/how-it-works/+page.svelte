<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO 
  title="How Catallax Works - Protocol Flow"
  description="Learn how the Catallax protocol uses Nostr to enable pseudonymous contractor economies"
  image="/success-flowchart.png"
/>

<header class="my-10">
  <h1 class="text-2xl">Protocol Flow</h1>
</header>
<main class="mx-auto w-full">
	<section class="mx-auto container prose dark:prose-invert my-10">
    <p>
    Please refer to the spec for technical details (TODO: link forthcoming). Here we'll look at the general flow from a higher level with some details elided.
    </p>
    <h2 class="text-xl">The Happy Path</h2>
    <p>I hope you like flowcharts!</p>
    <div>
      <p>In the following diagram, you'll see this timeline:</p>
      <ol>
        <li>Two Arbiters announce their escrow and judgement services
          <ul>
            <li><strong>Arbiter A</strong> is offering to adjudicate React.js Web Development projects. For a fee of 2% of the project rate.</li>
            <li><strong>Arbiter B</strong> is offering similar services, but she's doing it for 1%.</li>
          </ul>
          <li>These actions are represented as Nostr events on one or more relays (Kind 3400) posted by the Arbiter.</li>
          <li>A <strong>Patron</strong> has task for some React work. He posts it as a Nostr event (Kind 3401). This event should reference the original 3400 Arbiter announcement event.</li>
          <li><em>Out of band</em> (in Nostr DMs, Signal, in person, smoke signals, whatever), The Patron and Arbiter coordinate and the Arbiter agrees to take the task on.</li>
          <li>The Patron sends the full project funds to the Arbiter in order to "fund the escrow" and references this payment receipt in the 3401 event.</li>
          <li>The Patron and a <strong>Free Agent</strong> coordinate (also out of band) and agree this Free Agent will work this task.</li>
          <li>Upon completion, the Free Agent submits his work to the Arbiter, who assess the suitability of the work with regard to the original request.</li>
          <li>If deemed acceptable, the Arbiter pays out the Free Agent, less the 1% fee which she keeps for her trouble.</li>
          <li>The Arbiter publishes a final event (Kind 3402) attesting to the completion of the project, referencing the 3401 Task event as well as the final payment receipt.</li>
      </ol>
    </div>
	</section>
    <div class="my-5">
      <img class="w-full" src="https://vcavallo.nyc3.digitaloceanspaces.com/images/success-flowchart.png" />
    </div>
	<section class="mx-auto container prose dark:prose-invert my-10">
    <p>
    In the end, the Patron gets their task completed, the Free Agent gets paid, the Arbiter gets a fee, and everyone earns some positive reputation with the results of the project memorialized in  signed Nostr events for anyone with access to this relay to inspect and verify.
    </p>
    <h2 class="text-xl">The Unhappy Path</h2>
    <p>
    Things don't always go well. If the Free Agent submitted crappy work or didn't deliver at all, the Arbiter would instead <em>refund</em> the project rate (less her fee, of course) to the Patron. The Patron gets their money back and the Arbiter gets their cut for having tracked and attested to the conclusion.
    </p>
    <p>
    In this case, the final 3402 event would indicate that the task was <em>not completed</em> by the Free Agent, who would suffer reputational damage. Any Patrons considering this worker in the future would see their history of failure.<br/>Note: this is still a reputationally-positive outcome for the Arbiter and the Patron, as they were doing their part to participate in the protocol pro-socially.
    </p>
  </section>
</main>
