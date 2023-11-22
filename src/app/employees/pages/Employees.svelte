<script lang="ts">
  import type { Employee } from '../models/employee';
  import { getEmployees } from '../services/employee';
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
  import EmployeeForm from '../components/EmployeeModalForm.svelte';

  let paginationData: Employee[] = [];
  let totalEmployees = 0;
  let searchTerm = '';

  $: getEmployees().then((data) => {
    paginationData = data;
    totalEmployees = paginationData.length;
  });

  let currentPosition = 0;
  const employeesPerPage = 6;
  const showPage = 5;
  let totalPages = 0;
  let pagesToShow: any[] = [];
  let startPage: number;
  let endPage: number;

  const updateDataAndPagination = () => {
    const currentPageEmployees = paginationData.slice(
      currentPosition,
      currentPosition + employeesPerPage
    );
    renderPagination(currentPageEmployees.length);
  };

  $: loadNextPage = () => {
    if (currentPosition + employeesPerPage < paginationData.length) {
      currentPosition += employeesPerPage;
      updateDataAndPagination();
    }
  };

  const loadPreviousPage = () => {
    if (currentPosition - employeesPerPage >= 0) {
      currentPosition -= employeesPerPage;
      updateDataAndPagination();
    }
  };

  const renderPagination = (totalEmployees: number) => {
    totalPages = Math.ceil(paginationData.length / employeesPerPage);
    const currentPage = Math.ceil((currentPosition + 1) / employeesPerPage);

    startPage = currentPage - Math.floor(showPage / 2);
    startPage = Math.max(1, startPage);
    endPage = Math.min(startPage + showPage - 1, totalPages);

    pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const goToPage = (pageNumber: number) => {
    currentPosition = (pageNumber - 1) * employeesPerPage;
    updateDataAndPagination();
  };

  $: startRange = currentPosition + 1;
  $: endRange = Math.min(currentPosition + employeesPerPage, totalEmployees);

  $: currentPageEmployees = paginationData.slice(
    currentPosition,
    currentPosition + employeesPerPage
  );

  $: filteredEmployees = paginationData.filter(
    (employee) =>
      employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      employee.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  onMount(() => {
    renderPagination(paginationData.length);
  });
</script>

<div class="mx-5 flex flex-col gap-5">
  <div class="flex justify-between">
    <Searchbar placeholder="Buscar empleado" bind:searchString={searchTerm} />
    <EmployeeForm />
  </div>

  <Table hoverable={true} shadow>
    <TableHead>
      <TableHeadCell padding="px-4 py-3" scope="col">#</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Cédula</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Nombre</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Apellido</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Teléfono</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col">Estado</TableHeadCell>
      <TableHeadCell padding="px-4 py-3" scope="col"></TableHeadCell>
    </TableHead>
    <TableBody>
      {#if searchTerm !== ''}
        {#each filteredEmployees as employee}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{employee.id}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {employee.identification}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{employee.name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{employee.last_name}</TableBodyCell
            >
            <TableBodyCell tdClass="px-4 py-3">{employee.phone}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if employee.active}
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
        {#each currentPageEmployees as employee}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{employee.id}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">
              {employee.identification}
            </TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3">{employee.name}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{employee.last_name}</TableBodyCell
            >
            <TableBodyCell tdClass="px-4 py-3">{employee.phone}</TableBodyCell>
            <TableBodyCell tdClass="px-4 py-3"
              >{#if employee.active}
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
        >{totalEmployees}</span
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
