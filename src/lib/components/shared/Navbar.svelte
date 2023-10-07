<script lang="ts">
  import {
    DarkMode,
    NavLi,
    Navbar,
    NavBrand,
    NavUl,
    NavHamburger,
    GradientButton,
    Dropdown,
    DropdownItem,
  } from 'flowbite-svelte';
  import {
    SunSolid,
    MoonSolid,
    ChevronDownSolid,
    GithubSolid,
  } from 'flowbite-svelte-icons';
  import { navigate, useLocation } from 'svelte-navigator';
  import { locale } from '../../../locales/i18n';

  const location = useLocation();
  let path: string;
  $: {
    path = $location.pathname.slice(3).replace('/', '');
  }

  let dropdownOpened = false;
</script>

<Navbar
  navClass="bg-slate-900 dark:bg-slate-950 px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
  let:hidden
  let:toggle
  color="form"
>
  <NavBrand href={`/${$locale}/`}>
    <span
      class="self-center whitespace-nowrap text-xl font-semibold text-white"
    >
      Inicio
    </span>
  </NavBrand>

  <div class="flex md:order-2">
    <DarkMode
      class="ml-3 py-0 text-lg hover:bg-slate-800 dark:hover:bg-slate-900"
    >
      <svelte:fragment slot="lightIcon">
        <SunSolid />
      </svelte:fragment>
      <svelte:fragment slot="darkIcon">
        <MoonSolid />
      </svelte:fragment>
    </DarkMode>
    <NavUl {hidden}>
      <NavLi id="nav-menu1" class="cursor-pointer">
        <button
          id="states-button"
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          {#if $locale == 'es'}
            <img src="/spain.svg" alt="spain flag" />
          {:else}
            <img src="/uk.svg" alt="uk flag" />
          {/if}
          <ChevronDownSolid class="w-3 h-3 ml-2" />
        </button>
        <Dropdown
          class="bg-slate-800 dark:bg-slate-900 rounded-lg"
          bind:open={dropdownOpened}
          triggeredBy="#states-button"
        >
          <DropdownItem
            on:click={() => {
              dropdownOpened = false;
              const desiredLang = $locale == 'es' ? 'en' : 'es';
              localStorage.setItem('lang', desiredLang);
              locale.update(() => desiredLang);
              navigate(`/${desiredLang}/${path}`);
            }}
            class="flex items-center hover:bg-slate-700"
          >
            {#if $locale == 'es'}
              <img src="/uk.svg" alt="uk flag" />
            {:else}
              <img src="/spain.svg" alt="spain flag" />
            {/if}
          </DropdownItem>
        </Dropdown>
      </NavLi>
      <NavLi>
        <a href="https://github.com/afgalvan/auth-api-fetch">
          <GradientButton size="sm" color="green" pill>
            <GithubSolid class="w-4 h-4 mr-2" />
            GitHub
          </GradientButton>
        </a>
      </NavLi>
    </NavUl>

    <NavHamburger on:click={toggle} />
  </div>
</Navbar>
