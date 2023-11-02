<script>
  import { Route } from 'svelte-navigator';
  import LazyRoute from '../router/LazyRoute.svelte';
  import Redirect from './Redirect.svelte';
  import AppRoute from './AppRoute.svelte';
</script>

<LazyRoute path="/" this={() => import('../../app/home/pages/Home.svelte')} />
<LazyRoute
  path="/auth/login"
  this={() => import('../../app/login/pages/Login.svelte')}
/>
<AppRoute>
  <LazyRoute
    path="dashboard"
    this={() => import('../../app/dashboard/pages/Dashboard.svelte')}
    requiresAuth
  />
  <LazyRoute
    path="inventory"
    this={() => import('../../app/inventory/pages/Inventory.svelte')}
    requiresAuth
  />
</AppRoute>
<Route component={Redirect} />
