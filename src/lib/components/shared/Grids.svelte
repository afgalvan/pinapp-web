<div>
  <section class="grids">
    <slot />
  </section>
</div>

<style>
  .grids {
    display: grid;
    place-items: center;
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
</style>
