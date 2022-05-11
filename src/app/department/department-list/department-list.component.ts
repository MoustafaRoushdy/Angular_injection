 import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  // providers:[{provide:"xyz",useFactory:DepartmentService}]

})
export class DepartmentListComponent implements OnInit {

  depts:Department[]=[];
  constructor(public deptser:DepartmentService ) { }

  ngOnInit(): void {
    this.depts = this.deptser.getAllDepartments();
  }

}
