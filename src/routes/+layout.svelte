<script>
    import '../styles/global.scss'
</script>

<nav>
    <a class='logo' href="/">Drew Develops</a>

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

        .logo {
            font-weight: bold;
            font-size: 1.2rem;
        }

        .logo::after {
            content: "";
            width: 105px;
            top: 70px;
            left: 64px;
            position: absolute;
            border-bottom: 2px solid black;
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