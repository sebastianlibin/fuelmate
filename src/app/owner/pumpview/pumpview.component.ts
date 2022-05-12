import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-pumpview',
  templateUrl: './pumpview.component.html',
  styleUrls: ['./pumpview.component.scss']
})
export class PumpviewComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private regservice: DbserviceService) { }
  ngOnInit(): void {
  this.regservice.viewData().then((data: any) => {this.dataarray = data;
  });
  }}

