<script lang="ts">
  import GradientCard from '$lib/components/atomic/GradientCard.svelte';
  import Loading from '$lib/components/atomic/Loading.svelte';
  import Grid from '$lib/components/atomic/Grid.svelte';
  import { auth } from '$lib/shared';
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
  <Grid class="w-full h-[800px]" center>
    <div class="grid place-content-center">
      <a
        href="/"
        use:link
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="w-8 h-8 mb-4" src="/favicon.svg" alt="P letter logo" />
        inapp
      </a>
    </div>

    <GradientCard class="p-0 pt-6 pb-8">
      <LoginForm />
    </GradientCard>
  </Grid>
{/if}
