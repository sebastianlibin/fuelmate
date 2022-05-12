import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   save=false;
  constructor(private fb:FormBuilder,private dbservice:DbserviceService) {}
  productrFormGroup=this.fb.group({
    productname:['',Validators.required],
    description:['',Validators.required]

    })
    get fcnotrols()
{
return this.productrFormGroup.controls;
}
  Submit() {
    if (!this.productrFormGroup.valid) {
      this.save = true
      return
      }
      
    this.dbservice.sendproductData(this.productrFormGroup.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
    alert('Ok')
    }})
    //console.log(this.pumpFormGroup.value);
    }

  ngOnInit(): void {
  }

}

