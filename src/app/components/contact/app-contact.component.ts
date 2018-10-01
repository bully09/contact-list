import { Component, OnInit } from '@angular/core';
import { Contact } from '../../dto/contact';
import { AppService } from '../../services/app-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_ENUM } from '../../dto/url.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class ContactComponent implements OnInit {

  list: Contact[] = new Array();
  search: String = '';

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    if(this.app.authenticated) {
        this.loadContacts();
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadContacts() {
    let url = URL_ENUM.BASE_URL + '/contact';

    let headers: HttpHeaders = new HttpHeaders({
        'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    let options = { headers: headers };
    this.http.get(url, options).
        subscribe((data: Contact[]) => {
          this.list = data
        },
        error => {
                alert('Server error');
        }
    );
  }

  ngOnInit() {
    /*if (this.app.authenticated) {
      this.list.push(new Contact(1, 'José Perez León', 30, '55-555-55'));
      this.list.push(new Contact(2, 'Christian Giménez', 24, '55-555-55', 'Chaco Giménez'));
      this.list.push(new Contact(3, 'Jorge Hernández', 12, '55-555-55', 'Burrito Hernández'));
      this.list.push(new Contact(1, 'José Perez León', 30, '55-555-55'));
      this.list.push(new Contact(2, 'Christian Giménez', 24, '55-555-55', 'Chaco Giménez'));
      this.list.push(new Contact(3, 'Jorge Hernández', 12, '55-555-55', 'Burrito Hernández'));
    }*/
  }

}