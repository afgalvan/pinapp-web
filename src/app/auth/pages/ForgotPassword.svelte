<script lang="ts">
  import ForgotPasswordForm from '../components/segments/ForgotPasswordForm.svelte';
  import Grid from '$lib/components/atomic/Grid.svelte';
  import { Card } from 'flowbite-svelte';
</script>

<Grid class="h-[80vh]" center>
  <Card size="lg">
    <ForgotPasswordForm />
  </Card>
</Grid>
