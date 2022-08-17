import { CurrencyActionType } from "../actions/currency.action";
import { Currency } from "../models/currency.model";
import { EntityStateInterface } from "../state.interface";

const initialState: EntityStateInterface<Currency> = {
    loading: false,
    upserting: false,
    upserted: false,
    deleting: false,
    deleted: false,
    entities: []
}

const currencyReducer = (state = initialState, action: any): EntityStateInterface<Currency> => {
    switch (action.type) {
        case CurrencyActionType.LoadCurrency:
            return { ...state, loading: true,}
        case CurrencyActionType.LoadCurrencySuccess:
            return { ...state, entities: action.payload, loading: false,};
        case CurrencyActionType.LoadCurrencyFail:
            return { ...state, loading: true}
        default:
            return state;
    }
}

export default currencyReducer;
