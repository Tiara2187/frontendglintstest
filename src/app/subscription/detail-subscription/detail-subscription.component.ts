import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionService } from 'src/app/Shared-Api/service/subscription.service';

@Component({
  selector: 'app-detail-subscription',
  templateUrl: './detail-subscription.component.html',
  styleUrls: ['./detail-subscription.component.scss']
})
export class DetailSubscriptionComponent implements OnInit {
  _id: any;
  data: any;

  subscriptionForm = new FormGroup({
    productName: new FormControl(''),
    productTag: new FormControl(''),
    eligibleUser: new FormControl(''),
    productStatus: new FormControl('')
  })

  constructor(
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id']
    this.getDetailSubscription()
  }

  getDetailSubscription() {
    this.subscriptionService.getDetailSubscription(this._id).subscribe(data => {
      this.data = data.msg
      console.log(this.data);
      this.subscriptionForm.controls['productName'].patchValue(data.msg.productName);
      this.subscriptionForm.controls['productTag'].patchValue(data.msg.productTag);
      this.subscriptionForm.controls['eligibleUser'].patchValue(data.msg.eligibleUser);
      this.subscriptionForm.controls['productStatus'].patchValue(data.msg.productStatus);
    })
  }

}
