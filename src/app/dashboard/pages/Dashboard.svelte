<script>
  import GradientCard from '$lib/components/atomic/GradientCard.svelte';
  import Grid from '$lib/components/atomic/Grid.svelte';
  import MetallicText from '$lib/components/atomic/MetallicText.svelte';
  import Meteor from '$lib/components/atomic/Meteor.svelte';
  import { Card } from 'flowbite-svelte';
</script>

<Grid class="h-[80vh]">
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center pt-4"
  >
    <Card>
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </Card>
    <Card>
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </Card>
    <Card>
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </Card>
    <Card>
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </Card>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 justify-items-center pt-4"
  >
    <GradientCard center class="h-[300px] w-[300px]">
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </GradientCard>
    <GradientCard center class="h-[300px] w-[300px]">
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </GradientCard>
    <GradientCard center class="h-[300px] w-[300px]">
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </GradientCard>
    <GradientCard center class="h-[300px] w-[300px]">
      <MetallicText class="text-xl">Dashboard</MetallicText>
    </GradientCard>
  </div>
  <div class="pt-4 pb-5 px-6">
    <GradientCard class="h-[500px] w-full">
      <Meteor>
        <MetallicText>Dashboard</MetallicText>
      </Meteor>
    </GradientCard>
  </div>
</Grid>
