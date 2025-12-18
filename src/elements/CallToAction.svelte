<script lang="ts">
	import { scrollReveal } from '$lib/actions/scrollReveal';
</script>

<div class="cta">
        <h3 use:scrollReveal={{ animation: 'fade-up', delay: 0 }}>Let's chat about how I can help you generate more revenue and improve your end-user experience.</h3>
        <a href="/connect" class="secondary btn" use:scrollReveal={{ animation: 'fade-up', delay: 100 }}>Contact Me</a>
</div>

<style scoped lang="scss">
@import '../styles/variables.scss';

.cta {
    text-align: center;

    h3 {
        margin-bottom: 3rem;
        font-weight: 500;
    }
}

@media (max-width: $breakpoint-s) {
    .cta {
        text-align: center;
        margin-top: 0rem;
        margin-bottom: 0rem !important;
    }
}


@media (max-width: 800px) {
    .cta {
        margin: 3rem 0 6rem 0 !important;
    }
}

@media (max-width: 1920px) {
    .cta {
        margin: 8rem 0;
    }
}

@media (min-width: 1920px) {
    .cta {
        margin: 12rem 0;
    }
}
</style>
