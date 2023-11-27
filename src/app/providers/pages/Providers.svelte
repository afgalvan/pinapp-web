<script lang="ts">
  import type { Supplier } from '../models/supplier';
  import { getProviders } from '../services/provider';
  import ProviderModalForm from '../components/ProviderModalForm.svelte';
  import Table from '$lib/components/table/Table.svelte';
  import type { Column } from '$lib/components/table/TableColumns';

  const filterFunction = (searchTerm: string, provider: Supplier) =>
    provider.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;

  const columns: Column<Supplier>[] = [
    {
      name: 'Nombre',
      uid: 'name',
    },
    {
      name: 'Teléfono',
      uid: 'phone',
    },
  ];
</script>

<Table title="Proveedor" {columns} {filterFunction} dataSource={getProviders}>
  <svelte:fragment>
    <ProviderModalForm />
  </svelte:fragment>
</Table>
