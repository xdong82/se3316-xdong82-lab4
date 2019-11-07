import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'se3316-xdong82-lab4';

  item = {
    name: String,
    type: String,
    loan_period: Number
  }

  constructor(private http: HttpClient){
    // this.http.post('http://localhost:27018/library/create', this.item).toPromise().then(data => {
    //   console.log(data);
    // })
  }
}
