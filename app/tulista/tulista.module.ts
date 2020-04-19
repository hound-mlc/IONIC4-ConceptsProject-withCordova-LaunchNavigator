import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulistaPageRoutingModule } from './tulista-routing.module';

import { TulistaPage } from './tulista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulistaPageRoutingModule
  ],
  declarations: [TulistaPage]
})
export class TulistaPageModule {}
