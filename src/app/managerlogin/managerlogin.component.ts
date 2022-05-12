import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.scss']
})
export class ManagerloginComponent implements OnInit {
public valid=false;
savestatus=false;
  constructor(private fb: FormBuilder,private router:Router, private dbservice:DbserviceService,
    private dataService:DataserviceService) { }
  mangerloginForm=this.fb.group({
    uname:['',Validators.required],
    psw:['',Validators.required]
  })

  ngOnInit(): void {
  }
get fcontrols(){
  return this.mangerloginForm.controls;
}
onSubmit() {
  // if (!this.mangerloginForm.valid) {
  //   this.savestatus = true
  //   return
  //   }
    this.dbservice.SendmanagerLogindata(this.mangerloginForm.value).then((confirmation:any) => {
      //console.log(confirmation);
      if (confirmation.managerdetails) {
       // console.log("Hloo")
      this.dataService.managerdata.User_name=confirmation.managerdetails.username;
      this.dataService.managerdata.Pump_id=confirmation.managerdetails.Pump_id;
      this.dataService.managerdata.Manager_Name=confirmation.managerdetails.Manager_Name;
      this.router.navigate(['/mhome'])
  }
  else {
  alert("Invalid username or Password")
  }
  })
  //console.log(this.adminloginForm.value)
  }
  }