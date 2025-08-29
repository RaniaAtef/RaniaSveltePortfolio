import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s for missing files during build
				if (message.includes('404')) {
					return;
				}
				// Throw other errors
				throw new Error(message);
			}
		}
	}
};

export default config;
