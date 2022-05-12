import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

    managerdata: any={
      User_name:'',
      Pump_id:'',
      Manager_Name:''
    }

  constructor() { }
}
