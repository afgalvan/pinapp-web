<script lang="ts">
  import { TableBodyCell } from 'flowbite-svelte';

  export let colspan: string = '1';
  let clazz = '';
  export { clazz as class };
</script>

<TableBodyCell
  {colspan}
  tdClass={`px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white cursor-pointer ${clazz}`}
>
  <slot />
</TableBodyCell>
