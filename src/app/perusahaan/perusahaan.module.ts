import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPerusahaanComponent } from './list-perusahaan/list-perusahaan.component';
import { AddPerusahaanComponent } from './add-perusahaan/add-perusahaan.component';
import { DetailPerusahaanComponent } from './detail-perusahaan/detail-perusahaan.component';
import { UpdatedPerusahaanComponent } from './updated-perusahaan/updated-perusahaan.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list-perusahaan', component: ListPerusahaanComponent},
  { path: 'add-perusahaan', component: AddPerusahaanComponent},
  { path: 'updated-perusahaan', component: UpdatedPerusahaanComponent},
  { path: 'detail-perusahaan', component: DetailPerusahaanComponent}
]


@NgModule({
  declarations: [
    ListPerusahaanComponent,
    AddPerusahaanComponent,
    DetailPerusahaanComponent, UpdatedPerusahaanComponent],
  imports: [
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class PerusahaanModule { }
