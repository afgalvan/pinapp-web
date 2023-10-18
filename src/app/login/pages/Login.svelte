<script lang="ts">
  import GradientCard from '$lib/components/atomic/GradientCard.svelte';
  import Loading from '$lib/components/atomic/Loading.svelte';
  import Grid from '$lib/components/atomic/Grid.svelte';
  import { auth } from '$lib/stores/auth';
  import { Section } from 'flowbite-svelte-blocks';
  import { navigate, link } from 'svelte-navigator';
  import LoginForm from '../components/segments/LoginForm.svelte';

  let isLoading = true;
  $: {
    const isAuthenticated = $auth.isAuthenticated;
    if (isAuthenticated) {
      navigate('/panel/dashboard');
    }
    isLoading = false;
  }
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

      <GradientCard class="h-full md:mt-0 xl:p-0 items-center w-[600px]">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
          <LoginForm />
        </div>
      </GradientCard>
    </Section>
  </Grid>
{/if}
