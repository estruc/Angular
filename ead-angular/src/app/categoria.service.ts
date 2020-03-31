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

  createCategoria(categoria: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, categoria);
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategoria(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCategoria(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
