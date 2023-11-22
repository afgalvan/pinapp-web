import { supabase } from '$lib/shared';
import type { Inventory } from '../models/Inventory';

export const getInventory = async (): Promise<Inventory[]> => {
  let { data } = await supabase
    .from('raw_materials')
    .select('*, providers(*), units_of_measures(*)');

  return data as Inventory[];
};

export const createInventory = async (inventory: Inventory) => {
  const { error } = await supabase.from('raw_materials').insert({
    name: inventory.name,
    provider_id: inventory.providers.id,
    stock_quantity: inventory.stock_quantity,
    unit_of_measure_id: inventory.units_of_measures.id,
    active: true,
  });
  console.log(error);
};
