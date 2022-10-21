import { from } from "rxjs";
import{Routes, RouterModule} from'@angular/router';
import{NgModule} from '@angular/core';
import{InicioComponent} from '../app/componentes/inicio/inicio/inicio.component';
import{AboutComponent} from '../app/componentes/About/about/about.component';
import{FooterComponent} from '../app/componentes/footer/footer/footer.component';
import{GaleriaComponent} from '../app/componentes/galeria/galeria/galeria.component';
import{ContactoComponent} from '../app/componentes/contacto/contacto/contacto.component';
import{ServiciosComponent} from '../app/componentes/servicios/servicios/servicios.component';



const routes: Routes=[
    {path:'', component:InicioComponent},
    {path:'Inicio', component:InicioComponent},
    {path: 'About', component:AboutComponent},
    {path: 'Galeria', component:GaleriaComponent},
    {path: 'Contacto', component: ContactoComponent},
    {path: 'Footer', component:FooterComponent},
    {path: 'Servicios', component: ServiciosComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'}),],
    exports: [RouterModule]

})

export class AppToutingModule{}