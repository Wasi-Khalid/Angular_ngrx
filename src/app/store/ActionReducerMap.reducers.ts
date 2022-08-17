import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from './application.state';
import currencyReducer from './reducers/currency.reducer';


const reducers: ActionReducerMap<ApplicationState> = {
  currency: currencyReducer
};

export default reducers;