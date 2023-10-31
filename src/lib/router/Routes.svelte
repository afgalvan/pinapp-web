<script>
  import { Route } from 'svelte-navigator';
  import LazyRoute from '../router/LazyRoute.svelte';
  import Redirect from './Redirect.svelte';
</script>

<LazyRoute path="/" this={() => import('../../app/home/pages/Home.svelte')} />
<LazyRoute
  path="/auth/login"
  this={() => import('../../app/login/pages/Login.svelte')}
/>
<LazyRoute
  path="/panel/dashboard"
  this={() => import('../../app/dashboard/pages/Dashboard.svelte')}
  requiresAuth
/>
<LazyRoute
  path="/panel/inventory"
  this={() => import('../../app/inventory/pages/Inventory.svelte')}
  requiresAuth
/>
<Route component={Redirect} />
