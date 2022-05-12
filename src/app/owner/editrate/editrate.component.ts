import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-editrate',
  templateUrl: './editrate.component.html',
  styleUrls: ['./editrate.component.scss']
})
export class EditrateComponent implements OnInit {
  r_id=-1;
  public dataarray: any;
  editrateform!: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private router:Router,private dbservice: DbserviceService) { 
    route.params.subscribe(catid => { this.r_id = catid.id })
  }

  ngOnInit(): void {
    this.editrateform = this.fb.group({
      Rate_Id:[''],
      ChangeDate: [''],
      Rate_amount	:[''],
      Product_name:['']
      })
      
  this.dbservice.getrateid({ r_id: this.r_id }).then((data: any) => {
    this.dataarray = data.data[0];
    this.editrateform.patchValue(this.dataarray)
    console.log(this.dataarray)
    });}
    
    
    editSubmit() {
      this.dbservice.rateupdatedata(this.editrateform.value).then((confirmation: any)=> {
        console.log(confirmation);
      if (confirmation.alert === "Sucess") {
      alert('Ok')
      this.router.navigate(['/home/viewrate'])
      }
      })
      console.log(this.editrateform.value)
      }
      }
