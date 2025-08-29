import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'
		}),
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
