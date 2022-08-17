
import { Action, createAction, props } from "@ngrx/store";
import { Currency } from "../models/currency.model";

export enum CurrencyActionType {
  LoadCurrency = '[Currency Page] Load Currency',
  LoadCurrencySuccess = '[Currency Page] Load Currency Success',
  LoadCurrencyFail = '[Currency Page] Load Currency Fail',
}

export const LoadCurrency = createAction(
  CurrencyActionType.LoadCurrency,
  );

export const LoadCurrencySuccess = createAction(
  CurrencyActionType.LoadCurrencySuccess,
  props<any>()
)

export const LoadCurrencyFail = createAction(
  CurrencyActionType.LoadCurrencyFail,
  props<{message: string}>()
)
