import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editpump',
  templateUrl: './editpump.component.html',
  styleUrls: ['./editpump.component.scss']
})
export class EditpumpComponent implements OnInit {

  p_id=-1;
  public dataarray: any;
  pumpFormEdit!: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private router:Router,private dbservice: DbserviceService) { 
    route.params.subscribe(catid => { this.p_id = catid.id })
  }

  ngOnInit(): void {
    this.pumpFormEdit = this.fb.group({
      Pump_id:[''],
      Pump_name: [''],
      Place:[''],
      License_number:[''],
      State:[''],
      District:[''],
      Owner_name:[''],
      Company:[''],
      Phone_number:[''],
      Email_address:['']
      })
      
  this.dbservice.getpumpid({ p_id: this.p_id }).then((data: any) => {
    this.dataarray = data.data[0];
    this.pumpFormEdit.patchValue(this.dataarray)
    console.log(this.dataarray)
    });}
    
    
    editSubmit() {
      this.dbservice.pumpupdatedata(this.pumpFormEdit.value).then((confirmation: any)=> {
        console.log(confirmation);
      if (confirmation.alert === "Sucess") {
      alert('Ok')
      this.router.navigate(['/home/pumpview'])
      }
      })
      console.log(this.pumpFormEdit.value)
      }
      }
