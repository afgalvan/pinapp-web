<script>
  import { Card } from 'flowbite-svelte';
  import Dots from './Dots.svelte';

  export let dotted = false;
  export let color = 'rgba(120, 119, 198, 0.3)';
  let clazz = '';
  export { clazz as class };
</script>

<Card
  class="border-light-bd dark:border-dark-bd bg-light-card dark:bg-dark-card p-0 relative {clazz}"
>
  {#if dotted}
    <Dots spreading={15} />
  {/if}
  <slot />
  <div
    class="rounded-lg"
    style={`position: absolute; pointer-events: none; inset: 0px; width: 100%; height: 100%; background: linear-gradient(rgba(0, 0, 0, 0), 50%, ${color});`}
  />
</Card>
