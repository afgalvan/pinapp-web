import { supabase } from '$lib/shared';
import type { Supplier } from '../models/supplier';

export const getProviders = async (): Promise<Supplier[]> => {
  let { data: providers } = await supabase.from('providers').select('*');

  return providers as Supplier[];
};

export const createProvider = async (provider: Supplier) => {
  const { error } = await supabase.from('providers').insert({
    name: provider.name,
    phone: provider.phone,
    active: true,
  });
  console.log(error);
};
