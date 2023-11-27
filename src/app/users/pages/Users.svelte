<script lang="ts">
  import type { User } from '../models/user';
  import { getUsers } from '../services/users-service';
  import UserForm from '../components/UserForm.svelte';
  import Table from '$lib/components/table/Table.svelte';
  import type { Column } from '$lib/components/table/TableColumns';

  const filterFunction = (searchTerm: string, user: User) =>
    user.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;

  const columns: Column<User>[] = [
    {
      name: 'Correo electrónico',
      uid: 'email',
    },
  ];
</script>

<Table title="Usuario" {columns} {filterFunction} dataSource={getUsers}>
  <svelte:fragment>
    <UserForm />
  </svelte:fragment>
</Table>
