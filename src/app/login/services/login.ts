import { supabase } from '$lib/shared';
import type { SignInWithOAuthCredentials } from '@supabase/supabase-js';
import type { User } from '../models/User';

export const login = async ({ email, password }: User) => {
  const response = await supabase.auth.signInWithPassword({ password, email });

  if (response.error?.status === 400) {
    return { error: true, message: 'Credenciales incorrectas' };
  }
  return { user: response.data.user };
};

export const oauthLogin = async ({ provider }: SignInWithOAuthCredentials) => {
  const response = await supabase.auth.signInWithOAuth({ provider });

  if (response.error?.status && response.error?.status >= 300) {
    return { error: true, message: 'Error comunicándose con el servidor' };
  }
  return { user: response.data.url };
};
