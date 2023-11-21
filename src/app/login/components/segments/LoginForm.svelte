<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { GoogleSolid } from 'flowbite-svelte-icons';
  import { link, navigate } from 'svelte-navigator';

  import { login, oauthLogin } from '../../services/login';
  import Form from '$lib/forms/Form.svelte';
  import { authenticate } from '$lib/shared';
  import type { FormField } from '$lib/shared/models';
  import type { User } from '$app/login/models/User';
  import { email } from 'svelte-forms/validators';
  import Email from '$lib/icons/Email.svelte';
  import Lock from '$lib/icons/Lock.svelte';

  const fields: FormField<User>[] = [
    {
      name: 'email',
      label: 'Email',
      variant: 'input',
      required: true,
      validators: [email()],
      icon: Email,
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      variant: 'input',
      required: true,
      icon: Lock,
    },
  ];

  const onSucceed = async (data: any) => {
    if (data.user) {
      authenticate(data.user);
      navigate('/panel/dashboard');
    }
  };
</script>

<div class="pl-9 pr-9">
  <h3 class="text-xl font-bold text-gray-900 dark:text-white p-0">
    Inicio de sesión
  </h3>
  <p class="text-gray-400">Ingrese sus datos de acceso para iniciar sesión.</p>
</div>

<hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

<Form
  submitLabel="Iniciar sesión"
  formFields={fields}
  class="grid gap-6 w-[560px] p-8 pl-9 pr-9"
  onSubmit={login}
  {onSucceed}
  withServerMessage
  let:isSubmitting
  let:startSubmission
>
  <div class="flex items-end">
    <a
      use:link
      href="/auth/forgot-password"
      class="ml-auto text-sm text-green-700 hover:underline dark:text-green-500"
    >
      ¿Olvidaste tu contraseña?
    </a>
  </div>

  <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />

  <Button
    color="light"
    size="lg"
    disabled={isSubmitting}
    on:click={async (e) => {
      startSubmission(e);
      oauthLogin({ provider: 'google' });
    }}
  >
    <GoogleSolid class="w-4 h-4 mr-2" size="sm" />
    Iniciar sesión con Google
  </Button>
</Form>
