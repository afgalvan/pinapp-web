<script lang="ts">
  import type { FormField } from '$lib/shared';
  import { Button, Modal } from 'flowbite-svelte';
  import type { Employee } from '../models/employee';
  import Form from '$lib/forms/Form.svelte';
  import { PlusSolid } from 'flowbite-svelte-icons';
  import { createEmployee } from '../services/employee';

  let clickOutsideModal = false;

  const onSubmit = async (data: Employee) => {
    createEmployee(data);
  };
  const fields: FormField<Employee>[] = [
    {
      name: 'identification',
      label: 'Id',
      variant: 'input',
      type: 'number',
      required: true,
    },
    {
      name: 'name',
      label: 'Nombre',
      variant: 'input',
      required: true,
    },
    {
      name: 'last_name',
      label: 'Apellido',
      variant: 'input',
      type: 'input',
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

<Modal title="Registrar empleado" bind:open={clickOutsideModal}>
  <Form
    columns={3}
    submitLabel="Registrar"
    formFields={fields}
    class="grid gap-6 p-8 pl-9 pr-9"
    withServerMessage
    {onSubmit}
  />
</Modal>
