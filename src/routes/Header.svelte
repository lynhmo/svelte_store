<script>
	import { navigate } from 'svelte-routing';
	import MdiSearch from '~icons/mdi/search';
	import bigLogo from '../lib/assets/images/logo.png';
	import CarbonUserAvatarFilled from '~icons/carbon/user-avatar-filled';
	import SolarCart3Linear from '~icons/solar/cart-3-linear';
	import Login from '../components/Login.svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	let searchButton =
		'bg-heavyGreen flex h-full w-[20%] items-center gap-2 self-center ' +
		'rounded-e-3xl px-3 text-lg text-white hover:cursor-pointer';

	let check = true;

	// // Function to get a specific cookie by name
	// function getCookie(name = '') {
	// 	const cookies = document.cookie.split(';');
	// 	for (let i = 0; i < cookies.length; i++) {
	// 		const cookie = cookies[i].trim();
	// 		if (cookie.startsWith(name + '=')) {
	// 			return cookie.substring(name.length + 1);
	// 		}
	// 	}
	// 	return null;
	// }
	// const myCookieValue = getCookie('AccessToken');

	// // Check if the cookie exists
	// if (myCookieValue !== null) {
	// 	console.log('Value of your_cookie_name:', myCookieValue);
	// } else {
	// 	console.log('Cookie not found');
	// }

</script>

<div class="bg-mediumGreen flex justify-between px-[7%] py-5 text-white">
	<div class="w-[23%]">
		<button on:click={() => navigate('/')} class="h-fit">
			<img src={bigLogo} alt="logo" class="w-80" />
		</button>
	</div>

	<div class="flex w-[54%] justify-center">
		<form class="flex h-10 w-[100%] max-w-xl items-center self-center">
			<input class="h-full w-[80%] rounded-s-3xl px-3" type="text" />
			<button class={searchButton} type="submit">
				<MdiSearch />
				Search
			</button>
		</form>
	</div>

	<div class="flex w-[23%] justify-end self-center">
		<CarbonUserAvatarFilled class="mx-2 text-3xl " />
		{#if check}
			<Login></Login>
		{:else}
			<div class="mx-2 self-center text-xl">Name</div>
		{/if}
		<SolarCart3Linear class=" mx-2 self-center text-3xl" />
	</div>
</div>
<div>asda</div>
