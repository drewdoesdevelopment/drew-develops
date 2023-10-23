<script lang="ts">
	import '../styles/global.scss';
	import '../styles/vendor/hover/hover.css';
	import { page } from '$app/stores';

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
    }
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
            class:active={isActiveLink(navLink.href)}>{navLink.label}</a>
        </li>
      {/each}
      <button class="theme-selector"><img src={icons.moon.source} alt={icons.moon.altText} /></button>
    </ul>

  </div>
	
</nav>

<slot />

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		margin: 0 4rem;
		margin-top: 1.5rem;
		align-items: center; a { color: black;
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
      margin-left: 1rem; 
      background-color: transparent;
      border-radius: 100%;
      border-width: 1px;
      border-color: transparent;
      background-color: #fbf6f6;
      box-shadow: rgb(120 114 213 / 58%) 0px 3px 20px 0px;

      img {
        height: 18px;
      }
    }

		ul {
			display: flex;
			align-items: center;

			li {
				list-style: none;
				margin-right: 0.3em;

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
	}
</style>
