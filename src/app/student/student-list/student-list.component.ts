import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(public stdser:StudentService) { }
  stds = this.stdser.getAllStudents();
  ngOnInit(): void {
  }

}
