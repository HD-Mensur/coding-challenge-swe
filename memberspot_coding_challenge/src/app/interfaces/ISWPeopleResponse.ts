import { IResult } from './IResult';

export interface ISWPeopleResponse {
  message: string;
  result: IResult[];
  description: string;
  _id: string;
  uid: string;
  __v: number;
}
