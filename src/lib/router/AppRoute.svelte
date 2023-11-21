<script>
  import Sidebar from '$lib/components/segments/Sidebar.svelte';

  import { Route } from 'svelte-navigator';
  import Redirect from './Redirect.svelte';
</script>

<Route primary={false} path="panel/*">
  <div class="flex h-full">
    <Sidebar />
    <div class="h-full w-full">
      <slot />
    </div>
  </div>
  <Route primary={false}>
    <Redirect to="panel/dashboard" />
  </Route>
</Route>
