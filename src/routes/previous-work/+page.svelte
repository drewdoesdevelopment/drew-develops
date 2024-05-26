<script lang="ts">
import projects from '../../data/workExamples.json';
</script>

<main>
    <h1>Previous Work</h1>

    <div class="examples">
        {#each projects as project}
            <div class="example">
                <div class="example-image">
                    <img src={project.imgSrc} alt="Desktop and Mobile frames showing the currently selected project in preview">
                </div>
                <div class="flex">
                    <div class="example-details">
                        <h2>{project.name}</h2>
                        <p>{project.longDesc}</p>
                    </div>
                    <div class="example-cta">
                        {#if project.isPublic !== false}
                            <a href={project.codeUrl} class="primary btn">View Code</a>
                        {/if}
                        <a href={project.previewUrl} class="secondary btn">Live Preview</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>

<style lang='scss' scoped>
    .examples {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
    }

    .example:not(:first-child) {
        margin-top: 8rem;
    }

    .example {
        display: flex;

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

        .flex {
            margin-left: 3rem;
        }
    }
</style>
