import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ApiService } from '../service/api.service';
import { Tempi } from '../tempi';

@Component({
  selector: 'app-classifiche',
  templateUrl: './classifiche.component.html',
  styleUrls: ['./classifiche.component.css']
})
export class ClassificheComponent implements OnInit {

  constructor(private service: ApiService) { }

  tableTimes: Tempi[] = [];

  ngOnInit(): void {
    this.service.getTimes().subscribe(dati => {
      this.tableTimes = dati
      console.log(this.tableTimes);
      console.log(this.tableTimes[0].endTime.valueOf() - this.tableTimes[0].startTime.valueOf());
    });
  }

}
