import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footeer/footer.component";
import { carreras } from '../../models/carreras';
import { CarrerasService } from '../../services/carreras.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  Bienvenida='Bienvenido al sitio web oficial de la escuela técnica N°363 "Norma Aquino"';
  planEstudiosBachiller="assets/img/PlanEstudiosBachiller.PNG";
  planEstudiosTecnico="assets/img/PlanEstudiosTecnico.PNG";
  
  carrerass:carreras[]=[];

  cargando=true;

  error: string | null = null; 
    
  private carrerasService = inject(CarrerasService);
   ngOnInit() { 
  
 this.carrerasService.obtenerCarreras().subscribe({
     next: (data) => {     
       this.carrerass = data;
       this.cargando = false;
     },
     error: (err) => {     
       this.error = 'No se pudieron cargar los Proyectos.';
       this.cargando = false;      }     

       
});   

   }

}
