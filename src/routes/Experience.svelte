<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Experience {
		title: string;
		company: string;
		type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
		startDate: string; // YYYY-MM
		endDate: string | null; // YYYY-MM or null for present
		location: string;
		description?: string;
		skills: string[];
	}

	const experiences: Experience[] = [
		{
			title: 'Software Engineer Intern',
			company: 'Paycom',
			type: 'On Site',
			startDate: 'May 2025',
			endDate: 'August 2025',
			location: 'Irving, Texas',
			skills: ['ReactJS', 'C#', 'Docker', 'Git']
		},
		{
			title: 'Software Engineer Intern',
			company: 'Constellation Software Inc - Perseus Group',
			type: 'Hybrid',
			startDate: 'Sept 2023',
			endDate: 'May 2025',
			location: 'Plano, Texas',
			skills: ['AngularJS', 'TypeScript', '.Net', 'Microsoft Azure', 'C#', 'SQL']
		},
		{
			title: 'Software Developer and Project Manager',
			company: 'Kellerman Foundation',
			type: 'On Site',
			startDate: 'Aug 2023',
			endDate: 'Jan 2024',
			location: 'Richardson, Texas',
			skills: ['MySQL', 'JavaScript', 'Node.js', 'Apache', 'HTML', 'CSS']
		},
		{
			title: 'Software Developer Internship',
			company: 'Black Knight Financial Services',
			type: 'Hybrid',
			startDate: 'Aug 2022',
			endDate: 'May 2023',
			location: 'Jacksonville, Florida',
			skills: ['AngularJS', 'TypeScript', '.Net', 'Microsoft Azure', 'C#', 'SQL']
		},
	];
</script>

{#each experiences as experience}
	<div
		class="flex flex-col md:flex-row items-start md:items-center border rounded-xl p-6 border-base-300/60 bg-base-200 backdrop-blur-md mb-6 shadow-lg"
	>
		<div class="flex-1">
			<h3 class="text-lg font-bold mb-1">
				{experience.title}
			</h3>
			<p class="text-sm text-base-content/70 mb-2">
				{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}
			</p>
			<p class="text-sm text-base-content/70 mb-2">
				{experience.company}
			</p>
			<p class="text-sm text-base-content/70 mb-2">{experience.location}</p>
			{#if experience.description}
				<p class="text-sm text-base-content/80 mb-2">{experience.description}</p>
			{/if}
			<p class="text-sm text-base-content/80">
				<strong>Skills:</strong>
				{experience.skills.join(', ')}
			</p>
		</div>
	</div>
{/each}
