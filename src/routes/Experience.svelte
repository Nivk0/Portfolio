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
    title: "Software Engineering AI Fellow (Contractor)",
    company: "Handshake AI",
    type: "Remote",
    startDate: "Sept 2025",
    endDate: "Jan 2026",
    location: "San Francisco, California",
    skills: [" Python, Java, Pandas, NumPy TensorFlow, PyTorch, Scikit-learn"],
    description: "As a Software Engineering AI Fellow at Handshake AI from September 2025 to February 2026, I worked part-time in San Francisco, CA. I developed Python-based pipelines using tools like Pandas, NumPy, TensorFlow, PyTorch, and Scikit-learn to validate and improve machine learning models. These models aimed to speed up software engineering workflows by 20%. I also analyzed LLM-generated outputs to find software-related errors. I made data-driven improvements that boosted response reliability by 25%, contributing to stronger and more efficient AI-assisted development processes."
  },
	{
      title: "Software Engineer Intern",
      company: "Paycom",
      type: "On Site",
      startDate: "May 2025",
      endDate: "August 2025",
      location: "Irving, Texas",
      skills: ["ReactJS", "C#", "Docker", "Git"],
      description: "I refactored a previously synchronous freeze workflow into an asynchronous, message-driven system using RabbitMQ, significantly improving responsiveness and scalability. To support modular deployment, I containerized the API controller and all associated freeze workers using Docker. I also implemented background processing with built-in status tracking, enabling real-time client updates for long-running operations and enhancing the overall user experience."
    },
    {
      title: "Software Engineer Intern",
      company: "Optimal Blue",
      type: "Hybrid",
      startDate: "Sept 2023",
      endDate: "May 2025",
      location: "Plano, Texas",
      skills: [
        "AngularJS",
        "TypeScript",
        ".Net",
        "Microsoft Azure",
        "C#",
        "SQL"
      ],
      description: "I used C# and TypeScript to develop a user-focused UI that streamlined Excel file uploads and enabled the generation of error-embedded Excel downloads for improved user clarity. I optimized solution functionality by enhancing APIs and endpoints, ensuring smoother system operations. On the backend, I wrote and refined complex SQL scripts and applied advanced database management techniques to boost performance and maintain data integrity. Additionally, I employed advanced front-end development strategies to elevate the overall user experience and improve the design quality of the application."
    },
    {
      title: "Software Developer Intern",
      company: "Black Knight, inc.",
      type: "Hybrid",
      startDate: "Aug 2022",
      endDate: "May 2023",
      location: "Jacksonville, Florida",
      skills: [
        "AngularJS",
        "TypeScript",
        ".Net",
        "Microsoft Azure",
        "C#",
        "SQL"
      ],
      description: "During my internship, I architected secure API endpoints using C# to prevent unauthorized access, particularly from former employees. I also built a user-friendly UI with C# and TypeScript to streamline Excel uploads and enable the generation of error-embedded downloadable files. Leveraging my SQL expertise, I optimized complex database operations, significantly enhancing the system’s efficiency and performance. Additionally, I contributed to the reliability of the codebase by creating and fixing unit and regression tests, which improved overall code coverage by over 20%."
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
