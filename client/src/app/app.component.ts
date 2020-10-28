import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Lovely Dating App';
  users: any


  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('https://localhost:5001/api/user').subscribe(
      response => { this.users = response }, error => { console.log(error) }
    );
    console.log(this.users);
  }

}
