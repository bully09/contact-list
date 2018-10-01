import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../../dto/credentials';
import { AppService } from '../../services/app-service.service';
import { HttpClient } from '@angular/common/http';
import { URL_ENUM } from '../../dto/url.enum';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class LoginComponent implements OnInit {

    credentials: Credentials;
    loading: boolean;

    constructor(private app: AppService, private http: HttpClient, private router: Router) {
        this.credentials = new Credentials();
    }

    ngOnInit() { }

    login() {
        let url = URL_ENUM.BASE_URL + '/login';
        this.loading = true;
        this.http.post(url, {
            username: this.credentials.username,
            password: this.credentials.password
        }).subscribe(isValid => {
            if (isValid) {
                sessionStorage.setItem('token', btoa(this.credentials.username + ':' + this.credentials.password));
                this.app.authenticated = true;
                this.router.navigate(['/contact']);
            } else {
                this.loading = false;
                alert("Authentication failed.")
            }
        });
    }

}