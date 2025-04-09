<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="min-h-screen bg-white">
	<nav class="py-4 border-b">
		<div class="container mx-auto px-4">
			<ul class="flex space-x-6">
				<li><a href="/" class="hover:underline">Home</a></li>
				<li><a href="/about" class="hover:underline">About</a></li>
				<li><a href="/faq" class="hover:underline">FAQ</a></li>
			</ul>
		</div>
	</nav>
	
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
	
	<footer class="py-4 border-t">
		<div class="container mx-auto px-4 text-center">
			<p>© 2025 My Site</p>
		</div>
	</footer>
</div>
