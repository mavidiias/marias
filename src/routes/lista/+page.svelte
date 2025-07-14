<script>
	import Rodape from '../Rodape.svelte';
	let { data, form } = $props();

	console.log(form);

	const tarefas = data.todasoracoes;
	let tarefaNova = $state();
	let tarefaEditandoIndice = $state();
	let tarefaEditando = $state();

	function editarTarefa(i) {
		tarefaEditandoIndice = i;
		tarefaEditando = tarefas[i].conteudo;
	}

	function salvarTarefa(i) {
		tarefas[i].conteudo = tarefaEditando;
		tarefaEditandoIndice = null;
	}

	function cancelarEdicao(i) {
		tarefas[i] = tarefas[i];
		tarefaEditandoIndice = null;
	}
</script>

<div class="d-flex flex-column align-items-center">
	<h1 class="titulo my-3">Lista de Oarações🩵</h1>
	<div class="mb-3">
		<form action="?/salvaroracao" method="POST">
			<input
				name="oracao"
				maxlength="64"
				placeholder="Digite a tarefa..."
				bind:value={tarefaNova}
			/>
			<button class="btn">➕</button>
		</form>
	</div>
	<ul class="list-group list-group-flush">
		{#each tarefas as tarefa, i}
			<li
				class="list-group-item d-flex justify-content-between align-items-center bg-transparent border-black"
			>
				{#if tarefaEditandoIndice == i}
					<form action="?/editaroracao" method="post">
						<input type="hidden" name="id" value={tarefa.id} />
						<input name="conteudo" bind:value={tarefaEditando} />
						<button class="btn btn-sm">✅</button>
						<button class="btn btn-sm" onclick={() => cancelarEdicao(i)}>❌</button>
					</form>
				{:else}
					<input
						class="form-check-input me-1"
						type="checkbox"
						bind:checked={tarefa.status}
						id={i}
					/>
					<label class="form-check-label" class:checked={tarefa.status} for={i}>
						{tarefa.conteudo}
					</label>

					<div>
						<button class="btn btn-sm" onclick={() => editarTarefa(i)}>✏</button>
						<form action="?/apagaroracao" method="POST">
							<input type="hidden" name="id" value={tarefa.id} /><button class="btn btn-sm"
								>🗑</button
							>
						</form>
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
	form {
		display: inline;
	}

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
