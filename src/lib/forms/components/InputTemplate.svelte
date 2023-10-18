<script>
  import { Label } from 'flowbite-svelte';

  export let required = false;
  export let label = '';
  export let error = false;
</script>

<div class="flex flex-col">
  <Label class="space-y-2" color={error ? 'red' : 'gray'}>
    {label}
    {#if required}
      <span class="text-red-600">*</span>
    {/if}
    <slot />
  </Label>
</div>
