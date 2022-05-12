import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
  export class ProductviewComponent implements OnInit {

    public dataarray: any[] = [];
    constructor(private regservice: DbserviceService) { }
    ngOnInit(): void {
    this.regservice.viewproductData().then((data: any) => {this.dataarray = data;
    });
    }}
  
