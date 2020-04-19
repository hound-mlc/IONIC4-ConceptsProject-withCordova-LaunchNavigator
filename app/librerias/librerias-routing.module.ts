import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibreriasPage } from './librerias.page';

const routes: Routes = [
  {
    path: '',
    component: LibreriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibreriasPageRoutingModule {}
