<script lang="ts">
  import { Router } from 'svelte-navigator';
  import Navbar from '$lib/components/segments/Header.svelte';
  import Footer from '$lib/components/segments/Footer.svelte';
  import Routes from '$lib/router/Routes.svelte';
</script>

<Router>
  <header class="bg-white dark:bg-slate-950">
    <Navbar />
  </header>

  <div
    style="max-height:100vh;"
    class="bg-white dark:bg-slate-950 overflow-auto"
  >
    <main class="px-8 pt-24 flex flex-col flex-wrap content-center">
      <Routes />
      <Footer />
    </main>
  </div>
</Router>
