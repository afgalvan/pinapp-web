<script lang="ts">
  import type { Unit } from '../models/unit';
  import { getUnits } from '../services/units';
  import UnitModalForm from '../components/UnitForm.svelte';
  import Table from '$lib/components/table/Table.svelte';
  import type { Column } from '$lib/components/table/TableColumns';

  const filterFunction = (searchTerm: string, unit: Unit) =>
    unit.short_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;

  const columns: Column<Unit>[] = [
    {
      name: 'Nombre completo',
      uid: 'large_name',
    },
    {
      name: 'Símbolo',
      uid: 'short_name',
    },
  ];
</script>

<Table
  title="Unidad"
  {columns}
  {filterFunction}
  dataSource={getUnits}
  let:reloadTable
>
  <svelte:fragment>
    <UnitModalForm {reloadTable} />
  </svelte:fragment>
</Table>
