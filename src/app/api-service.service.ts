import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }


  public getData(filterString: string) {
    return this.httpClient.get(
      `https://api.spaceXdata.com/v3/launches?limit=100${filterString}`
    );
  }



}
