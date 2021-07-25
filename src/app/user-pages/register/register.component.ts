import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/Shared-Api/service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  admin: any;
  signupForm: FormGroup

  constructor(
    public formbuilder: FormBuilder, public adminService : AdminService) { 
    this.signupForm = this.formbuilder.group({
      username: [''],
      email: [''],
      phone: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  registerAdmin(){
    this.signupForm.setValue({
      username: '',
      email: '',
      phone: '',
      password: ''
    })
  }

  signUp(){
    this.admin = this.signupForm.value;
    this.adminService.signUp(this.admin)
  }

}
