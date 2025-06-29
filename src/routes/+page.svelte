<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import TypingComponent from './TypingComponent.svelte';
	import { ripple } from 'svelte-ripple-action';
	import { getSpotifyData, type UserData } from './spotify';
	import Work from './Work.svelte';
	import SvelteSeo from 'svelte-seo';

	let spotifyData: UserData['data'] | null = $state(null);
	let refreshInterval: NodeJS.Timeout;

	onDestroy(() => {
		clearInterval(refreshInterval);
	});

	onMount(async () => {
		spotifyData = (await getSpotifyData()).data;

		refreshInterval = setInterval(async () => {
			spotifyData = (await getSpotifyData()).data;
		}, 10000); //10 seconds - less than 1kb of data per request so it's fine ig
	});
</script>

<SvelteSeo title="Nivedh Koya" />

<div class="md:flex mt-2 md:mt-20 relative z-10">
	<div class="flex-1 flex flex-col justify-center md:items-start items-center">
		<h2 class="text-3xl opacity-60 font-light">Hi, I'm</h2>

		<h1 class="text-6xl my-4 font-medium text-white md:ml-0 ml-4 md:max-w-none max-w-[260px] md:text-left text-center">
			<TypingComponent text="Nivedh Koya" />
		</h1>

		<h2 class="text-2xl opacity-40">Software Developer | AI Researcher</h2>

		<p>
			<a href="/resume.pdf" target="_blank" class="btn btn-primary mt-4" use:ripple>Resume</a>
			<a href = "https://github.com/Nivk0" target = "_blank" class = "btn btn-primary mt-4" use:ripple>Github</a>
			<a href = "https://www.linkedin.com/in/nivedh-koya/" target = "_blank" class = "btn btn-primary mt-4" use:ripple>LinkedIn</a>
		</p>
	</div>

	<div class="col-span-1 mt-10 md:mt-auto flex justify-center md:justify-end">
		<img
			src="/pic.jpg"
			alt="Profile"
			style="animation-duration: 20s;"
			class="rounded-full w-50 h-60"
		/>
	</div>
</div>

<h2 class="mt-32 mb-8 text-2xl font-semibold">About me</h2>

<div class="grid gap-4 md:grid-cols-3 grid-cols-1 mb-4">
	<div class="col-span-1 flex flex-col gap-4">
		<div
			class="bg-base-200 flex-1 rounded-xl p-6 relative transition-all group-hover:translate-y-2 group-hover:scale-95"
		>
			<span class="text-base-content/40 text-2xl mb-4 block font-medium">Spotify</span>

			{#if spotifyData?.listening_to_spotify}
				<p class="text-lg font-bold">
					Listening to
					<a href="https://open.spotify.com/track/{spotifyData?.spotify?.track_id}"
						>{spotifyData?.spotify?.song}</a
					>
					by
					{spotifyData?.spotify?.artist}
				</p>
				<img
					src={spotifyData?.spotify?.album_art_url}
					alt="Album art"
					class="rounded-lg size-12 inline-block absolute right-4 top-4"
				/>
			{:else}
				<p class="text-lg font-bold">Not listening to anything right now</p>
			{/if}
		</div>

		<div class="bg-base-200 rounded-xl p-6 flex-1">
			<h2 class="text-base-content/40 text-2xl mb-2 font-medium">From</h2>

			<p class="text-3xl font-bold">Dallas, Texas</p>
		</div>
	</div>

	<div
		class="md:col-span-2 col-span-1 leading-8 bg-base-300 px-5 py-4 rounded-xl text-sm relative z-10"
	>
		<p>
I'm a fast-track Computer Science student at the University of Texas at Dallas, currently pursuing my Master’s degree in Computer Science with a focus on the Intelligent Systems track, and I expect to graduate in May 2026. I completed my Bachelor's degree in Computer Science in May 2025. I have over three years of full-stack development experience, with a strong foundation in both front-end and back-end technologies, and have contributed to several end-to-end software projects. My interests lie at the intersection of Artificial Intelligence and healthcare, particularly in using AI to support early detection of diseases like Parkinson’s, which are difficult to diagnose through traditional methods. I’m also passionate about AI-driven image translation and climate prediction, where machine learning is used to solve real-world problems through advanced data analysis and modeling. I’m always eager to explore how intelligent systems can make a meaningful impact across different fields.
		</p>

	</div>
</div>

<h2 class="mt-16 mb-8 text-2xl font-semibold">Projects</h2>

<Work />

<h2 class="mt-16 mb-8 text-2xl font-semibold">Contact Me</h2>

<div class=" bg-base-200 p-4 rounded-lg leading-8" id="contact">
	<p>
		Contact Me at <a href="nivedh.koya@gmail.com" class="link-hover">
			nivedh.koya@gmail.com </a
		> or you can reach out to me on the social media below.
	</p>
</div>
