<script lang="ts">
  import Form from '$lib/forms/Form.svelte';
  import type { FormField } from '$lib/shared/models';
  import type { Inventory } from '$app/inventory/models/Inventory';
  import { min } from '$lib/shared';
  import { createInventory } from '$app/inventory/services/inventory-service';

  const fields: FormField<Inventory>[] = [
    {
      name: 'name',
      label: 'Nombre',
      variant: 'input',
      required: true,
    },
    {
      name: 'stock_quantity',
      label: 'Stock',
      variant: 'input',
      type: 'number',
      required: true,
      validators: [min(1)],
    },
    {
      name: 'units_of_measures',
      label: 'Unidad',
      variant: 'autocomplete',
      required: true,
    },
    {
      name: 'providers',
      label: 'Proveedor',
      variant: 'autocomplete',
      required: true,
    },
  ];
</script>

<Form
  columns="md:grid-cols-2"
  submitLabel="Guardar"
  formFields={fields}
  class="grid gap-6 p-8 pl-9 pr-9"
  withServerMessage
  onSubmit={createInventory}
/>
