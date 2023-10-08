<script lang="ts">
  import Hero from '../components/Hero.svelte';
</script>

<Hero />

<div class="wrapper">
  <section class="row">
    <div class="column">
      <article class="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </article>
      <article class="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </article>
    </div>
    <div class="column">
      <article class="card">
        <h2>About Me</h2>
        <div class="fakeimg" style="height:100px;">Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </article>
      <article class="card">
        <div class="popular">
          <h3>Popular Post</h3>
          <div class="fakeimg"><p>Image</p></div>
          <div class="fakeimg"><p>Image</p></div>
          <div class="fakeimg"><p>Image</p></div>
        </div>
      </article>
      <article class="card">
        <h3>Follow Me</h3>
        <p>Some text..</p>
      </article>
    </div>
  </section>
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 40px 0px;

    background-size: 100px 100px;
    z-index: -2;
    background-image: url('/bg-grid.png');
    background-position-y: -9px;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      6%,
      white,
      96%,
      transparent
    );
    mask-image: linear-gradient(
      to bottom,
      transparent,
      6%,
      white,
      96%,
      transparent
    );
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .card {
    padding: 20px;
    margin: 10px 15px;
    list-style: none;
    background-color: #23262d;
    background-image: none;
    background-size: 400%;
    border-radius: 7px;
    background-position: 100%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .card > a {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: calc(1.5rem - 1px);
    border-radius: 8px;
    color: white;
    background-color: #23262d;
    opacity: 0.8;
  }

  .card h2 {
    margin: 0;
    font-size: 1.25rem;
    transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .card p {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  .fakeimg {
    background-color: #0d0f15;
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .fakeimg:is(:hover, :focus-within) {
    cursor: pointer;
    background-position: 0;
    background-image: var(--accent-gradient);
  }

  .fakeimg:is(:hover, :focus-within) h2 {
    color: rgb(var(--accent-light));
  }
</style>
