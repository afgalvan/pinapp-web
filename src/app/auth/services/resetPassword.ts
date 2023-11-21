import { supabase } from '$lib/shared';

export const resetPassword = async (data: { email: string }) => {
  const response = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: 'https://pinapp.vercel.app/account/update-password',
  });

  if (response.error?.status === 429) {
    return {
      error: true,
      message: 'Debes esperar un minuto para volver a solicitarlo',
    };
  }
  return { error: false, message: 'Revisa tu correo' };
};
