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
      company: "Constellation Software Inc - Perseus Group",
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
      title: "Software Developer Internship",
      company: "Bixtech LLC",
      type: "Remote",
      startDate: "Jan 2024",
      endDate: "June 2024",
      location: "Plano, Texas",
      skills: [
        "Java",
        "Spigot API",
        "SQL",
        "MangoDB",
        "HikariCP",
      ],
      description: "Developed a Minecraft plugin using Java and the Spigot API. Worked with clients to work on contacting projects to gather requirements and implement features."
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
      description: "Worked full-time as a developer to design and implement a key feature for the Optimal Blue product, contributing to core functionality enhancements and improving user experience through thoughtful engineering and collaboration with cross-functional teams. "
    },
    {
      title: "Software Developer Internship",
      company: "Black Knight Financial Services",
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
    {
      title: "Software Developer and Project Manager",
      company: "Kellerman Foundation",
      type: "On Site",
      startDate: "Aug 2023",
      endDate: "Jan 2024",
      location: "Richardson, Texas",
      skills: [
        "MySQL",
        "JavaScript",
        "Node.js",
        "Apache",
        "HTML",
        "CSS"
      ],
      description: "I collaborated closely with a project partner to ensure that software objectives were aligned with business needs, which led to a 25% improvement in team productivity. I streamlined data management processes and implemented functionality for adding and deleting grants, enhancing the system’s overall operational efficiency. Additionally, I improved the user experience by refining the GUI and expanding compatibility across multiple browsers, resulting in a more accessible and intuitive interface."
    },
        {
      title: "Software Developer and Project Manager",
      company: "EPICS@UTD",
      type: "On Site",
      startDate: "Aug 2023",
      endDate: "Jan 2024",
      location: "Richardson, Texas",
      skills: [
        "MySQL",
        "JavaScript",
        "Node.js",
        "Apache",
        "HTML",
        "CSS"
      ],
      description: "Worked with a NonProfit and delivered a working application while leading a development team. Implemented SCRUM methodology to ensure that the project was delivered on time and within budget. I also worked with the client to gather requirements and implement features that met their needs."
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
