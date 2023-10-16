<script>
  export let center = false;

  let clazz = '';
  export { clazz as class };
</script>

<div class={clazz}>
  <section class="grids {center ? 'grid place-content-center' : ''}">
    <slot />
  </section>
</div>

<style>
  :is(.dark .grids) {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' stroke='rgb(255 255 255 / 0.1)' fill='none'%3e%3cpath d='M64 0H0V64'/%3e%3c/svg%3e");
  }

  :is(.grids) {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' stroke='rgb(0 0 0 / 0.1)' fill='none'%3e%3cpath d='M64 0H0V64'/%3e%3c/svg%3e");
  }

  .grids {
    height: 100%;
    width: 100%;
    background-size: 100px 100px;
    z-index: -2;
    background-position-y: -9px;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      4%,
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
