import { Component, OnInit } from '@angular/core';
import { materiaTecnico } from '../../../modelos/materiaTecnico'; 
import { ListaMateriasTecnicoService } from '../../servicios/lista-materias-tecnico.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnico.component.html',
  styleUrl: './tecnico.component.css'
})
export class TecnicoComponent implements OnInit{
      listaMateriasTecnico:materiaTecnico []=[];

      constructor (private svc:ListaMateriasTecnicoService){}

      ngOnInit(): void {
        this.cargarListasMateriaTecnico();
      }
      
      cargarListasMateriaTecnico(){
        this.svc.getDatos().subscribe({
          next: (data) => {
            this.listaMateriasTecnico = data;
            console.log(JSON.stringify( this.listaMateriasTecnico));
          },
          error: (error)=>{
            console.error('Error al cargar la info de actividades', error);
          }
  
        })
      }
}
