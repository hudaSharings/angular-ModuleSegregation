import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private router: Router) { }
  gotoLogin(){
    this.router.navigateByUrl('/login')
  }
}
