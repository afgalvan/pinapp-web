<script>
  import Sidebar from '$lib/components/segments/Sidebar.svelte';

  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { Route } from 'svelte-navigator';
  import Redirect from './Redirect.svelte';
</script>

<Route primary={false} path="panel/*">
  <div class="flex h-full">
    <Sidebar />
    <div class="h-full w-full">
      <!-- <Breadcrumb aria-label="Pinapp breadcrumb">
        <BreadcrumbItem href="#" home>Dashboard</BreadcrumbItem>
      </Breadcrumb> -->
      <slot />
    </div>
  </div>
  <Route primary={false}>
    <Redirect to="panel/dashboard" />
  </Route>
</Route>
