import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footeer/footer.component";
import { ContactoComponent } from './features/contacto/contacto.component';
import { PrincipalComponent } from "./features/principal/principal.component";
import { ImagenesComponent } from "./features/imagenes/imagenes.component";

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
