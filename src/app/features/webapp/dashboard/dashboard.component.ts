import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoadCurrency } from 'src/app/store/actions/currency.action';
import * as fromSelector from 'src/app/store/selectors/currency.selector';
import { Currency } from 'src/app/store/models/currency.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: Subscription | any;
  currency$: Observable<Currency[]>;
  result: any;
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

