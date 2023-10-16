import { supabase } from '$lib/supabase';
import { navigate } from 'svelte-navigator';

export const logout = async () => {
  await supabase.auth.signOut();
  navigate('/auth/login');
};
