import { Routes } from '@angular/router';
import { CaluloMatriculaComponent } from './calulo-matricula/calulo-matricula.component';
import { MenuMainComponent } from './menu-main/menu-main.component';

export const routes: Routes = [
    {path: '', component: MenuMainComponent},
    {path: 'calculo-matricula', component: CaluloMatriculaComponent},
];
