import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class AppHomeService {
  constructor(private http: HttpClient) {}
  fetchHeroes() {
    return this.http.get(`${environment.baseUrl}/heroStats`);
  }
}
