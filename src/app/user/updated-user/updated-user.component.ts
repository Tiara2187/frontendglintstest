import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product, UpdatedUser } from 'src/app/Shared-Api/models/user';
import { UserService } from 'src/app/Shared-Api/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updated-user',
  templateUrl: './updated-user.component.html',
  styleUrls: ['./updated-user.component.scss']
})
export class UpdatedUserComponent implements OnInit {
  _id: any;
  data: any;
  updatedUserForm: FormGroup;
  productForm: FormGroup;
  product: any;
  products: Product[] = [];

  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    contactnumber: new FormControl(''),
    contactperson: new FormControl(''),
    product: new FormControl('')
  })

  constructor(
    private userService : UserService,
    private route: ActivatedRoute,
    public formbuilder: FormBuilder) {
      this.updatedUserForm = this.formbuilder.group({
        username: [''],
        email: [''],
        contactnumber: [''],
        contactperson: [''],
        product: ['']
      })

      this.productForm = this.formbuilder.group({
        productName: ['']
      })

     }

     getAllProduct(){
       this.userService.getProduct().subscribe(productData => {
         this.products = productData.data
         console.log(this.products);
         
       })
     }

    ngOnInit(): void {
      this._id = this.route.snapshot.params['id']
      this.getDetailUser()
    }

    updateUser(): void{
      const user: UpdatedUser = {
        username: this.userForm.get('username').value,
        email: this.userForm.get('email').value,
        contactnumber: this.userForm.get('contactnumber').value,
        contactperson: this.userForm.get('contactperson').value,
        product: this.userForm.get('product').value
      }
      this.userService.updateUser(user, this._id)
      .subscribe(
        (res: any) => {
          Swal.fire('Success', 'Update status user', 'success')
        },
        error => {
          Swal.fire('Sorry', error.error.message, 'error')
        })
      }

      getDetailUser(){
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
