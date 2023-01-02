import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Tempi } from '../tempi';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inserisci-tempo',
  templateUrl: './inserisci-tempo.component.html',
  styleUrls: ['./inserisci-tempo.component.css']
})
export class InserisciTempoComponent implements OnInit {

  @ViewChild('sport', {static: false}) sport!: ElementRef;
  @ViewChild('type', {static: false}) type!: ElementRef;

  inserted: boolean = false;

  constructor(private service: ApiService, private main: AppComponent) { }

  ngOnInit(): void {
  }

  insert(){
    let sportn = this.sport.nativeElement.value;
    let typen = this.type.nativeElement.value;
    let startTime = new Date();
    let endTime = new Date();
    let newTime = new Tempi(NaN, this.main.username, sportn, typen, startTime, endTime)
    this.service.timeInsert(newTime).subscribe(inserted => {
      this.inserted = inserted;
    });
  }
}
