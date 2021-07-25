import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'src/app/Shared-Api/models/subscription';
import { SubscriptionService } from 'src/app/Shared-Api/service/subscription.service';
import Swal from 'sweetalert2';
declare var $;

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.scss']
})
export class ListSubscriptionComponent implements OnInit {

  @ViewChild('dataTable', {static: false}) table;
  subscriptions: Subscription[];
  _id$: any;
  dataTable: any;
  data: any;

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.getAllSubscription();
    
  }

  getAllSubscription() {
    this.subscriptionService.getSubscription().subscribe(subscriptionData => {
      this.subscriptions = subscriptionData.data
      console.log(this.subscriptions);
    });
  }
  
  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement)
    this.dataTable.DataTable();
  }

  deleteSubscription(id) {
    Swal.fire({ title: 'Are you sure?', text: 'Your subcription will delete!', icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      this.subscriptionService.deleteSubscription(id).subscribe((res) => {});
      Swal.fire(
        'Deleted!',
        'Your wishlist has been deleted.',
        'success'
      ).then((result) => {
        location.reload();
      });
    }
  });
  }

}
