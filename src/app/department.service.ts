import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private depts:Department[] = [
    new Department(100,"sd","alex"),
    new Department(200,"os","alex"),
    new Department(300,"sd","mansoura"), 
    new Department(400,"ai","smart") ,
    new Department(500,"ai","alex") ,
  ]; 

  getAllDepartments(){
    return this.depts;
  }

  addDepartment(dept:Department){
    this.depts.push(new Department(dept._id,dept.name,dept.location));
  }

  getDepartment(id:number){
    for (let dept of this.depts){
      if (dept._id == id){
        return dept ; 
      }
    }
    return null;
  }

  constructor() { }
}
