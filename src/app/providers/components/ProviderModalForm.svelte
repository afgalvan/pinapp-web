<script lang="ts">
  import type { FormField } from '$lib/shared';
  import { Button, Modal } from 'flowbite-svelte';
  import Form from '$lib/forms/Form.svelte';
  import { PlusSolid } from 'flowbite-svelte-icons';
  import type { Supplier } from '../models/supplier';
  import { createProvider } from '../services/provider';

  let clickOutsideModal = false;

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
      required: false,
    },
  ];
</script>

<Button on:click={() => (clickOutsideModal = true)}>
  <PlusSolid class="h-3.5 w-3.5 mr-2" />Agregar empleado
</Button>

<Modal title="Registrar distribuidor" bind:open={clickOutsideModal}>
  <Form
    columns={1}
    submitLabel="Registrar"
    formFields={fields}
    class="grid gap-6 p-8 pl-9 pr-9"
    withServerMessage
    {onSubmit}
  />
</Modal>
