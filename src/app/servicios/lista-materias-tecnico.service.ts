import { Injectable } from '@angular/core';
import { materiaTecnico } from '../../modelos/materiaTecnico';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaMateriasTecnicoService {

  private jsonUrl= "assets/data/estructura.json"
  private listaMateriasTecnico: materiaTecnico []=[];

  constructor(private http:HttpClient) {
    this.getDatos();
   }

   getDatos(): Observable<materiaTecnico[]> {
    return this.http.get<materiaTecnico[]>(this.jsonUrl).pipe(
      catchError(error => {
        console.error('Error al cargar el archivo JSON', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON'));
      })
    );
  }
}


