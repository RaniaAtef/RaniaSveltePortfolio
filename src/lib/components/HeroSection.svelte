<script>
	const floatingIcons = [
		{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
		{ icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
		{ icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
		{ icon: '🔥', delay: '3s', position: 'bottom-20 right-1/4' },
	];

	const techStack = ['React',  'Next.js','Svelte','Vue.js', 
	'Tailwind CSS',  'TypeScript',
	//  'Node.js', 'GraphQL'
	];
	
	const socialLinks = [
		{ name: 'GitHub', icon: '🐙', href: '#' },
		{ name: 'LinkedIn', icon: '💼', href: '#' },
		{ name: 'Twitter', icon: '🐦', href: '#' },
		{ name: 'Blog', icon: '✍️', href: '#' },
	];
</script>

<div class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Animated Background Grid -->
	<div class="absolute inset-0 grid-background opacity-20">
		<div class="grid-overlay animate-pulse-slow"></div>
	</div>

	<!-- Floating Tech Icons -->
	<div class="absolute inset-0 overflow-hidden">
		{#each floatingIcons as item, index}
			<div class="absolute {item.position} animate-float opacity-50" style="animation-delay: {item.delay}">
				<span class="text-4xl">{item.icon}</span>
			</div>
		{/each}
	</div>

	<!-- Hero Content -->
	<div class="relative z-10 max-w-5xl mx-auto px-4">
		<div class="text-center space-y-6">
			<!-- Name Section -->
			<div class="relative inline-block px-4 sm:px-0">
				<div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
				<h1 class="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
Rania Atef				</h1>
			</div>

			<!-- Role & Description -->
			<div class="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
				<div class="flex flex-col items-center gap-4">
					<div class="flex items-center gap-3">
						<span class="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
						<h2 class="text-xl sm:text-2xl font-light tracking-wide text-blue-400">Frontend Developer</h2>
						<span class="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
					</div>
					<p class="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
						Crafting exceptional digital experiences with modern frontend technologies
					</p>
				</div>

				<!-- Tech Stack Pills -->
				<div class="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
					{#each techStack as tech}
						<span class="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors">
							{tech}
						</span>
					{/each}
				</div>
			</div>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0" role="group" aria-label="Main navigation actions">
				<a href="#work" class="group relative inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0D1117] rounded-full" aria-label="View my work and projects">
					<div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
					<span class="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
						View My Work
						<svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</span>
				</a>
				<a
					href="#contact"
					class="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0D1117]"
					aria-label="Get in touch and contact me"
				>
					Get in Touch
				</a>
			</div>

			<!-- Social Links -->
			<nav class="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12" aria-label="Social media links">
				{#each socialLinks as social}
					<a href={social.href} class="group relative p-2 sm:p-3 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0D1117] rounded-lg" aria-label="Visit my {social.name} profile">
						<span class="text-xl sm:text-2xl group-hover:scale-110 transition-transform inline-block" aria-hidden="true">{social.icon}</span>
					</a>
				{/each}
			</nav>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce" role="img" aria-label="Scroll down to explore more content">
		<span class="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
		<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</div>
