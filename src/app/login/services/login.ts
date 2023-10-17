import { supabase } from '$lib/supabase';
import type { User } from '../models/user';

export const login = async ({ email, password }: User) => {
  const response = await supabase.auth.signInWithPassword({ password, email });
  return response.data.user;
};
