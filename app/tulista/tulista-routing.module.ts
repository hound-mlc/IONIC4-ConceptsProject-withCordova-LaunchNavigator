import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulistaPage } from './tulista.page';

const routes: Routes = [
  {
    path: '',
    component: TulistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulistaPageRoutingModule {}
