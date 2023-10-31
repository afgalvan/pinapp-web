<script lang="ts" generics="T = any">
  import FieldTemplate from './FieldTemplate.svelte';
  import Input from './Input.svelte';

  import type { FormField, LogicField } from '$lib/shared/models';

  export let field: FormField<T>;
  export let logicField: LogicField<any>;
  export let disabled = false;

  let clazz = '';
  export { clazz as class };
</script>

<FieldTemplate label={field.label} required={field.required}>
  {#if field.variant == 'input'}
    <Input
      {disabled}
      {logicField}
      class={clazz}
      type={field.type ?? 'text'}
      name={field.name}
    />
  {/if}
</FieldTemplate>
