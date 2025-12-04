import { Routes } from '@angular/router';
import path from 'node:path';
import { ContactoComponent } from './features/contacto/contacto.component';
import { PrincipalComponent } from './features/principal/principal.component';
import { NoticiasComponent } from './features/noticias/noticias.component';
import { ImagenesComponent } from './features/imagenes/imagenes.component';
import { AdministracionComponent } from './features/administracion/administracion.component';

export const routes: Routes = [
    {path:"",redirectTo:"Principal",pathMatch:"full"},
    {path:"Principal",component:PrincipalComponent},
    {path:"Noticias",component:NoticiasComponent},
    {path:"Imagenes",component:ImagenesComponent},
    {path:"Administración",component:AdministracionComponent},
    {path:"Contacto",component:ContactoComponent},
    
];
