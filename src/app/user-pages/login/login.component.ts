import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Shared-Api/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public adminService: AdminService,
    public router: Router
  ) { 
    this.signinForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.adminService.signIn(this.signinForm.value)
    this.signinForm.setValue({
      email: '',
      password: ''
    })
    
    
  }

}
