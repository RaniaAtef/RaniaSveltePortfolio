<script lang="ts">
	// Define types for better type safety
	interface ProjectMetrics {
		performance: number;
		accessibility: number;
		seo: number;
	}

	interface Project {
		title: string;
		description: string;
		metrics: ProjectMetrics;
		techDetails: string[];
		image: string;
		liveUrl: string;
		githubUrl: string;
		techStack: string[];
	}

	interface ProjectCategory {
		id: string;
		name: string;
		icon: string;
		projects: Project[];
	}

	// Project categories with multiple projects each
	const projectCategories: ProjectCategory[] = [
		{
			id: 'ai-ml',
			name: 'AI & Automation',
			icon: '🤖',
			projects: [
				
				{
					title: 'Smart nutrition coach',
					description: 'Web app where you can chat with a nutrition coach powered by the OpenAI Chat API',
					metrics: {
						performance: 92,
						accessibility: 100,

						seo: 100,
					},
					techDetails: ['Next.js (React) for frontend & routing', 'OpenAI Chat API for generating responses', 'useState + useEffect for managing state & persisting messages in localStorage'],
					image: '/chatbot.png',
					liveUrl: 'https://chatbot-sepia-rho.vercel.app/',
					githubUrl: 'https://github.com/RaniaAtef/chatbot',
					techStack: ['Next.js', 'OpenAi', 'React']
				}
			]
		},
		{
			id: 'web-apps',
			name: 'Web Applications',
			icon: '🌐',
			projects: [
				{
					title: 'Tracking System',
					description: ' This React app is a shipment tracking service . It calls Shipment Tracking API to retrieve shipment details and displays them in a responsive UI. The app supports both English and Arabic languages.',
					metrics: {
						performance: 98,
						accessibility: 100,
						seo: 100,
					},
					techDetails: ["Shipment tracking using the Bosta API",
"Responsive UI design for a seamless experience on various devices",
"Language support for both English and Arabic",
"Utilizes React, Context for state management, and JavaScript"],
					image: '/tracking.png',
					liveUrl: 'https://tracking-system-naxnnwpdk-raniaatef.vercel.app/?item=1234567',
					githubUrl: 'https://github.com/RaniaAtef/TrackingSystem/tree/main',
					techStack: ['React', 'JavaScript', 'Tailwind CSS',"i18n"]
				},
				{
					title: 'Travel Agency',
					description:  'This is a travel agency website built with HTML and CSS skills, serving as a private space for experimentation and learning.',
					metrics: {
						performance: 95,
						accessibility: 98,
						seo: 100,
					},
					techDetails: ['Html', 'Css',"Flexbox"],
					image: '/travel.png',
					liveUrl: 'https://raniaatef.github.io/HtmlandCssPracticeTemplate/',
					githubUrl: 'https://github.com/RaniaAtef/HtmlandCssPracticeTemplate',
					techStack: ['Html', 'Css']
				},
				{
					title: 'Portfolio',
					description: 'This one-page website, built with Bootstrap, showcases a clean and responsive design. It\s perfect for presenting personal portfolios, product promotions, or project showcases. With its simplicity and adaptability, this project serves as an excellent example of Bootstrap\s capabilities.',
					metrics: {
						performance: 92,
						accessibility: 95,
						seo: 90,
					},
					techDetails: ['Html', 'Css', 'Javascript', 'Bootstrap'],
					image: '/portfolio.png',
					liveUrl: 'https://raniaatef.github.io/Bootstrap-Template/',
					githubUrl: 'https://github.com/RaniaAtef/Bootstrap-Template',
					techStack: ['Html', 'Css', 'Javascript', 'Bootstrap']
				}
			]
		},
		{
			id: 'animations',
			name: 'Animations',
			icon: '🎬',
			projects: [
				{
					title: 'Animation Task',
					description: ' Animation task using HTML and CSS. The animations range from simple transitions to more complex keyframe animations, showcasing different techniques to enhance user interface (UI) elements.',
					metrics: {
						performance: 100,
						accessibility: 100,
						seo: 91,
					},
					techDetails: ['Html', 'Css'],
					image: '/animation.png',
					liveUrl: 'https://raniaatef.github.io/Animation-Task/',
					githubUrl: 'https://github.com/RaniaAtef/Animation-Task',
					techStack: ['Html', 'Css', 'Css animation']
				},
				{
					title: 'Social Media Platform',
					description: 'Instagram-like social platform with photo sharing, stories, and real-time messaging capabilities.',
					metrics: {
						performance: 89,
						accessibility: 92,
						seo: 88,
					},
					techDetails: ['Image optimization', 'Real-time messaging', 'Push notifications', 'Social features', 'Content moderation'],
					image: '/code.jpg',
					liveUrl: '#',
					githubUrl: '#',
					techStack: ['Flutter', 'Firebase', 'Cloud Storage', 'ML Kit']
				}
			]
		},
		
		// {
		// 	id: 'ecommerce',
		// 	name: 'Ecommerce',
		// 	icon: '⛓️',
		// 	projects: [
		// 		{
		// 			title: 'MyReFurB Dashboard',
		// 			description: 'Decentralized finance dashboard for tracking crypto portfolios, yield farming, and DeFi protocols.',
		// 			metrics: {
		// 				performance: 87,
		// 				accessibility: 89,
		// 				seo: 85,
		// 			},
		// 			techDetails: ['Web3 integration', 'Real-time price feeds', 'Wallet connection', 'Smart contract interaction', 'Portfolio tracking'],
		// 			image: '/code.jpg',
		// 			liveUrl: '#',
		// 			githubUrl: '#',
		// 			techStack: ['React', 'Web3.js', 'Ethers.js', 'Solidity']
		// 		},
		// 		{
		// 			title: 'NFT Marketplace',
		// 			description: 'Complete NFT marketplace with minting, trading, and auction functionality built on Ethereum.',
		// 			metrics: {
		// 				performance: 85,
		// 				accessibility: 88,
		// 				seo: 90,
		// 			},
		// 			techDetails: ['Smart contracts', 'IPFS integration', 'Auction system', 'Royalty distribution', 'Gas optimization'],
		// 			image: '/code.jpg',
		// 			liveUrl: '#',
		// 			githubUrl: '#',
		// 			techStack: ['Next.js', 'Solidity', 'IPFS', 'MetaMask']
		// 		}
		// 	]
		// }
	];

	// Reactive state for active tab
	let activeTab: string = projectCategories[0].id;

	// Function to handle tab switching
	function switchTab(tabId: string): void {
		activeTab = tabId;
	}

	// Get current active category
	$: activeCategory = projectCategories.find(cat => cat.id === activeTab);
