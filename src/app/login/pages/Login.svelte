<script lang="ts">
  import { Section } from 'flowbite-svelte-blocks';
  import { Checkbox, Label, Input, GradientButton } from 'flowbite-svelte';
  import { link, navigate } from 'svelte-navigator';
  import GradientCard from '$lib/components/atomic/GradientCard.svelte';
  import Grid from '$lib/components/atomic/Grid.svelte';
  import Loading from '$lib/components/atomic/Loading.svelte';
  import { login } from '../services/login';

  import { useForm } from 'svelte-use-form';
  import type { User } from '../models/user';
  import { onMount } from 'svelte';
  import { verifyAuthentication } from '$lib/services/verifyAuthentication';

  const form = useForm();

  let formData: User = { email: '', password: '' };

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    $form.touched = true;
    if (!$form.valid) return;
    const succeeded = await login(formData);
    if (succeeded) navigate('/panel/dashboard');
  };

  let isLoading = true;
  onMount(async () => {
    const isAuthenticated = await verifyAuthentication();
    if (isAuthenticated) {
      navigate('/panel/dashboard');
    }
    isLoading = false;
  });
</script>

{#if isLoading}
  <Loading />
{:else}
  <Grid class="h-[80.5vh]" center>
    <Section sectionClass="h-full" name="login">
      <a
        href="/"
        use:link
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="w-8 h-8 mb-4" src="/favicon.svg" alt="logo" />
        inapp
      </a>

      <GradientCard class="md:mt-0 xl:p-0 items-center w-[600px]">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <form class="flex flex-col space-y-6" use:form>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
              Inicio Sesión
            </h3>
            <Label class="space-y-2">
              <span>Correo electrónico</span>
              <Input
                bind:value={formData.email}
                type="email"
                name="email"
                required
              />
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
              color="green"
              type="submit"
              class="w-full1"
            >
              Iniciar sesión
            </GradientButton>
          </form>
        </div>
      </GradientCard>
    </Section>
  </Grid>
{/if}
