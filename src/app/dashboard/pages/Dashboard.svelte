<script>
  import GradientCard from '$lib/components/atomic/GradientCard.svelte';
  import Grid from '$lib/components/atomic/Grid.svelte';
  import MetallicText from '$lib/components/atomic/MetallicText.svelte';
  import Meteor from '$lib/components/atomic/Meteor.svelte';
</script>

<Grid class="h-[80vh]" center>
  <GradientCard class="h-[500px] w-[500px]">
    <Meteor>
      <MetallicText>Dashboard</MetallicText>
    </Meteor>
  </GradientCard>
</Grid>
