<script lang="ts">
  import { getInventory } from '../services/inventory-service';
  import type { Inventory } from '../models/Inventory';
  import InventoryForm from '../components/segments/InventoryForm.svelte';
  import Table from '$lib/components/table/Table.svelte';
  import type { Column } from '$lib/components/table/TableColumns';

  const filterFunction = (searchTerm: string, inventory: Inventory) =>
    inventory.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;

  const columns: Column<Inventory>[] = [
    {
      name: 'Nombre',
      uid: 'name',
    },
    {
      name: 'Stock',
      uid: 'stock_quantity',
      render: (data) => {
        return `${data.stock_quantity} ${data.units_of_measures.short_name}`;
      },
    },
    {
      name: 'Proveedor',
      uid: 'providers.name',
    },
  ];
</script>

<Table title="Inventario" {columns} {filterFunction} dataSource={getInventory}>
  <svelte:fragment>
    <InventoryForm />
  </svelte:fragment>
</Table>
