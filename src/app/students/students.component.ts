import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor( private studentService: StudentService) { }

  ngOnInit(): void {
    //Fetch Students
    this.studentService.getStudent()
    .subscribe(
      (successResponse) => {
        console.log(successResponse[0].firstName);
        console.log(successResponse[0].lastName);
        console.log(successResponse[0].address);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

}
