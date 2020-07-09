import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input() day:number;
  @Input() filtered_trans:any[];
  @Input() info:any;
  usable_trans:any[];
  constructor() { }

  ngOnInit(): void {
    this.checkTransactions(this.day);
  }

  checkTransactions(num:number): void {
    let trans = [];
    let date = new Date(this.info.getYear(), this.info.getMonth(), num);
    let index = 0;
    this.filtered_trans.forEach(transaction => {
      if (date.getTime() === transaction.date.getTime()) {
        trans.push(transaction);
        this.filtered_trans.splice(index, 1);
      }
      index++;
    });
    this.usable_trans = trans;
  }
}