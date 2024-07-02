import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, lastValueFrom, map, switchMap } from 'rxjs';
import { IHomeWorld } from 'src/app/interfaces/IHomeWorld';
import { IPerson } from 'src/app/interfaces/IPerson';
import { ISWPeopleResponse } from 'src/app/interfaces/ISWPeopleResponse';
import { ISWHomeWorldResponse } from 'src/app/interfaces/ISWHomeWorldResponse';

@Injectable({
  providedIn: 'root',
})
export class SwApiService {
  baseURL = 'https://www.swapi.tech/api';
  people = 'people';

  constructor(private http: HttpClient) {}

  getPeopleWithHomeworld(name: string): Observable<any[]> {
    return this.http
      .get<ISWPeopleResponse>(`${this.baseURL}/${this.people}?name=${name}`)
      .pipe(
        map((resp) => resp.result),
        switchMap((person) => {
          // Create an array of observables for each homeworld URL
          const homeworldObservables = person.map((person: any) =>
            this.http
              .get<ISWHomeWorldResponse>(person.properties.homeworld)
              .pipe(
                map((homeworldData) => {
                  // Merge homeworld data into character data
                  person.properties.homeworldData =
                    homeworldData.result.properties;
                  return person.properties;
                })
              )
          );

          // Use forkJoin to wait for all homeworld requests to complete
          return forkJoin(homeworldObservables);
        })
      );
  }
}
