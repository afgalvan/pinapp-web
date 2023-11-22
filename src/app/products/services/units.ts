import { supabase } from '$lib/shared';
import type { Product } from '../models/unit';

export const getUnits = async (): Promise<Product[]> => {
  let { data } = await supabase.from('units_of_measures').select('*');

  return data as Product[];
};
