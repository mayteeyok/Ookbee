import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../emp.service';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService:EmpService,
    private router: Router
   ) { }
  employees: any;
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.userService
      .getEmployees()
      .subscribe(employees => {
        this.employees = employees;
    });
  }
  deleteUser(id) {
    let questionConfirm = confirm("ต้องการลบข้อมูลใช่หรือไม่");
    if (questionConfirm == true) {
      this.userService
        .deleteEmployee(id)
        .subscribe(() => {
        this.getEmployees();
      });
    } else {

    }
    
  }

}
