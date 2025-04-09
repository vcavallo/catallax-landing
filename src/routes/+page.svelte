<script lang="ts">
	import Welcome from '$lib/content/welcome.md';
</script>

<div class="prose max-w-none">
	<h1 class="text-3xl font-bold mb-6">Welcome to Our Site</h1>
	
	<section class="mb-10">
		<h2 class="text-2xl font-semibold mb-4">Hardcoded Content Section</h2>
		<p>This is some hardcoded HTML content directly in the Svelte template. This text is written directly in the Svelte file.</p>
		<p>You can include any HTML elements here:</p>
		<ul>
			<li>List item one</li>
			<li>List item two</li>
			<li>List item three</li>
		</ul>
	</section>
	
	<section class="mb-10">
		<h2 class="text-2xl font-semibold mb-4">Welcome Content from Markdown</h2>
		<div class="bg-gray-50 p-6 rounded-lg">
			<Welcome />
		</div>
	</section>
</div>
