import { Currency } from "./models/currency.model";
import { EntityStateInterface } from "./state.interface";


export interface ApplicationState {
    currency: EntityStateInterface<Currency>
}
