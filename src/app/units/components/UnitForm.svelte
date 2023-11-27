<script lang="ts">
  import type { FormField } from '$lib/shared';
  import Form from '$lib/forms/Form.svelte';
  import type { Unit } from '../models/unit';
  import { createUnits } from '../services/units';
  import type { Writable } from 'svelte/store';

  export let reloadTable: Writable<boolean>;

  const onSucceed = () => {
    reloadTable.set(true);
  };

  const onSubmit = async (data: Unit) => {
    createUnits(data);
  };

  const fields: FormField<Unit>[] = [
    {
      name: 'large_name',
      label: 'Nombre completo',
      variant: 'input',
      required: true,
    },
    {
      name: 'short_name',
      label: 'Símbolo',
      variant: 'input',
      required: true,
    },
  ];
</script>

<Form
  columns="md:grid-cols-2"
  submitLabel="Registrar"
  formFields={fields}
  class="grid gap-6 p-8 pl-9 pr-9"
  withServerMessage
  {onSubmit}
  {onSucceed}
/>
