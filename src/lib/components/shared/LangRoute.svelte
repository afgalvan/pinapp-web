<script lang="ts">
  import { Route } from 'svelte-navigator';
  export let path: string;
  export let component: Function | undefined = undefined;
</script>

<Route path={`/es${path}`} primary={false} {component}><slot /></Route>
<Route path={`/en${path}`} primary={false} {component}><slot /></Route>
