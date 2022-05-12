import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.scss']
})
export class CustomerviewComponent implements OnInit {

  public dataarray: any[] = [];
  constructor(private regservice: DbserviceService,private router:Router) { }
  ngOnInit(): void {
  this.regservice.cviewData().then((data: any) => {this.dataarray = data;
  });
  
  }}