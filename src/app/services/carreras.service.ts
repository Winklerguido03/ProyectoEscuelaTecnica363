import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { carreras } from '../models/carreras';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  constructor(private http:HttpClient) { }

  obtenerCarreras(): Observable<carreras[]> {
    return this.http.get<carreras[]>(environment.carrerasUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }
}


