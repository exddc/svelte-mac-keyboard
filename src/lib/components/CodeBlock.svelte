<script lang="ts">
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';
	import { codeToHtml } from 'shiki';

	const {
		code,
		lang = 'svelte'
	}: {
		code: string;
		lang?: 'svelte' | 'typescript' | 'javascript' | 'html' | 'css';
	} = $props();

	let highlightedCode = $state('');

	onMount(async () => {
		if (BROWSER) {
			highlightedCode = await codeToHtml(code, {
				lang,
				theme: 'github-dark'
			});
		}
	});
</script>

<div class="overflow-x-auto rounded-lg p-4">
	{@html highlightedCode}
</div>
