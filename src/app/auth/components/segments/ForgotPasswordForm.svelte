<script lang="ts">
  import { resetPassword } from '$app/auth/services/resetPassword';
  import MetallicText from '$lib/components/atomic/MetallicText.svelte';
  import Form from '$lib/forms/Form.svelte';
  import Email from '$lib/icons/Email.svelte';
  import { type FormField } from '$lib/shared';
  import { P } from 'flowbite-svelte';
  import { email } from 'svelte-forms/validators';
  export let title = '¿Olvidaste tu contraseña?';
  export let submitLabel = 'Restablecer contraseña';
  export let pageDescription =
    '¡No te preocupes! ¡Simplemente ingresa tu correo electrónico y te enviaremos un link para restablecer la contraseña!';
  const formFields: FormField<{ email: string }>[] = [
    {
      name: 'email',
      label: 'Email',
      variant: 'input',
      required: true,
      type: 'email',
      validators: [email()],
      icon: Email,
    },
  ];
</script>

<div class="w-full text-center p-6 sm:p-8">
  <MetallicText>{title}</MetallicText>
  <P
    class="text-base text-center font-normal text-gray-500 dark:text-gray-400 my-5"
  >
    {pageDescription}
  </P>
  <Form
    class="grid gap-6"
    withServerMessage
    {formFields}
    {submitLabel}
    onSubmit={resetPassword}
  />
</div>
