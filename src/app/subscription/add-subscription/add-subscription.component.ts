import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubscriptionService } from 'src/app/Shared-Api/service/subscription.service';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements OnInit {
  subscription : any;
  subscriptionForm: FormGroup;
  

  constructor(
    public formbuilder: FormBuilder,
    private subscriptionService: SubscriptionService, ) { 
      this.subscriptionForm = this.formbuilder.group({
        productName: [''],
        productTag: [''],
        eligibleUser: [''],
        productStatus: ['']
      })
    }

  ngOnInit(): void {
  }

  createSubscription(){
    this.subscriptionForm.setValue({
      productName: '',
      productTag: '',
      eligibleUser: '',
      productStatus: ''
    })
  }

  subscriptionCreate(){
    this.subscription = this.subscriptionForm.value;
    console.log(this.subscription);
    this.subscriptionService.subscriptionCreate(this.subscription)
    
  }

}
