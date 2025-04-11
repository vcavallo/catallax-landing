<script lang="ts">
	import { onMount } from 'svelte';
	import FaqContent from '$lib/content/faq.md';
	import SEO from '$lib/components/SEO.svelte';
	
	onMount(() => {
		// Convert markdown h3/p pairs to details/summary elements
		document.querySelectorAll('.faq-content h3').forEach(h3 => {
			const p = h3.nextElementSibling;
			const details = document.createElement('details');
			const summary = document.createElement('summary');
			
			// Move content from h3 to summary
			summary.innerHTML = h3.innerHTML;
			
			// Wrap in details/summary
			details.appendChild(summary);
			if (p) {
				details.appendChild(p.cloneNode(true));
				p.remove();
			}
			
			h3.parentNode?.replaceChild(details, h3);
		});
	});
</script>

<SEO 
  title="Catallax FAQ - Frequently Asked Questions" 
  description="Get answers to common questions about the Catallax protocol for pseudonymous contractor economies"
/>

<main class="my-10 prose dark:prose-invert mx-auto">
<header class="my-10">
  <h1 class="text-4xl">Frequently Asked Questions</h1>
</header>
	<div class="faq-content">
		<FaqContent />
	</div>
</main>

<style>
	:global(.faq-content details) {
		margin-bottom: 0.5rem;
	}
	
	:global(.faq-content summary) {
		cursor: pointer;
		padding: 1rem;
		border: 1px solid rgb(229, 231, 235);
		border-radius: 0.5rem;
		font-weight: 500;
		list-style: none;
	}
	
	:global(.faq-content summary::after) {
		content: '+';
		float: right;
		font-size: 1.25rem;
		font-weight: 300;
	}
	
	:global(.faq-content details[open] summary::after) {
		content: '−';
	}
	
	:global(.faq-content details > p) {
		padding: 1rem;
		border-top: none;
		border-radius: 0 0 0.5rem 0.5rem;
		margin-top: -0.5rem;
		margin-bottom: 1rem;
	}
	
	:global(.dark .faq-content details > p) {
		border-color: rgb(75, 85, 99);
	}
</style>
