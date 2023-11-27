import { supabase } from '$lib/shared';
import type { Employee } from '../models/employee';

export const getEmployees = async (): Promise<Employee[]> => {
  let { data: employees } = await supabase.from('employees').select('*');

  return employees as Employee[];
};

export const createEmployee = async (employee: Employee) => {
  const { error } = await supabase.from('employees').insert({
    ...employee,
    user_id: '0cd8f10c-6832-4f5f-96f1-01a043d0872f',
    active: true,
  });
  console.log(error);
};
