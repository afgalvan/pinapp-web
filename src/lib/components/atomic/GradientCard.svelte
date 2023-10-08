<script>
  import Dots from './Dots.svelte';

  export let dotted = false;
  export let color = 'rgba(120, 119, 198, 0.3)';
  let clazz = '';
  export { clazz as class };
</script>

<div
  class={`relative flex h-full w-full items-center justify-center rounded-lg border border-light-bd dark:border-dark-bd bg-light-card dark:bg-dark-card p-20 shadow-2xl ${clazz}`}
>
  {#if dotted}
    <Dots />
  {/if}
  <slot />
  <div
    style={`position: absolute; pointer-events: none; inset: 0px; width: 100%; height: 100%; background: linear-gradient(rgba(0, 0, 0, 0), 50%, ${color});`}
  />
</div>
