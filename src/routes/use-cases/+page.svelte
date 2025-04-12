<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import UseCases from '$lib/content/use-cases.md';
</script>

<SEO 
  title="Example use cases for Catallax"
  description="Learn how the Catallax protocol uses Nostr to enable pseudonymous contractor economies"
/>

<main class="mx-auto container prose dark:prose-invert my-10">
  <header class="my-10">
    <h1 class="text-4xl">Example Use Cases</h1>
  </header>

  <section>
      <UseCases />
  </section>
</main>
