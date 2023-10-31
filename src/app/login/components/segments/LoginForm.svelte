<script lang="ts">
  import { Checkbox, Button } from 'flowbite-svelte';
  import { GoogleSolid } from 'flowbite-svelte-icons';
  import { navigate } from 'svelte-navigator';

  import { login, oauthLogin } from '../../services/login';
  import Form from '$lib/forms/Form.svelte';
  import { authenticate } from '$lib/shared';
  import type { FormField } from '$lib/shared/models';
  import type { User } from '$app/login/models/User';
  import { email, required } from 'svelte-forms/validators';
  import { field } from 'svelte-forms';

  const onSucceed = async (data: any) => {
    if (data.user) {
      authenticate(data.user);
      navigate('/panel/dashboard');
    }
  };

  const fields: FormField<User>[] = [
    {
      name: 'email',
      label: 'Email',
      variant: 'input',
      required: true,
      validators: [email()],
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      variant: 'input',
      required: true,
    },
  ];
</script>

<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0 mb-2">
  Inicio Sesión
</h3>

<Form
  fields={[field('email', '', [email(), required()])]}
  formFields={fields}
  class="grid gap-6 w-[500px]"
  onSubmit={login}
  {onSucceed}
  withErrorMessage
  let:isSubmitting
  let:startSubmission
>
  <div class="flex items-start">
    <Checkbox>Recordar</Checkbox>
    <a
      href="/"
      class="ml-auto text-sm text-green-700 hover:underline dark:text-green-500"
    >
      Olvidaste tu contraseña?
    </a>
  </div>

  <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

  <Button
    size="lg"
    color="light"
    disabled={isSubmitting}
    on:click={(e) => {
      startSubmission(e);
      oauthLogin({ provider: 'google' });
    }}
  >
    <GoogleSolid class="w-4 h-4 mr-2" size="sm" />
    Iniciar sesión con Google
  </Button>
</Form>
