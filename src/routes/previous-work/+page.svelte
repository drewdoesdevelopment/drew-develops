<script lang="ts">
import projects from '../../data/workExamples.json';
import CallToAction from '../../elements/CallToAction.svelte';
import { scrollReveal } from '$lib/actions/scrollReveal';
</script>

<svelte:head>
    <title>Previous Work — Drew Develops</title>
    <meta name="description" content="Selected projects by Drew P. (Drew Develops): enterprise accessibility work at MadCap Software plus freelance and personal apps." />
    <link rel="canonical" href="https://drewdevelops.com/previous-work" />
    <meta property="og:url" content="https://drewdevelops.com/previous-work" />
    <meta property="og:title" content="Previous Work — Drew Develops" />
</svelte:head>

<main>
    <h1 use:scrollReveal={{ animation: 'fade-in', delay: 0 }}>Previous Work</h1>

    <section class="current-role" use:scrollReveal={{ animation: 'fade-up', delay: 100 }}>
        <div class="role-top">
            <span class="role-badge">Current Role</span>
            <a href="https://www.madcapsoftware.com" class="role-share" target="_blank" rel="noopener noreferrer" aria-label="Visit MadCap Software">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
            </a>
        </div>
        <div class="role-header">
            <h2>MadCap Software, Inc.</h2>
            <p class="role-title">Front-End Engineer</p>
            <p class="role-duration">Apr 2022 – Present &nbsp;·&nbsp; Denver, CO (Remote)</p>
        </div>
        <p class="role-desc">Spearheading the accessibility transformation of the flagship Web Publisher platform, elevating WCAG compliance while optimizing frontend architecture for scalability, performance, and maintainability. Cultivating engineering excellence by mentoring developers, enforcing code standards, and leading technical knowledge-sharing initiatives.</p>
        <ul class="contributions">
            <li>Secured retention of high-value Fortune 100 clients by driving enterprise-level accessibility compliance across the core product.</li>
            <li>Reduced support dependency by leading biweekly live coding sessions, empowering customers with advanced implementation strategies.</li>
            <li>Accelerated development efficiency by overhauling code quality practices and institutionalizing structured QA, version control, and peer review frameworks.</li>
        </ul>
    </section>

    <div class="section-divider" use:scrollReveal={{ animation: 'fade-in', delay: 0 }}>
        <span>Freelance & Personal Projects</span>
    </div>

    <div class="examples">
        {#each projects as project, index}
            <div class="example" use:scrollReveal={{ animation: 'fade-up', delay: index * 100 }}>
                <div class="example-image">
                    <img src={project.imgSrc} alt="Desktop and Mobile frames showing the currently selected project in preview">
                </div>
                <div class="flex">
                    <div class="example-details">
                        <h2>{project.name}</h2>
                        <p>{project.longDesc}</p>
                    </div>
                    <div class="example-cta">
                        <a href={project.previewUrl} class="secondary btn">Live Preview</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <CallToAction />
</main>

<style lang='scss' scoped>
@import '../../styles/variables.scss';

    .current-role {
        background-color: #f7f8fa;
        border-radius: 12px;
        padding: 2.5rem 3rem;
        margin-top: 3rem;

        :global(html[data-theme="dark"]) & {
            background-color: var(--dark-secondary);
        }
    }

    .role-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
    }

    .role-badge {
        display: inline-block;
        background-color: black;
        color: white;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 4px 12px;
        border-radius: 20px;

        :global(html[data-theme="dark"]) & {
            background-color: white;
            color: black;
        }
    }

    .role-share {
        display: flex;
        align-items: center;
        opacity: 0.45;
        color: currentColor;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 1;
        }
    }

    .role-header {
        h2 {
            margin: 0 0 0.25rem 0;
        }
    }

    .role-title {
        margin: 0 0 0.25rem 0;
        font-weight: 600;
        font-size: 1.05rem;
    }

    .role-duration {
        margin: 0;
        font-size: 0.9rem;
        opacity: 0.6;
    }

    .role-desc {
        margin-top: 1.5rem;
        line-height: 1.7;
    }

    .contributions {
        margin-top: 1rem;
        padding-left: 1.25rem;

        li {
            margin-bottom: 0.6rem;
            line-height: 1.6;
        }
    }

    .section-divider {
        display: flex;
        align-items: center;
        margin-top: 5rem;
        gap: 1rem;

        span {
            white-space: nowrap;
            font-weight: 600;
            font-size: 0.85rem;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            opacity: 0.45;
        }

        &::before,
        &::after {
            content: '';
            flex: 1;
            height: 1px;
            background-color: currentColor;
            opacity: 0.2;
        }
    }

    .examples {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    .example:not(:first-child) {
        margin-top: 8rem;
    }

    .example:nth-child(2n) {
        flex-direction: row-reverse;

        .flex {
            margin-left: 0;
            margin-right: 3rem;
        }
    }

    .example {
        display: flex;
        margin: 6rem 0;

        &-image img {
            max-height: 200px;      
        }

        &-details {
            margin-top: -1.5rem;

            p {
                margin-top: -0.5rem;
                margin-bottom: 1.5rem;
                max-width: 800px;
            }
        }

        &-cta {
            margin-top: 3rem;
        }

        .flex {
            margin-left: 3rem;
        }
    }

    @media (max-width: $breakpoint-s) {
        .current-role {
            padding: 2rem 1.5rem;
        }

        .section-divider {
            margin-top: 4rem;
        }

        h1 {
            margin-top: 3rem;
            text-align: center;
        }

        .examples h2 {
            margin-top: 3rem;
        }
        .example, .example:nth-child(2n) {
            flex-direction: column;

        }
        
        .example:first-child {
            margin-top: 3rem;
        }

        .example {
            text-align: center;

            &-details {
                p {
                    margin-top: 1rem;
                    max-width: 100%;
                }
            }

            .flex {
                margin-left: 0;
            }
        }

        .example:nth-child(2n) {
            .flex {
                margin-right: 0;
            }
        }
    }

    @media (max-width: 550px) {
        .example-cta {
            display: flex;
            flex-direction: column;

            a {
                margin-bottom: 1rem;
                border-radius: 4px;
            }
        }
    }
</style>
