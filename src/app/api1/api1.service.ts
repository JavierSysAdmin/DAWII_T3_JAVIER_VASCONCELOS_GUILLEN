import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {
  private apiUrl = 'https://rickandmortyapi.com/api/location?type=planet';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
