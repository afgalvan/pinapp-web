<script lang="ts">
  import { Alert } from 'flowbite-svelte';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';
  import type { Writable } from 'svelte/store';
  import { slide } from 'svelte/transition';

  export let message: Writable<string | undefined>;
</script>

{#if $message}
  <div class="w-full flex justify-center" transition:slide={{ duration: 500 }}>
    <Alert
      on:close={() => message.set(undefined)}
      color="red"
      class="border w-[80%] border-red-500 dark:bg-red-400 dark:bg-opacity-20 bg-red-200 bg-opacity-50 justify-center"
    >
      <InfoCircleSolid slot="icon" class="w-4 h-4" />
      {$message}
    </Alert>
  </div>
{/if}
