import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-managerview',
  templateUrl: './managerview.component.html',
  styleUrls: ['./managerview.component.scss']
})
export class ManagerviewComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private regservice: DbserviceService) { }
  ngOnInit(): void {
  this.regservice.careerviewData().then((data: any) => {this.dataarray = data;
  });
  }}