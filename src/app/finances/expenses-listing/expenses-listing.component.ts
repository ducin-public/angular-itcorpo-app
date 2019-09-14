import { Component, Input } from '@angular/core';

import { Expense } from 'src/app/typedef';

@Component({
  selector: 'itcorpo-expenses-listing',
  templateUrl: './expenses-listing.component.html',
  styleUrls: ['./expenses-listing.component.css']
})
export class ExpensesListingComponent {
  @Input()
  expenses: Expense[]
}
