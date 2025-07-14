<script>
	import Rodape from '../Rodape.svelte';

	const tarefas = $state([]);
	let tarefaNova = $state();
	let tarefaEditandoIndice = $state();
	let tarefaEditando = $state();

	function adicionarTarefa() {
		if (tarefaNova == '') return;
		tarefas.push({nome:tarefaNova, status:false});
		tarefaNova = '';
	}

	function excluirTarefa(i) {
		tarefas.splice(i, 1);
	}

	function editarTarefa(i) {
		tarefaEditandoIndice = i;
		tarefaEditando = tarefas[i].nome;
	}

	function salvarTarefa(i) {
		tarefas[i].nome = tarefaEditando;
		tarefaEditandoIndice = null;
	}

	function cancelarEdicao(i) {
		tarefas[i] = tarefas[i];
		tarefaEditandoIndice = null;
	}
</script>

<div class="d-flex flex-column align-items-center">
	<h1 class="titulo my-3">Lista de Oarações🩵</h1>
	<p class="mb-3">
		<input
			maxlength="64"
			onkeydown={(event) => event.key == 'Enter' && adicionarTarefa()}
			placeholder="Digite a tarefa..."
			bind:value={tarefaNova}
		/>
		<button class="btn" onclick={adicionarTarefa}>➕</button>
	</p>
	<ul class="list-group list-group-flush">
		{#each tarefas as tarefa, i}
			<li
				class="list-group-item d-flex justify-content-between align-items-center bg-transparent border-black"
			>
				{#if tarefaEditandoIndice == i}
					<input bind:value={tarefaEditando} />
					<button class="btn btn-sm" onclick={() => salvarTarefa(i)}>✅</button>
					<button class="btn btn-sm" onclick={() => cancelarEdicao(i)}>❌</button>
				{:else}
					<input class="form-check-input me-1" type="checkbox" bind:checked={tarefa.status} id="{i}" />
					<label class="form-check-label" class:checked={tarefa.status} for="{i}"> {tarefa.nome} </label>

					<div>
						<button class="btn btn-sm" onclick={() => editarTarefa(i)}>✏</button>
						<button class="btn btn-sm" onclick={() => excluirTarefa(i)}>🗑</button>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<svelte:head>
	<style>
		body {
			background-color: #dae5ec;
		}
	</style>
</svelte:head>

<style>
	.titulo {
		font-family: Lucida Handwriting;
		text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
	}

	.btn {
		border-style: solid;
		border-color: rgb(3, 22, 51);
	}

	.checked {
		text-decoration: line-through;
	}

	.form-check-input:checked {
    background-color: rgb(3, 22, 51);
    border-color: rgb(3, 22, 51);
}
</style>
