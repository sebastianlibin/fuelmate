import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-mhome',
  templateUrl: './mhome.component.html',
  styleUrls: ['./mhome.component.scss']
})
export class MhomeComponent implements OnInit {

  constructor(public dataservice: DataserviceService) { }

  ngOnInit(): void {
  }

}
