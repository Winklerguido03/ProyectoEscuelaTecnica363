import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Img2Component } from "../img2/img2.component";

@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.css'
})
export class ImagenesComponent {

}
