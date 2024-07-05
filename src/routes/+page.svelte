<script lang="ts">
	import Typed from 'typed.js';
	import { onMount } from 'svelte';
    import ExpertiseItems from '../elements/ExpertiseItems.svelte';
	import CallToAction from '../elements/CallToAction.svelte';

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


	<div class="expertise">
		<h2>My Expertise</h2>
        
        <ExpertiseItems />
	</div>

    <CallToAction />
</main>

<style scoped lang="scss">
@import '../styles/variables.scss';

main {
    margin-top: 6rem;
}

h1 {
    font-weight: 600;
    font-size: 1.8rem;
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
        margin-bottom: 4rem;
    }

    img {
        height: auto;
        max-width: 100%;
    }
}

.mobile-image {
    display: none;
}

.expertise {
    margin-top: 8rem;

    h2 {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
    }

}

@media (min-width: $breakpoint-xs) {
    .hero {
        h2 {
            font-size: 1.3rem !important;
            height: 80px;
        }
    }
}

@media (max-width: $breakpoint-s) {
    main {
        margin: 0 2rem;
    }

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 2rem;

        h1 {
            margin-top: 0;
            margin-bottom: 3rem;
        }

        h2 {
            margin: 3rem 0;
            font-size: 1rem;
            height: 60px;
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
        width: 80%;
        margin: 0 auto;
    }
}


@media (min-width: $breakpoint-s) {
    .hero {
        &-text {
            width: 60%;
        }

        &-image {
            max-width: 40%;
        }
    }
}

@media (min-width: $breakpoint-m) {
    .hero {
        margin: 0 3rem;
    }
}

</style>
