import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SectionComponent } from "../section/section.component";
import { Section2Component } from "../section2/section2.component";
import { Section3Component } from "../section3/section3.component";
import { FooterComponent } from "../footeer/footer.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent, SectionComponent, Section2Component, Section3Component, FooterComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
