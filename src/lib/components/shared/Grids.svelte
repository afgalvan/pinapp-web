<script>
  let clazz = '';
  export { clazz as class };
</script>

<div class={clazz}>
  <section class="grids">
    <slot />
  </section>
</div>

<style>
  .grids {
    width: 100%;
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
