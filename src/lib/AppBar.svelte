<script lang="ts">
	import { onMount } from 'svelte';
	import CradleAnimation from './CradleAnimation.svelte';

	const navlinks = [
		{ href: '/', label: 'Home' },
		{ href: '/#about', label: 'About Me' },
		{ href: '/#projects', label: 'Projects' },
		{ href: '/#contact', label: 'Contact' }
	];

	let isMenuOpen = false;
	let delayedMenuOpen = false;

	$: setTimeout(() => {
		delayedMenuOpen = isMenuOpen;
	}, 100);

	const openMenu = () => {
		isMenuOpen = true;
	};
	const closeMenu = () => {
		isMenuOpen = false;
	};

	let is_sticking = false;
	let scrollWatcher: HTMLDivElement;

	onMount(() => {
		const navObserver = new IntersectionObserver((entries) => {
			is_sticking = !entries[0].isIntersecting;
		});
		navObserver.observe(scrollWatcher);
	});
</script>

<div id="scroll-watcher" bind:this={scrollWatcher} />
<header
	class={`sticky inset-x-0 top-0 z-50 mx-auto transition-all duration-200 ${
		is_sticking ? 'bg-white shadow-xl' : ''
	}`}
>
	<nav class="container mx-auto flex items-center justify-between p-4" aria-label="Global">
		<div class="flex md:flex-1">
			<a href="/">
				<span class="sr-only">Felipe Afonso</span>
				<CradleAnimation>
					<img class="h-12 w-auto" src="/keyboard.svg" alt="" />
				</CradleAnimation>
			</a>
		</div>
		<div class="flex md:hidden">
			<button
				type="button"
				on:click={openMenu}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden md:flex md:gap-x-12">
			{#each navlinks as link}
				<a href={link.href} class="text-sm font-semibold leading-6 text-gray-900">{link.label}</a>
			{/each}
		</div>
	</nav>
	<div role="dialog" aria-modal="true">
		{#if isMenuOpen || delayedMenuOpen}
			<button
				on:click={closeMenu}
				class={`fixed inset-0 z-40 bg-black transition-all duration-300 ${
					isMenuOpen && delayedMenuOpen ? 'opacity-50' : 'opacity-0'
				}`}
			/>
		{/if}
		<div
			class={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 transition-transform duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
				isMenuOpen || delayedMenuOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<div class="flex items-center justify-between">
				<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={closeMenu}>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="space-y-2 py-6">
						{#each navlinks as link}
							<a
								href={link.href}
								on:click={closeMenu}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
