<script lang="ts">
	import type { Experience } from '$lib/cms/experience.types.js';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';

	export let data;
  console.log(`🚀 ~ data:`, data)

	const [academic, work] = data?.experiences?.reduce(
		(a, c) => [
			[...a[0], ...(c.category === 'Academic' ? [c] : [])],
			[...a[1], ...(c.category === 'Professional' ? [c] : [])]
		],
		[[], []] as [Experience[], Experience[]]
	) ?? [[], []];
</script>

<div class="container px-4 mx-auto">
	<main />
	<section id="about" />
	<section id="experiences">
		<h2 class="text-2xl font-bold mb-2">Work</h2>
		<ul class="flex flex-col gap-2">
			{#each work as experience}
				<ExperienceCard {experience} />
			{/each}
		</ul>
	</section>
	<section id="academic">
		<h2 class="text-2xl font-bold my-2">Academic</h2>
		<ul class="flex flex-col gap-2">
			{#each academic as experience}
				<ExperienceCard {experience} />
			{/each}
		</ul>
	</section>
	<section id="projects" />
	<section id="contact" />
</div>
