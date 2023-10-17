import { logout } from '$lib/stores/auth';
import { supabase } from '$lib/supabase';
import { navigate } from 'svelte-navigator';

export const signOut = async () => {
  await supabase.auth.signOut();
  logout();
  navigate('/auth/login');
};
