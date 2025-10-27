import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SectionComponent } from "./components/section/section.component";
import { Section2Component } from "./components/section2/section2.component";
import { Section3Component } from "./components/section3/section3.component";
import { FooterComponent } from "./components/footeer/footer.component";
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrincipalComponent } from "./components/principal/principal.component";
import { TecnicoComponent } from "./components/tecnico/tecnico.component";
import { ImagenesComponent } from "./components/imagenes/imagenes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SectionComponent, Section2Component, Section3Component, FooterComponent, RouterOutlet, RouterLink, ContactoComponent, PrincipalComponent, TecnicoComponent, ImagenesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'escuelaTecnica';
}
