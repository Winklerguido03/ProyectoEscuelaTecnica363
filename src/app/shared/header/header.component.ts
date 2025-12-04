import { Component } from '@angular/core';
import { ContactoComponent } from '../../features/contacto/contacto.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
imgLogo:string="../../../assets/img/Logo.png"
 Logo363:string="Logo363"
}
