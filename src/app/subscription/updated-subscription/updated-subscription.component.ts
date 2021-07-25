import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateSubscription } from 'src/app/Shared-Api/models/subscription';
import { SubscriptionService } from 'src/app/Shared-Api/service/subscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updated-subscription',
  templateUrl: './updated-subscription.component.html',
  styleUrls: ['./updated-subscription.component.scss']
})
export class UpdatedSubscriptionComponent implements OnInit {
  _id: any;
  data: any;
  updateSubscriptionForm : FormGroup

  subscriptionForm = new FormGroup({
    productName: new FormControl(''),
    productTag: new FormControl(''),
    eligibleUser: new FormControl(''),
    productStatus: new FormControl('')
  })

  constructor(
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute,
    public formbuilder: FormBuilder) {
      this.updateSubscriptionForm = this.formbuilder.group({
        productName: [''],
        productTag: [''],
        eligibleUser: [''],
        productStatus: ['']
      })

   }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id']
    this.getDetailSubscription()
  }

  updateSubscription(): void {
    const subscription: UpdateSubscription = {
      productName: this.subscriptionForm.get('productName').value,
      productTag: this.subscriptionForm.get('productTag').value,
      eligibleUser: this.subscriptionForm.get('eligibleUser').value,
      productStatus: this.subscriptionForm.get('productStatus').value
    }
    this.subscriptionService.updateSubscription(subscription, this._id)
    .subscribe(
      (res: any) => {
        Swal.fire('Success', 'Update status product', 'success')
      },
      error => {
        Swal.fire('Sorry', error.error.message, 'error')
      })
  }

  getDetailSubscription() {
    this.subscriptionService.getDetailSubscription(this._id).subscribe(data => {
      this.data = data.msg
      console.log(this.data);
      this.updateSubscriptionForm.controls['productName'].patchValue(data.msg.productName);
      this.updateSubscriptionForm.controls['productTag'].patchValue(data.msg.productTag);
      this.updateSubscriptionForm.controls['eligibleUser'].patchValue(data.msg.eligibleUser);
      this.updateSubscriptionForm.controls['productStatus'].patchValue(data.msg.productStatus);
    })
  }



}
