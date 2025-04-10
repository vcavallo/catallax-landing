<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	
	let { children } = $props();
	let isDarkMode = $state(true);

	onMount(() => {
		isDarkMode = document.body.classList.contains('dark');
	});

	function toggleDarkMode() {
		document.body.classList.toggle('dark');
		isDarkMode = document.body.classList.contains('dark');
	}
</script>

<div class="min-h-screen">
	<nav class="py-4 border-b">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-center">
				<div class="flex flex-row gap-4">
	        <div><a href="/" class="hover:underline">Home</a></div>
					<div><a href="/get-involved" class="hover:underline">Get Involved</a></div>
					<div><a href="/faq" class="hover:underline">FAQ</a></div>
				</div>
				<div class="flex items-center">
					<label class="relative inline-flex items-center cursor-pointer">
						<input type="checkbox" bind:checked={isDarkMode} class="sr-only peer" onchange={toggleDarkMode}>
						<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						<span class="ml-3 text-sm font-medium">Dark</span>
					</label>
				</div>
			</div>
		</div>
	</nav>
	
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
	
	<footer class="py-4 border-t">
		<div class="container mx-auto px-4 text-center">
			<p class='text-red-200'>Some footer</p>
		</div>
	</footer>
</div>
