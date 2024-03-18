<script>
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header></Header>
<slot />
<Footer></Footer>
