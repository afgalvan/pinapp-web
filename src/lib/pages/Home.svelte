<script lang="ts">
  import Hero from '../components/Hero.svelte';
  import GradientCard from '../components/atomic/GradientCard.svelte';
  import DataTable from '../components/shared/DataTable.svelte';
  import { t } from '../../locales/i18n';
</script>

<Hero />

<div id="app-zone" class="wrapper">
  <section class="row">
    <GradientCard dotted class="max-w-screen-md">
      <p
        class="mr-10 z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
      >
        {$t('app.dummy')}
      </p>
      <DataTable />
    </GradientCard>
  </section>
</div>

<style>
  .row {
    display: grid;
    place-items: center;
    padding: 40px 0px;

    background-size: 100px 100px;
    z-index: -2;
    background-image: url('/bg-grid.png');
    background-position-y: -9px;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      6%,
      white,
      96%,
      transparent
    );
    mask-image: linear-gradient(
      to bottom,
      transparent,
      6%,
      white,
      96%,
      transparent
    );
  }
</style>
