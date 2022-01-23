import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppHomeService {
  constructor(private http: HttpClient) {}
  fetchHeroes() {
    return this.http.get('https://api.opendota.com/api/heroStats');
  }
}
