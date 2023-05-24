import { AddressType } from "./AddressTypes";

export interface CompanyType {
  id?: number;
  name: string;
  address: AddressType[]
}