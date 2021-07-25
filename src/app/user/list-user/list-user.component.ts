import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product, User } from 'src/app/Shared-Api/models/user';
import { UserService } from 'src/app/Shared-Api/service/user.service';
import Swal from 'sweetalert2';
declare var $;

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, AfterViewInit {

  @ViewChild('dataTable', {static: false}) table;
  dataTable: any;
  users: User[] = [];
  

  constructor( private userService: UserService) { }
  
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getUser().subscribe(userData => {
      this.users = userData.data
      console.log(this.users);
      
    })
  }

  deleteUser(id) {
    Swal.fire({ title: 'Are you sure?', text: 'Your user will delete!', icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService.deleteUser(id).subscribe((res) => {});
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
  
  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();

  }

}
