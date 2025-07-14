<script>
	let { children } = $props();
	import { setContext } from 'svelte';
	import Rodape from './Rodape.svelte';

	let busca = $state('');
	setContext('busca', () => busca); // https://svelte.dev/docs/svelte/compiler-warnings#state_referenced_locally
</script>

<nav class="navbar navbar-expand-md bg-primary-subtle border-bottom border-body" data-bs-theme="dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">
			<img src="/favicon.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
			Maria's
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/santos">Santos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/oracoes">Orações</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/titulosmarianos">Títulos Marianos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/lista">Lista</a>
				</li>
			</ul>
			<form class="d-flex" role="search">
				<input bind:value={busca} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
			</form>
		</div>
	</div>
</nav>

{@render children()}

<Rodape></Rodape>