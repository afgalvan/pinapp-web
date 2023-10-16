import { supabase } from '$lib/supabase';
import type { User } from '../models/user';

export const login = async ({ email, password }: User) => {
  const response = await supabase.auth.signInWithPassword({ password, email });
  if (!response.error && response.data.session.access_token) {
    return true;
  }

  return false;
};
