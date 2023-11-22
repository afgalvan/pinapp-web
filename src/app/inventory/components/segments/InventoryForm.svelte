<script lang="ts">
  import Form from '$lib/forms/Form.svelte';
  import type { FormField } from '$lib/shared/models';
  import type { Inventory } from '$app/inventory/models/Inventory';
  import { min } from 'svelte-forms/validators';

  const onSucceed = async (data: any) => {
    console.log(data);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  const fields: FormField<Inventory>[] = [
    {
      name: 'name',
      label: 'Nombre',
      variant: 'input',
      required: true,
    },
    {
      name: 'stock',
      label: 'Stock',
      variant: 'input',
      type: 'number',
      required: true,
      validators: [min(1)],
    },
    {
      name: 'id',
      label: 'Stock',
      variant: 'input',
      type: 'number',
      required: true,
      validators: [min(1)],
    },
    {
      name: 'test',
      label: 'Stock',
      variant: 'input',
      type: 'number',
      required: true,
      validators: [min(1)],
    },
  ];
</script>

<Form
  columns={3}
  submitLabel="Guardar"
  formFields={fields}
  class="grid gap-6 p-8 pl-9 pr-9"
  withServerMessage
  {onSucceed}
  {onSubmit}
/>
