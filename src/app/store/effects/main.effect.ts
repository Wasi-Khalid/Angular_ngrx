import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {LoadCurrency, LoadCurrencyFail, LoadCurrencySuccess} from '../actions/currency.action';
import { MainService } from 'src/app/features/services/main.service';

@Injectable()
export class MainEffects {

  constructor(
    private actions$: Actions,
    private appService: MainService
  ) {}

  userLogin$ = createEffect(() => {
    
    return this.actions$.pipe(
          ofType(LoadCurrency),
          exhaustMap(action => this.appService.getCurrency().pipe(
              map(response => LoadCurrencySuccess({payload: response})),
              catchError((error: any) => of(LoadCurrencyFail(error)))
              )
          )
      );
    }
  )
}