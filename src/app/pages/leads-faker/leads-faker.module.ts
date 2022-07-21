import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsFakerRoutingModule } from './leads-faker-routing.module';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { VendaComponent } from './venda/venda.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { VendaIdComponent } from './venda-id/venda-id.component';


@NgModule({
  declarations: [
    HomeComponent,
    CompraComponent,
    VendaComponent,
    DevolucaoComponent,
    VendaIdComponent
  ],
  imports: [
    CommonModule,
    LeadsFakerRoutingModule
  ]
})
export class LeadsFakerModule { }
