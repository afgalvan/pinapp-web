import { supabase } from '$lib/shared';
import type { User } from '../models/user';

export const getUsers = async (): Promise<User[]> => {
  let { data } = await supabase.auth.admin.listUsers();

  return data.users as User[];
};

export const createUser = async (user: User) => {
  let { error } = await supabase.auth.admin.createUser(user);
  console.log(error);
};
