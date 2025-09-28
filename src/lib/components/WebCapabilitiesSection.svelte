<script lang="ts">
	const capabilities = [
		{
			title: 'Frontend Frameworks & Libraries',
			icon: '⚛️',
			features: ['React', "Next.js", "Svelte", "Ant Design", "Bootstrap", "Tailwind CSS","MUI"],
		},
		{
			title: 'State Management',
			icon: '🔄',
			features: ['React Context API', 'SWR', 'Redux Toolkit'],
		},
		{
			title: 'Backend & Database',
			icon: '⚡',
			features: ['Next.js API routes for building RESTful endpoints', 'MongoDB with Mongoose (schema & model design)'],
		},
		
		{
			title: 'Performance',
			icon: '🚀',
			features: ['Lazy loading', 'Bundle splitting', 'Code splitting', 'Server-Side Rendering (SSR)', 'Static Site Generation (SSG)', 'ISR'],
		},
		{
			title: 'AI & Automation',
			icon: '🧠',
			features: ['Integrated AI models into web applications using Next.js.',

'Built automation workflows with n8n to connect AI services, APIs, and databases.',

'Developed AI-powered features like streaming chat assistants and AI image generation features using model APIs.'],},
		{
			title: 'Other Practices',
			icon: '💡',
			features: ['Responsive Design', 'Accessibility (a11y)',' SEO optimization', 'Internationalization (i18n)'],
		},
	];

	// Function to handle mouse move for dynamic border effect
	function handleMouseMove(event: MouseEvent, cardElement: HTMLElement, borderElement: HTMLElement | null) {
		if (!borderElement) return;

		const cardRect = cardElement.getBoundingClientRect();
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		// Check if the mouse is outside the card with a 50px padding
		const isOutside =
			mouseX < cardRect.left - 50 ||
			mouseX > cardRect.right + 50 ||
			mouseY < cardRect.top - 50 ||
			mouseY > cardRect.bottom + 50;

		if (isOutside) {
			// Hide the border when it moves outside the card
			borderElement.style.opacity = '0';
			return;
		}

		// Calculate position relative to card edges
		const x = mouseX - cardRect.left;
		const y = mouseY - cardRect.top;
		
		// Determine which border the mouse is closest to
		const width = cardRect.width;
		const height = cardRect.height;
		
		// Calculate distance to each edge
		const distToLeft = x;
		const distToRight = width - x;
		const distToTop = y;
		const distToBottom = height - y;
		
		// Find the closest edge
		const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);
		
		// Update CSS custom properties for border positioning
		cardElement.style.setProperty('--mouse-x', `${x}px`);
		cardElement.style.setProperty('--mouse-y', `${y}px`);
		cardElement.style.setProperty('--closest-edge', minDist.toString());
		
		// Update the gradient border position based on mouse
		if (minDist === distToTop) {
			// Top edge
			cardElement.style.setProperty('--border-gradient', `linear-gradient(90deg, transparent 0%, #8B5CF6 20%, #8B5CF6 80%, transparent 100%)`);
			cardElement.style.setProperty('--border-position', `${x}px 0`);
		} else if (minDist === distToRight) {
			// Right edge
			cardElement.style.setProperty('--border-gradient', `linear-gradient(180deg, transparent 0%, #8B5CF6 20%, #8B5CF6 80%, transparent 100%)`);
			cardElement.style.setProperty('--border-position', `0 ${y}px`);
		} else if (minDist === distToBottom) {
			// Bottom edge
			cardElement.style.setProperty('--border-gradient', `linear-gradient(90deg, transparent 0%, #8B5CF6 20%, #8B5CF6 80%, transparent 100%)`);
			cardElement.style.setProperty('--border-position', `${x}px 100%`);
		} else {
			// Left edge
			cardElement.style.setProperty('--border-gradient', `linear-gradient(180deg, transparent 0%, #8B5CF6 20%, #8B5CF6 80%, transparent 100%)`);
			cardElement.style.setProperty('--border-position', `0 ${y}px`);
		}
		
		borderElement.style.opacity = '1';
	}

	// Function to handle mouse leave
	function handleMouseLeave(borderElement: HTMLElement | null) {
		if (borderElement) {
			borderElement.style.opacity = '0';
		}
	}
</script>

<section class="py-12 sm:py-20 px-4" aria-labelledby="capabilities-heading">
	<div class="max-w-6xl mx-auto">
		<h2 id="capabilities-heading" class="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Modern Web Capabilities</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" role="list" aria-label="Web development capabilities">
			{#each capabilities as category, index}
				<article 
					class="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all dynamic-border focus-within:bg-[#21262D] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-transparent"
					on:mousemove={(e) => handleMouseMove(e, e.currentTarget, e.currentTarget.querySelector('.border-highlight'))}
					on:mouseleave={(e) => handleMouseLeave(e.currentTarget.querySelector('.border-highlight'))}
					style="--mouse-x: 0px; --mouse-y: 0px; --closest-edge: 0;"
					role="listitem"
					tabindex="0"
				>
					<!-- Dynamic border highlight -->
					<div class="border-highlight" aria-hidden="true"></div>
					
					<div class="text-3xl mb-4" aria-hidden="true">{category.icon}</div>
					<h3 class="text-xl font-bold mb-3">{category.title}</h3>
					<ul class="space-y-2" role="list" aria-label="Features in {category.title}">
						{#each category.features as feature}
							<li class="text-gray-400 group-hover:text-gray-300 transition-colors" role="listitem">
								{feature}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.dynamic-border {
		position: relative;
		border: 2px solid transparent;
		border-radius: 8px;
		overflow: hidden;
		--border-gradient: linear-gradient(90deg, transparent 0%, #8B5CF6 20%, #8B5CF6 80%, transparent 100%);
		--border-position: 0px 0px;
	}

	.dynamic-border:hover {
		background: 
			linear-gradient(90deg, transparent 0%, #8B5CF6 20%, #8B5CF6 80%, transparent 100%) top,
			linear-gradient(180deg, transparent 0%, #8B5CF6 20%, #8B5CF6 80%, transparent 100%) right,
			transparent bottom,
			transparent left;
		background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
		background-repeat: no-repeat;
		background-position: var(--mouse-x) 0, 0 var(--mouse-y), 0 0, 0 0;
	}

	.border-highlight {
		position: absolute;
		top: -2px;
		left: -2px;
		right: -2px;
		bottom: -2px;
		border-radius: 10px;
		pointer-events: none;
		z-index: 1;
		opacity: 0;
		transition: opacity 0.3s ease;
		background: 
			radial-gradient(
				circle at var(--mouse-x) var(--mouse-y),
				currentColor 0px,
				transparent 20px
			);
	}

	/* Individual card border colors */
	.dynamic-border:nth-child(1) .border-highlight {
		color: #646cff; /* Blue */
	}

	.dynamic-border:nth-child(2) .border-highlight {
		color: #00bcd4; /* Cyan */
	}

	.dynamic-border:nth-child(3) .border-highlight {
		color: #ff4081; /* Pink */
	}

	.dynamic-border:nth-child(4) .border-highlight {
		color: #4caf50; /* Green */
	}

	.dynamic-border:nth-child(5) .border-highlight {
		color: #ffc107; /* Yellow */
	}

	.dynamic-border:nth-child(6) .border-highlight {
		color: #f44336; /* Red */
	}

	/* Enhanced hover effects */
	.dynamic-border:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
	}

	/* Smooth transitions */
	.dynamic-border {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
