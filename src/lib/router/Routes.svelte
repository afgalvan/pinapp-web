<script>
  import { Route } from 'svelte-navigator';
  import LazyRoute from '../router/LazyRoute.svelte';
  import Redirect from './Redirect.svelte';
</script>

<LazyRoute path="/" this={() => import('../../app/home/pages/Home.svelte')} />
<Route component={Redirect} />
