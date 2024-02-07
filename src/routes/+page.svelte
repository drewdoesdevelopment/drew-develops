<script lang="ts">
	import Typed from 'typed.js';
	import { onMount } from 'svelte';

	let typeWriterElement: HTMLElement;

	onMount(() => {
		new Typed(typeWriterElement, {
			strings: [
				'captivating, SEO-focused websites',
				'a11y compliant software',
				'competitive solutions leveraging AI'
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
			<h2>
				I'm a software engineer that creates <span bind:this={typeWriterElement} />
			</h2>
			<button class="primary">See My Work</button>
			<button class="secondary">Let's Chat</button>
		</div>
		<div class="flex-container">
			<img alt="A man sitting at a computer writing code" src="/images/hero_svg.svg" />
		</div>
	</div>

	<div class="intro">
		<p>
			I come from a technical team management background with strong expertise in the Front-End and
			Web Accessibility. Currently I am working as a software engineer for an awesome
			industry-leading LCMS/CCMS directly serving a multitude of Fortune 500 clients. I have
			advanced knowledge of HTML, CSS, and JavaScript on the frontend and Node, C/C++ on the
			server-side leveraging performant, trusted relational database technologies (SQL, PostgreSQL).
			I compliment each language with expertise using modern web libraries while performing as an
			framework agnostic developer, with previous experience in enterprise level frameworks (React,
			Angular) and upcoming technology (Svelte, Astro).
		</p>
		<p>
			My passion is creating software that not only looks superb, but also meets the current
			industry demands of accessibility, SEO, and outperforming the competitor by focusing on
			developing clean, sustainable, non-bloated applications.
		</p>
	</div>
</main>

<style scoped lang="scss">
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

	button {
		margin-top: 0.5rem;
		padding: 10px 26px;
		border-color: transparent;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		font-weight: 500;
		font-size: 0.8rem;

		&:hover {
			opacity: 0.8;
			cursor: pointer;
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
</style>
