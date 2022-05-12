import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-rateview',
  templateUrl: './rateview.component.html',
  styleUrls: ['./rateview.component.scss']
})
export class RateviewComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private regservice: DbserviceService) { }
  ngOnInit(): void {
  this.regservice.viewrateData().then((data: any) => {this.dataarray = data;
  });
  }}
