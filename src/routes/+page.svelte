<script lang="ts">
	import Keyboard from '$lib/components/keyboard.svelte';
</script>

<div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
	<div
		class="absolute inset-0 bg-center"
		style="background-image: radial-gradient(circle at 50% 10%, hsl(0 0% 95%), hsl(0 0% 100%));"
	></div>
	<div class="relative w-full px-4">
		<header class="mx-auto max-w-3xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl">
				Svelte Mac Keyboard
			</h1>
			<p class="mt-4 text-lg text-zinc-600 sm:text-xl">
				Customizable and animated Mac-style keyboard component for Svelte.
			</p>
		</header>

		<main class="mt-12">
			<Keyboard />
		</main>

		<footer class="mt-16 text-center">
			<p class="text-zinc-500">
				Built by
				<a href="https://timoweiss.me" target="_blank" class="text-blue-600 hover:underline">
					Timo Weiss
				</a>
			</p>
		</footer>
	</div>
</div>
