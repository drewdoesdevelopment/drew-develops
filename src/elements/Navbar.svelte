<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let theme = 'dark';
    let mobileNavState = false;

	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Expertise', href: '/expertise' },
		{ label: 'Previous Work', href: '/previous-work' },
		{ label: 'Connect', href: '/connect' }
	];

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');

		theme = storedTheme || getUserOSColorScheme();
		applyTheme();
	});

    function toggleNavMenu() {
        mobileNavState = !mobileNavState;
    }

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

<nav id="nav">
    <div class="flex-left">
        <a class="logo" href="/">Drew Develops</a>
        <div class="buttons">
            <button class="nav-menu-button" on:click={toggleNavMenu}>
                {#if theme === 'dark'}
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_429_11066)">
                        <path
                            d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                            stroke="white"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_429_11066">
                            <rect width="24" height="24" fill="transparent" transform="translate(0 0.000915527)" />
                        </clipPath>
                    </defs>
                </svg>
                {:else}
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_429_11066)">
                        <path
                            d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                            stroke="#292929"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_429_11066">
                            <rect width="24" height="24" fill="transparent" transform="translate(0 0.000915527)" />
                        </clipPath>
                    </defs>
                </svg>
                {/if}
            </button>
            <button class="theme-selector mobile" on:click={toggleTheme}>
                {#if theme === 'dark'}
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="#FFFFFF"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                            stroke="none"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                {:else}
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                {/if}
            </button>
        </div>
    </div>

	<div class="flex-right">
		<ul id="nav-menu">
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

		<ul class="nav-menu-mobile" style='display: { mobileNavState ? 'flex' : 'none' }'>
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
			{#if theme === 'dark'}
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="#FFFFFF"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
						stroke="none"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"/>
				</svg>
			{:else}
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<style lang="scss">
    @import '../styles/variables.scss';

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

        .nav-menu-mobile {
            display: none;
        }

		.logo {
			font-weight: bold;
			font-size: 1.2rem;
		}

        .nav-menu-button {
            display: none;
            background: none;
            border: none;
        }

		.theme-selector {
			cursor: pointer;
			background-color: transparent;
			border-color: transparent;
			margin-left: 0.2rem;
			margin-top: 0.2rem;
			height: 40px;
			width: 40px;

            &.mobile {
                display: none;
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

	html[data-theme='dark'] {
		nav {
			ul li a::before {
				background-color: white !important;
				height: 2px !important;
				border-radius: 5px;
			}
		}
	}

    @media (min-width: 699px) {
        .nav-menu-mobile {
            display: none !important;
        }
    }

	@media (max-width: 698px) {
		nav {
            flex-direction: column;
			align-items: start;

			ul {
                display: none;
				flex-direction: column;
			}

            .nav-menu-button {
                display: block;
            }

            .theme-selector {
                display: none;

                &.mobile {
                    display: block;
                    margin-top: 0;
                }
            }
		}

        .flex-left {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            .buttons {
                display: flex;
                flex-direction: row;
            }
        }

		.flex-right {
			align-self: center;
		}

        @media (max-width: $breakpoint-xs) {
            nav {
                padding: 1.5rem 1rem 0 1rem;
            }
        }
	}
</style>
