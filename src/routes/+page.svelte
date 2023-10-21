<script>
</script>

<main>
    <div class="hero"> 
      <div class="flex-container">
        <h1>Hey there, I'm Drew</h1>
        <h2>I'm a software engineer that focuses on creating <span>accessible</span> solutions</h2>
        <button class="primary">See My Work</button>
        <button class="secondary">Let's Chat</button>
      </div>
      <div class="flex-container">
        <img src="/images/hero_svg.svg" />
      </div>
    </div>
</main>

<style scoped lang="scss">
  main {
    margin-top: 3rem;
  }

  h1 {
    font-weight: 600;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    padding: 10px 26px;
    border-color: transparent;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-weight: 500;
    font-size: 0.8rem;

    &.primary {
      background-color: white;
      border-radius: 5px;
      margin-right: 0.5rem;
    }

    &.secondary {
      background-color: black;
      color: white;
      border-radius: 47px;
    }
  }
</style>
