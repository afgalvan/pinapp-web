<script>
  import { Section, Maintenance } from 'flowbite-svelte-blocks';
  import Grids from '../components/shared/Grids.svelte';
  import Sidebar from '../components/shared/Sidebar.svelte';
  import Chart from '../components/stocks/Chart.svelte';
  import Banner from '../components/atomic/Banner.svelte';
  import GradientCard from '../components/atomic/GradientCard.svelte';
</script>

<div class="grid">
  <Banner />
</div>

<div class="grid grid-flow-col">
  <Sidebar />
  <Grids class="max-w-full max-h-screen overflow-auto">
    <div class="grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 grid-cols-1">
      <Section sectionClass="min-h-[73.6vh]" name="maintenance">
        <Maintenance>
          <svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
          <svelte:fragment slot="paragraph">
            We are working on this feature
          </svelte:fragment>
        </Maintenance>
      </Section>
      <GradientCard dotted>

        <Chart />
      </GradientCard>
    </div>
  </Grids>
</div>
