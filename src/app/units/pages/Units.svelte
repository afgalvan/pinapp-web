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
  import type { Units } from '../models/units';
  import { getUnits } from '../services/units';
  import UnitModalForm from '../components/UnitModalForm.svelte';

  let paginationData: Units[] = [];
  let totalUnits = 0;
  let searchTerm = '';

  onMount(() => {
    getUnits().then((data) => {
      paginationData = data;
      totalUnits = paginationData.length;
    });
    renderPagination(paginationData.length);
  });

  let currentPosition = 0;
  const unitsPerPage = 6;
  const showPage = 5;
  let totalPages = 0;
  let pagesToShow: any[] = [];
  let startPage: number;
  let endPage: number;

  const updateDataAndPagination = () => {
    const currentPageUnits = paginationData.slice(
      currentPosition,
      currentPosition + unitsPerPage
    );
    renderPagination(currentPageUnits.length);
  };

  $: loadNextPage = () => {
    if (currentPosition + unitsPerPage < paginationData.length) {
      currentPosition += unitsPerPage;
      updateDataAndPagination();
    }
  };

  const loadPreviousPage = () => {
    if (currentPosition - unitsPerPage >= 0) {
      currentPosition -= unitsPerPage;
      updateDataAndPagination();
    }
  };

  const renderPagination = (totalUnits: number) => {
    totalPages = Math.ceil(paginationData.length / unitsPerPage);
    const currentPage = Math.ceil((currentPosition + 1) / unitsPerPage);

    startPage = currentPage - Math.floor(showPage / 2);
    startPage = Math.max(1, startPage);
    endPage = Math.min(startPage + showPage - 1, totalPages);

    pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const goToPage = (pageNumber: number) => {
    currentPosition = (pageNumber - 1) * unitsPerPage;
    updateDataAndPagination();
  };

  $: startRange = currentPosition + 1;
  $: endRange = Math.min(currentPosition + unitsPerPage, totalUnits);

  $: currentPageUnits = paginationData.slice(
    currentPosition,
    currentPosition + unitsPerPage
  );

  $: filteredUnits = paginationData.filter(
    (unit) =>
      unit.short_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
</script>

<div class="mx-5 flex flex-col gap-5">
  <div class="flex justify-between">
    <Searchbar
      placeholder="Buscar distribuidor"
      bind:searchString={searchTerm}
    />
    <UnitModalForm />
  </div>

  <Table hoverable={true}>
    <TableHead>
      <TableHeadCell padding="px-4 py-3" scope="col">Nombre</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Nombre largo</TableHeadCell
      >
      <TableHeadCell padding="px-4 py-3" scope="col">Activo</TableHeadCell>
    </TableHead>
    <TableBody>
      {#if searchTerm !== ''}
        {#each filteredUnits as unit}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{unit.short_name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{unit.large_name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if unit.active}
                Activo
              {:else}
                Inactivo
              {/if}
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {:else}
        {#each currentPageUnits as unit}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{unit.short_name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{unit.large_name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if unit.active}
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
        >{totalUnits}</span
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
