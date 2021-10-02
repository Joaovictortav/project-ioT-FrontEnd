import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private service: AuthService,
    private router: Router
    ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>  {
    const token = localStorage.getItem('token');
    if (token) {
      const isAuth = await this.service.authentication();
        if (!isAuth) this.router.navigate([''])
        return isAuth;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
