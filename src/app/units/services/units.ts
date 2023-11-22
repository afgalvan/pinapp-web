import { supabase } from '$lib/shared';
import type { Unit } from '../models/unit';

export const getUnits = async (): Promise<Unit[]> => {
  let { data: units_of_measures } = await supabase
    .from('units_of_measures')
    .select('*');

  return units_of_measures as Unit[];
};

export const createUnits = async (unit: Unit) => {
  const { error } = await supabase.from('units_of_measures').insert({
    short_name: unit.short_name,
    large_name: unit.large_name,
    active: true,
  });
  console.log(error);
};
