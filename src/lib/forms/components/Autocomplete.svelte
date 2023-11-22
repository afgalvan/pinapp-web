<script lang="ts">
  import type { LogicField } from '$lib/shared';
  // @ts-ignore
  import AutoComplete from 'simple-svelte-autocomplete';

  const colors = ['White', 'Red', 'Yellow', 'Green', 'Blue', 'Black'];

  export let logicField: LogicField<any>;
  // export let error = false;
  export let disabled = false;
</script>

<AutoComplete {disabled} items={colors} bind:selectedItem={$logicField.value} />
