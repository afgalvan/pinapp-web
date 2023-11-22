<script lang="ts">
  import type { FormField } from '$lib/shared';
  import { GradientButton, Modal } from 'flowbite-svelte';
  import Form from '$lib/forms/Form.svelte';
  import { PlusSolid } from 'flowbite-svelte-icons';
  import type { Unit } from '../models/unit';
  import { creProductnits } from '../services/units';

  let clickOutsideModal = false;

  const onSubmit = async (data: Unit) => {
    createUnits(data);
  };
  const fields: FormField<Unit>[] = [
    {
      name: 'short_name',
      label: 'Nombre',
      variant: 'input',
      required: true,
    },Product

    {
      name: 'large_name',Product
      label: 'Nombre largo',
      variant: 'input',
      required: true,
    },
  ];
</script>

<GradientButton color="green" on:click={() => (clickOutsideModal = true)}>
  <PlusSolid class="h-3.5 w-3.5 mr-2" />Agregar unidad
</GradientButton>

<Modal title="Registrar unidad" bind:open={clickOutsideModal}>
  <Form
    columns="md:grid-cols-2"
    submitLabel="Registrar"
    formFields={fields}
    class="grid gap-6 p-8 pl-9 pr-9"
    withServerMessage
    {onSubmit}
  />
</Modal>
