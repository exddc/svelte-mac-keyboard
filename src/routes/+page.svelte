<script lang="ts">
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';

	let showFunctionRow = $state(true);
	let theme = $state<'dark' | 'light'>('dark');

	const codeSnippet = $derived(`<script lang="ts">
    import Keyboard from '$lib/components/Keyboard.svelte';
<\/script>

<Keyboard showFunctionRow={${showFunctionRow}} theme={'${theme}'} />`);
</script>

<div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
	<div
		class="absolute inset-0 bg-center"
		style="background-image: radial-gradient(circle at 50% 10%, hsl(0 0% 95%), hsl(0 0% 100%));"
	></div>
	<div class="relative flex w-full flex-col items-center justify-center gap-24 px-4 pt-24">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl">
				Svelte Mac Keyboard
			</h1>
			<p class="mt-4 text-lg text-zinc-600 sm:text-xl">
				Customizable and animated Mac-style keyboard component for Svelte.
				<br />
				Reacts to keyboard events and mouse events.
			</p>
		</div>

		<div class="flex w-full flex-col justify-end gap-6">
			<div class="flex w-full flex-col justify-end" style="min-height: 330px">
				<Keyboard {showFunctionRow} {theme} />
			</div>

			<div class="flex items-center justify-center gap-8">
				<div class="flex items-center rounded-lg bg-zinc-200 p-1 text-sm">
					<button
						class="rounded-md px-3 py-1 font-medium transition-colors {theme === 'light'
							? 'bg-white text-zinc-800 shadow-sm'
							: 'text-zinc-600'}"
						onclick={() => (theme = 'light')}
					>
						Light
					</button>
					<button
						class="rounded-md px-3 py-1 font-medium transition-colors {theme === 'dark'
							? 'bg-white text-zinc-800 shadow-sm'
							: 'text-zinc-600'}"
						onclick={() => (theme = 'dark')}
					>
						Dark
					</button>
				</div>
				<label for="toggle-function-row" class="flex cursor-pointer items-center">
					<div class="relative">
						<input
							type="checkbox"
							id="toggle-function-row"
							class="peer sr-only"
							bind:checked={showFunctionRow}
						/>
						<div
							class="h-6 w-11 rounded-full bg-zinc-300 transition-colors peer-checked:bg-blue-500"
						></div>
						<div
							class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-full"
						></div>
					</div>
					<div class="ml-3 text-sm text-zinc-600">Show Function Keys</div>
				</label>
			</div>
		</div>

		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-zinc-800">How to Use</h2>
			<p class="mt-4 text-lg text-zinc-600">
				Simply import the component and use it in your Svelte files.
			</p>

			<div
				class="mt-8 w-full overflow-hidden rounded-lg border border-zinc-200/50 bg-zinc-800 text-left shadow-md backdrop-blur-lg"
			>
				<CodeBlock code={codeSnippet} />
			</div>
		</div>

		<footer class="pb-8 text-center">
			<p class="text-zinc-500">
				Built by
				<a href="https://timoweiss.me" target="_blank" class="text-blue-600 hover:underline">
					Timo Weiss
				</a>
			</p>
		</footer>
	</div>
</div>
