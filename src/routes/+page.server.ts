import { getAllExperiencesQuery } from '$lib/cms/experience.types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const i18n = url.searchParams.get('lang') || 'en';
	const experiences_req = await fetch(import.meta.env.VITE_API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'gcms-locales': i18n
		},
		body: JSON.stringify({ query: getAllExperiencesQuery }),
		mode: 'no-cors'
	});

	if (experiences_req.status === 200) {
		const {
			data: { experiences }
		} = await experiences_req.json();
		return { experiences };
	}

	return {};
};
