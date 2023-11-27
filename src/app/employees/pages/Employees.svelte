<script lang="ts">
  import type { Employee } from '../models/employee';
  import { getEmployees } from '../services/employee';
  import EmployeeForm from '../components/EmployeeModalForm.svelte';
  import Table from '$lib/components/table/Table.svelte';
  import type { Column } from '$lib/components/table/TableColumns';

  const filterFunction = (searchTerm: string, employee: Employee) =>
    employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
    employee.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;

  const columns: Column<Employee>[] = [
    {
      name: 'Cédula',
      uid: 'identification',
    },
    {
      name: 'Nombre',
      uid: 'name',
    },
    {
      name: 'Apellido',
      uid: 'last_name',
    },
    {
      name: 'Teléfono',
      uid: 'phone',
    },
    {
      name: 'Fecha de nacimiento',
      uid: 'birth_date',
    },
  ];
</script>

<Table title="Empleado" {columns} {filterFunction} dataSource={getEmployees}>
  <svelte:fragment>
    <EmployeeForm />
  </svelte:fragment>
</Table>
