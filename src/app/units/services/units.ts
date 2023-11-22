import { supabase } from '$lib/shared';
import type { Units } from '../models/units';

export const getUnits = async (): Promise<Units[]> => {
  let { data: units_of_measures } = await supabase
    .from('units_of_measures')
    .select('*');

  return units_of_measures as Units[];
};

export const createUnits = async (unit: Units) => {
  const { error } = await supabase.from('units_of_measures').insert({
    short_name: unit.short_name,
    large_name: unit.large_name,
    active: true,
  });
  console.log(error);
};
