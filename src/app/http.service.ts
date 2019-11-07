import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private http: HttpClient) { }

  
  
  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getLibrary(){
    return this.http.get('http://localhost:27018/library/itemList');
  }

  createItem(item){
    return this.http.post('http://localhost:27018/library/create', item)

  }
}
