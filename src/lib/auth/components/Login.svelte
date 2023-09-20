<script lang="ts">
  import { Section, Register } from 'flowbite-svelte-blocks';
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
</script>

<Section name="login">
  <Register href="/">
    <svelte:fragment slot="top">Sabores del Valle</svelte:fragment>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Change Password</h3>
        <Label class="space-y-2">
          <span>Correo electrónico</span>
          <Input type="email" name="email" required />
        </Label>
        <Label class="space-y-2">
          <span>Contraseña</span>
          <Input type="password" name="password" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>Remember me</Checkbox>
          <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >Forgot password?</a
          >
        </div>
        <Button type="submit" class="w-full1">Sign in</Button>
      </form>
    </div>
  </Register>
</Section>
