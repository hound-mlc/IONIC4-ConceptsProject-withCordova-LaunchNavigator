import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tulista',
    loadChildren: () => import('./tulista/tulista.module').then( m => m.TulistaPageModule)
  },
  {
    path: 'detalles',
    redirectTo: 'tulista',
    pathMatch: 'full'
  },
  {
    path: 'detalles/:idLibro',
    loadChildren: () => import('./tulista/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'sitios',
    loadChildren: () => import('./librerias/librerias.module').then( m => m.LibreriasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
