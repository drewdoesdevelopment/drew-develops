<script lang="ts">
	import { scrollReveal } from '$lib/actions/scrollReveal';
</script>

<div class="expertise-items">
	<div class="expertise-item" use:scrollReveal={{ animation: 'fade-right', delay: 0 }}>
		<img alt="Drew sitting at a computer writing code" src="/images/webapps.svg" />

		<div class="flex">
			<h3>Web Development</h3>
			<p>
				I architect and deliver scalable, high-performance web applications — from styling updates and API integrations to full custom builds.
			</p>
		</div>
	</div>

	<div class="expertise-item" use:scrollReveal={{ animation: 'fade-left', delay: 150 }}>
		<img alt="Drew sitting at a computer writing code" src="/images/accessibility.svg" />
		<div class="flex">
			<h3>Web Accessibility (A11Y)</h3>
			<p>
				As a lead accessibility SME for flagship SaaS platforms, I drive WCAG 2.1/2.2 compliance through professional auditing, ARIA implementation, and screen reader testing — helping enterprise clients retain and grow their user base.
			</p>
		</div>
	</div>

	<div class="expertise-item" use:scrollReveal={{ animation: 'fade-right', delay: 300 }}>
		<img alt="Drew sitting at a computer writing code" src="/images/ai.svg" />
		<div class="flex">
			<h3>Automation/AI Integrations</h3>
			<p>
				I build AI-powered platforms and automation integrations that streamline workflows, enhance decision transparency, and deliver measurable efficiency gains for your team.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../styles/variables.scss';

	.expertise-items {
		display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

		img {
			max-width: 200px;
		}

		.expertise-item {
            display: flex;
			padding: 1rem;
			width: 80%;
            margin: 4rem 0;
            max-width: 1400px; // Spreads out the items for larger screens

            .flex {
                margin-left: 3rem;
            }

            &:last-child {
                margin-bottom: 2rem;
            }

            p {
                max-width: 830px;
            }
		}

        .expertise-item:nth-child(2n) { 
            flex-direction: row-reverse;

            .flex {
                margin-left: 0;
                margin-right: 3rem;
            }
        }
	}

    @media (max-width: $breakpoint-m) {
        .expertise-item {
            flex-direction: column !important;
            align-items: center;
        }
    }

	@media (max-width: $breakpoint-m) {
		.expertise {
			&-item {
				width: 100% !important;
				margin-bottom: 2rem !important;

                img {
                    margin-bottom: 2rem;
                }

                p {
                    max-width: 600px !important;
                }

                p, h3 {
                    text-align: center;
                }

                .flex {
                    margin-left: 0 !important;
                }
			}

            .expertise-item:nth-child(2n) {
                margin-right: 0 !important;

                .flex {
                    margin-right: 0;
                }
            }

			&-items {
				flex-direction: column;
				align-items: center;
			}
		}
	}

	@media (min-width: 1920px) {
		.expertise-items {
			.expertise-item {
				padding: 4rem;
			}
		}
	}
</style>
