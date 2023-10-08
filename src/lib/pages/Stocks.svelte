<script>
  import { Section, Maintenance } from 'flowbite-svelte-blocks';
  import Grids from '../components/shared/Grids.svelte';
</script>

<Grids>
  <Section sectionClass="min-h-[73.6vh]" name="maintenance">
    <Maintenance>
      <svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
      <svelte:fragment slot="paragraph">
        Our Enterprise administrators are performing scheduled maintenance.
      </svelte:fragment>
    </Maintenance>
  </Section>
</Grids>
