<script lang="ts">
  import {
    DarkMode,
    NavLi,
    Navbar,
    NavBrand,
    NavUl,
    NavHamburger,
    GradientButton,
  } from 'flowbite-svelte';
  import {
    SunSolid,
    MoonSolid,
    ArrowLeftToBracketOutline,
  } from 'flowbite-svelte-icons';
  import { link } from 'svelte-navigator';
</script>

<Navbar
  navClass="bg-slate-900 dark:bg-slate-950 px-2 sm:px-4 py-2.5 absolute w-full z-[100] top-0 left-0 border-b"
  let:hidden
  let:toggle
  color="form"
>
  <a class="flex" href="/" use:link>
    <img src="/pinapp-letter.svg" class="h-8" alt="Pinapp Logo" />
  </a>

  <div class="flex md:order-2">
    <DarkMode
      class="ml-3 py-0 text-lg hover:bg-slate-800 dark:hover:bg-slate-900 focus:ring-gray-700"
    >
      <svelte:fragment slot="lightIcon">
        <SunSolid />
      </svelte:fragment>
      <svelte:fragment slot="darkIcon">
        <MoonSolid />
      </svelte:fragment>
    </DarkMode>
    <NavUl {hidden}>
      <NavLi>
        <a href="/#">
          <GradientButton size="sm" color="green" pill>
            <ArrowLeftToBracketOutline class="w-4 h-4 mr-2" />
            Iniciar Sesión
          </GradientButton>
        </a>
      </NavLi>
    </NavUl>

    <NavHamburger on:click={toggle} />
  </div>
</Navbar>
