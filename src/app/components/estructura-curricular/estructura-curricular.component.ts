import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListaMateriasTecnicoService } from '../../servicios/lista-materias-tecnico.service';
import { materiaTecnico } from '../../../modelos/materiaTecnico';

@Component({
  selector: 'app-estructura-curricular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estructura-curricular.component.html',
  styleUrl: './estructura-curricular.component.css'
})
export class EstructuraCurricularComponent {
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
    

