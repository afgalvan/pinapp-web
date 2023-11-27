<script lang="ts">
  import type { FormField } from '$lib/shared';
  import Form from '$lib/forms/Form.svelte';
  import type { Supplier } from '../models/supplier';
  import { createProvider } from '../services/provider';

  const onSubmit = async (data: Supplier) => {
    createProvider(data);
  };

  const fields: FormField<Supplier>[] = [
    {
      name: 'name',
      label: 'Nombre',
      variant: 'input',
      required: true,
    },

    {
      name: 'phone',
      label: 'Telefono',
      variant: 'input',
      type: 'number',
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
/>
