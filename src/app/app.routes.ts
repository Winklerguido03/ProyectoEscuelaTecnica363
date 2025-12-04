import { Routes } from '@angular/router';
import path from 'node:path';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { AdministracionComponent } from './components/administracion/administracion.component';

export const routes: Routes = [
    {path:"",redirectTo:"Principal",pathMatch:"full"},
    {path:"Principal",component:PrincipalComponent},
    {path:"Noticias",component:NoticiasComponent},
    {path:"Imagenes",component:ImagenesComponent},
    {path:"Administración",component:AdministracionComponent},
    {path:"Contacto",component:ContactoComponent},
    
];
