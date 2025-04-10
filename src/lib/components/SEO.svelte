<script lang="ts">
  export let title = 'Catallax';
  export let description = 'The Catallax network is an open protocol that enables pseudonymous contractor economies for services';
  export let url = 'https://catallax.network';
  export let image = '/catallax-logo-1-transparent.png';
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
  <meta property="og:image" content={image} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
