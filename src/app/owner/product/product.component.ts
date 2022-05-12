import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private dbservice:DbserviceService) {}
  productFormGroup=this.fb.group({
    productname:['']

    })
    get fcnotrols()
{
return this.productFormGroup.controls;
}
  onSubmit() {
    this.dbservice.sendproductData(this.productFormGroup.value).then((confirmation:any)=>{console.log(confirmation);
    if(confirmation.alert==="Sucess"){
    alert('Ok')
    }})
    //console.log(this.pumpFormGroup.value);
    }

  ngOnInit(): void {
  }

}

