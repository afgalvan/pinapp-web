import { supabase } from '$lib/supabase';

export const getInitialSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.user ?? null;
};
