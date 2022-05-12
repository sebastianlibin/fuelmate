import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import {  ActivatedRoute,Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  p_id=-1;
  public dataarray: any;
  productrFormGroup!: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private router:Router,
    private dbservice: DbserviceService) {
      route.params.subscribe(catid => { this.p_id = catid.id })
    }

  ngOnInit(): void {
    this.productrFormGroup = this.fb.group({
      Product_id:[''],
      Product_name : [''],
      Description: [''],
  })
  this.dbservice.getproductid({ p_id: this.p_id }).then((data: any) => {
    this.dataarray = data.data[0];
    this.productrFormGroup.patchValue(this.dataarray)
    console.log(this.dataarray)
    });}
    EditSubmit() {
      this.dbservice.productupdatedata(this.productrFormGroup.value).then((confirmation: any)=> {
      console.log(confirmation);
      if (confirmation.alert === "Sucess") {
      alert('Ok')
      this.router.navigate(['/home/producteview'])
      }
      })
      console.log(this.productrFormGroup.value)
      }
      deleteSubmit() {
        this.dbservice.productdeletedata(this.productrFormGroup.value).then((confirmation: any)=> {
        console.log(confirmation);
        if (confirmation.alert === "Sucess") {
        alert('Ok')
        this.router.navigate(['/home/producteview'])
        }
        })
        console.log(this.productrFormGroup.value)
        }
      }