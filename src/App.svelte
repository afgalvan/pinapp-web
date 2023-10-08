<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Default from './lib/router/Default.svelte';
  import Navbar from './lib/components/shared/Navbar.svelte';
  import Footer from './lib/components/shared/Footer.svelte';
  import LazyLangRoute from './lib/components/shared/LazyLangRoute.svelte';
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
      <LazyLangRoute path="/" this={() => import('./lib/pages/Home.svelte')} />
      <LazyLangRoute
        path="/stocks"
        this={() => import('./lib/pages/Stocks.svelte')}
      />
      <Route component={Default} />
      <Footer />
    </main>
  </div>
</Router>
