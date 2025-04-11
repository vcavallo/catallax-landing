<script lang="ts">
  export let title = 'Catallax - A Protocol for Pseudonymous Contract Work Economies';
  export let description = 'Catallax is an open protocol that enables pseudonymous contract work economies. It runs over Nostr, Bitcoin and Cashu ecash for censorship-resistant communications and permissionless payments.';
  export let url = 'https://catallax.network';
  export let wideImage = '/catallax-social-share-1200-630.png';
  export let narrowerImage = '/catallax-social-share-800-418.png';
</script>

<svelte:head>
  <!-- Basic metadata -->
  <title>{title}</title>
  <meta name="description" content={description} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={wideImage} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={narrowerImage} />
</svelte:head>
