import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { CompraComponent } from './compra/compra.component';
import { DevolucaoComponent } from './devolucao/devolucao.component';
import { HomeComponent } from './home/home.component';
import { VendaIdComponent } from './venda-id/venda-id.component';
import { VendaComponent } from './venda/venda.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'compra',
    component: CompraComponent,
  },
  {
    path: 'venda',
    component: VendaComponent,
  },
  {
    path: 'devolucao',
    component: DevolucaoComponent,
  },
  {
    path: 'venda-id',
    component: VendaIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadsFakerRoutingModule { }
