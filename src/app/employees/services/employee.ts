import { supabase } from '$lib/shared';
import type { Employee } from '../models/employee';

export const getEmployees = async (): Promise<Employee[]> => {
  let { data: employees } = await supabase.from('employees').select('*');

  return employees as Employee[];
};

export const createEmployee = async (employee: Employee) => {
  const { error } = await supabase.from('employees').insert({
    ...employee,
    user_id: '615170ae-6dbd-417b-8d91-83bea955d972',
    active: true,
  });
  console.log(error);
};
