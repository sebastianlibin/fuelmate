import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
   savestatus=false;
  public valid = false;
  constructor(private fb: FormBuilder, private router: Router,private dbservice: DbserviceService) { }
  adminloginForm = this.fb.group({
    username:['',Validators.required],
    psw:['',Validators.required]
  })
  ngOnInit(): void {
  }
  get fcnotrols() {
    return this.adminloginForm.controls;
  }
  onSubmit() {
    if (!this.adminloginForm.valid) {
      this.savestatus = true
      return
      }
    this.dbservice.SendLogindata(this.adminloginForm.value).then((confirmation: any)=> {
    console.log(confirmation);
    if (confirmation.alert === "Sucess") {
    this.router.navigate(['/home'])
    }
    else {
    alert("Invalid username or Password")
    }
    })
    //console.log(this.adminloginForm.value)
    }
    }