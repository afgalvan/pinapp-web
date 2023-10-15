<script lang="ts">
  import { navigate } from 'svelte-navigator';

  export let defaultRoute = '';

  navigate(`/${defaultRoute}`);
</script>
