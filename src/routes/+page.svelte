<script lang="ts">
	import Typed from 'typed.js';
	import { onMount } from 'svelte';
    import ExpertiseItems from '../elements/ExpertiseItems.svelte';
	import CallToAction from '../elements/CallToAction.svelte';

	let typeWriterElement: HTMLElement;
    
	onMount(() => {
		new Typed(typeWriterElement, {
			strings: [
				'SEO-focused, top resulting websites.',
				'WCAG (A11Y) compliant UIs.',
				'impactful end-user experiences.'
			],
			typeSpeed: 40,
			backSpeed: 40,
            backDelay: 1500,
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
				I'm a software developer that creates <span bind:this={typeWriterElement} />
			</h2>
            <div class="hero-buttons">
                <a href="/previous-work" class="primary btn">See My Work</a>
                <a href="/connect" class="secondary btn">Let's Chat</a>
            </div>
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
    margin-bottom: 4rem;
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
        width: 1200px;
    }
}

.mobile-image {
    display: none;
}


.btn {
    margin-bottom: 1rem;
    border-radius: 6px;
}

.expertise {
    margin-top: 8rem;

    h2 {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
    }

}


@media (max-width: $breakpoint-xs) {
    .hero-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        .btn {
            margin-bottom: 1rem;
            border-radius: 6px;
            width: 80%;
        }

    }

    .hero h1 {
        margin-top: 0.5rem !important;
        font-size: 1.5rem;
    }

    .hero h2 {
        margin-top: 3rem !important;
        margin-bottom: 2rem;
    }

    .expertise {
        margin-top: 1rem;
    }
}

@media (min-width: $breakpoint-xs) {
    .hero {
        h2 {
            font-size: 1.5rem !important;
            margin-bottom: 6rem;
        }
    }
}

@media (max-width: 1000px) {
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
            margin-top: 3rem;
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
        width: 80% !important;
        margin: 0 auto;
    }
}


@media (min-width: 1000px) {
    .hero {
        margin: 0 3rem;

        h1 {
            margin-bottom: 0 !important;
        }

        h2 {
            height: 60px;
        }

        &-text {
            width: 60%;
            margin-right: 3rem;
        }

        &-image {
            max-width: 40%;
        }
    }

}

// Unique for the typing effect
@media (min-width: 515px) {
    .hero h1 {
        margin: 2rem 0 4rem 0;
        font-size: 2.4rem;
    }

    .hero h2 {
        margin-bottom: 3.5rem;
    }
}

// Desktop
@media (min-width: $breakpoint-m) {
    .hero {
        margin: 0 3rem;

        h1 {
            margin-bottom: 0 !important;
        }
    }
}


@media (min-width: 1400px) {
    .hero-image {
        max-width: 50%;
    }

    .hero h2 {
        font-size: 1.8rem !important;
        margin-bottom: 5rem;
    }
}

// 1080p
@media (min-width: 1920px) {
    .hero-image {
        max-width: 50%;
    }

    .hero-text {
        max-width: 50%;

        h2 {
            margin-bottom: 4rem;
        }
    }

    .expertise {
        margin: 12rem 0 !important;
    }
}

// 1440p
@media (min-width: 2560px) {
}
</style>
