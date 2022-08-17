import {InjectionToken} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

export const HEADERS = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}
export const API_ENDPOINTS = new InjectionToken<IEndpoints>('api.constants');

export interface IEndpoints {
  currenciesApi: string;
  languagesApi: string;
}

export const Endpoints: IEndpoints = {
  languagesApi: '/languages',
  currenciesApi: '/currencies'
}
