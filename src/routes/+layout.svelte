
<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	
	let { children } = $props();
	let isDarkMode = $state(true);
	let isMenuOpen = $state(false);

	onMount(() => {
		isDarkMode = document.body.classList.contains('dark');
	});

	function toggleDarkMode() {
		document.body.classList.toggle('dark');
		isDarkMode = document.body.classList.contains('dark');
	}
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="dark:prose-invert min-h-screen">
	<nav class="py-4 border-b">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-center">
				<div><a href="/" class="text-lg font-semibold hover:underline">Catallax</a></div>
				
				<!-- Mobile menu button -->
				<button 
					class="md:hidden flex items-center p-2" 
					onclick={toggleMenu}
					aria-label="Toggle menu"
				>
					<svg 
						class="w-6 h-6" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24" 
						xmlns="http://www.w3.org/2000/svg"
					>
						{#if isMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						{/if}
					</svg>
				</button>
				
				<!-- Desktop navigation -->
				<div class="hidden md:flex flex-row gap-4">
					<div><a href="/get-involved" class="hover:underline">Contribute</a></div>
					<div><a href="/how-it-works" class="hover:underline">Works</a></div>
					<div><a href="/faq" class="hover:underline">FAQ</a></div>
				</div>
				
				<div class="hidden md:flex items-center">
					<label class="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" bind:checked={isDarkMode} class="" onchange={toggleDarkMode}>
						<span class="ml-3 text-sm font-medium">Dark</span>
					</label>
				</div>
			</div>
			
			<!-- Mobile navigation -->
			{#if isMenuOpen}
				<div class="md:hidden mt-4 pb-2">
					<div class="flex flex-col space-y-2">
						<a href="/get-involved" class="py-1 hover:underline">Contribute</a>
						<a href="/how-it-works" class="py-1 hover:underline">Works</a>
						<a href="/faq" class="py-1 hover:underline">FAQ</a>
						
						<div class="pt-2 border-t mt-2">
							<label class="flex items-center cursor-pointer">
								<input type="checkbox" bind:checked={isDarkMode} class="" onchange={toggleDarkMode}>
								<span class="ml-3 text-sm font-medium">Dark Mode</span>
							</label>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</nav>
	

	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
	
	<footer class="py-4 border-t">
		<div class="container mx-auto px-4 text-center">
			<p class=''>catallax.network</p>
		</div>
	</footer>
</div>
