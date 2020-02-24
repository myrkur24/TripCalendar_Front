import { Component, OnInit } from '@angular/core';
import { Month } from '../../models/month';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  // Configure i18n 
  months = [
    new Month('January', [1, 6], 31, 'We'),
    new Month('Febrary', [], 29, 'Sa'),
    new Month('March', [23], 31,'Su'),
    new Month('April', [5, 9, 10, 12], 30,'We'),
    new Month('May', [1, 25], 31,'Fr'),
    new Month('June', [15, 22, 29], 30,'Mo'),
    new Month('July', [20], 31,'We'),
    new Month('August', [7, 17], 31,'Sa'),
    new Month('September', [], 30,'Tu'),
    new Month('October', [12], 31,'Th'),
    new Month('November', [2, 16], 30,'Su'),
    new Month('Dicember', [8, 25], 31,'Tu')
  ]

  ngOnInit(): void {
  }

}
