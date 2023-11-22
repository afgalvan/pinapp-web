import type { Supplier } from '$app/providers/models/supplier';
import type { Unit } from '$app/units/models/unit';

export interface Inventory {
  name: string;
  stock_quantity: number;
  id: string;
  providers: Supplier;
  units_of_measures: Unit;
  active: boolean;
}
