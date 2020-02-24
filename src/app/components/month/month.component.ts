import { Component, OnInit, Input } from '@angular/core';
import { Month } from '../../models/month'

@Component({
  selector: 'app-month',
  template: `
    <h2 class="month-title">{{month.code}}</h2>
    <ul fxLayout="row wrap">
      <li fxFlex="14.28%" *ngFor="let dayweek of dayweeks">
        {{dayweek}}
      </li>
    </ul>
    <ul fxLayout="row wrap">
        <ng-container *ngFor="let day of dayweeks; let i= index">
          <li fxFlex="14.28%" *ngIf=" i < dayweeks.indexOf(month.day)"></li>
        </ng-container>
        <ng-container *ngFor="let day of fill; let i= index">
            <li fxFlex="14.28%">    
                <a [ngClass]=" today.getMonth() == monthindex && today.getDate() == i+1? 'today':
                month.holydays.includes(i+1) ? 'holyday':
                ((i+6)%7)== 6 - (dayweeks.indexOf(month.day))? 'sunday':                 
                'primary'" class="day-item" href="">{{day}}</a>
            </li>
        </ng-container>
    </ul>
  `,
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  fill: number[];
  private _month: Month;
  @Input()
  set month(month: Month) {
    this.fill = Array.from(Array(month.end), (x, index) => index + 1);
    this._month = month;
  }
  get month(): Month { return this._month; }
  constructor() { }
  @Input() monthindex: number;
  today = new Date();
  dayweeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  ngOnInit(): void {
  }

}
