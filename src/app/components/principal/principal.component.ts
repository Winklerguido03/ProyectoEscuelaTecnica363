import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footeer/footer.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  planEstudiosBachiller="assets/img/PlanEstudiosBachiller.PNG";
  planEstudiosTecnico="assets/img/PlanEstudiosTecnico.PNG";
}
