import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListKaryawanComponent } from './list-karyawan/list-karyawan.component';
import { AddKaryawanComponent } from './add-karyawan/add-karyawan.component';
import { UpdatedKaryawanComponent } from './updated-karyawan/updated-karyawan.component';
import { DetailKaryawanComponent } from './detail-karyawan/detail-karyawan.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'list-karyawan', component: ListKaryawanComponent},
  { path: 'add-karyawan', component: AddKaryawanComponent},
  { path: 'updated-karyawan', component: UpdatedKaryawanComponent},
  { path: 'detail-karyawan', component: DetailKaryawanComponent}
]

@NgModule({
  declarations: [ListKaryawanComponent, AddKaryawanComponent, UpdatedKaryawanComponent, DetailKaryawanComponent],
  imports: [
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class KaryawanModule { }
