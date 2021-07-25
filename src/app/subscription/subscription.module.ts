import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSubscriptionComponent } from './list-subscription/list-subscription.component';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { DetailSubscriptionComponent } from './detail-subscription/detail-subscription.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatedSubscriptionComponent } from './updated-subscription/updated-subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'list-subscription', component: ListSubscriptionComponent },
  { path: 'add-subscription', component: AddSubscriptionComponent },
  { path: 'detail-subscription/:id', component: DetailSubscriptionComponent},
  { path: 'updated-subscription/:id', component: UpdatedSubscriptionComponent}
]

@NgModule({
  declarations: [
    ListSubscriptionComponent, 
    AddSubscriptionComponent, 
    DetailSubscriptionComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscriptionModule { }
