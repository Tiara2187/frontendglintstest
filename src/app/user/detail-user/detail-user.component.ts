import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Shared-Api/service/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  _id: any;
  data: any;

  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    contactnumber: new FormControl(''),
    contactperson: new FormControl(''),
    product: new FormControl('')

  })

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id']
    this.getDetailUser()
  }
  
  getDetailUser() {
    this.userService.getDetailUser(this._id).subscribe(data => {
      this.data = data.msg
      console.log(this.data);
      this.userForm.controls['username'].patchValue(data.msg.username);
      this.userForm.controls['email'].patchValue(data.msg.email);
      this.userForm.controls['contactnumber'].patchValue(data.msg.contactnumber);
      this.userForm.controls['contactperson'].patchValue(data.msg.contactperson);
      this.userForm.controls['product'].patchValue(data.msg.product.productName);
      
      
    })
  }

}
