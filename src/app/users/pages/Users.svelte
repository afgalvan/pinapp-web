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
    EditOutline,
  } from 'flowbite-svelte-icons';
  import Searchbar from '$lib/components/atomic/Searchbar.svelte';
  import type { User } from '../models/user';
  import { getUsers } from '../services/users-service';
  import UserModalForm from '../components/UserForm.svelte';

  let paginationData: User[] = [];
  let totalUsers = 0;
  let searchTerm = '';

  onMount(() => {
    getUsers().then((data) => {
      paginationData = data;
      totalUsers = paginationData.length;
    });
    renderPagination(paginationData.length);
  });

  let currentPosition = 0;
  const usersPerPage = 6;
  const showPage = 5;
  let totalPages = 0;
  let pagesToShow: any[] = [];
  let startPage: number;
  let endPage: number;

  const updateDataAndPagination = () => {
    const currentPageUsers = paginationData.slice(
      currentPosition,
      currentPosition + usersPerPage
    );
    renderPagination(currentPageUsers.length);
  };

  $: loadNextPage = () => {
    if (currentPosition + usersPerPage < paginationData.length) {
      currentPosition += usersPerPage;
      updateDataAndPagination();
    }
  };

  const loadPreviousPage = () => {
    if (currentPosition - usersPerPage >= 0) {
      currentPosition -= usersPerPage;
      updateDataAndPagination();
    }
  };

  const renderPagination = (totalUsers: number) => {
    totalPages = Math.ceil(paginationData.length / usersPerPage);
    const currentPage = Math.ceil((currentPosition + 1) / usersPerPage);

    startPage = currentPage - Math.floor(showPage / 2);
    startPage = Math.max(1, startPage);
    endPage = Math.min(startPage + showPage - 1, totalPages);

    pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const goToPage = (pageNumber: number) => {
    currentPosition = (pageNumber - 1) * usersPerPage;
    updateDataAndPagination();
  };

  $: startRange = currentPosition + 1;
  $: endRange = Math.min(currentPosition + usersPerPage, totalUsers);

  $: currentPageUsers = paginationData.slice(
    currentPosition,
    currentPosition + usersPerPage
  );

  $: filteredUsers = paginationData.filter(
    (user) => user.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
</script>

<div class="mx-5 flex flex-col gap-5">
  <div class="flex justify-between">
    <Searchbar placeholder="Buscar usuario" bind:searchString={searchTerm} />
    <UserModalForm />
  </div>

  <Table hoverable shadow>
    <TableHead>
      <TableHeadCell padding="px-4 py-3" scope="col">#</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">
        Correo Electrónico
      </TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col"></TableHeadCell>
    </TableHead>
    <TableBody>
      {#if searchTerm !== ''}
        {#each filteredUsers as user, idx}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{idx + 1}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{user.email}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              <Button color="purple" outline pill class="!p-2" size="sm">
                <EditOutline class="h-3.5 w-3.5" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {:else}
        {#each currentPageUsers as user, idx}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{idx + 1}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{user.email}</TableBodyCell>
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
        >{totalUsers}</span
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
