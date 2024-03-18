<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	import { BACKEND_API_URL } from '$env/static/public';
	import axios from 'axios';
	async function signinUser() {
		try {
			const response = await axios.post(BACKEND_API_URL + '/user/sign-in', {
				username: username,
				password: password
			});
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	}

	let username = '',
		password = '';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'primary', background:'green' })}>Login</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>BOTSTORE</Dialog.Title>
			<Dialog.Description>Login</Dialog.Description>
		</Dialog.Header>

		<form action="" method="post">
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="username" class="text-right">Username</Label>
					<Input id="username" bind:value={username} class="col-span-3" />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="password" class="text-right">Password</Label>
					<Input id="password" bind:value={password} class="col-span-3" />
				</div>
			</div>
		</form>

		<Dialog.Footer>
			<Button type="submit" on:click={signinUser}>Login</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
