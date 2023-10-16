import { supabase } from '$lib/supabase';

export const verifyAuthentication = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user !== undefined && user !== null;
};
