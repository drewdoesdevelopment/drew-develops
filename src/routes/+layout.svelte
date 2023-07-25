<script>
    import '../styles/global.scss'
</script>

<nav>
    <a href="/">Drew Develops</a>

    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/expertise">Expertise</a></li>
        <li><a href="/previous-work">Previous Work</a></li>
        <li><a href="/connect">Connect</a></li>
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
    }

    ul {
        display: flex;

        li {
            list-style: none;
            margin-right: 1.3rem;
        }
    }
</style>