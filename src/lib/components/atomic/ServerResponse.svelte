<script lang="ts">
  import { Alert } from 'flowbite-svelte';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';
  import type { Writable } from 'svelte/store';
  import { fade } from 'svelte/transition';

  export let message: Writable<string | undefined>;
</script>

{#if $message}
  <div transition:fade={{ duration: 500 }}>
    <Alert
      dismissable
      on:close={() => message.set(undefined)}
      color="red"
      class="border border-red-500 dark:bg-red-400 dark:bg-opacity-20 bg-red-200 bg-opacity-50"
    >
      <InfoCircleSolid slot="icon" class="w-4 h-4" />
      <span class="font-medium">Error!</span>
      {$message}
    </Alert>
  </div>
{/if}
