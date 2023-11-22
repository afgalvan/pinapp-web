<script lang="ts">
  import { onMount } from 'svelte';
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Button,
    ButtonGroup,
  } from 'flowbite-svelte';
  import {
    ChevronRightOutline,
    ChevronLeftOutline,
  } from 'flowbite-svelte-icons';
  import Searchbar from '$lib/components/atomic/Searchbar.svelte';
  import type { Supplier } from '../models/supplier';
  import { getProviders } from '../services/provider';
  import ProviderModalForm from '../components/ProviderModalForm.svelte';

  let paginationData: Supplier[] = [];
  let totalProviders = 0;
  let searchTerm = '';

  $: getProviders().then((data) => {
    paginationData = data;
    totalProviders = paginationData.length;
  });

  let currentPosition = 0;
  const providersPerPage = 6;
  const showPage = 5;
  let totalPages = 0;
  let pagesToShow: any[] = [];
  let startPage: number;
  let endPage: number;

  const updateDataAndPagination = () => {
    const currentPageProviders = paginationData.slice(
      currentPosition,
      currentPosition + providersPerPage
    );
    renderPagination(currentPageProviders.length);
  };

  $: loadNextPage = () => {
    if (currentPosition + providersPerPage < paginationData.length) {
      currentPosition += providersPerPage;
      updateDataAndPagination();
    }
  };

  const loadPreviousPage = () => {
    if (currentPosition - providersPerPage >= 0) {
      currentPosition -= providersPerPage;
      updateDataAndPagination();
    }
  };

  const renderPagination = (totalProviders: number) => {
    totalPages = Math.ceil(paginationData.length / providersPerPage);
    const currentPage = Math.ceil((currentPosition + 1) / providersPerPage);

    startPage = currentPage - Math.floor(showPage / 2);
    startPage = Math.max(1, startPage);
    endPage = Math.min(startPage + showPage - 1, totalPages);

    pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const goToPage = (pageNumber: number) => {
    currentPosition = (pageNumber - 1) * providersPerPage;
    updateDataAndPagination();
  };

  $: startRange = currentPosition + 1;
  $: endRange = Math.min(currentPosition + providersPerPage, totalProviders);

  $: currentPageProviders = paginationData.slice(
    currentPosition,
    currentPosition + providersPerPage
  );

  $: filteredProviders = paginationData.filter(
    (provider) =>
      provider.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  onMount(() => {
    renderPagination(paginationData.length);
  });
</script>

<div class="mx-5 flex flex-col gap-5">
  <div class="flex justify-between">
    <Searchbar
      placeholder="Buscar distribuidor"
      bind:searchString={searchTerm}
    />
    <ProviderModalForm />
  </div>

  <Table hoverable={true}>
    <TableHead>
      <TableHeadCell padding="px-4 py-3" scope="col">Nombre</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Telefono</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Activo</TableHeadCell>
    </TableHead>
    <TableBody>
      {#if searchTerm !== ''}
        {#each filteredProviders as provider}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{provider.name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{provider.phone}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if provider.active}
                Activo
              {:else}
                Inactivo
              {/if}
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {:else}
        {#each currentPageProviders as provider}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{provider.name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{provider.phone}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if provider.active}
                Activo
              {:else}
                Inactivo
              {/if}</TableBodyCell
            >
          </TableBodyRow>
        {/each}
      {/if}
    </TableBody>
  </Table>
  <div
    class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
    aria-label="Table navigation"
  >
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
      Showing
      <span class="font-semibold text-gray-900 dark:text-white"
        >{startRange}-{endRange}</span
      >
      of
      <span class="font-semibold text-gray-900 dark:text-white"
        >{totalProviders}</span
      >
    </span>
    <ButtonGroup>
      <Button on:click={loadPreviousPage} disabled={currentPosition === 0}
        ><ChevronLeftOutline size="xs" class="m-1.5" /></Button
      >
      {#each pagesToShow as pageNumber}
        <Button on:click={() => goToPage(pageNumber)}>{pageNumber}</Button>
      {/each}
      <Button on:click={loadNextPage} disabled={totalPages === endPage}
        ><ChevronRightOutline size="xs" class="m-1.5" /></Button
      >
    </ButtonGroup>
  </div>
</div>
