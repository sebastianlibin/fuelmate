import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }
  report=this.fb.group({
    Date:['',]
})
oncheck() {

  this.dbservice.getreport(this.report.value).then((confirmation:any)=>{console.log(confirmation);
  if(confirmation.alert==="Sucess"){
  alert('Ok')
  }})
  }
  ngOnInit(): void {
  }

}
