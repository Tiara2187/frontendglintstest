import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Subscription, UpdateSubscription } from '../models/subscription';

const URL_SUBSCRIPTION = environment.apiUrl + '/product'
const URL_DETAILSUBSCRIPTION = environment.apiUrl + '/product/detail/'

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  
  constructor(private http: HttpClient, private router: Router) { }

  public getSubscription(): Observable<any>{
    return this.http.get<any>(URL_SUBSCRIPTION + '/list', { headers: this.headers }).pipe(
      map((res: Response) => {
        console.log(res);
        return res || {};
      })
    );
  }

  public getDetailSubscription(_id:string){
    const id = _id
    return this.http.get<any>(URL_DETAILSUBSCRIPTION + id)
  }

  subscriptionCreate(subscription: Subscription) {
    return this.http.post(URL_SUBSCRIPTION + '/create', subscription).subscribe(
      (res: any) => {
        console.log(res);
        Swal.fire('Success', 'Create Subscription', 'success')
      },
      error => {
        Swal.fire('Sorry', error.error.message, 'error')
      })
  }
  
  updateSubscription(subscription : UpdateSubscription, _id: string) : Observable<any> {
    console.log(_id);
    return this.http.put<any>(`${environment.apiUrl}/product/updated/${_id}`, subscription).pipe(map(result => true))
  }

  public deleteSubscription(_id){
    return this.http.delete(`${environment.apiUrl}/product/delete/${_id}`)
  }
}
