<script lang="ts">
  import type { FormField } from '$lib/shared';
  import { Button, GradientButton, Modal } from 'flowbite-svelte';
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
      label: 'Cédula',
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
      label: 'Teléfono',
      variant: 'input',
      type: 'number',
      required: true,
    },
  ];
</script>

<GradientButton color="green" on:click={() => (clickOutsideModal = true)}>
  <PlusSolid class="h-3.5 w-3.5 mr-2" />Agregar empleado
</GradientButton>

<Modal size="xl" title="Registrar empleado" bind:open={clickOutsideModal}>
  <Form
    columns="md:grid-cols-2"
    submitLabel="Registrar"
    formFields={fields}
    class="grid gap-6 p-8 pl-9 pr-9"
    withServerMessage
    {onSubmit}
  />
</Modal>
