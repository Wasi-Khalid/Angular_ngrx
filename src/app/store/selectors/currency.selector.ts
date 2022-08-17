import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Currency } from "../models/currency.model";
import { EntityStateInterface } from "../state.interface";



export const getCurrencyState = createFeatureSelector<EntityStateInterface<Currency>>('currency');

export const getCurrency = createSelector(
    getCurrencyState,
    (state: EntityStateInterface<Currency>) => state.entities
);
