import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:8080/projeto-ead-rest/categoria';


  constructor(private http: HttpClient) { }


  getCategoriaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
