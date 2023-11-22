<script lang="ts">
  import { onMount } from 'svelte';
  import { EditOutline } from 'flowbite-svelte-icons';

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
  import { getInventory } from '../services/inventory-service';
  import type { Inventory } from '../models/Inventory';
  import InventoryForm from '../components/segments/InventoryForm.svelte';

  let paginationData: Inventory[] = [];
  let totalInventory = 0;
  let searchTerm = '';

  $: getInventory().then((data) => {
    paginationData = data;
    totalInventory = paginationData.length;
  });

  let currentPosition = 0;
  const inventorysPerPage = 6;
  const showPage = 5;
  let totalPages = 0;
  let pagesToShow: any[] = [];
  let startPage: number;
  let endPage: number;

  const updateDataAndPagination = () => {
    const currentPageInventory = paginationData.slice(
      currentPosition,
      currentPosition + inventorysPerPage
    );
    renderPagination(currentPageInventory.length);
  };

  $: loadNextPage = () => {
    if (currentPosition + inventorysPerPage < paginationData.length) {
      currentPosition += inventorysPerPage;
      updateDataAndPagination();
    }
  };

  const loadPreviousPage = () => {
    if (currentPosition - inventorysPerPage >= 0) {
      currentPosition -= inventorysPerPage;
      updateDataAndPagination();
    }
  };

  const renderPagination = (totalInventory: number) => {
    totalPages = Math.ceil(paginationData.length / inventorysPerPage);
    const currentPage = Math.ceil((currentPosition + 1) / inventorysPerPage);

    startPage = currentPage - Math.floor(showPage / 2);
    startPage = Math.max(1, startPage);
    endPage = Math.min(startPage + showPage - 1, totalPages);

    pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const goToPage = (pageNumber: number) => {
    currentPosition = (pageNumber - 1) * inventorysPerPage;
    updateDataAndPagination();
  };

  $: startRange = currentPosition + 1;
  $: endRange = Math.min(currentPosition + inventorysPerPage, totalInventory);

  $: currentPageInventory = paginationData.slice(
    currentPosition,
    currentPosition + inventorysPerPage
  );

  $: filteredInventory = paginationData.filter(
    (inventory) =>
      inventory.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  onMount(() => {
    renderPagination(paginationData.length);
  });
</script>

<div class="mx-5 flex flex-col gap-5">
  <div class="flex justify-between">
    <Searchbar
      placeholder="Buscar en inventario"
      bind:searchString={searchTerm}
    />
    <InventoryForm />
  </div>

  <Table hoverable shadow>
    <TableHead>
      <TableHeadCell padding="px-4 py-3" scope="col">#</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Nombre</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Stock</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Proveedor</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Estado</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col"></TableHeadCell>
    </TableHead>
    <TableBody>
      {#if searchTerm !== ''}
        {#each filteredInventory as inventory}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{inventory.id}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {inventory.name}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {inventory.stock_quantity}{inventory.units_of_measures.short_name}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {inventory.providers.name}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if inventory.active}
                Activo
              {:else}
                Inactivo
              {/if}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              <Button color="purple" outline pill class="!p-2" size="sm">
                <EditOutline class="h-3.5 w-3.5" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {:else}
        {#each currentPageInventory as inventory}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{inventory.id}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {inventory.name}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {inventory.stock_quantity}
              {inventory.units_of_measures.short_name}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {inventory.providers.name}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if inventory.active}
                Activo
              {:else}
                Inactivo
              {/if}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              <Button color="purple" outline pill class="!p-2" size="sm">
                <EditOutline class="h-3.5 w-3.5" />
              </Button>
            </TableBodyCell>
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
      Mostrando
      <span class="font-semibold text-gray-900 dark:text-white"
        >{startRange}-{endRange}</span
      >
      de
      <span class="font-semibold text-gray-900 dark:text-white"
        >{totalInventory}</span
      >
    </span>
    <ButtonGroup>
      <Button on:click={loadPreviousPage} disabled={currentPosition === 0}
        ><ChevronLeftOutline size="xs" class="m-1.5" /></Button
      >
      {#each pagesToShow as pageNumber}
        <Button on:click={() => goToPage(pageNumber)}>{pageNumber}</Button>
      {/each}
      <Button on:click={loadNextPage} disabled={totalPages === endPage}>
        <ChevronRightOutline size="xs" class="m-1.5" />
      </Button>
    </ButtonGroup>
  </div>
</div>
