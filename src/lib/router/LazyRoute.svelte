<script lang="ts">
  import { Spinner } from 'flowbite-svelte';
  import Lazy from './Lazy.svelte';
  import { Route } from 'svelte-navigator';
  import { fly } from 'svelte/transition';
  import { verifyAuthentication } from '$lib/services/verifyAuthentication';
  import Redirect from './Redirect.svelte';
  import Loading from '$lib/components/atomic/Loading.svelte';
  import { onMount } from 'svelte';

  export let path: string;
  export let requiresAuth = false;

  let loadComponent: Function;
  export { loadComponent as this };

  let isAuthenticated: boolean;
  let loading = true;
  onMount(async () => {
    isAuthenticated = await verifyAuthentication();
    loading = false;
  });
</script>

<Route {path} primary={false}>
  <Lazy this={loadComponent}>
    <svelte:fragment slot="loading">
      <Loading />
    </svelte:fragment>
    <svelte:fragment slot="component" let:Component>
      <div transition:fly={{ y: -200, duration: 500 }} class="h-full w-full">
        {#if !requiresAuth || isAuthenticated}
          <Component />
        {:else if loading}
          <Loading />
        {:else}
          <Redirect to="auth/login" />
        {/if}
      </div>
    </svelte:fragment>
  </Lazy>
</Route>
