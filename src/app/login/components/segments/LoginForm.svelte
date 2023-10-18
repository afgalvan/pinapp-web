<script lang="ts">
  import {
    Checkbox,
    Label,
    Input,
    GradientButton,
    Spinner,
  } from 'flowbite-svelte';
  import { navigate } from 'svelte-navigator';

  import { authenticate } from '$lib/stores/auth';

  import { useForm } from 'svelte-use-form';
  import type { User } from '../../models/user';
  import { login } from '../../services/login';

  const form = useForm();
  let submitting = false;

  let formData: User = { email: '', password: '' };

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    $form.touched = true;
    if (!$form.valid) return;
    submitting = true;
    const user = await login(formData);
    if (user) {
      authenticate(user);
      navigate('/panel/dashboard');
    }
    submitting = false;
  };
</script>

<form class="flex flex-col space-y-6" use:form>
  <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
    Inicio Sesión
  </h3>
  <Label class="space-y-2">
    <span>Correo electrónico</span>
    <Input bind:value={formData.email} type="email" name="email" required />
  </Label>
  <Label class="space-y-2">
    <span>Contraseña</span>
    <Input
      bind:value={formData.password}
      type="password"
      name="password"
      required
    />
  </Label>
  <div class="flex items-start">
    <Checkbox>Recordar</Checkbox>
    <a
      href="/"
      class="ml-auto text-sm text-green-700 hover:underline dark:text-green-500"
    >
      Olvidaste tu contraseña?
    </a>
  </div>
  <hr class="dark:border-white/10" />
  <GradientButton
    on:click={onSubmit}
    disabled={submitting}
    color="green"
    type="submit"
    class="w-full1"
  >
    {#if submitting}
      <Spinner class="mr-3" color="white" size="4" />
      Iniciando sesión...
    {:else}
      Iniciar sesión
    {/if}
  </GradientButton>
</form>
