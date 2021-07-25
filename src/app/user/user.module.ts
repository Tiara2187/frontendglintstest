import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdatedUserComponent } from './updated-user/updated-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'list-user', component: ListUserComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'detail-user/:id', component: DetailUserComponent},
  { path: 'updated-user/:id', component: UpdatedUserComponent}
]

@NgModule({
  declarations: [ListUserComponent, AddUserComponent, UpdatedUserComponent, DetailUserComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
