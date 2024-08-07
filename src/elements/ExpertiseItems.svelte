<div class="expertise-items">
	<div class="expertise-item">
		<img alt="Drew sitting at a computer writing code" src="/images/webapps.svg" />

		<div class="flex">
			<h3>Web Development</h3>
			<p>
				Whether you're looking for styling updates to your app or site, updates to an existing API,
				or a fully custom webapp, I've got you covered!
			</p>
		</div>
	</div>

	<div class="expertise-item">
		<img alt="Drew sitting at a computer writing code" src="/images/accessibility.svg" />
		<div class="flex">
			<h3>Web Accessibility (A11Y)</h3>
			<p>
				Having an accessibile application for your users has become a UX and legal necessity, and
				often a deciding factor between competing software. I offer professional auditing,
				development, and consultation.
			</p>
		</div>
	</div>

	<div class="expertise-item">
		<img alt="Drew sitting at a computer writing code" src="/images/ai.svg" />
		<div class="flex">
			<h3>Automation/AI Integrations</h3>
			<p>
				I offer development for scripts and setup for third-party integration/automation services
				(SharePoint, etc) that can save you time and provide powerful insights.
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
            
            .flex {
                margin-left: 3rem;
            }
		}

        .expertise-item:nth-child(2n) { 
            flex-direction: row-reverse;
            margin: 4rem 0;

            .flex {
                margin-left: 0;
                margin-right: 3rem;
            }
        }
	}

	@media (max-width: $breakpoint-m) {
		.expertise {
			&-item {
				width: 100% !important;
				margin-bottom: 2rem !important;
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
