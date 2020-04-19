import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibreriasPageRoutingModule } from './librerias-routing.module';

import { LibreriasPage } from './librerias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibreriasPageRoutingModule
  ],
  declarations: [LibreriasPage]
})
export class LibreriasPageModule {}
