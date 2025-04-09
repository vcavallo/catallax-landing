<script>
	import AboutContent from '$lib/content/about.md';
	import Team from '$lib/content/team.md';
</script>

<div class="prose max-w-none">
	<h1 class="text-3xl font-bold mb-6">About Us</h1>
	
	<section class="mb-10">
		<h2 class="text-2xl font-semibold mb-4">Our Story</h2>
		<p>This is some hardcoded content about our company. Here we can explain our mission and values.</p>
	</section>
	
	<section class="mb-10">
		<h2 class="text-2xl font-semibold mb-4">About Us</h2>
		<div class="bg-gray-50 p-6 rounded-lg">
			<AboutContent />
		</div>
	</section>
	
	<section class="mb-10">
		<h2 class="text-2xl font-semibold mb-4">Our Team</h2>
		<div class="bg-gray-50 p-6 rounded-lg">
			<Team />
		</div>
	</section>
</div>