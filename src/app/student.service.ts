import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stds:Student[]=[
    new Student(1,15,"ahmed",100),
    new Student(2,18,"Mohamed",200)

  ];

  constructor() { }

  getAllStudents(){
    return this.stds;
  }

  addStudent(std:Student){
    this.stds.push(std);
  }

  getStudent(id:number){
    for(let item of this.stds){
      if(item.stdId == id ){
        return item ;
      }
    }

    return null ; 
  }
}
