import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Endpoints, HEADERS } from '../../../shared/constants/api-endpoints'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  getCurrencyUrl = environment.API_URL + Endpoints.currenciesApi;
  getLanguageUrl = environment.API_URL + Endpoints.languagesApi;

  constructor(
    private http: HttpClient
  ) { }

  getCurrency() {
    return this.http.get(this.getCurrencyUrl,HEADERS)  
  }

  getLanguage() {
    return this.http.get(this.getLanguageUrl,HEADERS)
  }

}
