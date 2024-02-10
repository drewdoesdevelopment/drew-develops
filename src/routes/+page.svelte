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
		<img
			class="intro-pic"
			alt="Professional headshot of Drew in a tux with a rustic backdrop"
			src="/images/profile.jpg"
		/>
		<div class="intro-text">
			<p>
				My passion lies in creating software that not only looks superb but also meets the current
				industry standards for accessibility, SEO, and mobile responsiveness. I am dedicated to
				outpacing competitors by developing sustainable and efficient applications that are free
				from unnecessary complexity.
			</p>
		</div>
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

	.intro {
		background-color: #f6f6f6;
		padding: 1rem 2rem;
		border-radius: 10px;
		margin: 3rem 0;
		font-size: 0.8rem;
		position: relative;

		&-pic {
			width: 40px;
			height: 40px;
			border-radius: 100%;
			position: absolute;
			top: -1.2em;
			left: -1.2rem;
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
