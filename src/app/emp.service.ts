import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Employee } from './employee';
// How to solve .map error => https://code-examples.net/en/q/233c724

@Injectable()
export class EmpService {
  employees=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getEmployees() {
    return this._http.get("http://localhost:8012/AngularPHP/api/select.php/")
      .map(res=>{
        this.checkMe = res;
        console.log("Users: " + res.json());
        if (this.checkMe._body !== "0") {
          return res.json();
        }
      });
  }
  addEmployee(info) {
    return this._http.post("http://localhost:8012/AngularPHP/api/insert.php", info).map(()=>"");
  }
  // addEmployee(employee: Employee){
  //   return this._http.post("http://localhost:8012/AngularPHP/api/insert.php", JSON.stringify(employee));
  // }
  getEmployee(id) {
    return this._http.post("http://localhost:8012/AngularPHP/api/selectone.php/", { 'id': id }).map(res=>res.json());
  }
  deleteEmployee(id) {
    return this._http.post("http://localhost:8012/AngularPHP/api/delete.php/", { 'id': id }).map(()=>this.getEmployees());
  }
  // updateEmployee(info) {
  //   return this._http.post("http://localhost:8012/AngularPHP/api/update.php/", info).map(()=>"");
  // }
  updateEmployee(employee: Employee) {
    console.log("Employee: " + JSON.stringify(employee));
    return this._http.put("http://localhost:8012/AngularPHP/api/update.php/", JSON.stringify(employee));
  }
}
