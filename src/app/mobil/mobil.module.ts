import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMobilComponent } from './list-mobil/list-mobil.component';
import { DetailMobilComponent } from './detail-mobil/detail-mobil.component';
import { AddMobilComponent } from './add-mobil/add-mobil.component';
import { UpdatedMobilComponent } from './updated-mobil/updated-mobil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list-mobil', component: ListMobilComponent},
  { path: 'add-mobil', component: AddMobilComponent},
  { path: 'detail-mobil', component: DetailMobilComponent},
  { path: 'updated-mobil', component: UpdatedMobilComponent}
]

@NgModule({
  declarations: [ListMobilComponent, DetailMobilComponent, AddMobilComponent, UpdatedMobilComponent],
  imports: [
    CommonModule, 
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class MobilModule { }
