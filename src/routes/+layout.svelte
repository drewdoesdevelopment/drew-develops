<script lang="ts">
	import '../styles/global.scss';
	import '../styles/vendor/hover/hover.css';
	import Navbar from '../elements/Navbar.svelte';
	import Footer from '../elements/Footer.svelte';
</script>

<Navbar />

<slot />

<Footer />
