<script>
	import Oracao from '$lib/components/Oracao.svelte';
	import { oracoes } from '$lib/oracoes.js';
    import { getContext, untrack } from 'svelte';

	let filtrados = $state(oracoes.slice());

	const busca = getContext('busca');
	$effect(() => {
		const termo = busca();
		console.log(termo);
		filtrados = [];
		for (const item of oracoes) {
			if (item.title.toLowerCase().includes(termo.toLowerCase())) {
				untrack(() => filtrados.push(item));
			}
		}
	});
	
</script>

	<div class="row g-4">
		{#each filtrados as oracao}
			<div class="col">
				<Oracao {...oracao} />
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

