import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footeer/footer.component";
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrincipalComponent } from "./components/principal/principal.component";
import { ImagenesComponent } from "./components/imagenes/imagenes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, RouterLink, ContactoComponent, PrincipalComponent, ImagenesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'escuelaTecnica';
}
