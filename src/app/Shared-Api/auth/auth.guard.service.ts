import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private adminService : AdminService, private router : Router) { }

    canActivate(
      next : ActivatedRouteSnapshot,
      state : RouterStateSnapshot
  ) : Observable <boolean> |Promise<boolean> |boolean{
      if(this.adminService.isLogin !== true ) {
          this.router.navigate(['/dashboard'])
          Swal.fire('Sorry','You cant access, please Login First','error')
      }
      return true
  }
}
