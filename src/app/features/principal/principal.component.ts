import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footeer/footer.component";

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
}
