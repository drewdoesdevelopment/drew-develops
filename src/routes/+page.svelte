<script lang="ts">
	import Typed from 'typed.js';
	import { onMount } from 'svelte';
    
	let typeWriterElement: HTMLElement;

	onMount(() => {
		new Typed(typeWriterElement, {
			strings: ['captivating, SEO-focused websites', 'a11y compliant software', 'competitive solutions leveraging AI'],
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
</main>

<style scoped lang="scss">
	main {
		margin-top: 3rem;
	}

	h1 {
		font-weight: 700;
		margin-bottom: 0;
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
