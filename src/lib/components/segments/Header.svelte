<script lang="ts">
  import {
    DarkMode,
    NavLi,
    Navbar,
    NavUl,
    NavHamburger,
    GradientButton,
    Badge,
  } from 'flowbite-svelte';
  import {
    SunSolid,
    MoonSolid,
    ArrowLeftToBracketOutline,
  } from 'flowbite-svelte-icons';
  import { link, useLocation } from 'svelte-navigator';
  import SpotlightButton from '../atomic/SpotlightButton.svelte';
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  import type { User } from '@supabase/supabase-js';
  import { logout } from '$lib/services/logout';

  const location = useLocation();

  let path: string;
  $: {
    path = $location.pathname;
  }

  let user: User | null;

  onMount(async () => {
    user = (await supabase.auth.getUser()).data.user;
  });
</script>

<Navbar
  navClass="bg-slate-900 dark:bg-slate-950 px-2 sm:px-4 py-2.5 absolute w-full z-[100] top-0 left-0 border-b"
  let:hidden
  let:toggle
  color="form"
>
  <a class="flex" href="/" use:link>
    <img src="/favicon.svg" class="h-8" alt="Pinapp Logo" />
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
      {#if path === '/' && !user}
        <NavLi>
          <a href="/auth/login" use:link>
            <SpotlightButton>
              <svelte:fragment slot="icon">
                <ArrowLeftToBracketOutline class="w-4 h-4 mr-2" />
              </svelte:fragment>
              Iniciar Sesión
            </SpotlightButton>
          </a>
        </NavLi>
      {/if}
      {#if user}
        <NavLi>
          <Badge class="mr-2" rounded color="indigo">{user.email}</Badge>

          <GradientButton color="green" on:click={logout}>
            <ArrowLeftToBracketOutline class="w-4 h-4 mr-2" />
            Salir
          </GradientButton>
        </NavLi>
      {/if}
    </NavUl>

    {#if path === '/'}
      <NavHamburger on:click={toggle} />
    {/if}
  </div>
</Navbar>
