<script lang="ts">
import projects from '../../data/workExamples.json';
</script>

<main>
    <h1>Previous Work</h1>

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
</main>

<style lang='scss' scoped>
    h1 {
        margin-bottom: 3rem;
    }
    .example {
        display: flex;
        margin: 0 3rem;

        &-image img {
            max-height: 200px;      
        }

        &-details {
            margin-top: -1.5rem;

            p {
                margin-top: -0.5rem;
                margin-bottom: 1.5rem;
            }
        }

        .flex {
            margin-left: 3rem;
        }
    }
</style>
