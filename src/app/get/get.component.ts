import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

  brews: Object;
  library: Object;
  name: String;
  type:String;
  loan_period: String;

  constructor(private _http: HttpService, private http: HttpClient) { }

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    })

    this._http.getLibrary().subscribe(data => {
      this.library = data;
      console.log(this.library);
    })
  }

  createItem(){
    var item = {
      name: this.name,
      type: this.type,
      loan_period: this.loan_period
    }
    this._http.createItem(item).subscribe(data => {
      console.log(data);
    })
    console.log(this.name);
    console.log(this.type);
    console.log(this.loan_period);
  }

  refreshDb(){
    this._http.getLibrary().subscribe(data => {
      this.library = data;
      console.log(this.library);
    })
  }
}
