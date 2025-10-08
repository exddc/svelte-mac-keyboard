<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import {
		SunDim,
		Sun,
		PanelTop,
		Search,
		Mic,
		Moon,
		Rewind,
		Play,
		FastForward,
		VolumeX,
		Volume1,
		Volume2,
		Power
	} from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import { themes } from '$lib/colors';

	// Props
	const {
		class: className,
		showFunctionRow = true,
		theme = 'dark'
	}: { class?: string; showFunctionRow?: boolean; theme?: 'dark' | 'light' } = $props();

	// Types
	type Key = {
		code: string;
		label: string;
		shiftLabel?: string;
		size?: number;
		align?: 'left' | 'right' | 'center';
		valign?: 'top' | 'bottom' | 'center';
		symbol?: string;
		icon?: ComponentType;
	};

	// State
	const selectedTheme = $derived(themes[theme]);

	// Constants
	const FONT_FAMILY = 'font-sans';
	const KEY_BORDER_RADIUS = 'rounded-md';

	const keyboardLayout: Key[][] = [
		[
			{ code: 'Backquote', label: '`', shiftLabel: '~' },
			{ code: 'Digit1', label: '1', shiftLabel: '!' },
			{ code: 'Digit2', label: '2', shiftLabel: '@' },
			{ code: 'Digit3', label: '3', shiftLabel: '#' },
			{ code: 'Digit4', label: '4', shiftLabel: '$' },
			{ code: 'Digit5', label: '5', shiftLabel: '%' },
			{ code: 'Digit6', label: '6', shiftLabel: '^' },
			{ code: 'Digit7', label: '7', shiftLabel: '&' },
			{ code: 'Digit8', label: '8', shiftLabel: '*' },
			{ code: 'Digit9', label: '9', shiftLabel: '(' },
			{ code: 'Digit0', label: '0', shiftLabel: ')' },
			{ code: 'Minus', label: '-', shiftLabel: '_' },
			{ code: 'Equal', label: '=', shiftLabel: '+' },
			{ code: 'Backspace', symbol: '⌫', label: '', size: 1.5, align: 'right' }
		],
		[
			{ code: 'Tab', symbol: '⇥', label: '', size: 1.5, align: 'left' },
			{ code: 'KeyQ', label: 'Q' },
			{ code: 'KeyW', label: 'W' },
			{ code: 'KeyE', label: 'E' },
			{ code: 'KeyR', label: 'R' },
			{ code: 'KeyT', label: 'T' },
			{ code: 'KeyY', label: 'Y' },
			{ code: 'KeyU', label: 'U' },
			{ code: 'KeyI', label: 'I' },
			{ code: 'KeyO', label: 'O' },
			{ code: 'KeyP', label: 'P' },
			{ code: 'BracketLeft', label: '[', shiftLabel: '{' },
			{ code: 'BracketRight', label: ']', shiftLabel: '}' },
			{ code: 'Backslash', label: '\\', shiftLabel: '|', size: 1 }
		],
		[
			{ code: 'CapsLock', symbol: '⇪', label: '', size: 1.75, align: 'left' },
			{ code: 'KeyA', label: 'A' },
			{ code: 'KeyS', label: 'S' },
			{ code: 'KeyD', label: 'D' },
			{ code: 'KeyF', label: 'F' },
			{ code: 'KeyG', label: 'G' },
			{ code: 'KeyH', label: 'H' },
			{ code: 'KeyJ', label: 'J' },
			{ code: 'KeyK', label: 'K' },
			{ code: 'KeyL', label: 'L' },
			{ code: 'Semicolon', label: ';', shiftLabel: ':' },
			{ code: 'Quote', label: "'", shiftLabel: '"' },
			{ code: 'Enter', symbol: '↩︎', label: '', size: 1.75, align: 'right' }
		],
		[
			{ code: 'ShiftLeft', symbol: '⇧', label: '', size: 2.25, align: 'left' },
			{ code: 'KeyZ', label: 'Z' },
			{ code: 'KeyX', label: 'X' },
			{ code: 'KeyC', label: 'C' },
			{ code: 'KeyV', label: 'V' },
			{ code: 'KeyB', label: 'B' },
			{ code: 'KeyN', label: 'N' },
			{ code: 'KeyM', label: 'M' },
			{ code: 'Comma', label: ',', shiftLabel: '<' },
			{ code: 'Period', label: '.', shiftLabel: '>' },
			{ code: 'Slash', label: '/', shiftLabel: '?' },
			{ code: 'ShiftRight', symbol: '⇧', label: '', size: 2.25, align: 'right' }
		],
		[
			{ code: 'ControlLeft', symbol: '⌃', label: 'control', size: 1.25, align: 'left' },
			{ code: 'AltLeft', symbol: '⌥', label: 'option', size: 1.25, align: 'left' },
			{ code: 'MetaLeft', symbol: '⌘', label: 'command', size: 1.5, align: 'left' },
			{ code: 'Space', label: '', size: 6 },
			{ code: 'MetaRight', symbol: '⌘', label: 'command', size: 1.5, align: 'right' },
			{ code: 'AltRight', symbol: '⌥', label: 'option', size: 1.25, align: 'right' },
			{ code: 'ControlRight', symbol: '⌃', label: 'control', size: 1.25, align: 'right' }
		]
	];

	const functionKeyRow: Key[] = [
		{ code: 'Escape', label: 'esc', size: 1.75, align: 'left', valign: 'bottom' },
		{ code: 'F1', label: 'F1', icon: SunDim },
		{ code: 'F2', label: 'F2', icon: Sun },
		{ code: 'F3', label: 'F3', icon: PanelTop },
		{ code: 'F4', label: 'F4', icon: Search },
		{ code: 'F5', label: 'F5', icon: Mic },
		{ code: 'F6', label: 'F6', icon: Moon },
		{ code: 'F7', label: 'F7', icon: Rewind },
		{ code: 'F8', label: 'F8', icon: Play },
		{ code: 'F9', label: 'F9', icon: FastForward },
		{ code: 'F10', label: 'F10', icon: VolumeX },
		{ code: 'F11', label: 'F11', icon: Volume1 },
		{ code: 'F12', label: 'F12', icon: Volume2 },
		{ code: 'Power', label: '', icon: Power, size: 1, align: 'center' }
	];

	// State
	let pressedKeys = $state<Record<string, boolean>>({});

	const allRows = $derived(showFunctionRow ? [functionKeyRow, ...keyboardLayout] : keyboardLayout);

	// Functions
	function handleKeyDown(event: KeyboardEvent) {
		pressedKeys[event.code] = true;
	}

	function handleKeyUp(event: KeyboardEvent) {
		delete pressedKeys[event.code];
	}

	function handleMouseDown(code: string) {
		pressedKeys[code] = true;
	}

	function handleMouseUp(code: string) {
		delete pressedKeys[code];
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	});
</script>

