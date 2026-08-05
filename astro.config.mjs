// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://alex-boulanger.dev',
	i18n: {
		locales: ['en', 'fr'],
		defaultLocale: 'en',
		// English stays at the root; French is prefixed at /fr.
		routing: { prefixDefaultLocale: false },
	},
});
