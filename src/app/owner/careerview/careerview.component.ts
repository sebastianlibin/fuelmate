import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-careerview',
  templateUrl: './careerview.component.html',
  styleUrls: ['./careerview.component.scss']
})
export class CareerviewComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private regservice: DbserviceService) { }
  ngOnInit(): void {
  this.regservice.careerviewData().then((data: any) => {this.dataarray = data;
  });
  }}