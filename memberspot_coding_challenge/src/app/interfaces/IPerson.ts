import { Observable } from 'rxjs';
import { IHomeWorld } from './IHomeWorld';

export interface IPerson {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  homeworldData: IHomeWorld;
  url: string;
}
