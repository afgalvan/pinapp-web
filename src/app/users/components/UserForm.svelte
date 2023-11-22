<script lang="ts">
  import type { FormField } from '$lib/shared';
  import { GradientButton, Modal } from 'flowbite-svelte';
  import Form from '$lib/forms/Form.svelte';
  import { PlusSolid } from 'flowbite-svelte-icons';
  import type { User } from '../models/user';
  import { createUser } from '../services/users-service';

  let clickOutsideModal = false;

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

<GradientButton color="green" on:click={() => (clickOutsideModal = true)}>
  <PlusSolid class="h-3.5 w-3.5 mr-2" />Agregar usuario
</GradientButton>

<Modal title="Registrar Usuario" bind:open={clickOutsideModal}>
  <Form
    columns="md:grid-cols-1"
    submitLabel="Registrar"
    formFields={fields}
    class="grid gap-6 p-8 pl-9 pr-9"
    withServerMessage
    {onSubmit}
  />
</Modal>
