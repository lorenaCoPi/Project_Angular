import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterAngularInterface, CharacterApiResponseInterface } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  constructor(private httpClient: HttpClient) {}

  getApiDetail(id: string): Observable<CharacterAngularInterface[]> {
    return this.httpClient
      .get<CharacterAngularInterface[]>(
        `https://www.digi-api.com/api/v1/digimon/${id}`)
    }
  }


