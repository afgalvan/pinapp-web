<script lang="ts">
  import { Router } from 'svelte-navigator';
  import Header from '$lib/components/segments/Header.svelte';
  import Footer from '$lib/components/segments/Footer.svelte';
  import Routes from '$lib/router/Routes.svelte';
</script>

<Router>
  <header class="bg-white dark:bg-slate-950">
    <Header />
  </header>

  <main class="bg-white dark:bg-slate-950 overflow-auto pt-24 content-center">
    <Routes />
    <Footer />
  </main>
</Router>
