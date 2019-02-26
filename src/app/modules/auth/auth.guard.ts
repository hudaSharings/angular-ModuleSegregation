import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private auth: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.loggedIn) {
      localStorage.setItem('authRedirect', state.url);
    }
    if (!this.auth.tokenValid && !this.auth.loggedIn) {
      this.auth.login();
      return false;
    }
    if (this.auth.tokenValid && this.auth.loggedIn) {
      return true;
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAdmin) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}