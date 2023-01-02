import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Tempi } from '../tempi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tableTimesHome: Tempi[] = [];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getTimes().subscribe(dati => {
      this.tableTimesHome = dati;
    });
  }

}
