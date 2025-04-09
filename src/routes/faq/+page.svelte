<script>
	import { onMount } from 'svelte';
	import FaqContent from '$lib/content/faq.md';
	
	// Store for expanded state of each FAQ item
	const faqItems = $state([]);
	
	// Process the FAQ content once mounted
	onMount(() => {
		// Set a small delay to ensure the FAQ content is rendered
		setTimeout(() => {
			// Find all h3 headings (questions) from the rendered FAQ content
			const faqContainer = document.querySelector('.faq-content');
			if (faqContainer) {
				const questions = faqContainer.querySelectorAll('h3');
				
				// Initialize the state array with all items collapsed
				for (let i = 0; i < questions.length; i++) {
					const question = questions[i];
					const answer = question.nextElementSibling;
					
					// Add item to state
					faqItems.push({ 
						question: question.textContent, 
						answer: answer ? answer.outerHTML : '', 
						expanded: false 
					});
					
					// Remove the original elements as we'll render our own
					if (question.parentNode) {
						question.parentNode.removeChild(question);
						if (answer && answer.parentNode) {
							answer.parentNode.removeChild(answer);
						}
					}
				}
			}
		}, 100);
	});
	
	// Toggle FAQ item expanded state
	function toggleFaq(index) {
		faqItems[index].expanded = !faqItems[index].expanded;
	}
</script>

<div class="prose max-w-none">
	<h1 class="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
	
	<p class="mb-6">Below are some common questions about our services and products.</p>
	
	<!-- Hidden div that will hold the initial markdown content for processing -->
	<div class="faq-content hidden">
		<FaqContent />
	</div>
	
	<!-- Render FAQ items as collapsible sections -->
	<div class="space-y-4">
		{#each faqItems as item, i}
			<div class="border rounded-lg overflow-hidden">
				<button 
					class="w-full text-left p-4 bg-gray-50 flex justify-between items-center"
					on:click={() => toggleFaq(i)}
				>
					<span class="font-medium">{item.question}</span>
					<span>{item.expanded ? '−' : '+'}</span>
				</button>
				
				{#if item.expanded}
					<div class="p-4 bg-white" >
						{@html item.answer}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.hidden {
		display: none;
	}
</style>