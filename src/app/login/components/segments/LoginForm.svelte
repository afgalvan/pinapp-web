<script lang="ts">
  import { Checkbox, GradientButton, Spinner, Button } from 'flowbite-svelte';
  import { GoogleSolid } from 'flowbite-svelte-icons';
  import { navigate } from 'svelte-navigator';

  import Input from '$lib/forms/components/Input.svelte';

  import { login, oauthLogin } from '../../services/login';
  import { email } from 'svelte-use-form/validators';
  import Form from '$lib/forms/Form.svelte';
  import { authenticate } from '$lib/shared';

  const onSucceed = async (data: any) => {
    if (data.user) {
      authenticate(data.user);
      navigate('/panel/dashboard');
    }
  };
</script>

<Form
  class="grid gap-6 w-[500px]"
  onSubmit={login}
  {onSucceed}
  withErrorMessage
  let:isSubmitting
  let:hasSubmitted
  let:startSubmission
>
  <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
    Inicio Sesión
  </h3>
  <Input
    label="Correo electrónico"
    type="email"
    name="email"
    disabled={isSubmitting}
    error={hasSubmitted}
    required
    validations={[email]}
  />
  <Input
    label="Contraseña"
    type="password"
    name="password"
    disabled={isSubmitting}
    error={hasSubmitted}
    required
  />

  <GradientButton
    disabled={isSubmitting}
    color="green"
    size="lg"
    type="submit"
    class="w-full1"
  >
    {#if isSubmitting}
      <Spinner class="mr-3" color="white" size="4" />
      Iniciando sesión...
    {:else}
      Iniciar sesión
    {/if}
  </GradientButton>

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
