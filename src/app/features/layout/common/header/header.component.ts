import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoadCurrency } from 'src/app/store/actions/currency.action';
import * as fromSelector from 'src/app/store/selectors/currency.selector';
import { Currency } from 'src/app/store/models/currency.model';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data: Subscription | any;
  currency$: Observable<Currency[]>;
  result: any;
  // temp: BreakpointObserver;
  constructor(
    private store: Store<Currency[]>
  ) {
    this.currency$ = store.select(fromSelector.getCurrency)
   }

  loadCurr(){
    this.store.dispatch(LoadCurrency());
    this.currency$.subscribe((res) => {
      this.result = res;
    })
  }

  ngOnInit(): void {
    this.data = this.loadCurr()
  }

}
