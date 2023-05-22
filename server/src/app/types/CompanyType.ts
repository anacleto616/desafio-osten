import { AddressType } from './AddressType';

export interface CompanyType {
  id?: number;
  name: string;
  address: AddressType[]
}