<div id="keyboard" class={cn(className, 'mx-auto w-full max-w-3xl')}>
	<div
		class={cn(
			'flex w-full flex-col gap-0.5 rounded-lg border-2 p-0.5 shadow-lg sm:gap-1 sm:p-1',
			selectedTheme.bgColor,
			selectedTheme.borderColor,
			FONT_FAMILY,
			className
		)}
	>
		{#each allRows as row (row[0].code)}
			<div class="flex w-full justify-center gap-0.5 sm:gap-1">
				{#each row as key (key.code)}
					<button
						class={cn(
							'flex min-h-[32px] basis-0 cursor-pointer flex-col items-stretch justify-center border-b-2 px-1 py-0.5 text-xs transition-all duration-75 ease-in-out focus:outline-none sm:min-h-[50px] sm:px-2 sm:py-1 sm:text-sm',
							KEY_BORDER_RADIUS,
							selectedTheme.keyTextColor,
							selectedTheme.keyInsetBorderColor,
							{
								'translate-y-px border-b-0': pressedKeys[key.code]
							},
							pressedKeys[key.code] ? selectedTheme.keyActiveBgColor : selectedTheme.keyBgColor,
							{ 'justify-end': key.valign === 'bottom' }
						)}
						style="flex-grow: {key.size || 1}; text-align: {key.align || 'center'};"
						onmousedown={() => handleMouseDown(key.code)}
						onmouseup={() => handleMouseUp(key.code)}
						onmouseleave={() => handleMouseUp(key.code)}
					>
						{#if key.icon}
							{@const Icon = key.icon}
							<div class="flex flex-col items-center leading-none">
								<Icon class="size-[8px] sm:size-[12px]" stroke-width="0.75" />
								{#if key.label}
									<div
										class="mt-[6px] text-[4px] font-medium tracking-wider sm:mt-[10px] sm:text-[8px]"
									>
										{key.label}
									</div>
								{/if}
							</div>
						{:else if key.shiftLabel}
							<div class="px-1 text-[8px] sm:text-xs">{key.shiftLabel}</div>
							<div class="px-1 text-[10px] sm:text-base">{key.label}</div>
						{:else}
							<div class="px-1">
								{#if key.symbol && !key.label}
									<span class="text-[14px] font-light sm:text-xl">{key.symbol}</span>
								{:else if key.symbol && key.label}
									<div class="leading-none">
										<div class="text-[14px] font-light sm:text-lg">{key.symbol}</div>
										<div class="mt-0.5 text-[6px] font-medium tracking-wider sm:text-[10px]">
											{key.label}
										</div>
									</div>
								{:else}
									<span
										class={cn('text-[10px] leading-none sm:text-sm', {
											'text-[8px] sm:text-[10px]': key.code === 'Escape'
										})}>{key.label}</span
									>
								{/if}
							</div>
						{/if}
					</button>
				{/each}
			</div>
		{/each}
	</div>
</div>
