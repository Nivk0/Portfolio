<script lang="ts">
	import { run } from 'svelte/legacy';

	import { navigating } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { ripple } from 'svelte-ripple-action';

	const socialArr = [
		{
			name: 'GitHub',
			icon: 'uiw:github',
			link: 'https://github.com/Nivk0'
		},
		{
			name: 'X',
			icon: 'akar-icons:twitter-fill',
		},
		{
			name: 'DEV',
			icon: 'material-symbols:logo-dev',
		},
		{
			name: 'LinkedIn',
			icon: 'akar-icons:linkedin-fill',
			link: 'https://www.linkedin.com/in/nivedh-koya/'
		},
		{
			name: 'Instagram',
			icon: 'akar-icons:instagram-fill',
			link: 'https://www.instagram.com/nivedh_k1/#'
		},
		{
			name: 'Discord',
			icon: 'akar-icons:discord-fill',
		}
	];

	const icons = ['💖', '🤕', '🤬', '🩸', '🥵'];

	let icon = $state(0);

	run(() => {
		if ($navigating) {
			icon = ~~(Math.random() * icons.length);
		}
	});
</script>

<div class="mt-10 font-medium flex md:flex-row flex-col items-center justify-center">


	<div class="my-4">
		{#each socialArr as social}
			<a
				href={social.link}
				target="_blank"
				class="btn btn-xs mx-1 bg-transparent border-none btn-circle text-white transition-all -outline-offset-4 hover:outline-offset-1"
				title={social.name}
				use:ripple
			>
				<Icon icon={social.icon} class="inline text-lg" />
			</a>
		{/each}
	</div>
</div>
