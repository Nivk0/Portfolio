<script lang="ts">

	const MAJOR: {
		name: string;
		description: string;
		link: string;
	}[] = [
		{
			name: 'Quizer-NLP AI',
			description: 'AI-Powered and Rag-based Personalized Study Quiz Generator',
			link: 'https://github.com/spevenexe/S25-NLP-project',
		},
				{
			name: 'Climate Prediction AI',
			description: 'Interactive Climate Forecasts to Visualize and Understand Weather Trends',
			link: 'https://github.com/Angel-CSC/climateProject/tree/main',
		},
		{
			name: 'Image-Transfer',
			description: 'CycleGan and Semi-Supervised learning based image translation model ',
			link: 'https://github.com/ACM-Research/Image-Transfer',
		},
		{
			name: 'MoodAway',
			description: 'Full Stack Mobile Journaling platform with personalized article recommendations',
			link: 'https://github.com/acm-projects/MoodAway'
		},
		{
			name: 'ReviewZ',
			description: 'Full Stack Sentimental Amazon review analyzer based on geographic locations',
			link: 'https://github.com/Nivk0/ReviewZ'
		},
		{
			name: 'AirAssist',
			description: 'Full Stack application to aid with navigating the airport',
			link: 'https://github.com/Nivk0/AirAssist'
		},
	];
</script>

<div id="projects" class="grid mt-4 gap-4 sm:grid-cols-2">
	{#each MAJOR as project}
		<div
			class="col-span-1 overflow-hidden transition-all card bg-base-100 shadow-xl border border-base-300"
		>
			{#if project.img}
				<Img src={project.img} alt={project.name} />
			{/if}

			<div class="card-body px-4">
				<h1 class="card-title">{project.name}</h1>

				<p class="opacity-60">{project.description}</p>
			</div>

			<div class="card-actions px-4 mb-6">
				{#if project.link}
					<a href={project.link} use:ripple class="btn w-full btn-primary mr-auto" target="_blank">
						Visit
					</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
