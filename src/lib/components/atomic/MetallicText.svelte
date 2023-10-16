<script>
  let clazz = '';
  export { clazz as class };
</script>

<div class="font-display relative text-4xl font-bold {clazz}">
  <span
    class="relative bg-gradient-to-b dark:from-white/50 dark:to-white bg-clip-text text-transparent from-black/50 to-black"
  >
    <slot />
  </span>
</div>
