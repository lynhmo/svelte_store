<script>
	import Siema from 'siema';
	import { onMount } from 'svelte';
	import slider1 from '../lib/assets/images/slider/slider1.jpg';
	import slider2 from '../lib/assets/images/slider/slider2.jpg';
	import slider3 from '../lib/assets/images/slider/slider3.jpg';
	import slider4 from '../lib/assets/images/slider/slider4.jpg';
	import slider5 from '../lib/assets/images/slider/slider5.jpg';
	import slider6 from '../lib/assets/images/slider/slider6.jpg';

	let slider, prev, next, radioSlider;
	let select = 0;

	let data = [
		{ val: slider1 },
		{ val: slider2 },
		{ val: slider3 },
		{ val: slider4 },
		{ val: slider5 },
		{ val: slider6 }
	]; //end array data

	setInterval(() => next, 5000);

	onMount(() => {
		slider = new Siema({
			selector: '.siema',
			duration: 200,
			easing: 'ease-in-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: true,
			rtl: false,
			onInit: () => {},
			onChange: () => {}
		}); //end Siema constructor

		prev = () => {
			slider.prev();
			if (select > 0) {
				select--;
			}
		};

		next = () => {
			slider.next();
			if (select >= 0) {
				select++;
			}
		};
	}); //end onMount
</script>

<div class="siema">
	{#each data as d}
		<div class="slider">
			<img class="imgwidth" src={d.val} alt="carsouler" />
		</div>
	{/each}
</div>
<div class="bullet">
	{#each data as d, i}
		<input
			bind:this={radioSlider}
			type="radio"
			name="slider-radio"
			value={i}
			checked={select == i}
			on:click={() => {
				slider.goTo(i);
			}}
		/>
	{/each}
</div>

<style>
	.imgwidth {
		width: 100%;
	}
	.slider {
		height: 600px;
		margin: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bullet {
		padding-top: 10px;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		border-radius: 50%;
		width: 8px;
		height: 8px;

		background-color: lightgrey;
		transition: 0.2s all linear;
		margin-right: 5px;

		position: relative;
		top: 4px;
	}
	input:checked {
		background-color: grey;
	}
</style>
