<script lang="ts">
  import {
    Sidebar,
    SidebarCta,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
  } from 'flowbite-svelte';
  import { Link, useLocation } from 'svelte-navigator';

  const location = useLocation();

  $: activeUrl = $location.pathname;
</script>

<Sidebar
  {activeUrl}
  asideClass="w-64"
  activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-slate-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-900"
>
  <SidebarWrapper
    class="h-full min-h-[80vh] max-h-screen overflow-auto border border-light-bd dark:border-dark-bd bg-light-card dark:bg-dark-card flex flex-col justify-between"
  >
    <SidebarGroup ulClass="grid gap-2">
      <Link to="/panel/dashboard">
        <SidebarItem label="Dashboard" href="/panel/dashboard">
          <svelte:fragment slot="icon">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
              />
            </svg>
          </svelte:fragment>
        </SidebarItem>
      </Link>
      <Link to="/panel/inventory">
        <SidebarItem label="Inventario" href="/panel/inventory">
          <svelte:fragment slot="icon">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
              />
            </svg>
          </svelte:fragment>
        </SidebarItem>
      </Link>
    </SidebarGroup>

    <SidebarGroup class="relative">
      <SidebarCta label="Alpha">
        <p class="mb-3 text-sm text-primary-900 dark:text-primary-400">
          Pinapp se encuentra en fase de desarrollo. Si encuentras algún error,
          por favor reportalo.
        </p>
      </SidebarCta>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
