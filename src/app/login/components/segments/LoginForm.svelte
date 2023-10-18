<script lang="ts">
  import {
    Checkbox,
    GradientButton,
    Spinner,
    Hr,
    Button,
  } from 'flowbite-svelte';
  import { GoogleSolid } from 'flowbite-svelte-icons';
  import { navigate } from 'svelte-navigator';

  import { authenticate, useForm } from '$lib/shared';
  import Input from '$lib/forms/components/Input.svelte';

  import { login, oauthLogin } from '../../services/login';
  import { email } from 'svelte-use-form/validators';
  import ServerResponse from '$lib/components/atomic/ServerResponse.svelte';
  import { writable } from 'svelte/store';

  const { form, onSubmit, isSubmitting, isSubmitted } = useForm();
  let errorMessage = writable<string | undefined>();

  const submit = onSubmit(async () => {
    const data = await login($form.values as any);
    errorMessage.set(data.message);
    if (data.user) {
      authenticate(data.user);
      navigate('/panel/dashboard');
    }
  });
</script>

<form class="flex flex-col space-y-6" use:form>
  <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
    Inicio Sesión
  </h3>
  <Input
    label="Correo electrónico"
    type="email"
    name="email"
    disabled={$isSubmitting}
    error={$isSubmitted && !$form.valid}
    required
    validations={[email]}
  />
  <Input
    label="Contraseña"
    type="password"
    name="password"
    disabled={$isSubmitting}
    error={$isSubmitted && !$form.valid}
    required
  />
  <div class="flex items-start">
    <Checkbox>Recordar</Checkbox>
    <a
      href="/"
      class="ml-auto text-sm text-green-700 hover:underline dark:text-green-500"
    >
      Olvidaste tu contraseña?
    </a>
  </div>
  <Hr />
  <GradientButton
    on:click={submit}
    disabled={$isSubmitting}
    color="green"
    type="submit"
    class="w-full1"
  >
    {#if $isSubmitting}
      <Spinner class="mr-3" color="white" size="4" />
      Iniciando sesión...
    {:else}
      Iniciar sesión
    {/if}
  </GradientButton>
  <Button
    color="light"
    disabled={$isSubmitting}
    on:click={() => {
      isSubmitting.set(true);
      oauthLogin({ provider: 'google' });
    }}
  >
    <GoogleSolid class="w-4 h-4 mr-2" size="sm" />
    Iniciar sesión con Google
  </Button>
  <ServerResponse message={errorMessage} />
</form>
