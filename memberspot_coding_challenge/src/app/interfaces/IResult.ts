import { IHomeWorld } from './IHomeWorld';
import { IPerson } from './IPerson';

export interface IResult {
  properties: IPerson | IHomeWorld;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}
