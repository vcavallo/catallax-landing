<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
	import Nip from '$lib/content/nip-draft.md';
</script>

<SEO 
  title="NIP draft for Catallax"
  description="Full version of the current NIP describing the Catallax protocol"
  image="/success-flowchart.png"
/>

<main class="prose mx-auto dark:prose-invert">
	<section class="mb-10">
		<div class="">
			<Nip />
		</div>
	</section>
</main>
