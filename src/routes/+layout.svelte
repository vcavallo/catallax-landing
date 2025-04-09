<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="min-h-screen bg-white">
	<nav class="py-4 border-b">
		<div class="container mx-auto px-4">
			<div class="flex flex-row gap-4">
        <div><a href="/" class="hover:underline">Home</a></div>
				<div><a href="/get-involved" class="hover:underline">Get Involved</a></div>
				<div><a href="/faq" class="hover:underline">FAQ</a></div>
			</div>
		</div>
	</nav>
	
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
	
	<footer class="py-4 border-t">
		<div class="container mx-auto px-4 text-center">
			<p>Some footer</p>
		</div>
	</footer>
</div>
