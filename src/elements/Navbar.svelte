<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let theme = 'light';

	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Expertise', href: '/expertise' },
		{ label: 'Previous Work', href: '/previous-work' },
		{ label: 'Connect', href: '/connect' }
	];

	const icons = {
		moon: {
			source: '/images/moon-svgrepo-com.svg',
			altText: 'Moon representing a dark theme'
		},
		sun: {
			source: '/images/sun-svgrepo-com.svg',
			altText: 'Sun representing a light theme'
		}
	};

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');

		theme = storedTheme || getUserOSColorScheme();
		applyTheme();
	});


	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		applyTheme();
	}

	function applyTheme() {
		document.documentElement.setAttribute('data-theme', theme);
	}

	function getUserOSColorScheme() {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	}

	$: isActiveLink = (href: string) => $page.route.id === href;
</script>

<nav>
	<a class="logo" href="/">Drew Develops</a>
	<div class="flex-right">
		<ul>
			{#each navLinks as navLink}
				<li>
					<a
						href={navLink.href}
						class="hvr-underline-from-center"
						class:active={isActiveLink(navLink.href)}
						>{navLink.label}
					</a>
				</li>
			{/each}
		</ul>
		<button class="theme-selector" on:click={toggleTheme}>
			<img src={theme === 'dark' ? icons.moon.source : icons.sun.source} alt={icons.moon.altText} />
		</button>
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		margin: 0 4rem;
		margin-top: 1.5rem;
		align-items: center;

		a {
			color: black;
			text-decoration: none;

			&:active {
				color: black;
			}
		}

		.logo {
			font-weight: bold;
			font-size: 1.2rem;
		}

		.theme-selector {
			cursor: pointer;
			background-color: transparent;
			border-color: transparent;
			margin-left: 0.5rem;
			border-radius: 50%;
            margin-top: 0.2rem;
			height: 40px;
			width: 40px;

			img {
				height: 22px;
			}
		}

		ul {
			display: flex;
			align-items: center;

			li {
				list-style: none;
				margin-right: 0.5em;

				a {
					padding: 5px;
					font-weight: 400;
					font-size: 0.9rem;
					color: #774d4d;

					&.active {
						font-weight: 600;
					}

					&::before {
						background-color: rgb(85, 85, 85) !important;
						height: 2px !important;
						border-radius: 5px;
					}

					&:hover {
						color: black;
					}
				}
			}
		}

		.flex-right {
			display: flex;
			justify-items: center;
			align-items: center;
		}
	}
</style>