</script>

<section id="work" class="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
		
		<!-- Tab Navigation -->
		<div class="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
			{#each projectCategories as category}
				<button
					class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 {activeTab === category.id 
						? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
						: 'bg-[#21262D] text-gray-300 hover:bg-[#2D333B] hover:text-white border border-[#2D333B]'}"
					on:click={() => switchTab(category.id)}
					aria-label="Switch to {category.name} projects"
				>
					<span class="text-lg">{category.icon}</span>
					<span class="hidden sm:inline">{category.name}</span>
				</button>
			{/each}
		</div>

		<!-- Projects Grid -->
		{#if activeCategory}
			<div class="space-y-8 sm:space-y-12">
				{#each activeCategory.projects as project}
					<div class="bg-[#21262D] rounded-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
						<div class="grid grid-cols-1 lg:grid-cols-2">
							<div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
								<!-- Project Header -->
								<div class="space-y-3">
									<h3 class="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p class="text-sm sm:text-base text-gray-400">{project.description}</p>
									
									<!-- Tech Stack Pills -->
									<div class="flex flex-wrap gap-2">
										{#each project.techStack as tech}
											<span class="px-2 py-1 text-xs font-medium bg-[#1A1F2B] text-blue-400 rounded-full border border-[#2D333B]">
												{tech}
											</span>
										{/each}
									</div>
								</div>

								<!-- Performance Metrics -->
								<div class="space-y-3">
									<h4 class="text-base sm:text-lg font-semibold">Performance Metrics</h4>
									<div class="grid grid-cols-3 gap-2 sm:gap-4">
										{#each Object.entries(project.metrics) as [key, value]}
											<div class="text-center">
												<div class="text-2xl font-bold text-blue-400">{value}</div>
												<div class="text-sm text-gray-400 capitalize">{key}</div>
											</div>
										{/each}
									</div>
								</div>

								<!-- Technical Implementation -->
								<div>
									<h4 class="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
									<ul class="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
										{#each project.techDetails as detail}
											<li class="flex items-center gap-2">
												<span class="text-green-400">▹</span>
												<span class="text-gray-300">{detail}</span>
											</li>
										{/each}
									</ul>
								</div>

								<!-- Project Links -->
								<div class="flex gap-3 pt-2">
									<a 
										href={project.liveUrl} 
										class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
										Live Demo
									</a>
									<a 
										href={project.githubUrl} 
										class="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1F2B] hover:bg-[#2D333B] text-gray-300 border border-[#2D333B] rounded-lg font-medium transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
										View Code
									</a>
								</div>
							</div>

							<div class="relative h-full min-h-[300px] lg:min-h-full">
								<img src={project.image} alt={project.title} class="absolute inset-0 w-full h-full object-cover" />
								<div class="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Category Summary -->
			<div class="text-center mt-8 sm:mt-12">
				<p class="text-gray-400 text-sm sm:text-base">
					Showing {activeCategory.projects.length} {activeCategory.name.toLowerCase()} projects
				</p>
			</div>
		{/if}
	</div>
</section>
