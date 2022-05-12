import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service'; 

@Component({
  selector: 'app-pumpregistration',
  templateUrl: './pumpregistration.component.html',
  styleUrls: ['./pumpregistration.component.scss']
})
export class PumpregistrationComponent implements OnInit {
  status=false;
  constructor(private fb:FormBuilder,private dbservice:DbserviceService) { }
  pumpFormGroup=this.fb.group({
    pumpname:['',Validators.required],
    licensenumber:['',Validators.required],
    place:['',Validators.required],
    state:['',Validators.required],
    district:['',Validators.required],
    ownername:['',Validators.required],
    company:['',Validators.required],
    phonenumber:['',Validators.required],
    emailaddress:['',Validators.required]

    })
    get fcnotrols()
{
return this.pumpFormGroup.controls;
}
  onSubmit() {
    if (!this.pumpFormGroup.valid) {
      this.status = true
      return
      }
    this.dbservice.sendPumpData(this.pumpFormGroup.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
    alert('Ok')
    }})
    //console.log(this.pumpFormGroup.value);
    }

  ngOnInit(): void {
  }

}
