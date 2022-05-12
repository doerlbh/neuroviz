<script>
	import Nav from '../components/nav.svelte';
	import Footer from '../components/footer.svelte';
	import '../app.css';
</script>

<div class="max-w-6xl mx-auto">
	<!-- <Nav /> -->
	<slot />
</div>
<Footer />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
