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
  <Grids class="max-w-full">
    <div class="grid grid-cols-2 grid-rows-1">
      <Section sectionClass="min-h-[73.6vh]" name="maintenance">
        <Maintenance>
          <svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
          <svelte:fragment slot="paragraph">
            Our Enterprise administrators are performing scheduled maintenance.
          </svelte:fragment>
        </Maintenance>
      </Section>
      <GradientCard dotted>
        <Chart />
      </GradientCard>
    </div>
  </Grids>
</div>
