export interface Employee {
  id: number;
  identification: string;
  name: string;
  last_name: string;
  phone: string;
  user_id?: string;
  active: boolean;
  birth_date?: Date;
}
