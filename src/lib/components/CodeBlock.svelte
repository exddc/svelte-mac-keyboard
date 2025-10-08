<script lang="ts">
	import { BROWSER } from 'esm-env';
	import { codeToHtml } from 'shiki';

	const {
		code,
		lang = 'svelte'
	}: {
		code: string;
		lang?: 'svelte' | 'typescript' | 'javascript' | 'html' | 'css';
	} = $props();

	let highlightedCode = $state('');

	$effect(() => {
		(async () => {
			if (BROWSER) {
				highlightedCode = await codeToHtml(code, {
					lang,
					theme: 'github-dark'
				});
			}
		})();
	});
</script>

<div class="overflow-x-auto rounded-lg p-4 text-sm sm:text-base">
	{@html highlightedCode}
</div>

<style>
	:global(pre) {
		white-space: pre-wrap;
		word-break: break-all;
	}
</style>
