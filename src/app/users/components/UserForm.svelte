<script lang="ts">
  import type { FormField } from '$lib/shared';
  import Form from '$lib/forms/Form.svelte';
  import type { User } from '../models/user';
  import { createUser } from '../services/users-service';

  const onSubmit = async (data: User) => {
    createUser(data);
  };

  const fields: FormField<User>[] = [
    {
      name: 'email',
      label: 'Email',
      variant: 'input',
      type: 'email',
      required: true,
    },

    {
      name: 'password',
      label: 'Contraseña',
      variant: 'input',
      type: 'password',
      required: true,
    },
  ];
</script>

<Form
  columns="md:grid-cols-1"
  submitLabel="Registrar"
  formFields={fields}
  class="grid gap-6 p-8 pl-9 pr-9"
  withServerMessage
  {onSubmit}
/>
