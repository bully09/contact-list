import { Component } from '@angular/core';
import { AppService } from './services/app-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
      if(!app.authenticated) {
        this.router.navigateByUrl('/login');
      }
    }

    logout() {
      this.http.post('logout', {}).subscribe(() => {
          this.app.authenticated = false;
          sessionStorage.setItem('token', '');
          this.router.navigateByUrl('/login');
      });
    }

}