<script>
	import Santo from '$lib/components/Santo.svelte';
	import { santos } from '$lib/santos.js';
	import { getContext, untrack } from 'svelte';

	let filtrados = $state(santos.slice());

	const busca = getContext('busca');
	$effect(() => {
		const termo = busca();
		console.log(termo);
		filtrados = [];
		for (const item of santos) {
			if (item.title.toLowerCase().includes(termo.toLowerCase())) {
				untrack(() => filtrados.push(item));
			}
		}
	});
</script>

<div class="row g-4">
	{#each filtrados as santo}
		<div class="col">
			<Santo {...santo} />
		</div>
	{/each}
</div>

<svelte:head>
	<style>
		body {
			background-color: rgb(202, 202, 255);
		}
	</style>
</svelte:head>
