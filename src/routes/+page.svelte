<script lang="ts">
	import Ideas from '$lib/content/ideas.md';
	import Preamble from '$lib/content/preamble.md';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO 
  title="Catallax - A Protocol for Pseudonymous Contractor Economies"
  description="The Catallax network is an open protocol that enables pseudonymous contractor economies for services"
/>

<div class="max-w-none">
  <header class="mx-auto container max-w-4xl">
    <h1 class="text-5xl leading-14 md:text-left text-center my-20">The Catallax network is an open protocol that enables pseudonymous contractor economies for services</h1>
    <h2 class="text-2xl text-center mt-10">
      Patrons broadcast paid gigs<br/>Free Agents work jobs anonymously<br/>Arbiters hold funds in escrow and judge outcomes.
    </h2>
    <h2 class="text-2xl text-center mt-0">
      Everyone wins.
    </h2>
    <div class="w-40 h-40 mx-auto">
      <img src="https://vcavallo.nyc3.cdn.digitaloceanspaces.com/images/catallax-logo-1-transparent.png" />
    </div>
  </header>
	
	<main class="my-10 prose mx-auto prose-lg dark:prose-invert">
    <section>
      <Preamble />
    </section>

    <section>
      <h2>Sections</h2>
      <ul>
        <li><a href="#protocols-over-platforms">Protocols Over Platforms</a></li>
        <li><a href="#how-it-works">Overview of How it Works</a></li>
        <li><a href="#principles">Principles</a></li>
        <li><a href="#current-status">Current Status</a></li>
        <li><a href="#todo-for-this-site">Evolution of this Site</a></li>
        <li><a href="#questions-being-explored">Areas of Exploration</a></li>
        <li><a href="#links">Links</a></li>
      </ul>
    </section>
	
    <section class="mb-10">
      <div class="">
        <Ideas />
      </div>
    </section>
  </main>
</div>
