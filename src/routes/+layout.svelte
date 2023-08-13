<script>
    import '../styles/global.scss'
    import '../styles/vendor/hover/hover.css'
</script>

<nav>
    <a class='logo' href="/">Drew Develops</a>

    <ul>
        <li><a href="/" class="hvr-underline-from-center">Home</a></li>
        <li><a href="/expertise" class="hvr-underline-from-center">Expertise</a></li>
        <li><a href="/previous-work" class="hvr-underline-from-center">Previous Work</a></li>
        <li><a href="/connect" class="hvr-underline-from-center">Connect</a></li>
    </ul>
</nav>

<slot />

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        margin: 0 4rem;
        margin-top: 1.5rem;
        align-items: center;

        a {
            color: inherit;
            text-decoration: none;

            &:visited {
                color: inherit;
            }
        }

        .logo {
            font-weight: bold;
            font-size: 1.2rem;
        }

    }
    ul {
        display: flex;

        li {
            list-style: none;
            margin-right: 1.3rem;

            a {
                padding-bottom: 4px;

                &::before {
                    background-color: grey !important;
                    height: 2px !important;
                }
            }
        }
    }
</style>