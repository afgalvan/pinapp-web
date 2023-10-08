<script lang="ts">
  import {
    TableBody,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableSearch,
    Card,
    ImagePlaceholder,
    Modal,
  } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
  import TableCell from '../atomic/TableCell.svelte';

  let searchTerm = '';
  let items = [
    { id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
    { id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
    { id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
    { id: 4, maker: 'Saab', type: 'IJK', make: 2020 },
  ];
  $: filteredItems = items.filter(
    (item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  let openRow: number | null;
  let details: any;

  const toggleRow = (i: number | null) => {
    openRow = openRow === i ? null : i;
  };
</script>

<Card size="lg" class="sm:p-0 p-0">
  <TableSearch
    placeholder="Search by maker name"
    hoverable={true}
    bind:inputValue={searchTerm}
  >
    <TableHead>
      <TableHeadCell>ID</TableHeadCell>
      <TableHeadCell>Maker</TableHeadCell>
      <TableHeadCell>Type</TableHeadCell>
      <TableHeadCell>Make</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each filteredItems as item, i}
        <TableBodyRow on:click={() => toggleRow(i)}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.maker}</TableCell>
          <TableCell>{item.type}</TableCell>
          <TableCell>{item.make}</TableCell>
        </TableBodyRow>
        {#if openRow === i}
          <TableBodyRow on:dblclick={() => (details = item)}>
            <TableCell colspan={`${Object.keys(item).length}`} class="p-0">
              <div
                class="px-2 py-3"
                transition:slide={{ duration: 300, axis: 'y' }}
              >
                <ImagePlaceholder />
              </div>
            </TableCell>
          </TableBodyRow>
        {/if}
      {/each}
    </TableBody>
  </TableSearch>
  <Modal title={details?.name} open={!!details} autoclose outsideclose>
    <ImagePlaceholder />
  </Modal>
</Card>
