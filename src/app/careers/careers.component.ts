import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

import { DbserviceService } from 'src/app/dbservice.service'; 
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  savestatus=false;
  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }
  career=this.fb.group({
    fname:['',Validators.required],
    email:['', Validators.required],
    aadhar:['', Validators.required],
    dob:['', Validators.required],
    cn:['', Validators.required],
    qualification:['', Validators.required],
    cdate:['', Validators.required],
    gender:['', Validators.required],
    place:['', Validators.required],
    exp:['', Validators.required]
 })
 get fcnotrols()
{
return this.career.controls;
}
onsubmit() {
  if (!this.career.valid) {
    this.savestatus = true
    return
    }
  this.dbservice.sendcareerData(this.career.value).then((confirmation:any)=>{console.log(confirmation);
  if(confirmation.alert==="Sucess"){
  alert('Ok')
  }})
  console.log(this.career.value);
  }
  ngOnInit(): void {
  }

}
