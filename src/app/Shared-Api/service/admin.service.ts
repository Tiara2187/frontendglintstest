import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators'
import Swal from 'sweetalert2';
import { Admin } from '../models/admin';

const BACKEND_URL = environment.apiUrl + '/admin'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public adminSubject: BehaviorSubject<Admin>;
  public admins: Observable<Admin>



  headers = new HttpHeaders().set('Content-Type', 'application/json');
  dataadmin = {};
  admin = 'admin';
  ACCESS_TOKEN = 'accessToken';


  

  constructor(private http: HttpClient, private router: Router) { }
  signUp(admin : Admin) {
    return this.http.post('http://localhost:5500/admin/register', admin).subscribe((res: any) => {
      console.log(res);
      Swal.fire('Welcome','You can login now','success')
    },
    error => {
      Swal.fire('Sorry',error.error.message,'error')
    })
  }
  get isLogin() {
    let token = localStorage.getItem('token');
    if(token != null) {
      return true
    }
    else return false
  }

  getToken() {
    return localStorage.getItem('token');
  }
  

  getAdmin(): Observable<any> {
    return this.http.get<any>(BACKEND_URL, {
        headers: this.headers,}).pipe(map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  signIn(admin : Admin){
    return this.http.post<any>(BACKEND_URL + '/login', admin).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.getAdmin().subscribe((res : any) => {
        Swal.fire({icon: 'success', title: 'Login Success'}).then(result => { location.reload() })
      this.router.navigate(['/dashboard']);
      })
    },
    error => {
      Swal.fire('Oops...', error.error.message,'error')
    });
  }

  logout() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    return this.router.navigate(['/user-pages/login']);
  }

  handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) message = error.error.message;
    else message = `Error code : ${error.status} \n Message Error : ${error.message}`
    return throwError(message);
  }

}
