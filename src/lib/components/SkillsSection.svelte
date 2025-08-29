<script>
	const skillCategories = [
		{
			category: 'Frontend Development',
			skills: [
				{ name: 'Javascript', level: 95 },
				{ name: 'React & Next.js', level: 95 },
				{ name: 'Svelte', level: 50},
				{ name: 'TypeScript', level: 90 },
				{ name: 'Modern CSS', level: 95 },
				{ name: 'Web Animation', level: 85 },
			],
			icon: '🎨',
			color: 'from-blue-500 to-blue-700',
		},
		// {
		// 	category: 'Backend & APIs',
		// 	skills: [
		// 		{ name: 'MongoDB', level: 90 },
		// 		{ name: 'RESTful APIs', level: 95 },
		// 		{ name: 'GraphQL', level: 50 },
		// 		{ name: 'Database Design & schema modeling', level: 88 },
		// 	],
		// 	icon: '⚡',
		// 	color: 'from-green-500 to-green-700',
		// },
		{
			category: 'Performance & DevOps',
			skills: [
				{ name: 'Web Performance', level: 95 },
				{ name: 'Seo', level: 92 },
				{ name: 'CI/CD', level: 90 },
				{ name: 'Docker', level: 70 },
				{ name: 'Monitoring & Logging', level: 80 },
			],
			icon: '🚀',
			color: 'from-purple-500 to-purple-700',
		},
		{
			category: 'Learning & Modern Tools',
			skills: [
				{ name: 'Cursor AI', level: 95 },
				{ name: 'n8n Automation', level: 90 },
				{ name: 'AI Model Integration', level: 88 },
				{ name: 'Rapid Learning', level: 95 },
			],
			icon: '🧠',
			color: 'from-orange-500 to-orange-700',
		},
	];
</script>

<section class="py-12 sm:py-20 px-4 bg-[#161B22]">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
			{#each skillCategories as category}
				<div class="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
					<div class="flex items-center gap-3 mb-6">
						<span class="text-3xl">{category.icon}</span>
						<h3 class="text-xl font-bold">{category.category}</h3>
					</div>
					<div class="space-y-4">
						{#each category.skills as skill}
							<div>
								<div class="flex justify-between text-sm mb-1">
									<span>{skill.name}</span>
									<span class="text-gray-400">{skill.level}%</span>
								</div>
								<div class="h-2 bg-[#30363D] rounded-full overflow-hidden">
									<div class="h-full bg-gradient-to-r {category.color} animate-expand origin-left" style="width: {skill.level}%"></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
