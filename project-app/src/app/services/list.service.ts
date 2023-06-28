import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import {
  CharacterAngularInterface,
  CharacterApiResponseInterface,
} from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getCharacters(): Observable<CharacterAngularInterface[]> {
    return this.httpClient
      .get<CharacterApiResponseInterface>(
        "https://www.digi-api.com/api/v1/digimon/?pageSize=57")
      .pipe(
        map((response) => {
          const characterList: CharacterAngularInterface[] = response.content.map(item => {
             const character: CharacterAngularInterface = {
            id: item.id,
            name: item.name,
            href: item.href,
            image: item.image,
          }
          return character;
          })
          return characterList;
        }),
        catchError(err => {
          throw new Error(err.message);
        })
      );
  }


 /* getApiDetail(id: number): Observable<CharacterAngularInterface> {
    return this.httpClient
      .get<CharacterAngularInterface>(
        'https://www.digi-api.com/api/v1/digimon/?pageSize=24' + id)
  }*/
}
