<script lang="ts">
  import type { FormField } from '$lib/shared';
  import type { Employee } from '../models/employee';
  import Form from '$lib/forms/Form.svelte';
  import { createEmployee } from '../services/employee';

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
    {
      name: 'birth_date',
      label: 'Fecha de nacimiento',
      variant: 'input',
      type: 'date',
      required: true,
    },
    {
      name: 'user_id',
      label: 'Usuario',
      variant: 'autocomplete',
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
