<script lang="ts">
	import type { Experience } from '$lib/cms/experience.types.js';
	import dayjs from 'dayjs';

	export let experience: Experience;
</script>

<a
	href={`/experience/${experience.slug}`}
	class="group transition-transform ease-in hover:scale-[1.03]"
>
	<li
		class="flex gap-2 rounded-xl bg-gray-50 p-3 outline-dashed outline-2 -outline-offset-4 transition-colors duration-200 ease-in group-odd:bg-teal-100 group-odd:outline-teal-500 group-even:bg-indigo-200 group-even:outline-indigo-500 group-hover:outline-white group-odd:group-hover:bg-teal-500 group-even:group-hover:bg-indigo-600"
	>
		{#if experience.icon?.url}
			<img
				src={experience.icon.url}
				class="h-auto w-10 object-contain group-hover:animate-cradle"
				alt="icon"
			/>
		{/if}
		<div class="w-full flex-1">
			<p class="flex flex-wrap items-center justify-between gap-2">
				<span
					class="text-lg font-bold leading-none tracking-tight text-slate-900 group-hover:text-slate-50"
				>
					{experience.title}
				</span>
				<span class="font-serif text-sm leading-none text-slate-600 group-hover:text-slate-100">
					{dayjs(experience.startDate).format('MMMM YYYY')}
					{#if experience.endDate}
						- {dayjs(experience.endDate).format('MMMM YYYY')}
					{:else}
						- Present
					{/if}
				</span>
			</p>
			<span class="font-serif text-sm text-slate-600 group-hover:text-slate-100">
				{experience.organization}
			</span>
		</div>
	</li>
</a>

<style>
	a:nth-of-type(3n + 1) {
		rotate: -0.2deg;
	}
	a:nth-of-type(3n + 2) {
		rotate: 0.2deg;
	}
</style>
