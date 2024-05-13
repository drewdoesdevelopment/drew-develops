<script lang="ts">

	import Typed from 'typed.js';
	import { onMount } from 'svelte';

	let typeWriterElement: HTMLElement;

	onMount(() => {
		new Typed(typeWriterElement, {
			strings: [
				'captivating, SEO-focused websites',
				'a11y compliant solutions',
				'impactful customer experiences'
			],
			typeSpeed: 40,
			backSpeed: 32,
			loop: true
		});
	});
</script>

<main>
	<div class="hero">
		<div class="flex-container hero-text">
            <h1>Hey, I'm Drew</h1>

            <img
                class="mobile-image"
                alt="Drew sitting at a computer writing code"
                src="/images/hero_svg.svg"
            />

			<h2>
				I'm a software engineer that creates <span bind:this={typeWriterElement} />
			</h2>

			<a href="/previous-work" class="primary btn">See My Work</a>
			<a href="/connect" class="secondary btn">Let's Chat</a>
		</div>
		<div class="hero-image flex-container">
			<img alt="A man sitting at a computer writing code" src="/images/hero_svg.svg" />
		</div>
	</div>

</main>

<style scoped lang="scss">
	@import '../styles/variables.scss';

	main {
		margin-top: 3rem;
	}

	h1 {
		font-weight: 700;
		margin-bottom: -0.3rem;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	.hero {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-text {
			width: 40%;
		}

		img {
			height: auto;
			max-width: 100%;
		}
	}

	.mobile-image {
		display: none;
	}

	.btn {
		padding: 10px 22px;
		border-color: transparent;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		font-weight: 500;
		font-size: 0.8rem;
		text-decoration: none;

		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}

		&:visited {
			color: initial;
		}

		&.primary {
			background-color: white;
			border-radius: 5px;
			margin-right: 0.5rem;
		}

		&.secondary {
			background-color: black;
			color: white;
			border-radius: 47px;
		}
	}

	@media (max-width: $breakpoint-xs) {
		main {
			margin: 0 2rem;
		}

		.hero {
			flex-direction: column;
			align-items: start;
            text-align: center;
            margin-top: 1rem;

            h1 {
                margin-bottom: 2rem;
            }

            h2 {
                margin-top: 2rem;
            }

			&-text {
				width: auto;
			}

			&-image {
				display: none;
			}
		}

        .mobile-image {
            display: block;
        }
	}
</style>
