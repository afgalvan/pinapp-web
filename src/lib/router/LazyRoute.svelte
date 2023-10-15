<script lang="ts">
  import { Spinner } from 'flowbite-svelte';
  import Lazy from './Lazy.svelte';
  import { Route } from 'svelte-navigator';

  export let path: string;
  let loadComponent: Function;

  export { loadComponent as this };
</script>

<Route {path} primary={false}>
  <Lazy this={loadComponent}>
    <div
      slot="loading"
      class="w-screen h-screen grid items-center justify-center justify-items-center"
    >
      <Spinner />
    </div>
    <svelte:fragment slot="component" let:Component>
      <Component />
    </svelte:fragment>
  </Lazy>
</Route>
