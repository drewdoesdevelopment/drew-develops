<script lang="ts">
	import { page } from '$app/stores';

    // TODO: Replace with the OS preference color scheme and set theme cookie 
	let userTheme = 'dark';

	function onThemeButtonClick() {
		userTheme === 'dark' ? (userTheme = 'light') : (userTheme = 'dark');
	}

	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Expertise', href: '/expertise' },
		{ label: 'Previous Work', href: '/previous-work' },
		{ label: 'Connect', href: '/connect' }
	];

	const icons = {
		moon: {
			source: '/images/moon-regular.svg',
			altText: 'Moon representing a dark theme'
		},
		sun: {
			source: '/images/sun-solid.svg',
			altText: 'Sun representing a light theme'
		}
	};

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
		<button class="theme-selector" on:click={onThemeButtonClick}>
			<img
				src={userTheme === 'dark' ? icons.moon.source : icons.sun.source}
				alt={icons.moon.altText}
			/>
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
			height: 28px;
            width: 40px;

			img {
				height: 18px;
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
