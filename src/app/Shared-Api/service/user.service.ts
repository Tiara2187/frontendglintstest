import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UpdatedUser } from '../models/user';

const URL_USER = environment.apiUrl + '/user';
const URL_SUBSCRIPTIONS = environment.apiUrl + '/product'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient, private router: Router) { }

  public getUser(): Observable<any>{
    return this.http.get<any>(URL_USER + '/list', { headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      })
    )
  }

  public getProduct(): Observable<any>{
    return this.http.get<any>(URL_SUBSCRIPTIONS + '/list', { headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {};
      })
    )
  }

  public getDetailUser(_id:string){
    const id = _id;
    return this.http.get<any>(URL_USER + '/detail/' + id)

  }

  public deleteUser(_id){
    return this.http.delete(`${environment.apiUrl}/user/delete/${_id}`)
  }

  updateUser(user : UpdatedUser, _id: string) : Observable<any> {
    console.log(_id);
    return this.http.put<any>(`${environment.apiUrl}/user/updated/${_id}`, user).pipe(map(result => true))

  }

}
